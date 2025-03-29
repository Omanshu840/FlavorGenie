import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
    apiKey: process.env.REACT_APP_GEMINI_API_KEY
});

export async function generateRecipe(userQuery) {
    const promptText = `
        You are an expert chef and food researcher. Generate a recipe for ${userQuery}.
        
        Generate a structured JSON output containing:
        - Recipe title
        - Description
        - Calories
        - timeToCook
        - List of ingredients {name, quantity, iconImageLink}
        - list of steps (string)
        - 3 recommended YouTube video links for making the dish.
        - list of Wikipedia page titles which EXISTS for this recipe or similar recipe (Max 5)
        
        Example Output (Output should strictly be in following JSON structure ONLY):
        {
            title: "",
            description: "",
            calories: "",
            timeToCook: "",
            ingredients: [
                {
                    name: "Water",
                    quantity: "1 Cup",
                },
                {
                    name: "Flour",
                    quantity: "200 grams",
                },
            ],
            steps: [
                "Peel and devein 1 lb of shrimp.\nMince 4 garlic cloves and chop fresh parsley.",
                "In a large skillet, melt 3 tbsp of unsalted butter over medium heat.",
                "Add minced garlic to the butter and sauté until fragrant.",
            ],
            youtubeLinks: [
                "link1", "link2", "link3"
            ],
            wikipediaTitles: ["Butter_chicken", "Chicken_tikka_masala", "Chicken tikka"]
        }
        
        Ensure your response is ONLY JSON in above the JSON format with no additional text. Following rules should be followed while returning JSON response:
        1. title should be a string (max 2-3 words)
        2. description should be a string.
        3. calories should be a string (just number of calories).
        4. timeToCook should be a string (XX Mins / X Hrs XX Min).
        5. ingredients should be a list of objects, with each object having three keys (name, quantity)
        6. steps is a list of strings
        7. youtubeLinks is a list of strings
        8. wikipediaTitles is a list of strings. Case of the characters in each string should match with the wikipedia title that exists. Replace the space in the title with underscore. 
        Strictly follow the above rules.
    `;

    const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: promptText,
    });

    let recipe = response.text;
    recipe = recipe.replace(/^```json/, '').replace(/```$/, '').trim();
    recipe = JSON.parse(recipe);

    let imageFound = false;

    for(let i = 0; i<recipe.wikipediaTitles.length; i++) {
        const wikiTitle = recipe.wikipediaTitles[i];
        if(!imageFound) {
            const imgLink = await getImage(wikiTitle);
            if(imgLink) {
                recipe.image = imgLink;
                imageFound = true;
            }
        }
    }

    return recipe;
}

export const generateRecipeFromIngredients = async (ingredients) => {
    let query = "which can be made from following ingredients: ";
    ingredients.forEach((ingredient, index) => {
        query = `${query} ${index+1}.${ingredient}`
    })
    return await generateRecipe(query);
}

export const generateImage = async (userQuery) => {
    const promptText = `
        You are an expert chef and food researcher. Generate list of Wikipedia page titles which EXISTS for ${userQuery}.
        
        Generate a structured JSON output containing:
        - list of Wikipedia page titles which EXISTS for this recipe or similar recipe (Max 5)
        
        Example Output (Output should strictly be in following JSON structure ONLY):
        {
            wikipediaTitles: ["Butter_chicken", "Chicken_tikka_masala", "Chicken tikka"]
        }
        
        Ensure your response is ONLY JSON in above the JSON format with no additional text. Following rules should be followed while returning JSON response:
        1. wikipediaTitles is a list of strings. Case of the characters in each string should match with the wikipedia title that exists. Replace the space in the title with underscore. 
        Strictly follow the above rules.
    `;

    const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: promptText,
    });

    let recipe = response.text;
    recipe = recipe.replace(/^```json/, '').replace(/```$/, '').trim();
    recipe = JSON.parse(recipe);

    for(let i = 0; i<recipe.wikipediaTitles.length; i++) {
        const wikiTitle = recipe.wikipediaTitles[i];
        const imgLink = await getImage(wikiTitle);
        if(imgLink) {
            return imgLink;
        }
    }
    return "";
}

export const getImage = async (name) => {
    try {
        name = removeSpace(name);
        const response = await fetch(`https://en.wikipedia.org/api/rest_v1/page/media-list/${name}`)
        const data = await response.json();
        const imageURL = removeLeadingSlashes(data?.items[0]?.srcset[0]?.src);
        return imageURL
    } catch {
        return null;
    }
}

function removeSpace(input) {
    return input.trim().replace(/\s+/g, "_");
}

function removeLeadingSlashes(str) {
    return `https://${str.replace(/^\/\//, "")}`; // ^ ensures it only removes from the start
}

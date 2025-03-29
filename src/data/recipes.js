const orgRecipes = [
    {
        image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/07/chicken-butter-masala-recipe.jpg",
        title: "Butter Chicken",
        description: "A rich and creamy North Indian dish made with marinated chicken, tomatoes, butter, and aromatic spices, simmered to perfection.",
        calories: 490,
        recooks: 4.8,
        rating: 4.9,
        ingredients: [
            { name: "Chicken", quantity: "500 gms", description: "Tender boneless chicken pieces", icon: "https://example.com/chicken.png" },
            { name: "Tomato", quantity: "2 pc", description: "Freshly pureed tomatoes", icon: "https://example.com/tomato.png" },
            { name: "Butter", quantity: "1 tbsp", description: "Rich and creamy butter", icon: "https://example.com/butter.png" },
            { name: "Cream", quantity: "1/2 Cup", description: "Smooth and thick fresh cream", icon: "https://example.com/cream.png" },
            { name: "Spices", quantity: "2 tbsp", description: "Aromatic blend of Indian spices", icon: "https://example.com/spices.png" },
        ],
        timeToCook: "40 Mins",
        steps: [
            "Marinate chicken with yogurt, lemon juice, and spices for 1 hour.",
            "Cook the marinated chicken until tender.",
            "Prepare a tomato-based gravy with butter, cream, and spices.",
            "Combine the chicken with the gravy and simmer for 10 minutes.",
        ],
    },
    {
        image: "https://healthynibblesandbits.com/wp-content/uploads/2020/01/Saag-Paneer-FF.jpg",
        title: "Palak Paneer",
        description: "A nutritious and flavorful Indian dish made with fresh spinach and soft paneer, blended with aromatic spices.",
        calories: 280,
        recooks: 4.6,
        rating: 4.8,
        ingredients: [
            { name: "Paneer", quantity: "1 Cup", icon: "https://example.com/paneer.png" },
            { name: "Spinach", quantity: "2 Cups", icon: "https://example.com/spinach.png" },
            { name: "Garlic", quantity: "4 Cloves", icon: "https://example.com/garlic.png" },
            { name: "Onion", quantity: "1 Medium", icon: "https://example.com/onion.png" },
            { name: "Spices", quantity: "1 Tbsp", icon: "https://example.com/spices.png" },
        ],
        timeToCook: "30 Mins",
        steps: [
            "Blanch spinach and blend into a smooth paste.",
            "Sauté onions, garlic, and spices in a pan.",
            "Add the spinach paste and cook for 5 minutes.",
            "Add paneer cubes and simmer for 10 minutes.",
        ],
    },
    {
        image: "https://www.cubesnjuliennes.com/wp-content/uploads/2021/03/Best-Mutton-Biryani-Recipe.jpg",
        title: "Mutton Biryani",
        description: "A fragrant and flavorful layered rice dish made with tender marinated mutton, aromatic basmati rice, and a blend of traditional spices.",
        calories: 600,
        recooks: 5.0,
        rating: 4.9,
        ingredients: [
            { name: "Mutton", quantity: "500g", icon: "https://example.com/mutton.png" },
            { name: "Basmati Rice", quantity: "2 Cups", icon: "https://example.com/rice.png" },
            { name: "Yogurt", quantity: "1 Cup", icon: "https://example.com/yogurt.png" },
            { name: "Spices", quantity: "2 Tbsp", icon: "https://example.com/spices.png" },
            { name: "Onion", quantity: "2 Large", icon: "https://example.com/onion.png" },
        ],
        timeToCook: "90 Mins",
        steps: [
            "Marinate mutton with yogurt and spices for 2 hours.",
            "Cook rice separately until 70% done.",
            "Cook mutton with onions and masala until tender.",
            "Layer mutton and rice, then dum cook for 30 minutes.",
        ],
    },
    {
        image: "https://static.toiimg.com/thumb/54289752.cms?imgsize=495844&width=800&height=800",
        title: "Masala Dosa",
        description: "A crispy South Indian crepe made from fermented rice batter, filled with a spiced potato mixture, and served with chutney and sambar.",
        calories: 250,
        recooks: 4.7,
        rating: 4.8,
        ingredients: [
            { name: "Rice Batter", quantity: "2 Cups", icon: "https://example.com/batter.png" },
            { name: "Potato", quantity: "2 Medium", icon: "https://example.com/potato.png" },
            { name: "Onion", quantity: "1 Large", icon: "https://example.com/onion.png" },
            { name: "Spices", quantity: "1 Tbsp", icon: "https://example.com/spices.png" },
            { name: "Curry Leaves", quantity: "10 Leaves", icon: "https://example.com/curry-leaves.png" },
        ],
        timeToCook: "40 Mins",
        steps: [
            "Prepare dosa batter and ferment overnight.",
            "Cook mashed potatoes with spices for the filling.",
            "Spread the batter on a hot pan to form a dosa.",
            "Fill with potato masala and serve with chutney and sambar.",
        ],
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs8mJG3ZNL_FtXEei3hx735B3VGlDy5q-9hw&s",
        title: "Rajma Chawal",
        description: "A classic North Indian dish made with red kidney beans cooked in a flavorful tomato-based gravy, served with steamed rice.",
        calories: 380,
        recooks: 4.5,
        rating: 4.7,
        ingredients: [
            { name: "Kidney Beans", icon: "https://example.com/rajma.png" },
            { name: "Rice", icon: "https://example.com/rice.png" },
            { name: "Tomato", icon: "https://example.com/tomato.png" },
            { name: "Garlic", icon: "https://example.com/garlic.png" },
            { name: "Onion", icon: "https://example.com/onion.png" },
        ],
        timeToCook: "60 Mins",
        steps: [
            "Soak kidney beans overnight and pressure cook until soft.",
            "Prepare a tomato-based gravy with onions and spices.",
            "Add cooked kidney beans to the gravy and simmer.",
            "Serve hot with steamed rice.",
        ],
    },
    {
        image: "https://vegecravings.com/wp-content/uploads/2016/12/Aloo-Poha-Recipe-Step-By-Step-Instructions-scaled.jpg",
        title: "Poha",
        description: "A light and flavorful Indian breakfast dish made with flattened rice, peanuts, and aromatic spices.",
        calories: 220,
        recooks: 4.4,
        rating: 4.6,
        ingredients: [
            { name: "Flattened Rice", icon: "https://example.com/poha.png" },
            { name: "Onion", icon: "https://example.com/onion.png" },
            { name: "Green Chili", icon: "https://example.com/chili.png" },
            { name: "Curry Leaves", icon: "https://example.com/curry-leaves.png" },
            { name: "Peanuts", icon: "https://example.com/peanuts.png" },
        ],
        timeToCook: "15 Mins",
        steps: [
            "Rinse poha and let it soften.",
            "Sauté onions, green chilies, and peanuts in a pan.",
            "Add poha and mix well with turmeric and salt.",
            "Garnish with fresh coriander and serve hot.",
        ],
    },
    {
        image: "https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/01cf72fa714c88dfe8d77145d6cf1091",
        title: "Chole Bhature",
        description: "A classic North Indian dish featuring spicy chickpea curry served with deep-fried, fluffy bhature.",
        calories: 450,
        recooks: 4.9,
        rating: 5.0,
        ingredients: [
            { name: "Chickpeas", icon: "https://example.com/chickpeas.png" },
            { name: "Flour", icon: "https://example.com/flour.png" },
            { name: "Spices", icon: "https://example.com/spices.png" },
            { name: "Tomato", icon: "https://example.com/tomato.png" },
            { name: "Yogurt", icon: "https://example.com/yogurt.png" },
        ],
        timeToCook: "50 Mins",
        steps: [
            "Soak chickpeas overnight and pressure cook until soft.",
            "Prepare a rich, spicy gravy with tomatoes and spices.",
            "Knead dough for bhature and let it rest for 1 hour.",
            "Fry bhature until golden brown and serve with chole.",
        ],
    }
]

const getRecipes = () => {
    try {
        const localRecipes = JSON.parse(localStorage.getItem('recipes'));
        return localRecipes.length ? localRecipes : orgRecipes;
    } catch {
        return orgRecipes;
    }
}

const recipes = getRecipes();

export default recipes;

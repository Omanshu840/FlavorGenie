const orgRecipes = [
    {
        image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/07/chicken-butter-masala-recipe.jpg",
        title: "Butter Chicken",
        calories: 490,
        recooks: 4.8,
        rating: 4.9,
        ingredients: [
            { name: "Chicken", quantity: "1 Cup", icon: "https://example.com/chicken.png" },
            { name: "Tomato", quantity: "1 Cup", icon: "https://example.com/tomato.png" },
            { name: "Butter", quantity: "1 Cup", icon: "https://example.com/butter.png" },
            { name: "Cream", quantity: "1 Cup", icon: "https://example.com/cream.png" },
            { name: "Spices", quantity: "1 Cup", icon: "https://example.com/spices.png" },
        ],
        timeToCook: 40,
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
        calories: 280,
        recooks: 4.6,
        rating: 4.8,
        ingredients: [
            { name: "Paneer", icon: "https://example.com/paneer.png" },
            { name: "Spinach", icon: "https://example.com/spinach.png" },
            { name: "Garlic", icon: "https://example.com/garlic.png" },
            { name: "Onion", icon: "https://example.com/onion.png" },
            { name: "Spices", icon: "https://example.com/spices.png" },
        ],
        timeToCook: 30,
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
        calories: 600,
        recooks: 5.0,
        rating: 4.9,
        ingredients: [
            { name: "Mutton", icon: "https://example.com/mutton.png" },
            { name: "Basmati Rice", icon: "https://example.com/rice.png" },
            { name: "Yogurt", icon: "https://example.com/yogurt.png" },
            { name: "Spices", icon: "https://example.com/spices.png" },
            { name: "Onion", icon: "https://example.com/onion.png" },
        ],
        timeToCook: 90,
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
        calories: 250,
        recooks: 4.7,
        rating: 4.8,
        ingredients: [
            { name: "Rice Batter", icon: "https://example.com/batter.png" },
            { name: "Potato", icon: "https://example.com/potato.png" },
            { name: "Onion", icon: "https://example.com/onion.png" },
            { name: "Spices", icon: "https://example.com/spices.png" },
            { name: "Curry Leaves", icon: "https://example.com/curry-leaves.png" },
        ],
        timeToCook: 40,
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
        timeToCook: 60,
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
        timeToCook: 15,
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
        timeToCook: 50,
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

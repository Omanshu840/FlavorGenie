import React, { useState } from "react";
import { Card, Button, Form, Container } from "react-bootstrap";
import { X } from "react-bootstrap-icons";
import { FaWandMagicSparkles } from "react-icons/fa6";
import * as Colors from "../css/colors";
import { Shadows } from "../css/shadows";
import SearchBar from "./SearchBar";
import { generateRecipe, generateRecipeFromIngredients } from "../service";
import { SCREENS } from "../data/navLinks";

const RecipeGenerator = (props) => {
    const [ingredients, setIngredients] = useState([
        "Chicken",
        "Egg",
        "Onion",
        "Garlic",
    ]);
    const [newIngredient, setNewIngredient] = useState("");
    const [userQuery, setUserQuery] = useState("");

    const addIngredient = (e) => {
        e.preventDefault();
        if (
            newIngredient.trim() !== "" &&
            !ingredients.includes(newIngredient)
        ) {
            setIngredients([...ingredients, newIngredient]);
            setNewIngredient("");
        }
    };

    const removeIngredient = (ingredient) => {
        setIngredients(ingredients.filter((item) => item !== ingredient));
    };

    const onGenerateRecipe = async () => {
        props.setLoading(true);
        const response = await generateRecipe(userQuery);
        props.changeNewRecipe(response);
        props.setLoading(false);
        props.changeScreen(SCREENS.ADD_RECIPE);
    };

    const onGenerateRecipeFromIngredients = async () => {
        props.setLoading(true);
        const response = await generateRecipeFromIngredients(ingredients);
        props.changeNewRecipe(response);
        props.setLoading(false);
        props.changeScreen(SCREENS.ADD_RECIPE);
    }

    return (
        <Container className="px-4 pt-5">
            <div className="mb-5">
                <h1 className="">What would you like to cook today?</h1>
                <SearchBar
                    placeholder="Enter your query to generate recipe"
                    onSearch={onGenerateRecipe}
                    value={userQuery}
                    onChange={(e) => setUserQuery(e.target.value)}
                />
                <Button
                    className="w-100 mt-1"
                    style={{
                        backgroundColor: Colors.PR2,
                        borderRadius: "15px",
                        border: "none",
                    }}
                    onClick={onGenerateRecipe}
                >
                    ✨ Generate Recipe
                </Button>
            </div>
            <div className="mt-4">
                <Card
                    style={{
                        backgroundColor: Colors.BG1,
                        color: Colors.PR1,
                        borderRadius: "20px",
                        padding: "15px",
                        maxWidth: "350px",
                        margin: "auto",
                        border: "none",
                        boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
                    }}
                >
                    <h4 className="mb-3">Not sure what to cook?</h4>
                    <div className="d-flex align-items-center mb-2">
                        <FaWandMagicSparkles
                            size={24}
                            color={Colors.PR1}
                            className="me-2"
                        />
                        <span style={{ fontWeight: "500" }}>
                            {"We'll conjure a recipe from your ingredients"}
                        </span>
                    </div>
                    <div
                        className="p-3"
                        style={{
                            backgroundColor: "#FFFFFF",
                            borderRadius: "20px",
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "5px",
                        }}
                    >
                        {ingredients.map((ingredient, index) => (
                            <span
                                key={index}
                                className="px-2 py-1 d-flex align-items-center"
                                style={{
                                    backgroundColor: Colors.BG1,
                                    color: Colors.PR1,
                                    borderRadius: "15px",
                                    boxShadow: Shadows.Box_Shadow1,
                                }}
                            >
                                <span style={{ marginRight: "5px" }}>
                                    {ingredient}
                                </span>
                                <X
                                    size={14}
                                    color="#D9534F"
                                    onClick={() => removeIngredient(ingredient)}
                                    style={{ cursor: "pointer" }}
                                />
                            </span>
                        ))}
                        <Form
                            onSubmit={addIngredient}
                            className="d-flex align-items-center"
                        >
                            <Form.Control
                                type="text"
                                placeholder="Add Ingredient"
                                value={newIngredient}
                                onChange={(e) =>
                                    setNewIngredient(e.target.value)
                                }
                                style={{
                                    border: "none",
                                    outline: "none",
                                    boxShadow: "none",
                                    width: "120px",
                                }}
                            />
                        </Form>
                    </div>
                    <Button
                        className="w-100 mt-3"
                        style={{
                            backgroundColor: Colors.PR2,
                            borderRadius: "15px",
                            border: "none",
                        }}
                        onClick={onGenerateRecipeFromIngredients}
                    >
                        ✨ Generate Recipe
                    </Button>
                </Card>
            </div>
        </Container>
    );
};

export default RecipeGenerator;

import React, { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { X } from "react-bootstrap-icons";
import { Shadows } from "../css/shadows";
import * as Colors from "../css/colors";
import { SCREENS } from "../data/navLinks";
import { generateImage } from "../service";

const CreateRecipe = (props) => {
    const { newRecipe, addRecipe, changeScreen } = props;

    const [recipeDetails, setRecipeDetails] = useState(newRecipe);

    const onFieldChange = (field, value) => {
        setRecipeDetails((currValue) => ({
            ...currValue,
            [field]: value,
        }));
    };

    const addIngredient = () => {
        setRecipeDetails((currValue) => ({
            ...currValue,
            ingredients: [...currValue.ingredients, {}],
        }));
    };

    const deleteIngredient = (index) => {
        setRecipeDetails((currValue) => ({
            ...currValue,
            ingredients: currValue.ingredients.filter(
                (ingredient, ingIndex) => ingIndex !== index
            ),
        }));
    };

    const updateIngredient = (index, field, value) => {
        setRecipeDetails((currValue) => ({
            ...currValue,
            ingredients: currValue.ingredients.map((ingredient, ingIndex) => {
                if (ingIndex === index) {
                    ingredient[field] = value;
                }
                return ingredient;
            }),
        }));
    };

    const addStep = () => {
        setRecipeDetails((currValue) => ({
            ...currValue,
            steps: [...currValue.steps, ""],
        }));
    };

    const updateStep = (index, value) => {
        setRecipeDetails((currValue) => ({
            ...currValue,
            steps: currValue.steps.map((step, stepIndex) => {
                if (stepIndex === index) {
                    step = value;
                }
                return step;
            }),
        }));
    };

    const onUpload = async () => {
        if(!recipeDetails.image) {
            props.setLoading(true);
            recipeDetails.image = await generateImage(recipeDetails.title);
            props.setLoading(false);
        }
        addRecipe(recipeDetails);
        changeScreen(SCREENS.RECIPE);
    };

    return (
        <div style={styles.container}>
            <h5 style={styles.header}>Upload Recipe</h5>

            {recipeDetails.image && (
                <img
                    className="my-3"
                    src={recipeDetails.image}
                    alt={recipeDetails.title}
                    style={styles.imgStyle}
                />
            )}

            <Form.Control
                type="text"
                placeholder="Choose Title of your recipe"
                style={styles.input}
                value={recipeDetails.title}
                onChange={(e) => onFieldChange("title", e.target.value)}
            />

            <Form.Control
                as="textarea"
                placeholder="Tell us something more about this recipe"
                style={styles.textarea}
                value={recipeDetails.description}
                onChange={(e) => onFieldChange("description", e.target.value)}
            />

            <div style={{ ...styles.row, columnGap: "10px" }}>
                <Form.Control
                    type="text"
                    placeholder="Preparation Time"
                    style={{ ...styles.input }}
                    value={recipeDetails.timeToCook}
                    onChange={(e) =>
                        onFieldChange("timeToCook", e.target.value)
                    }
                />
                <Form.Control
                    type="text"
                    placeholder="Calories"
                    style={{ ...styles.input }}
                    value={recipeDetails.calories}
                    onChange={(e) => onFieldChange("calories", e.target.value)}
                />
            </div>

            <h5 style={styles.subHeader}>Add Ingredients</h5>
            {recipeDetails.ingredients.map((ingredient, index) => (
                <InputGroup key={index} style={styles.ingredientRow}>
                    <Form.Control
                        type="text"
                        placeholder="Ingredient"
                        value={ingredient.name}
                        style={styles.ingredientInput}
                        onChange={(e) =>
                            updateIngredient(index, "name", e.target.value)
                        }
                    />
                    <Form.Control
                        type="text"
                        placeholder="Quantity"
                        value={ingredient.quantity}
                        style={styles.ingredientInput}
                        onChange={(e) =>
                            updateIngredient(index, "quantity", e.target.value)
                        }
                    />
                    <InputGroup.Text onClick={() => deleteIngredient(index)}>
                        <X />
                    </InputGroup.Text>
                </InputGroup>
            ))}
            <Button
                variant="outline-secondary"
                size="sm"
                onClick={addIngredient}
                style={styles.addButton}
            >
                + Add
            </Button>

            <h5 style={styles.subHeader}>Preparation</h5>
            {recipeDetails.steps.map((step, index) => (
                <div key={index} style={styles.stepContainer}>
                    <span style={styles.stepLabel}>Step {index + 1}</span>
                    <Form.Control
                        as="textarea"
                        placeholder="Add the details of this step"
                        style={styles.textarea}
                        value={step}
                        onChange={(e) => updateStep(index, e.target.value)}
                    />
                </div>
            ))}
            <Button
                variant="outline-secondary"
                size="sm"
                onClick={addStep}
                style={styles.addButton}
            >
                + Add
            </Button>

            <Button style={styles.publishButton} onClick={onUpload}>
                Upload
            </Button>
        </div>
    );
};

// Inline Styles
const styles = {
    container: {
        maxWidth: 400,
        margin: "auto",
        padding: 20,
    },
    header: { textAlign: "center", fontWeight: "bold", marginBottom: 15 },
    uploadBox: {
        border: "1px dashed #aaa",
        textAlign: "center",
        padding: 20,
        borderRadius: 15,
        cursor: "pointer",
        backgroundColor: "white",
        boxShadow: Shadows.Box_Shadow2,
    },
    imgStyle: {
        width: "100%",
        height: "150px",
        objectFit: "cover",
        boxShadow: Shadows.Box_Shadow2,
        borderRadius: 15,
    },
    input: {
        border: "1px dashed #aaa",
        marginBottom: 10,
        borderRadius: 15,
        padding: 10,
        boxShadow: Shadows.Box_Shadow2,
        backgroundColor: Colors.WHITE,
    },
    textarea: {
        border: "1px dashed #aaa",
        marginBottom: 10,
        borderRadius: 15,
        padding: 15,
        boxShadow: Shadows.Box_Shadow2,
        backgroundColor: Colors.WHITE,
    },
    row: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
        fontSize: 14,
    },
    select: {
        width: "100%",
        borderRadius: 5,
        border: "1px solid #ccc",
        padding: 8,
    },
    subHeader: { fontWeight: "bold", marginTop: 15, marginBottom: 15 },
    ingredientRow: { marginBottom: 10, borderRadius: 15 },
    ingredientInput: { flex: 1, border: "1px dashed #aaa" },
    stepContainer: { marginBottom: 10 },
    stepLabel: {
        fontWeight: "bold",
        fontSize: 14,
        marginBottom: 5,
        display: "block",
    },
    publishButton: {
        width: "100%",
        backgroundColor: Colors.PR1,
        border: "none",
        padding: 10,
        borderRadius: 15,
        color: "#fff",
        fontSize: 16,
        marginTop: 10,
    },
    addButton: {
        backgroundColor: Colors.PR2,
        border: "none",
        color: Colors.WHITE,
        marginBottom: "10px",
    },
};

export default CreateRecipe;

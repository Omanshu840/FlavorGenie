import React from "react";
import { Card, Button, Row, Col, Image } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { PlayCircleFill } from "react-bootstrap-icons";
import "../css/recipeDetails.css";
import * as Colors from "../css/colors";
import { Shadows } from "../css/shadows";
import { Accordion, useAccordionButton } from "react-bootstrap";
import { ChevronDown } from "react-bootstrap-icons";
// import YouTubeEmbed from "./YoutubeEmbed";

export const RecipeSteps = ({ steps }) => {
    return (
        <Accordion
            defaultActiveKey={steps.map((step, index) => index.toString())}
            className="recipe-steps"
            alwaysOpen
        >
            {steps.map((step, index) => (
                <Card key={index} className="step-card">
                    <Card.Header>
                        <CustomToggle eventKey={index.toString()}>
                            <div>
                                <span className="step-number">
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                                {/* <span className="step-title">{"Step "}{index+1}</span> */}
                            </div>
                            <ChevronDown className="chevron-icon" />
                        </CustomToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey={index.toString()}>
                        <Card.Body>
                            {/* <ul className="step-details">
                {step.details.map((detail, i) => ( */}
                            <div>{step}</div>
                            {/* ))} */}
                            {/* </ul> */}
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            ))}
        </Accordion>
    );
};

// Custom toggle for accordion
const CustomToggle = ({ children, eventKey }) => {
    const decoratedOnClick = useAccordionButton(eventKey);
    return (
        <div className="custom-toggle" onClick={decoratedOnClick}>
            {children}
        </div>
    );
};

const RecipeDetails = ({ recipe, onBack }) => {
    console.log(recipe);

    return (
        <div className="recipe-container">
            {/* Image Section */}
            <div className="image-section">
                <Image
                    src={recipe.image}
                    alt={recipe.title}
                    className="recipe-image"
                />
                <Button
                    variant="light"
                    className="back-btn"
                    style={{
                        borderRadius: "50%",
                        width: "40px",
                        height: "40px",
                    }}
                    onClick={onBack}
                >
                    <FaArrowLeft />
                </Button>
            </div>

            {/* Card Section */}
            <Card className="recipe-card" style={{ borderRadius: "30px" }}>
                <Card.Body>
                    {/* Title & Like Button */}
                    <div className="d-flex justify-content-between align-items-center">
                        <Card.Title className="recipe-title">
                            {recipe.title}
                        </Card.Title>
                        {/* <FaHeart className="heart-icon" /> */}
                    </div>
                    <Card.Text className="calories">
                        {recipe.calories}cal
                    </Card.Text>

                    {/* Stats Section
              <Row className="stats">
                <Col className="text-center">
                  <h5 className="stats-value">+{recipe.recooks}M</h5>
                  <p className="stats-label">recook this recipe</p>
                </Col>
                <Col className="text-center">
                  <h5 className="stats-value">⭐ {recipe.rating}</h5>
                  <p className="stats-label">rating for this recipe</p>
                </Col>
              </Row> */}

                    {/* Ingredients Section */}
                    <h5 className="ingredients-heading">Ingredients</h5>
                    <Row className="ingredient-list">
                        {recipe.ingredients.map((ingredient, index) => (
                            <Col
                                key={index}
                                xs={6}
                                sm={4}
                                md={3}
                                className="p-2"
                            >
                                <div className="ingredient-item" style={{boxShadow: Shadows.Box_Shadow2, backgroundColor: Colors.BG1}}>
                                    <div className="ingredient-name">
                                        {ingredient.name}
                                    </div>
                                    <div className="ingredient-quantity" style={{color: Colors.PR4}}>
                                        {ingredient.quantity}
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>

                    {/* Cooking Time Button */}
                    <Button
                        className="cook-btn w-100"
                        style={{ backgroundColor: Colors.PR2, border: "none" }}
                    >
                        <PlayCircleFill className="clock-icon" />{" "}
                        {recipe.timeToCook} mins to cook
                    </Button>

                    <h5 className="ingredients-heading mt-4">Steps</h5>
                    <RecipeSteps steps={recipe.steps} />

                    {/* <YouTubeEmbed videoUrl="https://www.youtube.com/watch?v=dQw4w9WgXcQ" /> */}
                </Card.Body>
            </Card>
        </div>
    );
};

export default RecipeDetails;

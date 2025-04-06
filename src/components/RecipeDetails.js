import React, { useState } from "react";
import { Card, Button, Row, Col, Image, Container } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import "../css/recipeDetails.css";
import * as Colors from "../css/colors";
import { Shadows } from "../css/shadows";
import { Accordion, useAccordionButton } from "react-bootstrap";
import { ChevronDown } from "react-bootstrap-icons";
import { PlayCircle } from "react-bootstrap-icons";
import { ClockFill, Fire } from "react-bootstrap-icons";
import VideoListContainer from "./VideoList";

const FooterButton = ({ onClick }) => {
    return (
        <div
            style={{
                position: "fixed",
                bottom: "100px",
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 1000,
            }}
        >
            <Button
                className="d-flex align-items-center px-4 py-2 rounded-pill"
                style={{
                    backgroundColor: Colors.PR2,
                    border: "none",
                    boxShadow: Shadows.Box_Shadow2,
                }}
                onClick={onClick}
            >
                <PlayCircle size={20} className="me-2" />
                Watch Videos
            </Button>
        </div>
    );
};

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
                            <div style={{ fontSize: "14px" }}>{step}</div>
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

const RecipeStats = ({ recipe }) => {
    return (
        <Container fluid className="py-3 text-center" style={{}}>
            <Row className="justify-content-center">
                <Col xs={5} className="d-flex flex-column align-items-center">
                    <ClockFill size={18} color="#FFA500" />
                    <strong className="mt-2">{recipe.timeToCook}</strong>
                    <span style={{ fontSize: "12px", opacity: 0.7 }}>
                        Cooking Time
                    </span>
                </Col>

                {/* Faint separator */}
                <Col xs="auto" className="d-flex align-items-center">
                    <div
                        style={{
                            height: "20px",
                            width: "1px",
                            backgroundColor: Colors.PR1,
                        }}
                    ></div>
                </Col>

                <Col xs={5} className="d-flex flex-column align-items-center">
                    <Fire size={18} color="#FFA500" />
                    <strong className="mt-2">{recipe.calories}</strong>
                    <span style={{ fontSize: "12px", opacity: 0.7 }}>
                        Calories
                    </span>
                </Col>
            </Row>
        </Container>
    );
};

const RecipeDetailsTabs = ({ recipe }) => {
    const tabs = ["Ingredients", "Instructions"];
    const [activeTab, setActiveTab] = useState("Ingredients");

    return (
        <Container className="text-center mt-4">
            {/* Tab Buttons */}
            <Row
                className="justify-content-center"
                style={{
                    backgroundColor: Colors.WHITE,
                    boxShadow: Shadows.Box_Shadow3,
                    borderRadius: "20px",
                    padding: "5px",
                }}
            >
                {tabs.map((tab) => (
                    <Col xs="6" style={{ padding: "0px" }}>
                        <Button
                            onClick={() => setActiveTab(tab)}
                            style={{
                                backgroundColor:
                                    activeTab === tab
                                        ? Colors.PR2
                                        : Colors.WHITE,
                                color: activeTab === tab ? "#fff" : Colors.PR2,
                                borderRadius: "20px",
                                border: "none",
                                padding: "10px 20px",
                                fontWeight: "bold",
                                transition: "0.3s",
                                width: "100%",
                            }}
                        >
                            {tab}
                        </Button>
                    </Col>
                ))}
            </Row>

            {/* Tab Content */}
            <Row className="mt-2">
                <Col>
                    {activeTab === "Ingredients" ? (
                        <Row className="ingredient-list">
                            {recipe.ingredients.map((ingredient, index) => (
                                <Col
                                    key={index}
                                    xs={4}
                                    sm={4}
                                    md={3}
                                    className="p-2"
                                >
                                    <div
                                        className="ingredient-item"
                                        style={{
                                            boxShadow: Shadows.Box_Shadow2,
                                            backgroundColor: Colors.BG1,
                                        }}
                                    >
                                        <div className="ingredient-name">
                                            {ingredient.name}
                                        </div>
                                        <div
                                            className="ingredient-quantity"
                                            style={{ color: Colors.PR4 }}
                                        >
                                            {ingredient.quantity}
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    ) : (
                        <RecipeSteps steps={recipe.steps} />
                    )}
                </Col>
            </Row>
        </Container>
    );
};

const RecipeDetails = ({ recipe, onBack }) => {
    const [showPanel, setShowPanel] = useState(false);

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
                        <div className="recipe-title">{recipe.title}</div>
                        {/* <FaHeart className="heart-icon" /> */}
                    </div>
                    <RecipeStats recipe={recipe} />

                    <div
                        style={{
                            textAlign: "center",
                            fontSize: "14px",
                            color: Colors.PR3,
                        }}
                    >
                        {recipe.description}
                    </div>

                    <RecipeDetailsTabs recipe={recipe} />
                </Card.Body>
            </Card>
            {!showPanel &&
                <FooterButton onClick={() => setShowPanel(true)} />
            }
            <VideoListContainer showPanel={showPanel} setShowPanel={setShowPanel} videos={recipe.youtubeLinks}/>
        </div>
    );
};

export default RecipeDetails;

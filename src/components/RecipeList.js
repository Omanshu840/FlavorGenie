import React, { useState } from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import { Fire, ClockFill } from "react-bootstrap-icons";
import { Shadows } from "../css/shadows";
import * as Colors from "../css/colors";
import RecipeDetails from "./RecipeDetails";
import SearchBar from "./SearchBar";

const RecipeCard = (props) => {
    return (
        <Card
            style={{
                backgroundColor: Colors.BG1,
                border: "none",
                color: "white",
                borderRadius: "20px",
                textAlign: "center",
                padding: "20px",
                boxShadow: Shadows.Box_Shadow2,
                position: "relative",
                marginTop: '10px'
            }}
        >
            {/* Recipe Image */}
            <div style={{ 
                position: "absolute",
                top: "-40px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                backgroundColor: Colors.PR2,
                padding: "5px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}>
                <img
                    src={props.image}
                    alt={props.title}
                    style={{
                        width: "80px",
                        height: "80px",
                        borderRadius: "50%",
                        objectFit: "cover",
                        boxShadow: Shadows.Box_Shadow2
                    }}
                />
            </div>

            {/* Title */}
            <h6 style={{ marginTop: "30px", fontWeight: "bold" }}>{props.title}</h6>

            {/* Recipe Details */}
            <Row
                style={{
                    marginTop: "10px",
                    fontSize: "12px",
                    opacity: "0.9",
                }}
            >
                <Col xs={5}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "5px",
                    }}
                >
                    <ClockFill color={Colors.PR2} />
                    <div style={{color: Colors.PR2}}>{props.timeToCook}</div>
                </Col>

                <Col xs="auto" className="d-flex align-items-center">
                    <div
                        style={{
                            height: "10px",
                            width: "1px",
                            backgroundColor: Colors.PR2,
                        }}
                    ></div>
                </Col>

                <Col xs={5}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                        gap: "5px",
                    }}
                >
                    <Fire color={Colors.PR2}  />
                    <div style={{color: Colors.PR2}}>{props.calories} cal</div>
                </Col>
            </Row>
        </Card>
    );
};

const RecipeList = (props) => {
    const views = {
        LIST: "list",
        DETAIL: "DETAIL",
    };

    const [view, setView] = useState(views.LIST);
    const [details, setDetails] = useState({});

    const onDetails = (recipe) => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
        setDetails(recipe);
        setView(views.DETAIL);
    };

    if (view === views.LIST) {
        return (
            <Container style={{ maxWidth: "400px", marginTop: "40px" }}>
                <SearchBar />
                <Row className="mt-4 gx-3 gy-5" style={{justifyContent: 'center'}}>
                    {props.recipes.map((recipe, index) => (
                        <Col key={index} xs={6} sm={6} md={4} lg={3} onClick={() => onDetails(recipe)}>
                            <RecipeCard {...recipe} />
                        </Col>
                    ))}
                </Row>
            </Container>
        );
    } else if (view === views.DETAIL) {
        return (
            <RecipeDetails
                recipe={details}
                onBack={() => setView(views.LIST)}
            />
        );
    } else {
        return <></>;
    }
};

export default RecipeList;

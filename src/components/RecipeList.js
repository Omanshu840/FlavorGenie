import React, { useState } from "react";
import { Card, Badge, Row, Col, Container } from "react-bootstrap";
import { Fire, ClockFill} from "react-bootstrap-icons";
import { Shadows } from "../css/shadows";
import * as Colors from "../css/colors";
import RecipeDetails from "./RecipeDetails";
import SearchBar from "./SearchBar";


const RecipeList = (props) => {

    const views = {
        "LIST": "list",
        "DETAIL": "DETAIL"
    }

    const [view, setView] = useState(views.LIST);
    const [details, setDetails] = useState({});

    const onDetails = (recipe) => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
        setDetails(recipe);
        setView(views.DETAIL);
    }

    if(view === views.LIST) {
        return (
            <Container style={{ maxWidth: "400px", marginTop: "20px" }}>
            <SearchBar/>
            {props.recipes.map((recipe, index) => (
                <Card
                    key={index}
                    style={{ marginBottom: "15px", padding: "10px", borderRadius: "10px", border: 'none', boxShadow: Shadows.Box_Shadow2}}
                    onClick={() => onDetails(recipe)}
                >
                <Row>
                    <Col xs={4}>
                    <img
                        src={recipe.image}
                        alt={recipe.title}
                        style={{ width: "100%", height: '100px', objectFit: 'cover', borderRadius: "10px" }}
                    />
                    </Col>
                    <Col xs={8}>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <h6 style={{ fontWeight: "bold", margin: 0 }}>{recipe.title}</h6>
                        {recipe.tag && (
                        <Badge bg="success" style={{ fontSize: "12px" }}>
                            {recipe.tag}
                        </Badge>
                        )}
                    </div>
                    <p style={{ fontSize: "14px", color: Colors.PR3, margin: "5px 0", display:'flex', columnGap: '10px'}}>
                        <div><Fire style={{marginBottom: '3px'}}/> {recipe.calories} Kcal</div>
                        <div><ClockFill style={{marginBottom: '3px'}}/> {recipe.timeToCook} Mins</div>
                    </p>
                    <Badge style={{ fontSize: "12px", marginRight: "5px", backgroundColor: Colors.PR2}}>
                        {recipe.ingredients.length} Ingredients
                    </Badge>
                    <Badge bg="light" text="dark" style={{ fontSize: "12px" }}>
                        {recipe.steps.length} steps
                    </Badge>
                    </Col>
                </Row>
                </Card>
            ))}
            </Container>
        );
    }
    else if(view === views.DETAIL) {
        return (<RecipeDetails recipe={details} onBack={() => setView(views.LIST)}/>)
    }
    else {
        return (<></>);
    }
};

export default RecipeList;

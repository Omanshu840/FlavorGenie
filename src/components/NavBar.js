import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { navItems, SCREENS } from "../data/navLinks";
import * as Colors from "../css/colors";
import { FaPlus } from "react-icons/fa";
import { initialState } from "../redux/reducer";

export const FloatingButton = (props) => {
    const buttonStyle = {
        position: "fixed",
        bottom: "95px",
        right: "20px",
        width: "50px",
        height: "50px",
        backgroundColor: Colors.PR2,
        color: Colors.WHITE,
        border: "none",
        borderRadius: "50%",
        fontSize: "18px",
        fontWeight: "bold",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
        cursor: "pointer",
        transition: "all 0.3s ease",
    };

    return (
        <button
            style={buttonStyle}
            onClick={() => {
                props.changeNewRecipe(initialState.newRecipe);
                props.changeScreen(SCREENS.ADD_RECIPE);
            }}
        >
            <FaPlus />
        </button>
    );
};

const NavBar = (props) => {
    const [activeTab, setActiveTab] = useState("home");

    return (
        <>
            {props.screen !== SCREENS.ADD_RECIPE && (
                <FloatingButton {...props} />
            )}
            <Navbar
                fixed="bottom"
                style={styles.navbar}
                className="justify-content-around py-2"
            >
                <Nav className="w-100 d-flex justify-content-around">
                    {navItems.map((item, index) => (
                        <Nav.Link
                            key={item.id}
                            className="text-center"
                            onClick={() => {
                                setActiveTab(item.id);
                                props.changeScreen(item.id);
                            }}
                            style={{
                                color:
                                    activeTab === item.id
                                        ? Colors.PR2
                                        : Colors.PR1,
                            }}
                        >
                            {activeTab === item.id ? (
                                <item.activeIcon.type
                                    size={24}
                                    color={Colors.PR2}
                                />
                            ) : (
                                <item.icon.type size={24} color={Colors.PR1} />
                            )}
                            <div style={{ fontSize: "12px" }}>{item.label}</div>
                        </Nav.Link>
                    ))}
                </Nav>
            </Navbar>
        </>
    );
};

// Styles
const styles = {
    navbar: {
        backgroundColor: Colors.WHITE,
        boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.1)",
        paddingBottom: 10,
        paddingTop: 10,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    plusButtonContainer: {
        position: "absolute",
        top: -25, // Adjust for proper floating
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 10,
    },
};

export default NavBar;

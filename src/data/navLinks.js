import React from "react";
import { House, HouseFill, Clipboard2, Clipboard2Fill } from "react-bootstrap-icons";

export const SCREENS = {
    "HOME": "home",
    "RECIPE": "recipe",
    "ADD_RECIPE": "addRecipe",
    "PROFILE": "profile"
}

export const navItems = [
    { id: SCREENS.HOME, icon: <House size={24} />, activeIcon: <HouseFill size={24} />, label: "Home" },
    { id: SCREENS.RECIPE, icon: <Clipboard2 size={24} />, activeIcon: <Clipboard2Fill size={24} />, label: "Recipes" }
];
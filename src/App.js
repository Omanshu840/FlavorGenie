import React from "react";
import { connect } from "react-redux";
import NavBar from "./components/NavBar";
import RecipeGenerator from "./components/RecipeGenerator";
import { SCREENS } from "./data/navLinks";
import {
    AddRecipeAction,
    ChangeNewRecipeAction,
    ChangeScreenAction,
    SetLoadingAction,
} from "./redux/actions";
import CreateRecipe from "./components/CreateRecipe";
import RecipeList from "./components/RecipeList";
import Loader from "./components/Loader";

const App = (props) => {
    return (
        <div className="app">
            {props.isLoading && <Loader />}
            {props.screen === SCREENS.HOME && (
                <RecipeGenerator
                    changeNewRecipe={props.changeNewRecipe}
                    changeScreen={props.changeScreen}
                    setLoading={props.setLoading}
                />
            )}
            {props.screen === SCREENS.RECIPE && (
                <RecipeList
                    recipes={props.recipes}
                    changeScreen={props.changeScreen}
                />
            )}
            {props.screen === SCREENS.ADD_RECIPE && (
                <CreateRecipe
                    newRecipe={props.newRecipe}
                    addRecipe={props.addRecipe}
                    changeScreen={props.changeScreen}
                    setLoading={props.setLoading}
                />
            )}
            <NavBar changeScreen={props.changeScreen} screen={props.screen} changeNewRecipe={props.changeNewRecipe}/>
        </div>
    );
};

const mapStateToProps = (state) => ({
    screen: state.screen,
    recipes: state.recipes,
    newRecipe: state.newRecipe,
    isLoading: state.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
    changeScreen: (screen) => dispatch(ChangeScreenAction(screen)),
    changeNewRecipe: (newRecipe) => dispatch(ChangeNewRecipeAction(newRecipe)),
    addRecipe: (newRecipe) => dispatch(AddRecipeAction(newRecipe)),
    setLoading: (isLoading) => dispatch(SetLoadingAction(isLoading)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

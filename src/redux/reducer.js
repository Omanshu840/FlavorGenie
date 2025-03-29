import { SCREENS } from "../data/navLinks";
import recipes from "../data/recipes";
import { Actions } from "./actions";

export const initialState = {
    isLoading: false,
    alert: {
        showAlert: false,
        alertMessage: "",
    },
    screen: SCREENS.HOME,
    recipes: recipes,
    newRecipe: {
        title: "",
        description: "",
        calories: "",
        timeToCook: "",
        ingredients: [
            {},
        ],
        steps: [
            ""
        ],
    },
};

const rootReducer = (state, action) => {
    switch (action.type) {
        case Actions.SET_LOADING: {
            return {
                ...state,
                isLoading: action.payload
            }
        }
        case Actions.CHANGE_SCREEN: {
            window.scrollTo({ top: 0, left: 0, behavior: "instant" });
            return {
                ...state,
                screen: action.payload,
            };
        }

        case Actions.SET_ALERT: {
            return {
                ...state,
                alert: action.payload,
            };
        }

        case Actions.CLOSE_ALERT: {
            return {
                ...state,
                alert: {
                    showAlert: false,
                    alertMessage: "",
                },
            };
        }

        case Actions.CHANGE_NEW_RECIPE: {
            return {
                ...state,
                newRecipe: action.payload,
            };
        }

        case Actions.ADD_RECIPE: {
            localStorage.setItem("recipes", JSON.stringify([action.payload, ...state.recipes]));
            return {
                ...state,
                recipes: [action.payload, ...state.recipes]
            }
        }

        default:
            return state;
    }
};

export default rootReducer;

export const Actions = {
    CHANGE_SCREEN: "CHANGE_SCREEN",
    SET_ALERT: "SET_ALERT",
    CLOSE_ALERT: "CLOSE_ALERT",
    CHANGE_NEW_RECIPE: "CHANGE_NEW_RECIPE",
    ADD_RECIPE: "ADD_RECIPE",
    SET_LOADING: "SET_LOADING"
};

export const SetLoadingAction = (isLoading) => ({
    type: Actions.SET_LOADING,
    payload: isLoading
})

export const ChangeScreenAction = screen => ({
    type: Actions.CHANGE_SCREEN,
    payload: screen
})

export const SetAlertAction = alert => ({
    type: Actions.SET_ALERT,
    payload: alert
})

export const CloseAlertAction = () => ({
    type: Actions.CLOSE_ALERT
})

export const ChangeNewRecipeAction = (newRecipe) => ({
    type: Actions.CHANGE_NEW_RECIPE,
    payload: newRecipe
})

export const AddRecipeAction = (newRecipe) => ({
    type: Actions.ADD_RECIPE,
    payload: newRecipe
})
import API from "./API";

export const CantinaGeekApi = {
    async getAllRecipes() {
        try {
            const responsesRecipes = await API().get('recipes');
            const recipes = responsesRecipes.data;
        
            return recipes.map(recipe => {
                return recipe
            });

        } catch (err) {
            console.log(err)
        }
    },

    async getRecipe(idRecipe) {
        try {
            const responseRecipe = await API().get('recipe/'+ idRecipe);
            const recipe = responseRecipe.data;
        
            return recipe
        } catch (err) {
            console.log(err);
        }
    },

    createRecipe(formData) {
        return API().post('recipes', formData);
    },
    updateRecipe(idRecipe) {
        return API().put(`recipe/${idRecipe}`);
    },

    async deleteRecipe(idRecipe) {
        try {
            const responseDelete = await API().delete(`recipe/${idRecipe}`);
            const recipe = responseDelete.data;
            return recipe
        } catch (err) {

            console.log(err.response.data.errorMessage);
        }
    }
};
<template>
    <div class="container mt-5">
        <h2>Ajouter une recette</h2>
        <form class="row needs-validation" @change="handleForm()" novalidate>
            <div class="mb-3">
                <label for="titre" class="form-label">Titre</label>
                <input type="text" class="form-control" v-model="recipe.titre" id="titre">
            </div>
            <div class="mb-3">
                <label for="description" class="form-label">Description</label>
                <textarea class="form-control" id="description" rows="3" v-model="recipe.description"></textarea>
            </div>
            <div class="row my-3">
                <div class="mb-3 col-md-4">
                    <label for="tempsPreparation" class="form-label">Temps Préparation</label>
                    <input type="number" min="1" class="form-control" v-model="recipe.tempsPreparation" id="tempsPreparation">
                </div>
                <div class="mb-3 col-md-4">
                    <label for="personnes" class="form-label">Nombre de personnes</label>
                    <input type="number" min="1" class="form-control" v-model="recipe.personnes" id="personnes">
                </div>
                <div class="mb-3 col-md-4">
                    <label for="niveau" class="form-label">Niveau de difficulté</label>
                    <select class="form-select" id="niveau" v-model="recipe.niveau" aria-label="Default select example">
                        <option selected>Choisissez le niveau</option>
                        <option value="padawan">Padawan</option>
                        <option value="jedi">Jedi</option>
                        <option value="maitre">Maître</option>
                    </select>
                </div>
            </div>
            <div class="mb-3">
                <label for="etape" class="form-label">Ingredients</label>
                <div class="row" id="ingredients">
                    <div class="sm-mb-3 col-md-2">
                        <input type="text" class="form-control" id="quantite" v-model="recipe.ingredients" />
                    </div>
                    <div class="sm-mb-3 col-md-9">
                        <input type="text" class="form-control" id="ingredient" />
                    </div>
                    <button type="button" class="btn-close" aria-label="Close"></button>
                </div>
                <button type="button" class="mt-2 btn btn-info">Ajouter un ingredient</button>
            </div>
            <div class="mb-3">
                <label for="etape" class="form-label">Etapes</label>
                <div class="d-flex align-items-center" id="etape">
                    <textarea class="form-control me-2" id="etape" rows="2" v-model="recipe.etapes"></textarea> 
                    <button type="button" @click="removeStep()" class="btn-close" aria-label="Close"></button>
                </div>
                <button type="button" @click="addFields('étape')" class="mt-2 btn btn-info">Ajouter une etape</button>
            </div>
            <label for="basic-url" class="form-label">Lien de l'image</label>
            <div class="input-group mb-3">
                <span class="input-group-text" id="photo">https ou http</span>
                <input type="text" class="form-control" id="basic-url" aria-describedby="photo" placeholder="http://localhost:9000/images/dustcrepe.jpg">
            </div>
            <div>
                <button ton type="submit" class="btn btn-primary">Créer une recette</button>
            </div>
        </form>
    </div>
</template>

<script>
const formData = {
    titre: '',
    description: '',
    niveau: '',
    personnes: 0,
    tempsPreparation: 5,
    ingredients: [["", ""]],
    etapes: [""],
    photo: "http://localhost:9000/images/dustcrepe.jpg"
}
export default {
 name: 'AddRecipe',
 data() {
    return {
        recipe: formData
    };
 },
 methods: {
    handleForm(event, index = null,) {
        
    },
    addFields(option) {
        console.log(option, this.recipe);
    },
    removeFormFields(option, i) {
       console.log(option, i);
    }
 }
}
</script>

<style scoped>
  .wrapper {
    width: 50%;
    margin: auto;
  }
</style>
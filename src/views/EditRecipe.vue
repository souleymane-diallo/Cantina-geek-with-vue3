<template>
  <div class="container-sm mt-5">
   <h2>Ajouter une recette</h2>
    <form class="row g-3 needs-validation" novalidate>
        <div class="mb-3">
            <label for="titre" class="form-label">Titre</label>
            <input type="text" class="form-control" id="titre">
        </div>
        <div class="mb-3">
            <label for="description" class="form-label">Description</label>
            <textarea class="form-control" id="description" rows="3"></textarea>
        </div>
        <div class="row my-3">
            <div class="mb-3 col-md-4">
                <label for="tempsPreparation" class="form-label">Temps</label>
                <input type="number" min="1" class="form-control" id="tempsPreparation">
            </div>
            <div class="mb-3 col-md-4">
                <label for="personnes" class="form-label">Nombre de personnes</label>
                <input type="number" min="1" class="form-control" id="personnes">
            </div>
            <div class="mb-3 col-md-4">
                <label for="niveau" class="form-label">Niveau de difficulté</label>
                <select class="form-select" aria-label="Default select example">
                    <option selected>Choisissez le niveau</option>
                    <option value="padawan">Padawan</option>
                    <option value="jedi">Jedi</option>
                    <option value="maitre">Maître</option>
                </select>
            </div>
        </div>
        <div class="mb-3">
            <label for="etape" class="form-label">Etape</label>
            <textarea class="form-control" id="etape" rows="3"></textarea>
            <but ton type="submit" class="mt-2 btn btn-info"> <i class="bi bi-plus me-2"></i> Ajouter une etape</but>
        </div>
        <label for="basic-url" class="form-label">Lien de l'image</label>
        <div class="input-group mb-3">
            <span class="input-group-text" id="photo">https ou http</span>
            <input type="text" class="form-control" id="basic-url" aria-describedby="photo" placeholder="http://localhost:9000/images/dustcrepe.jpg">
        </div>
        <div>
            <but ton type="submit" class="btn btn-primary">Créer une recette</but>
        </div>
    </form>
  </div>
</template>

<script>
export default {
 name: 'EditRecipe',
 data() {
    return {
        recipe: {

        }
    };
 }
}
</script>

<style scoped>
 
</style>
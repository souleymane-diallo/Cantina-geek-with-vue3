<template>
  <div  class="container">
    <div class="card mt-3">
      <div class="row g-0">
        <div class="col-md-5">
          <img :src="recipe.photo"  class="img-fluid rounded-start" :alt="recipe.titre">
          <div class="d-flex justify-content-between mt-4 px-2">
            <router-link to="/modifier-recette" class="btn btn-outline-info"><i class="bi bi-pencil-square pe-2"></i>Modifier</router-link>
            <button type="button" class="btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
  <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
</svg>
            Supprimer</button>
          </div>
           <ModalConfirmDeleteVue :idRecipe="recipe.id" />  
        </div>  
        <div class="col-md-7">
        <div class="card-body">
          <h5 class="card-title">{{ recipe.titre }}</h5>
          <div class="d-flex justify-content-between my-2">
            <div>
              <span class="pe-2 fs-4 text-info"><i class="bi bi-alarm"></i></span>
              <span>{{ recipe.tempsPreparation }} min</span>
            </div>
            <div>
              <span class="pe-2 fs-4 text-info"><i class="bi bi-person"></i></span>
              <span>{{ recipe.personnes }}</span>
            </div>
            <div>
              <span class="pe-2 fs-4 text-info"><i class="bi bi-person"></i></span>
              <span>{{ recipe.niveau }}</span>
            </div>
            </div>
          <p class="card-text">{{ recipe.description }}</p>
          <ul class="list-group">
            <h4>Ingredients</h4>
            <li v-for="ingredient in recipe.ingredients" :key="ingredient[0]" class="list-group-item">{{ ingredient[0]}} {{ ingredient[1]}}</li>
          </ul>
          <ul class="list-group mt-2">
            <h4>Etapes</h4>
            <li v-for="(etape , index) in recipe.etapes" :key="index" class="list-group-item">{{ index + 1 }} - {{ etape }} </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import { CantinaGeekApi } from '../services/CantinaGeekAPI';
import ModalConfirmDeleteVue from '../components/ModalConfirmDelete.vue';
export default {
    components: { ModalConfirmDeleteVue },
    data() {
        return {
          recipe: {}
        };
    },
    mounted() {
      const id = this.$route.params.recipeId;
      CantinaGeekApi.getRecipe(id).then(recipe => {
        this.recipe = recipe;
      })
    },
}
</script>

<style>
</style>
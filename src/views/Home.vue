<template>
  <main class="container mt-5">
    <ul class="row p-0">
      <li class="col col-sm-6 col-md-4" v-for="recipe in recipes" :key="recipe.id">
        <RouterLink :to="'/recipe/'+ recipe.id">
          <RecipeCardVue
            :recipe="{
              photo: recipe.photo,
              titre: recipe.titre,
              personnes: recipe.personnes,
              niveau: recipe.niveau,
              tempsPreparation: recipe.tempsPreparation
            }"
          />
          <ModalConfirmDeleteVue :idRecipe="recipe.id" />  
       </RouterLink>
      </li>
    </ul> 
  </main>
</template>

<script>
// @ is an alias to /src
import RecipeCardVue from '@/components/RecipeCard.vue'
import ModalConfirmDeleteVue from '../components/ModalConfirmDelete.vue';
import { CantinaGeekApi } from '../services/CantinaGeekAPI';

export default {
  name: 'Home',
  components: { RecipeCardVue, ModalConfirmDeleteVue },
  data() {
    return {
      recipes: [],
    };
  },

  mounted() {
    CantinaGeekApi.getAllRecipes().then((recipes) => {
      this.recipes = recipes;
    });
  }
}
</script>
<style scoped>
 ul {
  list-style: none;
 }
 ul li a {
	text-decoration: none;
  }
</style>

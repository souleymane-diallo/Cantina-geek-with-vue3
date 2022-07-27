<template>
	<div class="card mb-3" style="width: 22rem;">
		<img :src="recipe.photo" :alt="recipe.titre" class="card-img-top">
		<div class="card-body">
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
			<h5 class="card-title">{{ recipe.titre }} </h5>
			<div class="d-flex justify-content-between mt-4">
				<router-link to="/modifier-recette" class="btn btn-outline-info"><i class="bi bi-pencil-square pe-2"></i>Modifier</router-link>
				<button type="button" class="btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
  <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
</svg>
				Supprimer</button>
			</div>
    <!--<ModalConfirmDeleteVue /> -->
		</div>
	</div>
</template>

<script>
//import ModalConfirmDeleteVue from '../components/ModalConfirmDelete.vue';
export default {
  name: 'RecipeCardVue',
  //components: { ModalConfirmDeleteVue },
  props: {
	recipe: {
		titre: String,
		photo: String,
		niveau: String,
		personnes: Number,
		tempsPreparation: Number
	}
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>

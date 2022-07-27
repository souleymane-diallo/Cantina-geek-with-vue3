import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import RecipeDetails from '@/views/RecipeDetails.vue'
import AddRecipe from '@/views/AddRecipe.vue'
import EditRecipe from '@/views/AddRecipe.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/recipe/:recipeId',
    name: 'recipe-details',
    component: RecipeDetails
  },
  {
    path: '/ajouter-recette',
    name: 'ajouter',
    component: AddRecipe
  },
  {
    path: '/modifier-recette',
    name: 'modifier',
    component: EditRecipe
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <router-link class="navbar-brand fs-2 me-5" to="/">Cantina Geek</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link class="nav-link active fs-5" to="/ajouter-recette">Créer une recette</router-link>
        </div>
      </div>
    </div>
  </nav>
  <router-view/>
</template>

<style>
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

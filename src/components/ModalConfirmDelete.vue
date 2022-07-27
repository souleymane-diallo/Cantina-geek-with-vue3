<template>
    <div class="modal fade" id="exampleModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Supprimer une recette</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <p>Etes-vous sûr de vouloir supprimer cette recette ?</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Non</button>
                <button type="button" class="btn btn-warning" @click="onDelete(idRecipe)" data-bs-dismiss="modal">Oui</button>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import { CantinaGeekApi } from '../services/CantinaGeekAPI';
export default {
    name: 'ModalConfirmDelete',
    props: {
        idRecipe: Number
    },
    methods: {
        onDelete(idRecipe) {
            CantinaGeekApi.deleteRecipe(idRecipe).then();
            this.$router.push('/');
            console.log(idRecipe);
        }
    }
}
</script>

<style>

</style>
<template>
    <form @submit.prevent="handleSubmit">
        <error v-if="error" :error="error" />
        <h3>Busca personalizada</h3>

        <div class="form-group">
            <label>Cidade</label>
            <input type="text" class="form-control" v-model="cidade" placeholder="Cidade"/>
        </div>

        <div class="form-group">
            <label>Unidade federativa</label>
            <input type="text" class="form-control" v-model="unidade_federativa" placeholder="Unidade Federativa"/>
        </div>
        
        <div class="form-group">
        <label>Preferências</label>
            <input type="checkbox" id="parques" value="parques" v-model="preferencias">
            <label for="parques">Parques</label>
            <input type="checkbox" id="clinicas_veterinarias" value="clinicas_veterinarias" v-model="preferencias">
            <label for="clinicas_veterinarias">Clínicas veterinárias</label>
            <input type="checkbox" id="ongs" value="ongs" v-model="preferencias">
            <label for="ongs">ONGs</label>
            <input type="checkbox" id="pet_shops" value="pet_shops" v-model="preferencias">
            <label for="pet_shops">Pet shops</label>
            <input type="checkbox" id="playgrounds" value="playgrounds" v-model="preferencias">
            <label for="playgrounds">Playgrounds</label>
        </div>

        <button class="btn btn-primary btn-block">Salvar</button>
    </form>
</template>

<script>

    import axios from 'axios'
    import Error from './Error.vue'

    export default {
        name: 'Search',
        components: {
            Error
        },
        data() {
            return {
                cidade: '',
                unidade_federativa: '',
                preferencias: []
            }
        },
        methods: {
            async handleSubmit() {
                try{
                    await axios.post('search', { // envia data para backend
                        cidade: this.cidade,
                        unidade_federativa: this.unidade_federativa,
                        preferencias: this.preferencias
                    });

                    this.$router.push('/');
                } catch (e) {
                    this.error = 'Erro ocorrido'
                }
            }
        }
    }
</script>

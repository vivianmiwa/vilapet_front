<template>
    <form @submit.prevent="handleSubmit">
        <error v-if="error" :error="error" />
        <h3>Registrar Pet</h3>

        <div class="form-group">
            <label>Qual seu pet?</label>
            <select v-model="tipo_pet">
                <option selected>Cachorro</option>
                <option>Gato</option>
                <option>Hamster/Porquinho da índia</option>
                <option>Peixe</option>
                <option>Pássaro</option>
            </select>
        </div>

        <div class="form-group">
            <label>Nome do pet</label>
            <input type="text" class="form-control" v-model="nome_pet" placeholder="Nome do pet"/>
        </div>
        
        <div class="form-group">
            <label>Faixa etária</label>
            <select v-model="faixa_etaria">
                <option selected>Filhote</option>
                <option>Adulto</option>
                <option>Idoso</option>
            </select>
        </div>

        <div class="form-group">
            <label>Sexo</label>
            <select v-model="sexo_pet">
                <option selected>Fêmea</option>
                <option>Macho</option>
            </select>
        </div>

        <button class="btn btn-primary btn-block">Registrar</button>
    </form>
</template>

<script>

    import axios from 'axios'
    import Error from './Error.vue'

    export default {
        name: 'RegisterPet',
        components: {
            Error
        },
        data() {
            return {
                tipo_pet: '',
                nome_pet: '',
                faixa_etaria_pet: '',
                sexo_pet: ''
            }
        },
        methods: {
            async handleSubmit() {
                try{
                    await axios.post('register_pet', { // envia data para backend
                        tipo_pet: this.tipo_pet,
                        nome_pet: this.nome_pet,
                        faixa_etaria_pet: this.faixa_etaria_pet,
                        sexo_pet: this.sexo_pet
                    });

                    this.$router.push('/');
                } catch (e) {
                    this.error = 'Erro ocorreu'
                }
            }
        }
    }


</script>
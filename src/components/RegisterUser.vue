<template>
    <form @submit.prevent="handleSubmit">
        <error v-if="error" :error="error" />
        <h3>Registrar</h3>

        <div class="form-group">
            <label>Nome</label>
            <input type="text" class="form-control" v-model="nome" placeholder="Nome"/>
        </div>

        <div class="form-group">
            <label>Sobrenome</label>
            <input type="text" class="form-control" v-model="sobrenome" placeholder="Sobrenome"/>
        </div>
        
        <div class="form-group">
            <label>Data de nascimento</label>
            <input type="date" class="form-control" v-model="data_nascimento"/>
        </div>

        <div class="form-group">
            <label>Genero</label>
            <select v-model="genero">
                <option selected>Feminino</option>
                <option>Masculino</option>
                <option>Outro</option>
            </select>
        </div>

        <button class="btn btn-primary btn-block">Avançar</button>
    </form>
</template>

<script>

    import axios from 'axios'
    import Error from './Error.vue'

    export default {
        name: 'RegisterUser',
        components: {
            Error
        },
        data() {
            return {
                primeiro_nome: '',
                ultimo_nome: '',
                data_nascimento: '',
                genero: ''
            }
        },
        methods: {
            async handleSubmit() {
                try{
                    await axios.post('register_user', { // envia data para backend
                        primeiro_nome: this.primeiro_nome,
                        ultimo_nome: this.ultimo_nome,
                        data_nascimento: this.data_nascimento,
                        genero: this.genero
                    });

                    this.$router.push('/register');
                } catch (e) {
                    this.error = 'Erro ocorreu'
                }
            }
        }
    }


</script>

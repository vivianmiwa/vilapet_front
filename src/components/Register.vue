<template>
    <form @submit.prevent="handleSubmit">
        <error v-if="error" :error="error" />
        <h3>Registrar</h3>

        <div class="form-group">
            <label>E-mail</label>
            <input type="email" class="form-control" v-model="email" placeholder="Email"/>
        </div>

        <div class="form-group">
            <label>Senha</label>
            <input type="password" class="form-control" v-model="senha" placeholder="Confirmar senha"/>
        </div>
        
        <div class="form-group">
            <label>Repetir senha</label>
            <input type="password" class="form-control" v-model="repetir_senha" placeholder="Repetir senha"/>
        </div>

        <button class="btn btn-primary btn-block">Registrar</button>
    </form>
</template>

<script>

    import axios from 'axios'
    import Error from './Error.vue'

    export default {
        name: 'Register',
        components: {
            Error
        },
        data() {
            return {
                email: '',
                senha: '',
                error: ''
            }
        },
        methods: {
            async handleSubmit() {
                try{
                    await axios.post('register', { // envia data para backend
                        email: this.email,
                        senha: this.senha,
                    });

                    this.$router.push('/register_pet');
                } catch (e) {
                    this.error = 'Erro ocorrido'
                }
            }
        }
    }
</script>

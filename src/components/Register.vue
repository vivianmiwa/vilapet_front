<template>
    <form @submit.prevent="handleSubmit">
        <error v-if="error" :error="error" />
        <h3>Registrar</h3>

        <div class="form-group">
            <label>Nome de usuário</label>
            <input type="text" class="form-control" v-model="nome_usuario" placeholder="Nome de usuário"/>
        </div>

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
                nome_usuario: '',
                email: '',
                senha: '',
                repetir_senha: '',
                error: ''
            }
        },
        methods: {
            async handleSubmit() {
                try{
                    await axios.post('register', { // envia data para backend
                        nome_usuario: this.nome_usuario,
                        email: this.email,
                        senha: this.senha,
                        repetir_senha: this.repetir_senha
                    });

                    this.$router.push('/login');
                } catch (e) {
                    this.error = 'Erro ocorreu'
                }
            }
        }
    }
</script>

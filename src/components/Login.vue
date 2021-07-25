<template>
    <form @submit.prevent="handleSubmit">
        <error v-if="error" :error="error" />
        <h3>Login</h3>

        <div class="form-group">
            <label>Email</label>
            <input type="email" class="form-control" v-model="email" placeholder="Email"/>
        </div>

        <div class="form-group">
            <label>Senha</label>
            <input type="password" class="form-control" v-model="senha" placeholder="Password"/>
        </div>

        <button class="btn btn-primary btn-block">Entrar</button>
        <p class="forgot-password text-right">
            <router-link to="forgot">Esqueceu a senha?</router-link>
        </p>

    </form>
</template>

<script>
    
    import Error from './Error.vue'
    import axios from 'axios'

    export default {
        name: 'Login',
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
                try {
                    const response = await axios.post('login', {
                        email: this.email,
                        senha: this.senha
                    });
                
                    localStorage.setItem('token', response.data.token); // armazena token
                    this.$store.dispatch('user', response.data.user); // chama a função actions
                    this.$router.push('/');
                
                } catch (e){
                    this.error = 'Invalid username/password'
                }
            }
        }
    }
</script>
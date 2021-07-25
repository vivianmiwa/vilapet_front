<template>
    <form @submit.prevent="handleSubmit">
        <h3>Redefinir senha</h3>

        <div class="form-group">
            <label>Senha</label>
            <input type="password" class="form-control" v-model="senha" placeholder="Senha"/>
        </div>

        <div>
            <label>Repetir senha</label>
            <input type="password" class="form-control" v-model="repetir_senha" placeholder="Repetir senha"/>
        </div>

        <button class="btn btn-primary btn-block">Enviar</button>
    </form>
</template>

<script>

    import axios from 'axios'

    export default {
        name: 'Reset',
        data(){
            return {
                senha: '',
                repetir_senha: ''
            }
        },
        methods: {
            async handleSubmit(){
                const response = await axios.post('reset', { // redefinir senha
                    senha: this.senha,
                    repetir_senha: this.repetir_senha,
                    token: this.$route.params.token 
                });

                console.log(response);
                this.$router.push('/login'); // redireciona para tela login
            }
        }
    }

</script>
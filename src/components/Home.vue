<template>
    <div>
        <h3 v-if="user">Olá, {{user.nome_usuario}}</h3>
        <h3 v-if="!user">Você não está logado</h3>
    </div>
</template>


<script>
    import {mapGetters} from 'vuex';
    
    export default {
        name: 'Home',
        computed: {
            ...mapGetters(['user'])
        }
    }
</script>

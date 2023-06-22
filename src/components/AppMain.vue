<script>
import {store} from '../store.js';

import AppCardPokemon from './AppCardPokemon.vue'

export default {
    components:{
        AppCardPokemon,
    },
    data(){
        return{
            store,
        }
    },
}
</script>
<template >
    <div class="container rounded p-4 bg-secondary-subtle mt-5" >
        <div class="row bg-secondary  py-4">
            <div class=" col-6 col-md-4 col-lg-3 col-xxl-2 text-center mb-4 "  v-for="(pokemon, index) in store.pokemons" :key="index" >
            <AppCardPokemon :unPokemon="pokemon"/>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .row{
        height: 30rem;
        overflow: auto;
    }
</style>
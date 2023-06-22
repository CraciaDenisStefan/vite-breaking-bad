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
    <div class="container" >
        <div class="row">
            <div class="col-3"  v-for="(pokemon, index) in store.pokemons" :key="index" >
            <AppCardPokemon :unPokemon="pokemon"/>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    
</style>
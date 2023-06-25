<script>
import {colorMap} from '../index.js';
import {store} from '../store.js';
export default {
    data(){
       return{
          colorMap,
           store
       }
    },
    props:{
        unPokemon: Object
    },
    computed:{
        backgroundColor(){
            return colorMap[this.unPokemon.type1]
            
        }
    }
}
</script>
<template >
        <div class="rounded  p-3 card_pokemon" :style="`background-color:${backgroundColor}`">
            <img :src="unPokemon.imageUrl" alt="">
            <div>{{ unPokemon.number }}</div>
            <div class="fw-bolder">{{ unPokemon.name }}</div>
            <div>{{ unPokemon.type1 }}</div>
        </div>
</template>
<style lang="scss" scoped>
@use '../styles/partials/variables'as *;
.card_pokemon{
    cursor: pointer;
    &:hover{
        filter: brightness(110%);
        transform: scale(1.1);
    }
}
img{
    width: 60%;
    border-radius:50%;
    height: 6rem;
}


    
</style>
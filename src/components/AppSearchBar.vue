<script>
import {store} from '../store.js';
export default {
    data(){
        return{
            store, 
        }
    },
   
    }
  
</script>
<template >
    <div class="container mt-1">
        <div class="row">
            <div class="col-6 offset-1">
                <input type="text" class="form-control" placeholder="Cerca Pokemon" v-model="store.searchText" @keyup="$emit('search')">
            </div>
            <div class="col-3 found offset-1" >
                <h4>Pokemon trovati : {{ store.pokemons.length }} </h4>
            </div>
        </div>
        
    </div>
</template>
<style lang="scss" scoped>
    .found{
        color: white;

    }
</style>
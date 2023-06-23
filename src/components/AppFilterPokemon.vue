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
<template>
    <div class="select_pokemon">
        <select class="form-select form-select-sm" aria-label="Default select example" v-model="store.typePokemon" @change="$emit('filterPokemon')">
        <option value="" selected>All</option>
        <option  v-for="(type,index ) in store.allTypePokemon" :key="index" :value="type"  >{{ type }}</option>
    </select>
    </div>
</template>
<style lang="scss" scoped>
.select_pokemon{
    width: 100px;
    align-self: center;
}
    
</style>
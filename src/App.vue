<script >
import axios from 'axios';

import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFilterPokemon from './components/AppFilterPokemon.vue';

import {store} from './store.js';
export default{
    components:{
      AppHeader,
      AppMain,
      AppFilterPokemon,
    },
    data(){
        return{
            store,
        }
      },
    mounted(){
      this.filterPokedex();
    },
  
    methods:{

      
      filterPokedex(){ 


        store.myUrl = store.apiUrl;

        if (store.typePokemon !== '') {
        myUrl = + `&eq[type1]= ${store.typePokemon}`
        }


        axios.get(store.myUrl).then((response)=>{
        store.pokemons=response.data.docs
        store.loading = false
      })
      }
    }

  }
</script>

<template>
<div>
  <div class="container d-flex">
    <AppHeader/>
    <AppFilterPokemon @filterPokemon="filterPokedex"/>
  </div>
  
  <AppMain/>
</div>
</template>

<style lang="scss">
@use './styles/generals.scss'as *;
@use './styles/partials/variables'as *
</style>

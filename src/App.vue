<script >
import axios from 'axios';

import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFilterPokemon from './components/AppFilterPokemon.vue';
import AppSearchBar from './components/AppSearchBar.vue';

import {store} from './store.js';
export default{
    components:{
      AppHeader,
      AppMain,
      AppFilterPokemon,
      AppSearchBar,
    },
    data(){
        return{
            store,
        }
      },
    mounted(){
      this.filterPokedex();
      this.searchPokemon();
    },
  
    methods:{
      searchPokemon(){
          
          store.myUrl = store.apiUrl;
         if(store.searchText !== ''){
          store.myUrl += `&start[name]=${store.searchText}`;
        }
        console.log(store.searchText);
        axios.get(store.myUrl).then((response)=>{
        store.pokemons=response.data.docs
        store.loading = false
      })
      },
      
       filterPokedex(){ 
   

         store.myUrl = store.apiUrl;

        if (store.typePokemon !== '') {
        store.myUrl += `&eq[type1]=${store.typePokemon}`
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
  <AppSearchBar @search="searchPokemon"/>
  <AppMain/>
</div>
</template>

<style lang="scss">
@use './styles/generals.scss'as *;
@use './styles/partials/variables'as *
</style>

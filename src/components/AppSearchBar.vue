<script>
import {store} from '../store.js';
export default {
    data(){
        return{
            store,
            searchText: ''
            
        }
    },
  
    
}
</script>
<template >
    <div class="container">
        <div class="row">
            <div class="col-6 offset-1">
                <input type="text" class="form-control" placeholder="Cerca Pokemon" v-model="store.searchText" @keyup.enter="$emit('search')">
            </div>
        </div>
        
    </div>
</template>
<style lang="scss" scoped>
    
</style>
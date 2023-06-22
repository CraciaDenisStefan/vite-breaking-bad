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
   
   <div class="loading ">
    <img class="loader" src="../assets/pokeball.png" alt="">
   </div>
   
</template>
<style lang="scss" scoped>
.loading{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

img{
    width: 100%;
   
}
.loader {
    width: 100px;
    height: 100px;
    -webkit-animation: spin 2s linear infinite; 
    animation: spin 2s linear infinite;
}
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
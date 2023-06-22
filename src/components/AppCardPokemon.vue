<script>
export default {
    props:{
        unPokemon: Object
    }
}
</script>
<template >
  
        <img :src="unPokemon.imageUrl" alt="">
        <div>{{ unPokemon.number }}</div>
        <div>{{ unPokemon.name }}</div>
        <div>{{ unPokemon.type1 }}</div>
 


</template>
<style lang="scss" scoped>
img{
    width: 50%;
    border-radius:50%;
}
    
</style>
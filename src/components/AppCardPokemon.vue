<script>
export default {
    props:{
        unPokemon: Object
    }
}
</script>
<template >
        <div class="rounded  p-3" :class="unPokemon.type1 === 'Fire' ?'bg_fire': unPokemon.type1 === 'Grass' ?'bg_grass': unPokemon.type1 === 'Water' ?'bg_water' : ''" >
            <img :src="unPokemon.imageUrl" alt="">
            <div>{{ unPokemon.number }}</div>
            <div class="fw-bolder">{{ unPokemon.name }}</div>
            <div>{{ unPokemon.type1 }}</div>
        </div>
</template>
<style lang="scss" scoped>
img{
    width: 60%;
    border-radius:50%;
    height: 6rem;
}

.bg_fire{
    background-color: rgb(250, 146, 146);
}
.bg_grass{
    background: rgb(170, 245, 170);
}
.bg_water{
    background-color: rgb(161, 235, 235);
}
    
</style>
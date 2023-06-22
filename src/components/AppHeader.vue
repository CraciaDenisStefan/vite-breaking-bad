<script>
export default {
    
}
</script>
<template lang="">
    <div class="container d-flex mt-3">
        <div class="blue"></div>
        <div class="red"></div>
        <div class="yellow"></div>
        <div class="green"></div>
    </div>
</template>
<style lang="scss" scoped>
     .red, .yellow, .green{
        width: 2rem;
        height: 2rem;
        background-color: red;
        border-radius: 50%;
        border: 3px solid rgb(255, 255, 255);
        margin: 0.4rem;
    }
    .blue{
        width: 4rem;
        height: 4rem;
        background: rgb(64,71,255);
        background: linear-gradient(325deg, rgba(64,71,255,1) 36%, rgba(255,255,255,1) 100%);
        border-radius: 50%;
        border: 3px solid rgb(255, 253, 253);
    }
    .red{
        background: rgb(255,44,33);
        background: linear-gradient(325deg, rgba(255,44,33,1) 36%, rgba(255,255,255,1) 100%);
    }
    .yellow{
        background: rgb(243,255,33);
        background: linear-gradient(325deg, rgba(243,255,33,1) 36%, rgba(255,255,255,1) 100%);
    }
    .green{
        background: rgb(104,255,93);
        background: linear-gradient(325deg, rgba(104,255,93,1) 36%, rgba(255,255,255,1) 100%);
    }
</style>
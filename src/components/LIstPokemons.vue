<script setup>
const pokemon = defineProps(["name", "urlBaseSVG"]);
</script>

<template>
    <div class="col-4">
        <div class="card p-2 mb-3 cardListPokeon">
            <p class="text-center">{{ pokemon.name }}</p>
            <img
                :src="urlBaseSVG"
                class="card-img-top"
                alt="card"
                height="80"
            />
        </div>
    </div>
</template>

<style scoped>
.cardListPokeon {
    background: rgb(72, 63, 251);
    background: radial-gradient(
        circle,
        rgba(72, 63, 251, 0.5) 0%,
        rgba(70, 252, 244, 0.3) 100%
    );
    cursor: pointer;
}
.cardListPokeon:hover {
    background: rgb(72, 63, 251);
    background: radial-gradient(
        circle,
        rgba(72, 63, 251, 0.7) 0%,
        rgba(70, 252, 244, 0.5) 100%
    );
}
.cardListPokeon img:active {
    padding: 0.2rem;
}
</style>

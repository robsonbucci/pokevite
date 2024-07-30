<script setup>
const pokemon = defineProps([
  "urlBaseSVG",
  "name",
  "xp",
  "height",
  "image",
  "loading",
]);
</script>

<template>
  <div class="card cardPokemonSelected">
    <img
      :src="
        image ||
        'https://raw.githubusercontent.com/yurimarcon/PokeVite/305b2449732026a2f631cbd5908fd2e178b2aa7e/src/assets/egg_pokemon.svg'
      "
      :alt="name"
      class="card-img-top p-2"
      :class="!loading ? 'animate__animated animate__jackInTheBox' : ''"
      height="250"
    />
    <div class="card-body">
      <h5 class="card-title text-center">{{ name }}</h5>
      <hr />
      <div class="row">
        <section class="col">
          <strong>XP: </strong>
          <span>{{ xp || 0 }}</span>
        </section>
        <section class="col">
          <strong>Altura: </strong>
          <span>{{ height || 0 }}</span>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cardPokemonSelected {
  height: 450px;
  background: rgb(72, 63, 251);
  background: radial-gradient(
    circle,
    rgb(255, 123, 0) 0%,
    rgb(196, 209, 12) 100%
  );
  cursor: pointer;
}
</style>

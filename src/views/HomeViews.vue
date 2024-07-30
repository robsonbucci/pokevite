<script setup>
import { computed, onMounted, reactive, ref } from "vue";
import LIstPokemons from "../components/LIstPokemons.vue";
import ListPokemonsSkeleton from "../components/ListPokemonsSkeleton.vue";
import CardPokemonSelected from "../components/CardPokemonSelected.vue";

let pokemons = reactive([]);
let searchPokemonField = ref("");
let pokemonSelected = reactive(ref([]));
let loading = ref(false);

const urlBaseSVG = ref(
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/"
);

onMounted(async () => {
  const lista = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0"
  );
  const data = await lista.json();
  pokemons.push(...data.results);
});

const pokemonsFiltered = computed(() => {
  if (pokemons?.length && searchPokemonField.value) {
    return pokemons.filter((pokemon) =>
      pokemon.name.includes(searchPokemonField.value.toLocaleLowerCase())
    );
  }
  return pokemons;
});

const selectPokemon = async (pokemon) => {
  loading.value = true;
  // fetch(pokemon.url)
  //   .then((res) => res.json())
  //   .then((pokemon) => (pokemonSelected.value = pokemon))
  //   .catch((err) => alert(err))
  //   .finally((pokemonSelected.value = false));
  try {
    const data = await fetch(pokemon.url);
    const result = await data.json();
    pokemonSelected.value = result;
    loading.value = false;
    return pokemonSelected;
  } catch (err) {
    console.error(err);
  }
};
</script>

<template>
  <main>
    <div class="container">
      <div class="row mt-4">
        <div class="col-sm-12 col-md-6">
          <CardPokemonSelected
            :urlBaseSVG="urlBaseSVG"
            :name="pokemonSelected?.name"
            :xp="pokemonSelected?.base_experience"
            :height="pokemonSelected?.height"
            :image="pokemonSelected?.sprites?.other?.dream_world?.front_default"
            :loading="loading"
          />
        </div>
        <div class="col-sm-12 col-md-6">
          <!-- SKELETON -->
          <div class="card card-list">
            <div v-if="!pokemons.length">
              <div class="card-body row">
                <ListPokemonsSkeleton v-for="i in 10" />
              </div>
            </div>
            <!-- SKELETON - FIM -->

            <div v-else>
              <div class="col-sm-12 col-md-7"></div>
              <div class="card-body row">
                <div class="mb-3">
                  <label hidden for="searchPokemonField" class="form-label"
                    >Pesquisar...</label
                  >
                  <input
                    v-model="searchPokemonField"
                    type="text"
                    class="form-control"
                    id="searchPokemonField"
                    placeholder="Pesquisar..."
                  />
                </div>

                <LIstPokemons
                  v-for="pokemon in pokemonsFiltered"
                  :key="pokemon.url"
                  :name="pokemon.name"
                  :urlBaseSVG="
                    urlBaseSVG + pokemon.url.split('/').slice(-2)[0] + '.svg'
                  "
                  @click="selectPokemon(pokemon)"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.card-list {
  max-height: 450px;
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>

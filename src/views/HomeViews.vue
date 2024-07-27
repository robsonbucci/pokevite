<script setup>
import { computed, onMounted, reactive, ref } from "vue";
import LIstPokemons from "../components/LIstPokemons.vue";
import ListPokemonsSkeleton from "../components/ListPokemonsSkeleton.vue";

let pokemons = reactive([]);
let searchPokemonField = ref("");
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
</script>

<template>
    <main>
        <div class="container mt-4">
            <div class="row">
                <div class="col-sm-12 col-md-7">
                    <div class="card">
                        <div v-if="!pokemons.length">
                            <div class="card-body row">
                                <ListPokemonsSkeleton v-for="i in 10" />
                            </div>
                        </div>

                        <div v-else>
                            <div class="card-body row">
                                <div class="mb-3">
                                    <label
                                        hidden
                                        for="searchPokemonField"
                                        class="form-label"
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
                                        urlBaseSVG +
                                        pokemon.url.split('/').slice(-2)[0] +
                                        '.svg'
                                    "
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

import { reactive } from 'vue';

export const store = reactive({
    apiUrl: 'https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons?page',
    pokemons: [],
    loading: true,
    searchText:'',
    myUrl: '',
    typePokemon:'',
    allTypePokemon:[
        "Bug",
        "Dark",
        "Dragon",
        "Electric",
        "Fairy",
        "Fighting",
        "Fire",
        "Flying",
        "Ghost",
        "Grass",
        "Ground",
        "Ice",
        "Normal",
        "Poison",
        "Psychic",
        "Rock",
        "Steel",
        "Water"
]
})
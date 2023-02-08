import { appState } from "../AppState.js";
import { WildPokemon } from "../Models/WildPokemon.js";
import { pokeApi } from "./AxiosService.js"

class WildPokemonsService {
    async getPokemonByUrl(url) {
        const res = await pokeApi.get(url)
        console.log('[get by url]', res.data);
        // @ts-ignore
        appState.wildPokemon = new WildPokemon(res.data)
        console.log('[looking at wildPokemon]', appState.wildPokemon);

    }
    async getWildPokemons() {
        const res = await pokeApi.get('?limit=150&offset=0')
        console.log('[WILDPOKEMONS]', res.data.results);
        appState.wildPokemons = res.data.results
    }


}

export const wildPokemonsService = new WildPokemonsService()
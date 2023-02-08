import { appState } from "../AppState.js";
import { pokeApi } from "./AxiosService.js"

class WildPokemonsService {
    async getWildPokemons() {
        const res = await pokeApi.get('?limit=150&offset=0')
        console.log('[WILDPOKEMONS]', res.data.results);
        appState.wildPokemons = res.data.results
    }


}

export const wildPokemonsService = new WildPokemonsService()
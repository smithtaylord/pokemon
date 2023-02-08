import { appState } from "../AppState.js";
import { CaughtPokemon } from "../Models/CaughtPokemon.js";
import { sandboxApi } from "./AxiosService.js"

class CaughtPokemonsService {
    async getCaughtPokemon() {
        const res = await sandboxApi.get('/taylormon/pokemon')
        console.log('[get caught pokemon', res.data);
        appState.caughtPokemon = res.data.map(p => new CaughtPokemon(p))
    }
    async catchPokemon() {
        const res = await sandboxApi.post('/taylormon/pokemon', appState.pokemon)
        console.log('[catch pokemon]', res.data);
        let caughtPokemon = new CaughtPokemon(res.data)
        appState.caughtPokemon.push(caughtPokemon)
        appState.emit('caughtPokemon')
        // @ts-ignore
        appState.pokemon = caughtPokemon
    }


}


export const caughtPokemonsService = new CaughtPokemonsService()
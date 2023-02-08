import { appState } from "../AppState.js";
import { CaughtPokemon } from "../Models/CaughtPokemon.js";
import { sandboxApi } from "./AxiosService.js"



class CaughtPokemonsService {
    setCaughtPokemon(id) {
        let foundPokemon = appState.caughtPokemons.find(p => p.id == id)
        console.log(foundPokemon);
        // @ts-ignore
        appState.caughtPokemon = foundPokemon
    }
    async getCaughtPokemon() {
        const res = await sandboxApi.get('/taylormon/pokemon')
        console.log('[get caught pokemon', res.data);
        appState.caughtPokemons = res.data.map(p => new CaughtPokemon(p))
    }
    async catchPokemon() {
        const res = await sandboxApi.post('/taylormon/pokemon', appState.wildPokemon)
        console.log('[catch pokemon]', res.data);
        let caughtPokemon = new CaughtPokemon(res.data)
        appState.caughtPokemons.push(caughtPokemon)
        appState.emit('caughtPokemon')
        // @ts-ignore
        appState.caughtPokemon = caughtPokemon
    }




}


export const caughtPokemonsService = new CaughtPokemonsService()
import { appState } from "../AppState.js";
import { caughtPokemonsService } from "../Services/CaughtPokemonsService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawCaughtPokemons() {
    let template = ''
    appState.caughtPokemons.forEach(p => template += p.CaughtPokemonTemplate)
    setHTML('caught-pokemon', template)

}

function _drawCaughtPokemon() {
    // @ts-ignore
    setHTML('active-pokemon', appState.caughtPokemon.ActiveCaughtPokemonTemplate)

}

export class CaughtPokemonsController {

    constructor() {
        this.getCaughtPokemon()
        appState.on('caughtPokemons', _drawCaughtPokemons)
        appState.on('caughtPokemon', _drawCaughtPokemon)
    }

    async catchPokemon() {
        try {
            await caughtPokemonsService.catchPokemon()
        } catch (error) {
            Pop.error(error.message)
            console.error(error)
        }
    }

    async getCaughtPokemon() {
        try {
            await caughtPokemonsService.getCaughtPokemon()
        } catch (error) {
            Pop.error(error.message)
            console.error(error)
        }
    }
    setCaughtPokemon(id) {
        try {
            caughtPokemonsService.setCaughtPokemon(id)
        } catch (error) {
            Pop.error(error.message)
            console.error(error)
        }

    }

}
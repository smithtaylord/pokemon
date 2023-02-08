import { appState } from "../AppState.js";
import { caughtPokemonsService } from "../Services/CaughtPokemonsService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawCaughtPokemon() {
    let template = ''
    appState.caughtPokemon.forEach(p => template += p.CaughtPokemonTemplate)
    setHTML('caught-pokemon', template)

}

export class CaughtPokemonsController {

    constructor() {
        this.getCaughtPokemon()
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
}
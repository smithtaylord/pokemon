import { appState } from "../AppState.js";
import { WildPokemon } from "../Models/WildPokemon.js";
import { wildPokemonsService } from "../Services/WildPokemonsService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawWildPokemons() {
    let template = ''
    appState.wildPokemons.forEach(p => template += WildPokemon.WildPokemonTemplate(p))
    setHTML('wild-pokemon', template)
}

function _drawWildPokemon() {
    // @ts-ignore
    setHTML('active-pokemon', appState.wildPokemon.ActiveWildPokemonTemplate)
}

export class WildPokemonsController {
    constructor() {
        this.getWildPokemons()
        appState.on('wildPokemons', _drawWildPokemons)
        appState.on('wildPokemon', _drawWildPokemon)
    }
    async getWildPokemons() {
        try {
            await wildPokemonsService.getWildPokemons()
        } catch (error) {
            Pop.error(error.message)
            console.error(error)
        }
    }

    async getPokemonByUrl(url) {
        try {
            await wildPokemonsService.getPokemonByUrl(url)
        } catch (error) {
            Pop.error(error.message)
            console.error(error)
        }
    }



}
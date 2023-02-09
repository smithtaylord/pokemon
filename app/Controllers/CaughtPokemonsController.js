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
    // setHTML('active-pokemon', appState.caughtPokemon.ActiveCaughtPokemonTemplate)
    if (appState.caughtPokemon) {
        // @ts-ignore
        setHTML('active-pokemon', appState.caughtPokemon.ActiveCaughtPokemonTemplate)
    } else {
        setHTML('active-pokemon', `<img class="w-100"
        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2bef67fb-d27b-4b27-a7a4-f40e52ff684c/daa5n5z-58217eac-dcb6-4e13-abb6-8d8091aa8724.jpg/v1/fill/w_1024,h_683,q_75,strp/pokemon_go_by_elintan_daa5n5z-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjgzIiwicGF0aCI6IlwvZlwvMmJlZjY3ZmItZDI3Yi00YjI3LWE3YTQtZjQwZTUyZmY2ODRjXC9kYWE1bjV6LTU4MjE3ZWFjLWRjYjYtNGUxMy1hYmI2LThkODA5MWFhODcyNC5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.ggNjHuoOeerwTZCysNDlE4T3Nd9Rb7BNpjm_tR6l7Cg"
        alt="">`)
    }

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

    async releasePokemon(id) {
        try {
            await caughtPokemonsService.releasePokemon(id)
        } catch (error) {
            Pop.error(error.message)
            console.error(error)
        }
    }

}
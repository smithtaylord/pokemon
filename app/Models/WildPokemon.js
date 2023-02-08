export class WildPokemon {

    constructor(data) {
        this.name = data.name
        this.url = data.url
    }

    static WildPokemonTemplate(pokemon) {
        return `
<button onclick="app.wildPokemonsController.getPokemonByUrl(${pokemon.url})" class="btn btn-outline-warning w-100 my-2">${pokemon.name}</button>
`

    }

}
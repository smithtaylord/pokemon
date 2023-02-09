export class WildPokemon {

    constructor(data) {
        this.name = data.name
        this.img = data.sprites.front_default
        this.weight = data.weight
        this.height = data.height
        this.user = 'taylormon'


    }
    get ActiveWildPokemonTemplate() {
        return `
        <div class="border rounded shadow text-center mt-5 pb-3">
            <img class="pokemon-img" src="${this.img}" alt="">
            <h1>WILD POKEMON!!!!!!!</h1
            <h1>${this.name}</h1>
            <h3>Height: ${this.height} | Weight: ${this.weight}</h3>
            <button onclick="app.caughtPokemonsController.catchPokemon()" class="btn btn-outline-info mt-2 mdi mdi-pokeball"> Throw Pokeball</button>
        </div>
`

    }


    static WildPokemonTemplate(pokemon) {
        return `
<button onclick="app.wildPokemonsController.getPokemonByUrl('${pokemon.url}')" class="btn btn-outline-warning w-100 my-2">${pokemon.name}</button>
`

    }



}
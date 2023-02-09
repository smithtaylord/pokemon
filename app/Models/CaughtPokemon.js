export class CaughtPokemon {
    constructor(data) {
        this.id = data.id
        this.name = data.name
        this.img = data.img
        this.weight = data.weight
        this.height = data.height
        this.user = data.user
    }


    get CaughtPokemonTemplate() {
        return `
<button onclick="app.caughtPokemonsController.setCaughtPokemon('${this.id}')" class="btn btn-danger w-100 my-2">${this.name}</button>
`

    }

    get ActiveCaughtPokemonTemplate() {
        return `
        <div class="border rounded shadow text-center mt-5 pb-3">
            <img class="pokemon-img" src="${this.img}" alt="">
            <h1>${this.name}</h1>
            <h3>Height: ${this.height} | Weight: ${this.weight}</h3>
            <button onclick="app.caughtPokemonsController.releasePokemon('${this.id}')" class="btn btn-outline-success mt-2 mdi mdi-tree"> Release Pokemon </button>
        </div>
`

    }
}
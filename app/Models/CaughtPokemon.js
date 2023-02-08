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
<button onclick="('${this.id}')" class="btn btn-danger w-100 my-2">${this.name}</button>
`

    }

}
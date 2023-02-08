import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState('values', [Value])
  /** @type {Object[]} */
  wildPokemons = []
  /** @type {import('./Models/WildPokemon').WildPokemon[] | null} */
  wildPokemon = null
  /** @type {import('./Models/CaughtPokemon').CaughtPokemon[]} */
  caughtPokemons = []
  /** @type {import('./Models/CaughtPokemon').CaughtPokemon[] | null} */
  caughtPokemon = null
}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})

import { CaughtPokemonsController } from "./Controllers/CaughtPokemonsController.js";
import { ValuesController } from "./Controllers/ValuesController.js";
import { WildPokemonsController } from "./Controllers/WildPokemonsController.js";

class App {
  // valuesController = new ValuesController();
  wildPokemonsController = new WildPokemonsController
  caughtPokemonsController = new CaughtPokemonsController
}

window["app"] = new App();

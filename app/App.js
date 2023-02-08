import { ValuesController } from "./Controllers/ValuesController.js";
import { WildPokemonsController } from "./Controllers/WildPokemonsController.js";

class App {
  // valuesController = new ValuesController();
  wildPokemonsController = new WildPokemonsController
}

window["app"] = new App();

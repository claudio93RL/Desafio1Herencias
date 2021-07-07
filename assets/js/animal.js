import {Propietario} from "./propietario.js";
 
export class Animal extends Propietario {
    constructor(tipo, nombrePropietario, direccionPropietario, telefonoPropietario) {
        // hereda en la clase propietario
        super(nombrePropietario, direccionPropietario, telefonoPropietario);
        this.tipo = tipo;
    }

    getTipo() {
        return `El tipo de animal es un : ${this.tipo}`
    }
}

import {Animal} from "./animal.js";

export class Mascota extends Animal {
    constructor(nombre, enfermedad, tipo, nombrePropietario, direccionPropietario, telefonoPropietario) {
        super(tipo, nombrePropietario, direccionPropietario, telefonoPropietario);
        this._nombre = nombre;
        this._enfermedad = enfermedad;
    }
    get nombre(){
        return this._nombre;
    }

    set nombre(value){
        this._nombre = value;
    }

    get enfermedad(){
        return this._enfermedad;
    }

    set enfermedad(value){
        this._enfermedad = value;
    }
}

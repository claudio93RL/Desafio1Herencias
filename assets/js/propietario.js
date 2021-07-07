export class Propietario {

    constructor(nombre, direccion, telefono) {
        this.nombrePropietario = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
    }
    datosPropietario() {
        return `El nombre del propietario es ${this.nombrePropietario}, su dirección es: ${this.direccion} y su telefono es ${this.telefono}`;
    }
}

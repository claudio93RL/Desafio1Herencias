
import { Mascota } from "./mascota.js";
const formularioElement = document.getElementById("formulario");

formularioElement.addEventListener("submit", function (event) {
    event.preventDefault();
    ////////////////////////////

    const propietarioElement = document.querySelector("#propietario");
    const telefonoElement = document.querySelector("#telefono");
    const direccionElement = document.querySelector("#direccion");
    const nombreMascotaElement = document.querySelector("#nombreMascota");
    const tipoMascotaElement = document.querySelector("#tipo");
    const enfermedadElement = document.querySelector("#enfermedad");

    const mascota = new Mascota(
        nombreMascotaElement.value,
        enfermedadElement.value,
        tipoMascotaElement.value,
        propietarioElement.value,
        direccionElement.value,
        telefonoElement.value
    );

    function enviarResultado(mascota) {
        const resultadoElement = document.querySelector("#resultado");
        resultadoElement.innerHTML = `
          <ul>
            <li>${mascota.datosPropietario()}</li>
            <li>${mascota.getTipo()}, mientras que el nombre de la mascota es: ${
      mascota.nombre
    } y la enfermedad es: ${mascota.enfermedad}</li>
          </ul>
        `;
    }

  

    if(propietarioElement.value == "" || tipoMascotaElement.value == "" || nombreMascotaElement.value == "" || enfermedadElement.value == "" || direccionElement.value == "" || telefonoElement.value == ""){
        alert("los campos son obligatorios")
    }else{
        if (tipoMascotaElement.value == "perro") {

            const Perro = mascota;
            enviarResultado(Perro);
            return;
        }
    
        if(tipoMascotaElement.value == "gato"){
            const gato = mascota;
            enviarResultado(gato);
            return; 
        }
    
        if(tipoMascotaElement.value == "conejo"){
            const conejo = mascota;
            enviarResultado(conejo);
            return; 
        }
    }
});
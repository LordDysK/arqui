//Creo las variables a utilizar más adelante en el codigo y los guardo en sus respectivos ids

const dropdownEspecialidad = document.getElementById("especialidad");
const dropdownDoctores = document.getElementById("doctores");
const resultEspecialidad = document.getElementById("resultEspecialidad");
const resultDoctor = document.getElementById("resultDoctor");
const generar = document.getElementById("generarComprobante");

//Se empieza a crear la funcion de seleccion

function actualizarSeleccion() {

    //Creo variables para usar su índice más adelante

    const indiceEspecialidad = dropdownEspecialidad.selectedIndex;
    const indiceDoctor = dropdownDoctores.selectedIndex;



    //Creo variables para asignar los nombres de los doctores según el texto al que esté asociado su id.

    const nombreDoctor = dropdownDoctores.options[indiceDoctor].text;
    const nombreEspecialidad = dropdownEspecialidad.options[indiceEspecialidad].text;

    //Aquí guardo el nombre y/o especialidad en sus respectivas variables al seleccionarlos en los dropdowns

    resultEspecialidad.textContent = nombreEspecialidad;
    resultDoctor.textContent = nombreDoctor;
}

//Se actualiza al seleccionar con la acción "change" y se llama a la funcion actualizarSeleccion.

dropdownEspecialidad.addEventListener("change", actualizarSeleccion);
dropdownDoctores.addEventListener("change", actualizarSeleccion);

//Aquí empiezo a construir el boton generar

function botonGenerar() {

    //Asigno de nuevo estas variables para que se puedan utilizar en la función del botón generar.  

    const indiceDoctor = dropdownDoctores.selectedIndex;
    const indiceEspecialidad = dropdownEspecialidad.selectedIndex;

    //Condición que me sirve para validar que se haya seleccionado correctamente una opción en la dropdownlist.

    if (indiceDoctor === 0 || indiceEspecialidad === 0) {
        alert("Recuerda seleccionar un doctor y su especialidad");
        return;
    }

    //Esta variable es para usarla después en la alerta que indica que se generó el comprobante    

    const nombreDoctor = dropdownDoctores.options[indiceDoctor].text;

    alert(`Se ha realizado el comprobante con éxito para el doctor/a ${nombreDoctor}`);

    //Se redirige a comprobante html luego de presionar el botón

    window.location.href = "index.html"
}

//Aquí se crea el evento del boton generar al hacer la acción de click.

generar.addEventListener("click", botonGenerar);

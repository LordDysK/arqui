
const dropdownEspecialidad = document.getElementById("especialidad");
const dropdownDoctores = document.getElementById("doctores");
const resultEspecialidad = document.getElementById("resultEspecialidad");
const resultDoctor = document.getElementById("resultDoctor");
const generar = document.getElementById("generarComprobante");


function actualizarSeleccion() {


    const indiceEspecialidad = dropdownEspecialidad.selectedIndex;
    const indiceDoctor = dropdownDoctores.selectedIndex;




    const nombreDoctor = dropdownDoctores.options[indiceDoctor].text;
    const nombreEspecialidad = dropdownEspecialidad.options[indiceEspecialidad].text;


    resultEspecialidad.textContent = nombreEspecialidad;
    resultDoctor.textContent = nombreDoctor;
}


dropdownEspecialidad.addEventListener("change", actualizarSeleccion);
dropdownDoctores.addEventListener("change", actualizarSeleccion);


function botonGenerar() {


    const indiceDoctor = dropdownDoctores.selectedIndex;
    const indiceEspecialidad = dropdownEspecialidad.selectedIndex;


    if (indiceDoctor === 0 || indiceEspecialidad === 0) {
        alert("Recuerda seleccionar un doctor y su especialidad");
        return;
    }


    const nombreDoctor = dropdownDoctores.options[indiceDoctor].text;

    alert(`Se ha realizado el comprobante con éxito para el doctor/a ${nombreDoctor}`);


    window.location.href = "index.html"
}


generar.addEventListener("click", botonGenerar);

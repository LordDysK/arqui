// Array para pacientes en espera.
const enEspera = [
    { name: "Cristóbal", apellido: "Cárdenas", RUT: "21.021.002-4", horaLlegada: "08:00" },
    { name: "María", apellido: "Gómez", RUT: "17.318.567-K", horaLlegada: "08:15" },
    { name: "Juan", apellido: "Pérez", RUT: "12.456.789-0", horaLlegada: "08:30" },
    { name: "Ana", apellido: "Rodríguez", RUT: "19.875.432-1", horaLlegada: "08:45" }
];
// Array para pacientes atendidos.
const atendidos = [];

//Función para mostrar a los pacientes en espera.

function mostrarPacientes() {
    const tablaEnEspera = document.getElementById("tablaEnEspera");//Se crea una variable y se va a guardar a la tabla de espera.
    tablaEnEspera.innerHTML = "";// Esto sirve para reiniciar el contenido de tablaEnEpsera y así recargar su contenido dinámicamente.

    
    //Esto significa que por cada paciente se va a crear las distintas celdas de nombre, apellido, rut y hora de llegada.
    //El index es el índice de la posición y parte del 0.

    enEspera.forEach((paciente, index) => {
        const fila = tablaEnEspera.insertRow();
        const celdaNombre = fila.insertCell(0);
        const celdaApellido = fila.insertCell(1);
        const celdaRUT = fila.insertCell(2);
        const celdaHoraLlegada = fila.insertCell(3);
        const celdaAccion = fila.insertCell(4);

        celdaNombre.textContent = paciente.name;
        celdaApellido.textContent = paciente.apellido;
        celdaRUT.textContent = paciente.RUT;
        celdaHoraLlegada.textContent = paciente.horaLlegada;

        
        //Aquí se crea el boton "atender" y que después de presionarlo manda al paciente con sus datos a la sección "atendidos"
        const botonAtender = document.createElement("button");
        botonAtender.textContent = "Atender";
        botonAtender.addEventListener("click", () => { //momento cuando hace "click"
            const pacienteAtendido = enEspera.splice(index, 1)[0]; //El splice sirve para eliminar al paciente. En este caso en index es 0 y el 1 es para la cantidad de elementos que se quieren eliminar.
            // y el [0] es para obtener la información del paciente eliminado y se agrega con la función push a la nueva lista de atendidos.
            atendidos.push(pacienteAtendido);
            
            // Aquí se actualiza en tiempo real ambas listas.
            mostrarPacientes();
            mostrarAtendidos();
        });

        //Aquí se agrega el boton de atender a la celda de accion con appendChild ya que boton atender viene de la celda de accion o en otras palabras es el hijo de la celda de accion (child).

        celdaAccion.appendChild(botonAtender);
    });
}

//Aquí se crea la función para mostrar a los atendidos.

function mostrarAtendidos() {
    const tablaAtendidos = document.getElementById("tablaAtendidos");
    tablaAtendidos.innerHTML = "";

    //Aquí es el mismo proceso que en la lista de espera

    atendidos.forEach((paciente) => {
        const fila = tablaAtendidos.insertRow();
        const celdaNombre = fila.insertCell(0);
        const celdaApellido = fila.insertCell(1);
        const celdaRUT = fila.insertCell(2);
        const celdaHoraLlegada = fila.insertCell(3);

        celdaNombre.textContent = paciente.name;
        celdaApellido.textContent = paciente.apellido;
        celdaRUT.textContent = paciente.RUT;
        celdaHoraLlegada.textContent = paciente.horaLlegada;
    });
}

// Llama a la función para mostrar pacientes al cargar la página
mostrarPacientes();
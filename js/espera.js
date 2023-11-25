const enEspera = [
    { name: "Cristóbal", apellido: "Cárdenas", RUT: "21.021.002-4", horaLlegada: "08:00" },
    { name: "María", apellido: "Gómez", RUT: "17.318.567-K", horaLlegada: "08:15" },
    { name: "Juan", apellido: "Pérez", RUT: "12.456.789-0", horaLlegada: "08:30" },
    { name: "Ana", apellido: "Rodríguez", RUT: "19.875.432-1", horaLlegada: "08:45" }
];
const atendidos = [];

//Moostar pacientes en espera

function mostrarPacientes() {
    const tablaEnEspera = document.getElementById("tablaEnEspera");//Se crea una variable y se va a guardar a la tabla de espera.
    tablaEnEspera.innerHTML = "";// Reinicia el contenido 

    
    //Esto significa que por cada paciente se va a crear las distintas celdas de nombre, apellido, rut y hora de llegada.

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

        
        const botonAtender = document.createElement("button");
        botonAtender.textContent = "Atender";
        botonAtender.addEventListener("click", () => { 
            const pacienteAtendido = enEspera.splice(index, 1)[0]; 
            
            atendidos.push(pacienteAtendido);
            
            
            mostrarPacientes();
            mostrarAtendidos();
        });

        

        celdaAccion.appendChild(botonAtender);
    });
}



function mostrarAtendidos() {
    const tablaAtendidos = document.getElementById("tablaAtendidos");
    tablaAtendidos.innerHTML = "";


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

mostrarPacientes();
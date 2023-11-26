function showForm(formId) {
    document.querySelectorAll('form').forEach(form => {
        form.style.display = 'none';
    });
    document.getElementById(`form-${formId}`).style.display = 'block';
}

// Fecha
function getCurrentDate() {
    const now = new Date();
    const day = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); 
    const year = now.getFullYear();
    return `${day}/${month}/${year}`;
}

document.getElementById('fecha').value = getCurrentDate();

function agendarCita() {
    const fecha = document.getElementById('fecha').value;
    const horasSeleccionadas = getHorasSeleccionadas();

    if (horasSeleccionadas.length === 0) {
        alert('Error: Debes seleccionar al menos una hora.');
    } else {
        const mensaje = `Agenda realizada\nFecha: ${fecha}\nHoras: ${horasSeleccionadas.join(', ')}`;
        alert(mensaje);

        window.location.reload();
    }
}

function getHorasSeleccionadas() {
    const checkboxes = document.querySelectorAll('input[name="hora"]');
    const horasSeleccionadas = [];

    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            horasSeleccionadas.push(checkbox.value);
        }
    });

    return horasSeleccionadas;
}

function agendarCitaB() {
    const fechaSeleccionada = document.getElementById('fechaB').value;
    const horasSeleccionadas = getHorasSeleccionadas();

    const fechaActual = getCurrentDate(); 

    if (new Date(fechaSeleccionada) < new Date(fechaActual)) {
        alert('Error: No puedes seleccionar una fecha pasada.');
    } else if (horasSeleccionadas.length === 0) {
        alert('Error: Debes seleccionar al menos una hora.');
    } else {
        const mensaje = `Agenda realizada\nFecha: ${fechaSeleccionada}\nHoras: ${horasSeleccionadas.join(', ')}`;
        alert(mensaje);
        window.location.reload();
    }
}


function updateCurrentDateTime() {
    const currentDateTimeElement = document.getElementById('current-date-time');
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const formattedDate = now.toLocaleDateString('es-ES', options);
    currentDateTimeElement.textContent = formattedDate;
}

const fechaC = document.getElementById('fechaC');

const fechaActual = getCurrentDate();

fechaC.value = fechaActual;

function getCurrentDate() {
    const now = new Date();
    const day = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); 
    const year = now.getFullYear();
    return `${year}-${month}-${day}`;
}

function calcularFechaTresMeses() {
    const fechaC = document.getElementById('fechaC');
    const fechaTresMeses = document.getElementById('fechaTresMeses');

    function formatDate(date) {
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    const fechaActualC = new Date(fechaC.value);
    const nuevaFecha = new Date(fechaActualC);
    nuevaFecha.setMonth(nuevaFecha.getMonth() + 3);

    fechaTresMeses.value = formatDate(nuevaFecha);
}

let agendado = false; 

function agendarCitaC() {
    if (agendado) return; 

    const fechaC = document.getElementById('fechaC').value;
    const fechaTresMeses = document.getElementById('fechaTresMeses').value;
    const horasSeleccionadas = getHorasSeleccionadas();

    if (horasSeleccionadas.length === 0) {
        alert('Error: Debes seleccionar al menos una hora.');
    } else {
        const mensaje = `Agenda realizada con éxito:\nDesde: ${fechaC}\nHasta: ${fechaTresMeses}\nHoras: ${horasSeleccionadas.join(', ')}`;
        alert(mensaje);
        window.location.reload();
    }

    agendado = true; 
}

function mostrarOverlay() {
    const overlay = document.getElementById('overlay');
    overlay.classList.remove('hidden');
}

function ocultarOverlay() {
    const overlay = document.getElementById('overlay');
    overlay.classList.add('hidden');
}

function seleccionarMedico(nombreMedico) {
    // Nunca use el console.log, nunca esta tarde
    console.log(`Médico seleccionado: ${nombreMedico}`);

    // no toy
    ocultarOverlay();
}


window.onload = () => {
    mostrarOverlay();
    calcularFechaTresMeses();
    
    const botonAgendar = document.querySelector('#form-C button');
    
    botonAgendar.removeEventListener('click', agendarCitaC);
    
    botonAgendar.addEventListener('click', agendarCitaC);
};


setInterval(updateCurrentDateTime, 1000);

showForm('A');

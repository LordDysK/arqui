/* gestion de citas */
function verDetalles(id) {
    alert("Detalles de la cita #" + id, "(Lugar, hora, etc.)");
}


function anularCita(button) {
    var confirmacion = confirm("¿Seguro que desea anular la cita?");
    if (confirmacion) {
        // Obtén la fila que contiene el botón clicado
        var fila = button.closest("tr");
        
        // Verifica si la fila existe
        if (fila) {
            // Elimina la fila
            fila.parentNode.removeChild(fila);
        }
    }
}

/* gestion de citas */
function verDetalles(id) {
    alert("Detalles de la cita #" + id, "(Lugar, hora, etc.)");
}


function anularCita(button) {
    var confirmacion = confirm("¿Seguro que desea anular la cita?");
    if (confirmacion) {
        var fila = button.closest("tr");
        
        if (fila) {
            fila.parentNode.removeChild(fila);
        }
    }
}

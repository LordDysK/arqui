
document.getElementById("botonInforme").addEventListener("click", function(event) {
    event.preventDefault(); 

    var fechaInicio = document.getElementById("fecha-inicio").value;
    var fechaFin = document.getElementById("fecha-fin").value;
    var metodoPago = document.getElementById("Mpago").value;
    var recaudacion = document.getElementById("totalRecaudacion").value;
    const fechaInicioCont = document.getElementById("fecha-inicio-cont");
    const fechaFinCont = document.getElementById("fecha-fin-cont");
    const recaudacionTotal = document.getElementById("recaudacionCont");
    const pago = document.getElementById("metodoPago");
    

    if (fechaInicio && fechaFin && metodoPago && recaudacion) {
        if ( fechaInicio >= fechaFin){
            var mensajeFechas = document.getElementById("fechasError");
            mensajeFechas.style.display = "block";

            setTimeout(function() {
                mensajeFechas.style.display = "none";
            }, 2000); 
        }
        else{
        var mensaje = document.getElementById("mensajeVentana");
        mensaje.style.display = "block";
        

            const fechaInicioValor = fechaInicio;
            const fechaFinValor = fechaFin;
            const recaudacionValor = recaudacion;
            const pagoValor = metodoPago;


    
            fechaInicioCont.textContent = fechaInicioValor;
            recaudacionTotal.textContent = recaudacionValor;
            fechaFinCont.textContent = fechaFinValor;
            pago.textContent = pagoValor;

            document.getElementById("recaudacionCont2").textContent = recaudacionValor;
            document.getElementById("fecha-inicio-cont2").textContent = fechaInicioValor;
            document.getElementById("fecha-fin-cont2").textContent = fechaFinValor;
            document.getElementById("metodoPago2").textContent = pagoValor;
        }
    } else {
        var mensaje = document.getElementById("mensajeError");
        mensaje.style.display = "block";

        setTimeout(function() {
            mensaje.style.display = "none";
        }, 2000); 
    }
});

document.getElementById("botonComprobante").addEventListener("click", function(event) {
    event.preventDefault(); 

    var nombreMedico = document.getElementById("nombreMedico").value;
    var correoMedico = document.getElementById("correoMedico").value;
    var comentariosMedico = document.getElementById("comentariosID").value;
    const nombre = document.getElementById("medicoNombre");
    const correo = document.getElementById("email");
    const comentarios = document.getElementById("comentarios");

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nombreMedico) {
        if(emailRegex.test(correoMedico)){

        var mensaje = document.getElementById("mensajeComprobante");
        mensaje.style.display = "block";
        const nombreValor = nombreMedico;
        const correoValor = correoMedico;
        const comentarioValor = comentariosMedico;
    
  
        nombre.textContent = nombreValor;
        correo.textContent = correoValor;
        comentarios.textContent = comentarioValor;

        document.getElementById("recaudacionCont2").textContent = recaudacionValor;
        document.getElementById("fecha-inicio-cont2").textContent = fechaInicioValor;
        document.getElementById("fecha-fin-cont2").textContent = fechaFinValor;
        document.getElementById("metodoPago2").textContent = pagoValor;

        }
        else{
            var mensajeEmail = document.getElementById("emailError");
            mensajeEmail.style.display = "block";

        setTimeout(function() {
            mensajeEmail.style.display = "none";
        }, 2000); 
        }
    } else {
        var mensaje = document.getElementById("mensajeError");
        mensaje.style.display = "block";

        setTimeout(function() {
            mensaje.style.display = "none";
        }, 2000); 
    }
});

const botonCerrar = document.getElementById("cerrarVentana");
const botonCerrar2 = document.getElementById("cerrarComprobante");
const enviar = document.getElementById("enviarComprobante");

botonCerrar.addEventListener("click", () => {
    mensajeVentana.style.display = "none";

});

botonCerrar2.addEventListener("click", () => {
    mensajeComprobante.style.display = "none";

});

enviar.addEventListener("click", () => {
        envComprobante.style.display = "block";
        
        setTimeout(function(){
            envComprobante.style.display = "none";
        }, 2000);
});
document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        if (email === "paciente@gmail.com" && password === "paciente") {
            window.location.href = "toma_horas.html";
        } else if (email === "doctor@galenos.cl" && password === "doctor") {
            window.location.href = "espera.html";
        } else if (email === "secretaria@galenos.cl" && password === "secretaria") {
            window.location.href = "agendam.html";
        } else if (email === "tesoreria@galenos.cl" && password === "tesoreria") {
            window.location.href = "tesoreria.html";
        } else {
            alert("Contraseña incorrecta o dirección de correo no válida");
        }
    });
});

const userListToggle = document.getElementById("user-list-toggle");
const userList = document.getElementById("user-list");


let usersVisible = false;


function toggleUsers() {
    usersVisible = !usersVisible;
    userList.style.display = usersVisible ? "block" : "none";
}


userListToggle.addEventListener("click", toggleUsers);

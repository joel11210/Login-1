const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");

//inputs
const userValue = document.getElementById("botonValue");
var Pass = document.getElementById("password");
var email = document.getElementById("Email");
var parrafo = document.getElementById("parrafo");


var confirmacion = document.getElementById("confirmacion");

togglePassword.addEventListener("click", function () {
  // toggle the type attribute
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);

  // toggle the icon
  this.classList.toggle("bi-eye");
});

// prevent form submit
const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
});

function confirmacionSi() {
  parrafo.innerHTML = "Usuario Correcto";
  confirmacion.classList.remove("confirmacionFalse");
  confirmacion.classList.add("confirmacionTrue");
}



function enviado() {
  if (email.value === "Admin" && password.value === "123456") {
    
    confirmacionSi();
    
  } else {
    parrafo.innerHTML = `Usuario incorrecto <br /> prueba con Admin && 123456`;
    confirmacion.classList.add("confirmacionFalse");
    confirmacion.classList.remove("confirmacionTrue");
  }
}

userValue.addEventListener("click", enviado);

//parrafo.innerHTML='formulario enviado';

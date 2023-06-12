document.getElementById("btn__registrarse").addEventListener("click", registro);
document.getElementById("btn__inicio-sesion").addEventListener("click", iniciarSesion);
window.addEventListener("resize", anchoPagina);

var contenedor_login_resgistro = document.querySelector('.contenedor__login-registro');
var formulario_login = document.querySelector('.formulario__login');
var formulario_registro = document.querySelector('.formulario__registro');
var caja_trasera_login = document.querySelector('.caja__trasera-login');
var caja_trasera_registro = document.querySelector('.caja__trasera-registro');

function anchoPagina() {
  if (window.innerWidth > 850) {
    caja_trasera_login.style.display = "block";
    caja_trasera_registro.style.display = "block";
  } else {
    caja_trasera_registro.style.display = "block";
    caja_trasera_registro.style.opacity = "1";
    caja_trasera_login.style.display = "none";
    formulario_login.style.display = "block";
    formulario_registro.style.display = "none";
    contenedor_login_resgistro.style.left = "0px";
  }
}

function iniciarSesion() {
  if (window.innerWidth > 850) {
    formulario_registro.style.display = "none";
    contenedor_login_resgistro.style.left = "10px";
    formulario_login.style.display = "block";
    caja_trasera_registro.style.opacity = "1";
    caja_trasera_login.style.opacity = "0";
  } else {
    formulario_registro.style.display = "none";
    contenedor_login_resgistro.style.left = "0px";
    formulario_login.style.display = "block";
    caja_trasera_registro.style.display = "block";
    caja_trasera_login.style.display = "none";
  }
}

function registro() {
  if (window.innerWidth > 850) {
    formulario_registro.style.display = "block";
    contenedor_login_resgistro.style.left = "410px";
    formulario_login.style.display = "none";
    caja_trasera_registro.style.opacity = "0";
    caja_trasera_login.style.opacity = "1";
  } else {
    formulario_registro.style.display = "block";
    contenedor_login_resgistro.style.left = "0px";
    formulario_login.style.display = "none";
    caja_trasera_registro.style.display = "none";
    caja_trasera_login.style.display = "block";
    caja_trasera_login.style.opacity = "1";
  }
}

function login() {
  let user = localStorage.getItem("username");
  let pass = localStorage.getItem("password");

  if (user != null && pass != null) {
    let username = document.getElementById("user").value;
    let password = document.getElementById("pass").value;

    if (user == username && pass == password) {
      // Redireccionar a la página de inicio
      window.location.href = "https://prubeldi.github.io/";
    } else {
      alert("Error: Usuario o contraseña incorrectos");
    }
  }
}

function register() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  localStorage.setItem("username", username);
  localStorage.setItem("password", password);
}

function showInfo() {
  let info = document.getElementById("info");

  if (info.style.display == "none") {
    info.style.display = "block";
  } else {
    info.style.display = "none";
  }
}






// document.getElementById("btn__registrarse").addEventListener("click",registro);
// document.getElementById("btn__inicio-sesion").addEventListener("click",iniciarSesion);
// window.addEventListener("resize", anchoPagina);
// // DECLARACION DE VARIABLES
// var contenedor_login_resgistro = document.querySelector('.contenedor__login-registro');
// var formulario_login = document.querySelector('.formulario__login');
// var formulario_registro = document.querySelector('.formulario__registro');
// var caja_trasera_login = document.querySelector('.caja__trasera-login');
// var caja_trasera_registro = document.querySelector('.caja__trasera-registro');
// function anchoPagina(){
//   if(window.innerWidth>850){
//     caja_trasera_login.style.display="block";
//     caja_trasera_registro.style.display="block";
//   }else{
//     caja_trasera_registro.style.display="block";
//     caja_trasera_registro.style.opacity="1";
//     caja_trasera_login.style.display="none";
//     formulario_login.style.display="block";
//     formulario_registro.style.display="none"
//     contenedor_login_resgistro.style.left="0px";
//   }
// }
// function iniciarSesion(){
//   if(window.innerWidth >850){
//       formulario_registro.style.display = "none";
//       contenedor_login_resgistro.style.left = "10px";
//       formulario_login.style.display="block";
//       caja_trasera_registro.style.opacity ="1";
//       caja_trasera_login.style.opacity="0";
//   }else{
//       formulario_registro.style.display = "none";
//       contenedor_login_resgistro.style.left = "0px";
//       formulario_login.style.display="block";
//       caja_trasera_registro.style.display ="block";
//       caja_trasera_login.style.display="none";
//   }
// }

// function registro(){
//   if(window.innerWidth>850){
//       formulario_registro.style.display = "block";
//       contenedor_login_resgistro.style.left = "410px";
//       formulario_login.style.display="none";
//       caja_trasera_registro.style.opacity ="0";
//       caja_trasera_login.style.opacity="1";
//   }else{
//     formulario_registro.style.display = "block";
//     contenedor_login_resgistro.style.left = "0px";
//     formulario_login.style.display="none";
//     caja_trasera_registro.style.display ="none";
//     caja_trasera_login.style.display="block";
//     caja_trasera_login.style.opacity="1";
//   }
// }



// function login() {
//   let user = localStorage.getItem("username");
//   let pass = localStorage.getItem("password");

//   if (user != null && pass != null) {
//     let username = document.getElementById("user").value;
//     let password = document.getElementById("pass").value;

//     if (user == username && password == pass) {
//       // Redireccionar a la página de inicio
//       window.location.href = "Index.html";
//     } else {
//       alert("Error: Usuario o contraseña incorrectos");
//     }
//   }
// }

// function register(){
//   let username = document.getElementById("user").value;
//   let password = document.getElementById("pass").value;

//   localStorage.setItem("username", username);
//   localStorage.setItem("password", password);
// }

// function showInfo(){
//   let info = document.getElementById("info");

//   if(info.style.display == "none"){
//       info.style.display = "block";
//   }
//   else{
//       info.style.display = "none";
//   }
// }


// function login(){
//   let user = localStorage.getItem("username");
//   let pass = localStorage.getItem("password");

//   if(user != null && pass != null){
//       let username = document.getElementById("user").value;
//       let password = document.getElementById("pass").value;

//       if(user == username && password == pass){
//           alert("Ok");
//       }
//       else{
//           alert("Error");
//       }
//   }
// }

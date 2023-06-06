
const password = document.getElementById('password')
const button =document.getElementById('button')
const showPasswordCheckbox = document.getElementById('showPassword');

button.addEventListener('click', (e) => {
    e.preventDefault()
    const data = { 
        username: username.value,
        password: password.value
    }

    console.log(data)
})



showPasswordCheckbox.addEventListener('change', function() {
  if (showPasswordCheckbox.checked) {
    // Mostrar contraseña
    password.type = 'text';
  } else {
    // Ocultar contraseña
    password.type = 'password';
  }
});

function abrirInicio() {
    // Obtener los valores de los campos de nombre de usuario y contraseña
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Verificar si los campos están completos
    if (username !== '' && password !== '') {
      // Los campos están completos, redirigir a la página de inicio
      window.location.href = 'index.html';
    } else {
      // Los campos no están completos, mostrar un mensaje de error o tomar alguna acción adicional
      alert('Por favor, completa todos los campos antes de continuar.');
    }
  }
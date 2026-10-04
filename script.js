// Seleccionamos el botón por su ID
const boton = document.getElementById('miBoton');

// Escuchamos cuando el usuario hace clic en él
boton.addEventListener('click', function() {
    alert('¡Felicidades! Has hecho clic en el botón y JavaScript está funcionando.');
    document.querySelector('h1').style.color = '#ffedd5';
});
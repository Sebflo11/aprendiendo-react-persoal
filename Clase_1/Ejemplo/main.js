// Vanilla JavaScript

// Lo vamos hacer en modo imperactivo es decir le pasamos el como lo deberia hacer
// Al hacer clic
// Recuperamos el botón
const button = document.querySelector('button');

// Al hacer click en el botón, tenemos que ejecutar una funcion
button.addEventListener('click', function () {
    // Recuperar la id del atributo del html
    const id = button.getAttribute('data-ID')

    // Llamar a un servicio para actualizar si me gusta
    // toggleLike(id)

    if (button.classList.contains('liked')) {
        button.classList.remove('liked')
        button.innerText = 'Me gusta'
    } else {
        button.classList.add('liked')
        button.innerText = 'Quitar me gusta'
    }
})
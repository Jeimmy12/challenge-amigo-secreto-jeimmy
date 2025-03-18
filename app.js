// Nombre: Jeimmy Eche
// Array para almacenar los nombres de los amigos
let amigosList = [];

// Función para cargar la lista desde localStorage
function cargarListaAmigos() {
    const listaGuardada = localStorage.getItem('amigosList');
    if (listaGuardada) {
        amigosList = JSON.parse(listaGuardada);
        actualizarListaAmigos();
    }
}

// Función para guardar la lista en localStorage
function guardarListaAmigos() {
    localStorage.setItem('amigosList', JSON.stringify(amigosList));
}

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById('amigo'); // Campo de entrada
    const nombre = input.value.trim(); // Valor del campo, eliminando espacios en blanco

    if (nombre == "") {
        alert("Debes escribir un nombre"); // Alerta si el campo está vacío
        return; // Detiene la ejecución de la función
    }else{

    amigosList.push(nombre); // Agrega el nombre al array
    input.value = ''; // Limpia el campo de entrada
    actualizarListaAmigos(); // Actualiza la lista en el HTML
    guardarListaAmigos(); // Guarda la lista en localStorage
    
    // Muestra la lista de amigos si estaba oculta
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.classList.remove('hidden');
    }
} 

// Función para actualizar la lista de amigos en el HTML
function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpia la lista actual

    amigosList.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Función para sortear un amigo al azar
function sortearAmigo() {
    if (amigosList.length === 0) {
        alert('Por favor, agrega al menos un amigo a la lista.');
        return;
    }

    const resultado = document.getElementById('resultado');
    const listaAmigos = document.getElementById('listaAmigos');

    // Oculta la lista de amigos
    listaAmigos.classList.add('hidden');

    // Limpia el resultado anterior
    resultado.innerHTML = '';

    // Selecciona un amigo al azar
    const indiceAleatorio = Math.floor(Math.random() * amigosList.length);
    const amigoSecreto = amigosList[indiceAleatorio];

    // Muestra el resultado
    const li = document.createElement('li');
    li.textContent = `Tu amigo secreto es: ${amigoSecreto}`;
    resultado.appendChild(li);
}

// Event listeners para los botones
document.querySelector('.button-add').addEventListener('click', agregarAmigo);
document.querySelector('.button-draw').addEventListener('click', sortearAmigo);

// Cargar la lista de amigos al cargar la página
window.onload = cargarListaAmigos;

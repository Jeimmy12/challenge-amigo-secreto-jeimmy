//Nombre: Jeimmy Eche
// Array para almacenar los nombres de los amigos
let amigosList = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById('amigo');//definición de variables
    const nombre = input.value.trim();

    if (nombre !== '') {
        amigosList.push(nombre); // Agrega el nombre al array
        input.value = ''; // Limpia el campo de entrada
        actualizarListaAmigos(); // Actualiza la lista en el HTML
    }else{
        alert("Debes escribir un nombre")
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
    resultado.innerHTML = ''; // Limpia el resultado anterior

    const indiceAleatorio = Math.floor(Math.random() * amigosList.length);
    const amigoSecreto = amigosList[indiceAleatorio];

    const li = document.createElement('li');
    li.textContent = `Tu amigo secreto es: ${amigoSecreto}`;
    resultado.appendChild(li);
}

// Event listeners para los botones
document.querySelector('.button-add').addEventListener('click', agregarAmigo);
document.querySelector('.button-draw').addEventListener('click', sortearAmigo);
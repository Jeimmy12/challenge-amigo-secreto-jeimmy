// Array para almacenar los nombres de los amigos
let amigosList = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById('amigo'); // Campo de entrada
    const nombre = input.value.trim(); // Valor del campo, eliminando espacios en blanco

    if (nombre === "") {
        alert("Debes escribir un nombre"); // Alerta si el campo está vacío
        return;
    }

    amigosList.push(nombre); // Agrega el nombre al array
    input.value = ''; // Limpia el campo de entrada
    actualizarListaAmigos(); // Actualiza la lista en el HTML

    // Muestra la lista de amigos
    document.getElementById('listaAmigos').classList.remove('hidden');
}

// Función para actualizar la lista de amigos en el HTML
function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpia la lista actual

    amigosList.forEach(amigo => {
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

// Función para borrar la lista de amigos y el mensaje del sorteo
function borrarLista() {
    if (amigosList.length === 0) {
        alert("La lista ya está vacía.");
        return;
    }

    // Vacía el array
    amigosList = [];

    // Elimina el contenido de la lista de amigos y del resultado del sorteo
    const listaAmigos = document.getElementById('listaAmigos');
    const resultado = document.getElementById('resultado');
    listaAmigos.innerHTML = '';
    resultado.innerHTML = '';

    // Opcional: vuelve a mostrar la lista si estuviera oculta
    listaAmigos.classList.remove('hidden');
    resultado.classList.remove('hidden');

    alert("Se han eliminado todos los elementos de la pantalla.");
}

// Asignación de event listeners sin usar atributos inline en el HTML
document.querySelector('.button-add').addEventListener('click', agregarAmigo);
document.querySelector('button[aria-label="Sortear amigo secreto"]').addEventListener('click', sortearAmigo);
document.querySelector('button[aria-label="Borrar lista de amigos"]').addEventListener('click', borrarLista);

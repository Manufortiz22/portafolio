// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los nombres
let amigos = [];

// Función para agregar un nombre
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    // Validación: Nombre no vacío
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    // Validación: Evitar duplicados
    if (amigos.includes(nombre)) {
        alert("El nombre ya está en la lista. Por favor, ingresa un nombre diferente.");
        return;
    }

    // Agregar nombre al array
    amigos.push(nombre);

    // Actualizar la lista en la interfaz
    actualizarLista();

    // Limpiar el campo de entrada
    input.value = "";
}

// Función para actualizar la lista de nombres
function actualizarLista() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpiar la lista

    if (amigos.length === 0) {
        listaAmigos.innerHTML = "<li class='empty-message'>No hay nombres agregados aún.</li>";
        return;
    }

    amigos.forEach((nombre) => {
        const li = document.createElement("li");
        li.textContent = nombre;
        listaAmigos.appendChild(li);
    });
}

// Función para sortear un amigo
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debes agregar al menos dos nombres para realizar el sorteo.");
        return;
    }

    // Seleccionar un nombre aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];

    // Mostrar el resultado
    const resultado = document.getElementById("resultado");
    resultado.textContent = `El amigo secreto es: ${amigoSecreto}`;
    resultado.style.color = "#05DF05"; // Cambia el color del texto
}
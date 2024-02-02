const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const p = document.getElementById("p");
const chatbotInput = document.getElementById("chatbot-input");

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('mobile-menu').addEventListener('click', function () {
        const navbar = document.getElementById('navbar');
        navbar.classList.toggle('show');
    });
});

function choiceAction1() {
    if (button1.textContent === "Consultar estado de mi revisión") {
        hideElement(button1);
        updateElement(button2, "Volver");
        updateElement(p, "Ingrese su número de orden");
        showElement(chatbotInput);
    }
}

function choiceAction2() {
    if (button2.textContent === "Otra consulta") {
        hideElement(button1);
        updateElement(button2, "Volver");
        updateElement(p, "Puede verificar si su consulta se encuentra en Preguntas Frecuentes o llamar al 11-2345-3432.");
    } else if (button2.textContent === "Volver") {
        showElement(button1);
        updateElement(button1, "Consultar estado de mi revisión");
        updateElement(button2, "Otra consulta");
        updateElement(p, "¿Cuál es tu siguiente consulta?");
        hideElement(chatbotInput);
    }
}

function hideElement(element) {
    element.style.display = "none";
}

function showElement(element) {
    element.style.display = "block";
}

function updateElement(element, text) {
    element.textContent = text;
}

function sendCode() {
    const input = document.getElementById("inputCode");
    const value = input.value.toString();
    p.textContent = "Nro.Orden: " + value + ". Equipo: Samsung Galaxy J8+. Estado: Inicio la revisión de su equipo.";
}

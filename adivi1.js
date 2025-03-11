
function validatePassword() {
    const input = document.getElementById("password").value.toLowerCase();
    if (input === "karenenana") {
        alert("¡Correcto! Sigamos adelante.");
        window.location.href = "adivinanza2.html";
    } else {
        alert("Respuesta incorrecta. Intenta de nuevo.");
    }
}
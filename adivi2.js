function validatePassword() {
    const input = document.getElementById("password").value.toLowerCase();
    if (input === "(karen11@)") {
        alert("¡Correcto! Sigamos adelante.");
        window.location.href = "siguiente.html";
    } else {
        alert("Respuesta incorrecta. Intenta de nuevo.");
    }
}
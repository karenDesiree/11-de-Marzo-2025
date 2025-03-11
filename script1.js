const images = ["balloon.png", "confetti.png", "gift.png", "star.png", "cake.png", "ball.png", "party.png", "fireworks.png", "hat.png", "streamer.png"];
for (let i = 0; i < 20; i++) {
    let img = document.createElement("img");
    img.className = "balloon";
    img.src = images[Math.floor(Math.random() * images.length)];
    img.style.left = Math.random() * 100 + "vw";
    img.style.top = Math.random() * 100 + "vh";
    img.style.animationDuration = (Math.random() * 9 + 3) + "s";
    document.querySelector(".balloons").appendChild(img);
}

function startGame() {
    window.location.href = "adivinanza1.html";
}

document.addEventListener("click", function() {
    document.getElementById("musica").play();
    let image1 = document.getElementById("rotatingImage1");
    let image2 = document.getElementById("rotatingImage2");

    image1.style.display = "block"; // Mostrar la primera imagen
    image2.style.display = "none"; // Ocultar la segunda imagen

    // Cambiar imagen cada 1.5 segundos
    setInterval(function() {
        // Alternar entre las dos imágenes
        if (image1.style.display === "block") {
            image1.style.display = "none";
            image2.style.display = "block";
        } else {
            image1.style.display = "block";
            image2.style.display = "none";
        }
    }, 50); // 1500ms = 1.5 segundos
}, { once: true });
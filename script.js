// ===== ABRIR POPUP =====
function abrirPopup(tipo) {

    const popup = document.getElementById("popup");
    const img = document.getElementById("popup-img");
    const title = document.getElementById("popup-title");
    const text = document.getElementById("popup-text");

    // CONTENIDO SEGÚN CATEGORÍA
    if (tipo === "pc") {
        img.src = "assets/img/Opti.jpg";
        title.innerText = "Optimización de PC";
        text.innerText = "Aumenta tus FPS, elimina el lag y mejora el rendimiento total de tu PC para juegos.";
    }

    if (tipo === "mods") {
        img.src = "assets/img/Mods.jpg";
        title.innerText = "Mods para FiveM";
        text.innerText = "Mejora gráficos, texturas sin perder rendimiento en GTA V / FiveM con configuraciones exclusivas.";
    }

    if (tipo === "ff") {
        img.src = "assets/img/Cheatff.jpg";
        title.innerText = "Cheats Free Fire";
        text.innerText = "Cheats premium optimizadas para subir rango rápido con máxima seguridad.";
    }
    if (tipo === "Streaming") {
        img.src = "assets/img/streaming.jpg";
        title.innerText = "Cuentas Streaming";
        text.innerText = "Aquí encuentras cuentas confiables, siempre activas y con garantía durante todo el tiempo de tu suscripción. Servicio seguro, rápido y sin complicaciones.";
    }
    if (tipo === "nitro") {
        img.src = "assets/img/nitro.jpg";
        title.innerText = "Nitro Discord";
        text.innerText = "Directo y confiables. Lleva tu Discord al siguiente nivel! Nitro barato, rápido y 100% seguro.";
    }

    // MOSTRAR POPUP
    popup.style.display = "flex";
}


// ===== CERRAR POPUP =====
function cerrarPopup() {
    document.getElementById("popup").style.display = "none";
}


// ===== CERRAR AL HACER CLICK FUERA (PRO) =====
window.onclick = function(event) {
    const popup = document.getElementById("popup");
    if (event.target === popup) {
        popup.style.display = "none";
    }
}
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();

let particles = [];

// detectar mouse
window.addEventListener("mousemove", function(e) {
    for (let i = 0; i < 4; i++) {
        particles.push({
            x: e.clientX,
            y: e.clientY,
            size: Math.random() * 4 + 1,
            speedX: (Math.random() - 0.5) * 2,
            speedY: (Math.random() - 0.5) * 2
        });
    }
});

// animación
function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < particles.length; i++) {
        let p = particles[i];

        p.x += p.speedX;
        p.y += p.speedY;
        p.size -= 0.05;

        ctx.fillStyle = "#00eaff";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        if (p.size <= 0.2) {
            particles.splice(i, 1);
            i--;
        }
    }

    requestAnimationFrame(animateParticles);
}

animateParticles();

// ajustar tamaño si cambias ventana
window.addEventListener("resize", resizeCanvas);
const cursor = document.getElementById("cursor");

window.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});

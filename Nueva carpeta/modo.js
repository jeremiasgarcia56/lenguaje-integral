// --- Cargar el modo guardado ---
document.addEventListener("DOMContentLoaded", () => {
    const modoGuardado = localStorage.getItem("modo");

    if (modoGuardado === "oscuro") {
        document.body.classList.add("dark-mode");
    }
});

// --- Activar/desactivar modo oscuro ---
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    // Guardar el modo actual
    const modoActual = document.body.classList.contains("dark-mode") ? "oscuro" : "claro";
    localStorage.setItem("modo", modoActual);
}

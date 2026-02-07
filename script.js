// Render mode toggle
document.querySelectorAll(".render-modes button").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelectorAll(".render-modes button")
            .forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
    });
});

// Theme toggle
const toggle = document.getElementById("themeToggle");
toggle.addEventListener("click", () => {
    document.body.classList.toggle("light");
    toggle.textContent =
        document.body.classList.contains("light") ? "☀️" : "🌙";
});


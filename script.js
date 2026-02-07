// Render mode toggle
document.querySelectorAll(".render-modes button").forEach(button => {
    button.addEventListener("click", () => {
        document
            .querySelectorAll(".render-modes button")
            .forEach(b => b.classList.remove("active"));
        button.classList.add("active");
    });
});

// Theme toggle
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light");
    themeToggle.textContent =
        document.body.classList.contains("light") ? "☀️" : "🌙";
});

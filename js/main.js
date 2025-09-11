// Example: Dark mode toggle
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.createElement("button");
  toggle.textContent = "🌙 Toggle Dark Mode";
  toggle.className = "fixed bottom-4 right-4 bg-indigo-600 text-white px-4 py-2 rounded-lg shadow-lg";
  document.body.appendChild(toggle);

  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
});

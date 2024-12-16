// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
  // Select DOM elements
  const colorBox = document.getElementById("color-box");
  const changeColorBtn = document.getElementById("change-color-btn");
  const themeToggle = document.querySelector(".theme-toggle");
  const body = document.body;

  // Function to generate a random color
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // Event listener to change color of the box
  changeColorBtn.addEventListener("click", () => {
    const newColor = getRandomColor();
    colorBox.style.backgroundColor = newColor;
    colorBox.textContent = newColor;
  });

  // Event listener to toggle dark mode
  themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    themeToggle.textContent =
      themeToggle.textContent === "🌞" ? "🌙" : "🌞"; // Toggle emojis
  });
});

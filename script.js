document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".btn");
  if (btn) {
    btn.addEventListener("click", () => {
      btn.textContent = "Obrigado por visitar!";
    });
  }
});

  window.addEventListener("load", () => {
    setTimeout(() => {
      const loader = document.getElementById("starterLoader");
      loader.style.opacity = "0";
      setTimeout(() => loader.style.display = "none", 500); // fade out
    }, 1000); // Show loader for at least 1 second
  });

  
document.addEventListener("DOMContentLoaded", function () {
  // Añadir animación de fadeIn a los elementos principales
  const sections = document.querySelectorAll(".project, .cta");
  sections.forEach((section, index) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(20px)";
    section.style.transition = `opacity 0.5s ease, transform 0.5s ease ${
      index * 0.1
    }s`;

    setTimeout(() => {
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
    }, 100);
  });

  // Añadir efecto hover a los enlaces de GitHub
  const githubLinks = document.querySelectorAll('a[href*="github.com"]');
  githubLinks.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      link.querySelector(".github-icon").style.transform = "scale(1.2)";
    });
    link.addEventListener("mouseleave", () => {
      link.querySelector(".github-icon").style.transform = "scale(1)";
    });
  });
});
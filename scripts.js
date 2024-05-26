document.addEventListener("DOMContentLoaded", () => {
  const accordionHeaders = document.querySelectorAll(".accordion-header");
  const accordionCloses = document.querySelectorAll(".accordion-close");

  accordionHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      const accordionItem = header.parentElement;
      const accordionContent =
        accordionItem.querySelector(".accordion-content");
      const isActive = accordionItem.classList.contains("active");

      document.querySelectorAll(".accordion-item").forEach((item) => {
        item.classList.remove("active");
        item.querySelector(".accordion-content").style.maxHeight = null;
      });

      if (!isActive) {
        accordionItem.classList.add("active");
        accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
      }
    });
  });

  accordionCloses.forEach((close) => {
    close.addEventListener("click", (event) => {
      event.stopPropagation(); // Prevent triggering the header click event
      const accordionItem = close.parentElement.parentElement;
      accordionItem.classList.remove("active");
      accordionItem.querySelector(".accordion-content").style.maxHeight = null;
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const navbarToggle = document.getElementById("navbarToggle");
  const navbarMenu1 = document.getElementById("navbarMenu1");

  navbarToggle.addEventListener("click", () => {
    if (navbarMenu1.style.display === "flex") {
      navbarMenu1.style.display = "none";
    } else {
      navbarMenu1.style.display = "flex";
    }
  });

  // Hide menu1 when window is resized to large screen
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      navbarMenu1.style.display = "none";
    }
  });
});

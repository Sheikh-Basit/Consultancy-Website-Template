"use strict";

// Sticky Navbar
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 40) {
    navbar.classList.add("sticky-top");
  } else {
    navbar.classList.remove("sticky-top");
  }
});

// Back to Top Button
window.addEventListener("scroll", () => {
  const backToTop = document.querySelector(".back-to-top");
  if (window.scrollY > 100) {
    backToTop.style.display = "block";
    backToTop.style.opacity = "1";
  } else {
    backToTop.style.opacity = "0";
    setTimeout(() => {
      if (window.scrollY <= 100) backToTop.style.display = "none";
    }, 300);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const backToTop = document.querySelector(".back-to-top");
  if (backToTop) {
    backToTop.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }
});

// Section Active Class
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");
  const dropdownLinks = document.querySelectorAll(".dropdown-item");

  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 80; // adjust offset for navbar height
    const sectionHeight = section.clientHeight;
    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      current = section.getAttribute("id");
    }
  });

  // Reset all nav links
  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });

  // Reset all dropdown items
  dropdownLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
      // highlight parent dropdown toggle
      link.closest(".dropdown").querySelector(".nav-link").classList.add("active");
    }
  });
});
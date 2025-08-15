// Carousel functionality
const carouselContent = [
  {
    name: "Startup 3",
    title: "Forget About Code",
    text: "Startup Frameworks give you complete freedom over your creative process – you don't have to think about any technical aspects. There are no limits and absolutely no coding.",
  },
  {
    name: "Startup 3",
    title: "Forget About Code",
    text: "Startup Frameworks give you complete freedom over your creative process – you don't have to think about any technical aspects. There are no limits and absolutely no coding.",
  },
  {
    name: "Startup 3",
    title: "Forget About Code",
    text: "Startup Frameworks give you complete freedom over your creative process – you don't have to think about any technical aspects. There are no limits and absolutely no coding.",
  },
  {
    name: "Startup 3",
    title: "Forget About Code",
    text: "Startup Frameworks give you complete freedom over your creative process – you don't have to think about any technical aspects. There are no limits and absolutely no coding.",
  },
];

const carousel = document.querySelector(".carousel");
const dots = document.querySelectorAll(".dot");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let currentIndex = 0;

function updateCarousel() {
  const content = carouselContent[currentIndex];
  carousel.innerHTML = `
      <h5>${content.name}</h5>
      <h2>${content.title}</h2>
      <p>${content.text}</p>
    `;

  dots.forEach((dot) => dot.classList.remove("active"));
  dots[currentIndex].classList.add("active");
}

next.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % carouselContent.length;
  updateCarousel();
});

prev.addEventListener("click", () => {
  currentIndex =
    (currentIndex - 1 + carouselContent.length) % carouselContent.length;
  updateCarousel();
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentIndex = index;
    updateCarousel();
  });
});

// Initial load
updateCarousel();

// Create section carousel style
document.addEventListener("DOMContentLoaded", function () {
  const track = document.querySelector(".create-carousel-track");
  const dots = document.querySelectorAll(".carouseldots .dots");

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      // Move vertically based on slide index
      track.style.transform = `translateY(-${index * 100}%)`;

      // Update active dot
      dots.forEach((d) => d.classList.remove("active"));
      dot.classList.add("active");
    });
  });
});

// Form Styling
const signupTab = document.getElementById("signup-tab");
const loginTab = document.getElementById("login-tab");
const signupForm = document.getElementById("signup-form");
const loginForm = document.getElementById("login-form");

signupTab.addEventListener("click", () => {
  signupTab.classList.add("active");
  loginTab.classList.remove("active");
  signupForm.classList.add("active");
  loginForm.classList.remove("active");
});

loginTab.addEventListener("click", () => {
  loginTab.classList.add("active");
  signupTab.classList.remove("active");
  loginForm.classList.add("active");
  signupForm.classList.remove("active");
});

const slides = [
  {
    title: "Aurora",
    description: "Logistic System",
    background: "url('../images/Aurora.png')",
    tech: [
      { name: "HTML", icon: "../icons/html.png" },
      { name: "CSS", icon: "../icons/css-3.png" },
      { name: "JS", icon: "../icons/js.png" },
      { name: "C#", icon: "../icons/c-sharp.png" },
      { name: "MySQL", icon: "../icons/mysql-database.png" },
      { name: "Figma", icon: "../icons/figma.png" },
      { name: "Office", icon: "../icons/office.png" },
      { name: "Git", icon: "../icons/social.png" },
    ],
    content: "Web Api service to manage products, orders and clients",
    link: "https://github.com/SirFrancis2007/Aurora",
  },
  {
    title: "CAsystem",
    description: "Assistence plattaform control",
    background: "url('../images/Casystem.png')",
    tech: [
      { name: "C#", icon: "../icons/c-sharp.png" },
      { name: "Figma", icon: "../icons/figma.png" },
      { name: "Office", icon: "../icons/office.png" },
      { name: "Git", icon: "../icons/social.png" },
    ],
    content:
      "CASystem is a desktop application for manage asistentance of employees through administrations. This application allows to register employees, create schedules, and monitor attendance.",
    link: "https://github.com/SirFrancis2007/CAsystem",
  },
  {
    title: "5MinutesGames",
    description: "Public videogames website",
    background: "url('../images/5minutes.png')",
    tech: [
      { name: "HTML", icon: "../icons/html.png" },
      { name: "CSS", icon: "../icons/css-3.png" },
      { name: "C#", icon: "../icons/c-sharp.png" },
      { name: "Figma", icon: "../icons/figma.png" },
      { name: "Office", icon: "../icons/office.png" },
      { name: "Git", icon: "../icons/social.png" },
    ],
    content:
      "Deployed Website about videogames develop with unity. Link https://5minutesgames.netlify.app/",
    link: "https://github.com/carlosb-dev/5minutesgames",
  },
];

const title = document.getElementById("title");
const description = document.getElementById("description");
const background = document.getElementById("background");
const navigation = document.getElementById("navigation");
const tech = document.getElementById("tech");
const content = document.getElementById("content");

const linkRepo = document.getElementById("link-repo");

let currentSlide = 0;

function renderSlide(index) {
  const slide = slides[index];

  title.textContent = slide.title;
  description.textContent = slide.description;
  background.style.backgroundImage = slide.background;
  content.textContent = slide.content;

  tech.innerHTML = slide.tech
    .map(
      (item) => `
        <img 
          src="${item.icon}" 
          alt="${item.name}" 
          title="${item.name}" 
          class="tech-icon"
        />
      `,
    )
    .join("");

  linkRepo.onclick = () => {
    window.open(slide.link, "_blank");
  };

  document
    .querySelectorAll(".dot")
    .forEach((dot) => dot.classList.remove("active"));

  document.querySelectorAll(".dot")[index].classList.add("active");
}

function createNavigation() {
  slides.forEach((slide, index) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dot.style.backgroundImage = slide.background;
    dot.addEventListener("click", () => {
      currentSlide = index;
      renderSlide(currentSlide);
    });

    navigation.appendChild(dot);
  });
}

createNavigation();
renderSlide(currentSlide);

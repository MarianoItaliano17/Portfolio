// Objeto de traducciones
const translations = {
  en: {
    position: "Full Stack developer",
    about:
      "Hello! I'm Mariano, a passionate Full Stack developer with a self-taught training. Throughout my career, I've developed my skills through online course platforms and relentless pursuit of knowledge on the internet. I take pride in my ability to tackle challenges and solve problems efficiently, always striving to focused and evolve as a programmer.",
    // Agrega más traducciones aquí
    download: "Download CV",
    projects: "Projects",
    skills: "Skills",
    project1: "Expense Tracker",
    project1_description: "Expense Tracker made with React and MaterialUI",
    project2: "Text Synth",
    project2_description: "Text-to-speech app made with HTML, CSS, and JavaScript",
    project3: "Coffee Web",
    project3_description: "Coffee web made with HTML, CSS and JavaScript",
    project4: "Weather App",
    project4_description: "Weather app made with Angular and OpenWeatherAPI",
    project5: "Figma Clone",
    project5_description: "Figma clone made with Next.js, Liveblocks and Fabric.js",
    project6: "Twitter Clone",
    project6_description: "Twitter clone made with Angular and Firebase",
  },
  es: {
    position: "Programador Full Stack",
    about:
      "¡Hola! Soy Mariano, un desarrollador Full Stack apasionado con una formación autodidacta. A lo largo de mi carrera, he desarrollado mis habilidades mediante plataformas de cursos en línea y una búsqueda constante de conocimiento en internet. Me enorgullece mi capacidad para enfrentar desafíos y resolver problemas de manera eficiente, siempre enfocado en mejorar y evolucionar como programador.",
    // Agrega más traducciones aquí
    download: "Descargar CV",
    projects: "Proyectos",
    skills: "Habilidades",
    project1: "Registro de Gastos",
    project1_description: "Registro de Gastos hecho con React y MaterialUI",
    project2: "Sintetizador de Texto",
    project2_description: "Aplicación de texto a voz hecho con HTML, CSS y JavaScript",
    project3: "Web de Café",
    project3_description: "Sitio Web de Café hecho con HTML, CSS  y JavaScript",
    project4: "Aplicación de Clima",
    project4_description: "Aplicación de Clima hecho con Angular y OpenWeatherAPI",
    project5: "Clon de Figma",
    project5_description: "Clon de Figma hecho con Next.js, Liveblocks y Fabric.js",
    project6: "Clon de Twitter",
    project6_description: "Clon de Twitter hecho con Angular y Firebase",
  },
};

let currentLanguage = "es";

// Función para cambiar el idioma del boton
function toggleLanguage() {
  currentLanguage = currentLanguage === "en" ? "es" : "en";
  changeLanguage(currentLanguage);
  updateLanguageButton(currentLanguage);
}

// Función para cambiar el idioma
function changeLanguage(lang) {
  const elements = document.querySelectorAll("[data-translate]");
  elements.forEach((element) => {
    const key = element.getAttribute("data-translate");
    element.textContent = translations[lang][key];
  });
}

// Función para actualizar el texto del botón de idioma
function updateLanguageButton(lang) {
    const languageButton = document.getElementById('language-button');
    languageButton.textContent = lang === 'en' ? 'EN' : 'ES';
  }

// Inicializa el idioma por defecto (por ejemplo, inglés)
changeLanguage(currentLanguage);
updateLanguageButton(currentLanguage);

/*=============== FILTERS TABS ===============*/
const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tc) => {
      /*tc = tabcontent*/
      tc.classList.remove("filters__active");
    });
    target.classList.add("filters__active");

    tabs.forEach((t) => {
      /* t = tab*/
      t.classList.remove("filter-tab-active");
    });
    tab.classList.add("filter-tab-active");
  });
});

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
});

sr.reveal(`.profile__border`);
sr.reveal(`.profile__name`, { delay: 500 });
sr.reveal(`.profile__profession`, { delay: 600 });
sr.reveal(`.profile__social`, { delay: 700 });
sr.reveal(`.profile__info-group`, { interval: 100, delay: 700 });
sr.reveal(`.profile__buttons`, { delay: 800 });
sr.reveal(`.filters__content`, { delay: 900 });
sr.reveal(`.filters`, { delay: 500 });

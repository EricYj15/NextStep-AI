// Handle tab navigation between sections
const navItems = document.querySelectorAll(".nav-item");
const sections = document.querySelectorAll(".content-section");

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    const targetId = item.dataset.target;

    navItems.forEach((nav) => nav.classList.remove("active"));
    item.classList.add("active");

    sections.forEach((section) => {
      section.classList.toggle("active", section.id === targetId);
    });
  });
});

// Collapse/expand sidebar menu on mobile
const sidebarToggle = document.querySelector(".sidebar-toggle");
const nav = document.querySelector(".nav");

sidebarToggle?.addEventListener("click", () => {
  nav?.classList.toggle("open");
});

// Simulate lesson progression inside the player section
const nextLessonButton = document.getElementById("next-class-btn");
const lessonHeader = document.querySelector("#player .section-header h1");
const lessonSummary = document.querySelector("#player .lesson-panel p");

const lessons = [
  {
    title: "Aula 1: Introdução ao Python",
    summary:
      "Revise os conceitos básicos de Python e escreva um script simples que pede o nome do usuário.",
  },
  {
    title: "Aula 2: Estruturas de Dados",
    summary:
      "Pratique listas, dicionários e tuplas aplicadas a um case de RH inteligente.",
  },
  {
    title: "Aula 3: Automação com Scripts",
    summary:
      "Automatize tarefas repetitivas e gere relatórios em CSV com Python.",
  },
];

let currentLessonIndex = 0;

const updateLesson = () => {
  const lesson = lessons[currentLessonIndex];
  if (lessonHeader) lessonHeader.textContent = lesson.title;
  if (lessonSummary) lessonSummary.textContent = lesson.summary;
};

nextLessonButton?.addEventListener("click", () => {
  currentLessonIndex = (currentLessonIndex + 1) % lessons.length;
  updateLesson();
});

updateLesson();

const previewTitle = document.getElementById('previewTitle');
const codePreview = document.getElementById('codePreview');
const previewButtons = document.querySelectorAll('.preview-btn');
const lessonCounter = document.getElementById('lessonCounter');
const nextBtn = document.getElementById('nextLessonBtn');

const lessons = [
  {
    title: 'Lektion 1 Vorschau: Semantisches Layout',
    code: `<header>\n  <h1>Meine Seite</h1>\n</header>\n<main>\n  <section>\n    <article>Inhalt</article>\n  </section>\n</main>\n<footer>Kontakt</footer>`
  },
  {
    title: 'Lektion 2 Vorschau: Listenstruktur',
    code: `<section>\n  <h2>Lernplan</h2>\n  <ul>\n    <li>HTML Struktur</li>\n    <li>Formulare</li>\n    <li>Komponenten</li>\n  </ul>\n</section>`
  },
  {
    title: 'Lektion 3 Vorschau: Formulare',
    code: `<form>\n  <fieldset>\n    <legend>Kontakt</legend>\n    <label for="mail">E-Mail</label>\n    <input id="mail" type="email" />\n  </fieldset>\n</form>`
  },
  {
    title: 'Lektion 4 Vorschau: Card-Komponente',
    code: `<article class="card">\n  <h3>Projektname</h3>\n  <p>Kurzbeschreibung des Projekts.</p>\n  <a href="#">Mehr erfahren</a>\n</article>`
  }
];

let currentLesson = -1;

function renderLesson(index) {
  currentLesson = index;
  previewTitle.textContent = lessons[index].title;
  codePreview.textContent = lessons[index].code;
  lessonCounter.textContent = `Aktuelle Lektion: ${index + 1} / ${lessons.length}`;
}

previewButtons.forEach((button, index) => {
  button.addEventListener('click', () => renderLesson(index));
});

nextBtn.addEventListener('click', () => {
  const nextIndex = (currentLesson + 1) % lessons.length;
  renderLesson(nextIndex);
});

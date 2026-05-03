const tipBtn = document.getElementById('tipBtn');
const tipOutput = document.getElementById('tipOutput');
const scoreOutput = document.getElementById('scoreOutput');
const checkboxes = document.querySelectorAll('.day-check');

const tips = [
  'Starte den Tag mit einem Glas Wasser.',
  'Baue heute mindestens eine Handvoll Gemüse extra ein.',
  'Wähle bei einer Mahlzeit die Vollkorn-Variante.',
  'Plane einen einfachen, eiweißreichen Snack ein.',
  'Iss bewusst langsamer und achte auf dein Sättigungsgefühl.'
];

function updateScore() {
  const checkedCount = [...checkboxes].filter((box) => box.checked).length;
  scoreOutput.textContent = `Erfüllt: ${checkedCount} von ${checkboxes.length} Punkten`;
}

checkboxes.forEach((box) => {
  box.addEventListener('change', updateScore);
});

tipBtn.addEventListener('click', () => {
  const randomTip = tips[Math.floor(Math.random() * tips.length)];
  tipOutput.textContent = randomTip;
});

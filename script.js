const tipBtn = document.getElementById('tipBtn');
const tipOutput = document.getElementById('tipOutput');

const tips = [
  'Starte den Tag mit einem Glas Wasser.',
  'Fülle die Hälfte deines Tellers mit Gemüse.',
  'Plane einen eiweißreichen Snack für den Nachmittag.',
  'Tausche zuckerhaltige Getränke gegen Wasser oder Tee.',
  'Iss langsam und achte auf dein Sättigungsgefühl.'
];

tipBtn.addEventListener('click', () => {
  const randomTip = tips[Math.floor(Math.random() * tips.length)];
  tipOutput.textContent = randomTip;
});

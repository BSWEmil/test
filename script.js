const aboutBtn = document.getElementById('aboutBtn');
const hobbyBtn = document.getElementById('hobbyBtn');
const aboutOutput = document.getElementById('aboutOutput');
const hobbyOutput = document.getElementById('hobbyOutput');

const aboutFacts = [
  'Ich mag es, neue Websites mit HTML, CSS und JavaScript zu bauen.',
  'Ich lerne gerne durch kleine Praxis-Projekte.',
  'Mein Lieblingsmoment beim Coden: wenn ein Feature endlich funktioniert!'
];

const hobbies = ['⚽ Fußball', '🎵 Musik hören', '💻 Coden', '🎮 Gaming', '🚴 Fahrrad fahren'];

aboutBtn.addEventListener('click', () => {
  const randomFact = aboutFacts[Math.floor(Math.random() * aboutFacts.length)];
  aboutOutput.textContent = randomFact;
});

hobbyBtn.addEventListener('click', () => {
  const randomHobby = hobbies[Math.floor(Math.random() * hobbies.length)];
  hobbyOutput.textContent = `Heute im Fokus: ${randomHobby}`;
});

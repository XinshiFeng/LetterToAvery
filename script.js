const envelope   = document.getElementById("envelope");
const hint       = document.getElementById("hint");
const closeBtn   = document.getElementById("closeBtn");
const petalLayer = document.getElementById("petalLayer");

const PETALS = ["🌸", "🌸", "🌸", "✿", "❀"];
let isOpen = false;

function spawnPetals() {
  for (let i = 0; i < 18; i++) {
    setTimeout(() => {
      const p = document.createElement("span");
      p.className = "petal";
      p.textContent = PETALS[Math.floor(Math.random() * PETALS.length)];
      p.style.left = `${Math.random() * 100}%`;
      const dur = 3.5 + Math.random() * 3;
      p.style.animationDuration = `${dur}s`;
      p.style.animationDelay = "0s";
      p.style.fontSize = `${0.8 + Math.random() * 0.8}rem`;
      petalLayer.appendChild(p);
      setTimeout(() => p.remove(), dur * 1000 + 200);
    }, i * 180);
  }
}

function openEnvelope() {
  isOpen = true;
  envelope.classList.add("open");
  envelope.style.cursor = "default";
  hint.classList.add("hidden");
  spawnPetals();
}

function closeEnvelope() {
  isOpen = false;
  envelope.classList.remove("open");
  envelope.style.cursor = "pointer";
  hint.classList.remove("hidden");
}

envelope.addEventListener("click", () => { if (!isOpen) openEnvelope(); });
closeBtn.addEventListener("click", (e) => { e.stopPropagation(); closeEnvelope(); });

const envelope = document.getElementById("envelope");
const hint     = document.getElementById("hint");
const closeBtn = document.getElementById("closeBtn");

let isOpen = false;

function openEnvelope() {
  isOpen = true;
  envelope.classList.add("open");
  hint.classList.add("hidden");
  envelope.style.cursor = "default";
}

function closeEnvelope() {
  isOpen = false;
  envelope.classList.remove("open");
  hint.classList.remove("hidden");
  envelope.style.cursor = "pointer";
}

envelope.addEventListener("click", () => { if (!isOpen) openEnvelope(); });
closeBtn.addEventListener("click", (e) => { e.stopPropagation(); closeEnvelope(); });

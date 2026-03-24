const envelope   = document.getElementById("envelope");
const hint       = document.getElementById("hint");
const closeBtn   = document.getElementById("closeBtn");
const letterBody = document.getElementById("letterBody");


let isOpen = false;

function open() {
  isOpen = true;
  envelope.classList.add("open");
  hint.classList.add("hidden");
  // stop envelope clicks from bubbling to the close handler
  envelope.style.cursor = "default";
}

function close() {
  isOpen = false;
  envelope.classList.remove("open");
  hint.classList.remove("hidden");
  envelope.style.cursor = "pointer";
}

envelope.addEventListener("click", () => {
  if (!isOpen) open();
});

closeBtn.addEventListener("click", (e) => {
  e.stopPropagation(); // don't re-trigger envelope click
  close();
});

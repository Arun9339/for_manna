const openLetter = document.getElementById("openLetter");
const letter = document.getElementById("letter");
const bloomBtn = document.getElementById("bloomBtn");
const heartLayer = document.querySelector(".floating-hearts");

openLetter.addEventListener("click", () => {
  letter.scrollIntoView({ behavior: "smooth", block: "start" });
  burstHearts(12);
});

function burstHearts(count = 18) {
  for (let i = 0; i < count; i++) {
    const heart = document.createElement("span");
    heart.className = "float-heart";
    heart.textContent = Math.random() > 0.25 ? "♡" : "✦";
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.fontSize = `${14 + Math.random() * 22}px`;
    heart.style.animationDuration = `${3.2 + Math.random() * 2.2}s`;
    heart.style.animationDelay = `${Math.random() * 0.8}s`;
    heartLayer.appendChild(heart);
    heart.addEventListener("animationend", () => heart.remove());
  }
}

bloomBtn.addEventListener("click", () => {
  burstHearts(35);
  bloomBtn.textContent = "A little love, just for you ♡";
  bloomBtn.disabled = true;
  window.setTimeout(() => {
    bloomBtn.disabled = false;
    bloomBtn.textContent = "Send a little love into the sky ♡";
  }, 2600);
});

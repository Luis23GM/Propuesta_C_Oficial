const stack = document.querySelector(".stack");
const cards = Array.from(stack.children)
  .reverse()
  .filter((child) => child.classList.contains("card"));

cards.forEach((card) => stack.appendChild(card));

function moveCard() {
  const lastCard = stack.lastElementChild;
  if (lastCard.classList.contains("card")) {
    lastCard.classList.add("swap");

    setTimeout(() => {
      lastCard.classList.remove("swap");
      stack.insertBefore(lastCard, stack.firstElementChild);
    }, 2000);
  }
}

stack.addEventListener("click", function (e) {
  const card = e.target.closest(".card");
  if (card && card === stack.lastElementChild) {
    card.classList.add("swap");

    setTimeout(() => {
      card.classList.remove("swap");
      stack.insertBefore(card, stack.firstElementChild);
      resetAutoplay();
    }, 1000);
  }
});

let autoplayInterval = setInterval(moveCard, 4000);

function resetAutoplay() {
  clearInterval(autoplayInterval);
  autoplayInterval = setInterval(moveCard, 2000);
}

// Sincronización de audio entre páginas
const audio = document.getElementById('bg-music');
const AUDIO_KEY = 'bg-music-current-time';

// Restaurar tiempo guardado al cargar
window.addEventListener('DOMContentLoaded', () => {
  const savedTime = localStorage.getItem(AUDIO_KEY);
  if (audio && savedTime) {
    audio.currentTime = parseFloat(savedTime);
    // Si el usuario interactuó, reproducir
    audio.play().catch(() => {});
  }
});

// Guardar tiempo cada segundo
if (audio) {
  setInterval(() => {
    localStorage.setItem(AUDIO_KEY, audio.currentTime);
  }, 1000);
}
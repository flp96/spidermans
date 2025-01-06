function handleMouseEnter() {
  this.classList.add('s-card--hovered');
  document.body.id = `${this.id}-hovered`;
}

function handleMouseLeave() {
  this.classList.remove('s-card--hovered');
  document.body.id = '';
}

function addEventListenersToCards() {
  const cardElements = document.getElementsByClassName("s-card");
  
  for (let i = 0; i < cardElements.length; i++) {
    const card = cardElements[i];
    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);

    card.addEventListener("click", () => selectCarouselItem(card));
  }
}

function selectCarouselItem(selectedCard) {
  const selectedItemIndex = Array.from(selectedCard.parentNode.children).indexOf(selectedCard);
  const carousel = document.querySelector(".s-cards-carousel");

  const rotateYDeg = -120 * selectedItemIndex;
  carousel.style.transform = `translateZ(-40vw) rotateY(${rotateYDeg}deg)`;

  const activeButtonElement = document.querySelector('.s-controller__button--active');
  if (activeButtonElement) {
    activeButtonElement.classList.remove('s-controller__button--active');
  }

  const controllerButtons = document.querySelectorAll('.s-controller__button');
  if (controllerButtons[selectedItemIndex]) {
    controllerButtons[selectedItemIndex].classList.add('s-controller__button--active');
  }
}

document.addEventListener("DOMContentLoaded", addEventListenersToCards, false);

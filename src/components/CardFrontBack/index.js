import "./style.css";
import CardGame from "../CardGame";

const CardFrontBack = () => {
  window.cardFrontBack = {};
  window.cardFrontBack.handleClick = (event) => {
    const $origin = event.target;
    const $cardFrontBack = $origin.closest(".card-front-back");

    $cardFrontBack.classList.toggle("active");
  };

  return `
        <article class="card-front-back" onclick="cardFrontBack.handleClick(event)">
            <div class="front">
                ${CardGame()}
            </div>
            <div class="back">
                ${CardGame("indiana", "paul george indiana")}
            </div>
        </article>
    `;
};

export default CardFrontBack;

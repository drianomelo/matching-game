import "./style.css";
import CardGame from "../CardGame";

const CardFrontBack = () => {
  return `
        <article class="card-front-back">
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

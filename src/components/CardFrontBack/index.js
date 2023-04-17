import "./style.css";
import CardGame from "../CardGame";

const CardFrontBack = () => {
  return `
        <article class="card-front-back">
            ${CardGame()}
            ${CardGame("indiana", "paul george indiana")}
        </article>
    `;
};

export default CardFrontBack;

import "./style.css";

const CardGame = (icon = 'bola', alt = "bola de basquete") => {
  return `
        <article class="card-game">
            <img src = "../../../src/images/${icon}.png" alt="${alt}">
        </article>
    `;
};

export default CardGame;

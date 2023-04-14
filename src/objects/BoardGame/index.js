import "./style.css";
import CardGame from "../../components/CardGame";

const BoardGame = (amountCards) => {
  const $htmlCardGame = CardGame();
  const $htmlBoardGame = $htmlCardGame.repeat(amountCards);

  return `
    <section class="board-game">
      ${$htmlBoardGame}
    </section>
  `;
};

export default BoardGame;

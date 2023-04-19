import "./style.css";
import PlayerName from "../../components/PlayerName";
import PlayerScore from "../../components/PlayerScore";
import VsPlayer from "../../components/VsPlayer";
import ArrowDown from "../../components/ArrowDown";

const ScoreBoard = () => {
  return `
    <header class="score-board">
        ${ArrowDown()}
        ${PlayerName("Player1")}
        ${PlayerScore(3)}
        ${VsPlayer()}
        ${PlayerScore(1)}
        ${PlayerName("Player2")}
    </header>
  `;
};

export default ScoreBoard;

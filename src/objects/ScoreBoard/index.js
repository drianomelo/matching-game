import "./style.css";
import PlayerName from "../../components/PlayerName";
import PlayerScore from "../../components/PlayerScore";
import VsPlayer from "../../components/VsPlayer";

const ScoreBoard = () => {
  return `
    <header class="score-board">
        ${PlayerName("Player1")}
        ${PlayerScore(2)}
        ${VsPlayer()}
        ${PlayerScore(1)}
        ${PlayerName("Player2")}
    </header>
  `;
};

export default ScoreBoard;

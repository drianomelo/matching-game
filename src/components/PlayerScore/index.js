import "./style.css";

const PlayerScore = (points = 0) => {
  return `
        <ul class="player-score" data-points="${points}">
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    `;
};

export default PlayerScore;

import "./style.css";

const PlayerScore = (points = 0) => {
  return `
        <ul class="player-score" data-points="${points}">
            <li class="pointer">1</li>
            <li class="pointer">2</li>
            <li class="pointer">3</li>
        </ul>
    `;
};

export default PlayerScore;

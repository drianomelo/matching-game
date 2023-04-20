import "./style.css";

const ArrowDown = (currentPlayer = 1) => {
  return `
        <div class="arrow-down" data-player="${currentPlayer}">
            <img src="../../../src/images/arrow.svg" alt="Seta apontada para baixo" >
        </div>
    `;
};

export default ArrowDown;

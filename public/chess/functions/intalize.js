const Board = new board();
const piecelist = Board.getBoard();
const img_dir = document.getElementById('image-container');
for (let i = 0; i <= 7; i++) {
    for (let j = 7; j >= 0; j--) {
      if (piecelist[i][j].getPiece() != null) {
        const is_white = piecelist[i][j].getPiece().IsWhite() ? "white" : "black";
        const pieceName = piecelist[i][j].getPiece().GetName();
        const leftPosition = 25 + 96 * i;
        const topPosition = 675 - 96 * (7 - j);

        const div = document.createElement('div');
        div.classList.add('a');
        div.style.left = `${leftPosition}px`;
        div.style.top = `${topPosition}px`;

        const img = document.createElement('img');
        img.src = `images/${is_white}-${pieceName}.png`;
        img.setAttribute('piece', `${is_white}_${pieceName}`);
        
        div.appendChild(img);
        img_dir.appendChild(div);
      }
    }
  }
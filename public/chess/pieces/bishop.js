class bishop extends abstract_piece {
    constructor(is_white_piece) {
        super(is_white_piece);
    }

    getMoveCount(board, x, y) {
        let temp = [];
        let directions = [
            { dx: -1, dy: 1 }, // top-left
            { dx: -1, dy: -1 }, // bottom-left
            { dx: 1, dy: -1 }, // bottom-right
            { dx: 1, dy: 1 }  // top-right
        ];

        for (let direction of directions) {
            let tx = x;
            let ty = y;

            while (true) {
                tx += direction.dx;
                ty += direction.dy;

                if (tx < 0 || tx > 7 || ty < 0 || ty > 7) break;

                let pieceAtTarget = board[tx][ty].getPiece();

                if (pieceAtTarget == null) {
                    temp.push([tx, ty]);
                } else {
                    if (pieceAtTarget === this) continue; // Skip if the piece is the same as this one

                    if (pieceAtTarget.IsWhite() === this.IsWhite()) {
                        break; // Stop if the piece is the same color
                    } else {
                        temp.push([tx, ty]);
                        break; // Stop if the piece is the opposite color
                    }
                }
            }
        }
        
        return temp;
    }

    GetDisplayName() {
        return "B";
    }

    GetName() {
        return "bishop";
    }
}

class queen extends abstract_piece {
    constructor(is_white_piece) {
        super(is_white_piece);
    }

    getMoveCount(board, x, y) {
        let temp = [];
        const directions = [
            { dx: -1, dy: 0 }, // Left
            { dx: 1, dy: 0 }, // Right
            { dx: 0, dy: -1 }, // Up
            { dx: 0, dy: 1 }, // Down
            { dx: -1, dy: -1 }, // Top-left
            { dx: -1, dy: 1 }, // Bottom-left
            { dx: 1, dy: -1 }, // Top-right
            { dx: 1, dy: 1 } // Bottom-right
        ];

        for (let { dx, dy } of directions) {
            let tx = x;
            let ty = y;

            while (true) {
                tx += dx;
                ty += dy;

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
        return "Q";
    }

    GetName() {
        return "queen";
    }
}

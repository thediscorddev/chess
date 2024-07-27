class knight extends abstract_piece {
    constructor(is_white_piece) {
      super(is_white_piece);
    }
  
    IsValidTileToLand(board, x, y) {
      if (x >= 0 && x <= 7 && y >= 0 && y <= 7) {
        if (board[x][y].getPiece() == null) {
          return true;
        } else if (board[x][y].getPiece().IsWhite() != this.IsWhite()) {
          return true;
        }
      }
      return false;
    }
  
    getMoveCount(board, x, y) {
      const temp = [];
      if (this.IsValidTileToLand(board, x + 2, y - 1)) temp.push([x + 2, y - 1]);
      if (this.IsValidTileToLand(board, x + 2, y + 1)) temp.push([x + 2, y + 1]);
      if (this.IsValidTileToLand(board, x - 2, y - 1)) temp.push([x - 2, y - 1]);
      if (this.IsValidTileToLand(board, x - 2, y + 1)) temp.push([x - 2, y + 1]);
      if (this.IsValidTileToLand(board, x + 1, y + 2)) temp.push([x + 1, y + 2]);
      if (this.IsValidTileToLand(board, x + 1, y - 2)) temp.push([x + 1, y - 2]);
      if (this.IsValidTileToLand(board, x - 1, y - 2)) temp.push([x - 1, y - 2]);
      if (this.IsValidTileToLand(board, x - 1, y + 2)) temp.push([x - 1, y + 2]);
      return temp;
    }
    GetDisplayName()
    {
        return "N";
    }
    GetName()
    {
        return "knight";
    }
  }
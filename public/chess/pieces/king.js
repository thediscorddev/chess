class king extends abstract_piece
{
    constructor(is_white_piece)
    {
        super(is_white_piece);
    }
    getMoveCount(board,x,y)
    {
        var temp = [];
        for(var dx = -1; dx <= 1; dx++)
        {
            for(var dy = -1; dy <= 1; dy++)
            {
                if(x+dx < 0|| x+dx > 7|| y+dy <0|| y+dy>7) continue;
                if(board[x+dx][y+dy].getPiece() == null) temp.push([x+dx,y+dy]);
                else if(board[x+dx][y+dy].getPiece().IsWhite() != this.IsWhite()) temp.push([x+dx,y+dy]);
            }
        }
        if(this.MoveCount() == 0)
        {
            if(this.IsWhite() == true) {
            if(board[0][7].getPiece().MoveCount() == 0 && board[0][7].getPiece().IsWhite() == this.IsWhite() && board[0][7].getPiece() instanceof rook)
                {
                  var dt = x-1;
                  while(dt >0)
                    {
                        if(board[dt][7].getPiece() != null) break;
                        dt--;
                    }
                    if(dt == 0) temp.push([2,7,0,7]);
                }
            if(board[7][7].getPiece().MoveCount() == 0 && board[7][7].getPiece().IsWhite() == this.IsWhite() && board[7][7].getPiece() instanceof rook)
                {
                    var dt = x+1;
                    while(dt <7)
                      {
                          if(board[dt][7].getPiece() != null) break;
                          dt++;
                      }
                      if(dt == 7) temp.push([6,7,7,7]);
                }
            }else {
            if(board[7][0].getPiece().MoveCount() == 0 && board[7][0].getPiece().IsWhite() == this.IsWhite() && board[7][0].getPiece() instanceof rook)
                {
                    var dt = x+1;
                    while(dt < 7)
                      {
                          if(board[dt][0].getPiece() != null) break;
                          dt++;
                      }
                      if(dt == 7) temp.push([6,0,7,0]);
                  }
            if(board[0][0].getPiece().MoveCount() == 0 && board[0][0].getPiece().IsWhite() == this.IsWhite() && board[0][0].getPiece() instanceof rook)
                {
                    var dt = x-1;
                    while(dt >0)
                      {
                          if(board[dt][0].getPiece() != null) break;
                          dt--;
                      }
                      if(dt == 0) temp.push([2,0,0,0]);
                  };
        }
    }
        return temp;
    }
    GetDisplayName()
    {
        return "K";
    }
    GetName()
    {
        return "king";
    }
}
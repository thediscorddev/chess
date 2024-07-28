class pawn extends abstract_piece
{
    constructor(is_white_piece)
    {
        super(is_white_piece);
    }
    getMoveCount(board,x,y)
    {
        var temp=[];
        var max_limit = (this.IsWhite() == true)?0:7;
        var direction=(this.IsWhite() == true)?-1:1;
        console.log(max_limit)
        console.log(max_limit != y)
        if(y!=max_limit) {
        if(board[x][y+direction].getPiece() == null)temp.push([x,y+direction,null,null]);
        if(this.MoveCount() == 0 && board[x][y+2*direction].getPiece() == null && board[x][y+direction].getPiece() == null) temp.push([x,y+2*direction,null,null]);
        if(x != 0) {
            if(board[x-1][y+direction].getPiece() != null) {
                if(this.IsWhite() != board[x-1][y+direction].getPiece().IsWhite()) temp.push([x-1,y+direction,x-1,y+direction]);
            }
            if (board[x-1][y].getPiece() != null) {
                if (this.IsWhite() != board[x-1][y].getPiece().IsWhite() && board[x-1][y].getPiece() instanceof pawn) {
                  if (board[x-1][y].getPiece().MoveCount() == 1) {
                    temp.push([x-1, y+direction,x-1,y]);
                  }
                }
              }                      
        }
        if(x != 7) {
            if(board[x+1][y+direction].getPiece() != null) {
                if(this.IsWhite() != board[x+1][y+direction].getPiece().IsWhite()) temp.push([x+1,y+direction,x+1,y+direction]);
            }
            if (board[x+1][y].getPiece() != null) {
                if (this.IsWhite() != board[x+1][y].getPiece().IsWhite() && board[x+1][y].getPiece() instanceof pawn) {
                  if (board[x+1][y].getPiece().MoveCount() == 1) {
                    temp.push([x+1, y,x+1,y+direction]);
                  }
                }
              }    
        }
    }
    return temp;
    }
    GetDisplayName()
    {
        return "P";
    }
    GetName()
    {
        return "pawn";
    }
}
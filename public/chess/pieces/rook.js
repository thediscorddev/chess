class rook extends abstract_piece
{
    constructor(is_white_piece)
    {
        super(is_white_piece);
    }
    getMoveCount(board,x,y)
    {
        var temp=[];
        for(var i = x; i>= 0;i--)
        {
            if(board[i][y].getPiece() == null)
            {
                temp.push([i,y]);
            } else {
                if(board[i][y].getPiece() == this) continue;
                if(board[i][y].getPiece().IsWhite() == this.IsWhite()) break;
                else {
                    if(board[x][i].getPiece() instanceof king) temp.push([x,i,true]);
                    else temp.push([x,i]);
                    break;
                }
            }
        }
        for(var i = x; i<= 7;i++)
            {
                if(board[i][y].getPiece() == null)
                {
                    temp.push([i,y]);
                } else {
                    if(board[i][y].getPiece() == this) continue;
                    if(board[i][y].getPiece().IsWhite() == this.IsWhite()) break;
                    else {
                        if(board[x][i].getPiece() instanceof king) temp.push([x,i,true]);
                        else temp.push([x,i]);
                        break;
                    }
                }
            }
        for(var i = y; i<= 7;i++)
            {
                if(board[x][i].getPiece() == null)
                {
                    temp.push([x,i]);
                } else {
                    if(board[x][i].getPiece() == this) continue;
                    if(board[x][i].getPiece().IsWhite() == this.IsWhite()) break;
                    else {
                        if(board[x][i].getPiece() instanceof king) temp.push([x,i,true]);
                        else temp.push([x,i]);
                        break;
                    }
                }
            }
        for(var i = y; i>= 0;i--)
            {
                if(board[x][i].getPiece() == null)
                {
                    temp.push([x,i]);
                } else {
                    if(board[x][i].getPiece() == this) continue;
                    if(board[x][i].getPiece().IsWhite() == this.IsWhite()) break;
                    else {
                        if(board[x][i].getPiece() instanceof king) temp.push([x,i,true]);
                        else temp.push([x,i]);
                        break;
                    }
                }
            }
        return temp;
    }
    GetDisplayName()
    {
        return "R";
    }
    GetName()
    {
        return "rook";
    }
}
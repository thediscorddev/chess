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
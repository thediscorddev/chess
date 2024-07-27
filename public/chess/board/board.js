class board {
    #board_area = [];
    constructor() {
        /*
           T 0 1 2 3 4 5 6 7 #
           0 R N B Q K B N R 8
           1 P P P P P P P P 7
           2                 6
           3                 5
           4                 4
           5                 3
           6 P P P P P P P P 2
           7 R N B Q K B N R 1
           # A B C D E F G H #
        */
       for(var x = 0; x <= 7; x++)
       {
        var is_white = false;
        this.#board_area[x] = [];

        for(var y = 0; y <= 7; y++)
        {
            if(y == 6|| y == 7) is_white = true;
            if(y > 1 && y < 6) this.#board_area[x][y]= new piecegetter(null);
            else if (y == 1 || y == 6) this.#board_area[x][y]= new piecegetter(new pawn(is_white));
            else {
                if(x == 0|| x == 7)this.#board_area[x][y]=  new piecegetter(new rook(is_white));
                if(x == 1|| x == 6)this.#board_area[x][y]=  new piecegetter(new knight(is_white));
                if(x == 2|| x == 5)this.#board_area[x][y]=  new piecegetter(new bishop(is_white));
                if(x == 3)this.#board_area[x][y]=  new piecegetter(new queen(is_white));
                if(x == 4)this.#board_area[x][y]=  new piecegetter(new king(is_white));
            }

        }
       }
    }
    updateBoard(new_board) {
        this.#board_area=new_board;
    }
    getBoard()
    {
        return this.#board_area;
    }
    displayBoard()
    {
        var string_board = "";
        for(var y = 0; y <= 7; y++)
        {
            for(var x = 0; x<= 7; x++)
            {
                if(this.#board_area[x][y].getPiece() == null) string_board+="   ";
                else {
                    if(this.#board_area[x][y].getPiece().IsWhite() == false) string_board+=this.#board_area[x][y].getPiece().GetDisplayName() + "B ";
                    else string_board+=this.#board_area[x][y].getPiece().GetDisplayName() + "  ";
                }
            }
            string_board+="\n";
        }
        return string_board;
    }
}
class abstract_piece {
    #move_count = 0;
    #is_white_piece;
    constructor(is_white)
    {
        this.#is_white_piece=is_white;
    }
    MoveCount()
    {
        return this.#move_count;
    }
    IsWhite()
    {
        return this.#is_white_piece;
    }
    move()
    {
        this.#move_count++;
    }
    getMoveCount(board_array, x, y)
    {
        /*move count = [[x,y],[x,y],...] or []*/
        var temp = [];
        return temp; // override later
    }
    GetDisplayName()
    {
        return null;
    }
    GetName()
    {
        return "noname";
    }
}
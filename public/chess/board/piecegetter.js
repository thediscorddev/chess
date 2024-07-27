class piecegetter {
    #piece;
    constructor(pieces) {
        this.#piece = pieces;
    }
    setPiece(pieces)
    {
        this.#piece=pieces;
    }
    getPiece()
    {
        if(!this.#piece) return null;
        return this.#piece;
    }
    GetDisplayName()
    {
       if(this.#piece == null) return null;
       return this.#piece.GetDisplayName();
    }
}
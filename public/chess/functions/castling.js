function castling(pieceList,KdesX,KdesY,isWhite)
{
    const name = (isWhite==true)?"white_rook":"black_rook";
    const RookPositionX = (KdesX == 2)?0:7;
    const RookPositionArriveX = (KdesX == 2)?3:5;
    const RookRenderPosX = 25 + 96 * RookPositionX;
    const RookRenderPosY = 675 - 96 * (7 - KdesY);
    const RookArrivalPosX = 25 + 96 * RookPositionArriveX;
    const PositionErrorAllowed = 10;
    pieceList.forEach(e => {
        if(e.getAttribute("piece") == name) {
            if(Math.abs(parseInt(e.parentElement.style.top) - RookRenderPosY) <= PositionErrorAllowed && Math.abs(parseInt(e.parentElement.style.left) - RookRenderPosX) <= PositionErrorAllowed)
            {
                piecelist[RookPositionX][KdesY].getPiece().move();
                piecelist[RookPositionArriveX][KdesY].setPiece(piecelist[RookPositionX][KdesY].getPiece());
                piecelist[RookPositionX][KdesY].setPiece(null);
                setTimeout(function() {
                for (let i = 1; i <= 5; i++) {
                    setTimeout(() => {
                      e.parentElement.style.left = `${parseInt(e.parentElement.style.left) + (RookArrivalPosX-RookRenderPosX)/5}px`;
                    }, 40 * (Math.abs(i)+1));
                  }
                },200);
            }  
        };
      })
}
function handlingPieceMovement()
{
    const a1 = parseInt(window.selected_piece.parentElement.style.left);
      const b1 = parseInt(window.selected_piece.parentElement.style.top);
      const a2 = parseInt(event.target.parentElement.style.left);
      const b2 = parseInt(event.target.parentElement.style.top);
      const x1 = Math.ceil((a1-25)/96);
      const y1 = Math.ceil((b1-675)/96+7);
      const x2 = Math.ceil((a2-25)/96);
      const y2 = Math.ceil((b2-675)/96+7);
      const elements = document.querySelectorAll('[piece]');
      const elementss = document.querySelectorAll('.a');
      setTimeout(function() {
        const SelectedPiece = window.selected_piece;
        const step = 4*(x2-x1);
        var start_point = 1;
        var endpoint = step;
        var y_step,x_step = 0;
        if(step < 0)endpoint = -1*step;
        if(step == 0) endpoint=5;
        x_step= (a2-a1)/endpoint;
        y_step = (b2-b1)/endpoint;
        
        for (let i = start_point; i <= endpoint; i++) {
          setTimeout(() => {
            SelectedPiece.parentElement.style.left = `${parseInt(SelectedPiece.parentElement.style.left) + x_step}px`;
            SelectedPiece.parentElement.style.top = `${parseInt(SelectedPiece.parentElement.style.top) + y_step}px`;
          }, 35 * (Math.abs(i)+1));
        }

      
    },200)
      if (piecelist[x2][y2].getPiece() != null) {

elementss.forEach(e => {
  const leftPos = 25+96*x2 || 0;
  const topPos = 675 - 96*(7-y2) || 0;

  if (Math.abs(parseInt(e.style.left) - leftPos) < 10 && Math.abs(parseInt(e.style.top) - topPos) < 10) {
    e.innerHTML = '';
    e.remove();
  }
});

}
elements.forEach(function(element) {
        if (element.getAttribute('piece') == 'move') {
          element.remove();
        }
      });
      piecelist[x1][y1].getPiece().move();
      piecelist[x2][y2].setPiece(piecelist[x1][y1].getPiece());
      piecelist[x1][y1].setPiece(null);
      if(piecelist[x2][y2].getPiece() instanceof king)
      {
        if(piecelist[x2][y2].getPiece().MoveCount()-1 <= 0) {
        if((x2 == 2|| x2 == 6) && (y2 == 0 || y2 == 7)) castling(elements,x2,y2,piecelist[x2][y2].getPiece().IsWhite());
        }
      }
}
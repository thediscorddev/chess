function placeMoveTile()
{
    if(window.selected_piece != null) {
        const elements = document.querySelectorAll('[piece]');
        window.selected_piece = null;
        elements.forEach(function(element) {
        if (element.getAttribute('piece') == 'move') {
          element.remove();
        }
      });
      }
      const target = event.target.parentElement;
      const x = Math.ceil((parseInt(target.style.left) -25)/96);
      const y = Math.ceil((parseInt(target.style.top)-675)/96 +7);
      const move_list = piecelist[x][y].getPiece().getMoveCount(piecelist,x,y);
      for(var i = 0; i < move_list.length; i++)
    {
        const leftPosition = 25 + 96 * move_list[i][0];
        const topPosition = 675 - 96 * (7 - move_list[i][1]);

        const div = document.createElement('div');
        div.classList.add('a');
        div.style.left = `${leftPosition}px`;
        div.style.top = `${topPosition}px`;
 
        const img = document.createElement('img');
        img.src = `images/available_move.png`;
        img.setAttribute('piece', `move`);
        window.selected_piece= event.target;
        div.appendChild(img);
        img_dir.appendChild(div);
    }
}
img_dir.addEventListener('click', function() {
    if (event.target.getAttribute("piece") != null && event.target.getAttribute("piece") != "move") {
      placeMoveTile();
    }else if(event.target.getAttribute("piece") == "move")
    {
        handlingPieceMovement();
    }
  });
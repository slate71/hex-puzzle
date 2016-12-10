


// Drap and Drop


function dragstart_handler(event) {
  console.log(event);
  event.dataTransfer.setData("text/plain", event.target.id);
}

function drop_handler(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("text/plain");
  event.target.appendChild(document.getElementById(data));
}

function dragover_handler(event) {
  event.preventDefault();
  event.dataTransfer.dropEffect = "move";
}

// Scramble

function click_handler(event) {
  var bg = document.querySelector('#droppableZone');
  var pieces = [].slice.call(document.querySelectorAll('.piece'));

  bg.style.backgroundImage = "url('images/_Puzzle_bg_unsolved.png')";

  pieces.forEach(piece => {
    piece.style.display = 'block'
    piece.style.position = 'absolute';
    piece.style.top = Math.floor(Math.random() * (48+1)) + '%';
    piece.style.left = Math.floor(Math.random() * (87+1)) + '%';
    document.querySelector('#pieces-tray').appendChild(piece);
  });
}





// Congradulate User

(function() {
  var animations = ["animate", "animate_rotate", "animate_horizontal", "animate_vertical", "animate_crazy"];
  var elementsToShake = document.querySelectorAll('.piece');
  var shakeElements = function(elements) {
    /* Will store a randomly generated integer value, 
     * needed in picking a random animation.
     */
    var randomIndex = 0;

    function shake(elementToShake, index) {
      // Generate random integer between 0 and the length of the array of animations.
      randomIndex = Math.floor(Math.random() * (animations.length));
      // Add a shake animation class to element.
      elementToShake.classList.add(animations[randomIndex]);
    }
    // Call the shake function on each element.
    elements.forEach(shake);
  };
  // Puzzle has been solved by gamer.
  var puzzleSolved = function() {
    setTimeout(shakeElements, 3000, elementsToShake);
  }
  // Activate congratulations to user by calling the function.
  puzzleSolved();

})()


function dragStart(event) {
  event.dataTransfer.setData("Text", event.target.id);
}


function allowDrop(event) {
  event.preventDefault();
}

function drop(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("Text");
  event.target.appendChild(document.getElementById(data));
}





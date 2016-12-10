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





window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  const game = new Game()
  startButton.addEventListener("click", function () {
    startGame();
  })
  restartButton.addEventListener("click", function () {
    // Call the restartGame function when the button is clicked
    restartGame();
  });
  function restartGame() {
    location.reload();
  }
  
  function startGame() {
    console.log("start game");
    
    game.start()

  }
  function handleKeydown(event) {
    const key = event.key;
    const possibleKeystrokes = [
      "ArrowLeft",
      "ArrowUp",
      "ArrowRight",
      "ArrowDown",
    ];

    if (possibleKeystrokes.includes(key)) {
      event.preventDefault();
      switch (key) {
        case "ArrowLeft":
        
          game.player.directionX = -1;
          break;
        case "ArrowUp":
          
          game.player.directionY = -1;
          break;
        case "ArrowRight":
          
          game.player.directionX = 1;
          break;
        case "ArrowDown":
          
          game.player.directionY = 1;
          break;
      }
    }
  }
  window.addEventListener("keydown", handleKeydown);
};

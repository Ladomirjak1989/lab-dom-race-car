
class Player extends Component {
  constructor(gameScreen, left, top, width, height, imgSrc) {
    super(gameScreen, left, top, width, height, imgSrc)
    // this.gameScreen = gameScreen;
    // this.left = left;
    // this.top = top;
    // this.width = width;
    // this.height = height;
    this.directionX = 0;
    this.directionY = 0;
    // this.element = document.createElement("img")
    // this.element.style.position = `absolute`
    // this.element.src = imgSrc
    // this.element.style.left = `${this.left}px`;
    // this.element.style.top = `${this.top}px`;
    // this.element.style.width = `${this.width}px`
    // this.element.style.height = `${this.height}px`
    // this.gameScreen.appendChild(this.element)
  }

  move() {
    this.left += this.directionX
    this.top += this.directionY

    // this.left = Math.max(0,Math.min(this.left, this.gameScreen.offsetWidth - this.width))
    // this.top = Math.max(0,Math.min(this.top, this.gameScreen.offsetheight - this.height))
    if (this.left < 10) {
      this.left = 10;

    }

    // handles top side
    if (this.top < 10) {
      this.top = 10;
    }

    // handles right hand side
    if (this.left > this.gameScreen.offsetWidth - this.width - 10) {
      this.left = this.gameScreen.offsetWidth - this.width - 10;
    }

    // handles bottom side
    if (this.top > this.gameScreen.offsetHeight - this.height - 10) {
      this.top = this.gameScreen.offsetHeight - this.height - 10;
    }
    this.updatePosition()

  }
  updatePosition() {

    this.element.style.left = `${this.left}px`
    this.element.style.top = `${this.top}px`

  }
  didCollide(obstacle) {

    const playerRect = this.element.getBoundingClientRect()
    const obstacleRect = obstacle.element.getBoundingClientRect()

    if (
      playerRect.left < obstacleRect.right &&
      playerRect.right > obstacleRect.left &&
      playerRect.top < obstacleRect.bottom &&
      playerRect.bottom > obstacleRect.top
    ) {
      return true
    } else {
      return false
    }

  }

}
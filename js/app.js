/**
 * @description Declaring variables and select DOM elements
 * to display lives and total score.
 */
let lives = 3;
let scorePoints = 0;
let waterReached = false;
const counter = document.querySelector('.counter');
const score = document.querySelector('.score');
counter.innerHTML = lives;
score.innerHTML = scorePoints;

/**
 * @class Character
 * @classdesc Creates a new game character, enemy or player
 */
class Character {
    /**
     * @constructor Constructs Character
     * @param x - x coordinate
     * @param y - y coordinate
     * @param sprite - picture for particular character
     */
    constructor(x, y, sprite) {
        this.x = x;
        this.y = y;
        this.sprite = sprite;
    }

    /**
     * @description Renders Character to the screen
     */
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}

/**
 * @class Enemy
 * @classdesc Creates an Enemy character in game, subclass of Character
 */
class Enemy extends Character {
    /**
     * @constructor Constructs Enemy
     * @param x - x coordinate
     * @param y - y coordinate
     * @param speed - moving speed of Enemy character
     * @param sprite - picture for Enemy character
     */
    constructor(x, y, speed, sprite = 'images/enemy-bug.png') {
        super(x, y, sprite);
        this.speed = speed;
    }

    /**
     * @description Updates position of Enemy character when moving,
     *              if it reaches the end of the canvas it is moved back to begining.
     * @param dt - multiply constant to equalize the speed on all devices.
     */
    update(dt) {
        this.x = this.x + this.speed * dt;
        if (this.x >= 505) {
            this.x = 0;
        }
        this.checkCollision();
    }

    /**
     * @description Check for enemy-player collision.
     */
    checkCollision() {
        if (player.x < this.x + 45 &&
            player.y < this.y + 45 &&
            player.x + 45 > this.x &&
            player.y + 45 > this.y) {
            player.initialPosition();
        }

    }
}
/**
 * @class Player
 * @classdesc Creates a Player character in game, subclass of Character
 */
class Player extends Character {
    /**
     * @constructor Constructs Enemy
     * @param x - x coordinate
     * @param y - y coordinate
     * @param sprite - picture for Enemy character
     */
    constructor(x, y, sprite = 'images/char-horn-girl.png') {
        super(x, y, sprite);
    }

    /**
     * @description Updates the position of Player if it reaches the water.
     * When it reaches the water, alert comes up that the Player won and it is
     * moved back to initial position.
     */
    update() {
        if (this.y <= 0) {
            alert("Congrats! You won!");
            waterReached = true;
            scorePoints += 100;
            this.initialPosition();
        }
    }

    /**
     * @description Moves player to initial position. If lives are all spent,
     * alert 'Game Over' shows.
     */
    initialPosition(){
        if(waterReached === false){
            if(lives > 0){
                lives--;
                scorePoints >= 10 ? scorePoints -= 10 : scorePoints = 0;
            } else {
                alert(`Game Over! Total score: ${scorePoints}`);
                lives = 3;
                scorePoints = 0;
                counter.style.color = "black";
                counter.innerHTML = lives;
                score.innerHTML = scorePoints;
            }

        } else {
            waterReached = false;
        }

        if(lives === 0 ){
            counter.style.color = "red";
        }
        counter.innerHTML = lives;
        score.innerHTML = scorePoints;
        this.x = 200;
        this.y = 415;
    }

    /**
     * @description Handling keyboard input.
     * @param key - Pressed key
     */
    handleInput(key) {
        if (key === 'left' && this.x > 10) {
            this.x -= 100;
        } else if (key === 'right' && this.x < 390) {
            this.x += 100;
        } else if (key === 'up' && this.y > 10) {
            this.y -= 90;
        } else if (key === 'down' && this.y < 415) {
            this.y += 90;
        }
    }
}

/**
 * @description Instantiating Player and Enemy objects
 */
const allEnemies = [
    new Enemy(0, 60, 400),
    new Enemy(0, 145, 300),
    new Enemy(0, 230, 200),
    new Enemy(0, 310, 100)
];

const player = new Player(200,415);

/**
 * @description Listens for key presses and sends the keys to
 * handleInput() function.
 */
document.addEventListener('keyup', function(e) {
    let allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

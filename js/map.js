import Player from "./player.js";

export default class Map {
    constructor(tileSize) {
        this._tileSize = tileSize;
        this._wall = this.#image("Grass.png");
        // this._player = this.#image("player.jpg");
        this._trap = this.#image("pipeNorth.png");
        this._chest = this.#image('chest.png');
        this._trophy = this.#image('trophy.png');
    }

    #image(fileName) {
        const img = new Image();
        img.src = `img/${fileName}`;
        return img;
    }

    // 1 - wall
    // 0 - roadcell
    // 2 - player
    // 3 - trap
    // 4 - prize
    // 5 - Goal

    map = [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 5, 1],
        [1, 1, 1, 1, 1, 4, 3, 0, 0, 1],
        [1, 1, 0, 3, 0, 3, 1, 1, 1, 1],
        [1, 3, 0, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 1, 3, 0, 0, 4, 0, 1, 1],
        [1, 0, 1, 3, 1, 1, 1, 4, 1, 1],
        [1, 0, 1, 0, 1, 3, 0, 0, 1, 1],
        [1, 4, 1, 4, 1, 0, 1, 1, 1, 1],
        [1, 4, 1, 0, 1, 0, 4, 1, 1, 1],
        [1, 0, 3, 0, 1, 1, 3, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 2, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ]

    draw(canvas, ctx) {
        this.#setCanvasSize(canvas);
        this.#clearCanvas(canvas, ctx);
        this.#drawMap(ctx);
    }

    #drawMap(ctx) {
        for (let row = 0; row < this.map.length; row++) {
            for (let col = 0; col < this.map[row].length; col++) {
                const tile = this.map[row][col];
                let image = null;
                switch (tile) {
                    case 1:
                        image = this._wall;
                        break;
                    // case 2:
                    //     image = this._player;
                    //     break;
                    case 3:
                        image = this._trap;
                        break;
                    case 4:
                        image = this._chest;
                        break;
                    case 5:
                        image = this._trophy;
                        break;
                    case 6:
                        break;
                }

                if (image !== null) {
                    ctx.drawImage(image, col * this._tileSize, row * this._tileSize, this._tileSize, this._tileSize);
                }

                ctx.strokeStyle = '#000';
                ctx.strokeRect(col * this._tileSize, row * this._tileSize, this._tileSize, this._tileSize);
            }
        }
    }

    getPlayer(velocity) {
        for (let row = 0; row < this.map.length; row++) {
            for (let col = 0; col < this.map[row].length; col++) {
                let tile = this.map[row][col];
                if (tile === 2) {
                    this.map[row][col] = 0;
                    return new Player(col * this._tileSize, row * this._tileSize, this._tileSize, velocity, this);
                }
            }
        }
    }

    // checkMove(dice, player){
    //     let random = dice.roll();
    //     for(let i=0; i<this.map.length; i++){
    //         for (let j=0; i<this.map[i].length; j++){
    //
    //         }
    //     }
    //
    // }

    #clearCanvas(canvas, ctx) {
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    #setCanvasSize(canvas) {
        canvas.height = this.map.length * this._tileSize;
        canvas.width = this.map[0].length * this._tileSize;
    }

}
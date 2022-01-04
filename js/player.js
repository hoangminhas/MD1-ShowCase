export default class Player{
    constructor(x, y, tileSize, velocity, map) {
        this._x = x;
        this._y = y;
        this._tileSize = tileSize;
        this._velocity = velocity;
        this._map = map;
        // this.#loadPlayerImage();
        this._player = this.#image("player.jpg");
    }

    #image(fileName) {
        const img = new Image();
        img.src = `img/${fileName}`;
        return img;
    }


    draw(ctx){
        ctx.drawImage(this._player, this._x, this._y, this._tileSize, this._tileSize);
    }

   moving(x, y){

   }

}
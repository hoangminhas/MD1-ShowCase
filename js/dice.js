export default class Dice {
    constructor() {
        this._side1 = 1;
        this._side2 = 2;
        this._side3 = 3;
        this._side4 = 4;
        this._side5 = 5;
        this._side6 = 6;
        this._color;
    }

    get side1() {
        return this._side1;
    }

    get side2() {
        return this._side2;
    }

    get side3() {
        return this._side3;
    }

    get side4() {
        return this._side4;
    }

    get side5() {
        return this._side5;
    }

    get side6() {
        return this._side6;
    }

    getRandomInclusive(){
        let min = Math.ceil(1);
        let max = Math.floor(6);
        return Math.floor(Math.random() * (max-min+1) + min);
    }

    roll(){
        let random = this.getRandomInclusive();
        switch (random){
            case 1:
                return this.side1;
            case 2:
                return this.side2;
            case 3:
                return this.side3;
            case 4:
                return this.side4;
            case 5:
                return this.side5;
            case 6:
                return this.side6;
        }
    }


}

class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.Min = min;
        this.Max = max;
    }

    guess() {
        return Math.ceil((this.Min + this.Max ) / 2);
    }

    lower() {
        this.Max = Math.ceil((this.Min + this.Max ) / 2)
    }

    greater() {
        this.Min = Math.ceil((this.Min + this.Max ) / 2)
    }
}

module.exports = GuessingGame;

const shipFactory = (length) => {
    function hit() {
        this.hitCount += 1;
    }

    function isSunk() {
        return this.hitCount >= this.length;
    }
    return { length, hitCount: 0, hit, isSunk };
};

export default shipFactory;

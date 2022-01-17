module.exports = function reverse (n) {
    n = n + "";
    if (n < 0) {
        let y = n.split("").reverse().join("");
        return +y.slice(0, -1);
    } else {
        return n.split("").reverse().join("");
    }
};

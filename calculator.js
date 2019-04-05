function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function sum(array) {
    fTotal = array.reduce((total, element) => total + element, 0);

    return fTotal;
}

module.exports = {add, subtract, sum}
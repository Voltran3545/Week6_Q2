const sumAll = function (numStart, numEnd) {
    let sum = 0;
    if (typeof numEnd == "string")
    return "ERROR"
    if (numStart < 0)
        return "ERROR"
    if (isNaN(numEnd))
        return "ERROR"
    for (let i = numStart; i <= numEnd; i++) {
        sum += i;
    }
    for (let i = numEnd; i <= numStart; i++) {
        sum += i;
    }
    return sum;
}

module.exports = sumAll

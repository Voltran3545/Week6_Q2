const ftoc = function(fahrenheit) {
  let fTemp = fahrenheit;
  let fToCel = (fTemp - 32) * 5 / 9;
  let stage = fToCel * 10
  let stage1 = Math.round(stage)
  let result = stage1 / 10
  return result
}

const ctof = function(celcius) {
  let cTemp = celcius;
  let cToF = cTemp * 9 / 5 + 32
  let stage = cToF * 10
  let stage1 = Math.round(stage)
  let result = stage1 / 10
  return result
}

module.exports = {
  ftoc,
  ctof
}

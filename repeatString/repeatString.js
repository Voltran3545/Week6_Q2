const repeatString = function(string, times) {
  if (string === "")
  return ""
  if (times < 0)
    return 'ERROR';
    if(times = 0) 
    return "";
  if(times === 1) 
    return string;
  else 
    return string + repeatString(string, times - 1);
}

module.exports = repeatString

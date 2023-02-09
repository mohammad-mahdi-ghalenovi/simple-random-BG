// let colorsArray = ["blue", "red", "gray", "aqua"];
// let randomColorIndex; // math floor  ,  math.random * 6 =>> give us a number between the 0 and 6
// setInterval(function () {
//   randomColorIndex = Math.floor(Math.random() * colorsArray.length); // we put this line to interval cause we want to change that in |X s|
//   document.body.style.background = colorsArray[randomColorIndex];
// }, 500);

/// second WAY \\\
let redValue, greenValue, blueValue;
setInterval(function () {
  redValue = Math.floor(Math.random() * 255);
  greenValue = Math.floor(Math.random() * 255);
  blueValue = Math.floor(Math.random() * 255);
  document.body.style.background =
    "rgb(" + redValue + "," + greenValue + "," + blueValue + ")";
}, 900);
/// second WAY \\\

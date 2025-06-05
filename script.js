var startTime = new Date().getTime();

//random color generator
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

//movable box
function movableBox() {
  var left;
  var top;

  left = Math.random() * 300;
  top = Math.random() * 300;

  document.getElementById('box').style.left = left + 'px';
  document.getElementById('box').style.top = top + 'px';
  document.getElementById('box').style.display = 'block';

  // Change the box's color after the result is shown.
  document.getElementById('box').style.backgroundColor = getRandomColor();

  startTime = new Date().getTime();
}

movableBox();

// Handles the logic for moving the box and calculating reaction time.
document.getElementById('box').onclick = function () {
  document.getElementById('box').style.display = 'none';
  var endTime = new Date().getTime();
  var timeTaken = (endTime - startTime) / 1000;

  // Display the reaction time in seconds or minutes.
  alert(timeTaken + 'seconds');

  document.getElementById('box').style.display = 'block';

  movableBox();
};

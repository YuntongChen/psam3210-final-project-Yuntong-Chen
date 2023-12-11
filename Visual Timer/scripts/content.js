const badge = document.createElement('button');
badge.style.position = 'fixed';
badge.style.bottom = '50px';
badge.style.right = '50px';
badge.style.zIndex = '10000';
badge.style.fontSize = '50px';
badge.innerText = '🔲';

badge.addEventListener('click', () => {
  const container = document.createElement('div');
  container.style.position = 'relative';
  container.style.width = '100vw';
  container.style.height = '100vh';
  container.style.zIndex = '101'; // Ensure it appears above other content

  function getRandomColor() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);

    return 'rgb(' + red + ',' + green + ',' + blue + ')';
}

  var parallelogram = document.createElement('div');
  parallelogram.style.backgroundColor = getRandomColor();
  parallelogram.style.width = '500px';
  parallelogram.style.height = '700px';
  parallelogram.style.clipPath = 'polygon(0 90%, 0 10%, 100% 0, 100% 100%)'; //CSS clip-path maker. https://bennettfeely.com/clippy/
  parallelogram.style.position = 'fixed';

  // Set position to top right
  var containerWidth = window.innerWidth;
  var initialLeft = containerWidth - parseInt(parallelogram.style.width) - 200;
  var initialTop = 50;
  parallelogram.style.left = initialLeft + 'px';
  parallelogram.style.top = initialTop + 'px';

  function animateParallelogram(parallelogram) {
    var positionX = parseInt(parallelogram.style.left);
    var positionY = parseInt(parallelogram.style.top);
    var initialDirectionX = -1; // Reverse initial direction for top right to left bottom
    var initialDirectionY = 1;
    var directionX = initialDirectionX;
    var directionY = initialDirectionY;
    var animationDuration = 60000; // 1 minitue

    var startTime = performance.now();
    var intervalId = setInterval(function() {
        var elapsedTime = performance.now() - startTime;

        // Check if 30 seconds have passed
        if (elapsedTime >= animationDuration) {
            clearInterval(intervalId);
            return;
        }

        // Update the positions (move diagonally)
        positionX += 1 * directionX; // Adjust the speed by changing the multiplier
        positionY += 1 * directionY;

        parallelogram.style.left = positionX + 'px';
        parallelogram.style.top = positionY + 'px';

        // Decrease the size of the parallelogram
        var currentWidth = parseInt(parallelogram.style.width);
        var currentHeight = parseInt(parallelogram.style.height);
        parallelogram.style.width = (currentWidth - 0.5) + 'px'; // Adjust the size change
        parallelogram.style.height = (currentHeight - 0.5) + 'px';

        // Stop animation when the parallelogram becomes too small
        if (currentWidth <= 0 || currentHeight <= 0) {
            clearInterval(intervalId);
        }
    }, 50); // Increase the interval time for a slower movement
}

  // Ensure it appears above other content
  container.appendChild(parallelogram);

  document.body.appendChild(container);

  animateParallelogram(parallelogram);

// Create another new shape
var shape = document.createElement('div');
shape.style.backgroundColor = getRandomColor();
shape.style.clipPath = 'polygon(0 76%, 18% 71%, 100% 94%, 85% 100%)'; //CSS clip-path maker. https://bennettfeely.com/clippy/
shape.style.width = '800px';
shape.style.height = '500px';
shape.style.position = 'fixed';

// Set initial position at the left bottom
var initialLeft = 20;
var initialBottom = 50; // Adjusted for the bottom
shape.style.left = initialLeft + 'px';
shape.style.bottom = initialBottom + 'px';

// Append the shape to the same container
container.appendChild(shape);

animateShape(shape);

function animateShape(shape) {
  var positionX = parseInt(shape.style.left);
  var positionY = parseInt(shape.style.top);
  var twoinitialDirectionX = 1;
  var twoinitialDirectionY = -1; // Adjusted for upward movement
  var directionX = twoinitialDirectionX;
  var directionY = twoinitialDirectionY;
  var animationDuration = 30000;

  var startTime = performance.now();
  var intervalId = setInterval(function () {
      var elapsedTime = performance.now() - startTime;

      if (elapsedTime >= animationDuration) {
          clearInterval(intervalId);
          return;
      }

      // Update the positions (move diagonally)
      positionX += 1 * directionX;
      positionY += 1 * directionY;

      shape.style.left = positionX + 'px';
      shape.style.top = positionY + 'px';

      // Decrease the size of the shape
      var currentWidth = parseInt(shape.style.width);
      var currentHeight = parseInt(shape.style.height);
      shape.style.width = (currentWidth - 0.5) + 'px'; // Adjust the size change
      shape.style.height = (currentHeight - 0.5) + 'px';
  }, 50); // Increase the interval time for a slower movement
}


  // put the web context into the same container with shapes
  let els = Array.from(document.body.children).filter(el => el !== parallelogram);
 els.forEach((el) => {
   el.style.mixBlendMode = 'difference';
   el.style.color = '#fff';
   container.appendChild(el);
 });

});

document.documentElement.appendChild(badge);

function animateParallelogram(parallelogram) {
}








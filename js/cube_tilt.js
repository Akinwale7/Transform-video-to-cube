 document.addEventListener("click", function () {
     $('.background-wrap').fadeOut(300);
     $('.container').fadeIn(5000);
 });

 var cube = document.querySelector('.inner');
 var space = document.querySelector('.space');
 var output = document.querySelector('.output');
 var maxX = space.clientWidth - cube.clientWidth;
 var maxY = space.clientHeight - cube.clientHeight;

 function handleOrientation(event) {
     var x = event.beta;
     var y = event.gamma;
     output.innerHTML = "beta : " + x + "\n";
     output.innerHTML += "gamma: " + y + "\n";
     if (x > 90) {
         x = 90
     };
     if (x < -90) {
         x = -90
     };
     x += 90;
     y += 90;
     cube.style.top = (maxX * x / 360 - 10) + "px";
     cube.style.left = (maxY * y / 180 - 10) + "px";
 }

 window.addEventListener('deviceorientation', handleOrientation);
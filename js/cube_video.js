  var vid1 = document.getElementById("vid1_time");
  var vid2 = document.getElementById("vid2_time");
  var vid3 = document.getElementById("vid3_time");
  var vid4 = document.getElementById("vid4_time");
  var vid5 = document.getElementById("vid5_time");
  var vid6 = document.getElementById("vid6_time");
  //This assigns random time for the video to play 
  var time1 = Math.random() * 10;
  var time2 = Math.random() * 20;
  var time3 = Math.random() * 20;
  var time4 = Math.random() * 20;
  var time5 = Math.random() * 20;
  var time6 = Math.random() * 20;

  function setTime() {
      vid1.currentTime = time1;
      vid2.currentTime = time2;
      vid3.currentTime = time3;
      vid4.currentTime = time4;
      vid5.currentTime = time5;
      vid6.currentTime = time6;
  }
  window.onload = setTime();
  //     $('#target').draggable({ drag:
  //   function(event, ui){
  //    var rotateCSS = 'rotateX(' + ui.position.left + 'deg) rotateY(' + ui.position.left + 'deg)';
  //
  //    $(this).css({
  //      '-moz-transform': rotateCSS,
  //      '-webkit-transform': rotateCSS
  //    });
  //  
  //     }});

  //This enables users to be abke to rotate the cube
  $(document).ready(function () {
      function rotateOnMouse(e, pw) {
          var offset = pw.offset();
          var center_x = (offset.left) / 2 + ($(pw).width() / 2);
          var center_y = (offset.top) / 2 + ($(pw).height() / 2);
          var mouse_x = e.pageX;
          var mouse_y = e.pageY;
          var radians = Math.atan2(mouse_x - center_x, mouse_y - center_y);
          var degree = (radians * (180 / Math.PI) * -1) + 100;
          $(pw).css('-moz-transform', 'rotateX(' + degree + 'deg) rotateY(' + degree + 'deg)');
          $(pw).css('-webkit-transform', 'rotateX(' + degree + 'deg) rotateY(' + degree + 'deg)');
          $(pw).css('-o-transform', 'rotateX(' + degree + 'deg) rotateY(' + degree + 'deg)');
          $(pw).css('-ms-transform', 'rotateX(' + degree + 'deg) rotateY(' + degree + 'deg)');
      }
      $('#target').mousedown(function (e) {
          e.preventDefault();
          $(document).bind('mousemove.rotateImg', function (e2) {
              rotateOnMouse(e2, $('#target'));
          });
      });
      $(document).mouseup(function (e) {
          //$(document).unbind('mousemove.rotateImg');
      });
  });
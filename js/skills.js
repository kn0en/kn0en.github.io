var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("progress1");
    var width = 1;
    var id = setInterval(frame, 20);
    function frame() {
      if (width >= 90) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}

window.addEventListener("load", function(){
   move();
});
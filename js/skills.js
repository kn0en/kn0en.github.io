function move() {
    i = 1;
    var elem = document.getElementById("progress1");
    var elem1 = document.getElementById("progress2");
    var elem2 = document.getElementById("progress3");
    var elem3 = document.getElementById("progress4");
    var width = 1;
    var id = setInterval(frame, 25);
    var id1 = setInterval(frame1, 25);
    var id2 = setInterval(frame2, 25);
    var id3 = setInterval(frame3, 20);
    function frame() {
      if (width >= 78) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
    function frame1() {
      if (width >= 80) {
        clearInterval(id1);
        i = 0;
      } else {
        width++;
        elem1.style.width = width + "%";
      }
    }
    function frame2() {
      if (width >= 65) {
        clearInterval(id2);
        i = 0;
      } else {
        width++;
        elem2.style.width = width + "%";
      }
    }
    function frame3() {
      if (width >= 60) {
        clearInterval(id3);
        i = 0;
      } else {
        width++;
        elem3.style.width = width + "%";
      }
    }
}

window.addEventListener("load", function(){
   move();
});
var i = 0;
var j = 0;
var txt = 'Hello, world!';
var txt1 = "This site is a simple website that contains information about myself, my experiences, the skills I have learned and some of the projects I've worked on.";
var speed = 100;
var speed1 = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("helloWorld").innerHTML += txt.charAt(i);
    i++
    setTimeout(typeWriter, speed);
  }
}

function typeWriter1() {
    if (j < txt1.length) {
      document.getElementById("descP").innerHTML += txt1.charAt(j);
      j++
      setTimeout(typeWriter1, speed1);
    }
  }

window.addEventListener("load", function(){
   typeWriter();
   typeWriter1();
  });
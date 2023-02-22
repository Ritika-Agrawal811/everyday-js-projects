var paintingsIndex = 0;

showPainting();

function showPainting() {
  var i;
  var paintings = document.getElementsByClassName("canvas");

  for (i = 0; i < paintings.length; i++) {
    paintings[i].style.display = "none";
  }

  paintingsIndex++;

  if (paintingsIndex > paintings.length) {
    paintingsIndex = 1;
  }

  paintings[paintingsIndex - 1].className += " next";
  paintings[paintingsIndex - 1].style.display = "block";
  console.log(paintingsIndex - 1);
  if (paintingsIndex - 1 != 0) {
    paintings[paintingsIndex - 2].style.display = "block";
  }
  setTimeout(showPainting, 2000);
}

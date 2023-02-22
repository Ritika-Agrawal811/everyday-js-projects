let cube = document.querySelector(".cube");
let currentClass = "";

let btnArray = document.getElementsByClassName("view-btn");
btnArray = [...btnArray];

btnArray.forEach((btn) => {
  btn.addEventListener("click", viewFace);
});

function viewFace(event) {
  let showClass = "show-" + event.target.dataset.side;

  if (currentClass) {
    cube.classList.remove(currentClass);
  }

  cube.classList.add(showClass);
  currentClass = showClass;
}

let gradientHeader = document.querySelector(".header");
let gradientBody = document.querySelector(".body");
let gradientFooter = document.querySelector(".footer");
let radioButton = document.getElementsByName("gradientStyle");
let textBox = document.getElementById("gradientText");
let gradientText = document.querySelector(".textInput");
let gradientHeading = document.getElementsByTagName("h1");
let textarea = document.querySelector(".code");

function textInput() {
  if (textBox.value == "") {
    console.log("empty");
    gradientText.textContent = "Some Text";
  } else {
    gradientText.textContent = textBox.value;
  }
}

textarea.addEventListener("dblclick", function () {
  textarea.select();
  textarea.select(0, 99999);

  document.execCommand("copy");

  alert("copied");
});

function generateGradient() {
  let randomR = Math.floor(Math.random() * 255);
  let randomG = Math.floor(Math.random() * 255);
  let randomB = Math.floor(Math.random() * 255);
  let randomR2 = Math.floor(Math.random() * 255);
  let randomG2 = Math.floor(Math.random() * 255);
  let randomB2 = Math.floor(Math.random() * 255);

  if (radioButton[0].checked) {
    document.body.style.background = "#fff";

    gradientHeader.style.border = "3px solid";
    gradientHeader.style.borderImage =
      "linear-gradient(60deg , rgb( " +
      randomR +
      ", " +
      randomG +
      ", " +
      randomB +
      ") , rgb( " +
      randomR2 +
      ", " +
      randomG2 +
      "," +
      randomB2 +
      "))";
    gradientHeader.style.borderImageSlice = "1";

    gradientBody.style.border = "3px solid";
    gradientBody.style.borderImage =
      "linear-gradient(60deg , rgb( " +
      randomR +
      ", " +
      randomG +
      ", " +
      randomB +
      ") , rgb( " +
      randomR2 +
      ", " +
      randomG2 +
      "," +
      randomB2 +
      "))";
    gradientBody.style.borderImageSlice = "1";

    gradientFooter.style.border = "3px solid";
    gradientFooter.style.borderImage =
      "linear-gradient(60deg , rgb( " +
      randomR +
      ", " +
      randomG +
      ", " +
      randomB +
      ") , rgb( " +
      randomR2 +
      ", " +
      randomG2 +
      "," +
      randomB2 +
      "))";
    gradientFooter.style.borderImageSlice = "1";

    textarea.value =
      "border:3px solid; \nborder-image-slice: 1; \nborder-image : linear-gradient(60deg , rgb( " +
      randomR +
      ", " +
      randomG +
      ", " +
      randomB +
      ") , rgb( " +
      randomR2 +
      ", " +
      randomG2 +
      "," +
      randomB2 +
      "));";
  }

  if (radioButton[1].checked) {
    document.querySelector(".card").classList.remove("isFlipped");

    gradientBody.style.border = "none";
    gradientFooter.style.border = "none";
    gradientHeader.style.border = "none";

    var s = document.createElement("style");
    gradientText.appendChild(s);

    s.innerHTML =
      " .textInput{\nbackground: -webkit-linear-gradient(60deg , rgb( " +
      randomR +
      ", " +
      randomG +
      ", " +
      randomB +
      ") , rgb( " +
      randomR2 +
      ", " +
      randomG2 +
      "," +
      randomB2 +
      ")); \n-webkit-background-clip: text; \n-webkit-text-fill-color: transparent;\n}";

    document.body.style.background = "#d0e1f9";

    var s1 = document.createElement("style");
    gradientText.appendChild(s1);

    s1.innerHTML =
      " h1{\nbackground: -webkit-linear-gradient(60deg , rgb( " +
      randomR +
      ", " +
      randomG +
      ", " +
      randomB +
      ") , rgb( " +
      randomR2 +
      ", " +
      randomG2 +
      "," +
      randomB2 +
      ")); \n -webkit-background-clip: text; \n-webkit-text-fill-color: transparent;\n}";

    textarea.value =
      "-webkit-background-clip: text; \n-webkit-text-fill-color: transparent;\nbackground : linear-gradient(60deg , rgb( " +
      randomR +
      ", " +
      randomG +
      ", " +
      randomB +
      ") , rgb( " +
      randomR2 +
      ", " +
      randomG2 +
      "," +
      randomB2 +
      "));";
  }

  if (radioButton[2].checked) {
    document.querySelector(".triOne").style.background =
      "linear-gradient(60deg , rgb( " +
      randomR +
      ", " +
      randomG +
      ", " +
      randomB +
      ") , rgb( " +
      randomR2 +
      ", " +
      randomG2 +
      "," +
      randomB2 +
      "))";

    document.querySelector(".triTwo").style.background =
      "linear-gradient(60deg , rgb( " +
      randomR +
      ", " +
      randomG +
      ", " +
      randomB +
      ") , rgb( " +
      randomR2 +
      ", " +
      randomG2 +
      "," +
      randomB2 +
      "))";

    document.querySelector(".line").style.background =
      "linear-gradient(60deg , rgb( " +
      randomR +
      ", " +
      randomG +
      ", " +
      randomB +
      ") , rgb( " +
      randomR2 +
      ", " +
      randomG2 +
      "," +
      randomB2 +
      "))";

    document.querySelector(".trapezoid").style.background =
      "linear-gradient(60deg , rgb( " +
      randomR +
      ", " +
      randomG +
      ", " +
      randomB +
      ") , rgb( " +
      randomR2 +
      ", " +
      randomG2 +
      "," +
      randomB2 +
      "))";

    document.body.style.background =
      "linear-gradient(60deg , rgb( " +
      randomR +
      ", " +
      randomG +
      ", " +
      randomB +
      ") , rgb( " +
      randomR2 +
      ", " +
      randomG2 +
      "," +
      randomB2 +
      "))";

    gradientBody.style.border = "none";
    gradientFooter.style.border = "none";
    gradientHeader.style.border = "none";

    textarea.value =
      "\nbackground : linear-gradient(60deg , rgb( " +
      randomR +
      ", " +
      randomG +
      ", " +
      randomB +
      ") , rgb( " +
      randomR2 +
      ", " +
      randomG2 +
      "," +
      randomB2 +
      "));";

    document.querySelector(".card").classList.add("isFlipped");
  }
}

let partsArray = [
  "origami_step1",
  "origami_lowerHalf",
  "origami_step2",
  "origami_lower_rightHalf",
  "origami_ear_left",
  "origami_ear_right",
  "upper-face",
  "lower-face",
  "origami_mouth",
  "lower_upper_face",
  "eye-left",
  "eye-right",
  "nose",
];

function getElement(part) {
  return document.getElementById(part);
}

function Step1() {
  let step2Btn = getElement("step2Btn");
  step2Btn.disabled = false;
  getElement(partsArray[0]).classList.add("step1");
}

function Step2() {
  let step3Btn = getElement("step3Btn");
  step3Btn.disabled = false;

  for (let i = 0; i < 2; i++) {
    getElement(partsArray[i]).style.opacity = 0;
  }
  getElement(partsArray[2]).classList.add("step2");
}

function Step3() {
  let step4Btn = getElement("step4Btn");
  step4Btn.disabled = false;

  getElement(partsArray[2]).classList.replace("step2", "step3");
}

function Step4() {
  let step5Btn = getElement("step5Btn");
  step5Btn.disabled = false;

  for (let i = 2; i < 4; i++) {
    getElement(partsArray[i]).style.opacity = 0;
  }

  for (let i = 4; i < 8; i++) {
    getElement(partsArray[i]).style.opacity = 1;
  }

  getElement(partsArray[4]).classList.add("step4");
  getElement(partsArray[5]).classList.add("step4");
}

function Step5() {
  let step6Btn = getElement("step6Btn");
  step6Btn.disabled = false;

  getElement(partsArray[7]).style.opacity = "0";

  for (let i = 8; i < 10; i++) {
    getElement(partsArray[i]).style.opacity = 1;
  }
  getElement(partsArray[8]).classList.add("step5");
}

function Step6() {
  for (let i = 10; i < 13; i++) {
    getElement(partsArray[i]).classList.add("animate");
  }
}

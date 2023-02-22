function selectColor(colorHex) {
  document.getElementById("input-color").value = colorHex;
}

function setColor(partID) {
  document.getElementById(partID).style.background =
    document.getElementById("input-color").value;
}

function calculateEllipseArea() {
  const ellipseA = getInputInfo("ellipse-a");
  const ellipseB = getInputInfo("ellipse-b");
  const area = 3.14159265359 * ellipseA * ellipseB;

  displayResult("ellipse-area", area);

  const areaContainer = document.getElementById("area-container");
  console.log(areaContainer);
  const title = document.getElementById("area-title").innerText;

  const p = document.createElement("p");
  p.innerText = title + " : " + area.toFixed(2);
  areaContainer.appendChild(p);
}

function getInputInfo(id) {
  const inputField = document.getElementById(id);
  const inputFieldText = inputField.value;
  const inputValue = parseFloat(inputFieldText);
  return inputValue;
}

function displayResult(element, area) {
  const result = document.getElementById(element);
  result.innerText = area.toFixed(2);
}

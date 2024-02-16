
function calculatePentagonArea(){
    const base = getInputValueById('pentagon-base');
    const height = getInputValueById('pentagon-height');

    const area = 0.5 * base * height;
    showArea('pentagon-area', area)

    const areaContainer = document.getElementById("area-container");
  console.log(areaContainer);
  const title = document.getElementById("pentagon-title").innerText;

  const p = document.createElement("p");
  p.innerText = title + " : " + area.toFixed(2);
  areaContainer.appendChild(p);

}


function getInputValueById(elementId){
    const inputField = document.getElementById(elementId);
    const inputFieldText = inputField.value;
    const inputValue = parseFloat(inputFieldText);
    return inputValue;
}

function showArea(element, area){
    const pentagonArea = document.getElementById(element);
    pentagonArea.innerText = area;
}
function calculateRhombusArea(){
         const base = getInput('rhombus-length');
         const height = getInput('rhombus-height')

         const area = 0.5 * base * height;

         showAreaValue("rhombus-area", area)

         const areaContainer = document.getElementById("area-container");
         console.log(areaContainer);
         const title = document.getElementById("rhombus-title").innerText;
       
         const p = document.createElement("p");
         p.innerText = title + " : " + area.toFixed(2);
         areaContainer.appendChild(p);

}


function  getInput(id){
    const inputField = document.getElementById(id);
    const inputFieldText = inputField.value;
    const inputValue = parseFloat(inputFieldText);
    return inputValue
}
function showAreaValue(id, area){
    const element = document.getElementById(id);
    element.innerText = area;
}
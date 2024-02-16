function calculateRectangleArea(){
    console.log('rectangle are connected')

   /*  // base
    const base = getInputValue('rectangle-base');
    console.log(base)
    // height
    const height = getInputValue('rectangle-height');
    console.log(height) */


    const base = getInputValue('parallelogram-base')
    const height = getInputValue('parallelogram-height')

    const area = base * height ;
    setTextById("parallelogram-area", area)
}




function getInputValue(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldText = inputField.value;
    const inputValue = parseFloat(inputFieldText);
    return inputValue;
}

function setTextById(elementId, area){
    const element = document.getElementById(elementId)
    element.innerText = area;
}
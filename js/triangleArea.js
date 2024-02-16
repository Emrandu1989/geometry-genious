function calculateTriangleArea(){
   const baseInput= document.getElementById('triangle-base');
   const baseInputText = baseInput.value;
   const baseValue = parseFloat(baseInputText);
   console.log(baseValue);
   baseInput.value = '';

   /* height */
   const heightInput = document.getElementById('triangle-height');
   const heightInputText = heightInput.value;
   const heightValue = parseFloat(heightInputText);
   console.log(heightValue)
   heightInput.value = '';

   /* display triangle area */

   const area = 0.5 * baseValue * heightValue;
   const triangleArea = document.getElementById('triangle-area');
   triangleArea.innerText = area;
}

function calculateParallelogramArea(){

    const base = getInputValue('parallelogram-base'); 
    // You need to define 'base'
    const height = getInputValue('parallelogram-height');

    const area = base * height;
    console.log(area);

    setInnerTextById('parallelogram-area', area);
}

function getInputValue(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    return inputValue;
}

function setInnerTextById(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}

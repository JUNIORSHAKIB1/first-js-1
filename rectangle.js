function calculateRectangleArea(){
    // get length of the rectangle 

    const lengthInput = document.getElementById('rectangle-lenght');
    const lengthText = lengthInput.value;
    const length = parseFloat(lengthText);
    console.log(length);

    // get width of rectangle
    const widthInput = document.getElementById('rectangle-width');
    const widthText = widthInput.value;
    const width = parseFloat(widthText);
    console.log(width);

    // calculate area of rectangle
    const area = length * width;
    console.log(area);

    // display rectangle area
    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area;

}

// function calculateRectangleArea(){
//     // get length of the rectangle 
//     const lengthInput = document.getElementById('rectangle-lenght');
//     const lengthText = lengthInput.value;
//     const length = parseFloat(lengthText);
//     console.log(length);

//     // get width of rectangle
//     const widthInput = document.getElementById('rectangle-width');
//     const widthText = widthInput.value;
//     const width = parseFloat(widthText);
//     console.log(width);

//     // calculate area of rectangle
//     const area = length * width;
//     console.log(area);

//     // display rectangle area
//     const rectangleAreaSpan = document.getElementById('rectangle-area');
//     rectangleAreaSpan.innerText = area;
// }

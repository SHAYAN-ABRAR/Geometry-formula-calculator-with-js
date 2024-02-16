function calculateRectangleArea(){
    //width calculation
    const rectangleWidthInput = document.getElementById('rectangle-width')
    const rectangleWidthText = rectangleWidthInput.value;
    const width = parseFloat(rectangleWidthText)
    console.log(width)
//length calculation
    const rectangleLengthInput = document.getElementById('rectangle-length')
    const rectangleLengthText = rectangleLengthInput.value;
    const length = parseFloat(rectangleLengthText)
    console.log(length)
    //calculate rectangle area
    const area= width * length
    console.log('area of the rectangle is:', area)
    //display rectangle area
    const rectangleAreaSpan = document.getElementById('rectangle-area')
    rectangleAreaSpan.innerText= area;
}
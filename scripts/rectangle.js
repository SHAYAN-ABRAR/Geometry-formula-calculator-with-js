function calculateRectangleArea(){
    //base calculation
    const rectangleWidthInput = document.getElementById('rectangle-width')
    const rectangleWidthText = rectangleWidthInput.value;
    const base = parseFloat(rectangleWidthText)
    console.log(base)
//height calculation
    const rectangleLengthInput = document.getElementById('rectangle-length')
    const rectangleLengthText = rectangleLengthInput.value;
    const height = parseFloat(rectangleLengthText)
    console.log(height)
    //calculate rectangle area
    const area= width * length
    console.log('area of the rectangle is:', area)
    //display rectangle area
    const rectangleAreaSpan = document.getElementById('rectangle-area')
    rectangleAreaSpan.innerText= area;
}
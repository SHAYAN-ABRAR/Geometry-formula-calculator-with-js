# Geometry Area Calculator

Enter a shape's dimensions, click **Calculate** and see its area in square centimeters.

**Live page:** <https://shayan-abrar.github.io/Geometry-formula-calculator-with-js/>

<p align="center">
  <img src="screenshots/preview.png" width="800" alt="Calculator cards for a triangle, a rectangle and a pentagon showing computed areas of 40, 60 and 60 square centimeters, next to an Area Calculation panel">
</p>

Checking a textbook area formula usually means reaching for a calculator and the formula at the same time. This page puts both on one card for each shape: the formula, two inputs and a result line. The logic is a few small vanilla JavaScript functions, which makes it an easy example of reading input values and writing results back to the page.

## Quick Start

```bash
git clone https://github.com/SHAYAN-ABRAR/Geometry-formula-calculator-with-js.git
cd Geometry-formula-calculator-with-js
python3 -m http.server 8000
```

Open <http://localhost:8000>. On Windows, use `python` instead of `python3`. Opening `index.html` directly in a browser works too. Tailwind CSS and DaisyUI load from CDNs, so you need an internet connection for the styling.

## Features

| Shape | Formula on the card | Inputs |
| --- | --- | --- |
| Triangle | A = 0.5 × b × h | base, height |
| Rectangle | A = W × L | width, length |
| Pentagon | A = 0.5 × p × a | perimeter, apothem |

- **One card per shape:** an illustration, the formula, two inputs in centimeters and a **Calculate** button.
- **Decimal input:** values are read with `parseFloat`, so 12.5 × 4 gives 50.
- **Shared helpers:** `scripts/pentagon.js` reads inputs and writes results through two small reusable functions.
- **Responsive grid:** the cards sit in a two-column grid on wider screens (`md:grid-cols-2`) and a single column on phones.

## Usage Example

To find the area of a triangle with a 10 cm base and an 8 cm height, type `10` and `8` into the triangle card and click **Calculate**. The card shows `Area: 40 cm²`.

The pentagon function shows the pattern the other shapes follow:

```js
function calculatePentagonArea(){
    const perimeter=getInputValueById('pentagon-perimeter')
    const apothem=getInputValueById('pentagon-apothem');
    const area=0.5*perimeter*apothem;
    setInnerTextById('pentagon-area',area);
}
```

## Limitations

- Empty or non-numeric input shows `NaN` instead of an error message.
- The fourth card is a copy of the triangle card with the same element IDs, so its button recalculates the first triangle card and shows nothing on its own card.
- The **Area Calculation** panel on the right is only a heading, and the ellipse, rhombus and parallelogram images in `images/` aren't used yet.
- The pentagon formula is written with `m`, while its input is labeled `a` (apothem).

## Tech Stack

- HTML5
- Tailwind CSS (Play CDN) and DaisyUI 4.7.2 cards and buttons
- Vanilla JavaScript: one script per shape in `scripts/`

## Contributing

Suggestions and bug reports are welcome. Please [open an issue](https://github.com/SHAYAN-ABRAR/Geometry-formula-calculator-with-js/issues). Please read the license note below before reusing any code.

## License

This repository doesn't have a license yet, so it doesn't grant anyone permission to reuse or redistribute its code or images. Please ask before reusing any part of it.

---

Built by **Shayan Abrar** · [GitHub](https://github.com/SHAYAN-ABRAR) · [LinkedIn](https://www.linkedin.com/in/shayan-abrar/)

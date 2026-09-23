# Geometry Area Calculator

A small, responsive web app that calculates the area of common 2D shapes. You enter the dimensions and each card shows its result in cm² instantly, using plain JavaScript.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20site-4F00FF?style=for-the-badge&logo=githubpages&logoColor=white)](https://shayan-abrar.github.io/Geometry-formula-calculator-with-js/) <!-- live-demo -->

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![DaisyUI](https://img.shields.io/badge/DaisyUI-5A0EF8?style=flat-square&logo=daisyui&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

![Geometry Area Calculator with sample results](screenshots/preview.png)

## Supported Shapes

| Shape | Formula | Inputs |
| --- | --- | --- |
| Triangle | A = 0.5 × b × h | base, height |
| Rectangle | A = W × L | width, length |
| Pentagon | A = 0.5 × p × a | perimeter, apothem |

## Features

- Card-based layout with a shape illustration, its formula and labelled inputs
- One-click **Calculate** button per shape, with the result rendered inline as `Area: … cm²`
- Decimal support: inputs are parsed with `parseFloat`
- Responsive grid built with Tailwind CSS and DaisyUI card components

## Tech Stack

| Layer | Technology |
| --- | --- |
| Markup | HTML5 |
| Styling | Tailwind CSS (Play CDN), DaisyUI 4 |
| Logic | Vanilla JavaScript (one script per shape) |

## Project Structure

```text
Geometry-formula-calculator-with-js/
├── index.html
├── scripts/
│   ├── triangle.js     # calculateTriangleArea()
│   ├── rectangle.js    # calculateRectangleArea()
│   └── pentagon.js     # calculatePentagonArea() + shared input/output helpers
├── images/             # Shape illustrations
└── tailwind.config.js
```

## Run Locally

```bash
git clone https://github.com/SHAYAN-ABRAR/Geometry-formula-calculator-with-js.git
cd Geometry-formula-calculator-with-js
# Open index.html in a browser
```

## What I Learned

- Reading input values and writing results back to the DOM
- Refactoring repeated logic into reusable helpers (`getInputValueById`, `setInnerTextById`)
- Laying out responsive card grids with Tailwind CSS

## Author

**Shayan Abrar** · [GitHub](https://github.com/SHAYAN-ABRAR) · [LinkedIn](https://www.linkedin.com/in/shayan-abrar/) · [Portfolio](https://shayan-abrar.vercel.app)

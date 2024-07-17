
# QR Image Generator

A simple ReactJS application to generate QR codes from URLs or basic text. This project allows users to input a text or URL, generate a QR code, and download the QR code image.

## Features

- Input a URL to encode into a QR code.
- Generate a QR code from the URL.
- Download the generated QR code image.

## Technologies Used

- React
- CSS
- Google Fonts

## Installation

1. Install the dependencies:
    ```bash
    npm install
    ```

2. Start the development server:
    ```bash
    npm start
    ```

3. Open the application in your browser:
    ```
    http://localhost:3000
    ```

2. Enter a URL in the input field and click the "Generate" button.

3. The generated QR code will be displayed. You can also download the QR code image by clicking the "Download" button.

## Fonts

This project uses Google Fonts. The following fonts are imported:

```css
@import url('https://fonts.googleapis.com/css2?family=Bona+Nova+SC:ital,wght@0,400;0,700;1,400&family=Inter:wght@100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
```

## Project Structure

```
qr-image-generator/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── App.css
│   ├── App.js
│   ├── index.js
│   └── ...
├── package.json
├── README.md
└── ...
```

## Code Overview

### `App.js`

Contains the main component of the application. It manages the state for the input URL, generates the QR code URL, and renders the input field, generate button, and the QR code image.

### `App.css`

Contains the styles for the application, including the imported Google Fonts.

## Acknowledgements

- [QR Code API](https://goqr.me/api/)
- [Google Fonts](https://fonts.google.com/)

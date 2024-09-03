# odin-calculator
This is a simple, responsive calculator web application built with HTML, CSS, and JavaScript. The calculator performs basic arithmetic operations and includes additional functionalities like percentage calculations, sign flipping, and handling of decimal numbers. Part of [The Odin Project](https://www.theodinproject.com) curriculum.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Live Demo](#live-demo)
- [Responsive Design](#responsive-design)
    - [Media Queries](#media-queries)
- [Contributing](#contributing)
- [License](#license)

## Features
- Basic Arithmetic: Supports addition, subtraction, multiplication, and division.
- Percentage Calculation: Calculate percentages easily with the % button.
- Sign Flip: Flip the sign of the current number with the +/- button.
- Decimal Point Handling: Add a decimal point to your numbers with the . button.
- Responsive Design: The calculator is responsive and adjusts to different screen sizes.

## Technologies Used
- HTML5: For the structure of the web application.
- CSS3: For styling, including responsive design for different screen sizes.
- JavaScript: For the interactive functionalities of the calculator.

## Installation
To use the calculator, simply clone or download this repository and open the index.html file in your web browser.

1. Clone the Repository
    ```bash
    git clone https://github.com/zhihaohong52/simple-calculator.git
    cd simple-calculator
    ```

2. Open the index.html File
    You can open the index.html file directly in your web browser:
    ```bash
    open index.html
    ```
    Alternatively, you can use a live server in your code editor (like Visual Studio Code) to open the file.

## Usage
- Start Calculating: Click on the buttons to input numbers and operations.
- Clear: Use the AC button to clear all inputs or C to clear the current input.
- Keyboard Support: The calculator supports keyboard input for numbers, operators, and other functionalities:
    - Numbers (0-9)
    - Operators (+, -, *, /)
    - Decimal Point (.)
    - Backspace (Backspace) to delete the last input
    - Enter (Enter) to calculate the result
    - Escape (Esc) to clear the current input

## Live Demo
You can play the live version of the calculator here: [Calculator](zhihaohong52.github.io/odin-calculator/)

## Responsive Design
The calculator is designed to be responsive, adjusting its layout for various screen sizes. The buttons and display resize for mobile screens to ensure usability on smaller devices.

### Media Queries
Media queries are used to adjust the font size, button size, and layout depending on the screen width. Breakpoints have been set for screen widths of:

- 768px: Adjusts the font size and button size for tablets and small screens.
- 480px: Further reduces the font size and button size for mobile devices.

## Contributing
If you would like to contribute to this project, feel free to fork the repository and submit a pull request. Please make sure to follow the existing code style and include comments where necessary.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
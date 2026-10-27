# CA 1.3 — Basic Arithmetic Calculator

This project is a basic arithmetic calculator created for the Week 7 CA 1.3 assessment.

## Features

- Accepts two numbers from the user.
- Performs addition, subtraction, multiplication and division.
- Displays the result on the page.
- Checks that both inputs contain valid numbers.
- Prevents division by zero and displays a clear error message.
- Uses responsive CSS so the calculator works on different screen sizes.

## How I created the calculator

1. I created the page structure in `index.html` with two number inputs, four operation buttons and a result area.
2. I added labels and an `aria-live` result area to make the page easier to use with assistive technology.
3. I styled the page, inputs, buttons and result messages in `style.css`.
4. I used JavaScript in `script.js` to read and validate the input values.
5. I created a `calculate` function that uses conditional statements to perform the selected operation.
6. I added click event listeners to all four buttons.
7. I added error handling for empty or invalid inputs and division by zero.

## How to use it

1. Open `index.html` in a web browser.
2. Enter a number in each input field.
3. Select **Add**, **Subtract**, **Multiply** or **Divide**.
4. Read the answer or validation message in the result area.

## Technologies

- HTML5
- CSS3
- JavaScript
- GitHub Markdown

Created by Robin.
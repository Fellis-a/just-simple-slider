# Simple Slider

Simple Slider is a lightweight JavaScript slider package with a minimalist design, designed to be easily integrated into web projects. It provides a simple yet customizable slideshow functionality, allowing users to navigate between slides using next and previous buttons, while also displaying indicators for each slide.

## Features

- **Simple Integration**: Easily integrate the slider into your web projects with minimal setup.
- **Responsive Design**: The slider adapts to different screen sizes and devices, ensuring a consistent user experience.
- **Customizable**: Customize the slider's appearance and behavior through CSS and JavaScript.
- **Next/Previous Buttons**: Navigate between slides using intuitive next and previous buttons.
- **Slide Indicators**: Display indicators for each slide, allowing users to quickly jump to a specific slide.

## Installation

You can install Simple Slider via npm:

npm install simple-slider


## Usage

To use Simple Slider in your project, include the necessary CSS and JavaScript files:

```
html
<link rel="stylesheet" href="path/to/simple-slider/simple-slider.css">
<script src="path/to/simple-slider/simple-slider.js"></script>
```

Then, add the slider HTML structure to your page, make sure to write right paths to your pictures:

```
 <div class="slider">

        <!-- previous button -->
        <button class="prev">&#10094;</button>
        <div class="slide-container">
            <!-- slides with photos -->
            <img class="slide" src="images/1.png" alt="Slide 1">
            <img class="slide" src="images/2.png" alt="Slide 2">
            <img class="slide" src="images/3.png" alt="Slide 3">
            <img class="slide" src="images/4.png" alt="Slide 4">

        </div>
        <!-- next button -->
        <button class="next">&#10095;</button>
    </div>
    <div class="slider-indicators"></div>
```
## License
This project is licensed under the MIT License.



// Lab 7: change the heading color from the user's input
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#color-form");
    const input = document.querySelector("#color-input");
    const heading = document.querySelector("#heading");
    const message = document.querySelector("#message");

    form.onsubmit = function (event) {
        event.preventDefault();  // stay on the page
        const color = input.value.trim();

        // CSS.supports tells us if the browser understands the color
        if (color !== "" && CSS.supports("color", color)) {
            heading.style.color = color;
            message.innerHTML = "";
        } else {
            message.innerHTML = "'" + color + "' is not a valid color.";
        }
        input.value = "";
    };
});

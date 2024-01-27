function toggleColor() {
    if (getComputedStyle(root).getPropertyValue("--primary-color") === firstColorSet[0]) {
        root.style.setProperty("--primary-color", secondColorSet[0]);
        root.style.setProperty("--secondary-color", secondColorSet[1]);
        toggle.style.backgroundColor = firstColorSet[0];
    } else {
        root.style.setProperty("--primary-color", firstColorSet[0]);
        root.style.setProperty("--secondary-color", firstColorSet[1]);
        toggle.style.backgroundColor = secondColorSet[0];
    }
}

const toggle = document.querySelector("#theme-toggle");
const root = document.querySelector(":root");
const firstColorSet = ["#f472b6", "#e9d5ff"];
const secondColorSet = ["#38bdf8", "#ccfbf1"];

toggle.style.backgroundColor = secondColorSet[0];

toggle.addEventListener("click", toggleColor);
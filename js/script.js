const dark = document.querySelector(".dark-btn");
const light = document.querySelector(".light-btn");
const dynamicHeader = document.querySelector(".dynamic-header ");
const html = document.querySelector("html");



dark.addEventListener('click', (event) => {
    html.classList.remove('light-bg');
    html.classList.add('dark-bg');
    isDark('./images/dbg.jpg').then((data) => {
        dynamicHeader.classList.remove("light-text");
        if(data) dynamicHeader.classList.add("light-text");
    });
})

light.addEventListener('click', (event) => {
    html.classList.remove('dark-bg');
    html.classList.add('light-bg');
    isDark('./images/bg.jpg').then((data) => {
        dynamicHeader.classList.remove("light-text");
        if(data) dynamicHeader.classList.add("light-text");
    });
})

document.addEventListener("DOMContentLoaded", (event) => {
    html.classList.add('light-bg');
});

const isDark = (src) => {
    return new Promise((resolve, reject) => {
        //create a hidden img element
        let img = document.createElement("img");
        img.src = src;
        img.style.display = "none";
        document.body.appendChild(img);

        let colorSum = 0;
        img.onload = function () {
            // create canvas
            let canvas = document.createElement("canvas");
            canvas.width = this.width;
            canvas.height = this.height;

            let ctx = canvas.getContext("2d");
            ctx.drawImage(this, 0, 0);

            let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            let data = imageData.data;
            let r, g, b, avg;
            for (let x = 0, len = data.length; x < len; x += 4) {
                r = data[x];
                g = data[x + 1];
                b = data[x + 2];

                avg = Math.floor((r + g + b) / 3);
                colorSum += avg;
            }

            let brightness = Math.floor(colorSum / (this.width * this.height));
            resolve(brightness >= 128 ? false : true);
        }
    });
}
window.onload = canvas;

function canvas() {
    var myCanvas = document.getElementById("myCanvas");

    if (myCanvas && myCanvas.getContext("2d")) {
        var context = myCanvas.getContext("2d");
        var myImages = [
            'https://raw.githubusercontent.com/ismaelpacheco13/macros-counter-ionic-final-landing-page/master/images/1.png',
            'https://raw.githubusercontent.com/ismaelpacheco13/macros-counter-ionic-final-landing-page/master/images/2.png',
            'https://raw.githubusercontent.com/ismaelpacheco13/macros-counter-ionic-final-landing-page/master/images/3.png',
            'https://raw.githubusercontent.com/ismaelpacheco13/macros-counter-ionic-final-landing-page/master/images/4.png',
            'https://raw.githubusercontent.com/ismaelpacheco13/macros-counter-ionic-final-landing-page/master/images/5.png',
            'https://raw.githubusercontent.com/ismaelpacheco13/macros-counter-ionic-final-landing-page/master/images/6.png'
        ];
        var img = document.createElement("img");
        var i = 0;

        img.setAttribute('width', context.canvas.width);
        img.setAttribute('height', context.canvas.height);

        setInterval(function () {
            img.setAttribute('src', myImages[i++]);
            img.onload = function () {
                if (i >= myImages.length) {
                    i = 0;
                }
                context.drawImage(img, 0, 0, context.canvas.width, context.canvas.height);
            }
        }, 2000);
    }
}
// One IIFE boi

(function () {
    document.addEventListener("DOMContentLoaded", start, false);

    function start() {

        setBackgroundImage();

        document.getElementById('overlay').addEventListener('click', () => {
            let audio = new Audio('pumpkins.mp3');
            audio.loop = true;
            audio.autoplay = true;
            audio.play();
            console.log('playing...');
        });
    }

    function setBackgroundImage() {
        let r = Math.floor(Math.random() * Math.floor(2));
        document.body.style.backgroundImage = `url(pumpkins${r}.webp)`;
    }
})();
// One IIFE boi

(function () {
    document.addEventListener("DOMContentLoaded", start, false);

    function start() {
        document.getElementById('overlay').addEventListener('click', listener);
        
        function listener () {
            document.getElementById('button').style.display = 'none';
            setBackgroundImage();
            let audio = new Audio('pumpkins.mp3');
            audio.loop = true;
            audio.autoplay = true;
            audio.play();
            console.log('playing...');
            document.getElementById('overlay').removeEventListener('click', this);
        }
    }

    function setBackgroundImage() {
        let r = Math.floor(Math.random() * Math.floor(3));
        document.body.style.backgroundImage = `url(pumpkins${r}.webp)`;
    }
})();
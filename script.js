// script.js

window.onload = function () {

    const startBtn = document.getElementById("startBtn");

    const speed = document.getElementById("speed");
    const ping = document.getElementById("ping");
    const download = document.getElementById("download");
    const upload = document.getElementById("upload");

    startBtn.addEventListener("click", function () {

        startBtn.innerText = "Testing...";
        startBtn.disabled = true;

        let currentSpeed = 0;

        let test = setInterval(() => {

            currentSpeed += Math.random() * 10;

            if (currentSpeed >= 120) {

                clearInterval(test);

                currentSpeed = 120;

                speed.innerText = currentSpeed.toFixed(1);

                ping.innerText =
                    Math.floor(Math.random() * 20 + 5) + " ms";

                download.innerText =
                    (Math.random() * 100 + 50).toFixed(2) + " Mbps";

                upload.innerText =
                    (Math.random() * 50 + 20).toFixed(2) + " Mbps";

                startBtn.innerText = "Run Again";
                startBtn.disabled = false;

            } else {

                speed.innerText = currentSpeed.toFixed(1);

            }

        }, 120);

    });

};

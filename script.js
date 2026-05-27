// script.js

const startBtn = document.getElementById("startBtn");

const speed = document.getElementById("speed");
const ping = document.getElementById("ping");
const download = document.getElementById("download");
const upload = document.getElementById("upload");

startBtn.addEventListener("click", startTest);

function startTest(){

  startBtn.innerText = "Testing...";
  startBtn.disabled = true;

  let current = 0;

  let interval = setInterval(() => {

    current += Math.random() * 8;

    if(current >= 120){
      current = 120;
      clearInterval(interval);

      finishTest();
    }

    speed.innerText = current.toFixed(1);

  }, 150);

}

function finishTest(){

  let pingValue = Math.floor(Math.random() * 20) + 5;
  let downloadValue = (Math.random() * 150 + 50).toFixed(2);
  let uploadValue = (Math.random() * 80 + 20).toFixed(2);

  ping.innerText = pingValue + " ms";
  download.innerText = downloadValue + " Mbps";
  upload.innerText = uploadValue + " Mbps";

  startBtn.innerText = "Run Again";
  startBtn.disabled = false;
}

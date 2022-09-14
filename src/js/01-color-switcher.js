
 const startBtn = document.querySelector('button[data-start]');
 const stopBtn = document.querySelector('button[data-stop]');

let timer = null;
startBtn.addEventListener("click", changeColor);
stopBtn.addEventListener("click", stopTimer);

function getRandomHexColor() {
   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeColor() {
     timer = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
     startBtn.disabled = true;
}


function stopTimer() {
    clearInterval(timer);
     stopBtn.disabled = false;
};

 
















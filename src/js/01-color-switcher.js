
 const startBtn = document.querySelector('.data-start');
 const stopBtn = document.querySelector('.data-stop');


startBtn.addEventListener("click", changeColor);
stopBtn.addEventListener("click", stopTimer);

function getRandomHexColor() {
   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeColor() {
    let timer = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
     startBtn.disabled = true;
}


function stopTimer() {
    clearInterval(timer);
     stopBtn.disabled = false;
};

 
















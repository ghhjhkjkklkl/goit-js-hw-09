import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";


const startBtn = document.querySelector('[data-start]');
const inputPicker = document.querySelector('#datetime-picker');

let changeDate = null;
let intervalTime = null;



startBtn.disabled = true;
startBtn.style.backgroundColor = 'pink';
startBtn.style.color = 'black';
startBtn.style.width = '50px';
startBtn.style.height = '25px';
startBtn.style.marginLeft = '10px';


const refs = {
  timerElement: document.querySelector('.timer'),
  fieldElement: document.querySelectorAll('.timer > div'),
  timerValue: document.querySelectorAll('.value'),
  daysElement: document.querySelector('[data-days]'),
  hoursElement: document.querySelector('[data-hours]'),
  minutesElement: document.querySelector('[data-minutes]'),
  secondsElement: document.querySelector('[data-seconds]'),
};


refs.timerElement.style.display = 'flex';
refs.timerElement.style.width = '100px';
 refs.fieldElement.forEach(element => {
   element.style.marginRight = '15px';
 });
refs.timerValue.forEach(element => {
  element.style.display = 'block';
  element.style.fontSize = '50px';
  element.style.textAlign = 'center';
  element.style.color = 'green';
});



const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < Date.now()) {
      window.alert('Please choose a date in the future');
      startBtn.disabled = true;
    } else {
      startBtn.disabled = false;
      changeDate = selectedDates[0];
    };
    
    startBtn.addEventListener('click', () => {
          intervalTime = setInterval(() => {
          const currentTime = Date.now();
           const deltaTime = changeDate - currentTime;
           console.log(deltaTime);
          const time = convertMs(deltaTime);
          if (deltaTime < 0) {
            clearInterval(intervalTime);
            return;
          }
           console.log(time);
           startTimer(time);
        }, 1000);
      });
    }
  }

    flatpickr(inputPicker, options);
function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}




function startTimer({ days, hours, minutes, seconds }) {
  refs.daysElement.textContent = `${days}`;
  refs.hoursElement.textContent = `${hours}`;
  refs.minutesElement.textContent = `${minutes}`;
  refs.secondsElement.textContent = `${seconds}`;
}
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );
  return { days, hours, minutes, seconds };
}
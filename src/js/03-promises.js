
const refs = {
  createPromisesBtn: document.querySelector('[submit]'),
  delayElement: document.querySelector('[delay]'),
  stepElement: document.querySelector('[step]'),
  amountElement: document.querySelector('[data-days]'),
};


refs.createPromisesBtn.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  const delay = event.currentTarget.elements.delay;
const step = event.currentTarget.elements.step;
const amount =  event.currentTarget.elements.amount;


for (let i = 0; i < amount; i += 1) {
  createPromise(i += 1, delay);
  delay += step;
}

}


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  setTimeout(() => {
    if (shouldResolve) {
      return new Promise({ position, delay });
    } else {
      reject (`❌ Rejected promise ${position} in ${delay}ms`);
    }
  }, delay)
};


createPromise(2, 1500)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });


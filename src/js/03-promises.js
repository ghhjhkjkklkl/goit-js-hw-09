
const newPromise = document.querySelector('.form');

newPromise.addEventListener('submit', createPromise);



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

// feedbackForm.addEventListener('submit', evt => {
//     evt.preventDefault();
//     const formData = new FormData(feedbackForm);
//     formData.forEach((value, name) => console.log({value, name}));
//     localStorage.removeItem(STOREGE_KEY);
//     evt.currentTarget.reset();
// });
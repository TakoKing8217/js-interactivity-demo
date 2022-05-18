console.log("Speedy the Racer");

const displayCounter = document.querySelector("#counter");
const minusBtn = document.querySelector("#minus-btn");
const plusBtn = document.querySelector("#plus-btn");
const resetBtn = document.querySelector("#reset-btn");
const hundredBtn = document.querySelector("#plus-hundred-btn");

let counter = 0;

const decrease = () => {
  counter--;
  console.log(counter);
  displayCounter.textContent = counter;
};
const increase = () => {
  counter++;
  console.log(counter);
  displayCounter.textContent = counter;
};
const addHundred = () => {
  counter += 100;
  console.log(counter);
  displayCounter.textContent = counter;
};
const reset = () => {
  counter = 0;
  console.log(counter);
  displayCounter.textContent = counter;
};

const timesTwo = document
  .querySelector("#times-two")
  .addEventListener("click", () => {
    counter *= 2;
    console.log(counter);
    displayCounter.textContent = counter;
  });
const inNegative = document
  .querySelector("#in-negative")
  .addEventListener("click", () => {
    counter *= -1;
    console.log(counter);
    displayCounter.textContent = counter;
  });
const dividedFive = document
  .querySelector("#divide-five")
  .addEventListener("click", () => {
    counter /= 5;
    console.log(counter);
    displayCounter.textContent = counter;
  });

minusBtn.addEventListener("click", decrease);
plusBtn.addEventListener("click", increase);
resetBtn.addEventListener("click", reset);
hundredBtn.addEventListener("click", addHundred);

//     <button class="theme-buttons">facebook</button>
//     <button class="theme-buttons">devmountain</button>
//     <button class="theme-buttons">twitter</button>
//     <button class="theme-buttons">default</button>

const themeBtns = document.querySelectorAll(".theme-buttons");
console.log(themeBtns);

const selectTheme = (evt) => {
  //   console.log(evt.target.textContent);
  const theme = evt.target.textContent;
  document.querySelector("body").className = theme;
};

for (let i = 0; i < themeBtns.length; i++) {
  themeBtns[i].addEventListener("click", selectTheme);
}

// console.log("hello world");

// let count = 0;

// function increase() {
//   count++;
//   counterText.textContent = count;
//   console.log(count);
// }

// function decrease() {
//   count--;
//   counterText.textContent = count;
//   console.log(count);
// }

// let reset = () => {
//   count = 0;
//   counterText.textContent = count;
//   console.log(count);
// };

// const counterText = document.querySelector("#counter");
// const minusBtn = document.querySelector("#minus-btn");
// const resetBtn = document.querySelector("#reset-btn");
// const plusBtn = document.querySelector("#plus-btn");

// minusBtn.addEventListener("click", decrease);
// resetBtn.addEventListener("click", reset);
// plusBtn.addEventListener("click", increase);

// // inline
// // document.querySelector("#minus-btn").addEventListener('click',() => {count--})

// const selectTheme = (event) => {
//   const theme = event.target.textContent;
//   console.log(theme);
//   document.querySelector("body").className = theme;
//   document.querySelector("main").className = theme;

//   const buttons = document.querySelectorAll("button");

//   for (let i = 0; i < buttons.length; i++) {
//     buttons[i].className = theme;
//   }
// };

// const themeBtns = document.querySelectorAll(".theme-buttons");

// for (let i = 0; i < themeBtns.length; i++) {
//   themeBtns[i].addEventListener("click", selectTheme);
// }

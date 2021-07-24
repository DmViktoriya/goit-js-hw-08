const [decrement, span, increment] = document.querySelector('#counter').children;

let counterValue = 0;

decrement.addEventListener('click', () => {
    counterValue -= 1;
    span.textContent = counterValue;
});

increment.addEventListener('click', () => {
    counterValue += 1;
    span.textContent = counterValue;
});



// Задание 4
// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.
// •	Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// •	Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// •	Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>







// const counterValue = {
//     value: 0;
//     increment() {
//         console.log('increment -> this', this);
//         this.value += 1;
//     },
//     decrement() {
//         console.log('decrement -> this', this);
//         this.value -= 1;
//     },
// };

// const decrementBtn = document.querySelector('.decrement');
// const incrementBtn = document.querySelector('.increment');
// const valueEl = document.querySelector('.value');


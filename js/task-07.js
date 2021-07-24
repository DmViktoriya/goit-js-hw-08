const inputRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');

function changeFontSize({ target: { value } }) {
    spanRef.style.fontSize = value + "px";
};

//console.log(changeFontSize);


//function changeFontSize(target: value) {
//    spanRef.style.fontSize = value + "px";
//};

inputRef.oninput = changeFontSize;



// Задание 7
// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.
// <input id="font-size-control" type="range" />
// <br />
// <span id="text">Абракадабра!</span>




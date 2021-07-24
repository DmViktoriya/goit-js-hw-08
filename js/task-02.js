const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


const ingredientsEl = document.querySelector('#ingredients');
const ingredientEl = ingredients.map(option => {
  const ingredientLi = document.createElement('li');

  ingredientLi.innerHTML = `<p>${option}</p>`;

  console.log(ingredientLi);
  return ingredientLi;
});

ingredientsEl.append(...ingredientEl);



// Задание 2
// В HTML есть пустой список ul#ingredients.
// <ul id="ingredients"></ul>
// В JS есть массив строк.
// const ingredients = [
//   'Картошка',
//   'Грибы',
//   'Чеснок',
//   'Помидоры',
//   'Зелень',
//   'Приправы',
// ];
// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().













//  const ingredientsList = document.querySelector('#ingredients');
//  const ingredientsEl = ingredients.map(option => {
//    const ingredientsListElement = document.createElement('li');
//    ingredientsListElement.textContent = option;
//    console.log(ingredientsListElement);
//    return ingredientsListElement;
// })

// ingredientsList.append(...ingredientsEl);
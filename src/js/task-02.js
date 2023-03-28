const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// const li = document.createElement('li');
// li.textContent = 'Potatoes';
// li.classList.add('item');
// console.log(li)

const ul = document.querySelector('#ingredients');
console.log('ul');
const liElemets = ingredients.map(ingredient => {
  const li = document.createElement('li');
  li.textContent = ingredient;
  li.classList.add('item')
  return li;
 
});
ul.append(...liElemets);





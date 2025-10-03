const foods = [  
  'sushi',
  'pizza',
  'burgers',
  'ice cream',
  'cake',
  'noodles',
  'chocolate',
  'cookies',
  'steak',
  'mochi'
];

// Sort alphabetically (Challenge Option 1)
foods.sort();

const listElement = document.getElementById('food-list');

// Loop and output each food
for (let i = 0; i < foods.length; i++) {
  const li = document.createElement('li');
  // Add numbering (Challenge Option 2)
  li.textContent = `${i + 1}. ${foods[i]}`;
  listElement.appendChild(li);

  // Also log each individually to the console
  console.log(foods[i]);
}

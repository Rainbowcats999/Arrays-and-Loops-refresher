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

        foods.sort();

        const listElement = document.getElementById('food-list');

        // Add each food as a list item
        for (let i = 0; i < foods.length; i++) {
            const li = document.createElement('li');
            li.textContent = foods[i];
            listElement.appendChild(li);
        }
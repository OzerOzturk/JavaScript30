const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log('hello');

// Interpolated

// Styled

// warning!
console.warn('ohhh noooooooo');

// Error :|
console.error('sh*ttt!');

// Info
console.info('its a info, but no actual info');

// Testing
const p = document.querySelector('p');

console.assert(p.classList.contains('oucch'), 'that is wrong!');

// clearing

console.clear(); 

// Viewing DOM Elements
console.log(p);
console.dir(p);


// Grouping together
dogs.forEach(dog => {
    console.group(`${dog.name}`);
    console.log(`this is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age*7} years old`);
    console.groupEnd(`${dog.name}`);
});

// counting
console.count('özer');
console.count('özer');
console.count('özer');
console.count('özer');
console.count('özer');
console.count('kevin');
console.count('kevin');
console.count('kevin');

// timing

console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
    .then(data => data.json())
    .then (data => {
        console.timeEnd('fetching data');
        console.log(data);
    });


console.table(dogs);
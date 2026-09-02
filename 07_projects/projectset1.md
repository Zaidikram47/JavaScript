# Project 1
```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
body.addEventListener('click', (e) => {
  if (e.target == body) {
    body.style.backgroundColor = 'pink';
  }
});
buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    console.log(e.target);
    switch (e.target.id) {
      case 'grey':
        body.style.backgroundColor = 'grey';
        break;
      case 'blue':
        body.style.backgroundColor = 'blue';
        break;
      case 'white':
        body.style.backgroundColor = 'white';
        break;
      case 'yellow':
        body.style.backgroundColor = 'yellow';
        break;
    }
  });
});

```

# Project 2

```javascript

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');
  const bmi = (weight / ((height * height) / 10000)).toFixed(2);

  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = 'Please enter valid number';
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = 'Please enter valid number';
  } else {
    if (bmi < 18.6) {
      result.innerHTML = `<span> ${bmi} \n UNDER WEIGHT </span>`;
      document.getElementById('3').style.backgroundColor = 'red';
    }
    if (18.6 < bmi && bmi < 24.9) {
      result.innerHTML = `<span> ${bmi} \n NORMAL </span>`;
      document.getElementById('2').style.backgroundColor = 'green';
    }

    if (bmi > 24.9) {
      result.innerHTML = `<span> ${bmi} \n OVER WEIGHT </span>`;
      document.getElementById('1').style.backgroundColor = 'red';
    }
  }
});


```
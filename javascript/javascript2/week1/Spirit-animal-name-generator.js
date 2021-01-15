const click = 'click';
const newsprit = 'newsprit';
let enterInNewsprit = 'no'
const accessButton = document.getElementById("button");
const button_two = document.createElement("button");
button.setAttribute("id", "buttonTwo");
button_two.innerHTML = "NewSprit";
document.body.appendChild(button_two);
button_two.style.display = "none";

const spritAnimalName = ['wolf', 'Alligator', 'Badger', 'Bee', 'Bobcat', 'Blue Jay', 'ant', 'butterfly', 'owl', 'snake'];
let randomNumber = Math.floor(Math.random() * 10);
let randomNumber1;


const spritAnimal =
  function spritAnimal(spiritOrNewSpirit) {
    let randomSpritAnimal;
    let accessInput = document.getElementById("user_input").value;
    h1_tag = document.getElementById('h1')
    if (accessInput === "") {
      h1_tag.innerHTML = "Please enter your Name";
    } else {
      if (spiritOrNewSpirit === 'newsprit') {
        randomNumber1 = Math.floor(Math.random() * 10);
        randomSpritAnimal = spritAnimalName[randomNumber1];
        enterInNewsprit = 'yes'
      } else {
        if (enterInNewsprit === 'no') {
          randomSpritAnimal = spritAnimalName[randomNumber];
        } else {
          randomSpritAnimal = spritAnimalName[randomNumber1];
        }

      }
      h1_tag.innerHTML = `${accessInput} - ${randomSpritAnimal}`;
      button_two.style.display = "block";
      button_two.style.disabled = true;

    }

  }
accessButton.addEventListener('click', function() {
  spritAnimal(click)
});
button_two.addEventListener('click', function() {
  spritAnimal(newsprit)
});

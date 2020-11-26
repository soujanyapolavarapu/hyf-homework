const accessButton = document.getElementById("button");
const button_two = document.createElement("button");
button.setAttribute("id", "buttonTwo");
button_two.innerHTML ="NewSprit";
document.body.appendChild(button_two);
button_two.style.display= "none";

const spritAnimalName =['wolf','Alligator','Badger', 'Bee','Bobcat', 'Blue Jay','ant','butterfly','owl','snake'];
let randomNumber = Math.floor(Math.random() * 10) ;

const spritAnimal =
function() {
let randomSpritAnimal;
     const accessInput = document.getElementById("user_input").value;
     h1_tag =  document.getElementById('h1')
     if(accessInput === ""){
       h1_tag.innerHTML="Please enter your Name";
     }else{
     randomSpritAnimal = spritAnimalName[randomNumber];
h1_tag.innerHTML= `${accessInput} - ${randomSpritAnimal}` ;
button_two.style.display= "block";
button_two.style.disabled= true;
 }
}

   accessButton.addEventListener('click', spritAnimal);
  // button_two.addEventListener('click', spritAnimal);

 const NewspritAnimal =
 function() {
   let randomNumber2 = Math.floor(Math.random() * 10) ;
   const accessInput = document.getElementById("user_input").value;
   h1_tag =  document.getElementById('h1')

   if(accessInput === ""){
     h1_tag.innerHTML="Please enter your Name";
   }else{
  let  randomSpritAnimal = spritAnimalName[randomNumber2];
 h1_tag.innerHTML= `${accessInput} - ${randomSpritAnimal}` ;
   }
 }
 button_two.addEventListener('click', NewspritAnimal);

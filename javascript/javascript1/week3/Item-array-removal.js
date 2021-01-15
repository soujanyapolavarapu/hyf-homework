const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "katrine",
  "Tala",
];

const nameToRemove = "Ahmad";
//names.splice(1,1);
for (i=0; i<names.length; i++){
  if(names[i] === nameToRemove ){
    names.splice(i,1);
    break;
  }

}

console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']

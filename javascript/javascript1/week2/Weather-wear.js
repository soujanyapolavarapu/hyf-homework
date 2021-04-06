function weather(temperature) {
  if(temperature >= 18) {
    return 'wear t-shirt and shorts';
  }
  else if(temperature >=12)
  {
    return 'wear hoodies';
  }
  else
  return 'wear jackets';
}
const clothesToWear = weather(14);
console.log(clothesToWear); // Logs out: "wear hoodies"

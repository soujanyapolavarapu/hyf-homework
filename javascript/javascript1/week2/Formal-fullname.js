function getFullname(firstname, surname, useFormalName) {
if(useFormalName== true)  {
useFormalName ='Lord' ;
}
else {
  useFormalName ='';
}
return useFormalName + ' ' + firstname + ' ' + surname;
}
const fullName0 = getFullname('Soujanya', 'Polavarapu', true);
const fullName1 = getFullname('Rajesh', 'Polavarapu', false);
console.log(fullName0 );
console.log(fullName1);

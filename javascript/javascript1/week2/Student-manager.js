const class16Students = [];
addStudentToClass('Rajesh');
addStudentToClass('Soujanya');
addStudentToClass('Aashrith');
addStudentToClass('');
addStudentToClass('Anand');
addStudentToClass('Rajesh');
addStudentToClass('Student5');
addStudentToClass('Student6');
addStudentToClass('Student7');
addStudentToClass('Queen Margrethe');
getNumberOfStudents();
console.log(class16Students);

function addStudentToClass(studentName) {  
  if(studentName === "") {
      console.log('You cannot add an empty string to a class');
  }else if (class16Students.includes(studentName)){
      console.log(`Student ${studentName} is already in the class.The same person cannot be added to the class.`)
  }else if (class16Students.length<6){
    class16Students.push(studentName);}
  else if(class16Students.length>=6){
      if(studentName === "Queen Margrethe II" || class16Students.includes('Queen Margrethe II')){
          class16Students.push(studentName); 
        }
           else{
        console.log('Cannot add more students to class 16')
          }
  }      
    return class16Students;
    
  }
function getNumberOfStudents() {
   return console.log ('Number of student in class : ' + class16Students.length);

}

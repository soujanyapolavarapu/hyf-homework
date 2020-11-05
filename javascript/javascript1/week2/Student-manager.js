const class07Students = [];
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
console.log(class07Students);

function addStudentToClass(studentName) {
  if (studentName === 'Queen Margrethe'){
    class07Students.push(studentName);
  }
    else if ( class07Students.length > 5 ) {
    console.log("Cannot add more students to class 07.");
  }

  else if ( class07Students.includes(studentName)) {
         console.log("Student " +  studentName + " is already in the class");
     }

     else if (studentName === ''){
       console.log('Cannot add an empty string to a class');
     }
     else
     {
      class07Students.push(studentName);
      console.log(studentName +' ' + 'added to the class');
        }

   }
function getNumberOfStudents() {
   return console.log ('Number of student in class : ' + class07Students.length);

}

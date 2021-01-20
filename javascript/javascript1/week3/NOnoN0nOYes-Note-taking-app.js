//save a note
const notes = [];
saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
//saveNote("pickup", 5);
console.log(notes); // [{content: 'Pick up groceries', id: 1}, {content: 'Do laundry', id: 2}]
//getNote(5);
const firstNote = getNote(1);
console.log(firstNote);
//console.log(firstNote); // {content: 'Pick up groceries', id: 1}
logOutNotesFormatted();



//saveNote Function
function saveNote(content, id) {
  notes.push({
    content: content,
    id: id
  });
}


//Get a note
function getNote(id) {
  if (id === ' ' || typeof id !== 'number') {
    console.log('Id neither blank nor string');
  } else {
    for (i = 0; i < notes.length; i++) {
      if (id === notes[i].id) {
      return notes[i]
      }
    }
    }
  }



//Read all notes
function logOutNotesFormatted() {
  for(i=0; i<notes.length; i++){
    console.log(`The note with id:  ${notes[i].id}, has the following note text: ${notes[i].content}`);
  }
}
// The note with id: 1, has the following note text: Pick up groceries
// The note with id: 2, has the following note text: Do laundry

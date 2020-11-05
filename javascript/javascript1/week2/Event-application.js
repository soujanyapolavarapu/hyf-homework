
  let date = new Date();
  let today = date.getDay();
  const daysInWeek =['Sunday','Monday', 'Tuesday','Wednesday','Thursday','Friday','Saturday'];
  function getEventWeekday(numOfdays) {
  let eventDay =(numOfdays + today)% 7;
   return daysInWeek[eventDay];
}
console.log(getEventWeekday(6)); //if today is thursday event will be held on Wednesday
console.log(getEventWeekday(2)); //if today is thursday event will be held on Saturday

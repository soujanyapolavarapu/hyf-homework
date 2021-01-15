var dogYearOfBirth = 2015;
var dogYearFuture = 2027;
var dogYear = 7;
var shouldShowResultInDogYears = false;
 if(shouldShowResultInDogYears){
   var dogAge = (dogYearFuture - dogYearOfBirth) * dogYear;
    console.log("Your dog will be " + dogAge + " dog years old in " + dogYearFuture);
 }
 else
 {
  var dogAge = dogYearFuture - dogYearOfBirth;
   console.log("Your dog will be " + dogAge + " human years old in " + dogYearFuture);
 }

function isOrIsntLeap(year) {


  var isOrIsnt;

  if (year % 4 === 0 || year % 400 === 0 && !year % 100 === 0) {
    isOrIsnt = "Leap year.";
  } else {
    isOrIsnt = "Not leap year.";
  }

  return isOrIsnt;
}

//example to console log it for you.
isOrIsntLeap(2016);

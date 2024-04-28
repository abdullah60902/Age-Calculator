function calculate() {
    let year;
    let month;
    let day;
    let currentDate = current.value
let currentYear =parseInt( currentDate.slice(0,4),10);
let currentMonth = parseInt(currentDate.slice(5,7),10);
let currentDay = parseInt(currentDate.slice(8,10),10);
console.log(currentYear,currentMonth,currentDay);
let birthDate = born.value;
let birthYear = parseInt(birthDate.slice(0,4),10);
let birthMonth = parseInt(birthDate.slice(5,7),10);
let birthDay = parseInt(birthDate.slice(8,10),10);
console.log(birthYear,birthMonth,birthDay);
if (currentDay>=birthDay) {
  day=  currentDay-birthDay
    
}else{
let addday =  currentDay + new Date (currentYear,currentMonth,).getDay();
  day=  addday-birthDate;

    currentMonth--
}
if (currentMonth>=birthMonth) {
 month=   currentMonth-birthMonth;
    
}else{
   let  addmonth= currentMonth+12;
 month =  addmonth-birthMonth;
   currentYear--
};



 year = currentYear-birthYear;


if (year < 0) {
    sp.innerHTML = "chawala na mare sai date enter kar";
} else {
    sp.innerHTML = year + " Year " + month + " month " + day + " day";
}
}
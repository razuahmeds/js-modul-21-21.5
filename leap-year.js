function isLeapYears(year){
    let remainder = year % 4;
    if(remainder === 0){
        console.log("your year is leap year", year);
    }
    else{
        console.log("your year is no't leap year", year);
    }
}
//   isLeapYears(2005);





function isLeapYear(year){
    let remainder = year % 4;
    if(remainder === 0){
        return true;
    }
    else{
        return false;
    }
}
// let myYear = isLeapYear(2024);
// console.log("my year",myYear);
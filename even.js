// console.log(4/2);
// console.log(14/2);
// console.log(26/2);
// console.log(76/2);
// console.log(88/2);
// console.log(98/2);



// console.log(5/2);
// console.log(17/2);
// console.log(29/2);
// console.log(75/2);
// console.log(81/2);
// console.log(93/2);




// console.log(4%2);
// console.log(18%2);
// console.log(26%2);
// console.log(74%2);
// console.log(88%2);
// console.log(92%2);




function Even (numbe){
    let EvenNumb =numbe % 2;
    console.log(EvenNumb);
}
// Even(392);








function Even (numbe){
    let EvenNumb =numbe % 2;
    // console.log(EvenNumb);
    if (EvenNumb === 0){
        console.log("number is even");
    }
    else{
        console.log("number is odd");
    }
}
// Even(391);







function Even (numbe){
    let EvenNumb =numbe % 2;
    // console.log(EvenNumb);
    if (EvenNumb === 0){
        return true;
    }
    else{
        return false;
    }
}
let mynumber = Even(390);
console.log(mynumber);
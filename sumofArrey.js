function sumofArrey(number){
    for(let i = 1; i < number.length; i++){
        let index =i;
        let element = number[index];
        console.log(element, index);
    }
}


// let myNumber =[23,45,7,45,23,75,78,34,12,56];
// sumofArrey(myNumber)





function sumofArrey(number){
    for(let i = 1; i < number.length; i++){
        let index =i;
        let element = number[index];
        console.log(element, index);
    }
}


// let myNumber =[23,45,77,45,23,75,78,34,12,56];
// sumofArrey(myNumber)






function sumofArrey(number){
    let sum =0;
    for(let i = 0; i < number.length; i ++){
        let index =i;
        let element = number[index];
           sum =sum+element
        console.log(index, element, sum);
    }
}


// let myNumber =[23,45,77,45,23,75,78,34,12,56];
// sumofArrey(myNumber)



function sumofArrey(number){
    let sum =0;
    for(let i = 0; i < number.length; i ++){
        let sum =0;
        let index =i;
        let element = number[index];
        sum =sum+element
        console.log(index, element, sum);
    }
}


let myNumber =[23,45,77,45,23,75,78,34,12,56];
// sumofArrey(myNumber)



function gitoddnumber(num){
    for(let i =0; i < num.length; i ++){
        let index =i;
        let element = num[index];
        if(element %2 === 0){
            console.log(index, element);
        }
        
    }
}

// let mynum =[23,45,68,56,78,34,65,23,67,98,34,12];
// gitoddnumber(mynum);








function gitoddnumber(num){
    let oddnumber =[]
    for(let i =0; i < num.length; i ++){
        let index =i;
        let element = num[index];
        if(element % 2 !== 0){
            console.log(index, element);
            oddnumber.push(element)
        }
        
    }
    return oddnumber;
}

let mynum =[23,45,68,56,78,35,65,23,67,98,34,12];
let oddnumber = gitoddnumber(mynum);
console.log(oddnumber);
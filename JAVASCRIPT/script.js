// DATATYPES IN JAVASCRIPT:-                             for run:- node filename.js

// 7 types of primitive datatypes
// and 1 type of non primitive datatypes


// PRIMITIVE DATATYPES

// let name="aanya"; //string
// console.log(typeof(name))
// let age=20;       //num
// // console.log(typeof age)
// let isstudent=true; //boolean
// // console.log(typeof isstudent)
// let score;     //undefined
// // console.log(typeof score)
// let car =null;  //null
// console.log(typeof(car))


// let person = {name:"aanya",age:20,email:"mayankdubey8898@gmail.com",isstudent:true};  //object(non primitive) key value pair
// // console.log(typeof person)


//OPERATORS

// 1.ARITHMATIC OPERATOR

// let a=10;
// let b=5;
// console.log(a+b);//15
// console.log(a-b);//5
// console.log(a*b);//2
// console.log(a%b);//0
// console.log(++a);//11
// console.log(a++);//11
// console.log(--a);//11
// console.log(a--);//11
// console.log(a);


//2.ASSIGNMENT OPERATOR

// let a=10;
// console.log(a+=3);
// console.log(a-=3);
// console.log(a*=3);
// console.log(a/=3);
// console.log(a);

//3.COMPARISION  OPERATOR
// TRIPLE EQUAL = COMPARE TYPE OF DATA

// let a=45;
// let b="45"
// console.log(a==b);
// console.log(a===b);
// console.log(a!=b);
// console.log(a<b);

// //string operator: +(concatenation)

// let m="aanya";
// let d=" mayank";
// console.log(m+d);

//ternary operator
// let age=20
// let status=(age>=18)? "adult":"minor";
// console.log(status);

// CONDITIONAL STATEMENT

// let temp=25;
// if (temp>30){
//     console.log("hot");
// }
// else if(temp>20){
//     console.log("warm");
// }
// else{
//    console.log("cold");
// }


//SWITCH CASE

let day=7;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("tue");
        break;
    case 3:   
        console.log("wed") ;
        break;
    case 4:
        console.log("thurs")   ; 
        break;
    case 5:
        console.log("fri") ;
        break;
    case 6:
        console.log("sat")   ;
        break; 
    case 7:
        console.log("sun");
        break;

     default:(console.log("invalid"))   ;
}


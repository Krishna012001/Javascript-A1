//1 .  You are provided with two numbers A and B. Your task is to add these two numbers.
// Note: You have to complete AddTwoNumbers function. No need to take any input.

// function addtwonumbers(){

//     const input="3 9";
//     const[A ,B]= input.split(' ').map(Number);
//     return A+B;
// }
// const result= addtwonumbers()

// console.log(result);

// Q2. Find if the conditions are obeyed or not? 

// You are given two number first as A� and second as B� and check if both conditions 
// (A<10�<10 and A>B�>�) are satisfied or not with the help of operators. 
// Note: You have to complete Is_Valid function. No need to take any input. 

// const A=5;
// const B=3;

// function Is_Valid(A,B){

//     if(A<10 && A>B){
//         return true;
 //     }
//     else{
//     return false;
//     }
// }
// const res= Is_Valid(A,B);
// console.log(res);

// Q3.Check the conditions 
// You are given two numbers A� and B�. You need to do the following checks: 

// 1.if both are divisible by 10 console true. 
// 2.if both are not divisible by 10 console false. 
// 3.if one of them only is divisible by 10 console true. 

// Use operator to do this. 
// Note: You have to complete Check function. No need to take any input. 

// const A=12;
// const B=20;

// if(A%10===0 && B%10===0){

//     console.log("true");
// }
// else if(A%10!==0&& B%10!==0){

//     console.log("false");
// }
// else{
//     console.log("true")

// }



// Q4.Find the first digit of a 4 digit number 

// You are provided a four digit number N only. Your task is to print out the first digit of that 
// number. 
// Note: You have to complete First_Digit function. No need to take any input.


// function printFirstdigit(N){

//     const firstdigit= String(N)[0];
//     console.log(firstdigit);
// }
// const N=4567
// printFirstdigit(N);

// Q5.Find the last digit of a 4 digit number 
// You are provided a four digit number N only. Your task is to print out the last digit of that 
// number. 
// Note: You have to complete Last_Digit function. No need to take any input.


// function printLast_Digit(N){

//     const lastDigit= N%10
//     console.log(lastDigit);
    
// }

// const N= 6466;
// printLast_Digit(N);




// Q6.Find the remainder 

// You are provided with two numbers A� and B� where A� as divisor and B� as dividend.Your 
// task is find the remainder. 
// Note: You have to complete Find_the_remainder function. No need to take any input. 


// const A=2;
// const B=9;
// function Find_the_remainder(A,B){

//     return B%A;
// }

// const remainder=Find_the_remainder(A,B)
// console.log(remainder)



// Q7.Multiply two Numbers 

// You are provided with two numbers A� and B�. Your task is to multiply these two numbers. 
// Note: You have to complete Multiply_two_number function. No need to take any input.


//  function Multiply_two_number(A,B){

//     return A*B;
// }
// const A=2;
// const B=5;

//  const multiply=Multiply_two_number(A,B);
//  console.log(`the product of${A} and ${B} is ${multiply}`);

 
// Q8. Marks Calculator 
// Shyam has got his marks in three subjects as A�, B�, and C� (out of 100).Write a program to 
// calculate his total marks and his average. 
// Note: You have to complete Sum and Average functions. No need to take any input.



// function culculate_marks(A,B,C){

//     const totalmark= A+B+C;
//     const averagemark= totalmark/3;
//     return{
//         total:totalmark,
//         average:averagemark
//     }
    
// }
// const A=50;
// const B=20;
// const C=100;
// const result =culculate_marks(A,B,C);
// console.log(`Total mark : ${result.total}`);
// console.log(`Total average : ${result.average.toFixed(2)}`);
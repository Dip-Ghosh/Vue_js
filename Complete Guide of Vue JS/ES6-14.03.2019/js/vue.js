// //introduction to const and let
// const type = "Cupcake";
// let flavor = "Apple";
// let price = 5;
// flavor = "Mango";
// console.log(flavor);

// //const and let real life example
// var divs = document.getElementsByTagName('div');
// for( let i = 0; i < divs.length; i++)
// {

//   divs[i].addEventListener('click',function(){
//     console.log(i);
//   })
// }

// //practice problems for changes var to const let
// const name = "James";
// const employeeId = 25;
// const eyes = "blue";
// let age = 36;
// let position = "Developer";
// let salary = 2500;
// let knowledge = ['java','python'];
// let married = false;

//practice problems
let cupcake = document.querySelector('.cupcake');
let container = document.querySelector('.orders')

let cupcakes = [
 {id:1,flavor:'Strawberry'},
 {id:2,flavor:'Apple'},
 {id:3,flavor:'Banana'}
]

let randomCupcake;
let orderNumber = 0;
const baseAmount = 5;
let finalAmount;
let dicountID = 2;
let dicountAmount = 3;
let message;

if(cupcake){
cupcake.addEventListener("click",function(){
 // Select a random cupcake
 randomCupcake = Math.floor(Math.random() * cupcakes.length) + 0;

 // Increment the order number, we get a different order with each cupcake.
 orderNumber += 1;

 // Depending on the "dicountID" variable, this cupcake is on sale or not.
 finalAmount = dicountID == cupcakes[randomCupcake].id ? (baseAmount -dicountAmount ):baseAmount;

 // Create the message
 message = '<div>- You won a ' + cupcakes[randomCupcake].flavor + ' for ' + finalAmount + '$ , your order # is '+ orderNumber + '</div>'
 container.insertAdjacentHTML('beforeend',message)

});
}



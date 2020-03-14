//introduction to const and let
const type = "Cupcake";
let flavor = "Apple";
let price = 5;
flavor = "Mango";
console.log(flavor);

//const and let real life example
var divs = document.getElementsByTagName('div');
for( let i = 0; i < divs.length; i++)
{

  divs[i].addEventListener('click',function(){
    console.log(i);
  })
}

//practice problems for changes var to const let
const name = "James";
const employeeId = 25;
const eyes = "blue";
let age = 36;
let position = "Developer";
let salary = 2500;
let knowledge = ['java','python'];
let married = false;
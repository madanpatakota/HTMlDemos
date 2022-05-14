

function calculateStatic(){
   var a = 10; //static data..
   var b = 20; //static data..
   var c = a+b;
   console.log("from function Two.......");
   return c;
}

//corelogic

// number+undefined = NaN
function calcualtedynamic(first,second){
    console.log("first" ,first);
    console.log("second" ,second);
    var output = first + second;
    return output;
}

//we can assign the return functions to the variables
let someValue = calcualtedynamic(78,130);
console.log(someValue)

let anotherValue = calcualtedynamic(12);
console.log(anotherValue);




//console.log(calcualtedynamic(10,30));
//console.log(calculateStatic());


//Madan
a = 30;
b = 40;

//JOhn
// 60
// 70



var string = "GOOGLE.com";
console.log(string.toLowerCase());
console.log(string.indexOf("E"));
console.log(string.length);


function calcualteThree(first = 0,second = 0){
  return first+second;
}

console.log("calculate three" ,calcualteThree());
console.log("calculate three" ,calcualteThree(10));
console.log("calculate three" ,calcualteThree(10,20));

var array = [ "John",676,new Date(),{ID: 1},true,undefined, null ];
var array1 = [1,2,3,4];
var array2 = ["okan","asda","asda"];
var array3 = ["ada"];


//var array1 = [1*2,2*2,3*2,4*2]; //*2

var array1 = [1,2,3,4]; 

//push  i want to push 5 value in the array1;
array1.push(5);
console.log("after the push");
console.log(array1);

//array1.







array1.map(
    function(value){ 
     console.log(value * 2);
});






// DAta is differnt.......
// object configuraiton is same.
var MadanHouse = {
    Color: "Green",
    location : function(){
        return "Hyderabad";
    }
};

var JohnHouse = {
    Color: "White",
    location : function(){
        return "US";
    }
};

console.log(MadanHouse.Color + "His house is in" + MadanHouse.location())
console.log(JohnHouse.Color + "His house is in" + JohnHouse.location())


















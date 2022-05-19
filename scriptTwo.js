
//blueprint of the object.
//class contains the properties or methods 
//constructor is a special method in the class. 
//it will be call automically , when my class has loaded.

//when you initlize the class based on the "new" operator

//i need the color 


class Home{
   color = "";
   age = 0;
   constructor(col,age1){  //green
      this.color = col;
      this.age = age1
      console.log(this.color);  // empty value or it contains the greeen...
   }
   details(location){
       //return this.color + " " +
       //  location + "age  "+ this.age;
        //string

        return this.color
        .concat(" ").
        concat(location).
        concat(" Age ")
        .concat(this.age)
   }
}

var callingHome = new Home("green",50);
var fulldetails = callingHome.
                    details("Hyderabad");
var age1 = callingHome.age;
console.log(age1);

  // I am calling method based on the 
  //instance(callingHome) of the class

console.log(fulldetails);

var a = [];
a.


//javaapi or .net api
//var callingHome1 = new Home("red");


// var User  = { age : 50 };
// User.age;


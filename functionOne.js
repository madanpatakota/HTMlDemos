  
     console.log("working....");

     var customerName = "James";  
     // wanted to turn into the funciton
     console.log(customerName);


     //it should return the data....
     function cusomerName1(){
         var name = "James updated the record";
         return name;
     }

     console.log(cusomerName1());


     function caculate(){
         var a = 10;
         var b = 20;
         var c = a+b;
         return c;
     }
     console.log("calcualte with return " ,caculate())

     //based on the situatinos we have to select the type
     //of funciton...
 
     //undefined , null

     // i did't define any value....
     var somedata;
     console.log("somedata contains",somedata);

     function caculate1(){
         var a = 10;
         console.log(a);
         var b = 20;
         var c = a+b;
     }
     console.log("calculate without return" , caculate1())
     

     //i have initlized...i have created the function...
     //return keyword. void method
     //it wouldnot return the data. it will execute the statements.
     function CustomerID()
     {
          console.log("its working....");
     }

     // i am calling the function.....
    CustomerID();


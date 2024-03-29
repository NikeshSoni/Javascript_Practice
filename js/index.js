//javascript variable 

// thare are three type of variable in javascript 

// 1st var 

    var name = 'nikki';
    var name = 'rajbhar';

     // par ham is ko  over hide bhi kar sakte hai

     // var likh ke ham ek variable ko declar kar sakte h 
    console.log(name);

  //2nd  let
 
    var navo= 'navodaya';

    console.log('i am navo', navo);

        navo = 50; // its work

        console.log('i am navo', navo);

  //  let navo1= 'navodayasss';
  //     let   navo1 = 501;

  //      console.log(navo1);
       // let me ham over hide kar sakte h par use let declar 
         // nahi kar sakte 

   //3rd is consttant variable  mean = const
     
      //const var jo hota h who khud ko over hide nahi karne deta 


     // const nameStudent= rahul;
      //nameStudent= overhide; its not work 
        
      const nameStudent= 'rahul';
      const numStudent= 39;

      console.log(numStudent);
   

    //example 
    //     var                 let                     const
     var x= 'hello';      let example =99;       const ex="navodaya"
     var x= 'nikki';          example =99;          ex1= 21;

      console.log('const i am', ex ,ex1)
   
      // there are finish the javascript variable 
 
         // JAVASCRIPT LECTURE 2 DATA TYPE
  
       //  type of value is data type 
  
    //   var x= 'hello'; 2 var x= "hello";   ------- string type

    //   var x= 21;        ------- number (intigear) type
    
    //    var x= nikki;    ------- boolean

      //  var x= null;      -------  null  console.log(x);

      // var un;      ----- undefined

      var data= 'dataType';
      var data = 22;

      console.log(typeof(data));

    //  HOW TO CHANGE TYPE OF variable 


       // JAVASCRIPT LECTURE ARTHMETIC OPERATOR 

     //  the aritmetic operator is to ( + , - , / , * , **, %, ++ , -- ) 
     
    // example 1
       let arith1= 60;
           arith2= 11;
       
       const arith = arith1 * arith2; 
      // same as work ( , - , / , * , **, %, ++ , --)
       console.log('calculation', arith1 / arith2);
       
       // example 2
           
       let arith4= "24";
           arith3=5;

           var main= arith4 - arith3;

           console.log( ' number is work as', main); // ans is 4555

      // example 3

        //    const a = 10;
        //    const b = 2;
        //    const c = 4;
  
        //    var d =  a + b * c;  ans is 18

               console.log( '----------------------------'); 
        const a = 10;
        const b = 2;
        const c = 10;

        var d = (a + b) * c;
        console.log( 'Example 3',  d) //  ans is 120 


    
           // ASSIGNMENT OPERATORS 
           
         //  ASSIGNMENT OPERATORS  is a short curt part of arithmetic oprator

           let a1 = 10;
           let b2 = 3;
            
           a1 **= b2;   //  same as work (  - , / , * , **, %,  --)
           console.log('hii i am a' ,a1)


    
       //HOW MANY TYPE OFF CONSOLE.LOG 

      document.write('hii i am nikesh');   
     //  console.log()   same as it is print karta h
     //  console.table([1,2,3,4,5,67]) isse print karne se sari value table me dikhata h \

    // console.error("somthigs new error")  jo bhi prient karte h usko erroe me convart kar deta h

    //  console.warn("some things just warn")  // jo bhi prient karte h usko worn me convart kar deta h

    // console.time("test");
    //    console.warn("some things just warn");
    //     console.warn("some things just warn");
    //     console.warn("some things just warn");
    //     console.warn("some things just warn");
    // console.timeEnd("test");

    //    inspact me jake console me document likh ke enter karne 
    //  ke baad html ki value console me dikhti h

    const rahul = [20];
    const rahul1 = [20];

    console.log(rahul[0] == rahul1[0]);
   
    // const nikki = 5;

    // console.log( nikki +  5);

    // console.log(undefined == null);

  //   console.log(ram);

  //  let ram = 21;

    console.log(manisha);

    var manisha = 21;

    harry(21);

    function harry(params) {
        console.log(`hiiii ${params}`);
    }
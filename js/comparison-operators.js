  // comparison operators apne variable ki value ko dekh ta h ke 
  // uski value badi h ya fir barabar h 
  
 //comparison operators me value jo hoti h who yato true ya false

     
     // different type of comparison operators
         
   //  1st  operator      discription
    //        ==              equal to
      //      ===              equal value equal type
     //       !=              not equal
     //                    (iski value tab true hogi jab right vali valu se left wali value barabar nahi ho to)
    //        !==              not equal value or not equal type 
    //        >             right vali value se left wali value badi ho to ans true 
    //        <             left vali value se right wali value badi ho to ans true 
    //        <=            less than or equal to 
    //        >=            gretar than or equal to 

    console.log( null == undefined); // ans is a true 
    
    console.log( null ===  undefined); // ans is false q ki ager ham iski data type chek 
                                    //karenge to iski value true nahi hogi

       var com1= 20;
        var com= "20";

  // console.log( com1==com); // ans is true q ki ye uski value chaek kar raha h

   //console.log( com1===com);  value is false becouse who uski value barabar mil raha h par type nahi

    var comp= 2;
    var comp1= "20"; 

  //console.log(comp !=comp1); // value get by a not equal  
   
  // console.log(comp!==comp1);  nahi iski value barabar ho nahi iski type barabar ho ans is true

  var compm= 20;
   var compm1= "2"; 

   console.log(compm > compm1); // ans is true q ki comp ki value comp1 se choti h

   console.log(compm < compm1); // ans is false q ki comp ki value comp1 se badi h

   console.log(compm >= compm1); // ans is true q ki compm ki value compm1 se badi par barabar nhai h

   console.log(compm <= compm1); // ans is true q ki compm ki value compm1 se choti h par barabar h 


   // example 2 template literals

   
    const  name ="nikesh";
    const lastName = "rajbhar";
    const age = 20;
    const rollNumber=21;
    const mynumber=9619706466;
    const working= "programer";
    

    console.log(` Hii i am a ${name} ${lastName}. 
             and i am a ${age} year old.My seat no. is ${rollNumber}.
             and my contact no${mynumber}.
             i am a working as ${working}`);

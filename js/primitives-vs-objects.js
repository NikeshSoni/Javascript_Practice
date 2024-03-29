

//  section HOW JAVASCRIPT WORK BEHIND THE SCENES
 
// lecture ;==   primitive-vs-objacts
// primitive
  
let age = 21;
let oldAge = 'nikesh';
    age = 18;

console.log(typeof(oldAge));

  // objacts reference 

     const aGril = {
          name:'Tina',
          lastName:'soni',
          age:22,
     };   
    //  agril objact ki value dekhe to last name soni hai our ham isko change kar rahe the 

      console.log(aGril);

      const isMarried = aGril;

      isMarried.lastName= 'varma';

      console.table(aGril);

    //  agril ki lastName change kar rahe  hai  
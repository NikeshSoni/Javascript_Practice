
  const main_practice = {
       name: 'nikesh',
       lastName:'rajbahr',

       normal(name,lastName){

          console.log(`hii i am a good ${name} and my last name is ${lastName}`);
       }
  }

  main_practice.normal("nikki", 'soni')
  
  const newOne =  main_practice.normal;

  newOne.call(main_practice, 'harry','potter');

  newOne.call(main_practice, 'naman','mortal');


  const applyMethod = ['rajbhar','ragaltos', 'main', 'hero'];

  newOne.apply(main_practice, applyMethod);


  const im =  newOne.bind(main_practice)

  im('manisha','gupta');


  const count = [10,12,13]


//   var [zero , ...apple] = count;


   // console.log(count.splice());


   function myName(newNum) {
      const ten = 10;

      return ten - (newNum * 4) + 5;

   }

    console.log(myName(2));

   // console.log(count.slice(2));


//   console.log(apple * 2);


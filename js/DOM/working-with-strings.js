

// lecture working with string part 1/3

  const jet = "Boing Air India";
  const plane = "A325";

    console.log(jet[2]);  // jet ke under jo value h uski 2ed number par jo word h usko get karta h
    console.log(plane[3]);   // same as 

    console.log(plane.length); // plane ka value ki length  chek kar ta hai

    console.log(jet.slice(4));  // slice  jet ki value ke 4 word delete kar deta hai

    console.log(jet.slice(-4)); // slice me ham ager (-) use karenge to who last ki value print karta h 

    console.log(jet.slice(`new`,'0','5')); //  slice ko ager ham 2 part me kare to (0 se 5) ke word show kar deta hai

    console.log(jet.indexOf('A'));  //  indexOf me ham value 0 to start karta hai
                                   //   ( use me ham particular ek value ko get kar sakte hai) 

    console.log(jet.lastIndexOf('d'));  


function boingSeat(para1) {
    const seat = para1.slice(-1);
     
    if ( seat === 'B' || seat === 'E') {
          console.log("You got middle seat");
          
    } else if (seat === 'C' || seat === 'D') {
        console.log("You got side seat");
        
    } else {
        console.log("you are a lucky one");  
    } 
  } 

      boingSeat("2B");  // Middle seat 
      boingSeat("3C");  // side
      boingSeat("5E");  // middle
      boingSeat("1A");  // window



  const gmail = 'nikesh21soni@gmail.com';

  const errorGmail = '       Nikesh21sonI@gmail.com';

  console.log(errorGmail.trim().toLowerCase());  // ager ham trim use karte hai to uski value ko ham 
                                                // lowerCase ya upperCase kar sakte hai

//   console.log(gmail.trim().toUpperCase()); // pure value ko capital me convart kar deta hai
  
   console.log( gmail === errorGmail);


   //  working with string part 2/3 

   // to will cover 

   // Replaacing 01

   // replace ko use karke ham variable ki ek word ki value  ko change kar sakte hai

   const price= '2003$';

   console.log(price);
   const replace1 = ( price.replace('$' , ('#')),price.replace(('2'), ('5')));

   console.log(replace1);
   
   // includes  02

   var includes1 = 'nikesh rajbhar';

 // includs chek karta hai ke variable me jo ham include kar rahe hai who wsme available hai kay

   console.log(includes1.includes('nikes')); 


  // startsWith 03

  let planeNew= '5458998';

  console.log(planeNew.startsWith('54'));


/// problum ye tha ke me isme start.With sue kar raha tha usme ( s bhi add hoga)


// lets tray to edvance
function name(params) {
  let planefun= 'nikesh';
  const planeReplace = (planefun.replace('i', '1'))
  console.log('hii i am edvance',planeReplace);
  return planeReplace;
}
name();

// console.log(planeReplace.startsWith('o1'));

// endsWith  04

let trayEnd = 'rahul chorMahada';

console.log(trayEnd.endsWith('da'));


 /* ==============================
 
    working with string 3/3
 
 ===================================*/


  // split part 01

  const massage = 'nikesh+rajbhar';

  let useSplit =  massage.split('+');

  console.log(useSplit);

  console.log(typeof(massage));

  // data structures 

  const [ fname,lnmae ] = useSplit;

  console.log(fname,lnmae);


  // join part 02  

  const newNmae = [ "Mr." , lnmae].join(' nikki ');

  console.log(newNmae);


  // padStart 
  // padEnd

  const padMan = '9619706466';

  const padStart =  padMan.padStart('12' , '=');

  console.log(padStart);


  //  padstarts jo hota hai usse ham apne var ki value ki length bada sakte hai

  //  repeat 

  // repeat se var ko ham value ko ham value ko reapart kar sakte hai
  const rep = {
    itsme:"Hii its me nikki+",
  }
  
  // var newRap = ['1', '2']
  const reapetNew = rep.itsme.repeat('2'); 
  console.log(reapetNew);

  let newSets1 =  new Set(rep.itsme);

  console.log(newSets1.add('word'));














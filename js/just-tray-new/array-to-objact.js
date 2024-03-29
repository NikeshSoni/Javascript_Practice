

// example 01
//  es5 work as there
const myprolang = ["javascript", "java", "C", "python", "php"];

var lan1 = myprolang[0];
var lan2 = myprolang[1];
var lan3 = myprolang[2];
var lan4 = myprolang[3];
var lan5 = myprolang[4];

console.log( `i am a new ` ,  lan1, lan2);


// example 02
// es6

let  [top1,top2,top3,top4,top5]  =  myprolang;

console.log(top1,top3);

var  [array1 , , arraylast] = myprolang;

console.table(myprolang.length,arraylast);

// example 03

const arayAdd =  [ 1,2,3,4,5,6,7,8,9,10,12,13,14];

var [a, b , c , ...d] = arayAdd;

console.log(a);
console.log(b);
console.log(c);
console.log(d);



// example 04
const changeArray = ['num1', 'num2' ,'num1', 'num2'];

// console.log(changeArray);
   
  //   changeArray ek array hai kay ye chake kar rahe  hai 

  console.log([Array.isArray(changeArray)]);

      //  console.log([changeArray] instanceof Array);

      const newnikki = {
        name: changeArray,
        
      }

    

      
// console.log(newnikki);


    
       
// section fandamental 1

//  lecture function  declarations vs expression

  //function normal
   
  //exam 1     
    function hello(fname,lname){
        console.log(`hello i am a ${fname} and last name is ${lname}`) 
    }
    hello('nikesh','rajbhar');
    hello('nikesh1','rajbhar2');

     //exam 2
    function sum(sum1,sum2){
        console.log(sum1+sum2)
    }

    sum(20,10);

// function width return

let leader = 'mortal';
    gangstar = 'sid';

function soul( goblin , hector){
    const main = `hi i am a ${goblin}. and he is ${hector} `
    return main;
}

 const bit=soul(leader,gangstar);

console.log(bit);


// function  declarations

function declarations(info){
  
    return 100 - info; 
};

const val1 = declarations(5);

console.log(val1);
//  function  expression
 const resto = function ( info){
      return 46 - info;
 }

 console.log(resto(6));

// function edvance 


function mark( math ,scince ){
    const result = math + scince;
    return result;
}

function percantage(total){
       let totalMark = total/ 300 * 100;
       console.log(totalMark);
      // return
}

let allMark= mark(100,78);

percantage(allMark);


  
 


















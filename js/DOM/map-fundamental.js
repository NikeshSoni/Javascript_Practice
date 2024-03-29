// lecture map fundamental

 // {
    //  map fundamental ko ham use karte hai usme koi value add karna hota hai to set use karte hai
//  }

const rest =new Map();
 rest.set(1, 'kj somaya');   //  const rest ki value me kj somya ki value ko set kar raha hai
rest.set(2, 'sion hospital');

console.log(rest.set(3,'rajawadi hospital'));  // console.log  se bhi ham add kar sakte hai valu add

rest.set('deserts' , ['gulab jamun','caramal costard','mataka rabdi', 'sizzling browine']) 
.set('open',8,).set('close',12);
console.table(rest.get('deserts')); // const rest me se ek value ko get karta hai
console.table(rest.get('open')); 
console.table(rest.get('close'));
//rest.clear();
console.log(rest);

   


// map interation

const question= new Map([
    ['questions', 'Who is a good student in navodaya class ?'],
    [1, 'ram'],
    [2, 'rahul'],
    [3, 'manisha'],
    [4, 'nikesh'],
    ['corrent',4],
    ['please Try agin', 1],
    ['please Try agin', 2],
    ['please Try agin', 3],
]);  // create new quation us me hamne arry format me proparty value ko add  kiya hai 

console.table(question);  
console.table(question.get('questions'));  

for( const [key , value] of question){
    if(typeof (key)  === 'number'){
        console.log(`question: ${key}. ${value}`)
    }
};

const answer = prompt('Who is a cute student in navodaya class ?');
console.log(answer);


if(Number(answer) === question.get('corrent')){
       console.log( `yas the ans is true`)
}else{
    console.log(`please Try agin`)
}




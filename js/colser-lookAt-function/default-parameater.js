

// lecture Default parameater

// Default parameater me ham function ke under ki value ko bahar bhi use kar sakte hai
const passName = "Nikesh Rajbhar";

let bookings= [];

const createBooking = function (flightNum, passenger = 1, price = "$8092") {
    //   passenger || 1 es5 me ham yesa use karte the
        const name= "deepak bhai";

     let booking = {
        flightNum,
        passenger, 
        price 
     }

     console.log(booking);

     bookings.push(booking);
     return name;
}

createBooking( 43,2,"$999");
console.log(bookings);


// Lecture how parsing argument works : value and reference 


const booking1 = {
  
    passenger1:{
        name:'nikki soni',
        price1:  '$2199',
        flightNum1:'F5454',
        phoneNum:9619706466,
    },
    passenger2:{
        name:'Harry potter',
        price1:  '$3499',
        flightNum1:'A5499',
        phoneNum:9152910443
    }
};

 console.table(booking1);

   
 const editBooking = function ( book ) {

    const booking2 = [book.passenger1.name];
    console.log(booking2);
    return booking2;   
 }
 
 editBooking(booking1);

 

 

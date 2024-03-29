// section Data structures morden operators and string

//const { setMaxListeners } = require("gulp");

// lecture enhanced object literals 

const time= [1,2,3,4,5,6,7,8,9,10,12,13,14,15,16,17,18,19,20,21,22,23];
const weeks= [ 'mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
      [weeks[3]]:{
          open:time[11],
          close:12
      },

      [`mon-${2+4}`]:{
        open:11,
        close:23
    },

    [weeks[5]]:{
        open:0,
        close:24
    },

}; 
    console.table(openingHours);

    const restaurant = {
        name: 'tadaka-2',
        location:'new bharat nager vashinaka chembur mumbai-400074',
        categories:[ 'chines', 'kebab', 'dal-chawal', 'biryani', 'North-india', 'south India'],
        startrMenu: [ 'chicken barra cream', 'pani-puri','fish-butter gralic', 'butter tanduri naan', 'paneer Takka' ],
        mainMenu:[ 'chicken mughlai', 'egg Hakka  noodles', 'mix tadaka paneer'],
        deserts:['gulab jamun','caramal costard','mataka rabdi', 'sizzling browine'],
         
        hours:openingHours,

        order: function (starterIndex,mainIndex){
            return [this.categories[starterIndex], this.deserts[mainIndex]]
        }
    }

    console.table(restaurant.hours.sat?.open);

    // section Data structures morden operators and string

    // looping-object :  object keys, value and entries


    const properties = Object.entries(openingHours);
  
    console.log(properties);

    let days = `we are open ${properties.length}`;

    console.log(days);

  
  //  object keys
    const key = Object.keys(openingHours) ;

    console.log(key);


   // object values
    const key1 = Object.values(openingHours) ;

    console.log(key1);


    for( const [ keys, { open, close}]of properties){

        console.log(` on ${keys}, days open at ${open}, and colse at ${close}`); 

    };

    // lecture : SETS 

     const api1 = ['pani-puri', 'wada-pav','pani-puri'];

     const api2 = ['pasta', 'pizza', 'pasta','pizza','burger','sandwich', ...api1];


     let newSets =  new Set(api2);

     console.table(newSets.add('kanda'));

    //  cooding chalange
     console.table(newSets.delete('kanda'));


     
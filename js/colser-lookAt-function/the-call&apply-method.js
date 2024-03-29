

// console.log('nikki');

    const booking = {
        custName: 'nikesh rajbahr',
        train:'pavan express',
        trainNumber: 14322,
        booked:[],

        book(name,trainName,trainNum){
             console.log(`you have a booked your name ${name}. and train Name is ${trainName}`);
             
        //    this.booked.push(`we hyave booking data for name:  ${name}. trainName ${trainName} seatNumber ${trainNum}`)
              console.log(`we hyave booking data for name:  ${name}. trainName ${trainName} seatNumber ${trainNum}`)
        }
    }

   // console.table(booking);


   booking.book("nikki", "Suraj express", "54321")


   console.log('================================================');

    //  const booking1 = {
    //     custName: 'rajbahr',
    //     train:'pavan express',
    //     trainNumber: 14322,
    //     booked:[],
    //  }


     const book = booking.book; 

//   console.log(book.booked);


//  its a call method

    book.call( booking , "rahul" , "vande bharat express", 21121);

    console.log('its a data for Rahul', booking);

    console.log('================================================');
    
    book.call(booking, "ram" , "pune bharat express", 21121);

    console.log('its is a data for Ram', booking);

    console.log('================================================');

    book.call(booking, "deepak" , "mumbai bharat express", 21121);

    console.log('its a data for Deepak', booking);

    //  there are apply 
    
    console.log('================================================');

    const trainData= ['seeta' , 'dharbanga express' ,90908];


     
    book.apply( booking, trainData);

    console.log('its a data for Seeta',trainData);


    const express = {
            custName: 'Sunder bhai',
            train:'google express',
            trainNumber: 14322,
            booked:[],

            expressData(name,trainName,trainNum) {

            this.booked.push(`we hyave booking data for name:  ${name}. trainName ${trainName} seatNumber ${trainNum}`)
        }
     }

        express.expressData("nikesh","mortal",4044);

        console.log(express);

        const store = express.expressData;

        let privateTrain = store.bind(express);

        console.log(privateTrain("nikki cool",5000));

    // console.log(privateTrain("sunder nikki", "nikita express",21201));


  



    
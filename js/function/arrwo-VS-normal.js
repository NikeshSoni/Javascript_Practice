// Arrow function vs normal function


   // its a normal function 
   function myName( age, isAge) {
        const num1 = 200;
        return age * isAge - num1;
    }

    const newVar = myName(50,10);

    console.log(newVar);

    // Arrow function on ecmma script(6)

    const navodaya = (age, isAge) => {
        const num1 = 10;
        return (age * isAge - num1) + 300;
    }

    const vari = navodaya(5,3);

    console.log(vari);

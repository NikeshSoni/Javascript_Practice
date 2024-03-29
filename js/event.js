

//  

// const { name } = require("browser-sync");

console.log('lecture event' );


//  there are a type of event 

//   1. click   =      (onclick)
//   2. double click =  (ondblclick)
//   3. mouse hover  = (onmouseenter)
//   4. mouse out   =   (onmouseout)
//   5. mouse down  =   (onmousedown)
//   6. mouse up    =  (onmouseup)
//   7. key press   = (onkeypress)
//   8. key up      = (onkeyup)
//   9. load        = (onload)
//   10. unload     = (onunload)
//   11. resize     = (onresize)
//   12. scroll     = (onscroll)

//  Example 01

 const events = function eventlisner(params) {
    var eve = confirm('do you like my website');

            if(eve){
                alert('thanks');
            } else{
            alert('sorry');
            }
          }

   const btn = document.querySelector(".button");

   btn.addEventListener("click" , function () {

                const name = document.querySelector("#workData");

                name.classList.toggle("nikki");

            if (  name.style.display === 'none' ) {
                name.style.display ='block'; 
            } else {
                name.style.display = "none";
            }
       });

       const Nikki =  () =>  {
                
       }

       console.log(typeof Nikki);
    //    const fruits = ["2", "5", "7", "9"];

    //    fruits[2] = '22';

    //    fruits.shift("2022")
    //    console.log(fruits);

    const name = document.querySelector("#input_btn").value;

    let text = name ;

    switch (new Date().getDay()) {
        case 1:
          text = "Today is Saturday";
          break;
        case 2:
          text = "Today is monday";
          break;
          case 3:
                 text = "Today is tuesday ";
            break;
            case 4:
                  text = "Today is wednesday";
            break;
            case 5:
                  text = "Today is thisday";
            break;
            case 6:
                  text = "Today is friday";
            break;
            case 7:
            text = "Today is sunday";
            break;
        default:
          text = "Looking forward to the Weekend";
      }

    var name1 = document.querySelector("#workData").innerHTML = text;


//  example 02

// eventlisner();   

    //  document.querySelector('.nikki').addEventListener('click')
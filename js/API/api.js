

    // lecture = asynchromous javascript , AJAX AND API 



            const apiLink = "https://dummyjson.com/products/";

            console.table(apiLink);

            async function apiDada(url) {

            const responces = await fetch(url);

            try {
                
                let json = await responces.json();

                let finalResponces = ' ';
               
                 for ( let products of json.products){
                     finalResponces +=`
                        <div class="card p-3 m-4 mb-5" style="width: 18rem;">
                         <img src="${products.images[0]}" class ="card-img-top" alt= "${products.title}">
                        <div class="card-body">
                              <h5 class="card-title"> ${products.title}</h5>
                              <p class="card-text"> ${products.description} </p>
                              <a href ="#"  class ="btn btn-primary"> $ ${products.price}</a>
                        </div>
                      </div>
                    `;
                }

                console.log(json.products);
            
              if ( finalResponces == undefined ) {
                document.querySelector(".row").innerHTML = ` <h1> </h1>`;
               } else {
                 document.querySelector(".row").innerHTML = finalResponces;
                   }
              }
              
              catch (error) {
                    alert(error);
                    alert("HTTP-Error:" + responces.status);
              }
            }

           
              apiDada(apiLink);


      
            


              
              
            


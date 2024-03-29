

        // global  function

        const glb='nikesh';

        function global() {
                   console.log(glb); 
              }

        global();

        console.log(glb);

        // kisi bhi value ko ager ham   function se bahar see call kare to use global scoup bolte hai

        function global() {
        
            const glb1='nikesh';
            console.log(glb1); 
        }

        global();



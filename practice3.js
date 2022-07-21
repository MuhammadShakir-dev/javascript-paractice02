    <script>
        /*
                  Write a JavaScript program to get the length of a JavaScript object



        */
                         var std = {
                            Name : "Muhammad Shakir",
                            Age : 21,
                            Student_Id : "BSE-20F-077",
                            Degree : "BS-SE",
                         }
                          
                         for(i in std){
                            document.write(i + " : " + std[i] + "<br>");
                         };
                         
                             
                         document.write("<br>");
                         console.log(Object.keys(std).lenght);
    </script>

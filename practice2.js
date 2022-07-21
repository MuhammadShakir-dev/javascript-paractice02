  <script>
         /*
                Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
                
          */

                     var std ={
                        Name : "Muhammad Shakir",
                        Age :21,
                        Degree : "BS- Software Eng", 
                        Std_Id : "BSE-20F-077",
                        City : "Karachi"
                     };

                     for(i in std){
                        document.write(i + " : " + std[i] + "<br>")
                     };

                     document.write("<br>");
                  
                     delete std.Std_Id;
                     
                     for(i in std){
                        document.write(i + " : " + std[i] + "<br>")
                     };


</script>


 <script>
       /*
                 1. Write a JavaScript program to list the properties of a JavaScript object.




          */
                         var a = {
                            Name : "Muhammad Shakir",
                            Age : "21",
                            Degree : "BS-SE",
                            University : "Sindh Madressatul Islam University",
                         };

                          for(i in a){
                                 document.write(i + " : " + a[i] + "<br>");
                          }
                        
                          document.write("<br>")

                          var b = {
                              Name : "Anum Mustafa",
                              Age : 22 ,
                              Degree : "BS-SE",
                              University : "Sindh Madressatul Islam University"
                          };


                          for(j in b){
                            document.write(j + " : " + a[j] + "<br>" );
                          }
    </script>

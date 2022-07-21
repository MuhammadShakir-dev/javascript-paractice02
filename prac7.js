   <script>
        /*
                        array slice() and array splice()

                        slice = returns a part of an array.
                        splice = removes and/or adds elements to an array.


                        in slice you give a rang that from where you want ti slice the array.

                       var std1 = ["Anum","Shiza","Shakir","Maira","Lavesha","Sarmad"];
                       var b = std1.slice(3);
                       document.write(b);
                      
                      in this condition slice(3) means that slicing starts from 3 to the end of array


                     splice() used to add or remove some thing in your arry and you dont need to perform it in any variable
                       
                       var std2 = ["Anum","Shiza","Shakir","Maira","Lavesha","Sarmad"];
                       std2.splice(3,3,"Haris","Rafay","Ammad");
                       document.write(std2);


                       (3,3)          =     first 3 is form where adding start.,
                                      =     Second 3 is for how many values are deleted,
                                      =     and in last you have to write the values that were added.





        */
                       var std1 = ["Anum","Shiza","Shakir","Maira","Lavesha","Sarmad"];
                       var b = std1.slice(3);
                       document.write(b + "<br><br>");

                       document.write("Remaining Students are : <br><br> ")

                       var std2 = ["Anum","Shiza","Shakir","Maira","Lavesha","Sarmad"];
                       std2.splice(3,3,"Haris","Rafay","Ammad");
                       document.write(std2);

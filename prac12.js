 <script>
        /*
                       array filter() in javascript.

                       array filter finds the array that passes the required test and make a seperate array for that


        */
                             var a = [31,18,77,49,81,107,69,101,108,18,44];
                             document.write("This is the actual array "+ a + "<br><br>");
                             var b = a.filter(test);
                             function test(x){
                                return x < 80;
                             }
                             document.write("This is the filter array " + b);
    </script>

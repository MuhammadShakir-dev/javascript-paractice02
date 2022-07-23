
 <script>
        /*
                   some and every in javascript array functions.
                    
                   whats is some() & every() in javascript?
                   some(): returns true if at least one element in the array satisfies the provided testing function.
                   every(): returns true if all elements in the array satisfy the provided testing function.
          
      
            */
                        var a = [10, 20, 30, 40, 50, 60];
                        var b = a.some(test);
                        function test (x){
                            return x > 50;
                        };
                        document.write("<h1>Some()</h1>");
                        document.write(b + "<br><br>");

                        var c = a.every(test1);
                        function test1(a){
                            return a > 40;
                        }
                        document.write("<h1>Every()</h1>");
                        document.write(c)
                        
                        
    </script>

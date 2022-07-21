   <script>
      /*
                   Arrays practice.


                   concat() and join()

                   concat = joins two or more arrays into one arrays.
                   join  =  join array into string.

                  before joining you have to concat the arrays
        

       */
      var ary = ["Pst", "Isl", "Dsa"];
      var aryb = ["Pf", "OOP"];
      var c = ary.concat(aryb);
      document.write(c + "<br>");


      var d  = ["Muhammad"];
      var e = ["Shakir"];
      var f = d.concat(e);
      var j = f.join("-");
      document.write(j + "<br>");

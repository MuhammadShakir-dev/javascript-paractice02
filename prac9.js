
    <script>
      /*
                    multidimensional array in javascript



        */
      var ary = [
        ["Muhammad Shakir", "BS-SE", "21", "KARACHI","Undergraduate"],
        ["Anum Mustafa", "BS-SE", "22", "KARACHI","Undergraduate"],
      ];

      document.write("<table border = '1px' cellspacing = '0px'>");
      for (var i = 0; i < ary.length; i++) {
        document.write("<br");
        document.write("<tr>");
        for (var j = 0; j < 5; j++) {
          document.write("<td>" + ary[i][j] + "</td> ");
        }
        document.write("</tr>");
      }
      document.write("</table>");


    </script>

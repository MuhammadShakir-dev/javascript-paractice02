    <script>
           /* 
             Write a JavaScript program to display the reading status (i.e. display book name, author name and price) of the following books.

            
            */

                       var ary = [
                        {
                             BookName : "BE EXTRAODINARY",
                             Author : "Robin Sharma",
                             Price : "$50"

                        },

                        {
                            BookName : "Atomic Habbits",
                            Author : "Robin Sharma",
                            Price : "$60"
                        },

                       ];

                       for(var i = 0; i < 2; i++){
                        document.write(i + "  = " + ary[i].BookName + " " + ary[i].Author + " " + ary[i].Price + "<br>");
                       }
    </script>

$(function() {
        $(".search_button").click(function() {
        var myNode = document.getElementById("imageContainer");
        while (myNode.firstChild) {
            myNode.removeChild(myNode.firstChild);
        }

        // getting the value that user typed
        var searchString = $("#search_box").val();
        // forming the queryString
        var data = 'search='+ searchString;
        // if searchString is not empty
        if(searchString) {
            // ajax call
            $.ajax({
                type: "POST",
                url: "fleekTestGET.php",
                data: data,
                beforeSend: function(html) { // this happens before actual call
                    $("#results").html('');
               },
               success: function(html){ // this happens after we get results
                    var i = 0;
                    console.log("log the response here" + html);
                    var par = JSON.parse(html);
                    var length = par.length;
                    while (i < length) {
                        var newElement = document.createElement('div');
                        var newElementImg = document.createElement('IMG');
                        newElement.id = "ProductHeadline";
                        newElement.innerHTML = par[i][1];
                        newElementImg.id = "img" + par[i][0];
                        newElementImg.setAttribute("src", par[i][0]);
                        newElementImg.setAttribute("width", "100%");
                        document.getElementById("imageContainer").appendChild(newElement);
                        document.getElementById("imageContainer").appendChild(newElementImg);
                        i++;
                    }
                    // $("#imageContainer").append(html);
                    // $(".foo").attr("src", html);
              }
            });
        }
        return false;
    });
});
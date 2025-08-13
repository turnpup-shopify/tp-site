<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js"></script>
<script type="text/javascript">
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
                    var par = JSON.parse(html);
                    var length = par.length;
                    console.log(par);
                    while (i < length) {
                        var newElement = document.createElement('div');
                        var newElementImg = document.createElement('IMG');
                        newElement.id = "ProductHeadline";
                        newElement.innerHTML = par[i][2] + " - " + par[i][1];
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
</script>
<style type="text/css">
    body {
        background-color: black;
        color:white;
    }
    #imageContainer {
        width: 400px;
        margin: 0 auto;
    }
    #ProductHeadline {
        margin: 20px 0px;
        font-family: 'Montserrat', sans-serif;
    }
</style>
</head>
<body>
<div id="container">
<div style="margin:20px auto; text-align: center;">
<form method="post">
    <input type="text" name="search" id="search_box" class='search_box'/>
    <input type="submit" value="Search" class="search_button" /><br />
</form>
</div>
<div id="imageContainer">
</div>
</div>
<div style="width:200px;position:fixed;left:10px;top:10px;z-index:-1;"> <img src="fleek_v1.png" width="200px"></div>
</body>
</html>
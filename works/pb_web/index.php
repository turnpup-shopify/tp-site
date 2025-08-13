<!DOCTYPE html>
<html lang="en">
  <head>
    <meta char-set="utf-8">
    <title>tester page</title>
    <script src="/js/jquery.js"></script>
    <script src='https://cdnjs.cloudflare.com/ajax/libs/react/0.13.3/react.js'></script>
    <script type="text/javascript">
        var money = 0;
        $(document).ready(function(){
            $.when(
                $.ajax({
                    type: 'GET',
                    url: '../../phpIOSGetPlaces.php',
                    success: function(data) {
                        money = JSON.parse(data);
                        for (var i = 0; i < money.length; i++){
                            console.log(money[i].adWhere)
                            var temp = "<p class='place'>".concat(money[i].adWhere,"</p>")
                            $("#root").append(temp);
                        }
                    }
                })
            ).then(function(){
                var tempp = "<p>WTF</p>"
                $(".place").append(tempp);
                }
            )
        });
    </script>
  </head>
  <body>
    <input type="button" value="dank">
    <h1> List of Places </h1>
    <div id="root"> </div>
  </body>
</html>
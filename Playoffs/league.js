  window.onLoad = works();

  function works() {
      //load user picked value from dropdown
      var value = $("#statDrop :selected").text();
      document.getElementById("change").innerHTML = "2014-2015 NBA League Leaders in " + value;

      d3.select("svg")
          .remove();
      var dataSet = [];
      var teams = [];
      var playersToConnect = {};
      var playerToPoints = {};
      var playerToIndex = {};
      var stat = $("#statDrop").val();
      var url = "";
      url="http://playoffscurry.herokuapp.com/playoffs2016";

      $.getJSON( url, function(data) {

        var maxy = d3.max(data, function(d) { return d[stat]; });
        var miny = d3.min(data, function(d) { return d[stat]; });

        var z = 0;
        data.forEach(function (d) {
          playerToPoints[d.name] = d[stat];
          playerToIndex[d.name] = z;
          z++;
        });

        var barSpacing = 30;

        var color = d3.scale.linear()
          .domain([miny, maxy])
          .range(["#deeff5", "blue"]);

        var amplify = d3.scale.linear()
          .domain([0, maxy])
          .range([0, 700]);

        var canvas = d3.select("#main").append("svg")
          .attr("width", 1100)
          .attr("height", 2000);

        var bars = canvas.selectAll("rect")
          .data(data)
          .enter()
          .append("rect");

        var rectAttributes = bars
          .attr("x", 160)
          .attr("y", function (d, i) { return i * barSpacing })
          .attr("width", function (d) { return amplify(d[stat]) })
          .attr("height", 10)
          .attr("fill", function(d) { return color(d[stat]) })

        canvas.selectAll("text")
          .data(data)
          .enter()
          .append("svg:text")
          .attr("x", function(d, i) { return 20; })
          .attr("y", function (d, i) { return i * barSpacing + 10})
          .text( function (d) { return d.name + ": "})
          .attr("font-family", "sans-serif")
          .attr("font-size", "10px")
          .attr("fill", "black")
          .attr("text-anchor", "left")
          .attr("text-anchor", "top")
          .attr('class','names')

        canvas.selectAll("text.values")
          .data(data)
          .enter()
          .append("svg:text")
          .attr("x", function(d, i) { return 126; })
          .attr("y", function (d, i) { return i * barSpacing + 11})
          .text( function (d) { return d[stat]})
          .attr("font-family", "sans-serif")
          .attr("fill", "black")
          .attr("text-anchor", "left")
          .attr("text-anchor", "top")
          .attr('class','points')


        data.forEach(function (d) {
          if (teams.indexOf(d.team) == -1) {
            teams.push(d.team);
            playersToConnect[d.team] = [];
            playersToConnect[d.team].push(d.name)
          } else {
            playersToConnect[d.team].push(d.name);
          }
        });

        var colorSet = d3.scale.category20();
        var colorIndex = 0;
        var colors = [];
        //for each player on team
        for (key in playersToConnect) {
          var points = []
          var maxPoints = playerToPoints[playersToConnect[key][0]];
          if (temp == maxPoints) {
            var strokeweight = 1.5;
          } else {
            var strokeweight = 3;
          }
          var temp = maxPoints;
          var leng = playersToConnect[key].length;
          var diff = ((playerToIndex[playersToConnect[key][leng - 1]] * barSpacing + 5) + (playerToIndex[playersToConnect[key][0]] * barSpacing + 5)) / 2;
          var currColor = colorSet(colorIndex);
          colors.push(currColor);
          for (index = 0; index < playersToConnect[key].length; ++index) {
            var currPlayer = playersToConnect[key][index];
            canvas.append("line")
               .attr("x1", amplify(maxPoints) + 170)
               .attr("y1", playerToIndex[playersToConnect[key][0]] * barSpacing + 5)
               .attr("x2", amplify(maxPoints) + 170)
               .attr("y2", playerToIndex[playersToConnect[key][index]] * barSpacing + 5)
               .attr("stroke-width", strokeweight)
               .attr("stroke", currColor);

            canvas.append("line")
             .attr("x1", amplify(playerToPoints[currPlayer]) + 160) //this is changing
             .attr("y1", playerToIndex[playersToConnect[key][index]] * barSpacing + 5)
             .attr("x2", amplify(maxPoints) + 170)
             .attr("y2", playerToIndex[playersToConnect[key][index]] * barSpacing + 5)
             .attr("stroke-width", strokeweight)
             .attr("stroke", currColor);
            // console.log(playersToConnect[key][index]);

            canvas.append("circle")
             .attr("cx", amplify(maxPoints) + 170) //this is changing
             .attr("cy", playerToIndex[playersToConnect[key][index]] * barSpacing + 5)
             .attr("r", 4)
             .attr("fill", currColor)
             .attr("stroke-width", 2)
             .attr("stroke", currColor);
          }

          var ran = -10 + Math.random()*20;

          //comment this out to get the labels in the middle of the vertical lines

          // canvas.append("line")
          //  .attr("x1", amplify(maxPoints) + 170) //this is changing
          //  .attr("y1", diff)
          //  .attr("x2", 894)
          //  .attr("y2", diff)
          //  .attr("stroke-width", 2)
          //  .attr("stroke", currColor);

          // canvas.append("text")
          //     .attr("x", 900)
          //     .attr("y", diff + 5 + ran)
          //     .text(key)
          //     .attr("font-family", "sans-serif")
          //     .attr("font-size", "16px")
          //     .attr("fill", currColor)
          //     .attr("text-anchor", "left")
          //     .attr("text-anchor", "top")

          colorIndex = colorIndex + 1;
        };


        for (var j = 0; j < teams.length; j++) {
          canvas.append("rect")
            .attr("x", 910)
            .attr("y", (j * 15) + 10 )
            .attr("width", 30)
            .attr("height", 10)
            .attr("fill", colors[j])
        }

        for (var j = 0; j < teams.length; j++) {
          canvas.append("text")
            .attr("x", 960)
            .attr("y", (j * 15) + 20)
            .text(teams[j])
            .attr("font-family", "sans-serif")
            .attr("font-size", "16px")
            .attr("fill", "black")
            .attr("text-anchor", "left")
            .attr("text-anchor", "top")
        }

  });
}
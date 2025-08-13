window.onLoad = works();

function works() {
    //remove the table and linegraph
    $("table tr").remove();
    $("svg").remove();
    $(".maxPlayer1").remove();
    $(".maxPlayer2").remove();
    //two drop down menus
    var player1 = $("#player1").val();
    var player1Name = $("#player1 option:selected").text();
    var player2 = $("#player2").val();
    var player2Name = $("#player2 option:selected").text();
    //PLAYER1
    url = "https://playoffscurry.herokuapp.com/playoffs/" + player1 + "/" + player2;
    $.getJSON( url, function(data) {
        console.log(data);
        //create table
        // var tr;
        // for (var i = 0; i < data.length; i++) {
        //     data[i].worl = transformWinsLosses(data[i].worl);
        //     $("table").append(
        //         $("<tr>")
        //             .attr("class","rowGame")
        //             .append(
        //                 $("<td>")
        //                     .html(data[i].name)
        //              )
        //             .append(
        //                 $("<td>")
        //                     .html(data[i].worl)
        //                     .attr("class","worl")
        //             )
        //             .append(
        //                 $("<td>")
        //                     .html(data[i].threes)
        //             )
        //     );
        // }
        //chart dimensions
        var margin = {top: 20, right: 20, bottom: 30, left: 40},
        width = 960 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;
        //set up indexes for games
        var z = 0;
        data.forEach(function (d) {
          data[z].index = z + 1;
          z++;
        });
        //need this data to relable the x-axis
        var tickLabels = [];
        var ticks = [];
        // need this for maxPlayer1
        var oneThrees = [];
        data.forEach(function (d) {
          tickLabels.push(d.name);
          ticks.push(d.index);
          oneThrees.push(parseInt(d.threes));
          if (d.index < 11) {
            d.player=player1Name;
          } else {
            d.player=player2Name;
          }
        });
        data1=[];
        data2=[];
        h = 0;
        data.forEach(function (d) {
          if (d.index < 11){
            data1.push(d);
          } else {
            data2.push(d);
          }
          h += 1;
        });
        data2.forEach(function (d) {
          d.index = d.index - 10
          h += 1;
        });

        //x-axis
        // var twoThrees = player2Data(url2);
        // var maxPlayer2 = Math.max.apply(Math,twoThrees);
        var maxPlayer1 = Math.max.apply(Math,oneThrees);
        // var maxMax = compareMaxs(maxPlayer1, maxPlayer2);
        var xValue = function(d) {if (d.index < 11) {return d.index;}else {return d.index - 10}}, // data -> value
            xScale = d3.scale.linear().range([0, width]), // value -> display
            xMap = function(d) { return xScale(xValue(d));}, // data -> display
            xAxis = d3.svg.axis()
                .scale(xScale)
            //     .tickValues(ticks)
            // .tickFormat(function(d,i){ return tickLabels[i]})
                .orient("bottom");
        //y-axis
        var yValue = function(d) {return parseInt(d.threes);}, // data -> value
            yScale = d3.scale.linear().range([height, 0]), // value -> display
            yMap = function(d) { return yScale(yValue(d));}, // data -> display
            yAxis = d3.svg.axis().scale(yScale).orient("left");
        console.log(oneThrees);
        console.log(maxPlayer1);
        var amplify = d3.scale.linear()
          .domain([0, maxPlayer1])
          .range([420, 40]);
        // setup fill color off of WINS or LOSSES
        var cValue = function(d) {return d.worl;},
            color = d3.scale.ordinal()
                .range(["red","green"])
                .domain(["Loss","Win"]);
        //make the line
        var x = d3.scale.linear()
            .range([0, width]);
        var y = d3.scale.linear()
            .range([height, 0]);
        var line = d3.svg.line()
            .x(function(d) {return xScale(d.index);} )
            .y(function(d) {return yScale(parseInt(d.threes)); });
        var line2 = d3.svg.line()
            .x(function(d) {return xScale(d.index);} )
            .y(function(d) {return yScale(parseInt(d.threes)); });
        // add the graph outline to HTML page
        var svg = d3.select("body").append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
          .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
          // makes it so the points are scaled correctly
          xScale.domain([d3.min(data, xValue)-1, d3.max(data, xValue)+1]);
          yScale.domain([0, d3.max(data, yValue)+1]);
          // add Player 1 line to graph
          svg.append("path")
              .attr("class", "line")
              .attr("d", line(data1));
          svg.append("path")
              .attr("class", "line2")
              .attr("d", line2(data2));
          // x-axis label
          svg.append("g")
              .attr("class", "x axis")
              .attr("transform", "translate(0," + height + ")")
              .call(xAxis)
            .append("text")
              .attr("class", "label")
              .attr("x", width)
              .attr("y", -6)
              .style("text-anchor", "end")
              .text("Game");
          // line text
          svg.append("g")
            .append("text")
              .attr("class", "maxPlayer1")
              .attr("x", xScale(2.4))
              .attr("y", amplify(oneThrees[0]))
              .style("text-anchor", "end")
              .text(player1Name);
          // line 2 text
          console.log(oneThrees[19]);
          svg.append("g")
            .append("text")
              .attr("class", "maxPlayer2")
              .attr("x", xScale(11))
              .attr("y", amplify(oneThrees[19]))
              .style("text-anchor", "end")
              .text(player2Name);
          // y-axis label
          svg.append("g")
              .attr("class", "y axis")
              .call(yAxis)
            .append("text")
              .attr("class", "label")
              .attr("transform", "rotate(-90)")
              .attr("y", 6)
              .attr("dy", ".71em")
              .style("text-anchor", "end")
              .text("Threes Made");
          // draw dots
          svg.selectAll(".dot")
              .data(data)
            .enter().append("circle")
              .attr("class", "dot")
              .attr("r", 1)
              .attr("cx", xMap)
              .attr("cy", yMap)
              .style("fill", function(d) { return color(cValue(d));})
          // //legend data
          // var legend = svg.selectAll(".legend")
          //     .data(color.domain())
          //     .enter().append("g")
          //     .attr("class", "legend")
          //     .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });
          // // draw legend colored rectangles
          // legend.append("rect")
          //     .attr("x", width - 18)
          //     .attr("width", 18)
          //     .attr("height", 18)
          //     .style("fill", color);
          // // draw legend text
          // legend.append("text")
          //     .attr("x", width - 24)
          //     .attr("y", 9)
          //     .attr("dy", ".35em")
          //     .style("text-anchor", "end")
          //     .text(function(d) {return d;})
          setTimeout(function() {
            stylize();
          },3000)
    })
}
function compareMaxs(m1,m2) {
    if (m1 > m2) {
        return m1;
    } else {
        return m2;
    }
}
function player2Data(url) {
    $.getJSON(url,function(data) {
        console.log(data);
        var twoThrees = [];
        data.forEach(function (d) {
          twoThrees.push(parseInt(d.threes));
        });
        return twoThrees;
    })
}
//renames w to win and l to loss
function transformWinsLosses(thing) {
    if(thing === "W"){
        return "Win";
    } else if(thing === "L"){
        return "Loss";
    } else {
        return "Error";
    }
}

//highlights losses as red in the table
function stylize(){
    var allTableCells = document.querySelectorAll("td.worl");
    for(var i = 0, max = allTableCells.length; i < max; i++) {
        if (allTableCells[i].innerHTML === "Loss"){
            allTableCells[i].parentElement.style.color = "red";
        }
    }
}
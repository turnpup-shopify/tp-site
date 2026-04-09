function tpRandom() {
  hideAll();
  const elements = document.querySelectorAll('.line_container');
  if (elements.length > 0) {
    const randomIndex = Math.floor(Math.random() * elements.length);
    const randomElement = elements[randomIndex];
    randomElement.style.display = 'inline-block';
    randomElement.querySelector('.ideaText').style.background = 'blue';
  }
}

var arrayOfClassifications = [];

function loadCsvData(url) {
  $.ajax({
    url: url,
    success: function(data) {
      renderLines(data);
      setupClickHandlers();
      setupFilters();
    },
    error: function(err) {
      console.log(err.status);
    }
  });
}

function renderLines(csvData) {
  if (! csvData) return;
  

  var newData = csvData.replace(/,(?=(?:[^"]*"[^"]*")*[^"]*$)/g, ';');
  $('.ideaList').html('');
  arrayOfClassifications = [];
  var arrayOfLines = newData.split("\n");
  $.each(arrayOfLines, function(index, value) {
    if (index != 0) {
      var line_array = value.split(";");
      if (line_array[0] == "Overall") {
        console.log(line_array);
      } else {}
      let line_html = "<div class='line_container '>";
      var component_array = line_array[2].split("|");
      var image_array = line_array[3].split("|");

      var classification = line_array[4].replace(/"/g, "").split(",");
      line_html += '<div class="ideaText ';
      for (c in classification) {
        var tempClass = classification[c].replace("\r", "").trimStart();
        if (! arrayOfClassifications.includes(tempClass) && tempClass != "" && tempClass != null && tempClass != "\r") {
          arrayOfClassifications.push(tempClass);
        }
        line_html += tempClass + " ";
      }
      line_html += '">';

      if (line_array[2] == '\r' || line_array[2] == '') {
        line_html += '<a href="' + line_array[1] + '">' + line_array[0] + '</a></div></div>';
      } else {
        line_html += '<a href="' + line_array[1] + '">' + line_array[0] + ' </a>';
        for (let i = 0; i < component_array.length; i++) {
          if (i == 0) {
            line_html += '<span class="open" data-num=' + i + '>&nbsp;|&nbsp;' + component_array[i].replace(/["']/g, "") + '</span>';
          } else {
            line_html += '<span class="open" data-num=' + i + '>&nbsp;|&nbsp;' + component_array[i].replace(/["']/g, "") + '</span>';
          }
        }
        line_html += '</div>';
        for (let j = 0; j < image_array.length; j++) {
          if (j == 0) {
            image_html = "<div class='imgContain'>" + '<img class="hide" src="' + image_array[j].replace(/["']/g, "") + '"' + 'data-num=' + j + '>';
          } else {
            image_html += '<img class="hide" src="' + image_array[j].replace(/["']/g, "") + '"' + 'data-num=' + j + '>';
          }
        }
        line_html += image_html + '</div>';
      } line_html += '</div>';
      if (index % 2 == 1) {
        $('#one').append(line_html);
      } else {
        $('#one').append(line_html);
      }
    }
  });
}

function setupFilters() {
  for (var i = 0; i < arrayOfClassifications.length; i++) {
    var temp = arrayOfClassifications[i];
    if (temp != "" && temp != " " && temp != null && temp.length != 1) {
      var tempButton = '<button class="tempValue">' + temp + '</button>';
      document.querySelector(".topFilters").innerHTML += tempButton;
    }
  }
  document.querySelectorAll('.topFilters button').forEach((e) => {
    e.addEventListener('click', () => {
      change(e.innerHTML, "blue");
    })
  });
}

function setupClickHandlers() {
  $(".ideaList .open").off('click').on('click', function() {
    var temp = $(this).attr("data-num");
    var isHidden = $(this)
      .parent()
      .next()
      .find("[data-num='" + temp + "']")
      .hasClass("hide");
    $(this)
      .parent()
      .next()
      .find("img")
      .removeClass("show");
    $(this)
      .parent()
      .next()
      .find("img")
      .addClass("hide");
    if (isHidden) {
      $(this)
        .parent()
        .next()
        .find("[data-num='" + temp + "']")
        .addClass("show");
      $(this)
        .parent()
        .next()
        .find("[data-num='" + temp + "']")
        .removeClass("hide");
    } else {
      $(this)
        .parent()
        .next()
        .find("[data-num='" + temp + "']")
        .addClass("hide");
      $(this)
        .parent()
        .next()
        .find("[data-num='" + temp + "']")
        .removeClass("show");
    }
  });
}

function initializeSearchUI() {
  // Links open directly via their href
}

function change(tempClass, tempColor) {
  document.querySelectorAll('.ideaText').forEach((te) => {
    te.parentElement.style.display = "none";
    te.parentElement.style.marginBottom = "0px";
    te.style.background = "#222";
  })
  var tc = '.' + tempClass;
  document.querySelectorAll('.' + tempClass).forEach((ee) => {
    ee.parentElement.style.display = "inline-block";
    ee.parentElement.style.marginBottom = "6px";
    ee.style.background = tempColor;
  })
}
function showAll() {
  document.querySelectorAll('.line_container').forEach(function(e) {
    e.style.display = "inline-block";
    e.style.marginBottom = "6px";
    e.querySelector('.ideaText').style.background = '#222';
  })
}
function hideAll() {
  document.querySelectorAll('.line_container').forEach(function(e) {
    e.style.display = "none";
    e.style.marginBottom = "0px";
  })
}

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
  var allAnchors = document.querySelectorAll(".ideaText a");
  for (let i = 0; i < allAnchors.length; i++) {
    allAnchors[i].addEventListener("click", function(event) {
      event.preventDefault();

      const baseURL = "https://google.com/search?q=";

      let selectedPart = document.getElementById("dropdown").value;
      console.log(`selectedPart ${selectedPart}`);

      var theValues = {};
      theValues["part0"] = ` `;
      theValues["part1"] = ` "marketing"`;
      theValues["part2"] = ` "business"`;
      theValues["part3"] = ` ("strategy" OR "strategies" OR "tactics")`;
      theValues["part4"] = ` "how" "increased"`;
      theValues["part5"] = ` "case" OR "case-study"`;
      theValues["part6"] = ` "how" ("customers")`;
      theValues["part7"] = ` "how" ("increased" or "grew" or "improved")`;
      theValues["part8"] = ` ("clever" OR "creative" OR "strategy" OR "tactic" OR "surprising")`;
      theValues["part9"] = ` ("VP of" OR "Director" OR "Head" OR "founder" ) "how" -job -linkedin`;
      theValues["part10"] = ` "what" "learn from"`;
      theValues["part11"] = ` ("Launched" OR "Released" OR "Announced")`;
      theValues["part12"] = ` ("digital" OR "website")`;
      theValues["part13"] = ` ("gen z" OR "gen-z")`;

      var thisIsIt = theValues[selectedPart];

      const queryParams = thisIsIt;
      const company = event.target.innerText;

      if (company == "Overall") {
        const anchorTexts = Array.from(document.querySelectorAll('.ideaText')).filter(ideaText => getComputedStyle(ideaText).display === 'block').flatMap(ideaText => Array
          .from(ideaText.querySelectorAll('a'))
          .map(link => link.textContent.trim())
          .filter(text => text.length > 0)
          .filter(text => text != "Overall"));

        console.log(anchorTexts);

        var query = anchorTexts.map(text => `"${
          encodeURIComponent(text)
        }"`).join(" OR ");

        query += ") " + queryParams

        const new_today = new Date();
        new_today.setDate(new_today.getDate() - 5);
        const new_formattedDate = `${
          new_today.getFullYear()
        }-${
          new_today.getMonth() + 1
        }-${
          new_today.getDate()
        }`;

        console.log(new_formattedDate);

        newURL += `${new_formattedDate}`;

        var searchUrl = `https://www.google.com/search?q=(${query} after:`;
        searchUrl += `${new_formattedDate}`;

        window.location.href = searchUrl;

      } else if (document.getElementById("myCheckbox").checked == true) {

        var newURL = `${baseURL}"${company}"${queryParams}`;

        const today = new Date();
        today.setDate(today.getDate() - 5);

        const formattedDate = `${
          today.getFullYear()
        }-${
          String(today.getMonth() + 1).padStart(2, '0')
        }-${
          String(today.getDate()).padStart(2, '0')
        }`;
        newURL += ` after:${formattedDate}`;

        window.location.href = newURL;

      } else {

        var newURL = `${baseURL}"${company}"${queryParams}`;

        if (newURL.includes("after")) {
          const today = new Date();
          const formattedDate = `${
            today.getFullYear()
          }-${
            today.getMonth() + 1
          }-$ - 5}`;
          newURL += `${formattedDate}`;
        }

        window.location.href = newURL;

      }
    });
  }
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

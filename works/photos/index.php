<!DOCTYPE html>
<html lang="en">
<head>
  <title>Alex Turney Photography</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="">
  <meta name="author" content="">
  <link rel="stylesheet" type="text/css" href="../../css/bootstrap.css">
  <link rel="shortcut icon" href="../../imgBin/favicon1.ico">
  <link rel="stylesheet" type="text/css" href="../../css/new.css">
  <link href="https://fonts.googleapis.com/css?family=Josefin+Sans:300" rel="stylesheet">
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-58905914-1"></script>
        <!-- Google Tag Manager -->
        <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-T4FHGCC');</script>
        <!-- End Google Tag Manager -->
        <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-58905914-1');
        </script>
</head>
<body>
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T4FHGCC"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- Google Tag Manager (noscript) -->
<script src="../../js/jquery.js"></script>
<script src="../../js/bootstrap.js"></script>
<script src="../../js/sets.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<div>
  <div>
    <a href="../../#photography" style="font-size:14px;position:absolute;left:20px;top:40px;">back</a>
    <p class="desc" id="set" style="margin:25px auto 15px;font-size:24px;font-weight:400;line-height:40px;text-align:center;">
      <?php echo $_GET["set"]?>
    </p>
  </div>
  <div style="clear:both"></div>
  <div class="photoContainer" id="master">
  </div>
  <div id="default">
    <div class="bottomContainer" id="photography">
      <p class="h1" style="padding: 20px 0px;"> Photography </p>
      <div class="row">
          <div class="col-sm-4">
              <div class="set">
                  <img src="https://farm9.staticflickr.com/8369/8413025106_96d6ca0374_b.jpg" alt="IMG_1651" id="Third_Click">
                      <div class="overlay">
                          <a href="?set=nature">
                          <div class="text">Nature</div>
                          </a>
                      </div>
                  </a>
              </div>
          </div>
          <div class="col-sm-4">
              <div class="set">
                  <img src="https://farm7.staticflickr.com/6138/5988379494_a0c8a10bab_b.jpg">
                      <div class="overlay">
                          <a href="?set=surf">
                          <div class="text">Surf</div>
                          </a>
                      </div>
              </div>
          </div>
          <div class="col-sm-4">
              <div class="set">
                  <img src="https://c1.staticflickr.com/5/4251/34155026774_71f77be46d_k.jpg">
                      <div class="overlay">
                          <a href="?set=iceland">
                          <div class="text">Iceland</div>
                          </a>
                      </div>
              </div>
          </div>
      </div>
      <div class="row">
          <div class="col-sm-4">
              <div class="set">
                  <img src="https://farm4.staticflickr.com/3805/13914375343_c09fa77c85_b.jpg">
                      <div class="overlay">
                          <a href="?set=newyork">
                          <div class="text">New York</div>
                          </a>
                      </div>
              </div>
          </div>
          <div class="col-sm-4">
              <div class="set">
                 <img src="https://farm3.staticflickr.com/2916/14762872922_5a9192a18d.jpg">
                      <div class="overlay">
                           <a href="?set=concerts">
                          <div class="text">Concerts</div>
                          </a>
                      </div>
              </div>
          </div>
          <div class="col-sm-4">
              <div class="set">
                  <img src="https://farm4.staticflickr.com/3874/14839335864_6d24359d28.jpg">
                      <div class="overlay">
                          <a href="?set=people">
                          <div class="text">People</div>
                          </a>
                      </div>
              </div>
          </div>
      </div>
  </div>
</div>
<script>
var iceland_urls = [
  "https://c4.staticflickr.com/9/8761/28248340203_3af60f4043_k.jpg",
  "https://c2.staticflickr.com/9/8584/28787456121_f7c04712de_k.jpg",
  "https://c3.staticflickr.com/9/8749/28288419394_1ed82999f9_k.jpg",
  "https://c7.staticflickr.com/9/8742/28874732446_2203da99d8_k.jpg",
  "https://c3.staticflickr.com/9/8614/28874728546_41cf27a061_k.jpg",
  "https://c3.staticflickr.com/9/8874/28620837650_dcba6815cc_k.jpg",
  "https://c3.staticflickr.com/9/8264/28874730066_5910d66b61_k.jpg",
  "https://c1.staticflickr.com/9/8673/28874736976_0cd6ab5fc3_k.jpg",
  "https://c1.staticflickr.com/8/7521/28874742216_b1e5e1e601_k.jpg"
]
var nature_urls = [
  "https://farm9.staticflickr.com/8241/8662151166_1278632e88_b.jpg",
  "https://farm9.staticflickr.com/8255/8662152066_c14d76dfca_b.jpg",
  "https://farm9.staticflickr.com/8369/8413025106_96d6ca0374_b.jpg",
  "https://farm9.staticflickr.com/8088/8413025374_98bbc61c34_b.jpg",
  "https://farm9.staticflickr.com/8515/8411926237_7a1e9b3622_b.jpg",
  "https://farm7.staticflickr.com/6026/5979105926_554b03a5cb_b.jpg",
  "https://farm9.staticflickr.com/8189/8411924371_c3b3582ce8_b.jpg",
  "https://farm4.staticflickr.com/3775/13121419474_9b765a3295_b.jpg",
  "https://farm4.staticflickr.com/3764/13121200375_72141f693a_b.jpg",
  "https://farm4.staticflickr.com/3672/12850420575_cd141e0464_b.jpg",
  "https://farm9.staticflickr.com/8371/8368287769_7d3891f74e_b.jpg",
  "https://farm4.staticflickr.com/3780/12850671603_d470fde93e_b.jpg"
]
var surf_urls = [
  "https://farm4.staticflickr.com/3672/12850420575_cd141e0464_b.jpg",
  "https://farm9.staticflickr.com/8371/8368287769_7d3891f74e_b.jpg",
  "https://farm4.staticflickr.com/3780/12850671603_d470fde93e_b.jpg",
  "https://farm7.staticflickr.com/6138/5988379494_a0c8a10bab_b.jpg",
  "https://farm6.staticflickr.com/5546/12781397835_5643e59eb4_b.jpg",
  "https://farm8.staticflickr.com/7337/12781840454_b287c1e6ce_b.jpg",
  "https://farm8.staticflickr.com/7355/12781829034_c102935a1f_b.jpg",
  "https://farm6.staticflickr.com/5511/12781400325_3e1d6202f6_b.jpg",
  "https://farm4.staticflickr.com/3831/12781394625_39179af56d_b.jpg"
]
var newyork_urls = [
  "https://farm4.staticflickr.com/3746/13891203836_150d5e4b9e_b.jpg",
  "https://farm4.staticflickr.com/3732/13914732624_0882a86ccc_b.jpg",
  "https://farm8.staticflickr.com/7262/13914374863_521a340a43_b.jpg",
  "https://farm3.staticflickr.com/2812/13891207561_959aa5bd59_b.jpg",
  "https://farm8.staticflickr.com/7134/13496565414_55bbb6e01e_h.jpg",
  "https://farm4.staticflickr.com/3748/13914379223_ee8574dc97_b.jpg",
  "https://farm3.staticflickr.com/2915/13891201056_39048f0c45_b.jpg",
  "https://farm6.staticflickr.com/5263/13891202966_8c20db5c40_b.jpg",
  "https://farm8.staticflickr.com/7389/13914317485_d92d5d58d9_b.jpg"
]
var people_urls = [
  "https://live.staticflickr.com/65535/51753739758_2aa03cde89_h.jpg",
  "https://live.staticflickr.com/65535/51754350705_ea0c7ea017_h.jpg",
  "https://live.staticflickr.com/65535/51752548822_5ee568bb75_h.jpg",
  "https://live.staticflickr.com/5263/13891202966_e21c335d69_h.jpg",
  "https://live.staticflickr.com/65535/51754264040_8ba022222c_h.jpg",
  "https://live.staticflickr.com/65535/51754376200_dd0dd6b144_h.jpg",
  "https://live.staticflickr.com/2812/13891207561_74133131bf_k.jpg",
  "https://live.staticflickr.com/65535/51753980044_c47ebda155_w.jpg",
  "https://live.staticflickr.com/65535/51754137604_1fd7d2708e_h.jpg"
]
var concerts_urls = [
  "https://farm9.staticflickr.com/8308/7977378814_cc573d619a_b.jpg",
  "https://farm3.staticflickr.com/2916/14762872922_5a9192a18d.jpg",
  "https://farm4.staticflickr.com/3667/12953587644_58f9c989fd_b.jpg",
  "https://farm9.staticflickr.com/8125/8686969767_3b53d7514e_b.jpg",
  "https://farm9.staticflickr.com/8393/8686905075_af967afd4c_b.jpg",
  "https://farm9.staticflickr.com/8121/8686947737_77518c2f80_b.jpg",
  "https://farm3.staticflickr.com/2807/12953305223_3609d53e3c_b.jpg",
  "https://farm9.staticflickr.com/8117/8688025712_925a13d5a1_b.jpg",
  "https://farm9.staticflickr.com/8266/8688042138_6b20390a39_b.jpg"
]
var default_urls = [
  "https://farm9.staticflickr.com/8117/8688025712_925a13d5a1_b.jpg",
  "https://farm6.staticflickr.com/5555/14763106845_f886c6b3b9.jpg",
  "https://farm4.staticflickr.com/3746/13891203836_150d5e4b9e_b.jpg",
  "https://farm4.staticflickr.com/3780/12850671603_d470fde93e_b.jpg",
  "https://farm9.staticflickr.com/8088/8413025374_98bbc61c34_b.jpg",
  "https://c7.staticflickr.com/9/8742/28874732446_2203da99d8_k.jpg"
]

var set =  $.trim($('#set').html())
var photos = []
if (set == 'nature') {
  $('#default').hide();
  for (var i = 0; i < nature_urls.length; i++) {
    photos.push(nature_urls[i])
  }
} else if (set == 'surf') {
  $('#default').hide();
  for (var i = 0; i < surf_urls.length; i++) {
    photos.push(surf_urls[i])
  }
} else if (set == 'iceland') {
  $('#default').hide();
  for (var i = 0; i < iceland_urls.length; i++) {
    photos.push(iceland_urls[i])
  }
} else if (set == 'newyork') {
  $('#default').hide();
  for (var i = 0; i < newyork_urls.length; i++) {
    photos.push(newyork_urls[i])
  }
} else if (set == 'concerts') {
  $('#default').hide();
  for (var i = 0; i < concerts_urls.length; i++) {
    photos.push(concerts_urls[i])
  }
} else if (set == 'people') {
  $('#default').hide();
  for (var i = 0; i < people_urls.length; i++) {
    photos.push(people_urls[i])
  }
}

var rowIndex = 0;
var photosLength = photos.length;
var row;
console.log("length of photos array ==>  " + photos.length);

const master = document.getElementById("master");
for (var i = 0; i < photosLength; i++) {
  if ( rowIndex % 3 == 0 ) {
    console.log('row => '+i);
    row = createNode('div');
    row.setAttribute('class', 'row');
    append(master, row);
  } else {
    console.log("column => "+i)
  }
  var col = createNode('div');
  col.setAttribute('class', 'col-sm-4');
  append(row, col);
  var set = createNode('div');
  set.setAttribute('class', 'set');
  append(col, set);
  var img = createNode('img');
  append(set, img);
  var temp = photos.pop()
  img.setAttribute('src',temp);
  rowIndex = rowIndex + 1;
}

function createNode(element) { return document.createElement(element); }
function append(parent, el) { return parent.appendChild(el); }

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
  $(".set").on('click', function(event){
    $(".custom_active").removeClass('custom_active');
    $(this).addClass('custom_active');
  })
}

</script>
</body>
</html>

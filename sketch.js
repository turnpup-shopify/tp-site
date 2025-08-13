let x = 0;
let img;
let smallPoint, largePoint;

const capturer = new CCapture({
  framerate: 5,
  format: "webm",
  name: "movie",
  quality: 100,
  verbose: true,
});

let p5Canvas;

function preload() {
	img = loadImage('cat.jpg');
}

function setup() {
	background(255);  
	let p5canvas = createCanvas(720, 480);
	canvas = p5canvas.canvas;
	smallPoint = 30;  
	largePoint = 50;
	noStroke();
	const fr = 60; //framerate
	var capturer = new CCapture({ format: 'webm', framerate: fr });
	img.loadPixels();
	frameRate(60);
	// frameRate(fr);
	// loadImage('https://alexturney.com/menuAssets/cocktails.jpg', drawCat);
	// loadImage('https://images.unsplash.com/photo-1517527181905-db18299d4d52?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80', drawCat);
}

function draw() {
	let pointillize = map(mouseX, 0, width, smallPoint, largePoint);
	let x = floor(random(img.width));
	let y = floor(random(img.height));
	let pix = img.get(x, y);
	fill(pix, 128);
	ellipse(x, y, pointillize, pointillize);

	if (frameCount === 1) capturer.start();

	capturer.capture(canvas);
}

function mousePressed() {
	console.log("PRESSED!!!!!!!!!");
    capturer.stop();
    capturer.save();
}


function drawCat(img) {
  image(img, 0, 0, 720, 480);
}
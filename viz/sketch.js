let x = 0;
var canvasWidth;
var canvasHeight;
let img;
let smallPoint, largePoint;
var col, row, squareWidth, squareHeight;
let isEllipse = false;
let squares = [];
var inputSquareWidth = 10;
var inputSquareHeight = 10;

const capturer = new CCapture({
  framerate: 30,
  format: "webm",
  name: "movie",
  // quality: 100,
});

// var capturer = new CCapture({ format: 'webm', framerate: fr });

let p5Canvas;

function preload() {
	img = loadImage('ocean.jpg');
}

function setup() {
	canvasWidth = img.width;
	canvasHeight = img.height;
	let p5canvas = createCanvas(canvasWidth, canvasHeight);
	canvas = p5canvas.canvas;
	smallPoint = 15;  
	largePoint = 50;
	noStroke();
	// drawCat(img);
	const fr = 60; //framerate
	img.loadPixels();
	frameRate(60);
	background(255, 204, 0);
// frameRate(fr);
	// loadImage('https://alexturney.com/menuAssets/cocktails.jpg', drawCat);
	// loadImage('https://images.unsplash.com/photo-1517527181905-db18299d4d52?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80', drawCat);
	var temp = numSquares(canvasWidth,canvasHeight,inputSquareWidth,inputSquareHeight);
	col = temp[0];
	row = temp[1];
	squareWidth = temp[2];
	squareHeight = temp[3];
	if (!isEllipse){
		squares = doSquares();
		for (i = 0; i < col; i++) {
			for (j = 0; j < row; j++) {
				squares[i][j].draw();
			}
		}
	}
}

function draw() {
	if (isEllipse) {
		let pointillize = map(mouseX, 0, width, smallPoint, largePoint);
		let x = floor(random(img.width));
		let y = floor(random(img.height));
		let pix = img.get(x, y);
		fill(pix, 128);
		ellipse(x, y, pointillize, pointillize);
		if (frameCount === 1) capturer.start();
		capturer.capture(canvas);
	} else {
		if (frameCount === 1) capturer.start();
		capturer.capture(canvas);
		var randCol = floor(random(col));
		var randRow = floor(random(row));
		squares[randCol][randRow].update();
		squares[randCol][randRow].draw();
	}
}

function doSquares(){
	var tempSquares = [];
	for (i = 0; i < col; i++) {
		tempSquares[i] = [];
		for (j = 0; j < row; j++) {
			let x = i*squareWidth;
			let y = j*squareHeight;
			let pix = img.get(x + squareWidth/2, y + squareHeight/2);
			fill(pix, 128);
			tempSquares[i][j] = new Module(x,y,squareWidth,squareHeight, pix);
		}
	}
	return tempSquares;
}

// function keyPressed() {
// 	for (i = 0; i < col; i++) {
// 		for (j = 0; j < row; j++) {
// 			squares[i][j].update();
// 		}
// 	}
// }

function mousePressed() {
	console.log("PRESSED!!!!!!!!!");
    capturer.stop();
    capturer.save();
}

function numSquares(w,h,tempWidth,tempHeight) {
	let columns = floor(w/tempWidth);
	let rows = floor(h/tempHeight);
	let rectWidth = w / columns; 
	let rectHeight = h / rows;
	console.log("num col: "+columns +" num row: +"+ rows+" width: +" + rectWidth +" height: +" + rectHeight);
	return [columns, rows, rectWidth, rectHeight];
}


function drawCat(img) {
  image(img, 0, 0, canvasWidth, canvasHeight);
}

class Module {
	constructor(x, y, width, height, color) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.color = color;
	}

  // Custom method for updating the variables
	update() {
		//-5 and 5
		for (i = 0; i < 4; i++){
			var randomNumber = Math.floor(Math.random() * 200 - 100);
			this.color[i] = this.color[i] - randomNumber;
		}
		// var randomNumber = Math.floor(Math.random() * 11) - 5;
		// this.color = this.color + randomNumber;
	}

  // Custom method for drawing the object
	draw() {
		fill(this.color);
		rect(this.x,this.y,this.width,this.height);
	}
}
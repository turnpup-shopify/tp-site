let x = 0;
var canvasWidth;
var canvasHeight;
let img;
let smallPoint, largePoint;
var col, row, squareWidth, squareHeight;
let isEllipse = false;
let isNew = true;
let squares = [];
let rects = [];
let rectsArray = [];
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
	ogImg = loadImage('ocean.jpg');
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
	if (!isEllipse && !isNew){
		squares = doSquares();
		for (i = 0; i < col; i++) {
			for (j = 0; j < row; j++) {
				squares[i][j].draw();
			}
		}
	} else if (isNew) {
		drawCat(img);
		rectsArray[0] = drawSquareFromOldSquare(floor(random(img.width)),floor(random(img.width)),80,120,floor(random(img.width)),floor(random(img.width)),img);
		rectsArray[1] = drawSquareFromOldSquare(floor(random(img.width)),floor(random(img.width)),100,100,floor(random(img.width)),floor(random(img.width)),img);
		rectsArray[2] = drawSquareFromOldSquare(floor(random(img.width)),floor(random(img.width)),50,50,floor(random(img.width)),floor(random(img.width)),img);
		for (a = 0; a < rectsArray.length; a++) {
			for (b = 0; b < rectsArray[a].length; b++) {
				for (c = 0; c < rectsArray[a][b].length; c++) {
					rectsArray[a][b][c].draw();
				}
			}
		}
		// magnify(img,30, canvasHeight-100, 10, 10, 80, canvasHeight-100, 50, 50);
	}
}

function magnify(src, sx, sy, sw, sh, dx, dy, dw, dh){
	copy(src, sx, sy, sw, sh, dx, dy, dw, dh);
	stroke(255);
	// noFill();
	// Rectangle shows area being copied
	rect(sx, sy, sw, sh);
}

function draw() {
	rect(mouseX,mouseY,floor(random(40)),floor(random(40)))
	if (isEllipse) {
		let pointillize = map(mouseX, 0, width, smallPoint, largePoint);
		let x = floor(random(img.width));
		let y = floor(random(img.height));
		let pix = img.get(x, y);
		fill(pix, 128);
		ellipse(x, y, pointillize, pointillize);
		if (frameCount === 1) {
			capturer.start();
			capturer.capture(canvas);
		}
	} else if (isNew) {
		// let pix = img.get(mouseX, mouseY);
		// fill(pix);
		// rect(mouseX,mouseY,floor(random(40)),floor(random(40)));
		// if (frameCount % 60 == 0){
		// 	var pressed = drawSquareFromOldSquare(floor(random(img.width)),floor(random(img.width)),floor(random(5))*20,floor(random(5))*20,floor(random(img.width)),floor(random(img.width)),img);
		// 	for (b = 0; b < pressed.length; b++) {
		// 		for (c = 0; c < pressed[b].length; c++) {
		// 			pressed[b][c].updateColor();
		// 			pressed[b][c].draw();
		// 		}
		// 	}
		// }
		if (frameCount % 10 == 0){
			for (zz = 0; zz < rectsArray.length; zz++){
				for (b = 0; b < rectsArray[zz].length; b++) {
					for (c = 0; c < rectsArray[zz][b].length; c++) {
						noStroke();
						rectsArray[zz][b][c].updateColorAndDraw();
					}
				}
			}
			var tempC = img.get(mouseX,mouseY);
			fill(tempC);
			stroke(255, 255, 255);
			strokeWeight(1);	
		}
	} else {
		if (frameCount === 1) capturer.start();
		capturer.capture(canvas);
		squares[randCol][randRow].updateColor();
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

function keyPressed() {
	// noloop();
}

function mousePressed() {

}

function drawSquareFromOldSquare(x,y,w,h,xx,yy,img) {
	var tempRects = [];
	var xxx = 0;
	for (i = x; i < x+w; i++) {
		tempRects[xxx] = [];
		var yyy = 0;
		for (j = y; j < y+h; j++) {
			let newX = xx+i-x;
			let newY = yy+j-y;
			let pix = img.get(i, j);
			tempRects[xxx][yyy] = new Module(newX,newY,1,1,pix,i,j);
			yyy = yyy + 1
		}
		xxx = xxx + 1;
	}
	return tempRects;
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

function drawRect(inputRectArray) {
	for (i = 0; i < inputRectArray.length; i++) {
		for (j = 0; j < inputRectArray[i].length; j++) {
			inputRectArray[i][j].updateColor();
			inputRectArray[i][j].draw();
		}
	}
}

class Module {
	constructor(x, y, width, height, color, oldX, oldY) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.color = color;
		this.oldX = oldX;
		this.oldY = oldY;
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

	updateColorAndDraw() {
		var temp = 10;
		if ( this.oldX - temp <= 0 ){
			this.oldX = canvasWidth + this.oldX - temp;
		} 
		else if ( this.oldX > canvasWidth ){
			this.oldX = this.oldX - canvasWidth;
		} 
		else {
			this.oldX = this.oldX - temp;
		}
		if ( this.oldY - temp <= 0 ){
			this.oldY = canvasWidth + this.oldY - temp;
		} 
		else if ( this.oldY > canvasHeight ){
			this.oldY = this.oldY - canvasHeight;
		} 
		else {
			this.oldY = this.oldY - temp;
		}

		
		this.color = ogImg.get(this.oldX,this.oldY);

		for (i = 0; i < 4; i++){
			if (i == 3) {
				this.color[i] = this.color[i] + 10;
			}
		}

		fill(this.color);
		rect(this.x,this.y,this.width,this.height);
		// let tempPix = img.get(this.x, this.y);
		// this.color = tempPix;
	}

  // Custom method for drawing the object
	draw() {
		fill(this.color);
		rect(this.x,this.y,this.width,this.height);
	}

	debug(){
		console.log(this.x,this.y,this.width,this.height);
	}
}
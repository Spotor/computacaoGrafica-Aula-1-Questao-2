var x = 0;
var y = 0;
var i = 0;
var img;

function setup() {
	createCanvas(windowWidth, windowHeight); 
	img = loadImage('_imagens/aviao.png');
}

function draw() {
	fill(1, 253, 232)
	quad(x, y, x, y+height/3,x+width, y+height/3, x+width, y)
	fill(40, 44, 240)
	quad(x, y+height/3, x, y+height,x+width, y+height, x+width, y+height/3)
	fill(253, 186, 1)
	arc(width/2, height/3, 150, 150, PI, TWO_PI, CHORD)
	image(img, i, height/10);
	i = i +2;
}
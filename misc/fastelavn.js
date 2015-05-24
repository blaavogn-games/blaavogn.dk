var c = document.getElementById("fastelavnCanvas");
var ctx = c.getContext("2d");

var x = 1;
var y = 25;
var dx = 1, dy = 1;
var timer;
var colorDefault = 2, colorCounter = colorDefault;
var color = 0;
var colors = new Array();
colors[0] = "#FF0000";
colors[1] = "#00FF00";
var i = 0;
timer = setInterval(move,100);

ctx.font = "30px Arial";
move();


function move()
{
	i++;
	ctx.translate(100,50);
	ctx.rotate(Math.PI*i/10);
	ctx.translate(-100,-50);
	
	toggleColor();
    	ctx.fillRect(-50, -50, 250, 150);
	toggleColor();
	ctx.fillText("Fastelavn",x,y);
	colorCounter--;
	if(colorCounter == 0){
		toggleColor();
		colorCounter = colorDefault;
	}
	
	x += dx;
	y += dy;
	if(y == 100 || y == 22){
		dy *= -1;
	}
	if(x == 72 || x == 0){
		dx *= -1;
	}	
}

function toggleColor(){
	ctx.fillStyle = colors[color];
	color = (color + 1) % 2;
}

/* * * * * * * * * * * * * * * * * * *
 *
 *  combinationLock.js
 *  Federico von Brudersdorff
 *  scripts for combinationLock.html webpage
 *
 * * * * * * * * * * * * * * * * * * */
const WIDTH = 500;
const HEIGHT = 500;
const MAX_RADIUS = 200;
const TRIANGLE_HEIGHT = HEIGHT*0.025;
const TRIANGLE_BASE = 40;
const MARK_LENGTH = 10;
var canvas;
var context;

function drawLock(canvasId, steps) {
	canvas = document.getElementById(canvasId);
	context = canvas.getContext("2d");
	context.translate(WIDTH/2, HEIGHT/2);
	context.save();
	context.rotate(steps * 2*Math.PI /40);

	drawCircle(context, 0, 0, MAX_RADIUS, "lightSteelBlue", "grey");
	drawCircle(context, 0, 0, MAX_RADIUS*0.85, "", "grey"); 
	drawCircle(context, 0, 0, MAX_RADIUS*0.83, "black", "grey");
	drawCircle(context, 0, 0, MAX_RADIUS*0.25, "darkSlateGray", "");
	
	drawMarks(context, MAX_RADIUS*0.83, "white");
	
	drawWord(context, "Dogo", "white");

	context.restore();
	drawTriangle(context, "red", "darkRed");
}

function drawCircle(context, x, y, radius, fillColor, strokeColor) {
	context.fillStyle = fillColor;
	context.strokeStyle = strokeColor;
	context.beginPath();
	context.arc(x, y, radius, 0, 2*Math.PI);
	context.fill();
	context.stroke();
}

function drawTriangle(context, fillColor, strokeColor) {
	context.fillStyle = fillColor;
	context.strokeStyle = strokeColor;
	context.beginPath();
	context.moveTo(0, 0-MAX_RADIUS*0.83);
	context.lineTo(TRIANGLE_BASE/2, -(MAX_RADIUS*0.83+TRIANGLE_HEIGHT));
	context.lineTo(-TRIANGLE_BASE/2,-(MAX_RADIUS*0.83+TRIANGLE_HEIGHT));
	context.closePath();
	context.fill();
	context.stroke();
}

function drawWord(context, word, color) {
	context.font = "2em 'Times New Roman', serif";
	context.fillStyle = color;
	context.textAlign = "center";
	context.textBaseline = "middle";
	context.fillText(word, 0, 0);
}

function drawMarks(context, radius, color) {
	context.fillStyle = color;
	context.lineWidth = 4;
	context.font = "1.5em serif";
	context.textAlign = "center";
	context.textBaseline = "top";

	for (let i = 0; i < 40; i++) {
		context.beginPath();
		context.moveTo(0, - radius);
		if (i%5 == 0) {
			context.lineTo(0, -(radius-2*MARK_LENGTH));
			context.fillText(i, 0, -(radius-2.1*MARK_LENGTH));
		} else {
			context.lineTo(0, -(radius-MARK_LENGTH));
		}
		context.fill();
		context.stroke();
		context.rotate(2*Math.PI / 40);
	}
}

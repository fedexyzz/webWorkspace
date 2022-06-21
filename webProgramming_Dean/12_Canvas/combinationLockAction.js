/* * * * * * * * * * * * 
 *
 *  combinationLockAction.js
 *  Federico von Brudersdorff
 *  Action scripts for combinationLock.html
 *
 * * * * * * * * * * * */
var offset = 0;

function nudge(canvasId, steps) {
	var context = document.getElementById(canvasId).getContext("2d");
	context.setTransform(1, 0, 0, 1, 0, 0);
	context.clearRect(0, 0, canvas.width, canvas.height);
	drawLock(canvasId, offset + steps);
	offset += steps;
	while (offset >= 40) {offset -= 40};
	while (offset <= 40) {offset += 40};	
}

function nudgeLeft() {
	nudge('lock', -1);
}

function toTarget(factor, steps) {


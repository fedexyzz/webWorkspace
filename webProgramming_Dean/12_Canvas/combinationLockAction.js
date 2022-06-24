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
	offset -= steps;
	drawLock(canvasId, -offset); 
	while (offset >= 40) {offset -= 40};
	while (offset <= -40) {offset += 40};	
}

function nudgeLeft() {
	nudge('lock', -1);
}

function nudgeRight() {
	nudge('lock', 1);
}

function toTarget(canvasId, factor, target) {
	for (let i = 0; i < target; i++) {
		nudge(canvasId, factor);
	}
}

function toTargetLeft(target) {
	toTarget(-1, target);
}

function toTargetRight(target) {
	toTarget(1, target);
}

function toTarget(factor, target) {
	const POSITION = (offset<0 ? 40+offset : offset);
	var steps = (POSITION<target ? 40+(POSITION-target) : (POSITION-target));

	steps = (factor == 1 ? steps : 40-steps);   
	for (let i = 0; i < steps; i++) {
		window.setTimeout(nudge, 50*i, 'lock', factor);
	}
	return steps;
}
		

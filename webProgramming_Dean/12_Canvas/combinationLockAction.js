/* * * * * * * * * * * * 
 *
 *  combinationLockAction.js
 *  Federico von Brudersdorff
 *  Action scripts for combinationLock.html
 *
 * * * * * * * * * * * */
function nudge(canvasId, steps) {
	var context = document.getElementById(canvasId).getContext("2d");
	context.setTransform(1, 0, 0, 1, 0, 0);
	context.clearRect(0, 0, canvas.width, canvas.height);
	drawLock(canvasId, -1);
}

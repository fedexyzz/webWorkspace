// Swap values between two cells.

function swapValues(id1, id2) {
	var pivot; //variable to store temporarily
	pivot = document.getElementById(id1).innerHTML;
	document.getElementById(id1).innerHTML = document.getElementById(id2).innerHTML;
	document.getElementById(id2).innerHTML = pivot;
} //end swapValues

//**********
//
// Set values to blank
//
function restartValues(idArray) {
		idArray.forEach((item) => (document.getElementById(item).innerHTML = ""));
} //end restartValues

//**********
//
// Enables or disables inputs
//
function disableInput(form, idFormArray, bool) {
	idFormArray.forEach ((item) => (form.elements[item].disabled = bool)); 
} // end enableInput

//**********
//
// Updates values, resets and disables fields
//
function updateValues(form, idArray, idFormArray) {
	idArray.forEach((item,index) => (document.getElementById(item).innerHTML = form.elements[idFormArray[index]].value));
	disableInput(form, idFormArray.concat(new Array('update')), true);
} // endresetForm(form);	 
//
//**********
//
//Shuffle compass recursively
//
function shuffleCompass(arrayCompassId, arrayCardinalPoints) {
	if (arrayCardinalPoints.length > 0 && arrayCompassId.length > 0 ) {
		var randomIndex  = Math.floor(Math.random()*arrayCardinalPoints.length);
		document.getElementById(arrayCompassId[0]).innerHTML = arrayCardinalPoints[randomIndex];
		arrayCardinalPoints.splice(randomIndex, 1);
		arrayCompassId.splice(0,1);
		shuffleCompass(arrayCompassId, arrayCardinalPoints);
	}
} //end shuffleCompass
//
//**********
//
// Resets the form to placeholders
//
function resetForm(form, idArray) {
	idArray.forEach((item) => (form.elements[item].value = ""));
} // end resetForm	

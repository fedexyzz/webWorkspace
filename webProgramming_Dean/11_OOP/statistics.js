/* * * * * * * * * * * * * * * * * * * * * * * * * 
 *
 *  Functions for the statistics caluclator page
 *
 * * * * * * * * * * * * * * * * * * * * * * * * */

// Validates the input (only numbers separated by spaces)

function stringValidate (numberString) {
	var array = numberString.split(" ");
	var i = array.findIndex((element)=>(element ==""));

	while (i != -1) {
		array.splice(i,1);
		i = array.findIndex((element)=>(element ==""));
	}
	
	for (let i in array) {if (isNaN(array[i])) {return false;}
				else {array[i] = Number.parseFloat(array[i]);}
	}

	return array;
}

// Checks the input and calculates the mean

function calculate(numberListId, resultId, option) {
	const NUMBER_STRING = document.getElementById(numberListId).value;
	const ERROR_MESSAGE = `Please enter only numbers (a period for decimals) separated by spaces.`
	const RESULT_ELEMENT = document.getElementById(resultId);

	const ARRAY = stringValidate(NUMBER_STRING);

	if (ARRAY) { 
		RESULT_ELEMENT.style.display = "inline";
		RESULT_ELEMENT.style.color = "black";
		switch (option) {
			case 1:
				RESULT_ELEMENT.innerHTML = new NumberList(ARRAY).mean().toFixed(2);
				break;
			case 2:
				RESULT_ELEMENT.innerHTML = new NumberList(ARRAY).variance().toFixed(2);
				break;
			case 3:
				RESULT_ELEMENT.innerHTML = new NumberList(ARRAY).stdDeviation().toFixed(2);
				break;
			default:
				RESULT_ELEMENT.innerHTML = `Programming mistake. We're sorry`;
		}
	} else {
		RESULT_ELEMENT.style.display = "inline";
		RESULT_ELEMENT.style.color="red";
		RESULT_ELEMENT.innerHTML = ERROR_MESSAGE;
	}
}

// NumberList class

class NumberList {
	constructor(array) {
		this.list = array;
	}

	mean() {
		return (this.list.reduce((s,t) => s+t, 0)/this.list.length);
	}	

	variance() {
		return (this.list.reduce((s,t) => s+(t-this.mean())**2, 0)/this.list.length);
	}

	stdDeviation() {
		return Math.sqrt(this.variance());
	}
}

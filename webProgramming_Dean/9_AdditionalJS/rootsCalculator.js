// Processes the input.

function processRootsForm(idA, idB, idC, idResult) {
	const elementA = document.getElementById(idA);
	const elementB = document.getElementById(idB);
	const elementC = document.getElementById(idC);
	const resultElement = document.getElementById(idResult);

	const valueA = elementA.value;
	const valueB = elementB.value;
	const valueC = elementC.value;

	const templateSolution = "Solution: ";
	const templateImaginaryRoots = "x\'s roots are imaginary.";
	const templateSingleRoot = "x = ";
	const templateFirstRoot = "x<sub>1</sub> = ";
	const templateSecondRoot =  Array(10).fill('\xa0').join('')+"x<sub>2</sub> = ";

	const alertTemplateStart = "Invalid entry for ";
	const alertTemplateEndA = "a. Must be a non-zero integer between -99 and +99.\n";	
	const alertTemplateEndB = ". Must be an integer between -99 and +99.\n";

	const invalidBorder = "2px solid red";
	const defaultBorder = "";

	var alertString = "";
	var invalid;
	var roots;
	
	invalid = validate(valueA, valueB, valueC);
	if (invalid[0] == 1) {
		alertString += alertTemplateStart + alertTemplateEndA;
		elementA.style.border = invalidBorder;
	}
	if (invalid[1] == 1) {
		alertString += alertTemplateStart + "b" + alertTemplateEndB;
		elementB.style.border = invalidBorder;	

	}
	if (invalid[2] == 1) {
		alertString += alertTemplateStart + "c" + alertTemplateEndB;
		elementC.style.border = invalidBorder;	
	}
	if (alertString != "") {
		alert(alertString);
		resultElement.innerHTML = "";
	} else {
		elementA.style.border = elementB.style.border = elementC.style.border = defaultBorder;
		roots = calculateRoots(valueA, valueB, valueC);
		resultElement.innerHTML = templateSolution;
		if (roots.length == 0) {resultElement.innerHTML += templateImaginaryRoots;}
		else {
			if (roots.length == 1) {resultElement.innerHTML += templateSingleRoot + roots[0].toFixed(3);}
			else {resultElement.innerHTML += templateFirstRoot + roots[0].toFixed(3) 
							+ "<br>" 
							+ templateSecondRoot + roots[1].toFixed(3);
			}
	
		}
	}
}	



// Calculates the polynomial roots.

function calculateRoots(a, b, c) {
	var roots = new Array();		
	if (b**2 < 4*a*c) {
		return roots;
	}
	if (b**2 == 4*a*c) {
		roots.push(-b/(2*a));
	} else {
		roots.push((-b+Math.sqrt(b**2-4*a*c))/(2*a), (-b-Math.sqrt(b**2-4*a*c))/(2*a));
	}
	return roots;
}	

// Checks validity of parameters.

function validate(a, b, c) {
	const alertTemplateStart = "Invalid entry for ";
	const alertTemplateEndA = "a. Must be a non-zero integer between -99 and +99.\n";
	const alertTemplateEndB = ". Must be an integer between -99 and +99.\n";
	var invalid = new Array(0,0,0);

	if (a == 0 || a > 99 || a < -99) {
		invalid[0] = 1;
	}
	if (b > 99 || b < -99) {
		invalid[1] = 1;
	}
	if (c > 99 || c < -99) {
		invalid[2] = 1;
	}
	return invalid;
}


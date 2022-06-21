/* * * * * * * * * * * * * * * * *
 *
 * Script for storyGenerator.html
 *
 * * * * * * * * * * * * * * * * */
// Process form and write story from an array of words. Main function.

function processStory(idBoxes, idStoryElement) {
	var words = new Array();
	var storyElement = document.getElementById(idStoryElement);

	for (let id in idBoxes) {
		word = document.getElementById(idBoxes[id]).value;
		words.push(word);
	}

	storyElement.innerHTML = createStory(words);
	return 0;
}

// Auxiliary function to create the story.

function createStory(words) {
	var story;
	
	for (let word in words) {
		if (words[word] == "") {words[word] = `<span class='red'>&lt;missing text&gt;</span>`;}
	}

	story = `It was a dark and stormy night. A shot rang out! A ${words[0]} slammed. The maid ${words[1]}. Suddenly, a ${words[2]} ship appeared on the horizon! While millions of people ${words[3]}, the king lived in luxury. Meanwhile, on a ${words[4]} farm in Kansas, a boy was growing up.
	<br><br>
	The End`
	return story;
}

// Hides the first element and displays the second.

function switchDisplays(firstElementID, secondElementID) {
	var firstElement = document.getElementById(firstElementID);
	var secondElement = document.getElementById(secondElementID);

	firstElement.style.display = "none";
	secondElement.style.display = "block";

	return 0;
}

// Resets the first n elements to a blank.

function resetForm(aForm, n) {
	for (let i = 0; i<n; i++) {aForm.elements[i].value = "";}
	return 0;
}

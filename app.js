// const input = ["hello", "blah", "woohoo", "hello"];
const input = ["hello", "blah", "woohoo", "hello", "well", "huh", "oops", "woohoo", "hello", "blub", "oops", "hello", "woohoo"];

const cloud = document.getElementById("cloud");
const list = document.getElementById("list");

let word;
let repeatCount;
let fontSize;
let words = [];


for (let i = 0; i < input.length; i++) {

	// Find this word's frequency
	repeatCount = 0;
	input.forEach(function(word) {
		if (word === input[i]) {
			repeatCount++;
		}
	});

	// Put this word into the words array in a better format
	words.push([input[i], repeatCount]);
}


// Remove duplicates from 'words' array

words = words.map(JSON.stringify).reverse()
	.filter(function(el, i, words){ return words.indexOf(el, i + 1) === -1; })
	.reverse().map(JSON.parse)

console.log(words); // TESTING CODE


// Display this word on the page in the correct size

for (let i = 0; i < words.length; i++) {

	console.log("words.length is: " + words.length); // TESTING CODE

	word = words[i][0];
	fontSize = words[i][1].toString() + "em";
	console.log("fontSize for this word is: " + fontSize); // TESTING CODE
	let wordNode = document.createElement("li");
	wordNode.innerHTML = word + " " + fontSize;
	wordNode.style.fontSize = fontSize;
	list.appendChild(wordNode);
}

// ===============================================
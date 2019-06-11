const words = ["hello", "blah", "woohoo", "hello"];
const cloud = document.getElementById("cloud");
const list = document.getElementById("list");

let word;

// Find this word's frequency number (how many times it appears)
for (let i = 0; i < words.length; i++) {
	word = words[i];
	let wordNode = document.createElement("li");
	wordNode.innerHTML = word;
	list.appendChild(wordNode);
}
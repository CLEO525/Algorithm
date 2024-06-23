let input = require("fs").readFileSync("./예제.txt").toString();

if (input.length === 1) {
	return console.log(input.toUpperCase());
} else {
	let count = Array(26).fill(0);

	let str = input.toLocaleLowerCase();

	for (let i = 0; i < str.length; i++) {
		count[str.charCodeAt(i) - 97]++;
	}

	let temp = [];

	for (let i = 0; i < 26; i++) {
		if (count[i] > 1) {
			temp.push(i + 65);
		}
	}

	return console.log(temp.length === 1 ? String.fromCharCode(temp[0]) : "?");
}

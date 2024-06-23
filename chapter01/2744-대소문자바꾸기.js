const fs = require("fs");
const input = fs.readFileSync("./예제.txt").toString().trim().split("\n");
var strArr = input[0].split("");
var answer = [];

for (let i = 0; i < strArr.length; i++) {
	if (strArr[i].charCodeAt() > 96) {
		answer += strArr[i].toUpperCase();
	} else {
		answer += strArr[i].toLowerCase();
	}
}
console.log(answer);

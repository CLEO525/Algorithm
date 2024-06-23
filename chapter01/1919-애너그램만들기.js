const fs = require("fs");
const input = fs.readFileSync("./예제.txt").toString().trim().split("\n");

let str1 = input[0];
let str2 = input[1];

let count = [];
for (let i = 0; i < 26; i++) {
	count[i] = 0;
}
for (let i = 0; i < str1.length; i++) {
	count[str1.charCodeAt(i) - 97]++;
}

for (let i = 0; i < str2.length; i++) {
	count[str2.charCodeAt(i) - 97]--;
}

let res = count.reduce((acc, curr, idx) => {
	if (count[idx] != 0) {
		acc += Math.abs(count[idx]);
	}
	return acc;
}, 0);

console.log(res);

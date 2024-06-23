let input = require("fs").readFileSync("./예제.txt").toString().split("\n");
let n = Number(input[0]);
let numArr = input[1]
	.split(" ")
	.map((v) => Number(v))
	.sort((a, b) => a - b);
let x = Number(input[2]);

let cnt = 0;

for (let i = 0; i < n; i++) {
	for (let j = n - 1; j > i; j--) {
		if (numArr[i] + numArr[j] === x) {
			cnt++;
			break;
		}
	}
}
console.log(cnt);

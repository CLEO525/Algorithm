let input = require("fs").readFileSync("./예제.txt").toString().split("\n");
let N = Number(input[0].split(" ")[0]);
let M = Number(input[0].split(" ")[1]);

let row = 0;
let col = 0;

let arr = [];
input.shift();

for (let i = 0; i < input.length; i++) {
	arr[i] = input[i].split("");
}

let existRowCount = 0;
for (let i = 0; i < N; i++) {
	let exist = false;
	for (let j = 0; j < M; j++) {
		if (arr[i][j] === "X") {
			exist = true;
			break;
		}
	}
	if (exist) existRowCount++;
}

let existColCount = 0;
for (let i = 0; i < M; i++) {
	let exist = false;
	for (let j = 0; j < N; j++) {
		if (arr[j][i] === "X") {
			exist = true;
			break;
		}
	}

	if (exist) existColCount++;
}

row = N - existRowCount;
col = M - existColCount;

console.log(Math.max(row, col));

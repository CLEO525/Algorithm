let input = require("fs").readFileSync("./예제.txt").toString().split("\n");

let str = input[0];
let char = new RegExp(`${input[1]}`, "g");

const res = str.match(char);

console.log(res === null ? 0 : res.length);

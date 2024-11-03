const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const temp = input.replaceAll(/c=|c-|dz=|d-|lj|nj|s=|z=/g, "@");
console.log(temp.length);

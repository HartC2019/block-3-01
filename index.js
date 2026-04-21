let code1;
code1 = 7 + 3;
console.log(code1);

let code2 = 100 / 2 - 10;
console.log(code2);

let code3 = 20 % 11;
console.log(code3);
code3 = code3 + 30;
console.log(code3);

let message = "The vault has been secure. The combination is:";
console.log(message);

let codeA = code1 + "-" + code2 + "-" + code3;
console.log(codeA);

let codeB = `${code1}-${code2}-${code3}`;
console.log(codeB);

console.log(message, codeA, codeB);

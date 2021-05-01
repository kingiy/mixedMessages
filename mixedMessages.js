const filesystem = require('fs');
const readline = require('readline');

console.log("Message Generator Program");

const readInterface = readline.createInterface({
	input: filesystem.createReadStream('./messages.txt'),
	output: process.stdout,
	terminal: false
});

let linesArray = [];

readInterface.on('line', (line) => {
	linesArray.push(line);
}).on('close', () => {
	function lineNumber()
	{
		return Math.floor(Math.random() * linesArray.length);
	}
	console.log(linesArray[lineNumber()]);
});
'use strict';

const
	paintOptions = ["Sunburst Red", "Desert Gold", "Midnight Blue"],
	wheelOptions = ["Serene Steel", "Majestic Mags", "Trim Titanium"],
	soundOptions = ["AM/FM/CD Stereo", "SurroundSat"],
	allOptions = [
		paintOptions,
		wheelOptions,
		soundOptions
	];

function processValues(values) {
	console.log(values.join('\t'));
}

//
//	Encapsulate each "layer" in a separate function
//

function processOptionArrays(allOptions) {
	processOptionArrays0(allOptions, new Array(allOptions.length), 0);
}

function processOptionArrays0(allOptions, row, index) {
	allOptions[index].forEach(firstValue => {
		row[index] = firstValue;
		processOptionArrays1(allOptions, row, index + 1);
	});
}

function processOptionArrays1(allOptions, row, index) {
	allOptions[index].forEach(firstValue => {
		row[index] = firstValue;
		processOptionArrays2(allOptions, row, index + 1);
	});
}

function processOptionArrays2(allOptions, row, index) {
	allOptions[index].forEach(firstValue => {
		row[index] = firstValue;
		processOptionArrays3(allOptions, row, index + 1);
	});
}

function processOptionArrays3(allOptions, row, index) {
	processValues(row);
}

processOptionArrays(allOptions);
//
// un-comment next line to see the problem
// processOptionArrays([paintOptions, soundOptions]);

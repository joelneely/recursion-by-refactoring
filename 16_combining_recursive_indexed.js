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
//	Set up and call a helper function
//

function processOptionArrays(allOptions) {
	processOptionArraysHelper(allOptions, new Array(allOptions.length), 0);
}

//
//	Collapse all duplication
//

function processOptionArraysHelper(allOptions, row, index) {
	if (index < row.length) {
		allOptions[index].forEach(value => {
			row[index] = value;
			processOptionArraysHelper(allOptions, row, index + 1);
		});
	} else {
		processValues(row);
	}
}

processOptionArrays(allOptions);
//
// un-comment next line to see the problem
// processOptionArrays([paintOptions, soundOptions]);

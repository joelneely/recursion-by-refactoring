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

//
//	Change argument to an array
//

function processValues(values) {
	console.log(values.join('\t'));
}

//
//	Eliminate the dependence on multiple names from the context
//

function processOptionArrays(allOptions) {
	let row = new Array(allOptions.length);
	allOptions[0].forEach(firstValue => {
		row[0] = firstValue;
		allOptions[1].forEach(secondValue => {
			row[1] = secondValue;
			allOptions[2].forEach(thirdValue => {
				row[2] = thirdValue;
				processValues(row);
			});
		});
	});
}

processOptionArrays(allOptions);
//
// un-comment next line to see the problem
// processOptionArrays([paintOptions, soundOptions]);

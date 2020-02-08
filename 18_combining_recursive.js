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

function processOptionArrays(allOptions, row = []) {
	if (allOptions.length > 0) {
		let [first, ...rest] = allOptions;
		first.forEach(value => {
			processOptionArrays(rest, row.concat(value));
		});
	} else {
		processValues(row);
	}
}

processOptionArrays(allOptions);
//
// un-comment next line to see the problem
// processOptionArrays([paintOptions, soundOptions]);

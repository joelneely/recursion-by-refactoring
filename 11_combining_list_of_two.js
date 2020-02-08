'use strict';

const
	paintOptions = ["Sunburst Red", "Desert Gold", "Midnight Blue"],
	wheelOptions = ["Serene Steel", "Majestic Mags", "Trim Titanium"],
	soundOptions = ["AM/FM/CD Stereo", "SurroundSat"];

//
// Take any number of values.
//

function processValues(...values) {
	console.log(values.join('\t'));
}

//
//	All combinations of two options provided
//

function processOptionPairs(firstOption, secondOption) {
	firstOption.forEach(firstValue => {
		secondOption.forEach(secondValue => {
			processValues(firstValue, secondValue);
		});
	});
}

processOptionPairs(paintOptions, soundOptions);

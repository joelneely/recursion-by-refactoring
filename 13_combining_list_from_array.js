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

function processValues(...values) {
	console.log(values.join('\t'));
}

//
//	All combinations of three options provided in array of arrays
//

function processOptionArrays(allOptions) {
	allOptions[0].forEach(firstValue => {
		allOptions[1].forEach(secondValue => {
			allOptions[2].forEach(thirdValue => {
				processValues(firstValue, secondValue, thirdValue);
			});
		});
	});
}

processOptionArrays(allOptions);

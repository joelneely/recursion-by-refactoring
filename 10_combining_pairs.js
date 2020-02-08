'use strict';

const
	paintOptions = ["Sunburst Red", "Desert Gold", "Midnight Blue"],
	wheelOptions = ["Serene Steel", "Majestic Mags", "Trim Titanium"],
	soundOptions = ["AM/FM/CD Stereo", "SurroundSat"];

//
// Take a pair of values instead of a caption and value.
//

function processPair(firstValue, secondValue) {
	console.log(`${firstValue}\t${secondValue}`);
}

function processOptionPairs(firstOption, secondOption) {
	firstOption.forEach(firstValue => {
		secondOption.forEach(secondValue => {
			processPair(firstValue, secondValue);
		});
	});
}

processOptionPairs(paintOptions, soundOptions);

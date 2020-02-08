'use strict';

const
	paintOptions = ["Sunburst Red", "Desert Gold", "Midnight Blue"],
	wheelOptions = ["Serene Steel", "Majestic Mags", "Trim Titanium"],
	soundOptions = ["AM/FM/CD Stereo", "SurroundSat"];

function processValues(...values) {
	console.log(values.join('\t'));
}

//
//	All combinations of three options provided
//

function processOptionTriples(firstOption, secondOption, thirdOption) {
	firstOption.forEach(firstValue => {
		secondOption.forEach(secondValue => {
			thirdOption.forEach(thirdValue => {
				processValues(firstValue, secondValue, thirdValue);
			});
		});
	});
}

processOptionTriples(paintOptions, wheelOptions, soundOptions);

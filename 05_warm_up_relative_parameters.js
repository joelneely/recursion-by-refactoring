'use strict';

const
	paintOptions = ["Sunburst Red", "Desert Gold", "Midnight Blue"],
	wheelOptions = ["Serene Steel", "Majestic Mags", "Trim Titanium"],
	soundOptions = ["AM/FM/CD Stereo", "SurroundSat"];

function processValue(caption, optionValue) {
	console.log(`${caption}:\t${optionValue}`);
}

//
// All the interesting stuff happens below
//

function processOptionList(caption, options) {
	processOptionListAt0(caption, options, 0);
}

function processOptionListAt0(caption, options, index) {
	if (options.length > index) {
		processValue(caption, options[index]);
		processOptionListAt1(caption, options, index + 1);
	}
}

function processOptionListAt1(caption, options, index) {
	if (options.length > index) {
		processValue(caption, options[index]);
		processOptionListAt2(caption, options, index + 1);
	}
}

function processOptionListAt2(caption, options, index) {
	if (options.length > index) {
		processValue(caption, options[index]);
		// ...
	}
}

processOptionList('Paint', paintOptions);
processOptionList('Sound', soundOptions);

//
// Un-comment the following line for a different list.
// processOptionList('Engines', ['Dual Carb', 'Quad Carb', 'Diesel', 'Hybrid']);

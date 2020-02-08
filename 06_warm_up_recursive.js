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
	processOptionListAt(caption, options, 0);
}

function processOptionListAt(caption, options, index) {
	if (options.length > index) {
		processValue(caption, options[index]);
		processOptionListAt(caption, options, index + 1);
	}
}

processOptionList('Paint', paintOptions);
processOptionList('Sound', soundOptions);

//
// Un-comment the following line for a different list.
// processOptionList('Engines', ['Dual Carb', 'Quad Carb', 'Diesel', 'Hybrid']);

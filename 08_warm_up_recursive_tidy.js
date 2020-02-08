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
	if (options.length > 0) {
		let [first, ...rest] = options;
		processValue(caption, first);
		processOptionList(caption, rest);
	}
}

processOptionList('Paint', paintOptions);
processOptionList('Sound', soundOptions);

//
// Un-comment the following line for a different list.
// processOptionList('Engines', ['Dual Carb', 'Quad Carb', 'Diesel', 'Hybrid']);

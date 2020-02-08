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
	processOptionList0(caption, options);
}

function processOptionList0(caption, options) {
	if (options.length > 0) {
		processValue(caption, options[0]);
		processOptionList1(caption, options);
	}
}

function processOptionList1(caption, options) {
	if (options.length > 1) {
		processValue(caption, options[1]);
		processOptionList2(caption, options);
	}
}

function processOptionList2(caption, options) {
	if (options.length > 2) {
		processValue(caption, options[2]);
		// ...
	}
}

processOptionList('Paint', paintOptions);
processOptionList('Sound', soundOptions);

//
// Un-comment the following line for a different list.
// processOptionList('Engines', ['Dual Carb', 'Quad Carb', 'Diesel', 'Hybrid']);

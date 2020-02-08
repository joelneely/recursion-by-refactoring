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
	processOptionList0(caption, options, 0);
}

function processOptionList0(caption, options, index) {
	if (options.length > index) {
		processValue(caption, options[index]);
		processOptionList1(caption, options, 1);
	}
}

function processOptionList1(caption, options, index) {
	if (options.length > index) {
		processValue(caption, options[index]);
		processOptionList2(caption, options, 2);
	}
}

function processOptionList2(caption, options, index) {
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

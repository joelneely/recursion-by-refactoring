'use strict';

//
//	The data for the various options (as of now).
//

const
	paintOptions = ["Sunburst Red", "Desert Gold", "Midnight Blue"],
	wheelOptions = ["Serene Steel", "Majestic Mags", "Trim Titanium"],
	soundOptions = ["AM/FM/CD Stereo", "SurroundSat"];

//
//	Simple stand-in for arbitrarily complicated consumption
//	of the values.
//

function processValue(caption, optionValue) {
	console.log(`${caption}:\t${optionValue}`);
}

//
// All the interesting stuff happens below
//

function processOptionList(caption, options) {
	processValue(caption, options[0]);
	processValue(caption, options[1]);
	processValue(caption, options[2]);
}

processOptionList('Paint', paintOptions);

//
// Un-comment the following line for a different list.
// processOptionList('Sound', soundOptions);

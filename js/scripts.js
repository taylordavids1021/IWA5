const feeWarning = "Free shipping only applies to single customer orders";  // add const before naming convention
const bannedWarning = "Unfortunately we do not ship to your country of residence";
const noneSelected = 0;     // Change to numnber instead of string

const shipping = null
const currency = "$"

const customers = 1;
//const location = "RSA"

//if (location = "RSA") { shipping === 400 && currency === "R" }  	// put data in a string

// if (location = "NAM") {		// add curly bracket if else statement
//     shipping = 600
//     } else {shipping = 800
// }

const shoes = 300 * 1
const toys = 100 * 5
const shirts = 150 * noneSelected   // change string to const noneSelected
const batteries = 35 * 2
const pens = 5 * noneSelected

if (shoes + batteries + pens + shirts >= 1000 ) {
	if (location === "NAM" && customers <= 2) {
			if (location === "RSA")
		    shipping = 0 || shipping
		}
	}
	
if (shipping === 0 || customers === 1) { console.log(feeWarning) }

//if ( location = "NK") {console.log(feeWarning)} //: console.log("price", currency, shoes + batteries + pens + shirts + shipping)
 location === "RSA" ? console.log(bannedWarning): console.log("price", currency, shoes + batteries + pens + shirts + shipping)
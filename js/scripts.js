const feeWarning = "Free shipping only applies to single customer orders";  // Add const before naming convention

const bannedWarning = "Unfortunately we do not ship to your country of residence";
const noneSelected = 0;     		// Change to numnber instead of string

let shipping = null					// Add shipping price
let currency = null					// Add currency in string

const customers = 1;
let locations = "RSA" ;

let shoes = 300 * 1
let toys = 100 * 5					// Add = instead of -
let shirts = 150 * noneSelected   	// Change string to const noneSelected
let batteries = 35 * 2
let pens = 5 * noneSelected

if (locations === "RSA") { 
	shipping = 400 
	currency = "R"   				// Put data in a string
	if ( shoes + batteries + toys + pens + shirts >= 1000 && customers === 1) {
		shipping = 0;
	}}
	else if (locations === "NAM") { 
		shipping = 600
		currency = "$" 
	if ( shoes + batteries + toys + pens + shirts >= 60 && customers === 1) {
		shipping = 0;
	}} 
	else { 
		shipping = 800
		currency = "$" 
	}
	
if (shipping === 0 && customers !== 1) { console.log(feeWarning) }

// Console.log message 

locations = "NK" ? console.log(bannedWarning) : console.log("Price :", currency, shoes + batteries + pens + shirts + toys + shipping)

// if (locations = "NAM" ) {console.log("Price :", currency, shoes + batteries + pens + shirts + toys + shipping)}

if (locations = "RSA" ) {console.log("Price :", currency, shoes + batteries + pens + shirts + toys + shipping)}
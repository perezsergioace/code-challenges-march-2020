// Create a function that takes 2 positive integers in form of a string as an input,
// and outputs the sum (also as a string):

// sumStr("4", "5")    // should output "9"
// sumStr("34", "5")   // should output "39"

function sumStr(a, b) {
	if (a === '' && b === '') {
		return '0'
	}
	if (a === '') {
		return b
	}
	if (b === '') {
		return a
	}
	return String(parseInt(a) + parseInt(b))
}

console.log(sumStr('4', '5'))
console.log(sumStr('34', '5'))
console.log(sumStr('', '2'))
console.log(sumStr('4', ''))
console.log(sumStr('', ''))

// Completed

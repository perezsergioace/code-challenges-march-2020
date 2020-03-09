// Write function bmi that calculates body mass index (bmi = weight / height ^ 2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

function bmi(weight, height) {
	if (weight / (height * height) <= 18.5) {
		return 'Underweight'
	}
	if (weight / (height * height) <= 25) {
		return 'Normal'
	}
	if (weight / (height * height) <= 30) {
		return 'Overweight'
	}
	if (weight / (height * height) > 30) {
		return 'Obese'
	}
}

console.log(bmi(80, 1.8))

// Completed

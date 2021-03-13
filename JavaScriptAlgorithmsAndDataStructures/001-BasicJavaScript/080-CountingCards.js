var count = 0

function cc(card) {
	// Only change code below this line
	if (card <= 6) {
		count++
	} else if (card <= 9) {
	} else {
		count--
	}

	if (count > 0) {
		return count + " Bet"
	}
	return count + " Hold"
	// Only change code above this line
}

cc(2)
cc(3)
cc(7)
cc("K")
cc("A")

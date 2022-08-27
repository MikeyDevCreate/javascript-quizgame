function startgame() {
	alert("Hello and welcome to this game!\nThis will be a little quiz game!")
	let name = prompt("What is your name?")
	alert("Nice to meet you " + name + "!")
	let yes_no = confirm("Would you like to play a quiz game?")
	let Correct = 0
	let Incorrect = 0

	if (yes_no == true) {
		alert("Ok Then! Lets start!")
		let q1 = prompt("In which year was Javascript developed?")
		if (q1 == "1995") {
			alert("Nice! Thats Correct!")
			Correct += 1
		} else {
			alert("Nope! Thats Incorrect!")
			Incorrect += 1
		}
		alert("Ok! Next Question!")
		let q2 = prompt("Who was the person that designed Javascript?")
		let result = q2.toLowerCase();
		if (result == "brendan eich") {
			alert("Great! Thats Correct!")
			Correct += 1
		} else {
			alert("Never! Thats Incorrect!")
			Incorrect += 1
		}
		alert("Ok! Next Question!")
		let q3 = prompt("How many days did it take to develop Javascript?")
		if (q3 == "10") {
			alert("Cool! Thats Correct!")
			Correct += 1
		} else {
			alert("Nah! Thats Incorrect!")
			Incorrect += 1
		}
		alert("Ok! Next Question!")
		let q4 = confirm("Is Java the most popular programming language?")
		if (q4 == false) {
			alert("Amazing! Thats Correct!")
			Correct += 1
		} else {
			alert("Nope! Thats Incorrect!")
			Incorrect += 1
		}
		alert("Ok! Last question and then you will see your\ncorrect and incorrect answers.")
		let q5 = prompt("Under what name was Javascript originally developed?")
		let cool = q5.toLowerCase();
		if (cool == "mocha") {
			alert("Shocking! Thats Correct!")
			Correct += 1
		} else {
			alert("Not at all! Thats Incorrect!")
			Incorrect += 1
		}
		alert("Ok! You did a pretty good job!")
		alert("You got " + Correct + " questions correct and " + Incorrect + " Incorrect!")
		alert("And that's it! I hope you had a good time.\nBye!")
	}

	if (yes_no == false) {
		alert("Ok Then. If you don't want to play then, bye!\n Quiz game shutting down...")
	}
}

function itch() {
	window.location.href = "https://mikeydevstuff.itch.io/";
}
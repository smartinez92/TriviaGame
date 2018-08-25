$(document).ready(function() {

	// Array of Questions //
	var questions = [{
	   question: "What is Jupiter's largest moon?",
	   choices: ['ganymede', 'callisto', 'io', 'europa'],
	   correctAnswer: 'ganymede'
	  }, {
	   question: "What is the closest planet to the Sun?",
	   choices: ['earth', 'neptune', 'venus', 'mercury'],
	   correctAnswer: 'mercury'
	  }, {
	   question: "Who discovered the 7th planet, Uranus?",
	   choices: ['tycho brahe', 'galileo galilei', 'william herschel', 'ptolemy' ],
	   correctAnswer: 'william herschel'
	  }, {
	   question: "Deimos & Phobos, Mars' two moons, were named after the Greek gods of...",
	   choices: ['terror & fear', 'terror & fertility', 'the underworld & the sea', 'love & beauty'],
	   correctAnswer: 'terror & fear'
	  }, {
	   question: "What substance gives Mars its reddish color?",
	   choices: ['nitrous oxide', 'helium', 'iron oxide', 'carbon dioxide'],
	   correctAnswer: 'iron oxide'
	}];

	// Timer //
	function countdown() {
		var seconds = 30;
		var timeGrab = document.getElementsByClassName('timer');
		var interval = setInterval(countdown, 1000);

		if (seconds == 0) {
			clearTimeout(interval);
			alert('you are out of time!');
		} else {
			timeGrab.innerHTML = seconds + ' seconds left, human!';
			seconds--;
		}
	}
});
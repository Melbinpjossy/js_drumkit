(() => {
	console.log("fired! ready to jam");

	function playDrumKitSound(event) {
		// debugger;
		// select the corresponding audio element and make it 
		let audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
		console.log(audio);
		// console.log(audio);
		// 
		//  debugging / error handling
		//  if we dont have a match audio element, then kill the function
		if(!audio) { return; }

		audio.play();
		audio.currentTime = 0;


	}

	window.addEventListener("keydown", playDrumKitSound);

})();

var audio1m = document.getElementById("AUDIO-1MIN");
	var audio3m = document.getElementById("AUDIO-3MIN");
	var audiostart = document.getElementById("AUDIO-STARTBOMB");
	var audioflashbang = document.getElementById("AUDIO-FLASHBANG");


	function startTimer(duration, display) {
		var start = Date.now(),
			diff,
			minutes,
			seconds;
		function timer() {
			diff = duration - ( (( Date.now() - start) / 1000) | 0);
			minutes = (diff / 60) | 0;
			seconds = (diff % 60) | 0;
			minutes = minutes < 10 ? "0" + minutes : minutes;
			seconds = seconds < 10 ? "0" + seconds : seconds;

			display.textContent = minutes + ":" + seconds;
			if (minutes == 05 && seconds == 59) {
				audiostart.play();
			}
			if (minutes == 03 && seconds == 00) {
				audio3m.play();
			}
			if (minutes == 01 && seconds == 00) {
				audio1m.play();
			}
			if (minutes == 00 && seconds == 00) {
				audioflashbang.play();
                console.log("FLASHBANG!")
				document.getElementById("CREOQUETODO").innerHTML = ""
				document.getElementById("body").classList.remove('body');

				document.getElementById("gameover").classList.remove('gameover2');
				document.getElementById("gameover").classList.add('gameover');
				document.getElementById("gameover").innerHTML = "GAME OVER"

			}

		};
		timer();
		setInterval(timer, 1000);
	}
    var mG;

	window.onload = function () {
		var sixMinutes = 60 * 6,
			display = document.querySelector('#time');
		startTimer(sixMinutes, display);
        mG = new clsGame();
	};
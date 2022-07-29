// start button:

let sSeconds = document.getElementById("s-seconds");
let sSecondsValue = sSeconds.textContent;

let sMins = document.getElementById("s-mins");
let sMinsValue = sMins.textContent;
let sHours = document.getElementById("s-hours");
let sHoursValue = sHours.textContent;

let startButton = document.getElementById("start");
let sInterval;

startButton.addEventListener("click", function () {
	sInterval = setInterval(startTimer, 1000);
});

function startTimer() {
	sSecondsValue++;
	if (sSecondsValue >= 59) {
		sSecondsValue = 0;
		sMinsValue++;
	}
}

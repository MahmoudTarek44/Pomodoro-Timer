var sSeconds = document.getElementById("s-seconds");
var sSecondsValue = sSeconds.textContent;
var sMins = document.getElementById("s-mins");
var sMinsValue = sMins.textContent;
var sHours = document.getElementById("s-hours");
var sHoursValue = sHours.textContent;

var bSeconds = document.getElementById("b-seconds");
var bSecondsValue = bSeconds.innerText;
var bMins = document.getElementById("b-mins");
var bMinsValue = bMins.innerText;
var bHours = document.getElementById("b-hours");
var bHoursValue = bHours.innerText;

var startButton = document.getElementById("start");
var breakButton = document.getElementById("break");
var resumeButton = document.getElementById("resume");
var endButton = document.getElementById("end");

var sInterval;
var bInterval;

var repeat1 = true;
var repeat2 = true;
var repeat3 = false;

startButton.addEventListener("click", function () {
	if (repeat1) {
		sInterval = setInterval(startTimer, 1000);
	}
	repeat1 = false;
	repeat2 = true;
	repeat3 = false;
	startButton.disabled = true;
});
resumeButton.addEventListener("click", function () {
	clearInterval(bInterval);
	if (repeat3) {
		sInterval = setInterval(startTimer, 1000);
	}
	repeat1 = false;
	repeat3 = false;
	repeat2 = true;
});
breakButton.addEventListener("click", function () {
	clearInterval(sInterval);
	if (repeat2) {
		bInterval = setInterval(breakTimer, 1000);
	}
	repeat1 = false;
	repeat2 = false;
	repeat3 = true;
});

function startTimer() {
	sSecondsValue++;
	if (sSecondsValue >= 59) {
		sSecondsValue = 0;
		sMinsValue++;
		if (sMinsValue >= 60) {
			sMinsValue = 0;
			sHoursValue++;
		}
	}
	sSeconds.innerText = modifyOutput(sSecondsValue);
	sMins.innerText = modifyOutput(sMinsValue);
	sHours.innerText = modifyOutput(sHoursValue);
}
function breakTimer() {
	bSecondsValue++;
	if (bSecondsValue >= 59) {
		bSecondsValue = 0;
		bMinsValue++;
		if (bMinsValue >= 60) {
			bMinsValue = 0;
			bHoursValue++;
		}
	}
	bSeconds.innerText = modifyOutput(bSecondsValue);
	bMins.innerText = modifyOutput(bMinsValue);
	bHours.innerText = modifyOutput(bHoursValue);
}
endButton.addEventListener("click", function () {
	clearInterval(sInterval);
	clearInterval(bInterval);
	startButton.disabled = false;
	alert(
		`The work time is :${sHoursValue} Hours and ${sMinsValue} Minutes and ${sSecondsValue} Seconds.\nThe break time is :${bHoursValue} Hours and ${bMinsValue} Minutes and ${bSecondsValue} Seconds.`
	);
	sSeconds.innerText = "0" + 0;
	sSecondsValue = 0;
	bSeconds.innerText = "0" + 0;
	bSecondsValue = 0;
	sMins.innerText = "0" + 0;
	sMinsValue = 0;
	bMins.innerText = "0" + 0;
	bMinsValue = 0;
	sHours.innerText = "0" + 0;
	sHoursValue = 0;
	bHours.innerText = "0" + 0;
	bHoursValue = 0;
	repeat1 = true;
	repeat2 = false;
	repeat3 = false;
});
function modifyOutput(x) {
	if (x < 10) {
		return "0" + x;
	} else {
		return x;
	}
}

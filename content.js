window.setTimeout(function(){football()}, 5000);


function football() {

	if (document.getElementsByClassName('entryBlock').length != 0) {
		if(document.getElementsByClassName('entryBlock')[0].className == "entryBlock ")  {
			document.getElementsByClassName('entryBlock')[0].click();
		}
	}

	if(document.getElementsByClassName('leftPane').length == 0) {
		window.setTimeout(function(){football()}, 3000);
		return;
	}
	if(document.getElementsByClassName('entryBlock invis fadeIn')[0] != null) {
document.getElementsByClassName('entryBlock invis fadeIn')[0].click();
} else if(document.getElementsByClassName('mouseImage gold')[0] != null) {
document.getElementsByClassName('mouseImage gold')[0].childNodes[4].click();
 } else if(document.getElementsByClassName('leftPane')[0].childNodes[1].className == "rewardBlock rival")  {
document.getElementsByClassName('leftPane')[0].childNodes[1].click();
 } else if (document.getElementsByClassName('leftPane')[0].childNodes[0].innerHTML=="Ghost Mouse") {
document.getElementsByClassName('leftPane')[0].childNodes[1].click();
} else if(document.getElementsByClassName('leftPane')[0].childNodes[0].innerHTML == "Mystic Bishop Mouse") {
document.getElementsByClassName('leftPane')[0].childNodes[3].click();
} else if (document.getElementsByClassName('leftPane')[0].childNodes[0].innerHTML == "Football Superstar") {
document.getElementsByClassName('leftPane')[0].childNodes[2].click();
} else if(document.getElementsByClassName('leftPane')[0].childNodes[0].innerHTML=="Flying Mouse") {
document.getElementsByClassName('leftPane')[0].childNodes[3].click();
} else if(document.getElementsByClassName('leftPane')[0].childNodes[0].innerHTML=="Hot Head Mouse") {
document.getElementsByClassName('leftPane')[0].childNodes[2].click();
} else if(document.getElementsByClassName('leftPane')[0].childNodes[0].innerHTML=="Field Mouse") {
document.getElementsByClassName('leftPane')[0].childNodes[3].click();
} else if(document.getElementsByClassName('leftPane')[0].childNodes[0].innerHTML=="Snooty Mouse") {
document.getElementsByClassName('leftPane')[0].childNodes[1].click();
} else if(document.getElementsByClassName('leftPane')[0].childNodes[0].innerHTML=="Itty-Bitty Burroughs Mouse") {
document.getElementsByClassName('leftPane')[0].childNodes[3].click();
} else if(document.getElementsByClassName('leftPane')[0].childNodes[0].innerHTML=="Tiny Mouse") {
document.getElementsByClassName('leftPane')[0].childNodes[1].click();
} else if(document.getElementsByClassName('leftPane')[0].childNodes[1].className == "rewardBlock") {
document.getElementsByClassName('leftPane')[0].childNodes[1].click();
} 
window.setTimeout(function(){football()}, 3000);
}
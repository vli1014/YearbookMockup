/*var pageIndicator = document.getElementById("pageIndicator");
var page = document.getElementById("pageNumber");
page.innerHTML = pageIndicator.value;
pageIndicator.oninput = function() {
	page.innerHTML = this.value; 
} */

function initialize() {
	sideMenuToggle = false;
	sign = false;
	bottomMenuToggle = false;
/*
	element = document.getElementById("search");
	style = window.getComputedStyle(element);
	element.innerHTML = style.getPropertyValue("height") */
}
function toggleSideMenu() {
	sideMenuToggle = !sideMenuToggle;
	if(sideMenuToggle) {
		document.getElementById("sideMenu").style.width = "250px";
		document.getElementById("sideMenuToggle").style.transform = "translateX(250px)";
		document.getElementById("sideMenuToggle").style.fontSize = "40px";
		document.getElementById("sideMenuToggle").innerHTML = "&times";
		}
	else {
		document.getElementById("sideMenu").style.width = "0";
		document.getElementById("sideMenuToggle").style.transform = "translateX(0px)";
		document.getElementById("sideMenuToggle").style.fontSize = "32px";
		document.getElementById("sideMenuToggle").innerHTML = "&#9776";
	}
}

function allowSign() {
	sign = !sign;
	if(!sign) {
		document.getElementById("signcancel").innerHTML = "Sign";
		document.getElementById("bottomMenuToggle").style.display = "none";
		document.getElementById("bottomMenu").style.display = "none";
		document.getElementById("pageIndicator").style.bottom = "40px";
	}
	else {
		bottomMenuToggle = false;
		toggleBottomMenu();
		document.getElementById("signcancel").innerHTML = "Cancel";
		document.getElementById("bottomMenuToggle").style.display = "inline-block";
		document.getElementById("bottomMenu").style.display = "inline-block";
	}
}

function toggleBottomMenu() {
	bottomMenuToggle = !bottomMenuToggle;
	if(bottomMenuToggle) {
		document.getElementById("pageIndicator").style.bottom = "104px";
		document.getElementById("bottomMenuToggle").style.bottom = "44px";
		document.getElementById("bottomMenu").style.bottom = "0";
	}
	else {
		document.getElementById("pageIndicator").style.bottom = "40px";
		document.getElementById("bottomMenuToggle").style.bottom = "-20px";
		document.getElementById("bottomMenu").style.bottom = "-66px";
	}
}
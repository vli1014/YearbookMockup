/* Runs on page load. */
function initialize(){
	sideMenuToggled = false;
	signing = false;
	bottomMenuToggled = false;
	
	sideMenu = document.getElementById("sideMenu");
	sideMenuToggle = document.getElementById("sideMenuToggle");
	signButton = document.getElementById("signButton");
	bottomMenuToggle = document.getElementById("bottomMenuToggle");
	bottomMenu = document.getElementById("bottomMenu");
	pageIndicator = document.getElementById("pageIndicator");
}


/* Toggles the side menu. */
function toggleSideMenu(){
	sideMenuToggled = !sideMenuToggled;
	
	if(sideMenuToggled){
		sideMenu.style.width = "250px";
		sideMenuToggle.style.transform = "translateX(250px)";
		sideMenuToggle.style.fontSize = "40px";
		sideMenuToggles.innerHTML = "&times";
	} else{
		sideMenu.style.width = "0";
		sideMenuToggle.style.transform = "translateX(0px)";
		sideMenuToggle.style.fontSize = "32px";
		sideMenuToggle.innerHTML = "&#9776";
	}
}

/* Toggles signing features. */
function allowSign(){
	signing = !signing;
	
	if(!signing){
		signButton.innerHTML = "Sign";
		bottomMenuToggle.style.display = "none";
		bottomMenu.style.display = "none";
		pageIndicator.style.bottom = "40px";
	} else{
		bottomMenuToggled = false;
		toggleBottomMenu();
		
		signButton.innerHTML = "Cancel";
		bottomMenuToggle.style.display = "inline-block";
		bottomMenu.style.display = "inline-block";
	}
}

/* Toggles the bottom menu. */
function toggleBottomMenu(){
	bottomMenuToggled = !bottomMenuToggled;
	
	if(bottomMenuToggled){
		pageIndicator.style.bottom = "104px";
		bottomMenuToggle.style.bottom = "44px";
		bottomMenu.style.bottom = "0";
	} else{
		pageIndicator.style.bottom = "40px";
		bottomMenuToggle.style.bottom = "-20px";
		bottomMenu.style.bottom = "-66px";
	}
}
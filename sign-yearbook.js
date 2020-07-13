/* Runs on page load. */
$(document).ready(function(){
	sideMenuToggled = false;
	isSigning = false;
	bottomMenuToggled = false;
	hasTextArea = false;

	
	/* Toggles the side menu. */
	$("#sideMenuButton").click(function(){
		sideMenuToggled = !sideMenuToggled;
		
		if(sideMenuToggled){
			$("#sideMenu").css("width", "250px");
			$("#sideMenuButton")
				.css({"transform": "translateX(250px)", "fontSize": "40px"})
				.html("&times;");
		} else{
			$("#sideMenu").css("width", "0px");
			$("#sideMenuButton")
				.css({"transform": "translateX(0px)", "fontSize": "32px"})
				.html("&#9776;");
		}
	});
	
	
	/* Toggles signing features. */
	$("#signButton").click(function(){
		isSigning = !isSigning;
			
		if(!isSigning){
			$("#signButton").text("Sign");
			$("#bottomMenuButton").css("display", "none");
			$("#bottomMenu").css("display", "none");
			$("#pageIndicator").css("bottom", "40px");
			
			if(hasTextArea){
				hasTextArea = false;
				$("#signature").remove();
			}
		} else{
			bottomMenuToggled = false;
			$("#bottomMenuButton").trigger("click");
			
			$("#signButton").text("Cancel");
			$("#bottomMenuButton").css("display", "inline-block");
			$("#bottomMenu").css("display", "inline-block");
		}
	});
	
	
	/* Toggles the bottom menu. */
	$("#bottomMenuButton").click(function(){
		bottomMenuToggled = !bottomMenuToggled;
		
		if(bottomMenuToggled){
			$("#pageIndicator").css("bottom", "104px");
			$("#bottomMenuButton").css("bottom", "44px");
			$("#bottomMenu").css("bottom", "0px");
		} else{
			$("#pageIndicator").css("bottom", "44px");
			$("#bottomMenuButton").css("bottom", "-20px");
			$("#bottomMenu").css("bottom", "-66px");
		}
	});
	
	
	/* Creates a text area at the cursor when in signing mode. */
	$(".page").click(function(event){
		if(isSigning && !hasTextArea){
			hasTextArea = true;
			
			var elemId = "#" + $(this).attr("id");
			
			$(elemId).append("<div id=\"signature\" contenteditable=\"true\">Sign here...</div>");
			
			var windowPos = $(elemId).position();
			var x = `${event.clientX - windowPos.left}px`;
			var y = `${event.clientY - windowPos.top}px`;
			
			$("#signature")
				.css({"position": "absolute", "top": y, "left": x, "width": "200px", "height": "100px", "text-align": "left", "background-color": "lightgray"})
				.draggable({
					"containment": "parent"
				})
				.resizable({
					"containment": "parent"
				});
		}
	});
});

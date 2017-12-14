////////////////   $(document).ready();   ////////////////
$(document).ready(function () {
	var tablinks = document.getElementsByClassName("tablinks");
	var tabcontent = document.getElementsByClassName("tabcontent");
	var modal = document.getElementById("modalBox");
	var light = document.getElementById("lightBox");
	var i, currentPic;
	var s = 0; // <-- A counter for the slideshow
	var slideIndex = 1;
	var $display, slideType, demoType, intervalId;
	var menuShow = false;
	var menuColor;
	var about = document.getElementsByClassName("about")[0];
	var tesla = document.getElementsByClassName("tesla")[0];
	var spacex = document.getElementsByClassName("spacex")[0];
	var solar = document.getElementsByClassName("solar")[0];
	var hyperl = document.getElementsByClassName("hyperl")[0];


	$(".tablinks").on("click", function (event) {
		//Delete all tablinks' borderBottom
		for (i = 0; i < tablinks.length; i++) {
			tablinks[i].style.borderBottomColor = "transparent";
			tablinks[i].style.color = "rgba(255, 255, 255, .8)";
		};

		//Do not display any tabcontent
		for (i = 0; i < tabcontent.length; i++) {
			tabcontent[i].style.display = "none";
		};

		$display = $(".icon-bars").css("display");

		if ($display == "block") {
			$("#header-tabs li").css("display", "none");
		}
	});

	//Display About tabcontent and About's menu border-bottom
	function showAbout() {
		let w = window.innerWidth;
		menuColor = "#4479ff";
		
		$(".about").css({
			"border-bottom-color": "#fff",
			"color": "#fff"
		});
		document.getElementById("about").style.display = "block";
		$("#container").css({
			"background": "#eee url('images/Header-about.png') no-repeat center top",
			"color": "#000"
		});

		
		//If window-width is <= 660px change the backgroundColor of the menu elements
		if (w <= 660) {
			for (let t = 0; t < tablinks.length; t++) {
			tablinks[t].style.backgroundColor = menuColor;
			}
		}
	};

	//Display Tesla tabcontent and Tesla's menu border-bottom
	function showTesla() {
		let w = window.innerWidth;
		menuColor = "#e82e2e";
		
		$(".tesla").css({
			"border-bottom-color": "#fff",
			"color": "#fff"
		});
		document.getElementById("tesla").style.display = "block";
		$("#container").css({
			"background": "#eee url('images/Header-tesla.png') no-repeat center top",
			"color": "#000"
		});

		//If window-width is <= 660px change the backgroundColor of the menu elements
		if (w <= 660) {
			for (let t = 0; t < tablinks.length; t++) {
			tablinks[t].style.backgroundColor = menuColor;
			}
		}
	}

	//Display SpaceX tabcontent and Spacex's menu border-bottom
	function showSpacex() {
		let w = window.innerWidth;
		menuColor = "#010ea3";
		
		$(".spacex").css({
			"border-bottom-color": "#fff",
			"color": "#fff"
		});
		document.getElementById("spacex").style.display = "block";
		$("#container").css({
			"background": "#060608 url('images/Header-spacex.png') no-repeat center top",
			"color": "#fff"
		});

		//If window-width is <= 660px change the backgroundColor of the menu elements
		if (w <= 660) {
			for (let t = 0; t < tablinks.length; t++) {
			tablinks[t].style.backgroundColor = menuColor;
			}
		}
	}

	//Display SolarCity tabcontent and SolarCity's menu border-bottom
	function showSolar() {
		let w = window.innerWidth;
		menuColor = "#3fc92a";
		
		$(".solar").css({
			"border-bottom-color": "#fff",
			"color": "#fff"
		});
		document.getElementById("solar").style.display = "block";
		$("#container").css({
			"background": "#eee url('images/Header-solar.png') no-repeat center top",
			"color": "#000"
		});

		//If window-width is <= 660px change the backgroundColor of the menu elements
		if (w <= 660) {
			for (let t = 0; t < tablinks.length; t++) {
			tablinks[t].style.backgroundColor = menuColor;
			}
		}
	}

	//Display HyperLoop tabcontent and HyperLoop's menu border-bottom
	function showHyperl() {
		let w = window.innerWidth;
		menuColor = "#6b17d8";
		
		$(".hyperl").css({
			"border-bottom-color": "#fff",
			"color": "#fff"
		});
		document.getElementById("hyperl").style.display = "block";
		$("#container").css({
			"background": "#eee url('images/Header-hyperloop.png') no-repeat center top",
			"color": "#000"
		});

		//If window-width is <= 660px change the backgroundColor of the menu elements
		if (w <= 660) {
			for (let t = 0; t < tablinks.length; t++) {
			tablinks[t].style.backgroundColor = menuColor;
			}
		}
		
	}


	//On click execute the corresponding function
	$(".about").on("click", function () {
		slideType = "about-slide";
		demoType = "about-demo";
		menuShow = false;
		showAbout();

	});

	$(".tesla").on("click", function () {
		slideType = "tesla-slide";
		demoType = "tesla-demo";
		menuShow = false;
		showTesla();

		//Waypoints for Tesla
		var $t1 = $("#t1");
		var $t2 = $("#t2");
		var $t3 = $("#t3");
		var $t4 = $("#t4");
		var $t5 = $("#t5");


		$t1.waypoint(function () {
			$t1.css({
				opacity: 1,
				left: '0'
			});
		}, {
			offset: '90%'
		});

		$t2.waypoint(function () {
			$t2.css({
				opacity: 1,
				left: '0'
			});
		}, {
			offset: '90%'
		});

		$t3.waypoint(function () {
			$t3.css({
				opacity: 1,
				left: '0'
			});
		}, {
			offset: '90%'
		});

		$t4.waypoint(function () {
			$t4.css({
				opacity: 1,
				left: '0'
			});
		}, {
			offset: '90%'
		});

		$t5.waypoint(function () {
			$t5.css({
				opacity: 1,
				top: '0'
			});
		}, {
			offset: '60%'
		});
	});

	$(".spacex").on("click", function () {
		slideType = "spacex-slide";
		demoType = "spacex-demo";
		menuShow = false;
		showSpacex();

		//Set an interval to the Slideshow. Stop it when mouse is over the image and re-run it when it is not over it.
		if (s == 0) {
			intervalId = setInterval(function () {
				$(".nextS").click();
			}, 5000);
			s = 1;
		}

		$(".view-container").on({
			mouseenter: function () {
				clearInterval(intervalId)
			},
			mouseleave: function () {
				intervalId = setInterval(function () {
					$(".nextS").click();
				}, 5000);
			}
		})
	});

	$(".solar").on("click", function () {
		slideType = "solar-slide";
		demoType = "solar-demo";
		menuShow = false;
		showSolar();
	});

	$(".hyperl").on("click", function () {
		slideType = "hyperl-slide";
		demoType = "hyperl-demo";
		menuShow = false;
		showHyperl();
	});

	//Show About tab by default
	$(".about").click();

	//Hide the menuShow when clicking on the screen except when clicking on the 'menu icon' and the 'next slide' button (from slideShow)
	window.addEventListener("click", function () {
		if (menuShow == true) {
			var menu = document.getElementsByClassName("icon-bars")[0];
			var nextSlide = document.getElementsByClassName("nextS")[0];
			if (event.target !== menu && event.target !== nextSlide) {
				$("#header-tabs li").css("display", "none");
				menuShow = false;
			}
		}
	});

	//Tablinks menu
	$(".icon-bars").on("click", function () {
		if (menuShow) {
			$("#header-tabs li").css("display", "none");
			menuShow = false;
		} else {
			$("#header-tabs li").css("display", "block");
			$("#header-tabs li").addClass("menu-animation");
			menuShow = true;
		}
	});

	window.addEventListener("resize", function () {
		let w = window.innerWidth;

		if (w > 660) {
			$("#header-tabs li").css({
				display: "inline-block",
				"background-color": "transparent"
			});
		} else {
			$("#header-tabs li").css({
				display: "none",
				"background-color": menuColor
			});
			menuShow = false;
		}
	});

	/*#################################################*/
	/*################### MODAL BOX ###################*/

	function modalBox() {
		var src, alt;

		document.getElementById("modalBox").style.display = "block";

		src = event.target.getAttribute("src");
		alt = event.target.getAttribute("alt");

		document.getElementById("modal-img").setAttribute("src", src);
		document.getElementById("modal-img").setAttribute("alt", alt);
		document.getElementById("modal-capt").innerHTML = alt;
	}


	/*--- This function works on LIGHTBOX and MODALBOX ---*/
	function closeModal() {
		$("#footerLB").empty();
		$("#containerLB > img").remove();
		document.getElementById("lightBox").style.display = "none";
		document.getElementById("modalBox").style.display = "none";
	}

	//Close lightbox
	$(".close").on("click", closeModal);

	// When the user clicks anywhere outside of the modal, close it.
	window.onclick = function (event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
		if (event.target == light) {
			$("#footerLB").empty();
			$("#containerLB > img").remove();
			light.style.display = "none";
		}
	}

	//Show modalBox of clicked image with the class="clickable"
	$(".clickable").on("click", modalBox);


	/*#################################################*/
	/*################### LIGHTBOX ####################*/

	function lightBox() {
		var imgLB, footerLB, r, t, e;
		var cln = [];

		document.getElementById("lightBox").style.display = "block";
		imgLB = event.currentTarget.getElementsByClassName("pictureLB");
		footerLB = document.getElementById("footerLB");
		r = document.getElementById("containerLB");
		t = imgLB[0].getAttribute("alt");
		document.getElementById("captionLB").innerHTML = t;

		for (var i = 0; i < imgLB.length; i++) {
			cln[i] = imgLB[i].cloneNode(true);
		}

		$("#footerLB").append(cln);
		$("#containerLB").prepend(cln[0].cloneNode(true));
		currentPic = cln[0];

	}

	function footerLB() {
		$("#containerLB > img").remove();
		$("#containerLB").prepend(event.target.cloneNode(true));
		document.getElementById("captionLB").innerHTML = event.target.getAttribute("alt");
		currentPic = event.target;
	}

	function showPrev() {
		$("#containerLB > img").remove();
		if (currentPic.previousSibling == null) {
			currentPic = document.getElementById("footerLB").lastChild;
			$("#containerLB").prepend(currentPic.cloneNode(true));
			document.getElementById("captionLB").innerHTML = currentPic.getAttribute("alt");
		} else {
			currentPic = currentPic.previousSibling;
			$("#containerLB").prepend(currentPic.cloneNode(true));
			document.getElementById("captionLB").innerHTML = currentPic.getAttribute("alt");
		}
	}

	function showNext() {
		$("#containerLB > img").remove();
		if (currentPic.nextSibling == null) {
			$("#containerLB").prepend(document.getElementById("footerLB").firstChild.cloneNode(true));
			currentPic = document.getElementById("footerLB").firstChild;
			document.getElementById("captionLB").innerHTML = currentPic.getAttribute("alt");
		} else {
			$("#containerLB").prepend(currentPic.nextSibling.cloneNode(true));
			currentPic = currentPic.nextSibling;
			document.getElementById("captionLB").innerHTML = currentPic.getAttribute("alt");
		}
	}


	$("#roadster2020").on("click", lightBox);
	$("#semi-truck").on("click", lightBox);

	//When clicking on a <img> in #footerLB
	$("#footerLB").on("click", "img", footerLB)

	$(".prev").on("click", showPrev);
	$(".next").on("click", showNext);


	/*#################################################*/
	/*############### SPACE X - Slider ################*/

	$(".slide-footer").html($(".active").attr("alt"));

	$(".nextS").on("click", function () {
		var $active = $(".active");
		var $first = $(".view-container").children().first();
		var src, alt;

		clearInterval(intervalId);
		intervalId = setInterval(function () {
			$(".nextS").click();
		}, 5000);

		src = $first.attr("src");
		alt = $first.attr("alt");

		$(".view-container").append("<img src='" + src + "' alt='" + alt + "'>");
		$first.remove();

		$active.animate({
			left: '-70%'
		}, 500);
		$active.next().animate({
			left: '10%'
		}, 500);
		$active.next().next().animate({
			left: '90%'
		}, 500);
		$active.prev().animate({
			left: '-150%'
		}, 500);

		$(".active").next().addClass("active");
		$(".active:first").removeClass("active");
		$(".slide-footer").html($(".active").attr("alt"));
	});

	$(".prevS").on("click", function () {
		var $active = $(".active");
		var $last = $(".view-container").children().last();
		var src, alt;

		clearInterval(intervalId);
		intervalId = setInterval(function () {
			$(".nextS").click();
		}, 4000);

		src = $last.attr("src");
		alt = $last.attr("alt");

		$(".view-container").prepend("<img src='" + src + "' alt='" + alt + "' style='left: -150%'>");
		$last.remove();

		$active.animate({
			left: '90%'
		}, 500);
		$active.prev().prev().animate({
			left: '-70%'
		}, 500);
		$active.prev().animate({
			left: '10%'
		}, 500);
		$active.next().animate({
			left: '170%'
		}, 500);

		$(".active").prev().addClass("active");
		//Selects the second element (index[1]) with class .active
		$(".active:eq(1)").removeClass("active");
		$(".slide-footer").html($(".active").attr("alt"));
	});

});

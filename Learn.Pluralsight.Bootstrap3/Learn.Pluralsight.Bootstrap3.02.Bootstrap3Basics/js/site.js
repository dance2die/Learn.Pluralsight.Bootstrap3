(function () {
	"use strict";

	var $pickButton = $("#pickButton");

	$("#reasonDropdown li a").on("click", function () {
		var reason = $(this).text();
		$pickButton.text(reason);
	});

	var $sentDialog = $("#sentDialog");

	$("#contactForm").on("submit", function() {
		$sentDialog.modal("show");
		return false;
	});


	var $sendAlert = $("#sendAlert");
	$sentDialog.on("hidden.bs.modal", function() {
		//alert("close");
		$sendAlert.show();
	});
	$sendAlert.on("close.bs.alert", function() {
		$sendAlert.hide();
		return false;
	});

	$("#contactForm input[type=submit]").tooltip({
		placement: "left",
		delay: {
			show: 500,
			hide: 0
		}
	});

	$("#theCarousel").carousel();

})();
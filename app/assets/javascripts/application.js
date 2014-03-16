// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap/modal
//= require jquery.flippy.js
//= require_tree .

// AJAX, sadly never worked :(
// $(function() {
//   $("#platforms .pagination a").bind("click", function(e) {
//     $.getScript(this.href);
//     // alert("YES");
//     e.preventDefault();
//   });
// });

$(function () {
	$("#topPlatforms").on("click", function (e) { 
		$(this).addClass("active").removeClass("") 
		$("#mostRecent").addClass("").removeClass("active")
	})

	$("#mostRecent").on("click", function (e) { 
		$(this).addClass("active").removeClass("") 
		$("#topPlatforms").addClass("").removeClass("active")
	})
})
$(document).ready(function () {

	$.get("https://wd.comsci.club/api/kv.php?key=sydalg", 
	      data => {
		var visitorCount = parseInt(data);
		$("#visitor-count").html(visitorCount);
		$.post("https://wd.comsci.club/api/kv.php?key=sydalg", {
		value: visitorCount+1
	});

	});
$.get("https://wd.comsci.club/api/kv.php?key=sydalg", function(data) {
			$("#comments-box").html(data);
		});

	$("#submitcomment").click(function() {
		var currentcomments = $("#comments-box").html();
		var newcomments = currentcomments + "<br>" + "<b>" + $("#commentName").val() + "</b>: " + $("#comment").val();
		$.post("https://wd.comsci.club/api/kv.php?key=sydalg", {
			value: newcomments
		});

		$("#comments-box").html(newcomments);

		$("#commentName").val("");
		$("#comment").val("");
	});

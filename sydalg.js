$(document).ready(function () {

	$.get("https://wd.comsci.club/api/kv.php?key=myvisitorcount", function(data){
		var visitorCount = parseInt(data);
		$("#visitor-count").html(visitorCount);
		$.post("https://wd.comsci.club/api/kv.php?key=myvisitorcount", {
		value: visitorCount+1
	});

	});

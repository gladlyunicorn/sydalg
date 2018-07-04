$(document).ready(function () {

	$.get("https://wd.comsci.club/api/kv.php?key=sydalg", function(data){
		var visitorCount = parseInt(data);
		$("#visitor-count").html(visitorCount);
		$.post("https://wd.comsci.club/api/kv.php?key=sydalg", {
		value: visitorCount+1
	});

	});

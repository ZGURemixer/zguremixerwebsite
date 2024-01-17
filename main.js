$(function(){
	$("#body-container").load("design", function(){
		$("#article-container").append($("#current-article"));
	});
});
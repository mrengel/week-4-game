$(document).ready(function() {

	var newDiv = $("#Batman")

	$("#Batman").on("click",function(){

		console.log(1);
		
		$(".Your-Character").append(newDiv);
	});

});
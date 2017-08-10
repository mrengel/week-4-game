$(document).ready(function() {

	//alert("You must be Batman");
	//alert("You must face the Joker");

	var firstCharHealth=100;
	var secondCharHealth=120;

	var characterArrayList=[

		{
			"Name"="Batman",
			healthPoints = 120,
			attackPower = 10,
			counterAttackPower = 10,
		},

		{
			"Name"="Joker",
			healthPoints = 130,
			attackPower = 8,
			counterAttackPower = 8,
		},

		{
			"Name"="TwoFace",
			healthPoints = 110,
			attackPower = 12,
			counterAttackPower = 6,
		},

		{
			"Name"="MrFreeze",
			healthPoints = 110,
			attackPower = 12,
			counterAttackPower = 6,

		}








	]

	$("#Health1").html("Health: "+firstCharHealth);
	$("#Health2").html("Health: "+secondCharHealth);

	var newDiv = $("#Batman")

	$("#Batman").on("click",function(){

		console.log(1);
		
		$(".Your-Character").append(newDiv);
	});

	var newDiv2 = $("#Joker")

	$("#Joker").on("click",function(){

		console.log(1);
		
		$(".Defender").append(newDiv2);
	});

	function attack(){
		firstCharHealth = firstCharHealth - 10;
		secondCharHealth = secondCharHealth - 15;
		$("#Health1").html("Health: "+firstCharHealth);
		$("#Health2").html("Health: "+secondCharHealth);
		console.log(firstCharHealth);
		console.log(secondCharHealth);
	}

	$(".Attack-Button").on("click",function(){
		attack();
		if(secondCharHealth===0){
			alert("I am the night...");
			alert("I am vengeance...");
			alert("I am BATMAN!");
		}

	});



});
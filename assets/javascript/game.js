$(document).ready(function() {

	//Ideally, I was trying to keep it simple, that by clicking one of the character buttons it would push that objects attributes into the yourCharacter
	//and defender variables. These variables would then be used in the attack funtion. 

	//alert("You must be Batman");
	//alert("You must face the Joker");

	var yourCharacter=[];
		//name: " ",
		//healthPoints: null,
		//attackPower: null,
		//counterAttackPower: null,
	//}
	var defender=[];

	var batman = {
			name: "Batman",
			healthPoints: 120,
			attackPower: 10,
			counterAttackPower: 10,
		}
	var joker ={
			name: "Joker",
			healthPoints: 130,
			attackPower: 8,
			counterAttackPower: 8,
		}
	var twoFace ={
			name: "TwoFace",
			healthPoints: 110,
			attackPower: 12,
			counterAttackPower: 6,
		}
	var mrFreeze ={
			name: "MrFreeze",
			healthPoints: 110,
			attackPower: 12,
			counterAttackPower: 6,
		}

		


		

	$("#Health1").html("Health: "+batman["healthPoints"]);
	$("#Health2").html("Health: "+joker["healthPoints"]);
	$("#Health3").html("Health: "+twoFace["healthPoints"]);
	$("#Health4").html("Health: "+mrFreeze["healthPoints"]);

	console.log(batman["healthPoints"]);

	var newDiv = $("#Batman")

	$("#Batman").on("click",function(){

		console.log(1)
		
		$(".Your-Character").append(newDiv);
		yourCharacter.push(batman);
		//I tried a console log to see if the batman attributes got applied to the yourCharacter variable but it came up undefined. I tried
		//.append and .push.apply to see if these worked but they didn't.
		console.log(yourCharacter["healthPoints"]);
	});

	var newDiv2 = $("#Joker")

	$("#Joker").on("click",function(){

		console.log(1);
		
		$(".Defender").append(newDiv2);
		defender.push(joker);
		//Like above, I tried a console log to see if the joker attributes got applied to the defender variable but it came up undefined. I tried
		//.append and .push.apply to see if these worked but they didn't.
		console.log(this.defender["healthPoints"]);
	});
	

	

	//This was some preliminary code I wrote for the attack function to be called when the attack button was pressed. 

	//function attack(){
		//firstCharHealth = firstCharHealth - 10;
		//secondCharHealth = secondCharHealth - 15;
		//$("#Health1").html("Health: "+firstCharHealth);
		//$("#Health2").html("Health: "+secondCharHealth);
		//console.log(firstCharHealth);
		//console.log(secondCharHealth);
	//}

	//$(".Attack-Button").on("click",function(){
		//attack();
		//if(secondCharHealth===0){
			//alert("I am the night...");
			//alert("I am vengeance...");
			//alert("I am BATMAN!");
		//}

	});




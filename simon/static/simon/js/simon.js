var buttons = ["sound1btn", "sound2btn", "sound3btn", "sound4btn"];
var computerMoves = [];
var userMoves = [];
var computerSelection;
var userSelection;
var level = 1;
var move = 0;

function randomColor(arr) {
	return arr[Math.floor(Math.random() * arr.length)];     // returns random button id
}

function changeColorPlaySound(str) {
	var sound = str.replace("btn", "");
	$("#" + sound)[0].play();
	$("#" + str).addClass("simon-selected");
	setTimeout(function() {
    	$("#" + str).removeClass("simon-selected");
    }, 600);
}

function computerTurn(buttons) {
	computerSelection = randomColor(buttons);
	computerMoves.push(computerSelection);
	console.log("computer: " + computerMoves);
	$.each(computerMoves, function(index, value) {
		setTimeout(function() {
			changeColorPlaySound(value);
		}, 1000 * index);
	});
}

function gameOver() {
	$(".sound-btn").addClass("game-over");
	$("#game-over").text("Game Over").fadeIn(1500).show().fadeOut(1500);
	resetGame();
}

function resetGame() {
	computerMoves = [];
	userMoves = [];
	level = 1;
	move = 0;

	setTimeout(function() {
		$("#start-icon").removeClass("fa-backward").addClass("fa-play");
		//$(".sound-btn").removeClass("game-over");
		$("#level").text(level);
	}, 2500);
}

function hint() {
	$.each(computerMoves, function(index, value) {
		setTimeout(function() {
			changeColorPlaySound(value);
		}, 1000 * index);
	});
}

$(document).ready(function() {
	//$("#easy, #hard").tooltip();

	$(".sound-btn").addClass("game-over");
	$("#level").text(level);
	$("#game-over").hide();

	$("#start").on("click", function() {
		//console.log("easy: " + $('#easy-radio').prop('checked'));
		//console.log("hard: " + $('#hard-radio').prop('checked'));
		
		if ($("#start-icon").hasClass("fa-backward")) {
			$(".sound-btn").addClass("game-over");
			$("#game-over").text("Reset").fadeIn(1500).show().fadeOut(1500);
			resetGame();
		}
		else {
			$(".sound-btn").removeClass("game-over");
			setTimeout(function() {
					$("#start-icon").removeClass("fa-play").addClass("fa-backward");
					computerTurn(buttons);
			}, 300);
		}
	});

	$(".sound-btn").on("click", function() {
		userSelection = $(this).attr("id");
		changeColorPlaySound(userSelection);
		if (userSelection == computerMoves[move]) {
			userMoves.push(userSelection);
			move += 1
			if (userMoves.length == computerMoves.length) {
				move = 0;
				userMoves = [];
				level += 1;
				if (level  == 21) {
					$(".sound-btn").css("background", "purple");
					$("#game-over").text("You Win!").fadeIn(1500).show().fadeOut(1500);
					resetGame();
				}
				else {
					setTimeout(function() {
						$("#level").text(level);
						computerTurn(buttons);
					}, 1500);
				}
			}
		}
		else {
			if ($("#hard-radio").prop("checked")) {
				gameOver();
			}
			if ($("#easy-radio").prop("checked")) {
				userMoves = [];
				move= 0;
				$("#level-label").text("Hint");
				setTimeout(function() {
					hint();	
				}, 1000);
				setTimeout(function() {
					$("#level-label").text("Level");
				}, 1000 * level);
			}
		}
	});
}); // End document


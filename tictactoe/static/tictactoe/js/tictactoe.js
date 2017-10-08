var user_team;
var computer_team;
var computer_move;
var boxes = ["box1", "box2", "box3", "box4", "box5", "box6", "box7", "box8", "box9"];


function chooseBox(boxes) {
	return boxes[Math.floor(Math.random() * boxes.length)];
}

function computerMove(boxes) {
	computer_move = chooseBox(boxes);					// id of the box element the computer will pick
	boxes.splice(boxes.indexOf(computer_move), 1);		// remove computer choice from the array
	$("#" + computer_move).text(computer_team).off("click");
	if (checkWin() == true) {
		endGame();
	}
	else {
		setTimeout(changeTurn, 400);
	}
}

function areEqual() {
	for (i=1; i<arguments.length; i++) {
		if (arguments[i] === "" || arguments[i] !== arguments[i-1]) {
			return false;
		}
	}
	return true;
}

function findMatches(boxa, boxb, boxc) {
	if (areEqual(boxa.text(), boxb.text(), boxc.text())) {
		return [boxa, boxb, boxc];
	}
	return false;
}

function returnMatches() {
	
	var box1 = $("#box1");
	var box2 = $("#box2");
	var box3 = $("#box3");
	var box4 = $("#box4");
	var box5 = $("#box5");
	var box6 = $("#box6");
	var box7 = $("#box7");
	var box8 = $("#box8");
	var box9 = $("#box9");

	return findMatches(box1, box2, box3) ||
		findMatches(box4, box5, box6) ||
		findMatches(box7, box8, box9) ||
		findMatches(box1, box4, box7) ||
		findMatches(box2, box5, box8) ||
		findMatches(box3, box6, box9) ||
		findMatches(box1, box5, box9) ||
		findMatches(box3, box5, box7)
}

function colorWinners(arr) {
	for (i=0; i<arr.length; i++) {
		(arr[i]).css({"background": "lightgrey"});
	}
}

function checkWin() {
	var winners = returnMatches();
	if (winners) {
		colorWinners(winners);
		return true;
	}
	if (boxes.length === 0) {
		return true;
	}
	return false;
}

function newGame() {
	boxes = ["box1", "box2", "box3", "box4", "box5", "box6", "box7", "box8", "box9"];
	user_team = "";
	computer_team = "";
	computer_move = 0;

	$("#board").hide()
	$(".ttt-box").on("click");
	$(".ttt-box").text("").css({"background": "none"});
	$("#message").show().text("Choose your team");
	$("#newgame").hide();
	$(".ttt-button").on("click");
	$("#X").show();
	$("#O").show();
	if ($("#X").hasClass("selected")) {
		$("#X").removeClass("selected");
		$("#O").removeClass("deselected");
	} else {
		$("#O").removeClass("selected");
		$("#X").removeClass("deselected");
	}
}

function selectTeam() {
	$(".ttt-button").on("click", function () {
		user_team = $(this).text();
		if (user_team === "X") {
			computer_team = "O";
		} else {
			computer_team = "X";
		}
		
		$("#message").hide();
		$("#board").slideDown("slow");
		$("#X").addClass("selected");
		$("#O").addClass("deselected");
		$(".ttt-button").off("click");

		if (user_team === "O") {
			setTimeout (function () {
				computerMove(boxes);
			}, 1000);
		}
	});
}

function userTurn() {
	$(".ttt-box").on("click", function () {
		$(this).text(user_team);
		$(this).off("click");	
		var boxid = $(this).attr("id");
		boxes.splice(boxes.indexOf(boxid), 1);				// remove user choice from the array 

		if (checkWin() == true) {
			endGame();
		}
		else {
			setTimeout(changeTurn, 400);
			setTimeout (function () {
				computerMove(boxes);
			}, 1000);
		}
	});
}

function changeTurn() {
	if ($("#X").hasClass("selected")) {
		$("#X").removeClass("selected").addClass("deselected");
		$("#O").removeClass("deselected").addClass("selected");
	} else {
		$("#O").removeClass("selected").addClass("deselected");
		$("#X").removeClass("deselected").addClass("selected");
	}
}

function endGame() {
	$("#message").fadeIn(1000).text("Game Over");
	$(".ttt-box").off("click");
	$("#X").hide();
	$("#O").hide();
	$("#newgame").fadeIn(1000);
}

function startGame() {
	newGame();
	selectTeam();
	userTurn();
}

$(document).ready(function () {
	startGame();
	$("#newgame").on("click", function () {
		startGame();
	});
	$("#tictactoe-modal").on("hidden.bs.modal", function () {
		startGame();
	});
});

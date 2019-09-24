// Rover Object Goes Here
// ======================
var rover = {
  direction: 'N',
  //direction N,E,S,W
  position:[0,0],
};

function createArea(columns, rows) {
	var area = [];
	for (var i = 0; i < columns; i++) {
		area[i] = new Array(rows);
	}
	return area;
}


// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");
  switch(rover.direction){
    case 'N':
    rover.direction ="W";
    break;

    case 'W':
    rover.direction ="S";
    break;

    case 'S':
    rover.direction ="E";
    break;

    case 'E':
    rover.direction ="N";
    break;
  }
}

function turnRight(rover){
  console.log("turnRight was called!");
  switch(rover.direction){
    case 'N':
    rover.direction ="E";
    break;

    case 'E':
    rover.direction ="S";
    break;

    case 'S':
    rover.direction ="W";
    break;

    case 'W':
    rover.direction ="N";
    break;
  }
}

function moveForward(rover){
  console.log("moveForward was called")
  switch (rover.direction) {
		case 'N':
			rover.position[0] = rover.position[0] - 1;
			break;

		case 'E':
			rover.position[1] = rover.position[1] + 1;
			break;

		case 'S':
			rover.position[0] = rover.position[0] + 1;
			break;

		case 'W':
			rover.position[1] = rover.position[1] - 1;
			break;
	}
  blocked('forward');

	console.log(rover);
}

function moveBackwards() {
	console.log('moveBackwards was called');

	switch (rover.direction) {
		case 'N':
			rover.position[0] = rover.position[0] + 1;
			break;

		case 'E':
			rover.position[1] = rover.position[1] - 1;
			break;

		case 'S':
			rover.position[0] = rover.position[0] - 1;
			break;

		case 'W':
			rover.position[1] = rover.position[1] + 1;
			break;
	}

	blocked('backwards');

	console.log(rover);
}
function turning() {
	switch (turn) {
		case 'left':
			turnLeft();
			break;

		case 'right':
			turnRight();
			break;
	}

	RegisterTravelLogTurn();
}


function RegisterTravelLogMovement() {
	travelLog.push(
		'Rover moved Forward, Rovers position is: ' + rover.position
	);
}

function RegisterTravelLogTurn() {
	travelLog.push(
		'Rover turned ' +
			turn +
			', now Rovers direction is: ' +
			rover.direction
	);
}

function blocked(movement) {
	if (rover.position[0] < 0 || rover.position[0] >= 10) {
		console.log('You reached the border, you cannot move ' + movement);
		rover.position[0] = 0;
	}
	if (rover.position[1] < 0) {
		console.log('You reached the border, you cannot move ' + movement);
		rover.position[1] = 0;
	} else {
		RegisterTravelLogMovement();
	}
}

function commands(command) {
	for (var i = 0; i < command.length; i++) {
		switch (command[i]) {
			case 'b':
				moveBackwards();
				break;

			case 'f':
				moveForward();
				break;

			case 'r':
				turn = 'right';
				turning();
				break;

			case 'l':
				turn = 'left';
				turning();
				break;
		}
	}
}

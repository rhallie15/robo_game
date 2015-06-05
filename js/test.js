/* @author rhallie15 */

/*jslint browser: true*/
/*global $, console, makeGameBoard*/


var level_1 = [
		['-', 'r', '-', '-'],
		['-', '-', 'e', '-'],
		['-', '-', '-', '-'],
		['-', '-', '-', '-']
	],
	
	level_2 = [
		['-', 'r', '-', '-'],
		['-', 'p', 'd', '-'],
		['-', '-', 'e', '-'],
		['-', '-', '-', '-']
	],
	
	level_3 = [
		['-', '-', '-', 'e', '-'],
		['-', '*', '*', '*', '*'],
		['-', '-', '-', '-', '-'],
		['-', '-', '-', '-', '-'],
		['-', '-', '-', 'r', '-']
	],
	
	level_4 = [
		['p', 'p', 'p', 'r', 'p'],
		['-', '-', '-', '-', '-'],
		['d', '-', 'e', '-', '-'],
		['-', '-', '-', '-', '-'],
		['-', '-', '-', '-', '-']
	],
	
	level_5 = [
    	['r', '-', '-', '-', '-', '-'],
    	['*', '*', '*', '*', '-', '*'],
    	['-', '-', '-', '-', 'p', '-'],
    	['-', '-', '-', '-', 'p', '-'],
    	['-', '-', '-', '-', '-', '-'],
    	['-', 'e', '-', '-', 'd', '-']
	],
	
	level_6 = [
		['r', '-', '-', '-', '-', '-', '-'],
		['-', 'p', '-', '-', '-', '-', '-'],
		['-', '-', 'd', '-', '-', '-', '-'],
		['-', '-', '-', 'p', '-', '-', '-'],
		['-', '-', '-', '-', 'p', '-', '-'],
		['-', '-', '-', '-', '-', 'd', '-'],
		['-', '-', '-', '-', '-', '-', 'e']
	],
	
	level_7 = [
		['p', '-', 'p', '-', 'p', 'r', 'd'],
		['-', '*', '*', '*', '*', '*', '-'],
		['p', '*', 'd', '-', '-', '*', 'p'],
		['-', '*', '-', '*', 'e', '*', 'p'],
		['p', '*', 'p', '*', '*', '*', '-'],
		['-', '*', '-', '-', '-', '-', 'd'],
		['-', '*', '*', '*', '*', '*', '*']
	],
	
	level_8 = [
		['d', '-', 'd', 'p', 'd', 'd', 'p'],
		['-', '-', '-', 'r', '-', '-', '-'],
		['*', '*', '*', '*', '-', '*', '-'],
		['-', '-', 'p', 'p', '-', 'p', 'p'],
		['*', '*', '*', '*', '-', '*', '-'],
		['-', 'e', '-', 'd', '-', '-', '-'],
		['-', '-', '-', '-', '-', '-', '-']
	];



var robot;

$(document).ready(function () {
    "use strict";
    robot = makeGameBoard(level_8);
});

$(document).ready(function () {
    "use strict";
    $(document).keydown(function (key) {
        switch (parseInt(key.which, 10)) {
			// Left arrow key pressed
        case 68:
            robot.drop();
            break;
        case 80:
            robot.pickUp();
            break;
        case 37:
            robot.turnLeft();
            break;
            // Up Arrow Pressed
        case 38:
            robot.moveForward();
            break;
            // Right Arrow Pressed
        case 39:
            robot.turnRight();
            break;
            // Down Arrow Pressed
        case 40:
            robot.turnAround();
            break;
		default:
			console.log("Left:", robot.canMoveLeft());
			console.log("Right:", robot.canMoveRight());
		}
	});
});
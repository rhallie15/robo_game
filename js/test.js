/* @author rhallie15 */

/*jslint browser: true*/
/*global $, console, makeGameBoard*/

var current_level = 1;


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

var LEVEL = [
	level_1, level_2, level_3, level_4,
	level_5, level_6, level_7, level_8
];

var robot;

$(document).ready(function () {
    "use strict";
    robot = makeGameBoard(level_1);
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
			break;
		}
	});
});

$(document).ready(function () {
	'use strict';
	$('select').change(
		function () {
			robot.boardCanvas.destroyGameBoard();
			$(robot.bot).remove();
			current_level = parseInt($('option:selected').text(), 10) - 1;
			console.log(LEVEL[current_level]);
			robot = makeGameBoard(LEVEL[current_level]);
		}
	);
});
function getViewportWidth() {
	if(window.innerWidth) {
		return window.innerWidth;
	}
	else if(document.body && document.body.offsetWidth) {
		return document.body.offsetWidth;
	}
	else {
		return 0;
	}
}

function getViewportHeight() {
	if(window.innerHeight) {
		return window.innerHeight;
	}
	else if(document.body && document.body.offsetHeight) {
		return document.body.offsetHeight;
	}
	else {
		return 0;
	}
}

Game = {
	screen_info: {
		window_width: getViewportWidth(),
		window_height: getViewportHeight(),
		width: 10,
		height: 9,
		tile: {
			width: 32,
			height: 32
		}
	},
	pixelWidth: function() {
		return this.screen_info.width * this.screen_info.tile.width;
	},
	pixelHeight: function() {
		return this.screen_info.height * this.screen_info.tile.height;
	},
	mouseCheck: function() {
		if(this.lastMouse !== MouseTracker.mouseDown) {
			MouseTracker.mouseDown ? Crafty.trigger("ScreenMouseDown") : Crafty.trigger("ScreenMouseUp");
		}
		this.lastMouse = MouseTracker.mouseDown;
	},
	mouseUp: function() {
		console.log("mouse up!");
	},
	mouseDown: function() {
		console.log("mouse down!");
	},
	updatePositions: function() {
		Crafty("Accel").accelMove();
		var mousex = MouseTracker.position.x;
		var mousey = MouseTracker.position.y;
		Crafty.trigger("MousePos", { x: mousex, y: mousey });
	},
	update: function() {
		Game.updatePositions();
		Game.mouseCheck();
	},
	init: function() {
		Crafty.init(Game.pixelWidth(), Game.pixelHeight(), "canv");
		Crafty.background('rgb(0,0,0)');
		Crafty.bind("EnterFrame", Game.update);
		var screen = Crafty.e("Screen").size(0,0, Game.pixelWidth(), Game.pixelHeight());
		Crafty.bind("ScreenMouseDown", Game.mouseDown);
		Crafty.bind("ScreenMouseUp", Game.mouseUp);
		Game.start();
	},
	start: function() {
		var miner = Crafty.e("Miner").at(20, 20);
		miner.speed(0.15);
		miner.activateControl();
	}
}
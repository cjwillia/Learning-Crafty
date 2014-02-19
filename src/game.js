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
		width: 30,
		height: 18,
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
			var action = ((MouseTracker.mouseDown) ? "ScreenMouseDown" : "ScreenMouseUp");
			Crafty.trigger(action);
		}
		this.lastMouse = MouseTracker.mouseDown;
	},
	updatePositions: function() {
		Crafty("Accel").each(function() { this.accelMove(); });
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
		Game.start();
	},
	start: function() {
		/*
		var miner = Crafty.e("Miner").at(20, 20);
		miner.speed(0.15);
		var gun = Crafty.e("Gun");
		miner.inventory.push(gun);
		gun.setOwnership(miner[0]);
		miner.setWeapon(0);
		miner.activateControl();
		*/
		var mover = Crafty.e("RotaryMover").at(80, 80);
	}
};
Crafty.c("FourwayAccelControl", {
	init: function() {
		this.requires("Accel, ActiveControl, Keyboard, FPS");
		this.throttling = false;
	},
	speed: function(spd) {
		this.accelRate = spd;
		this.actions = {};
		this.actions[Crafty.keys.LEFT_ARROW] = [-(spd), 0];
		this.actions[Crafty.keys.RIGHT_ARROW] = [spd, 0];
		this.actions[Crafty.keys.UP_ARROW] = [0, -(spd)];
		this.actions[Crafty.keys.DOWN_ARROW] = [0, spd];
		this.onKeyControl(this.throttleDown, this.throttleUp);
		return this;
	},
	throttle: function() {
		for(action in this.actions) {
			if(this.isDown(parseInt(action))) {
				var ax = this.actions[action][0];
				var ay = this.actions[action][1];
				this.accelerate(ax, ay);
			}
		}
	},
	throttleDown: function() {
		if(this.throttling) {
			return;
		}
		this.bind("EnterFrame", this.throttle);
		this.throttling = true;
	},
	throttleUp: function() {
		var keyStillDown = false;
		for(action in this.actions) {
			if(this.isDown(parseInt(action))) {
				keyStillDown = true;
			}
		}
		if(keyStillDown) {
			return;
		}
		this.unbind("EnterFrame");
		this.throttling = false;
	},
	stop: function() {

	}
});
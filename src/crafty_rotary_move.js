Crafty.c("Rotary", {
	init: function() {
		this.requires("Accel, ActiveControl");
		this.attr({
			currentDirection: 90
		});
		this.onKeyControl(this.controlDown, this.controlUp);
		console.log(this);
	},
	rotary: function(rate, accel) {
		this.origin("center");
		this.rate = rate;
		this.accelRate = accel;
		this.dist = false;
		this.activateControl();
		return this;
	},
	simple: function(rate, dist) {
		this.origin("center");
		this.rate = rate;
		this.dist = dist;
		this.accelRate = false;
		this.activateControl();
		return this;
	},
	controlDown: function(event) {
		console.log("keydwn");
		this.bind("EnterFrame", this.update);
	},
	controlUp: function(event) {
		console.log("keyup");
		if(this.isDown("LEFT_ARROW") || this.isDown("RIGHT_ARROW") || this.isDown("UP_ARROW") || this.isDown("DOWN_ARROW")) {
			return;
		}
		else {
			this.unbind("EnterFrame", this.update);
			if(this.dist) {
				this._velocity(0, 0);
			}
		}
	},
	update: function() {
		console.log("update");
		if(this.isDown("LEFT_ARROW")) {
			this.rotation = this._rotation - this.rate;
		}
		else if(this.isDown("RIGHT_ARROW")) {
			this.rotation = this._rotation + this.rate;
		}
		if(this.isDown("UP_ARROW") || this.isDown("DOWN_ARROW")) {
			var xTraj;
			var yTraj;
			var v;
			var rad = Math.PI / 180;
			if(this._rotation % 90 !== 0) {
				xTraj = Math.cos(this._rotation * rad);
				yTraj = Math.sin(this._rotation * rad);
			}
			else if(this._rotation % 180 === 0) {
				xTraj = Math.cos(this._rotation * rad);
				yTraj = 0;
			}
			else {
				xTraj = 0;
				yTraj = Math.sin(this._rotation * rad);
			}
			if(this.accelRate) {
				v = new Crafty.math.Vector2D(xTraj, yTraj);
				v.scaleToMagnitude(this.accelRate);
				if(this.isDown("UP_ARROW"))
					this.accelerate(v.x, v.y);
				else if(this.isDown("DOWN_ARROW"))
					this.accelerate(-v.x, -v.y);
			}
			else {
				v = new Crafty.math.Vector2D(xTraj, yTraj);
				v.scaleToMagnitude(this.dist);
				if(this.isDown("UP_ARROW"))
					this._velocity(v.x, v.y);
				else if(this.isDown("DOWN_ARROW"))
					this._velocity(-v.x, -v.y);
			}
		}
	}
});
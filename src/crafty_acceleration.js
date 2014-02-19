Crafty.c("Accel", {
	init: function() {
		this.requires("Grid");
		this.attr({
			xVel: 0,
			yVel: 0
		});
	},
	_velocity: function(x, y) {
		this.attr({
			xVel: x,
			yVel: y
		});
	},
	accelerate: function(x, y) {
		var v = new Crafty.math.Vector2D(this.xVel + x, this.yVel + y);
		var res = false;  //returns true if the speed is maxed.
		if(v.magnitude() >= this.max_speed) {
			v.scaleToMagnitude(this.max_speed);
			res = true;
		}
		this._velocity(v.x, v.y);
		return res;

	},
	accelMove: function() {
		this.x = this._x + this.xVel;
		this.y = this._y + this.yVel;
	}
});
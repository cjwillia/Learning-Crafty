Crafty.c("Bullet", {
	init: function() {
		this.requires("Accel, Color").color("rgb(100,0,0)");
		this.attr({
			w: 5,
			h: 5
		});
		this.max_speed = 1;
	},
	heading: function(x, y) {
		this.accelerate(x, y);
		return this;
	},
	setOwnership: function(owner) {
		this.owner = owner;
		return this;
	}
});
Crafty.c("MouseFire", {
	init: function() {
		this.requires("ActiveControl, Grid");
		this.auto = false;
	},
	auto: function(rate) {
		this.auto = true;
		this.ROF = rate;
		this.n = 0;
	},
	mobile: function() {
		this.requires("Accel");
	},
	triggerDown: function() {
		this.firing = true;
		this.bind("MousePos", this.trigger);
	},
	triggerUp: function() {

	},
	trigger: function() {
		if(this.n % ROF === 0) {
			this.n = 1;
			this.trigger("ShotFired", {x: Crafty.lastEvent})
		}
	},
	fire: function() {

	}
});
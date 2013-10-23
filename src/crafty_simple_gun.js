Crafty.c("Gun", {
	init: function() {
		this.requires("MouseTrigger, Cooldown");
	},
	setOwnership: function(ownerId) {
		this.ownerId = ownerId;
	},
	use: function() {
		this.safetyOff();
		this.bind("MouseTriggerDown", this.fire);
	},
	putAway: function() {
		this.safetyOn();
		this.unbind("MouseTriggerDown", this.fire);
	},
	fire: function() {
		if(!this.cooldownActive) {
			var destx = MouseTracker.position.x - 8;
			var desty = MouseTracker.position.y - 8;
			var ref = Crafty(this.ownerId).center();
			var o = Crafty(this.ownerId)
			console.log("Owner XY: " + o.x, o.y);
			console.log("Owner Center: " + o.center()[0], o.center()[1]);
			var headingx = destx - ref[0];
			var headingy = desty - ref[1];
			Crafty.e("Bullet").setOwnership(this.ownerId).at(ref[0], ref[1]).heading(headingx, headingy);
			//this.startCooldown();
		}
	}
});
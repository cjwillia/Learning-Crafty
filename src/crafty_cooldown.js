Crafty.c("Cooldown", {
	init: function() {
		this.cooldownTime = 0;
		this.cooldownTimer = 0;
		this.active = false;
	},
	time: function(t) {
		this.cooldownTime = t;
	},
	start: function() {
		this.active = true;
		setInterval(this.tick, 100);
	},
	tick: function() {
		this.cooldownTimer += 0.1;
		if(this.cooldownTime <= this.cooldownTimer) {
			this.active = false;
			this.cooldownTimer = 0;
		}
		else {
			setInterval(this.tick, 100);
		}
	}
});
Crafty.c("Cooldown", {
	init: function() {
		this.cooldownTime = 0;
		this.cooldownTimer = 0;
		this.cooldownActive = false;
	},
	cooldowntime: function(t) {
		this.cooldownTime = t;
	},
	startCooldown: function() {
		this.cooldownActive = true;
		setInterval(this.tick, 100);
	},
	tickCooldown: function() {
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
Crafty.c("Cooldown", {
	init: function() {
		this.cooldownTime = 0;
		this.cooldownTimer = 0;
		this.cooldownActive = false;
	},
	cooldown: function(t) {
		this.cooldownTime = t;
	},
	startCooldown: function() {
		this.cooldownActive = true;
		var t = this;
		var fn = function() {
			t.tickCooldown();
		}
		setTimeout(fn, 100);
	},
	tickCooldown: function() {
		console.log("tick", this.cooldownTimer, this.cooldownTime);
		this.cooldownTimer += 0.1;
		if(this.cooldownActive === false) {
			return;
		}
		if(this.cooldownTime <= this.cooldownTimer) {
			this.cooldownActive = false;
			this.cooldownTimer = 0;
		}
		else {
			var t = this;
			var fn = function() {
				t.tickCooldown();
			}
			setTimeout(fn, 100);
		}
	}
});
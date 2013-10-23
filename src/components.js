Crafty.c("Screen", {
	init: function() {
		this.requires("Grid", "Mouse");	
	},
	size: function(x, y, w, h) {
		this.attr({
			x: x,
			y: y,
			w: w,
			h: h
		});
	}
});

Crafty.c("Grid", {
	init: function() {
		this.requires("2D, Canvas");
	},
	at: function(x, y) {
		if(arguments.length > 0) {
			this.attr({
				x: x,
				y: y
			});
			return this;
		}
		else {
			return [this._x, this._y];
		}
	},
	center: function() {
		var cx = this._x + (this._w / 2);
		var cy = this._y + (this._h / 2);
		return [cx, cy];
	}
});



Crafty.c("Miner", {
	init: function() {
		this.requires("Color, FourwayAccelControl, ActiveControl")
		.color('rgb(0,100,0)')
		.attr({
			w: 32,
			h: 32
		});
		this.activeWeapon = 0;
	},
	inventory: [],
	setWeapon: function(n) {
		this.activeWeapon = this.inventory[n];
		this.activeWeapon.use();
	}
});

Crafty.c('Center', {
	init: function() {
		this.attr({
			x: Crafty.stage.elem.clientWidth / 2 - this.w / 2,
			y: Crafty.stage.elem.clientHeight / 2 - this.h / 2
		});
	}
});
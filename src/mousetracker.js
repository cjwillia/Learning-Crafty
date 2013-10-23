//Mouse Tracker

var MouseTracker = {
	position: {
		x: 0,
		y: 0
	},
	mouseDown: false,
	onMove: function(e) {
		this.position.x = e.pageX;
		this.position.y = e.pageY;
	},
	onDown: function() {
		this.mouseDown = true;
	},
	onUp: function() {
		this.mouseDown = false;
	},
	init: function() {
		var that = this;
		$(document).mousemove(function(e) {
			that.onMove(e);
		});
		$(document).mousedown(function() {
			that.onDown();
		});
		$(document).mouseup(function() {
			that.onUp();
		});
		return that;
	}
}
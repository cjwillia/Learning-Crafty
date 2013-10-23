Crafty.c("ActiveControl", {
	init: function() {
		this.requires("Keyboard");
		this.controlActive = false;
	},
	onMouseControl: function(callbackDown, callbackUp) {
		if(this.controlActive) {
			return "Please deactivate control before editing controls.";
		}
		this.processMouseDown = callbackDown;
		this.processMouseUp = callbackUp;
		return this;
	},
	onKeyControl: function(callbackDown, callbackUp) {
		if(this.controlActive) {
			return "Please deactivate control before editing controls.";
		}
		this.processKeyDown = callbackDown;
		this.processKeyUp = callbackUp;
		return this;
	},
	activateControl: function() {
		this.bind("KeyDown", this.processKeyDown);
		this.bind("KeyUp", this.processKeyUp);
		this.bind("MouseDown", this.processMouseDown);
		this.bind("MouseUp", this.processMouseUp);
		this.controlActive = true;
		return this;
	},
	deactivateControl: function() {
		this.unbind("KeyDown", this.processKeyDown);
		this.unbind("KeyUp", this.processKeyUp);
		this.unbind("MouseDown", this.processMouseDown);
		this.unbind("MouseUp", this.processMouseUp);
		this.controlActive = false;
		return this;
	}
});
Crafty.c("ActiveControl", {
	init: function() {
		this.requires("Keyboard");
		this.controlActive = false;
	},
	addMouseControl: function(callbackDown, callbackUp) {
		var fnDown = this.processMouseDown;
		var fnUp = this.processMouseUp;
		this.unbind("ScreenMouseDown", this.processMouseDown);
		this.unbind("ScreenMouseUp", this.processMouseUp);
		this.processMouseDown = function() {
			fnDown();
			callbackDown();
		}
		this.processMouseUp = function() {
			fnUp();
			callbackUp();
		}
		this.bind("ScreenMouseDown", this.processMouseDown);
		this.bind("ScreenMouseUp", this.processMouseUp);
	},
	addKeyControl: function(callbackDown, callbackUp) {
		var fnDown = this.processKeyDown;
		var fnUp = this.processKeyUp;
		this.unbind("KeyDown", this.processKeyDown);
		this.unbind("KeyUp", this.processKeyUp);
		this.processKeyDown = function(e) {
			fnDown(e);
			callbackDown(e);
		}
		this.processKeyUp = function(e) {
			fnUp(e);
			callbackUp(e);
		}
		this.bind("KeyDown", this.processKeyDown);
		this.bind("KeyUp", this.processKeyUp);
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
		this.bind("ScreenMouseDown", this.processMouseDown);
		this.bind("ScreenMouseUp", this.processMouseUp);
		this.controlActive = true;
		return this;
	},
	deactivateControl: function() {
		this.unbind("KeyDown", this.processKeyDown);
		this.unbind("KeyUp", this.processKeyUp);
		this.unbind("ScreenMouseDown", this.processMouseDown);
		this.unbind("ScreenMouseUp", this.processMouseUp);
		this.controlActive = false;
		return this;
	}
});
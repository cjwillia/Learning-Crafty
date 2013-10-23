Crafty.c("MouseTrigger", {
	init: function() {
		this.requires("ActiveControl, Grid");
		this.onMouseControl(this.triggerDown, this.triggerUp);
	},
	triggerDown: function() {
		this.trigger("MouseTriggerDown");
	},
	triggerUp: function() {
		this.trigger("MouseTriggerUp");
	},
	safetyOff: function() {
		this.activateControl();
	},
	safetyOn: function() {
		this.deactivateControl();
	}
});
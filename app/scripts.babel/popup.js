angular.module('app', [])
  .controller('PopupController', function() {
  	this.now = new Date();
  	this.minsToSleep = 15;
	this.wakeUpAt = function(time){
		return time + (60000 * 5 * 90) + (60000 * this.minsToSleep);
	}
  });
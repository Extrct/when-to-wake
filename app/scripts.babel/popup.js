'use strict';

angular.module('app', ['ui.bootstrap']).controller('PopupController', function () {
	this.tab = 1;
	this.now = new Date();
	var d = new Date();
	d.setHours(8);
	d.setMinutes(0);
	this.selTime = d;
	this.minsToSleep = 15;

	this.sleepAt = function (){

	};

	this.wakeUpAt = function (time, offset) {
		return time + 60000 * offset * 90 + 60000 * this.minsToSleep;
	};
	this.setTab = function (tabId) {
	    this.tab = tabId;
	};
	this.isSet = function (tabId) {
	    return this.tab === tabId;
	};
});

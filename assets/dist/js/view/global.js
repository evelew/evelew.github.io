Global.pageReady = function (callback) {
	"use strict";
	if (document.readyState != 'loading') {
		callback();
	} else {
		document.addEventListener('DOMContentLoaded', callback);
	}
};

Global.loader = function () {
	var home = new Global();
	home.init();
};

function Global() {}

Global.prototype = {
	constructor: Global,
	init: function () {
		"use strict";

		var header = new Header();
		header.init();

		var parallax = new Parallax();
		parallax.init();

	}
}

Global.pageReady(Global.loader);
Global.extend = function (target, source) {
	target = target || {};
	for (var prop in source) {
		if (typeof source[prop] === 'object') {
			target[prop] = extend(target[prop], source[prop]);
		} else {
			target[prop] = source[prop];
		}
	}
	return target;
};

Global.ready = function (fn) {
	if (document.readyState === "interactive" || document.readyState === "complete") {
		fn();
	} else {
		document.addEventListener("DOMContentLoaded", fn);
	}
};
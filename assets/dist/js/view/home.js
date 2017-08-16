Home.pageReady = function (callback) {
	"use strict";
	if (document.readyState != 'loading') {
		callback();
	} else {
		document.addEventListener('DOMContentLoaded', callback);
	}
};

Home.loader = function () {
	var home = new Home();
	home.init();
};

function Home() {}

Home.prototype = {
	constructor: Home,
	init: function () {
		"use strict";
		autosize(document.querySelectorAll('textarea'));
	}
}

Home.pageReady(Home.loader);
Home.extend = function (target, source) {
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

Home.ready = function (fn) {
	if (document.readyState === "interactive" || document.readyState === "complete") {
		fn();
	} else {
		document.addEventListener("DOMContentLoaded", fn);
	}
};
function Parallax() {

}

Parallax.prototype = {
	constructor: Parallax,
	init: function () {
		"use strict";
		var _this = this;
		$(window).on('scroll', function () {
			_this._parallax();
		});
	},

	_parallax: function () {
		"use strict";

		var parallaxImage = $('.js-parallaxImage');
		var position = $(document).scrollTop();
		parallaxImage.css('top', position / 2);
	}
}
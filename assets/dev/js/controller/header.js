function Header() {
	this.header = document.querySelector('.js-header');
}

Header.prototype = {
	constructor: Header,
	init: function () {
		"use strict";
		var _this = this;
		$(window).on('scroll', function () {
			if (window.pageYOffset > 150) {
				_this._addSmallClass();
			} else {
				_this._removeSmallClass();
			}
		});

		document.querySelector('.js-openMenuButton').addEventListener('click', function () {
			if (document.querySelector('body').classList.contains('menu--isOpen')) {
				_this._closeMenu();
			} else {
				_this._openMenu();
			}
		});
	},

	_addSmallClass: function () {
		"use strict";
		this.header.classList.add('Header--small');
	},

	_removeSmallClass: function () {
		"use strict";
		this.header.classList.remove('Header--small');
	},

	_openMenu: function () {
		"use strict";
		document.querySelector('body').classList.add('menu--isOpen');
	},

	_closeMenu: function () {
		"use strict";
		document.querySelector('body').classList.remove('menu--isOpen');
	}
}
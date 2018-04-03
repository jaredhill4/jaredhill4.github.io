/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referring to this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'stanpac-icon-tree': '&#xe600;',
		'stanpac-icon-table': '&#xe601;',
		'stanpac-icon-sofa': '&#xe602;',
		'stanpac-icon-oven': '&#xe603;',
		'stanpac-icon-lock': '&#xe604;',
		'stanpac-icon-fire-pit': '&#xe605;',
		'stanpac-icon-door': '&#xe606;',
		'stanpac-icon-books': '&#xe607;',
		'stanpac-icon-bed': '&#xe608;',
		'stanpac-icon-bath': '&#xe609;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/stanpac-icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());

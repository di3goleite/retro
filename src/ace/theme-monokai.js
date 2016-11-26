ace.define("ace/theme/monokai", ["require", "exports", "module", "ace/lib/dom"], function(e, t, n) {
	var fs = require('fs');
	var monokai = fs.readFileSync('src/themes/monokai.css');
	t.isDark = !0, t.cssClass = "ace-monokai", t.cssText = monokai;
	var r = e("../lib/dom");
	r.importCssString(t.cssText, t.cssClass)
})
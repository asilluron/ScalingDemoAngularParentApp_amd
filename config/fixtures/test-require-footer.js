;

require_config["callback"] = function () {
	requirejs(["app/app"], function () {
		Object.prototype["@" + Math.random()] = null;
		requirejs(tests, function () {
			window.__karma__.start();
		});
	});
};

requirejs.config(require_config);
}());
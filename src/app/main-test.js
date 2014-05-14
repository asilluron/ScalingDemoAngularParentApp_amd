//Auto-Generated, DO NOT EDIT
(function () {
        "use strict";

        var tests = [];
        for (var file in window.__karma__.files) {
            if (window.__karma__.files.hasOwnProperty(file)) {
                if (/^\/base\/spec\//i.test(file) && /Spec\.js$/.test(file)) {
                    tests.push(file);
                }
            }
        }

        var require_config =
{"baseUrl":"/base/src","deps":["angular","angular-mocks"],"paths":{"angular":"vendor/angular/angular","angular-ui-router":"vendor/angular-ui-router/angular-ui-router","blog-resources":"vendor/blog-resources/blog-resources","blog-content":"vendor/blog-content/blog-content"},"shim":{"angular-mocks":["angular"]}}
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
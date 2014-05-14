define(["app/app-controller", "blog-content/app", "blog-resources/resources"],
	function (BlogAppCtrl) {
		var blogApp = angular.module("blog", ["blogcontent", "blog-resources", "ui.router"])
			.controller("BlogAppCtrl", BlogAppCtrl);

		return blogApp;
	});
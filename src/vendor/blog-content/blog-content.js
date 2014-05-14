define('blog-content/controllers/BlogAggregatorCtrl',[], function () {
	function BlogAggregatorCtrl($scope, Blogs) {
		$scope.Blogs = Blogs.query();
		$scope.test = 3;
	}

	return ["$scope", "Blogs", BlogAggregatorCtrl];
});
define('blog-content/controllers',["blog-content/controllers/BlogAggregatorCtrl"], function(BlogAggregatorCtrl){
	angular.module("blogcontent.controllers", []).
		controller("BlogAggregatorCtrl", BlogAggregatorCtrl);
});
define('blog-content/app',["blog-content/controllers"], function () {
	angular.module("blogcontent", ["blogcontent.controllers", "blog-resources"]);
});

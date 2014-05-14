define(["app/app"], function (blogApp) {
    blogApp.config(["$stateProvider",
        function ($stateProvider) {
            $stateProvider
                .state('index', {
                    url: "",
                    views: {
                        "blog-main": {
                            templateUrl: "app/components/blog-content/aggregates/aggregates.html",
                            controller: 'BlogAggregatorCtrl'
                        },
                        "blog-sidebar": {
                            templateUrl: "app/components/blog-content/archives/archives.html"
                        }
                    }
                });
        }
    ]);
});
define(['app/app'], function () {

    angular.element(document).ready(function () {
        require([
            'app/app',
            'app/mainpage/mainpage'
        ], function () {
            angular.bootstrap(document, ['blog']);

        });

    });


});

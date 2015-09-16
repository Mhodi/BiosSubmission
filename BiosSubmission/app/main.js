(function () {
    'use strict';

    angular
        .module('formApp')
        .controller('Main', main);

    function formController($scope, $http) {
        $scope.formData = {};
        $scope.url = 'http://localhost:15794/api/biosSubmission';
        $scope.formData.legacyboot = true;
        $scope.formData.secureboot = true;
        $scope.formData.emailadds = "psg-dfw-dev@hp.com, ConsumerVision@hp.com";
        $scope.formData.filelocation = " ";
        //process the form
        $scope.processForm = function () {
            $http.post($scope.url, $scope.formData);
        };
    }

})();
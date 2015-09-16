// define angular module/app
var formApp = angular.module('formApp', []);


function formController($scope, $http) {
    //create a blank object to hold form info
    //$scope will allow this to pass between controller and view
    $scope.formData = {};
    //create an object to hold the url of the server receiving the data. i.e. //Hayworth17:8080/api/biossubmit
    $scope.url = 'http://localhost:15794/api/biosSubmission';
    $scope.formData.legacyboot = true;
    $scope.formData.secureboot = true;
    $scope.formData.emailadds = "psg-dfw-dev@hp.com, ConsumerVision@hp.com";
    $scope.formData.filelocation = " ";
    //process the form
    $scope.processForm = function() {
        $http.post($scope.url, $scope.formData);
    };
}


//formApp.directive('menuDirective', function () {
//    var template = '<li ng-click"{{data.fieldname}}={{data.textentry}}"><span>{{data.textlabel}}</span></li>';
//    return {
//        template: template,
//        scope: {
//            data: '='
//        },
//        link: function (scope, element, attrs) {
//        }
//    };
//})

//formApp.controller('FileLocCtrl', function ($scope) {
//    $scope.fileLocData = [
//		{ 'fieldname': 'formData.filelocation', 'textentry': '\\\\15.1.172.16\\software_components\\System_BIOS\\All-CommercialProducts\\', 'textlabel': 'Commercial Root' },
//		{ 'fieldname': 'formData.filelocation', 'textentry': '\\\\15.1.172.16\\software_components\\System_BIOS\\All-CPC-BasedProducts\\', 'textlabel': 'Consumer Root' },
//		{ 'fieldname': 'formData.filelocation', 'textentry': '\\\\15.1.172.16\\software_components\\System_BIOS\\notebooks\\', 'textlabel': 'Notebooks Root' },
//		{ 'fieldname': 'formData.filelocation', 'textentry': '\\\\15.1.172.16\\software_components\\System_BIOS\\RPOS\\', 'textlabel': 'RPOS Root' },
//		{ 'fieldname': 'formData.filelocation', 'textentry': '\\\\15.1.172.16\\software_components\\System_BIOS\\Thin_Client\\', 'textlabel': 'Thin Client Root' },
//		{ 'fieldname': 'formData.filelocation', 'textentry': '\\\\15.1.172.16\\software_components\\System_BIOS\\Workstation\\', 'textlabel': 'Workstation Root' }
//    ];
//});

// create angular controller and pass in $scope and $http









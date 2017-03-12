(function(){
    "use strict";
    angular
        .module('testScripts')
        .component('addTestComp',{
            templateUrl: 'src/test-scripts/add-test-script.tmpl.html',
            controller: addTestCtrl
        });

    function addTestCtrl($stateParams, applicationSvc, testScriptSvc, $location){
        var vm = this;
        vm.test = {};
        vm.applications = [];
        vm.app = {};
        if($stateParams.appId){
            applicationSvc.getApp($stateParams.appId).then(function(app){
                vm.app = app.data;
            });
        } else {
            applicationSvc.getAllApps().then(function(apps){
                vm.applications = apps;
            });
        }
        vm.saveTest = function(){
            if(vm.app && vm.test && vm.test.file){
                testScriptSvc.createTest(vm.app, vm.test).then(function(){
                    var url = '/tests/' + vm.app._id;
                    $location.path(url);
                });
            }
        }
    }
}());
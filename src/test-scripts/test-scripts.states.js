(function(){
    "use strict";
    angular
        .module('testScripts')
        .config(configScripts);

    function configScripts($stateProvider){
        $stateProvider
            .state("addTest",{
                url: "/addTest/:appId",
                template: '<add-test-comp></add-test-comp>',
                component: 'addTestComp'
            }) .state('test',{
                url: '/tests/:testId',
                template: '<view-test-comp></view-test-comp>',
                component: 'viewTestComp'
            });
    }
}());
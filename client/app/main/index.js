;(function () {
    'use strict'

    var angular = window.angular

    angular
        .module('lefttime.app')
        .config(function ($stateProvider) {
            $stateProvider
                .state('main', {
                    abstract: true,
                    templateUrl: 'app/main/main.html',
                    controller: 'MainCtrl',
                    controllerAs: 'vm',
                    authenticate: true
                })
        })
})()

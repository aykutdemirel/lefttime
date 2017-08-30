'use strict';

angular.module('lefttime.app')
    .filter('to_trusted', function ($sce) {
        return function(text) {
            return $sce.trustAsHtml(text);
        }
    });

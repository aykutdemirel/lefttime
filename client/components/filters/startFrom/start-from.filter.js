'use strict';

angular.module('lefttime.app')
.filter('startFrom', function () {
    return function (input, pageNum, pageSize) {
        if (input) {
            return input.slice((pageNum-1)*pageSize, ((pageNum-1)*pageSize) + pageSize)
        }
        return []
    }
})
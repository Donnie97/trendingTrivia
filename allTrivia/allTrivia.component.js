angular.module('trivia').component('trivias', { //46C
    templateUrl: 'allTrivia/question.html',
    controllerAs: 'allTriviaCtrl', //48D
    bindings: {
        item: '<',
        action: '&',
        actionLabel: '@'
    },

    controller: function (mainSrvc, $scope, $log) {  //46E 46F 49G 49F
        mainSrvc.getAllTrivia().then(function (response) {
            $scope.allTrivias = response.data; //50C
            $log.info('Success') //52E
        })
    }
})
angular.module('trivia').service('mainSrvc', function( $http ) { //52D 49D 
    
      this.getAllTrivia = function() {
          return $http({
              method: 'GET',
              url: 'https://practiceapi.devmountain.com/api/trivia/questions'
          })
      }
  
      this.getCertainTrivia = function() { //49C
          return $http({
              method: 'GET',
              url: 'https://practiceapi.devmountain.com/api/trivia/questions/difficulty/:difficulty'
          })
      }
  });
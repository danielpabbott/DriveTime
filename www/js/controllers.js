angular.module('starter.controllers', [])

.controller('FlightsCtrl', function($scope, flightsFactory) {
  flightsFactory.getFlights().then(function(data) {
    $scope.flightData = data;
  })
})

.controller('DashboardCtrl', function($scope) {})

.controller('ConcertsCtrl', function($scope) {})

.controller('SportsCtrl', function($scope) {})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {})

.controller('LoginCtrl', function($scope, LoginService, $ionicPopup, $state) {
    $scope.data = {};

    $scope.login = function() {
      LoginService.loginUser($scope.data.username, $scope.data.password).success(function(data) {
        $state.go('tab.dashboard');
      }).error(function(data) {
        var alertPopup = $ionicPopup.alert({
          title: 'Login failed!',
          template: 'Please check your credentials!'
        });
      });
    }
});

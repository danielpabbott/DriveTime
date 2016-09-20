angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  .state('tab.dashboard', {
    url: '/dashboard',
    views: {
      'tab-dashboard': {
      templateUrl: 'templates/tab-dashboard.html',
      controller: 'DashboardCtrl'
      }
    }
  })

  .state('tab.dashboard-redrocks', {
    url: '/redrocks',
    views: {
      'tab-dashboard': {
        templateUrl: 'templates/redrocks.html',
        controller: 'RedRocksCtrl'
      }
    }
  })

  .state('tab.dashboard-fiddlers', {
    url: '/fiddlers',
    views: {
      'tab-dashboard': {
        templateUrl: 'templates/fiddlers.html',
        controller: 'FiddlersCtrl'
      }
    }
  })

  .state('tab.flights', {
    url: '/flights',
    views: {
      'tab-flights': {
        templateUrl: 'templates/tab-flights.html',
        controller: 'FlightsCtrl'
      }
    }
  })

  .state('tab.concerts', {
      url: '/concerts',
      views: {
        'tab-concerts': {
          templateUrl: 'templates/tab-concerts.html',
          controller: 'ConcertsCtrl'
        }
      }
    })

  .state('tab.concerts-redrocks', {
    url: '/redrocks',
    views: {
      'tab-concerts': {
        templateUrl: 'templates/redrocks.html',
        controller: 'RedRocksCtrl'
      }
    }
  })

  .state('tab.concerts-fiddlers', {
    url: '/fiddlers',
    views: {
      'tab-concerts': {
        templateUrl: 'templates/fiddlers.html',
        controller: 'FiddlersCtrl'
      }
    }
  })
  .state('tab.sports', {
    url: '/sports',
    views: {
      'tab-sports': {
        templateUrl: 'templates/tab-sports.html',
        controller: 'SportsCtrl'
      }
    }
  })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: "LoginCtrl"
  })

  .state('register', {
    url: '/register',
    templateUrl: 'templates/register.html'
  });

  $urlRouterProvider.otherwise('/login');

});

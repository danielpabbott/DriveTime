angular.module('starter.services', [])

.service('LoginService', function($q) {
  return {
    loginUser: function(name, pw) {
      var deferred = $q.defer();
      var promise = deferred.promise;

      if (name == 'daniel' && pw == '1234') {
        deferred.resolve('Welcome ' + name + '!');
      } else {
        deferred.reject('Wrong credentials.')
      }
      promise.success = function(fn) {
        promise.then(fn);
        return promise;
      }
      promise.error = function(fn) {
        promise.then(null, fn);
        return promise;
      }
      return promise;
    }
  }
})

.factory('flightsFactory', flightsFactory);
flightsFactory.$inject = ['$http'];
function flightsFactory ($http) {
  return {
    getFlights: getFlights
  };
  function getFlights() {
    airportCode = "DEN";
    date = "2016/9/14/15";
    appId = "486611b7";
    appKey = "8ed4dc8b785277ad16c77c1d0e173ebc";
    numHours = 6;
    return $http.get("https://galvanize-cors-proxy.herokuapp.com/"+
      "https://api.flightstats.com/flex/flightstatus/rest/v2/json/airport/status/"+
      airportCode+"/arr/"+date+"?appId="+appId+"&appKey="+
      appKey+"&utc=false&numHours="+numHours)
      .then(function(data) {
      // console.log(data);
      return data;
    })
  }
}

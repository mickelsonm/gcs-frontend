angular.module('angulartest', [])
  .constant('AppConfig', {
    APIURL: 'http://192.168.99.100:8080'
  })
  .factory('ClientService', function($http, $q, AppConfig) {
    return {
      getAllClients: function() {
        var def = $q.defer();
        $http({
          method: 'get',
          url: AppConfig.APIURL + '/clients'
        }).then(function(resp) {
          def.resolve(resp.data);
        }).catch(function() {
          def.resolve(null);
        })
        return def.promise;
      }
    };
  })
  .controller('AppController', ['$scope', '$http', 'ClientService',
    function($scope, $http, ClientService) {
      ClientService.getAllClients().then(function(resp) {
        $scope.clients = resp;
      }).catch(function() {
        $scope.clients = [];
      });
    }
  ]);

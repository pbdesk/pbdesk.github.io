(function () {
    'use strict';

    var id = 'DataSvcApp';

    // TODO: Inject modules as needed.
    var DataSvcApp = angular.module('DataSvcApp', ['jmdobry.angular-cache']);

    // Execute bootstrapping code and any dependencies.
    // TODO: inject services as needed.
    DataSvcApp.run(['$q', '$rootScope',
        function ($q, $rootScope) {

        }]);
})();


(function () {
    'use strict';

    var serviceId = 'DSFactory';

    // TODO: replace app with your module name
    angular.module('DataSvcApp').factory(serviceId, ['$http', '$q', '$angularCacheFactory', DSFactory]);

    function DSFactory($http, $q, $angularCacheFactory) {
        // Define the functions and properties to reveal.

        var baseUrl = "http://api.pbdesk.com/v1/";



        var PBDeskCache = $angularCacheFactory('PBDeskCache', {
            capacity: 10,
            deleteOnExpire: 'aggressive',
            maxAge: 3600000,
            cacheFlushInterval: 3600000,
            storageMode: 'localStorage'

        });
        var CacheKey = "pbdeskApi/"

        var getData = function (svcObj) {
            var deferred = $q.defer();
            var data = PBDeskCache.get(CacheKey + svcObj.CacheKey);
            if (data != null) {
                deferred.resolve(data);
            }
            else {
                $http.get(baseUrl + svcObj.apiUrl)
                .success(function (result, status, headers, config) {
                    PBDeskCache.put(CacheKey + svcObj.CacheKey, result);
                    deferred.resolve(result);
                })
                .error(function (result, status, headers, config) {
                    deferred.reject(result, status);
                });
            }
            return deferred.promise;
        }

        var service = {
            //Items: items,
            GetData: getData
        };

        return service;

    }
})();
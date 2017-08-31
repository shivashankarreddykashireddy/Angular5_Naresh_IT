app.service("homeService",homeService);
function homeService($http,$localStorage) {

    this.staticData = function () {
        return $http.post("http://localhost:8080/static",{"token":$localStorage.poc.data.token})
                .then(function (posRes) {
           return posRes.data.products;
        },function (errRes) {
            return errRes;
        });
    };

    this.mysqlData = function () {
        return $http.post("http://localhost:8080/mysql",{"token":$localStorage.poc.data.token})
            .then(function (posRes) {
                return posRes.data;
            },function (errRes) {
                return errRes;
            });
    };


    this.mongoData = function () {
        return $http.post("http://localhost:8080/mongodb",{"token":$localStorage.poc.data.token})
            .then(function (posRes) {
                return posRes.data;
            },function (errRes) {
                return errRes;
            });
    };
}
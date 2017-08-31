app.controller("aboutController",aboutController);
function aboutController($scope,homeService) {
    homeService.mysqlData().then(function (res) {
        $scope.result = res;
    });
};
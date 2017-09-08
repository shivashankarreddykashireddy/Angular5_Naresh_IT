app.controller("portfolioController",portfolioController);
function portfolioController($scope,homeService) {
    homeService.getMongoData().then(function (res) {
        $scope.result = res;
    });
};
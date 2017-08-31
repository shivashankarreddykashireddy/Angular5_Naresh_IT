app.controller("portfolioController",portfolioController);
function portfolioController($scope,homeService) {
    homeService.mongoData().then(function (res) {
        $scope.result = res;
    });
};
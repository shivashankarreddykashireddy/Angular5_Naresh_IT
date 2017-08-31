app.controller("contactController",contactController);
function contactController($scope,homeService) {
    homeService.staticData().then(function (res) {
        $scope.result = res;
    });
};
app.controller("homeController",homeController);
function homeController($scope,$localStorage,$location) {
    $scope.logout = function () {
        delete $localStorage.poc;
        $location.path("/login");
    };
};
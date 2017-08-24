app.controller("loginController",loginController);
function loginController($scope,loginService) {
    $scope.obj = {};
    $scope.login = function () {
          loginService.authenticate($scope.obj).then(function (res) {
            console.log(res);
          });
    };
};
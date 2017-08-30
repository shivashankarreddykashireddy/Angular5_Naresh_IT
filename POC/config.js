app.run(run).config(config);

function run($rootScope,$localStorage,$location) {
    $rootScope.$on("$stateChangeStart",function (event) {
        if(!$localStorage.poc){
            $location.path("/login");
        }
    });
};


function config($stateProvider,$urlRouterProvider) {
    $stateProvider.state("login",{
        url:"/login",
        templateUrl:"templates/login.html",
        controller:"loginController"
    })
        .state("home",{
            url:"/home",
            templateUrl:"templates/home.html",
            controller:"homeController"
        });

    $urlRouterProvider.otherwise("/login");
}
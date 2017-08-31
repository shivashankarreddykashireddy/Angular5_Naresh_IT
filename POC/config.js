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
        })
        .state("home.contact",{
            url:"/contact",
            templateUrl:"templates/contact.html",
            controller:"contactController"
        })
        .state("home.about",{
            url:"/about",
            templateUrl:"templates/about.html",
            controller:"aboutController"
        })
        .state("home.portfolio",{
            url:"/portfolio",
            templateUrl:"templates/portfolio.html",
            controller:"portfolioController"
        });

    $urlRouterProvider.otherwise("/login");
}
app.directive("classType",classType);
function classType() {
    return{
        restrict:"C",
        template:"<div class='jumbotron'>Class Type Custom Directive !</div>"
    }
}
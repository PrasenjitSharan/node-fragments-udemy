angular.module('TestApp', []);

angular.module('TestApp')
    .controller('MainController', ctrlFn);

function ctrlFn() {
    this.people = clientPeople;
}
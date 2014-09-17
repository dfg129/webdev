var app = angular.module('app', ['ui.router', 'ui.grid', 'ui.grid.resizeColumns'])
  .config(function ($stateProvider, $urlRouterProvider) {
   
    $urlRouterProvider.otherwise('/home');
                                  
    var home = {
      name: 'Home',
      url: '/home',
      templateUrl: '/partials/home.html'

    },
    preferences = {
          name: 'preferences',
          url: '/preferences',
          templateUrl: '/partials/preferences.html'
    },
    pods = {
          name: 'Pods',
          url: '/pods',
          templateUrl: '/partials/pods.html',
          controller: 'PodsCtrl'
   },
   customers = {
          name: 'Customers',
          url: '/customers',
          templateUrl: '/partials/customers.html',
          controller: 'CustomersCtrl'
   },
   operators = {
          name: 'Operators',
          url: '/operators',
          templateUrl: '/partials/operators.html',
          controller: 'OperatorsCtrl'
   };
    $stateProvider.state(home);
    $stateProvider.state(preferences);
    $stateProvider.state(pods);
    $stateProvider.state(customers);
    $stateProvider.state(operators);
  })
.controller('NavCtrl', ['$scope', function($scope) {
  $scope.navSet = {
    navMenus:[
      { navMenuItem: 'Home', subMenuItems: [{ item: 'Preferences'}] },
      { navMenuItem: 'System', subMenuItems: [{item: 'Pods'}, {item: 'Snapshots'}, {item: 'Tasks'}]}, 
      { navMenuItem: 'Customers' }, 
      { navMenuItem: 'Operators' },
      { navMenuItem: 'Logout'}
    ]};
}])
.directive('rsaNavBar', function($compile) {
  return {
    restrict: 'E',
    controller: 'NavCtrl',
    templateUrl: '/partials/navbar.html'
  };
}); 



 
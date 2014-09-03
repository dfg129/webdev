var app = angular.module('app', ['ui.router', 'ui.grid', 'ui.grid.resizeColumns'])
  .config(function ($stateProvider, $urlRouterProvider) {
   
    $urlRouterProvider.otherwise('/home');
                                  
    var home = {
      name: 'home',
      url: '/home',
      templateUrl: '/partials/home.html'

    },
    preferences = {
          name: 'preferences',
          url: '/preferences',
          templateUrl: '/partials/preferences.html'
    },
    pods = {
          name: 'pods',
          url: '/pods',
          templateUrl: '/partials/pods.html',
          controller: 'PodsCtrl'
   };
    $stateProvider.state(home);
    $stateProvider.state(preferences);
    $stateProvider.state(pods);
  })
.controller('NavCtrl', ['$scope', function($scope) {
  $scope.navSet = {
    navMenus:[
      { navMenuItem: 'Home', subMenuItems: [{ item: 'Preferences'}] },
      { navMenuItem: 'System', subMenuItems: [{item: 'Pods'}, {item: 'Snapshots'}, {item: 'tasks'}]}, 
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



 
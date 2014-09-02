 
angular.module('app')
.service('DataService', function () {
  return {
    getPods: function() {
      return [{name: 'Pod1'}];
    }
  };
})
.controller('PodsCtrl', ['$scope', 'DataService', function (scope, DataService) {
    scope.title = "Pods Table";
    scope.podData = DataService.getPods();
    
    scope.gridOpts = {
      enableColumnResizing: true,
      enableNativeScrolling: false,
      enableVirtualScrolling: true,
      columnDefs: [
      {field: 'name', displayName: 'Name'},
      {field: 'created', displayName:'Created On'},
      {field: 'BuildName', displayName: 'Build'},
      {field: 'PatchSet', displayName: 'Patch Set'},
      {field: 'state', displayName: 'State'},
      {field: 'StackStatus', displayName: 'Stack Status'},
      {field: 'notifications', displayName: 'Notifications'},
      {field: 'type', displayName: 'Pod Type'},
      {field: 'owner', displayName: 'Owner'},
      {field: 'scope', displayName: 'Scope'},
      {field: 'uptime', displayName: 'Uptime'},
      {field: 'timezone', displayName: 'Timezone'}
     ] ,
      data: 'podData'
  }; 
}]);

 
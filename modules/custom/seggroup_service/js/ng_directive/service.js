myApp.directive('ngServicesList', ['$http', ngServiceList]);

function ngServiceList($http) {

  return {
    restrict: 'EA',
    controller: ServicesController
  };

}

ServicesController.$inject = ['$scope'];

function ServicesController($scope) {

  //open modal window for an specific node
  $scope.loadModal = function(node_id){
    var modal_id = '#modal-node-'+node_id;
    jQuery(modal_id).modal('open');
  }
}

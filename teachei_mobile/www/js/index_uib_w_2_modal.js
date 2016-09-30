function uib_w_2_modal_controller($scope, $ionicModal) {
  $scope.modal = $ionicModal.fromTemplate($(".uib_w_2").html(), {
    scope: $scope,
    animation: 'slide-in-up'
  });
  $scope.show = function() {
    $scope.modal.show();
  };
  $scope.close = function() {
    $scope.modal.hide();
  };
  //Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function() {
    // Execute action
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function() {
    // Execute action
  });
};
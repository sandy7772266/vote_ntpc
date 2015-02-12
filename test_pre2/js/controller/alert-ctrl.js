todoApp.controller('AlertCtrl', ['$scope', '$timeout', function ($scope, $timeout) {
	$scope.obj = null;

	$scope.$on('show-alert', function(event, obj){
		$scope.obj = obj;
		$timeout(function(){
			$scope.obj = null;
		}, 1500);
	});
}]);
userApp.controller('TodoCtrl', ['$rootScope', '$scope', '$filter', 'ApiSrv', function ($rootScope, $scope, $filter, ApiSrv) {

	 $scope.todos = ApiSrv.todo.query();
	 $scope.users = ApiSrv.user.query();
	 $scope.newTodo = {content:''};
	
	

	$scope.add = function(todo){

		ApiSrv.todo.save(angular.copy(todo), function(response){
			// $scope.todos.push(response.todo);
			$scope.todos = ApiSrv.todo.query();
			$rootScope.$broadcast('show-alert', response.flash);
		});
		$scope.newTodo.content = '';
	};

	$scope.toggle = function(todo){
		ApiSrv.todo.update({id: todo.id}, function(response){
			todo.done = (todo.done === 1)? 0:1;
			$rootScope.$broadcast('show-alert', response.flash);
		});
	};

	// http://vitalets.github.io/angular-xeditable/
	$scope.update = function(todo, newContent){
		if(todo.content !== newContent){
			// 接收到true，表示remote端已完成更新
			// 回傳給xeditable以更新 todo，並關閉編輯表單
			
			ApiSrv.todo.update({id: todo.id,content: newContent}, function(response){
				todo.content = newContent;
				$rootScope.$broadcast('show-alert', response.flash);
				return true;
			});
		}
	};

	$scope.clean = function(){
		ApiSrv.todo.clean({action: 'clean'},function(response){
			$scope.todos = ApiSrv.todo.query();
			$rootScope.$broadcast('show-alert', response.flash);
		});
	};

	$scope.remove = function(todo){
		
		ApiSrv.todo.remove(todo, function(response){
			$scope.todos = ApiSrv.todo.query();
			$rootScope.$broadcast('show-alert', response.flash);
		});
	};

	$scope.$watch('todos', function(){
		$scope.dones = $filter('filter')($scope.todos, {done: 1}).length || 0;
	}, true);


}]);
todoApp.controller('TodoCtrl', ['$rootScope', '$scope', '$filter', 'ApiSrv', function ($rootScope, $scope, $filter, ApiSrv) {

	 $scope.todos = ApiSrv.todo.query();
	 $scope.users = ApiSrv.user.query();
	 $scope.votes = ApiSrv.vote.query();
	 $scope.newTodo = {content:''};
	 $scope.newUser= {username:'', c_name:''};
	 $scope.newVote= {school_name:'', vote_title:'', vote_amount:0, start_at:'2015-02-11 03:00:00', end_at:'2015-02-11 03:00:00',
	  vote_goal:0, can_select:0};
	
	

	$scope.add = function(todo){

		ApiSrv.todo.save(angular.copy(todo), function(response){
			// $scope.todos.push(response.todo);
			$scope.todos = ApiSrv.todo.query();
			$rootScope.$broadcast('show-alert', response.flash);
		});
		$scope.newTodo.content = '';
	};

	//修改部分
	$scope.user_add = function(newUser){

		ApiSrv.user.save(angular.copy(newUser), function(response){
			// $scope.todos.push(response.todo);
			$scope.users = ApiSrv.user.query();
			$rootScope.$broadcast('show-alert', response.flash);
		});
		$scope.newUser.username = '';
		$scope.newUser.c_name = '';
	};


	//修改部分end


//修改部分
	$scope.vote_add = function(newVote){

		ApiSrv.vote.save(angular.copy(newVote), function(response){
			$scope.votes = ApiSrv.vote.query();
			$rootScope.$broadcast('show-alert', response.flash);
		});
		$scope.newVote.school_name = '';
		$scope.newVote.vote_title = '';
		$scope.newVote.vote_amount = 0;
		$scope.newVote.start_at = '2015-02-11 03:00:00';
		$scope.newVote.end_at = '2015-02-11 03:00:00';
		$scope.newVote.vote_goal = 0;
		$scope.newVote.can_select = 0;
		

	};


	//修改部分end



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



//<!-- 修改部分 -->
	$scope.user_update = function(user, newC_name){
		if(user.c_name !== newC_name){
			// 接收到true，表示remote端已完成更新
			// 回傳給xeditable以更新 todo，並關閉編輯表單
				ApiSrv.user.update({id: user.id,c_name: newC_name}, function(response){
				user.c_name = newC_name;
				$rootScope.$broadcast('show-alert', response.flash);
				return true;
			});
		}
	};

$scope.vote_update = function(vote, newvote_title){
		if(vote.vote_title !== newvote_title){
			// 接收到true，表示remote端已完成更新
			// 回傳給xeditable以更新 todo，並關閉編輯表單
				ApiSrv.vote.update({id: vote.id,vote_title: newvote_title}, function(response){
				vote.vote_title = newvote_title;
				$rootScope.$broadcast('show-alert', response.flash);
				return true;
			});
		}
	};



//<!-- 修改部分end -->


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
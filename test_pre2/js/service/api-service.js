todoApp.factory('ApiSrv', ['$rootScope', '$resource', function ($rootScope, $resource) {
	
	var res = {

		todo:$resource(
			'http://127.0.0.1/test2/public/api/todos/:id:action',
			{id: '@id'},
			{ 
			 	'update': {method: 'PUT'},
			 	'clean': {method: 'DELETE'}
			}),
		user:$resource(
			'http://127.0.0.1/vote_ntpc/test2/public/api/users/:id:action',
			{id: '@id'},
			{ 
			 	'update': {method: 'PUT'},
			 	'clean': {method: 'DELETE'}
			}),
		vote:$resource(
			'http://127.0.0.1/vote_ntpc/test2/public/api/votes/:id:action',
			{id: '@id'},
			{ 
			 	'update': {method: 'PUT'},
			 	'clean': {method: 'DELETE'}
			}),
	}


	
	return res;
}]);


/*

https://code.angularjs.org/1.2.26/docs/api/ngResource/service/$resource

{ 'get':    {method:'GET'},
  'save':   {method:'POST'},
  'query':  {method:'GET', isArray:true},
  'remove': {method:'DELETE'},
  'delete': {method:'DELETE'} };

HTTP GET "class" actions: Resource.action([parameters], [success], [error])
non-GET "class" actions: Resource.action([parameters], postData, [success], [error])
non-GET instance actions: instance.$action([parameters], [success], [error])

*/
var todoApp = angular.module('TodoApp', ['xeditable', 'ngResource']);

var userApp = angular.module('UserApp', ['xeditable', 'ngResource']);

var voteApp = angular.module('VoteApp', ['xeditable', 'ngResource']);



// for angular-xeditable
todoApp.run(function(editableOptions) {
  editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});
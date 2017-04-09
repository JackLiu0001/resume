var siteModel = angular.module('app', ['ui.router']);
siteModel.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$stateProvider.state({
		'name': 'indexPage',
		'url': '/indexPage',
		'templateUrl': 'views/home.html'
	}).state({
		'name': 'skill',
		'skill': '/skill',
		'templateUrl': 'views/skill.html'
	});
	$urlRouterProvider.when('', '/indexPage');
}]);


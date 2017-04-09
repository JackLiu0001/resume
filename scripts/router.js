var siteModel = angular.module('app', ['ui.router']);
siteModel.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$stateProvider.state({
		'name': 'indexPage',
		'url': '/indexPage',
		'templateUrl': 'views/home.html'
	});
	$urlRouterProvider.when('', '/indexPage');
}]);


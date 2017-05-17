var siteModel = angular.module('app', ['ui.router', 'sitCtr', 'siteDirectives']);
siteModel.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$stateProvider.state({
		'name': 'indexPage',
		'url': '/indexPage',
		'templateUrl': 'views/home.html'
	}).state({
		'name': 'skill',
		'url': '/skill',
		'templateUrl': 'views/skill.html'
	}).state({
		'name': 'techBlog',
		'url': '/tech_blog',
		'templateUrl': 'views/tech_blog.html'
	});
	$urlRouterProvider.when('', '/indexPage');
	// $urlRouterProvider.when('', '/techBlog');
}]);


var siteModel = angular.module('app', ['ui.router', 'sitCtr', 'sitFactorys', 'siteDirectives', 'ui.bootstrap']);
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
	}).state({
		'name': 'test',
		'url': '/test',
		'templateUrl': 'views/test.html'
	});
	$urlRouterProvider.when('', '/indexPage');
	// $urlRouterProvider.when('', '/tech_blog');
}]);


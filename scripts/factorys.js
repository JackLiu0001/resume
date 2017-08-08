/*
* @Author: liushaofei
* @Date:   2017-04-08 19:52:09
* @Last Modified by:   liushaofei
* @Last Modified time: 2017-08-01 16:09:54
*/

var siteModule = angular.module('sitFactorys', []);

siteModule.factory('getNameFactory', function() {
	var myName = 'zhangsan';
	return {
		getName: function() {
			return myName;
		}
	}
});

siteModule.service('setNameFactory', function() {
	this.myName = 'zhangsan';
	this.getName = function() {
		return 'test';
	};
});
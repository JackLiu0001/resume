/*
* @Author: liushaofei
* @Date:   2017-04-08 19:51:56
* @Last Modified by:   liushaofei
* @Last Modified time: 2017-06-20 15:44:19
*/
var siteModule = angular.module('siteDirectives', []);

siteModule.directive('techblogdirect', ['$sce', function($sce) {
	return {
		restrict: 'AE',
		// replace: true, // 是否替换掉自定义的指令，默认是false（不替换）
		// transclude: true, // 是否保留自定义指令子元素中的内容 默认false（不保留） 和ng-transclude配合使用 ng-transclude指出保留在什么地方
		templateUrl: './views/blog_item.html',
		replace: true,
		scope: {
			dataInfo: '@articleDataInfo',
		},
		controller: function($scope, $sce) {
			$scope.name = 'liushaofei';
			$scope.isSimple = true;
			$scope.showComment = false;
			$scope.articleData = JSON.parse($scope.dataInfo);
			$scope.allComments = $scope.articleData.comment;
			$scope.allComments.forEach(function(value, index, arr) {
				$scope.allComments[index] = $sce.trustAsHtml(value);
			});
			$scope.html = $sce.trustAsHtml($scope.articleData.con);
			$scope.readAll = function() {
				$scope.isSimple = false;
			};
			$scope.notReadAll = function() {
				$scope.isSimple = true;
			};

			// 	点赞
			$scope.fabulousFn = function() {
				$scope.articleData.fabulous++;
			}

			// 评论
			$scope.commentFn = function() {
				$scope.showComment = !$scope.showComment;
			};
			console.log(2);
		},
		controllerAs: 'techBlogDireCtrName',
		link: function(scope, $element, $attrs) {
			var eleBox = $($element);
			eleBox.find('.addComment').on('click', function() {
				var addComment = eleBox.find('.comment-commit div').html();
				eleBox.find('.comment-commit div').html('');
				if (addComment && !!$.trim(addComment)) {
					scope.allComments.push($sce.trustAsHtml(addComment));
					scope.$apply();
				}
			});
		}
	}
}]);

siteModule.directive('testBoot', function() {
	return {
		template: `<ul class="nav nav-tabs">
		  <li role="presentation" class="active"><a href="#">Home</a></li>
		  <li role="presentation"><a href="#">Profile</a></li>
		  <li role="presentation"><a href="#">Messages</a></li>
		</ul>`,
		link: function() {
			
		}
	}
});

/*
* @Author: liushaofei
* @Date:   2017-04-08 19:51:47
* @Last Modified by:   liushaofei
* @Last Modified time: 2017-05-25 14:30:11
*/

var siteModule = angular.module('sitCtr', []);

// index
siteModule.controller('indexCtr', ['$scope', '$http', function($scope, $http) {

}]);

// techBlog
siteModule.controller('techBlog', ['$scope', '$http', '$uibModal', function($scope, $http, $uibModal) {
	$scope.articleData = [{
		'id': 1,
		'title': 'jsonp跨域',
		'shortCon': "最简单的深拷贝方法 b = JSON.parse( JSON.stringify(a) ); 如果a是最基本的数组、对象、字符串、数字、布尔型可以采用这种方法。 问题： 1、无法复制函数。 var a = { 'name': function() { alert(…",
		'comment': [
			'有待改善，请继续努力',
			'加油！加油！加油！'
		],
		'con': 	
			"<code>function jsonp(json) {\n"
			+"	json = json || {};\n"
			+"	if (!json.url) return;\n"
			+"	json.cbName = json.cbName || 'cb';\n"
			+"	json.data = json.data || {};\n"
			+"// 动态生成callback函数名\n"
			+"	json.data[json.cbName] = ('show' + Math.random()).replace('.', '');\n"
			+"	var arr = [];\n"
			+"	for (var i in json.data) {\n"
			+"		arr.push(i + '=' + encodeURIComponent(json.data[i]));\n"
			+"	}\n"
			+"	var str = arr.join('&');\n"
			+"// 声明callback函数\n"
			+"	window[json.data[json.cbName]] = function(response) {\n"
			+"		json.success && json.success(response);\n"
			+"		OH.removeChild(OS);\n"
			+"		window[json.data[json.cbName]] = null;\n"
			+"	};\n"
			+"// 动态创建script标签\n"
			+"	var OH = document.getElementsByTagName('head')[0];\n"
			+"	var OS = document.createElement('script');\n"
			+"	OS.src = json.url + '?' + url;\n"
			+"	OH.appendChild(OS);\n"
			+"}\n"
			+"1、jsonp是利用标签的src实现跨域，src允许请求其他域名内容。\n"
			+"2、允许用户传递callback函数名给服务器，服务器返回数据时将callback包裹json数据返回\n"
			+"3、jsonp本身是get请求，script本身就是get请求</code>"
		,
		'fabulous': 10,
	},{
		'id': 2,
		'title': 'js 深拷贝 浅拷贝',
		'shortCon': "最简单的深拷贝方法b = JSON.parse( JSON.stringify(a) );如果a是最基本的数组、对象、字符串、数字、布尔型可以采用这种方法。...",
		'comment': [
			
		],
		'con': 	
			"<code>最简单的深拷贝方法\n"
			+"b = JSON.parse( JSON.stringify(a) );\n"
			+"如果a是最基本的数组、对象、字符串、数字、布尔型可以采用这种方法。\n"
			+"问题：\n"
			+"1、无法复制函数。\n"
			+"       var a = {\n"
			+"            'name': function() {\n"
			+"                alert(1);\n"
			+"            },\n"
			+"            'age': 18\n"
			+"        }\n"
			+"        var b = JSON.parse(JSON.stringify(a));\n"
			+"        console.log(b);    // {age: 18}\n"
			+"2、原型链没了\n"
			+"自己实现深拷贝\n"
			+"// 是否是dom判断\n"
			+"    function isDOM(item) {\n"
			+"        return (typeof HTMLElement === 'function') \n"
			+"        ? (item instanceof HTMLElement)\n"
			+"        : (item && (typeof item === 'object') && (item.nodeType === 1) \n"
			+"&& (typeof item.nodeName === 'string'));\n"
			+"    }\n"
			+"// 数据类型判断\n"
			+"    function getType(obj) {\n"
			+"        return Object.prototype.toString.call(obj);\n"
			+"    }\n"
			+"    function deepClone(item) {\n"
			+"        var types = [Number, String, Boolean],result;\n"
			+"        // 如果是number／string／boolea则直接返回\n"
			+"        types.forEach(function(type) {\n"
			+"            if (item instanceof type) {\n"
			+"                result = type(item);\n"
			+"            }\n"
			+"        });\n"
			+"        // 如果不是以上三种情况，则进行进一步判断\n"
			+"        if (typeof result == 'undefined') {\n"
			+"            if (isDOM(item)) {\n"
			+"                result = item.cloneNode( true );\n"
			+"            } else if (getType(item) == 'Date') {\n"
			+"                result = new Date(item);\n"
			+"            } else if (getType(item) == 'Array') {\n"
			+"                result = [];\n"
			+"                item.forEach(function(child, index, array) {\n"
			+"                    result[index] = deepClone(child);\n"
			+"                });\n"
			+"            } else if (getType(item) == 'Object') {\n"
			+"                result = {};\n"
			+"                for (var name in item) {\n"
			+"                    result[name] = deepClone(item[name]);\n"
			+"                }\n"
			+"            } else {\n"
			+"                result = item;\n"
			+"            }\n"
			+"        }\n"
			+"        return result;\n"
			+"    }</code>"
		,
		'fabulous': 10,
	},{
		'id': 3,
		'title': 'js 改变this方向 call apply bind',
		'shortCon': "js当中改变this方向的方法有三个：call();  // 可兼容ie6及以上浏览器Fun.call(obj, arg1, arg2);apply();  // 可兼容ie6及以上浏览器...",
		'comment': [
			
		],
		'con': 	
			"<code>js当中改变this方向的方法有三个：\n"
			+"call();  // 可兼容ie6及以上浏览器\n"
			+"  Fun.call(obj, arg1, arg2);\n"
			+"apply();  // 可兼容ie6及以上浏览器\n"
			+"  Fun.call(obj, [arg1, arg2]);\n"
			+"bind();  // 兼容性：ie9及以上\n"
			+"  Fun.bind(obj, arg1, arg2)();\n"
			+"bind简单实现方法：\n"
			+"function bind(f, o) {\n"
			+"  if (f.bind) return f.bind(o);\n"
			+"  return function() {\n"
			+"    return f.apply(o, arguments);\n"
			+"  };  \n"
			+"}</code>"
		,
		'fabulous': 10,
	},{
		'id': 4,
		'title': 'js 判断是否是DOM节点',
		'shortCon': "以下内容也是从网上搜集function isDOM(item) {// 首先判断是否支持HTMLELement，如果支持，使用HTMLElement，如果不支持，通过判断",
		'comment': [
			
		],
		'con': 	
			"<code>function isDOM(item) {\n"
	 		+"// 首先判断是否支持HTMLELement，如果支持，使用HTMLElement，如果不支持，通过判断DOM的特征，\n"
	 		+"如果拥有这些特征说明就是ODM节点，特征使用的越多越准确\n"
	        +"    return (typeof HTMLElement === 'function') \n"
	        +"    ? (item instanceof HTMLElement)\n"
	        +"    : (item && (typeof item === 'object') && (item.nodeType === 1) && \n"
	        +"(typeof item.nodeName === 'string'));\n"
	        +"}</code>"
		,
		'fabulous': 10,
	},{
		'id': 5,
		'title': 'javascript 类型判断',
		'shortCon': "js的类型判断虽然不难，但是相对来说还是很繁琐对，曾经也困扰了我一段时间，所以我觉得有必要对这个进行一个总结：可以进行类型判断的方法：",
		'comment': [
			
		],
		'con': 	
			"<code>js的类型判断虽然不难，但是相对来说还是很繁琐对，曾经也困扰了我一段时间，所以我觉得有必要\n"
			+"对这个进行一个总结：\n"
			+"可以进行类型判断的方法：\n"
			+"typeof\n"
			+"instanceof\n"
			+"constructor\n"
			+"Object.prototype.toString()\n"
			+"推荐使用方法：Object.prototype.toString();\n"
			+"例如：\n"
			+"function isArray(item) {\n"
			+"  return Object.prototype.toString.call(item).slice(8, -1);\n"
			+"}\n"
			+"var arrTest = [];\n"
			+"isArray(arrTest);  // 字符串'Array'\n"
			+"各种类型得到的结果\n"
			+"Number   'Number'\n"
			+"String      'String'\n"
			+"Boolean  'Boolean'\n"
			+"Object     'Object'\n"
			+"Array       'Array'\n"
			+"Undefined 'Undefined'\n"
			+"Null          'Null'\n"
			+"NaN         'Number'\n"
			+"Date        'Date'\n"
			+"正则    .   'RegExp'\n"
			+"函数        'Function'\n"
			+"Math       'Math'\n"
			+"函数参数集 arguments   'Arguments'\n"
			+"typeof:\n"
			+"typeof会得到5种类型的字符串，分别是：'undefined'、'object'、'string'、\n"
			+"'boolean'、'numer';\n"
			+"备注：\n"
			+"typeof null  // 'object'\n"
			+"typeof new Array()  // 'object'\n"
			+"instanceof:\n"
			+"// 判断 foo 是否是 Foo 类的实例 , 并且是否是其父类型的实例\n"
			+" function Aoo(){} \n"
			+" function Foo(){} \n"
			+" Foo.prototype = new Aoo();//JavaScript 原型继承\n"
			+" var foo = new Foo(); \n"
			+" console.log(foo instanceof Foo)//true\n"
			+" console.log(foo instanceof Aoo)//true\n"
			+" console.log(Object instanceof Object);//true \n"
			+" console.log(Function instanceof Function);//true \n"
			+" console.log(Number instanceof Number);//false \n"
			+" console.log(String instanceof String);//false \n"
			+" console.log(Function instanceof Object);//true \n"
			+" console.log(Foo instanceof Function);//true \n"
			+" console.log(Foo instanceof Foo);//false\n"
			+"想要很好的理解instanceof，必须要对js的原型链由一个清晰的认识。\n"
			+"instanceof简单实现：\n"
			+"function instanceof(L, R) {\n"
			+"  var O = R.prototype;\n"
			+"  L = L._proto_;\n"
			+"  while (true) {\n"
			+"  if (L === null) return false;\n"
			+"  if (L === O) return true;\n"
			+"    L = L._proto_;\n"
			+"  }\n"
			+"}\n"
			+"一个对象的原型链是这个对象的构造函数的原型。\n"
			+"通过一直向上找L的原型链，判断L的原型链是否是R的原型，来判定L是否是R的 instanceof\n"
			+"		\n"
			+"constructor：  \n"
			+"constructor始终指向创建当前对象的构造函数\n"
			+"// 等价于 var foo = new Array(1, 56, 34, 12);\n"
			+"var arr = [1, 56, 34, 12];\n"
			+"console.log(arr.constructor === Array); // true\n"
			+"// 等价于 var foo = new Function();\n"
			+"var Foo = function() { };\n"
			+"console.log(Foo.constructor === Function); // true\n"
			+"// 由构造函数实例化一个obj对象\n"
			+"var obj = new Foo();\n"
			+"console.log(obj.constructor === Foo); // true\n"
			+"// 将上面两段代码合起来，就得到下面的结论\n"
			+"console.log(obj.constructor.constructor === Function); // true\n"
			+"问题：\n"
			+"	function Person(name) {\n"
			+"        this.name = name;\n"
			+" 	};\n"
			+"    Person.prototype.getName = function() {\n"
			+"        return this.name;\n"
			+"    };\n"
			+"    var p = new Person('ZhangSan');\n"
			+"    console.log(p.constructor === Person);  // true\n"
			+"    console.log(Person.prototype.constructor === Person); // true\n"
			+"    // 将上两行代码合并就得到如下结果\n"
			+"    console.log(p.constructor.prototype.constructor === Person); // true\n"
			+"当prototype换成另外一种写法的时候就会出现问题：\n"
			+"   function Person(name) {\n"
			+"        this.name = name;\n"
			+"    };\n"
			+"    Person.prototype = {\n"
			+"        getName: function() {\n"
			+"            return this.name;\n"
			+"        }\n"
			+"    };\n"
			+"    var p = new Person('ZhangSan');\n"
			+"    console.log(p.constructor === Person);  // false\n"
			+"    console.log(Person.prototype.constructor === Person); // false\n"
			+"    console.log(p.constructor.prototype.constructor === Person); // false\n"
			+"    console.log(p.constructor === Object);  // true\n"
			+"    console.log(Person.prototype.constructor === Object); // true\n"
			+"    console.log(p.constructor.prototype.constructor === Object); // true\n"
			+"\n"
			+"为什会出现这种情况呢，其实咱们看下定义就会发现，constructor始终指向创建该对象的构造函数，\n"
			+"以上的写法可以换成这种形式。\n"
			+"    Person.prototype = new Object({\n"
			+"        getName: function() {\n"
			+"            return this.name;\n"
			+"        }\n"
			+"    });\n"
			+"以上这种写法，Person.prototype的构造函数是Object，所以问题就迎刃而解了。\n"
			+"以上内容是我对类型判断对一些总结，谢谢大家！</code>"
		,
		'fabulous': 10,
	}];

	// modal text
	// $scope.btnClick = function() {
	// 	$uibModal.open({
	// 		templateUrl: 'myModalContent.html'
	// 	});
	// }

}]);

// test
siteModule.controller('testCtr', ['$scope', '$http', function($scope, $http) {

}]);
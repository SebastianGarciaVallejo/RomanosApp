angular.module("MyFirstApp",[])
.controller("FirstController",['$scope','$http',function($scope, $http){
	
	$scope.informacion = function() {
		var numeroDoc = document.getElementById("numeroEntero").value;
		$http.get('https://servicioromanosebas.herokuapp.com/intToRoman/'+  numeroDoc)
		.success(function(data){
			console.log(data);
			$scope.posts = data;
		})
		.error(function(err){
			alert("No fue posible convertir el número");
		});
	}
}]);
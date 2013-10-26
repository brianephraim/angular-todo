'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
.controller('todoCtrl', ['$scope','toDoListService',function($scope,toDoListService) {
	$scope.list = toDoListService.data;
	$scope.setTab = function(value){
		switch(value){
			case 'all':
			  $scope.filterCondition = {};
			  break;
			case 'active':
			  $scope.filterCondition = {completed:false};
			  break;
			case 'complete':
			  $scope.filterCondition = {completed:true};
		}
		$scope.selectedTab = value;
	};
	$scope.setTab('all');

	$scope.createItem = function(newInput){
		toDoListService.insert(newInput);
		$scope.newInput = '';
	};
	$scope.complete = function(item){
		toDoListService.complete(item);
	};
	$scope.delete = function(item){
		toDoListService.delete(item);
	};
	$scope.updateItem = function(item,value){
		toDoListService.updateItem(item,value);
		$scope.doubleClickedItem =  null;
	};
	$scope.makeEditable = function(item){
		$scope.doubleClickedItem = item;
	};

}]);
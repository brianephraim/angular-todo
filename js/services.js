'use strict';

/* Services */

angular.module('myApp.services', [])
.factory('toDoListService', ['$localStorage',function($localStorage) {
	return (function(){
		var item = function(text){
			this.text = text;
			this.completed = false;
		};
		var obj = function(){
			if(typeof $localStorage.todo === 'undefined'){
				$localStorage.todo = [
					{
						text:'Wash my teeth',
						completed:false
					},
					{
						text:'Build a giraffe',
						completed:true
					},
					{
						text:'Loot and plunder',
						completed:false
					}
				]
			};
			this.data = $localStorage.todo;
		};
		obj.prototype.insert = function(value){
			this.data.unshift(new item(value));
			$localStorage.todo = this.data;
		};
		obj.prototype.complete = function(item){
			item.completed = item.completed ? false : true;
			$localStorage.todo = this.data;
		};
		obj.prototype.delete = function(item){
			item.completed = item.completed ? false : true;
			for(var i = this.data.length; i--;){
				if(this.data[i] === item){
					this.data.splice(i,1);
				}
			}
			$localStorage.todo = this.data;
		};
		obj.prototype.updateItem = function(item,value){
			if(value === ''){
				this.delete(item)
			} else {
				for(var i = this.data.length; i--;){
					if(this.data[i] === item){
						this.data.text = value;
					}
				}
			}
			$localStorage.todo = this.data;
		};
		return new obj();
	})()
}]);





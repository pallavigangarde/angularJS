/**
 * Created by pallavig on 1/23/2015.
 */
angular.module("todoApp")
    .controller("MainCtrl",['$scope','TodoService',function($scope,TodoService){
        $scope.todos = TodoService.todos;

        $scope.add = function(){
            console.log($scope.todos);
            TodoService.add($scope.newTodos);
            $scope.newTodos = {};
        }

        $scope.delete = function(item) {
            TodoService.delete(item);
        }

        $scope.clearCompleted = function() {
            TodoService.clearCompleted();
        }

        $scope.clear = function() {
            TodoService.clear();
        }

    }]);
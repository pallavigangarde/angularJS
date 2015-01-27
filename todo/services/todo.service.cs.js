/**
 * Created by pallavig on 1/23/2015.
 */
angular.module("todoApp")
    .service("TodoService",[function() {
        return {
            todos: [],
            add:function(item) {
                console.log("Service" + item);
                this.todos.push(item);
            },
            delete:function(item) {
                this.todos.splice(this.todos.indexOf(item),1)
            },
            clearCompleted:function() {
                for(var i = this.todos.length - 1; i >= 0; i--) {
                    if(this.todos[i].completed == true) {
                        this.todos.splice(i,1);
                    }
                }
            },
            clear:function() {
                this.todos = [];
                console.log(this.todos.length);
            }
        }

    }]);

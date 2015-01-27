/**
 * Created by pallavig on 1/27/2015.
 */
angular.module('todoApp')
.filter('TodoFilter',[function() {
        return function(myArray,criteria) {
            var filterArray = [];
            myArray.forEach(function(item){
                if(criteria==='All') {
                    filterArray.push(item);
                }
                else if(criteria==='Active' && item.completed!=true) {
                    filterArray.push(item);
                }
                else if(criteria==='Completed' && item.completed===true) {
                    filterArray.push(item);
                }
            });
            return filterArray;
        };
    }]);
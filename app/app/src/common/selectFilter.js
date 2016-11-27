(function () {

    'use strict';

    angular.module('app')
        .filter('propsFilter', function () {
            return function (items, props) {

                if(!items) { 
                    return;
                }

                var value = [];
                
                items.forEach(function(item){
                    angular.forEach(props, function(prop, key){
                        if (item[key] === prop || item[key].indexOf(prop) >= 0) {
                            value.push(item);
                        }
                    });
                });

                return value;
            }
        });

})();
angular.module('app')
    .directive('uiSearch', ['$translate', function($translate) {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                onCancel: '&',
                onSearch: '&'
            },
            templateUrl: '/static/apps/admin/lib/directives/ui-search.html',
            link: function(scope, elem, attrs) {
                scope.model = null;
                scope.cancel = function() {
                    scope.model = null;
                    if (scope.onCancel) {
                        scope.onCancel({__model: scope.model});
                    }
                };

                scope.search = function() {
                    if (scope.onSearch) {
                        console.debug(scope.model);
                        scope.onSearch({__model: scope.model});
                    }
                };
            }
        };
    }]);
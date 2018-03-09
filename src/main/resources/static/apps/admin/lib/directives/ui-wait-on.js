angular.module('app')
    .directive('uiWaitOn',
    /* @ngInject */
    function ($compile) {
        return {
            restrict: 'A',
            link: function(scope, elem, attr) {
//	            var children = $compile(elem.contents())(scope);
                scope.$watch(attr.uiWaitOn, function (value) {
                    elem.attr('disabled', value);
                    if (value) {
                        elem.prepend('<span class="in-process"><i class="fa fa-spin fa-spinner"></i>&nbsp;</span>');
                    } else {
                        angular.element(document.querySelector('.in-process')).remove();
//                        angular.forEach(children, function(child) {
//                             elem.append(child);
//                        });
                    }
                });
            },
        };
    });
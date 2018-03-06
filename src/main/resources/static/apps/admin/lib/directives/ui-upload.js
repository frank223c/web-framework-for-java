angular.module('app')
    .directive('uiUpload',
    /* @ngInject */
    function(FileUploader, appDialog) {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                url: '@',
                multiple: '@?',
                label: '@?',
                onItemSuccess: '&?',
            },
            templateUrl: '/static/apps/admin/lib/directives/ui-upload.html',
            compile: function() {
                return {
                    pre: function(scope, element, attrs) {
                        scope.uploader = new FileUploader({
                            url: scope.url,
                            removeAfterUpload: true,
                            onSuccessItem: function(item, response, status, headers) {
                                if (scope.onItemSuccess) {
                                    scope.onItemSuccess({
                                        file: item,
                                        result: response,
                                        });
                                }
                            },
                            onErrorItem: function(item, response, status) {
                                appDialog.error(item.file.name, response.message);
                            }
                        });
                        if (attrs.multiple || attrs.multiple === '') {
                            element.find('[type=file]').attr('multiple', attrs.multiple);
                        }
                    },
                };
            },
        };
    });
(function(window, angular) {
    'use strict';
    angular.module()
        .directive('emptyingButton', ionEmptyingButton)

    function ionEmptyingButton($timeout) {
        'ngInject';
        var defaultClass = 'ion-ios-close';
        var defaultContentStyle = {
            overflow: 'visible',
            position: 'relative'
        };

        var defaultButtonStyle = {
            position: 'absolute',
            left: '-32px',
            color: '#AbAbAb',
            visibility: 'hidden'
        };

        function compile(element, attrs, transclude) {
            var emptyingButtonContent = angular.element('<label></label>');
            var emptyingButton = angular.element('<i></i>');
            emptyingButtonContent.append(emptyingButton);
            element.after(emptyingButtonContent);

            return function(scope, element, attrs, ngModel) {
                element.ionInputEmptyingButton = {};
                setContentStyle(element, scope, emptyingButtonContent);
                if (!ngModel) return;

                element.bind('focus', function() {
                    element.ionInputEmptyingButton.isFocus = true;
                    setButtonVisible();
                });

                element.bind('blur', function() {
                    element.ionInputEmptyingButton.isFocus = false;
                    setButtonVisible();
                });


                emptyingButtonContent.bind('click', function() {
                    $timeout(function() {
                        element[0].focus();
                    }, 0);
                    ngModel.$setViewValue('');
                    ngModel.$render();
                });

                ngModel.$viewChangeListeners.push(setButtonVisible);

                function setButtonVisible() {
                    ngModel.$viewValue && element.ionInputEmptyingButton.isFocus ? emptyingButton.css('visibility', 'visible') : emptyingButton.css('visibility', 'hidden');
                }
            };
        }

        function setContentStyle(element, scope, content) {
            var clientHeight, fontSize, left, padding, offsetHeight = element[0].offsetHeight + 'px';
            if (element[0].clientHeight < 25) {
                clientHeight = element[0].clientHeight - 2;
            } else if (element[0].clientHeight >= 25 && element[0].clientHeight < 31) {
                clientHeight = element[0].clientHeight - 6;
            } else {
                clientHeight = 24;
            }
            scope.ebRight ? padding = parseInt(scope.ebRight.replace(/px/, '')) : padding = 4;

            left = clientHeight + padding;
            fontSize = clientHeight + 'px';
            var contentStyle = angular.extend(defaultContentStyle, {
                height: offsetHeight
            });
            var buttonStyle = angular.extend(defaultButtonStyle, {
                height: offsetHeight,
                left: '-' + left + 'px',
                'line-height': offsetHeight,
                'font-size': scope.ebFontSize || fontSize,
                color: scope.ebColor || '#AbAbAb'
            });

            element.css('padding-right', (left + 5) + 'px');

            content.css(contentStyle);
            angular.element(content.find('i')).css(buttonStyle);
            angular.element(content.find('i')).addClass(scope.ebIcon || defaultClass);

            return content;
        }


        var emptying = {
            restrict: 'A',
            require: 'ngModel',
            priority: 1,
            compile: compile,
            scope: {
                ngModel: '=?',
                ebIcon: '@',
                ebColor: '@',
                ebRight: '@',
                ebFontSize: '@'
            }
        };

        return emptying;
    }

})(window, window.angular);

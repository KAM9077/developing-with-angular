System.register(['@angular/core', 'plugins-core'], function (exports) {
    'use strict';
    var Component, Extension;
    return {
        setters: [function (module) {
            Component = module.Component;
        }, function (module) {
            Extension = module.Extension;
        }],
        execute: function () {

            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0

            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.

            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */

            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }

            var MyLabelComponent = exports('MyLabelComponent', (function () {
                function MyLabelComponent() {
                }
                MyLabelComponent.prototype.ngOnInit = function () {
                    console.log('My Label Init');
                };
                MyLabelComponent = __decorate([
                    Extension('my-label', []),
                    Component({
                        selector: 'my-label',
                        template: "<h1>My Label</h1>"
                    })
                ], MyLabelComponent);
                return MyLabelComponent;
            }()));

            var MyButtonComponent = exports('MyButtonComponent', (function () {
                function MyButtonComponent() {
                }
                MyButtonComponent.prototype.ngOnInit = function () {
                    console.log('My Button Init');
                };
                MyButtonComponent = __decorate([
                    Extension('my-button', []),
                    Component({
                        selector: 'my-button',
                        template: "<button>My Button</button>"
                    })
                ], MyButtonComponent);
                return MyButtonComponent;
            }()));

        }
    };
});

"use strict";var __decorate=this&&this.__decorate||function(e,o,t,r){var n,c=arguments.length,p=c<3?o:null===r?r=Object.getOwnPropertyDescriptor(o,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)p=Reflect.decorate(e,o,t,r);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(p=(c<3?n(p):c>3?n(o,t,p):n(o,t))||p);return c>3&&p&&Object.defineProperty(o,t,p),p},core_1=require("@angular/core"),CreateComponent=function(){function e(){}return e.prototype.ngOnInit=function(){},e}();CreateComponent=__decorate([core_1.Component({selector:"app-create",template:'\n<div class="coming-soon">\n<h1>COMING SOON</h1>\n</div>\n  ',styles:["\n  @import url('https://fonts.googleapis.com/css?family=Roboto');\n* {\n  padding: 0;\n  margin: 0;\n}    \n.coming-soon {\n      min-height: calc(100vh - 100px); /*determines height of footer*/\n      width: 100%;\n      background: url('../assets/img/bubble.jpg') no-repeat 50% 50% fixed;\n      background-size: cover;\n      -moz-background-size: cover;\n      -o-background-size: cover;\n      -webkit-background-size: cover;\n}\nh1 {\n  text-align: center;\n  font-size: 4em;\n  font-family: 'Roboto', sans-serif; \n  color: #fff;\n}\n  "]})],CreateComponent),exports.CreateComponent=CreateComponent;
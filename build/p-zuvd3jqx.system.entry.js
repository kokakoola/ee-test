System.register(["./p-f5aaa00b.system.js"],function(e){"use strict";var t,n,s;return{setters:[function(e){t=e.r;n=e.h;s=e.g}],execute:function(){var o=function(){function e(e){var s=this;t(this,e);this.href="#";this.align="left";this.caretColor="";this.liClasses=function(){return{"nav--selected":s.selected,"nav--open":s.open&&(s.hasSubmenu||s.hasDropdown)}};this.dropdownClasses=function(){return{"nav__dropdown-container":true,"nav__dropdown--align-right":s.align==="right","nav__dropdown--two-columns":s.hasTwoColumns}};this.containerClasses=function(){return{nav:true}};this.navElement=function(){return n("a",{href:s.href},n("li",{class:s.liClasses(),onClick:s.toggle},n("slot",{name:"nav-icon"}),n("span",null,s.text),(s.hasSubmenu||s.hasDropdown)&&n("e-icon",{icon:s.open?"caret-up":"caret-down",size:"xs",color:s.caretColor})))};this.toggle=function(){s.open=!s.open}}e.prototype.render=function(){return n("div",{class:this.containerClasses()},this.navElement(),this.hasDropdown&&n("div",{class:this.dropdownClasses(),style:{display:this.open?"block":"none"}},n("slot",null)))};e.prototype.handleClick=function(e){this.selected=false;if(e.target==this.element){this.selected=!this.selected}if(e.target!==this.element&&(this.hasSubmenu||this.hasDropdown)){this.open=false}};Object.defineProperty(e.prototype,"element",{get:function(){return s(this)},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return"li{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-left:0;padding:var(--space-sm);cursor:pointer;font-size:var(--text-md);line-height:1.1;border-bottom:3px solid transparent}li.nav--selected,li :focus,li:hover{color:var(--color-primary);border-bottom:3px solid var(--color-primary)}li>:not(:last-child){margin-right:var(--space-xxs)}\@media only screen and (min-width:64rem){li>:not(:last-child){margin-right:var(--space-xxs)}}a{text-decoration:none;color:var(--color-black)}a>:not(:first-child){margin-left:var(--space-xxs)}.nav{position:relative}.nav__dropdown--align-right{right:0}.nav--open{background-color:var(--color-contrast-low)}.nav__dropdown-container{-webkit-box-shadow:0 .25em 1em rgba(0,0,0,.25);box-shadow:0 .25em 1em rgba(0,0,0,.25);border-radius:4px;width:15em;z-index:100;position:absolute;background-color:var(--color-white);margin:1em auto 0}.nav__dropdown-container:after{bottom:98%;left:35%;content:\" \";height:0;width:0;position:absolute;pointer-events:none;border:15px solid transparent;border-top-color:var(--color-white);margin-left:-15px;-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}::slotted(:not(e-icon)){font-family:var(--font-primary);color:var(--color-black);-webkit-box-sizing:border-box;box-sizing:border-box;cursor:pointer;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-wrap:nowrap;flex-wrap:nowrap;padding:1em 1.5em!important;z-index:1000;border-bottom:1px solid var(--color-contrast-low)!important}::slotted(e-icon){display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex}.nav__dropdown--two-columns{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;width:650px}\@supports ((width:-webkit-max-content) or (width:-moz-max-content) or (width:max-content)){.nav__dropdown--two-columns{width:-webkit-max-content;width:-moz-max-content;width:max-content}}"},enumerable:true,configurable:true});return e}();e("e_nav",o)}}});
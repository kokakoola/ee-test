import{r as s,h as t,g as e}from"./p-617dbf5e.js";class n{constructor(e){s(this,e),this.href="#",this.align="left",this.caretColor="",this.liClasses=()=>({"nav--selected":this.selected,"nav--open":this.open&&(this.hasSubmenu||this.hasDropdown)}),this.dropdownClasses=()=>({"nav__dropdown-container":!0,"nav__dropdown--align-right":"right"===this.align,"nav__dropdown--two-columns":this.hasTwoColumns}),this.containerClasses=()=>({nav:!0}),this.navElement=()=>t("a",{href:this.href},t("li",{class:this.liClasses(),onClick:this.toggle},t("slot",{name:"nav-icon"}),t("span",null,this.text),(this.hasSubmenu||this.hasDropdown)&&t("e-icon",{icon:this.open?"caret-up":"caret-down",size:"xs",color:this.caretColor}))),this.toggle=()=>{this.open=!this.open}}render(){return t("div",{class:this.containerClasses()},this.navElement(),this.hasDropdown&&t("div",{class:this.dropdownClasses(),style:{display:this.open?"block":"none"}},t("slot",null)))}handleClick(s){this.selected=!1,s.target==this.element&&(this.selected=!this.selected),s.target!==this.element&&(this.hasSubmenu||this.hasDropdown)&&(this.open=!1)}get element(){return e(this)}static get style(){return"li{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-left:0;padding:var(--space-md) var(--space-xs);cursor:pointer;font-size:var(--text-base-size);border-bottom:3px solid transparent}li.nav--selected,li:focus,li:hover{border-bottom:3px solid var(--color-primary)}li>:not(:first-child){margin-left:var(--space-xxs)}li e-icon{display:-webkit-inline-box!important;display:-ms-inline-flexbox!important;display:inline-flex!important}a{text-decoration:none;color:var(--color-black)}"}}export{n as e_nav};
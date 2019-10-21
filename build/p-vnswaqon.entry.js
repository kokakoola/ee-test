import{r as t,h as s,g as e}from"./p-617dbf5e.js";class o{constructor(e){t(this,e),this.text="",this.type="button",this.spacing="no-spacing",this.align="left",this.caretColor="default",this.buttonColor="primary",this.buttonSize="",this.containerClasses=()=>({dropdown:!0}),this.btnClasses=()=>({"dropdown--type-text":"text"===this.type}),this.dropdownClasses=()=>({"dropdown-container":!0,[`dropdown--${this.spacing}`]:""!==this.spacing,"dropdown--align-right":"right"===this.align}),this.btnElement=()=>"button"===this.type?s("e-button",{ref:t=>this.dropdownButtonRef=t,onClick:this.toggle,color:this.buttonColor,size:this.buttonSize,"has-icon":this.hasIcon},s("span",null,s("slot",{name:"button-icon"}),s("span",null," ",this.text)),s("e-icon",{icon:this.open?"caret-up":"caret-down",size:"xxs"})):s("div",{class:"btn-group-container"},s("button",{class:this.btnClasses(),onClick:this.toggle,ref:t=>this.dropdownRef=t},this.text,s("span",null,s("e-icon",{icon:this.open?"caret-up":"caret-down",size:"xxs",color:this.caretColor})))),this.toggle=()=>{this.open=!this.open},this.close=()=>{this.open=!1}}render(){return s("div",{class:this.containerClasses()},this.btnElement(),s("div",{class:this.dropdownClasses(),style:{display:this.open?"block":"none"}},s("slot",null)))}handleOutsideClick(t){"button"===this.type?t.target!==this.element&&t.target!==this.dropdownButtonRef.childNodes[3]&&this.close():"text"===this.type&&t.target!==this.element&&t.target!==this.dropdownRef&&this.close()}get element(){return e(this)}static get style(){return".dropdown--type-text{font-size:inherit;font-weight:inherit;font-family:var(--font-primary);color:inherit;background:none;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border:none;cursor:pointer;position:relative;padding:0}.dropdown--type-text:focus{outline:0}.dropdown-container{-webkit-box-shadow:var(--shadow-sm);box-shadow:var(--shadow-sm);border-radius:var(--radius-sm);z-index:var(--zindex-overlay);width:auto;position:absolute;background-color:var(--color-white)}::slotted(:not([slot=button-icon])){color:var(--color-primary);font-weight:400!important;-webkit-box-sizing:border-box;box-sizing:border-box;cursor:pointer;display:-webkit-box;display:-ms-flexbox;display:flex;padding:.55em 1.5em!important;white-space:nowrap}::slotted(:not([slot=button-icon]):hover){background-color:var(--color-white-dark)}::slotted([slot=button-icon]){margin-right:var(--space-xs)}.dropdown{position:relative;display:inline-block}.dropdown--align-right{right:0}.dropdown--xs{margin-top:var(--space-xxxxs)}.dropdown--sm{margin-top:var(--space-xxxs)}.dropdown--md{margin-top:var(--space-xs)}.dropdown--lg{margin-top:var(--space-sm)}.dropdown--xl{margin-top:var(--space-md)}.dropdown--no-spacing{margin-top:0}.btn-group-container{display:-webkit-box;display:-ms-flexbox;display:flex}.btn-group-container span{margin-left:.5rem}.btn-group-container span *{display:-webkit-box;display:-ms-flexbox;display:flex}"}}export{o as e_dropdown};
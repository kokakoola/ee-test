import{r as e,h as s}from"./p-617dbf5e.js";class t{constructor(s){e(this,s),this.classes=()=>({header__block:!0,topbar:this.isTopbar,header:this.isHeader}),this.slotContainerClasses=()=>({"flex-center":this.isHeader})}render(){return s("div",{class:this.classes()},s("div",{class:"flex-center left-headerblock"},s("slot",{name:"left"})),s("div",{class:"flex-center right-headerblock"},s("slot",{name:"right"})))}static get style(){return":host(e-header-block){--header-block-border:1px solid var(--color-contrast-low)}.header__block{padding:var(--space-sm) 0}\@media only screen and (min-width:64rem){.header__block{padding:0}}.header__block{display:-webkit-box;display:-ms-flexbox;display:flex;color:var(--color-black);-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.topbar{font-size:var(--text-sm);line-height:2}slot[name=right]::slotted(:not(:first-child)){margin-left:var(--space-xs)}.header ::slotted(e-dropdown){display:-webkit-box;display:-ms-flexbox;display:flex}.header ::slotted(*){display:inline-block}.flex-center{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.left-headerblock::slotted(e-dropdown),.left-headerblock ::slotted(e-dropdown){margin-right:var(--space-xs);padding-right:var(--space-xs);border-right:var(--header-block-border)}.left-headerblock::slotted(a){color:var(--color-contrast-high);text-decoration:none}.left-headerblock::slotted(a):hover{cursor:pointer;color:var(--color-primary)}.right-headerblock::slotted(*),.right-headerblock ::slotted(*){margin-left:var(--space-xs)}"}}export{t as e_header_block};
import{r as s,h as t,H as l}from"./p-617dbf5e.js";class e{constructor(t){s(this,t),this.type="",this.start=1,this.classes=()=>({list:!0,[`list--${this.type}`]:""!==this.type})}render(){return"ol"===this.type?t(l,{style:{"counter-reset":`li ${this.start-1}`}},t("ol",{class:this.classes()},t("slot",null))):t("ul",{class:this.classes()},t("slot",null))}static get style(){return"\@charset \"UTF-8\";.list{list-style:none}.list li{padding-top:var(--space-xs);padding-bottom:var(--space-xs)}.list--ol{margin-left:1.5em}.list--ol li{counter-increment:li}.list--ol li:before{content:\".\" counter(li);color:var(--color-primary);font-weight:700;display:inline-block;width:1em;margin-right:.5em;margin-left:-1.5em;text-align:right;direction:rtl}.list--ul{margin-top:0;margin-bottom:0;margin-left:1em}.list--ul li:before{color:var(--color-primary);content:\"●\";display:inline-block;width:1em;margin-left:-1em}.list--bordered{width:100%}.list--bordered li{border-bottom:1px solid #d3d3d4}\@supports (--css:variables){.list--bordered li{border-bottom:1px solid var(--color-contrast-low)}}.list--icon{list-style:none}.list--icon li{display:-webkit-box;display:-ms-flexbox;display:flex}.list--dashed li{margin-bottom:0;padding:0;margin-left:1em}.list--dashed li:before{display:inline-block;content:\"-\";width:1em;margin-left:-1em}"}}export{e as e_list};
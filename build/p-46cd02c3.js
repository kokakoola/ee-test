import{c as e}from"./p-fb9e320e.js";var t=e=>encodeURIComponent(e).replace(/[!'()*]/g,e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`),r=new RegExp("%[a-f0-9]{2}","gi"),n=new RegExp("(%[a-f0-9]{2})+","gi");function o(e,t){try{return decodeURIComponent(e.join(""))}catch(e){}if(1===e.length)return e;var r=e.slice(0,t=t||1),n=e.slice(t);return Array.prototype.concat.call([],o(r),o(n))}function c(e){try{return decodeURIComponent(e)}catch(c){for(var t=e.match(r),n=1;n<t.length;n++)t=(e=o(t,n).join("")).match(r);return e}}var i=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var t={"%FE%FF":"��","%FF%FE":"��"},r=n.exec(e);r;){try{t[r[0]]=decodeURIComponent(r[0])}catch(e){var o=c(r[0]);o!==r[0]&&(t[r[0]]=o)}r=n.exec(e)}t["%C2"]="�";for(var i=Object.keys(t),a=0;a<i.length;a++){var s=i[a];e=e.replace(new RegExp(s,"g"),t[s])}return e}(e)}},a=(e,t)=>{if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];const r=e.indexOf(t);return-1===r?[e]:[e.slice(0,r),e.slice(r+t.length)]};function s(e,r){return r.encode?r.strict?t(e):encodeURIComponent(e):e}function u(e,t){return t.decode?i(e):e}function l(e){const t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function p(e){const t=(e=l(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function f(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function d(e,t){const r=function(e){let t;switch(e.arrayFormat){case"index":return(e,r,n)=>{t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=r):n[e]=r};case"bracket":return(e,r,n)=>{t=/(\[\])$/.exec(e),n[e=e.replace(/\[\]$/,"")]=t?void 0!==n[e]?[].concat(n[e],r):[r]:r};case"comma":return(e,t,r)=>{const n="string"==typeof t&&t.split("").indexOf(",")>-1?t.split(","):t;r[e]=n};default:return(e,t,r)=>{r[e]=void 0!==r[e]?[].concat(r[e],t):t}}}(t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",parseNumbers:!1,parseBooleans:!1},t)),n=Object.create(null);if("string"!=typeof e)return n;if(!(e=e.trim().replace(/^[?#&]/,"")))return n;for(const o of e.split("&")){let[e,c]=a(o.replace(/\+/g," "),"=");c=void 0===c?null:u(c,t),r(u(e,t),c,n)}for(const e of Object.keys(n)){const r=n[e];if("object"==typeof r&&null!==r)for(const e of Object.keys(r))r[e]=f(r[e],t);else n[e]=f(r,t)}return!1===t.sort?n:(!0===t.sort?Object.keys(n).sort():Object.keys(n).sort(t.sort)).reduce((e,t)=>{const r=n[t];return e[t]=Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((e,t)=>Number(e)-Number(t)).map(e=>t[e]):t}(r):r,e},Object.create(null))}var y={extract:p,parse:d,stringify:(e,t)=>{if(!e)return"";const r=function(e){switch(e.arrayFormat){case"index":return t=>(r,n)=>{const o=r.length;return void 0===n?r:null===n?[...r,[s(t,e),"[",o,"]"].join("")]:[...r,[s(t,e),"[",s(o,e),"]=",s(n,e)].join("")]};case"bracket":return t=>(r,n)=>void 0===n?r:null===n?[...r,[s(t,e),"[]"].join("")]:[...r,[s(t,e),"[]=",s(n,e)].join("")];case"comma":return t=>(r,n,o)=>null==n||0===n.length?r:0===o?[[s(t,e),"=",s(n,e)].join("")]:[[r,s(n,e)].join(",")];default:return t=>(r,n)=>void 0===n?r:null===n?[...r,s(t,e)]:[...r,[s(t,e),"=",s(n,e)].join("")]}}(t=Object.assign({encode:!0,strict:!0,arrayFormat:"none"},t)),n=Object.keys(e);return!1!==t.sort&&n.sort(t.sort),n.map(n=>{const o=e[n];return void 0===o?"":null===o?s(n,t):Array.isArray(o)?o.reduce(r(n),[]).join("&"):s(n,t)+"="+s(o,t)}).filter(e=>e.length>0).join("&")},parseUrl:(e,t)=>({url:l(e).split("?")[0]||"",query:d(p(e),t)})},g=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})},h=e(function(e){var t,r;"undefined"!=typeof window&&(t=window&&window.history&&window.history.replaceState,r=window&&window.history&&window.history.pushState),e.exports=t?function(e,n){n||(n={});var o,c,i,a=!e,s=!a&&"string"==typeof e,u=n.pushState?r:t,l=n.clear||s?{}:"string"!=typeof(c=window.location.search)?{}:(c=c.trim().replace(/^(\?|#|&)/,""))?c.split("&").reduce(function(e,t){var r=t.replace(/\+/g," ").split("="),n=r.shift(),o=r.length>0?r.join("="):void 0;return n=decodeURIComponent(n),o=void 0===o?null:decodeURIComponent(o),e.hasOwnProperty(n)?Array.isArray(e[n])?e[n].push(o):e[n]=[e[n],o]:e[n]=o,e},{}):{};if(a||s)o=e||"";else{for(var p in e){var f=e[p];f||0===f?l[p]=e[p]:delete l[p]}o=(i=l)?Object.keys(i).sort().map(function(e){var t=i[e];return Array.isArray(t)?t.sort().map(function(t){return g(e)+"="+g(t)}).join("&"):g(e)+"="+g(t)}).filter(function(e){return e.length>0}).join("&"):""}o.length&&"?"!==o.charAt(0)&&(o="?"+o),u.call(window.history,n.state||window.history.state,"",window.location.pathname+(o||""))}:function(){}});export{y as q,h as s};
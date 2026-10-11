import{c as i}from"./index-BNDEFEL9.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=i("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]),c=e=>e.replace(/([\\[\]()*_])/g,"\\$1").replaceAll("`","\\`").replace(/\r?\n/g," ");function u(e,t,n={}){const r=new URLSearchParams({version:String(t)});for(const[a,o]of Object.entries(n))Number.isInteger(o)&&o!==void 0&&o>=0&&r.set(a,String(o));return"/files/"+encodeURIComponent(e)+"?"+r.toString()}function s(e,t,n){return"["+c(e)+"]("+t+")"+(n?`

`+n.slice(0,1800).split(`
`).map(r=>"> "+r).join(`
`):"")}function g(e,t,n){return"/messages?draft="+encodeURIComponent(s(e,t,n))}function l(e,t=0,n=1e7){if(e===null||e==="")return;const r=Number(e);return Number.isSafeInteger(r)&&r>=t&&r<=n?r:void 0}export{m as L,g as a,u as f,l as q};

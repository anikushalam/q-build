"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[46825],{8602:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});var i=n(39230),o=n(56959),s=n(72791),a=n(63687),c=n(21348),l=n(90904),r=n(55336),d=n(19056),u=n(93638),_=n(6758),h=n(89891),p=n(80184);const v={inputProps:{"aria-label":"Switch demo"}},f=e=>{let{masterData:t,fid:n,instituteId:f}=e;const{t:m}=(0,i.$G)(),[w,Z]=(0,s.useState)(!1),[y,x]=(0,s.useState)({show_receipt:"Normal",online_amount_edit_access:!1,show_invoice_pattern:""}),[j]=(0,_._f)(),[b]=(0,_.s1)(),[k]=(0,_.qu)();(0,s.useEffect)((()=>{null!==t&&void 0!==t&&t.show_receipt&&x((e=>({...e,show_receipt:null===t||void 0===t?void 0:t.show_receipt}))),null!==t&&void 0!==t&&t.online_amount_edit_access&&x((e=>({...e,online_amount_edit_access:"Granted"===(null===t||void 0===t?void 0:t.online_amount_edit_access)}))),null!==t&&void 0!==t&&t.show_invoice_pattern&&x((e=>({...e,show_invoice_pattern:"Institute_Wise"===(null===t||void 0===t?void 0:t.show_invoice_pattern)?"Institute Wise":"Bank Wise"})))}),[null===t||void 0===t?void 0:t.show_receipt,null===t||void 0===t?void 0:t.online_amount_edit_access,null===t||void 0===t?void 0:t.show_invoice_pattern]);const g=(e,t)=>{x((n=>({...n,[t]:e})))};return(0,p.jsxs)(a.default,{children:[(0,p.jsx)(c.default,{children:(0,p.jsx)("div",{className:o.Z.fm_header_container,children:(0,p.jsx)("h6",{children:m("setting")})})}),(0,p.jsx)(l.Z,{}),(0,p.jsxs)(c.default,{customStyle:{paddingTop:"0"},children:[(0,p.jsxs)("div",{className:o.Z.fm_header_container,style:{gap:"2%",alignItems:"flex-end"},children:[(0,p.jsx)(d.Z,{selectLabel:m("admission_receipt_type"),selectedValue:m("please_select_receipt_type"),defalutValue:y.show_receipt,onClick:e=>g(e,"show_receipt"),options:["Normal","Society"],customStyleContainer:{width:"49%"},customListStyle:{position:"absolute",width:"100%",zIndex:"1"}}),(0,p.jsx)(u.Z,{label:"save",onAction:()=>{n&&(Z((e=>!e)),j({fid:n,bodyParameter:y}).then((()=>{Z((e=>!e))})).catch({}))},customStyle:{width:"49%",margin:"0",padding:"0.5rem 1rem"}})]}),(0,p.jsx)(l.Z,{}),(0,p.jsxs)("div",{children:[(0,p.jsx)(h.Z,{...v,checked:y.online_amount_edit_access,onChange:e=>{f&&(x((t=>({...t,online_amount_edit_access:e.target.checked}))),Z((e=>!e)),b({flow:"Institute_Admin",bodyParameter:{id:f,sid:null,online_amount_edit_access:e.target.checked?"Granted":"Not Granted"}}).then((()=>{Z((e=>!e))})).catch({}))}}),(0,p.jsx)("span",{children:m("online_install_edit_fees")})]}),(0,p.jsx)(l.Z,{}),(0,p.jsxs)("div",{className:o.Z.fm_header_container,style:{gap:"2%",alignItems:"flex-end"},children:[(0,p.jsx)(d.Z,{selectLabel:m("invoice_viewer"),selectedValue:m("please_select_invoice_viewer"),defalutValue:y.show_invoice_pattern,onClick:e=>g(e,"show_invoice_pattern"),options:["Institute Wise","Bank Wise"],customStyleContainer:{width:"49%"},customListStyle:{position:"absolute",width:"100%",zIndex:"1"}}),(0,p.jsx)(u.Z,{label:"save",onAction:()=>{n&&y.show_invoice_pattern&&(Z((e=>!e)),k({fid:n,bodyParameter:{show_invoice_pattern:"Institute Wise"===y.show_invoice_pattern?"Institute_Wise":"Bank_Wise"}}).then((()=>{Z((e=>!e))})).catch({}))},customStyle:{width:"49%",margin:"0",padding:"0.5rem 1rem"}})]})]}),w&&(0,p.jsx)(r.default,{})]})}},14036:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n(31122).Z},98278:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n(88637).Z},42071:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n(6117).Z},62971:(e,t,n)=>{function i(e,t){"function"===typeof e?e(t):e&&(e.current=t)}n.d(t,{Z:()=>i})},88637:(e,t,n)=>{n.d(t,{Z:()=>o});var i=n(72791);function o(e){let{controlled:t,default:n,name:o,state:s="value"}=e;const{current:a}=i.useRef(void 0!==t),[c,l]=i.useState(n);return[a?t:c,i.useCallback((e=>{a||l(e)}),[])]}},62876:(e,t,n)=>{n.d(t,{Z:()=>o});var i=n(72791);const o="undefined"!==typeof window?i.useLayoutEffect:i.useEffect},97054:(e,t,n)=>{n.d(t,{Z:()=>s});var i=n(72791),o=n(62876);const s=function(e){const t=i.useRef(e);return(0,o.Z)((()=>{t.current=e})),i.useCallback((function(){return(0,t.current)(...arguments)}),[])}},6117:(e,t,n)=>{n.d(t,{Z:()=>s});var i=n(72791),o=n(62971);function s(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return i.useMemo((()=>t.every((e=>null==e))?null:e=>{t.forEach((t=>{(0,o.Z)(t,e)}))}),t)}},95545:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n(72791).createContext(null)},51721:(e,t,n)=>{function i(e,t){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},i(e,t)}function o(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,i(e,t)}n.d(t,{Z:()=>o})}}]);
//# sourceMappingURL=46825.bb7687bf.chunk.js.map
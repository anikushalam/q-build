"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[8602],{8602:(e,t,i)=>{i.r(t),i.d(t,{default:()=>v});var s=i(39230),n=i(56959),a=i(72791),l=i(63687),d=i(21348),c=i(90904),o=i(55336),r=i(19056),_=i(93638),u=i(6758),h=i(89891),m=i(80184);const p={inputProps:{"aria-label":"Switch demo"}},v=e=>{let{masterData:t,fid:i,instituteId:v}=e;const{t:f}=(0,s.$G)(),[x,j]=(0,a.useState)(!1),[w,k]=(0,a.useState)({show_receipt:"Normal",online_amount_edit_access:!1}),[y]=(0,u._f)(),[g]=(0,u.s1)();(0,a.useEffect)((()=>{null!==t&&void 0!==t&&t.show_receipt&&k((e=>({...e,show_receipt:null===t||void 0===t?void 0:t.show_receipt}))),null!==t&&void 0!==t&&t.online_amount_edit_access&&k((e=>({...e,online_amount_edit_access:"Granted"===(null===t||void 0===t?void 0:t.online_amount_edit_access)})))}),[null===t||void 0===t?void 0:t.show_receipt,null===t||void 0===t?void 0:t.online_amount_edit_access]);return(0,m.jsxs)(l.default,{children:[(0,m.jsx)(d.default,{children:(0,m.jsx)("div",{className:n.Z.fm_header_container,children:(0,m.jsx)("h6",{children:f("setting")})})}),(0,m.jsx)(c.Z,{}),(0,m.jsxs)(d.default,{customStyle:{paddingTop:"0"},children:[(0,m.jsxs)("div",{className:n.Z.fm_header_container,style:{gap:"2%",alignItems:"flex-end"},children:[(0,m.jsx)(r.Z,{selectLabel:f("admission_receipt_type"),selectedValue:f("please_select_receipt_type"),defalutValue:w.show_receipt,onClick:e=>{return t=e,i="show_receipt",void k((e=>({...e,[i]:t})));var t,i},options:["Normal","Society"],customStyleContainer:{width:"49%"},customListStyle:{position:"absolute",width:"100%",zIndex:"1"}}),(0,m.jsx)(_.Z,{label:"save",onAction:()=>{i&&(j((e=>!e)),y({fid:i,bodyParameter:w}).then((()=>{j((e=>!e))})).catch({}))},customStyle:{width:"49%",margin:"0",padding:"0.5rem 1rem"}})]}),(0,m.jsx)(c.Z,{}),(0,m.jsxs)("div",{children:[(0,m.jsx)(h.Z,{...p,checked:w.online_amount_edit_access,onChange:e=>{v&&(k((t=>({...t,online_amount_edit_access:e.target.checked}))),j((e=>!e)),g({flow:"Institute_Admin",bodyParameter:{id:v,sid:null,online_amount_edit_access:e.target.checked?"Granted":"Not Granted"}}).then((()=>{j((e=>!e))})).catch({}))}}),(0,m.jsx)("span",{children:f("online_install_edit_fees")})]})]}),x&&(0,m.jsx)(o.default,{})]})}}}]);
//# sourceMappingURL=8602.eaa1e832.chunk.js.map
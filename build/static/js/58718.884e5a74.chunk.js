"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[58718],{8793:(e,n,a)=>{a.d(n,{Z:()=>d});var t=a(72791),o=a(11105),r=a(80184);const d=e=>{let{children:n}=e;return(0,r.jsx)(t.Suspense,{fallback:(0,r.jsx)(o.Z,{}),children:n})}},43425:(e,n,a)=>{a.d(n,{Z:()=>u});var t=a(72791),o=a(9447),r=a(92950),d=a(95048),i=a(70092),s=a(16256),c=a(39230),l=a(80184);const u=e=>{let{endUserSave:n,pid:a,parentStyle:u}=e;const[p,h]=t.useState(!0),{t:v}=(0,c.$G)(),k=(0,d.v9)((e=>e.idChange)),m=(0,d.I0)(),[f,g]=t.useState(null===n||void 0===n?void 0:n.some((e=>e===(null===k||void 0===k?void 0:k.id)))),{postSaveRefetch:b}=(0,o.rq)({data:{pid:a,viewAs:s.UJ},skip:p});return(0,l.jsx)(l.Fragment,{children:f?(0,l.jsxs)("div",{className:u,onClick:()=>{m(i.p.removeSave({pid:a,id:null===k||void 0===k?void 0:k.id})),h(!1),g(!1),b()},children:[(0,l.jsx)("img",{src:"/images/unbookmark-icon.svg",alt:"",className:r.Z.bookmarkImage}),(0,l.jsx)("p",{children:v("save")})]}):(0,l.jsxs)("div",{className:u,onClick:()=>{m(i.p.addSave({pid:a,id:null===k||void 0===k?void 0:k.id})),h(!1),g(!0),b()},children:[(0,l.jsx)("img",{src:"/images/bookmark-icon.svg",alt:"",className:r.Z.bookmarkImage}),(0,l.jsx)("p",{children:v("save")})]})})}},93840:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a(72791).createContext(void 0)},52930:(e,n,a)=>{a.d(n,{Z:()=>r});var t=a(72791),o=a(93840);function r(){return t.useContext(o.Z)}},97278:(e,n,a)=>{a.d(n,{Z:()=>Z});var t=a(63366),o=a(87462),r=a(72791),d=a(59278),i=a(94419),s=a(14036),c=a(66934),l=a(98278),u=a(52930),p=a(87171),h=a(75878),v=a(21217);function k(e){return(0,v.Z)("PrivateSwitchBase",e)}(0,h.Z)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var m=a(80184);const f=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],g=(0,c.ZP)(p.Z)((e=>{let{ownerState:n}=e;return(0,o.Z)({padding:9,borderRadius:"50%"},"start"===n.edge&&{marginLeft:"small"===n.size?-3:-12},"end"===n.edge&&{marginRight:"small"===n.size?-3:-12})})),b=(0,c.ZP)("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),Z=r.forwardRef((function(e,n){const{autoFocus:a,checked:r,checkedIcon:c,className:p,defaultChecked:h,disabled:v,disableFocusRipple:Z=!1,edge:x=!1,icon:S,id:w,inputProps:C,inputRef:I,name:F,onBlur:j,onChange:y,onFocus:N,readOnly:R,required:_=!1,tabIndex:B,type:P,value:q}=e,U=(0,t.Z)(e,f),[$,z]=(0,l.Z)({controlled:r,default:Boolean(h),name:"SwitchBase",state:"checked"}),D=(0,u.Z)();let L=v;D&&"undefined"===typeof L&&(L=D.disabled);const M="checkbox"===P||"radio"===P,O=(0,o.Z)({},e,{checked:$,disabled:L,disableFocusRipple:Z,edge:x}),E=(e=>{const{classes:n,checked:a,disabled:t,edge:o}=e,r={root:["root",a&&"checked",t&&"disabled",o&&"edge".concat((0,s.Z)(o))],input:["input"]};return(0,i.Z)(r,k,n)})(O);return(0,m.jsxs)(g,(0,o.Z)({component:"span",className:(0,d.Z)(E.root,p),centerRipple:!0,focusRipple:!Z,disabled:L,tabIndex:null,role:void 0,onFocus:e=>{N&&N(e),D&&D.onFocus&&D.onFocus(e)},onBlur:e=>{j&&j(e),D&&D.onBlur&&D.onBlur(e)},ownerState:O,ref:n},U,{children:[(0,m.jsx)(b,(0,o.Z)({autoFocus:a,checked:r,defaultChecked:h,className:E.input,disabled:L,id:M?w:void 0,name:F,onChange:e=>{if(e.nativeEvent.defaultPrevented)return;const n=e.target.checked;z(n),y&&y(e,n)},readOnly:R,ref:I,required:_,ownerState:O,tabIndex:B,type:P},"checkbox"===P&&void 0===q?{}:{value:q},C)),$?c:S]}))}))},13688:(e,n,a)=>{a.d(n,{WU:()=>c});var t=["second","minute","hour","day","week","month","year"];var o=["\u79d2","\u5206\u949f","\u5c0f\u65f6","\u5929","\u5468","\u4e2a\u6708","\u5e74"];var r={},d=function(e,n){r[e]=n},i=[60,60,24,7,365/7/12,12];function s(e){return e instanceof Date?e:!isNaN(e)||/^\d+$/.test(e)?new Date(parseInt(e)):(e=(e||"").trim().replace(/\.\d+/,"").replace(/-/,"/").replace(/-/,"/").replace(/(\d)T(\d)/,"$1 $2").replace(/Z/," UTC").replace(/([+-]\d\d):?(\d\d)/," $1$2"),new Date(e))}var c=function(e,n,a){var t=function(e,n){return(+(n?s(n):new Date)-+s(e))/1e3}(e,a&&a.relativeDate);return function(e,n){for(var a=e<0?1:0,t=e=Math.abs(e),o=0;e>=i[o]&&o<i.length;o++)e/=i[o];return(e=Math.floor(e))>(0===(o*=2)?9:1)&&(o+=1),n(e,o,t)[a].replace("%s",e.toString())}(t,function(e){return r[e]||r.en_US}(n))};d("en_US",(function(e,n){if(0===n)return["just now","right now"];var a=t[Math.floor(n/2)];return e>1&&(a+="s"),[e+" "+a+" ago","in "+e+" "+a]})),d("zh_CN",(function(e,n){if(0===n)return["\u521a\u521a","\u7247\u523b\u540e"];var a=o[~~(n/2)];return[e+" "+a+"\u524d",e+" "+a+"\u540e"]}))},92950:(e,n,a)=>{a.d(n,{Z:()=>t});const t={likeImage:"Like_likeImage__Foz5V",bookmarkImage:"Like_bookmarkImage__SPKG5"}}}]);
//# sourceMappingURL=58718.884e5a74.chunk.js.map
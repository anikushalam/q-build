(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[81296],{45649:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.createSvgIcon}});var o=a(28610)},64554:(e,t,a)=>{"use strict";a.d(t,{Z:()=>f});var o=a(87462),r=a(63366),n=a(72791),i=a(30831),l=a(53842),s=a(60104),c=a(78519),u=a(30418),d=a(80184);const p=["className","component"];var m=a(55902),v=a(36395),h=a(988);const b=(0,v.Z)(),g=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{themeId:t,defaultTheme:a,defaultClassName:m="MuiBox-root",generateClassName:v}=e,h=(0,l.ZP)("div",{shouldForwardProp:e=>"theme"!==e&&"sx"!==e&&"as"!==e})(s.Z);return n.forwardRef((function(e,n){const l=(0,u.Z)(a),s=(0,c.Z)(e),{className:b,component:g="div"}=s,f=(0,r.Z)(s,p);return(0,d.jsx)(h,(0,o.Z)({as:g,ref:n,className:(0,i.Z)(b,v?v(m):m),theme:t&&l[t]||l},f))}))}({themeId:h.Z,defaultTheme:b,defaultClassName:"MuiBox-root",generateClassName:m.Z.generate}),f=g},5849:(e,t,a)=>{"use strict";a.d(t,{Z:()=>w});var o=a(63366),r=a(87462),n=a(72791),i=a(59278),l=a(35735),s=a(94419),c=a(12065),u=a(66934),d=a(31402),p=a(87171),m=a(14036),v=a(91143),h=a(91793),b=a(86340),g=a(80184);const f=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],Z=e=>(0,r.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}}),x=(0,u.ZP)(p.Z,{shouldForwardProp:e=>(0,u.FO)(e)||"classes"===e,name:"MuiButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[a.variant],t["".concat(a.variant).concat((0,m.Z)(a.color))],t["size".concat((0,m.Z)(a.size))],t["".concat(a.variant,"Size").concat((0,m.Z)(a.size))],"inherit"===a.color&&t.colorInherit,a.disableElevation&&t.disableElevation,a.fullWidth&&t.fullWidth]}})((e=>{let{theme:t,ownerState:a}=e;var o,n;const i="light"===t.palette.mode?t.palette.grey[300]:t.palette.grey[800],l="light"===t.palette.mode?t.palette.grey.A100:t.palette.grey[700];return(0,r.Z)({},t.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(t.vars||t).shape.borderRadius,transition:t.transitions.create(["background-color","box-shadow","border-color","color"],{duration:t.transitions.duration.short}),"&:hover":(0,r.Z)({textDecoration:"none",backgroundColor:t.vars?"rgba(".concat(t.vars.palette.text.primaryChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,c.Fq)(t.palette.text.primary,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===a.variant&&"inherit"!==a.color&&{backgroundColor:t.vars?"rgba(".concat(t.vars.palette[a.color].mainChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,c.Fq)(t.palette[a.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===a.variant&&"inherit"!==a.color&&{border:"1px solid ".concat((t.vars||t).palette[a.color].main),backgroundColor:t.vars?"rgba(".concat(t.vars.palette[a.color].mainChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,c.Fq)(t.palette[a.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===a.variant&&{backgroundColor:t.vars?t.vars.palette.Button.inheritContainedHoverBg:l,boxShadow:(t.vars||t).shadows[4],"@media (hover: none)":{boxShadow:(t.vars||t).shadows[2],backgroundColor:(t.vars||t).palette.grey[300]}},"contained"===a.variant&&"inherit"!==a.color&&{backgroundColor:(t.vars||t).palette[a.color].dark,"@media (hover: none)":{backgroundColor:(t.vars||t).palette[a.color].main}}),"&:active":(0,r.Z)({},"contained"===a.variant&&{boxShadow:(t.vars||t).shadows[8]}),["&.".concat(v.Z.focusVisible)]:(0,r.Z)({},"contained"===a.variant&&{boxShadow:(t.vars||t).shadows[6]}),["&.".concat(v.Z.disabled)]:(0,r.Z)({color:(t.vars||t).palette.action.disabled},"outlined"===a.variant&&{border:"1px solid ".concat((t.vars||t).palette.action.disabledBackground)},"contained"===a.variant&&{color:(t.vars||t).palette.action.disabled,boxShadow:(t.vars||t).shadows[0],backgroundColor:(t.vars||t).palette.action.disabledBackground})},"text"===a.variant&&{padding:"6px 8px"},"text"===a.variant&&"inherit"!==a.color&&{color:(t.vars||t).palette[a.color].main},"outlined"===a.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===a.variant&&"inherit"!==a.color&&{color:(t.vars||t).palette[a.color].main,border:t.vars?"1px solid rgba(".concat(t.vars.palette[a.color].mainChannel," / 0.5)"):"1px solid ".concat((0,c.Fq)(t.palette[a.color].main,.5))},"contained"===a.variant&&{color:t.vars?t.vars.palette.text.primary:null==(o=(n=t.palette).getContrastText)?void 0:o.call(n,t.palette.grey[300]),backgroundColor:t.vars?t.vars.palette.Button.inheritContainedBg:i,boxShadow:(t.vars||t).shadows[2]},"contained"===a.variant&&"inherit"!==a.color&&{color:(t.vars||t).palette[a.color].contrastText,backgroundColor:(t.vars||t).palette[a.color].main},"inherit"===a.color&&{color:"inherit",borderColor:"currentColor"},"small"===a.size&&"text"===a.variant&&{padding:"4px 5px",fontSize:t.typography.pxToRem(13)},"large"===a.size&&"text"===a.variant&&{padding:"8px 11px",fontSize:t.typography.pxToRem(15)},"small"===a.size&&"outlined"===a.variant&&{padding:"3px 9px",fontSize:t.typography.pxToRem(13)},"large"===a.size&&"outlined"===a.variant&&{padding:"7px 21px",fontSize:t.typography.pxToRem(15)},"small"===a.size&&"contained"===a.variant&&{padding:"4px 10px",fontSize:t.typography.pxToRem(13)},"large"===a.size&&"contained"===a.variant&&{padding:"8px 22px",fontSize:t.typography.pxToRem(15)},a.fullWidth&&{width:"100%"})}),(e=>{let{ownerState:t}=e;return t.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},["&.".concat(v.Z.focusVisible)]:{boxShadow:"none"},"&:active":{boxShadow:"none"},["&.".concat(v.Z.disabled)]:{boxShadow:"none"}}})),y=(0,u.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.startIcon,t["iconSize".concat((0,m.Z)(a.size))]]}})((e=>{let{ownerState:t}=e;return(0,r.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===t.size&&{marginLeft:-2},Z(t))})),S=(0,u.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.endIcon,t["iconSize".concat((0,m.Z)(a.size))]]}})((e=>{let{ownerState:t}=e;return(0,r.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===t.size&&{marginRight:-2},Z(t))})),w=n.forwardRef((function(e,t){const a=n.useContext(h.Z),c=n.useContext(b.Z),u=(0,l.Z)(a,e),p=(0,d.Z)({props:u,name:"MuiButton"}),{children:Z,color:w="primary",component:k="button",className:z,disabled:C=!1,disableElevation:R=!1,disableFocusRipple:L=!1,endIcon:M,focusVisibleClassName:P,fullWidth:I=!1,size:N="medium",startIcon:T,type:A,variant:E="text"}=p,F=(0,o.Z)(p,f),j=(0,r.Z)({},p,{color:w,component:k,disabled:C,disableElevation:R,disableFocusRipple:L,fullWidth:I,size:N,type:A,variant:E}),B=(e=>{const{color:t,disableElevation:a,fullWidth:o,size:n,variant:i,classes:l}=e,c={root:["root",i,"".concat(i).concat((0,m.Z)(t)),"size".concat((0,m.Z)(n)),"".concat(i,"Size").concat((0,m.Z)(n)),"inherit"===t&&"colorInherit",a&&"disableElevation",o&&"fullWidth"],label:["label"],startIcon:["startIcon","iconSize".concat((0,m.Z)(n))],endIcon:["endIcon","iconSize".concat((0,m.Z)(n))]},u=(0,s.Z)(c,v.F,l);return(0,r.Z)({},l,u)})(j),O=T&&(0,g.jsx)(y,{className:B.startIcon,ownerState:j,children:T}),V=M&&(0,g.jsx)(S,{className:B.endIcon,ownerState:j,children:M}),W=c||"";return(0,g.jsxs)(x,(0,r.Z)({ownerState:j,className:(0,i.Z)(a.className,B.root,z,W),component:k,disabled:C,focusRipple:!L,focusVisibleClassName:(0,i.Z)(B.focusVisible,P),ref:t,type:A},F,{classes:B,children:[O,Z,V]}))}))},91143:(e,t,a)=>{"use strict";a.d(t,{F:()=>n,Z:()=>i});var o=a(75878),r=a(21217);function n(e){return(0,r.Z)("MuiButton",e)}const i=(0,o.Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"])},86340:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});const o=a(72791).createContext(void 0)},91793:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});const o=a(72791).createContext({})},77386:(e,t,a)=>{"use strict";a.d(t,{Z:()=>v});var o=a(63366),r=a(87462),n=a(72791),i=a(59278),l=a(94419),s=a(66934),c=a(31402),u=a(25552),d=a(80184);const p=["className","disableSpacing"],m=(0,s.ZP)("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,!a.disableSpacing&&t.spacing]}})((e=>{let{ownerState:t}=e;return(0,r.Z)({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!t.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})})),v=n.forwardRef((function(e,t){const a=(0,c.Z)({props:e,name:"MuiDialogActions"}),{className:n,disableSpacing:s=!1}=a,v=(0,o.Z)(a,p),h=(0,r.Z)({},a,{disableSpacing:s}),b=(e=>{const{classes:t,disableSpacing:a}=e,o={root:["root",!a&&"spacing"]};return(0,l.Z)(o,u.d,t)})(h);return(0,d.jsx)(m,(0,r.Z)({className:(0,i.Z)(b.root,n),ownerState:h,ref:t},v))}))},25552:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i,d:()=>n});var o=a(75878),r=a(21217);function n(e){return(0,r.Z)("MuiDialogActions",e)}const i=(0,o.Z)("MuiDialogActions",["root","spacing"])},4899:(e,t,a)=>{"use strict";a.d(t,{Z:()=>h});var o=a(63366),r=a(87462),n=a(72791),i=a(59278),l=a(94419),s=a(66934),c=a(31402),u=a(51219),d=a(17673),p=a(80184);const m=["className","dividers"],v=(0,s.ZP)("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.dividers&&t.dividers]}})((e=>{let{theme:t,ownerState:a}=e;return(0,r.Z)({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},a.dividers?{padding:"16px 24px",borderTop:"1px solid ".concat((t.vars||t).palette.divider),borderBottom:"1px solid ".concat((t.vars||t).palette.divider)}:{[".".concat(d.Z.root," + &")]:{paddingTop:0}})})),h=n.forwardRef((function(e,t){const a=(0,c.Z)({props:e,name:"MuiDialogContent"}),{className:n,dividers:s=!1}=a,d=(0,o.Z)(a,m),h=(0,r.Z)({},a,{dividers:s}),b=(e=>{const{classes:t,dividers:a}=e,o={root:["root",a&&"dividers"]};return(0,l.Z)(o,u.G,t)})(h);return(0,p.jsx)(v,(0,r.Z)({className:(0,i.Z)(b.root,n),ownerState:h,ref:t},d))}))},51219:(e,t,a)=>{"use strict";a.d(t,{G:()=>n,Z:()=>i});var o=a(75878),r=a(21217);function n(e){return(0,r.Z)("MuiDialogContent",e)}const i=(0,o.Z)("MuiDialogContent",["root","dividers"])},17673:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i,a:()=>n});var o=a(75878),r=a(21217);function n(e){return(0,r.Z)("MuiDialogTitle",e)}const i=(0,o.Z)("MuiDialogTitle",["root"])},59256:(e,t,a)=>{"use strict";a.d(t,{jz:()=>X,J$:()=>H,_U:()=>D,l7:()=>W,gs:()=>q,Uj:()=>_,Kq:()=>Y,ZP:()=>U});var o=a(63366),r=a(87462),n=a(72791),i=a(59278),l=a(94419),s=a(43572),c=a(20627),u=a(84913),d=a(88637),p=a(45372),m=a(6117),v=a(62876),h=a(97054),b=a(95573);function g(e,t){return e-t}function f(e,t,a){return null==e?t:Math.min(Math.max(t,e),a)}function Z(e,t){var a;const{index:o}=null!=(a=e.reduce(((e,a,o)=>{const r=Math.abs(t-a);return null===e||r<e.distance||r===e.distance?{distance:r,index:o}:e}),null))?a:{};return o}function x(e,t){if(void 0!==t.current&&e.changedTouches){const a=e;for(let e=0;e<a.changedTouches.length;e+=1){const o=a.changedTouches[e];if(o.identifier===t.current)return{x:o.clientX,y:o.clientY}}return!1}return{x:e.clientX,y:e.clientY}}function y(e,t,a){return 100*(e-t)/(a-t)}function S(e,t,a){const o=Math.round((e-a)/t)*t+a;return Number(o.toFixed(function(e){if(Math.abs(e)<1){const t=e.toExponential().split("e-"),a=t[0].split(".")[1];return(a?a.length:0)+parseInt(t[1],10)}const t=e.toString().split(".")[1];return t?t.length:0}(t)))}function w(e){let{values:t,newValue:a,index:o}=e;const r=t.slice();return r[o]=a,r.sort(g)}function k(e){let{sliderRef:t,activeIndex:a,setActive:o}=e;var r,n;const i=(0,u.Z)(t.current);var l;null!=(r=t.current)&&r.contains(i.activeElement)&&Number(null==i||null==(n=i.activeElement)?void 0:n.getAttribute("data-index"))===a||(null==(l=t.current)||l.querySelector('[type="range"][data-index="'.concat(a,'"]')).focus());o&&o(a)}function z(e,t){return"number"===typeof e&&"number"===typeof t?e===t:"object"===typeof e&&"object"===typeof t&&function(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:(e,t)=>e===t;return e.length===t.length&&e.every(((e,o)=>a(e,t[o])))}(e,t)}const C={horizontal:{offset:e=>({left:"".concat(e,"%")}),leap:e=>({width:"".concat(e,"%")})},"horizontal-reverse":{offset:e=>({right:"".concat(e,"%")}),leap:e=>({width:"".concat(e,"%")})},vertical:{offset:e=>({bottom:"".concat(e,"%")}),leap:e=>({height:"".concat(e,"%")})}},R=e=>e;let L;function M(){return void 0===L&&(L="undefined"===typeof CSS||"function"!==typeof CSS.supports||CSS.supports("touch-action","none")),L}function P(e){const{"aria-labelledby":t,defaultValue:a,disabled:o=!1,disableSwap:i=!1,isRtl:l=!1,marks:s=!1,max:c=100,min:L=0,name:P,onChange:I,onChangeCommitted:N,orientation:T="horizontal",rootRef:A,scale:E=R,step:F=1,tabIndex:j,value:B}=e,O=n.useRef(),[V,W]=n.useState(-1),[D,_]=n.useState(-1),[q,Y]=n.useState(!1),X=n.useRef(0),[H,G]=(0,d.Z)({controlled:B,default:null!=a?a:L,name:"Slider"}),J=I&&((e,t,a)=>{const o=e.nativeEvent||e,r=new o.constructor(o.type,o);Object.defineProperty(r,"target",{writable:!0,value:{value:t,name:P}}),I(r,t,a)}),U=Array.isArray(H);let $=U?H.slice().sort(g):[H];$=$.map((e=>f(e,L,c)));const K=!0===s&&null!==F?[...Array(Math.floor((c-L)/F)+1)].map(((e,t)=>({value:L+F*t}))):s||[],Q=K.map((e=>e.value)),{isFocusVisibleRef:ee,onBlur:te,onFocus:ae,ref:oe}=(0,p.Z)(),[re,ne]=n.useState(-1),ie=n.useRef(),le=(0,m.Z)(oe,ie),se=(0,m.Z)(A,le),ce=e=>t=>{var a;const o=Number(t.currentTarget.getAttribute("data-index"));ae(t),!0===ee.current&&ne(o),_(o),null==e||null==(a=e.onFocus)||a.call(e,t)},ue=e=>t=>{var a;te(t),!1===ee.current&&ne(-1),_(-1),null==e||null==(a=e.onBlur)||a.call(e,t)};(0,v.Z)((()=>{var e;o&&ie.current.contains(document.activeElement)&&(null==(e=document.activeElement)||e.blur())}),[o]),o&&-1!==V&&W(-1),o&&-1!==re&&ne(-1);const de=e=>t=>{var a;null==(a=e.onChange)||a.call(e,t);const o=Number(t.currentTarget.getAttribute("data-index")),r=$[o],n=Q.indexOf(r);let l=t.target.valueAsNumber;if(K&&null==F){const e=Q[Q.length-1];l=l>e?e:l<Q[0]?Q[0]:l<r?Q[n-1]:Q[n+1]}if(l=f(l,L,c),U){i&&(l=f(l,$[o-1]||-1/0,$[o+1]||1/0));const e=l;l=w({values:$,newValue:l,index:o});let t=o;i||(t=l.indexOf(e)),k({sliderRef:ie,activeIndex:t})}G(l),ne(o),J&&!z(l,H)&&J(t,l,o),N&&N(t,l)},pe=n.useRef();let me=T;l&&"horizontal"===T&&(me+="-reverse");const ve=e=>{let{finger:t,move:a=!1}=e;const{current:o}=ie,{width:r,height:n,bottom:l,left:s}=o.getBoundingClientRect();let u,d;if(u=0===me.indexOf("vertical")?(l-t.y)/n:(t.x-s)/r,-1!==me.indexOf("-reverse")&&(u=1-u),d=function(e,t,a){return(a-t)*e+t}(u,L,c),F)d=S(d,F,L);else{const e=Z(Q,d);d=Q[e]}d=f(d,L,c);let p=0;if(U){p=a?pe.current:Z($,d),i&&(d=f(d,$[p-1]||-1/0,$[p+1]||1/0));const e=d;d=w({values:$,newValue:d,index:p}),i&&a||(p=d.indexOf(e),pe.current=p)}return{newValue:d,activeIndex:p}},he=(0,h.Z)((e=>{const t=x(e,O);if(!t)return;if(X.current+=1,"mousemove"===e.type&&0===e.buttons)return void be(e);const{newValue:a,activeIndex:o}=ve({finger:t,move:!0});k({sliderRef:ie,activeIndex:o,setActive:W}),G(a),!q&&X.current>2&&Y(!0),J&&!z(a,H)&&J(e,a,o)})),be=(0,h.Z)((e=>{const t=x(e,O);if(Y(!1),!t)return;const{newValue:a}=ve({finger:t,move:!0});W(-1),"touchend"===e.type&&_(-1),N&&N(e,a),O.current=void 0,fe()})),ge=(0,h.Z)((e=>{if(o)return;M()||e.preventDefault();const t=e.changedTouches[0];null!=t&&(O.current=t.identifier);const a=x(e,O);if(!1!==a){const{newValue:t,activeIndex:o}=ve({finger:a});k({sliderRef:ie,activeIndex:o,setActive:W}),G(t),J&&!z(t,H)&&J(e,t,o)}X.current=0;const r=(0,u.Z)(ie.current);r.addEventListener("touchmove",he),r.addEventListener("touchend",be)})),fe=n.useCallback((()=>{const e=(0,u.Z)(ie.current);e.removeEventListener("mousemove",he),e.removeEventListener("mouseup",be),e.removeEventListener("touchmove",he),e.removeEventListener("touchend",be)}),[be,he]);n.useEffect((()=>{const{current:e}=ie;return e.addEventListener("touchstart",ge,{passive:M()}),()=>{e.removeEventListener("touchstart",ge,{passive:M()}),fe()}}),[fe,ge]),n.useEffect((()=>{o&&fe()}),[o,fe]);const Ze=e=>t=>{var a;if(null==(a=e.onMouseDown)||a.call(e,t),o)return;if(t.defaultPrevented)return;if(0!==t.button)return;t.preventDefault();const r=x(t,O);if(!1!==r){const{newValue:e,activeIndex:a}=ve({finger:r});k({sliderRef:ie,activeIndex:a,setActive:W}),G(e),J&&!z(e,H)&&J(t,e,a)}X.current=0;const n=(0,u.Z)(ie.current);n.addEventListener("mousemove",he),n.addEventListener("mouseup",be)},xe=y(U?$[0]:L,L,c),ye=y($[$.length-1],L,c)-xe,Se=e=>t=>{var a;null==(a=e.onMouseOver)||a.call(e,t);const o=Number(t.currentTarget.getAttribute("data-index"));_(o)},we=e=>t=>{var a;null==(a=e.onMouseLeave)||a.call(e,t),_(-1)};return{active:V,axis:me,axisProps:C,dragging:q,focusedThumbIndex:re,getHiddenInputProps:function(){let a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var n;const i={onChange:de(a||{}),onFocus:ce(a||{}),onBlur:ue(a||{})},s=(0,r.Z)({},a,i);return(0,r.Z)({tabIndex:j,"aria-labelledby":t,"aria-orientation":T,"aria-valuemax":E(c),"aria-valuemin":E(L),name:P,type:"range",min:e.min,max:e.max,step:null===e.step&&e.marks?"any":null!=(n=e.step)?n:void 0,disabled:o},s,{style:(0,r.Z)({},b.Z,{direction:l?"rtl":"ltr",width:"100%",height:"100%"})})},getRootProps:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t={onMouseDown:Ze(e||{})},a=(0,r.Z)({},e,t);return(0,r.Z)({ref:se},a)},getThumbProps:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t={onMouseOver:Se(e||{}),onMouseLeave:we(e||{})};return(0,r.Z)({},e,t)},marks:K,open:D,range:U,rootRef:se,trackLeap:ye,trackOffset:xe,values:$,getThumbStyle:e=>({pointerEvents:-1!==V&&V!==e?"none":void 0})}}var I=a(12065),N=a(31402),T=a(66934),A=a(13967);const E=e=>!e||!(0,c.X)(e);var F=a(14036),j=a(69464),B=a(80184);const O=["aria-label","aria-valuetext","aria-labelledby","component","components","componentsProps","color","classes","className","disableSwap","disabled","getAriaLabel","getAriaValueText","marks","max","min","name","onChange","onChangeCommitted","orientation","size","step","scale","slotProps","slots","tabIndex","track","value","valueLabelDisplay","valueLabelFormat"];function V(e){return e}const W=(0,T.ZP)("span",{name:"MuiSlider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t["color".concat((0,F.Z)(a.color))],"medium"!==a.size&&t["size".concat((0,F.Z)(a.size))],a.marked&&t.marked,"vertical"===a.orientation&&t.vertical,"inverted"===a.track&&t.trackInverted,!1===a.track&&t.trackFalse]}})((e=>{let{theme:t,ownerState:a}=e;return(0,r.Z)({borderRadius:12,boxSizing:"content-box",display:"inline-block",position:"relative",cursor:"pointer",touchAction:"none",color:(t.vars||t).palette[a.color].main,WebkitTapHighlightColor:"transparent"},"horizontal"===a.orientation&&(0,r.Z)({height:4,width:"100%",padding:"13px 0","@media (pointer: coarse)":{padding:"20px 0"}},"small"===a.size&&{height:2},a.marked&&{marginBottom:20}),"vertical"===a.orientation&&(0,r.Z)({height:"100%",width:4,padding:"0 13px","@media (pointer: coarse)":{padding:"0 20px"}},"small"===a.size&&{width:2},a.marked&&{marginRight:44}),{"@media print":{colorAdjust:"exact"},["&.".concat(j.Z.disabled)]:{pointerEvents:"none",cursor:"default",color:(t.vars||t).palette.grey[400]},["&.".concat(j.Z.dragging)]:{["& .".concat(j.Z.thumb,", & .").concat(j.Z.track)]:{transition:"none"}}})})),D=(0,T.ZP)("span",{name:"MuiSlider",slot:"Rail",overridesResolver:(e,t)=>t.rail})((e=>{let{ownerState:t}=e;return(0,r.Z)({display:"block",position:"absolute",borderRadius:"inherit",backgroundColor:"currentColor",opacity:.38},"horizontal"===t.orientation&&{width:"100%",height:"inherit",top:"50%",transform:"translateY(-50%)"},"vertical"===t.orientation&&{height:"100%",width:"inherit",left:"50%",transform:"translateX(-50%)"},"inverted"===t.track&&{opacity:1})})),_=(0,T.ZP)("span",{name:"MuiSlider",slot:"Track",overridesResolver:(e,t)=>t.track})((e=>{let{theme:t,ownerState:a}=e;const o="light"===t.palette.mode?(0,I.$n)(t.palette[a.color].main,.62):(0,I._j)(t.palette[a.color].main,.5);return(0,r.Z)({display:"block",position:"absolute",borderRadius:"inherit",border:"1px solid currentColor",backgroundColor:"currentColor",transition:t.transitions.create(["left","width","bottom","height"],{duration:t.transitions.duration.shortest})},"small"===a.size&&{border:"none"},"horizontal"===a.orientation&&{height:"inherit",top:"50%",transform:"translateY(-50%)"},"vertical"===a.orientation&&{width:"inherit",left:"50%",transform:"translateX(-50%)"},!1===a.track&&{display:"none"},"inverted"===a.track&&{backgroundColor:t.vars?t.vars.palette.Slider["".concat(a.color,"Track")]:o,borderColor:t.vars?t.vars.palette.Slider["".concat(a.color,"Track")]:o})})),q=(0,T.ZP)("span",{name:"MuiSlider",slot:"Thumb",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.thumb,t["thumbColor".concat((0,F.Z)(a.color))],"medium"!==a.size&&t["thumbSize".concat((0,F.Z)(a.size))]]}})((e=>{let{theme:t,ownerState:a}=e;return(0,r.Z)({position:"absolute",width:20,height:20,boxSizing:"border-box",borderRadius:"50%",outline:0,backgroundColor:"currentColor",display:"flex",alignItems:"center",justifyContent:"center",transition:t.transitions.create(["box-shadow","left","bottom"],{duration:t.transitions.duration.shortest})},"small"===a.size&&{width:12,height:12},"horizontal"===a.orientation&&{top:"50%",transform:"translate(-50%, -50%)"},"vertical"===a.orientation&&{left:"50%",transform:"translate(-50%, 50%)"},{"&:before":(0,r.Z)({position:"absolute",content:'""',borderRadius:"inherit",width:"100%",height:"100%",boxShadow:(t.vars||t).shadows[2]},"small"===a.size&&{boxShadow:"none"}),"&::after":{position:"absolute",content:'""',borderRadius:"50%",width:42,height:42,top:"50%",left:"50%",transform:"translate(-50%, -50%)"},["&:hover, &.".concat(j.Z.focusVisible)]:{boxShadow:"0px 0px 0px 8px ".concat(t.vars?"rgba(".concat(t.vars.palette[a.color].mainChannel," / 0.16)"):(0,I.Fq)(t.palette[a.color].main,.16)),"@media (hover: none)":{boxShadow:"none"}},["&.".concat(j.Z.active)]:{boxShadow:"0px 0px 0px 14px ".concat(t.vars?"rgba(".concat(t.vars.palette[a.color].mainChannel," / 0.16)"):(0,I.Fq)(t.palette[a.color].main,.16))},["&.".concat(j.Z.disabled)]:{"&:hover":{boxShadow:"none"}}})})),Y=(0,T.ZP)((function(e){const{children:t,className:a,value:o}=e,r=(e=>{const{open:t}=e;return{offset:(0,i.Z)(t&&j.Z.valueLabelOpen),circle:j.Z.valueLabelCircle,label:j.Z.valueLabelLabel}})(e);return t?n.cloneElement(t,{className:(0,i.Z)(t.props.className)},(0,B.jsxs)(n.Fragment,{children:[t.props.children,(0,B.jsx)("span",{className:(0,i.Z)(r.offset,a),"aria-hidden":!0,children:(0,B.jsx)("span",{className:r.circle,children:(0,B.jsx)("span",{className:r.label,children:o})})})]})):null}),{name:"MuiSlider",slot:"ValueLabel",overridesResolver:(e,t)=>t.valueLabel})((e=>{let{theme:t,ownerState:a}=e;return(0,r.Z)({["&.".concat(j.Z.valueLabelOpen)]:{transform:"".concat("vertical"===a.orientation?"translateY(-50%)":"translateY(-100%)"," scale(1)")},zIndex:1,whiteSpace:"nowrap"},t.typography.body2,{fontWeight:500,transition:t.transitions.create(["transform"],{duration:t.transitions.duration.shortest}),transform:"".concat("vertical"===a.orientation?"translateY(-50%)":"translateY(-100%)"," scale(0)"),position:"absolute",backgroundColor:(t.vars||t).palette.grey[600],borderRadius:2,color:(t.vars||t).palette.common.white,display:"flex",alignItems:"center",justifyContent:"center",padding:"0.25rem 0.75rem"},"horizontal"===a.orientation&&{top:"-10px",transformOrigin:"bottom center","&:before":{position:"absolute",content:'""',width:8,height:8,transform:"translate(-50%, 50%) rotate(45deg)",backgroundColor:"inherit",bottom:0,left:"50%"}},"vertical"===a.orientation&&{right:"small"===a.size?"20px":"30px",top:"50%",transformOrigin:"right center","&:before":{position:"absolute",content:'""',width:8,height:8,transform:"translate(-50%, -50%) rotate(45deg)",backgroundColor:"inherit",right:-8,top:"50%"}},"small"===a.size&&{fontSize:t.typography.pxToRem(12),padding:"0.25rem 0.5rem"})})),X=(0,T.ZP)("span",{name:"MuiSlider",slot:"Mark",shouldForwardProp:e=>(0,T.Dz)(e)&&"markActive"!==e,overridesResolver:(e,t)=>{const{markActive:a}=e;return[t.mark,a&&t.markActive]}})((e=>{let{theme:t,ownerState:a,markActive:o}=e;return(0,r.Z)({position:"absolute",width:2,height:2,borderRadius:1,backgroundColor:"currentColor"},"horizontal"===a.orientation&&{top:"50%",transform:"translate(-1px, -50%)"},"vertical"===a.orientation&&{left:"50%",transform:"translate(-50%, 1px)"},o&&{backgroundColor:(t.vars||t).palette.background.paper,opacity:.8})})),H=(0,T.ZP)("span",{name:"MuiSlider",slot:"MarkLabel",shouldForwardProp:e=>(0,T.Dz)(e)&&"markLabelActive"!==e,overridesResolver:(e,t)=>t.markLabel})((e=>{let{theme:t,ownerState:a,markLabelActive:o}=e;return(0,r.Z)({},t.typography.body2,{color:(t.vars||t).palette.text.secondary,position:"absolute",whiteSpace:"nowrap"},"horizontal"===a.orientation&&{top:30,transform:"translateX(-50%)","@media (pointer: coarse)":{top:40}},"vertical"===a.orientation&&{left:36,transform:"translateY(50%)","@media (pointer: coarse)":{left:44}},o&&{color:(t.vars||t).palette.text.primary})})),G=e=>{let{children:t}=e;return t},J=n.forwardRef((function(e,t){var a,u,d,p,m,v,h,b,g,f,Z,x,S,w,k,z,C,R,L,M,I,T,J,U;const $=(0,N.Z)({props:e,name:"MuiSlider"}),K="rtl"===(0,A.Z)().direction,{"aria-label":Q,"aria-valuetext":ee,"aria-labelledby":te,component:ae="span",components:oe={},componentsProps:re={},color:ne="primary",classes:ie,className:le,disableSwap:se=!1,disabled:ce=!1,getAriaLabel:ue,getAriaValueText:de,marks:pe=!1,max:me=100,min:ve=0,orientation:he="horizontal",size:be="medium",step:ge=1,scale:fe=V,slotProps:Ze,slots:xe,track:ye="normal",valueLabelDisplay:Se="off",valueLabelFormat:we=V}=$,ke=(0,o.Z)($,O),ze=(0,r.Z)({},$,{isRtl:K,max:me,min:ve,classes:ie,disabled:ce,disableSwap:se,orientation:he,marks:pe,color:ne,size:be,step:ge,scale:fe,track:ye,valueLabelDisplay:Se,valueLabelFormat:we}),{axisProps:Ce,getRootProps:Re,getHiddenInputProps:Le,getThumbProps:Me,open:Pe,active:Ie,axis:Ne,focusedThumbIndex:Te,range:Ae,dragging:Ee,marks:Fe,values:je,trackOffset:Be,trackLeap:Oe,getThumbStyle:Ve}=P((0,r.Z)({},ze,{rootRef:t}));ze.marked=Fe.length>0&&Fe.some((e=>e.label)),ze.dragging=Ee,ze.focusedThumbIndex=Te;const We=(e=>{const{disabled:t,dragging:a,marked:o,orientation:r,track:n,classes:i,color:s,size:c}=e,u={root:["root",t&&"disabled",a&&"dragging",o&&"marked","vertical"===r&&"vertical","inverted"===n&&"trackInverted",!1===n&&"trackFalse",s&&"color".concat((0,F.Z)(s)),c&&"size".concat((0,F.Z)(c))],rail:["rail"],track:["track"],mark:["mark"],markActive:["markActive"],markLabel:["markLabel"],markLabelActive:["markLabelActive"],valueLabel:["valueLabel"],thumb:["thumb",t&&"disabled",c&&"thumbSize".concat((0,F.Z)(c)),s&&"thumbColor".concat((0,F.Z)(s))],active:["active"],disabled:["disabled"],focusVisible:["focusVisible"]};return(0,l.Z)(u,j.k,i)})(ze),De=null!=(a=null!=(u=null==xe?void 0:xe.root)?u:oe.Root)?a:W,_e=null!=(d=null!=(p=null==xe?void 0:xe.rail)?p:oe.Rail)?d:D,qe=null!=(m=null!=(v=null==xe?void 0:xe.track)?v:oe.Track)?m:_,Ye=null!=(h=null!=(b=null==xe?void 0:xe.thumb)?b:oe.Thumb)?h:q,Xe=null!=(g=null!=(f=null==xe?void 0:xe.valueLabel)?f:oe.ValueLabel)?g:Y,He=null!=(Z=null!=(x=null==xe?void 0:xe.mark)?x:oe.Mark)?Z:X,Ge=null!=(S=null!=(w=null==xe?void 0:xe.markLabel)?w:oe.MarkLabel)?S:H,Je=null!=(k=null!=(z=null==xe?void 0:xe.input)?z:oe.Input)?k:"input",Ue=null!=(C=null==Ze?void 0:Ze.root)?C:re.root,$e=null!=(R=null==Ze?void 0:Ze.rail)?R:re.rail,Ke=null!=(L=null==Ze?void 0:Ze.track)?L:re.track,Qe=null!=(M=null==Ze?void 0:Ze.thumb)?M:re.thumb,et=null!=(I=null==Ze?void 0:Ze.valueLabel)?I:re.valueLabel,tt=null!=(T=null==Ze?void 0:Ze.mark)?T:re.mark,at=null!=(J=null==Ze?void 0:Ze.markLabel)?J:re.markLabel,ot=null!=(U=null==Ze?void 0:Ze.input)?U:re.input,rt=(0,s.y)({elementType:De,getSlotProps:Re,externalSlotProps:Ue,externalForwardedProps:ke,additionalProps:(0,r.Z)({},E(De)&&{as:ae}),ownerState:(0,r.Z)({},ze,null==Ue?void 0:Ue.ownerState),className:[We.root,le]}),nt=(0,s.y)({elementType:_e,externalSlotProps:$e,ownerState:ze,className:We.rail}),it=(0,s.y)({elementType:qe,externalSlotProps:Ke,additionalProps:{style:(0,r.Z)({},Ce[Ne].offset(Be),Ce[Ne].leap(Oe))},ownerState:(0,r.Z)({},ze,null==Ke?void 0:Ke.ownerState),className:We.track}),lt=(0,s.y)({elementType:Ye,getSlotProps:Me,externalSlotProps:Qe,ownerState:(0,r.Z)({},ze,null==Qe?void 0:Qe.ownerState),className:We.thumb}),st=(0,s.y)({elementType:Xe,externalSlotProps:et,ownerState:(0,r.Z)({},ze,null==et?void 0:et.ownerState),className:We.valueLabel}),ct=(0,s.y)({elementType:He,externalSlotProps:tt,ownerState:ze,className:We.mark}),ut=(0,s.y)({elementType:Ge,externalSlotProps:at,ownerState:ze,className:We.markLabel}),dt=(0,s.y)({elementType:Je,getSlotProps:Le,externalSlotProps:ot,ownerState:ze});return(0,B.jsxs)(De,(0,r.Z)({},rt,{children:[(0,B.jsx)(_e,(0,r.Z)({},nt)),(0,B.jsx)(qe,(0,r.Z)({},it)),Fe.filter((e=>e.value>=ve&&e.value<=me)).map(((e,t)=>{const a=y(e.value,ve,me),o=Ce[Ne].offset(a);let l;return l=!1===ye?-1!==je.indexOf(e.value):"normal"===ye&&(Ae?e.value>=je[0]&&e.value<=je[je.length-1]:e.value<=je[0])||"inverted"===ye&&(Ae?e.value<=je[0]||e.value>=je[je.length-1]:e.value>=je[0]),(0,B.jsxs)(n.Fragment,{children:[(0,B.jsx)(He,(0,r.Z)({"data-index":t},ct,!(0,c.X)(He)&&{markActive:l},{style:(0,r.Z)({},o,ct.style),className:(0,i.Z)(ct.className,l&&We.markActive)})),null!=e.label?(0,B.jsx)(Ge,(0,r.Z)({"aria-hidden":!0,"data-index":t},ut,!(0,c.X)(Ge)&&{markLabelActive:l},{style:(0,r.Z)({},o,ut.style),className:(0,i.Z)(We.markLabel,ut.className,l&&We.markLabelActive),children:e.label})):null]},t)})),je.map(((e,t)=>{const a=y(e,ve,me),o=Ce[Ne].offset(a),n="off"===Se?G:Xe;return(0,B.jsx)(n,(0,r.Z)({},!(0,c.X)(n)&&{valueLabelFormat:we,valueLabelDisplay:Se,value:"function"===typeof we?we(fe(e),t):we,index:t,open:Pe===t||Ie===t||"on"===Se,disabled:ce},st,{children:(0,B.jsx)(Ye,(0,r.Z)({"data-index":t},lt,{className:(0,i.Z)(We.thumb,lt.className,Ie===t&&We.active,Te===t&&We.focusVisible),style:(0,r.Z)({},o,Ve(t),lt.style),children:(0,B.jsx)(Je,(0,r.Z)({"data-index":t,"aria-label":ue?ue(t):Q,"aria-valuenow":fe(e),"aria-labelledby":te,"aria-valuetext":de?de(fe(e),t):ee,value:je[t]},dt))}))}),t)}))]}))})),U=J},69464:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i,k:()=>n});var o=a(75878),r=a(21217);function n(e){return(0,r.Z)("MuiSlider",e)}const i=(0,o.Z)("MuiSlider",["root","active","colorPrimary","colorSecondary","disabled","dragging","focusVisible","mark","markActive","marked","markLabel","markLabelActive","rail","sizeSmall","thumb","thumbColorPrimary","thumbColorSecondary","track","trackInverted","trackFalse","thumbSizeSmall","valueLabel","valueLabelOpen","valueLabelCircle","valueLabelLabel","vertical"])},4567:(e,t,a)=>{"use strict";a.d(t,{Z:()=>f});var o=a(63366),r=a(87462),n=a(72791),i=a(59278),l=a(78519),s=a(94419),c=a(66934),u=a(31402),d=a(14036),p=a(40940),m=a(80184);const v=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],h=(0,c.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.variant&&t[a.variant],"inherit"!==a.align&&t["align".concat((0,d.Z)(a.align))],a.noWrap&&t.noWrap,a.gutterBottom&&t.gutterBottom,a.paragraph&&t.paragraph]}})((e=>{let{theme:t,ownerState:a}=e;return(0,r.Z)({margin:0},"inherit"===a.variant&&{font:"inherit"},"inherit"!==a.variant&&t.typography[a.variant],"inherit"!==a.align&&{textAlign:a.align},a.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},a.gutterBottom&&{marginBottom:"0.35em"},a.paragraph&&{marginBottom:16})})),b={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},g={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},f=n.forwardRef((function(e,t){const a=(0,u.Z)({props:e,name:"MuiTypography"}),n=(e=>g[e]||e)(a.color),c=(0,l.Z)((0,r.Z)({},a,{color:n})),{align:f="inherit",className:Z,component:x,gutterBottom:y=!1,noWrap:S=!1,paragraph:w=!1,variant:k="body1",variantMapping:z=b}=c,C=(0,o.Z)(c,v),R=(0,r.Z)({},c,{align:f,color:n,className:Z,component:x,gutterBottom:y,noWrap:S,paragraph:w,variant:k,variantMapping:z}),L=x||(w?"p":z[k]||b[k])||"span",M=(e=>{const{align:t,gutterBottom:a,noWrap:o,paragraph:r,variant:n,classes:i}=e,l={root:["root",n,"inherit"!==e.align&&"align".concat((0,d.Z)(t)),a&&"gutterBottom",o&&"noWrap",r&&"paragraph"]};return(0,s.Z)(l,p.f,i)})(R);return(0,m.jsx)(h,(0,r.Z)({as:L,ref:t,ownerState:R,className:(0,i.Z)(M.root,Z)},C))}))},40940:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i,f:()=>n});var o=a(75878),r=a(21217);function n(e){return(0,r.Z)("MuiTypography",e)}const i=(0,o.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"])},31260:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});const o=a(78949).Z},83199:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});const o=a(82254).Z},28610:(e,t,a)=>{"use strict";a.r(t),a.d(t,{capitalize:()=>r.Z,createChainedFunction:()=>n.Z,createSvgIcon:()=>i.Z,debounce:()=>l.Z,deprecatedPropType:()=>s,isMuiElement:()=>c.Z,ownerDocument:()=>u.Z,ownerWindow:()=>d.Z,requirePropFactory:()=>p,setRef:()=>m,unstable_ClassNameGenerator:()=>y,unstable_useEnhancedEffect:()=>v.Z,unstable_useId:()=>h.Z,unsupportedProp:()=>b,useControlled:()=>g.Z,useEventCallback:()=>f.Z,useForkRef:()=>Z.Z,useIsFocusVisible:()=>x.Z});var o=a(55902),r=a(14036),n=a(31260),i=a(74223),l=a(83199);const s=function(e,t){return()=>null};var c=a(13701),u=a(98301),d=a(17602);a(87462);const p=function(e,t){return()=>null};const m=a(62971).Z;var v=a(40162),h=a(67384);const b=function(e,t,a,o,r){return null};var g=a(98278),f=a(89683),Z=a(42071),x=a(68221);const y={configure:e=>{o.Z.configure(e)}}},13701:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});const o=a(78).Z},98301:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});const o=a(84913).Z},17602:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});const o=a(65202).Z},98278:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});const o=a(88637).Z},40162:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});const o=a(62876).Z},67384:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});const o=a(18252).Z},82254:(e,t,a)=>{"use strict";function o(e){let t,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:166;function o(){for(var o=arguments.length,r=new Array(o),n=0;n<o;n++)r[n]=arguments[n];clearTimeout(t),t=setTimeout((()=>{e.apply(this,r)}),a)}return o.clear=()=>{clearTimeout(t)},o}a.d(t,{Z:()=>o})},78:(e,t,a)=>{"use strict";a.d(t,{Z:()=>r});var o=a(72791);function r(e,t){return o.isValidElement(e)&&-1!==t.indexOf(e.type.muiName)}},88637:(e,t,a)=>{"use strict";a.d(t,{Z:()=>r});var o=a(72791);function r(e){let{controlled:t,default:a,name:r,state:n="value"}=e;const{current:i}=o.useRef(void 0!==t),[l,s]=o.useState(a);return[i?t:l,o.useCallback((e=>{i||s(e)}),[])]}},95573:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});const o={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:-1,overflow:"hidden",padding:0,position:"absolute",whiteSpace:"nowrap",width:"1px"}},64836:e=>{e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=81296.df290c2b.chunk.js.map
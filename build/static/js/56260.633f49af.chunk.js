/*! For license information please see 56260.633f49af.chunk.js.LICENSE.txt */
(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[56260,63687,16565],{63687:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>o});var r=n(59393),i=n(80184);const o=e=>{let{customStyle:t,children:n}=e;return(0,i.jsx)("div",{className:r.Z.user_member_container_wrapper,style:t,children:n})}},26646:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>x});var r=n(56959),i=n(63687),o=n(21348),s=n(39230),a=n(90904),l=n(43504),u=n(16871),f=n(63162),d=n(98967),c=n(68994),h=n(72791),m=n(55336),p=n(93638),v=n(80184);const y=(0,h.lazy)((()=>n.e(77868).then(n.bind(n,77868)))),M=(0,h.lazy)((()=>n.e(30301).then(n.bind(n,30301)))),g=(0,h.lazy)((()=>n.e(53346).then(n.bind(n,53346)))),b=[{label:"receipts",id:"receipt",urlKey:""},{label:"payments",id:"payment",urlKey:"&n=payment"},{label:"settlement_history",id:"settlement",urlKey:"&n=settlement"},{label:"deleted_logs",id:"logs",urlKey:"&n=logs"}],x=e=>{var t;let{fid:n,instituteId:x}=e;const{t:Y}=(0,s.$G)(),[j]=(0,l.lr)(),w=(0,u.TH)(),L=(0,u.UO)(),S=(0,u.s0)();return(0,v.jsxs)(i.default,{children:[(0,v.jsx)(o.default,{children:(0,v.jsxs)("div",{className:r.Z.fm_header_container,children:[(0,v.jsx)("h6",{children:Y("transaction_history")}),null!==(t=w.state)&&void 0!==t&&t.role?(0,v.jsx)(p.Z,{label:"export",customStyle:{margin:"0",padding:"0.4rem 1rem",width:"fit-content"},onAction:()=>{var e;let t="Institute"===(null===(e=w.state)||void 0===e?void 0:e.urlOffSet)?"/q/".concat(L.username,"/institute/member/finance?type=export"):"/q/".concat(L.username,"/member/staff/finance?type=export");S(t,{state:w.state})}}):null]})}),(0,v.jsx)(a.Z,{}),(0,v.jsxs)(o.default,{customStyle:{paddingTop:"0"},children:[(0,v.jsx)(d.Z,{children:b.map((e=>{var t;return(0,v.jsx)(f.Z,{tab:e,isLink:!0,isActive:"receipt"===e.id&&!j.get("n")||j.get("n")===e.id,parentState:w.state,url:"Institute"===(null===(t=w.state)||void 0===t?void 0:t.urlOffSet)?"/q/".concat(L.username,"/institute/member/finance?type=history").concat(e.urlKey):"/q/".concat(L.username,"/member/staff/finance?type=history").concat(e.urlKey)},null===e||void 0===e?void 0:e.id)}))}),(0,v.jsx)(a.Z,{customStyleBorder:{marginTop:"0"}})]}),(0,v.jsx)(o.default,{customStyle:{paddingTop:"0"},children:(0,v.jsx)(h.Suspense,{fallback:(0,v.jsx)(m.default,{}),children:"payment"===j.get("n")?(0,v.jsx)(M,{instituteId:x}):"settlement"===j.get("n")?(0,v.jsx)(y,{instituteId:x}):"logs"===j.get("n")?(0,v.jsx)(g,{fid:n}):(0,v.jsx)(c.Z,{instituteId:x})})})]})}},82824:(e,t,n)=>{"use strict";n.d(t,{J:()=>a,Z:()=>l});var r=n(99893),i=n.n(r),o=n(97892),s=n.n(o);const a=(e,t)=>(s().extend(i()),s()(e).format(t)),l=(e,t,n)=>{var r;return s()()[e]("".concat(null===(r=s()(n))||void 0===r?void 0:r.format("YYYY-MM-DD")),t)}},99893:function(e){e.exports=function(){"use strict";var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};return function(t,n,r){var i=n.prototype,o=i.format;r.en.formats=e,i.format=function(t){void 0===t&&(t="YYYY-MM-DDTHH:mm:ssZ");var n=this.$locale().formats,r=function(t,n){return t.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,r,i){var o=i&&i.toUpperCase();return r||n[i]||e[i]||n[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))}(t,void 0===n?{}:n);return o.call(this,r)}}}()},62906:(e,t,n)=>{!function(){"use strict";"object"==typeof self&&self.self===self&&self||"object"==typeof n.g&&n.g.global===n.g&&n.g;var r=9007199254740991;function i(e){return!("number"!=typeof e||e!=e||e===1/0||e===-1/0)}function o(e){return"number"==typeof e&&Math.abs(e)<=r}var s=/(hundred|thousand|(m|b|tr|quadr)illion)$/,a=/teen$/,l=/y$/,u=/(zero|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve)$/,f={zero:"zeroth",one:"first",two:"second",three:"third",four:"fourth",five:"fifth",six:"sixth",seven:"seventh",eight:"eighth",nine:"ninth",ten:"tenth",eleven:"eleventh",twelve:"twelfth"};function d(e){return s.test(e)||a.test(e)?e+"th":l.test(e)?e.replace(l,"ieth"):u.test(e)?e.replace(u,c):e}function c(e,t){return f[t]}var h=1e3,m=1e6,p=1e9,v=1e12,y=1e15,M=["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"],g=["zero","ten","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];function b(e,t){var n,r=parseInt(e,10);if(!i(r))throw new TypeError("Not a finite number: "+e+" ("+typeof e+")");if(!o(r))throw new RangeError("Input is not a safe number, it\u2019s either too large or too small.");return n=function e(t){var n,r,i=arguments[1];return 0===t?i?i.join(" ").replace(/,$/,""):"zero":(i||(i=[]),t<0&&(i.push("minus"),t=Math.abs(t)),t<20?(n=0,r=M[t]):t<100?(n=t%10,r=g[Math.floor(t/10)],n&&(r+="-"+M[n],n=0)):t<h?(n=t%100,r=e(Math.floor(t/100))+" hundred"):t<m?(n=t%h,r=e(Math.floor(t/h))+" thousand,"):t<p?(n=t%m,r=e(Math.floor(t/m))+" million,"):t<v?(n=t%p,r=e(Math.floor(t/p))+" billion,"):t<y?(n=t%v,r=e(Math.floor(t/v))+" trillion,"):t<=9007199254740992&&(n=t%y,r=e(Math.floor(t/y))+" quadrillion,"),i.push(r),e(n,i))}(r),t?d(n):n}var x={toOrdinal:function(e){var t=parseInt(e,10);if(!i(t))throw new TypeError("Not a finite number: "+e+" ("+typeof e+")");if(!o(t))throw new RangeError("Input is not a safe number, it\u2019s either too large or too small.");var n=String(t),r=Math.abs(t%100),s=11<=r&&r<=13,a=n.charAt(n.length-1);return n+(s?"th":"1"===a?"st":"2"===a?"nd":"3"===a?"rd":"th")},toWords:b,toWordsOrdinal:function(e){return d(b(e))}};e.exports&&(t=e.exports=x),t.numberToWords=x}()}}]);
//# sourceMappingURL=56260.633f49af.chunk.js.map
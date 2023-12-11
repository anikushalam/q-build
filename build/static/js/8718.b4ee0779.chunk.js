"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[8718],{8793:function(e,n,a){var t=a(72791),i=a(11105),r=a(80184);n.Z=function(e){var n=e.children;return(0,r.jsx)(t.Suspense,{fallback:(0,r.jsx)(i.Z,{}),children:n})}},43425:function(e,n,a){var t=a(29439),i=a(72791),r=a(9447),o=a(92950),d=a(95048),c=a(70092),u=a(16256),s=a(39230),l=a(80184);n.Z=function(e){var n=e.endUserSave,a=e.pid,v=e.parentStyle,f=i.useState(!0),p=(0,t.Z)(f,2),h=p[0],k=p[1],m=(0,s.$G)().t,g=(0,d.v9)((function(e){return e.idChange})),b=(0,d.I0)(),Z=i.useState(null===n||void 0===n?void 0:n.some((function(e){return e===(null===g||void 0===g?void 0:g.id)}))),x=(0,t.Z)(Z,2),S=x[0],w=x[1],C=(0,r.rq)({data:{pid:a,viewAs:u.UJ},skip:h}).postSaveRefetch;return(0,l.jsx)(l.Fragment,{children:S?(0,l.jsxs)("div",{className:v,onClick:function(){b(c.p.removeSave({pid:a,id:null===g||void 0===g?void 0:g.id})),k(!1),w(!1),C()},children:[(0,l.jsx)("img",{src:"/images/unbookmark-icon.svg",alt:"",className:o.Z.bookmarkImage}),(0,l.jsx)("p",{children:m("save")})]}):(0,l.jsxs)("div",{className:v,onClick:function(){b(c.p.addSave({pid:a,id:null===g||void 0===g?void 0:g.id})),k(!1),w(!0),C()},children:[(0,l.jsx)("img",{src:"/images/bookmark-icon.svg",alt:"",className:o.Z.bookmarkImage}),(0,l.jsx)("p",{children:m("save")})]})})}},93840:function(e,n,a){var t=a(72791).createContext(void 0);n.Z=t},52930:function(e,n,a){a.d(n,{Z:function(){return r}});var t=a(72791),i=a(93840);function r(){return t.useContext(i.Z)}},97278:function(e,n,a){a.d(n,{Z:function(){return x}});var t=a(29439),i=a(63366),r=a(87462),o=a(72791),d=a(59278),c=a(94419),u=a(14036),s=a(66934),l=a(98278),v=a(52930),f=a(2863),p=a(75878),h=a(21217);function k(e){return(0,h.Z)("PrivateSwitchBase",e)}(0,p.Z)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var m=a(80184),g=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],b=(0,s.ZP)(f.Z)((function(e){var n=e.ownerState;return(0,r.Z)({padding:9,borderRadius:"50%"},"start"===n.edge&&{marginLeft:"small"===n.size?-3:-12},"end"===n.edge&&{marginRight:"small"===n.size?-3:-12})})),Z=(0,s.ZP)("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),x=o.forwardRef((function(e,n){var a=e.autoFocus,o=e.checked,s=e.checkedIcon,f=e.className,p=e.defaultChecked,h=e.disabled,x=e.disableFocusRipple,S=void 0!==x&&x,w=e.edge,C=void 0!==w&&w,I=e.icon,F=e.id,j=e.inputProps,y=e.inputRef,N=e.name,R=e.onBlur,_=e.onChange,B=e.onFocus,P=e.readOnly,q=e.required,U=void 0!==q&&q,$=e.tabIndex,z=e.type,D=e.value,L=(0,i.Z)(e,g),M=(0,l.Z)({controlled:o,default:Boolean(p),name:"SwitchBase",state:"checked"}),O=(0,t.Z)(M,2),E=O[0],G=O[1],T=(0,v.Z)(),A=h;T&&"undefined"===typeof A&&(A=T.disabled);var J="checkbox"===z||"radio"===z,K=(0,r.Z)({},e,{checked:E,disabled:A,disableFocusRipple:S,edge:C}),V=function(e){var n=e.classes,a=e.checked,t=e.disabled,i=e.edge,r={root:["root",a&&"checked",t&&"disabled",i&&"edge".concat((0,u.Z)(i))],input:["input"]};return(0,c.Z)(r,k,n)}(K);return(0,m.jsxs)(b,(0,r.Z)({component:"span",className:(0,d.Z)(V.root,f),centerRipple:!0,focusRipple:!S,disabled:A,tabIndex:null,role:void 0,onFocus:function(e){B&&B(e),T&&T.onFocus&&T.onFocus(e)},onBlur:function(e){R&&R(e),T&&T.onBlur&&T.onBlur(e)},ownerState:K,ref:n},L,{children:[(0,m.jsx)(Z,(0,r.Z)({autoFocus:a,checked:o,defaultChecked:p,className:V.input,disabled:A,id:J?F:void 0,name:N,onChange:function(e){if(!e.nativeEvent.defaultPrevented){var n=e.target.checked;G(n),_&&_(e,n)}},readOnly:P,ref:y,required:U,ownerState:K,tabIndex:$,type:z},"checkbox"===z&&void 0===D?{}:{value:D},j)),E?s:I]}))}))},13688:function(e,n,a){a.d(n,{WU:function(){return u}});var t=["second","minute","hour","day","week","month","year"];var i=["\u79d2","\u5206\u949f","\u5c0f\u65f6","\u5929","\u5468","\u4e2a\u6708","\u5e74"];var r={},o=function(e,n){r[e]=n},d=[60,60,24,7,365/7/12,12];function c(e){return e instanceof Date?e:!isNaN(e)||/^\d+$/.test(e)?new Date(parseInt(e)):(e=(e||"").trim().replace(/\.\d+/,"").replace(/-/,"/").replace(/-/,"/").replace(/(\d)T(\d)/,"$1 $2").replace(/Z/," UTC").replace(/([+-]\d\d):?(\d\d)/," $1$2"),new Date(e))}var u=function(e,n,a){var t=function(e,n){return(+(n?c(n):new Date)-+c(e))/1e3}(e,a&&a.relativeDate);return function(e,n){for(var a=e<0?1:0,t=e=Math.abs(e),i=0;e>=d[i]&&i<d.length;i++)e/=d[i];return(e=Math.floor(e))>(0===(i*=2)?9:1)&&(i+=1),n(e,i,t)[a].replace("%s",e.toString())}(t,function(e){return r[e]||r.en_US}(n))};o("en_US",(function(e,n){if(0===n)return["just now","right now"];var a=t[Math.floor(n/2)];return e>1&&(a+="s"),[e+" "+a+" ago","in "+e+" "+a]})),o("zh_CN",(function(e,n){if(0===n)return["\u521a\u521a","\u7247\u523b\u540e"];var a=i[~~(n/2)];return[e+" "+a+"\u524d",e+" "+a+"\u540e"]}))},92950:function(e,n){n.Z={likeImage:"Like_likeImage__Foz5V",bookmarkImage:"Like_bookmarkImage__SPKG5"}}}]);
//# sourceMappingURL=8718.b4ee0779.chunk.js.map
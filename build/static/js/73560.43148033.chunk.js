"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[73560],{73560:(t,e,n)=>{n.r(e),n.d(e,{default:()=>_});n(72791);var o=n(66276),a=(n(62359),n(28298)),s=n(51760),i=n(93638),r=n(39230),c=n(16871),l=n(80184);const _=function(t){var e,n;let{post:_}=t;const{t:d}=(0,r.$G)(),h=(0,c.s0)(),u=(0,c.UO)();return(0,l.jsxs)(s.Z,{author:null===_||void 0===_?void 0:_.author,authorPhotoId:null===_||void 0===_?void 0:_.authorPhotoId,authorProfilePhoto:null===_||void 0===_?void 0:_.authorProfilePhoto,postStatus:null===_||void 0===_?void 0:_.postStatus,authorUserName:null===_||void 0===_?void 0:_.authorUserName,createdAt:null===_||void 0===_?void 0:_.createdAt,whichType:"ANNOUNCEMENT",children:[" ",null!==_&&void 0!==_&&null!==(e=_.new_announcement)&&void 0!==e&&e.insAnnTitle?(0,l.jsx)("div",{className:o.Z.postText,children:(0,l.jsx)(a.Z,{text:null===_||void 0===_||null===(n=_.new_announcement)||void 0===n?void 0:n.insAnnTitle,stat:"title",parentStyle:o.Z.text})}):null,(0,l.jsx)(i.Z,{onAction:()=>{var t;h("/q/".concat(u.username,"/notifications?a=announcement&n=detail"),{state:{annId:null===_||void 0===_||null===(t=_.new_announcement)||void 0===t?void 0:t._id}})},label:d("view_more_detail"),customStyle:{marginInline:"1rem"}})]})}},51760:(t,e,n)=>{n.d(e,{Z:()=>_});n(72791);var o=n(95048),a=n(43504),s=n(13688),i=n(48673),r=n(69721),c=n(79436),l=n(80184);const _=t=>{let{author:e,authorPhotoId:n,authorProfilePhoto:_,postStatus:d,authorUserName:h,createdAt:u,setDotsClicked:p,whichType:v,children:m}=t;const x=(0,o.I0)();return(0,l.jsxs)("div",{className:c.Z.eachpost,children:[(0,l.jsxs)("div",{className:c.Z.eachposthead,children:[(0,l.jsx)("div",{className:c.Z.imgcontainer,children:(0,l.jsx)(a.rU,{to:"/q/".concat(h,"/profile"),onClick:()=>{x(i.S.searchId({id:e,type:"ID"}))},children:(0,l.jsx)("img",{alt:"not found",src:_?"".concat(r.yI,"/").concat(_):"/images/ins_default_profile.svg",className:_?"":c.Z.iimg,style:"Anyone"===d?{offset:"none"}:{outline:"2px solid #010447",outlineOffset:"1px"}})})}),(0,l.jsxs)("div",{className:c.Z.eachpostUserName,children:[(0,l.jsx)(a.rU,{to:"/q/".concat(h,"/profile"),onClick:()=>{x(i.S.searchId({id:e,type:"ID"}))},children:(0,l.jsx)("h6",{children:h})}),(0,l.jsx)("div",{className:c.Z.eachpostUserTime,style:{display:"flex",gap:"0.5vw",alignItems:"center"},children:(0,l.jsx)("p",{children:(0,s.WU)(u)})})]})]}),"ANNOUNCEMENT"===v?null:(0,l.jsx)("img",{src:"/images/menu-dots-icon.svg",alt:"",className:c.Z.menu,onClick:()=>p((t=>!t))}),m]})}},28298:(t,e,n)=>{n.d(e,{Z:()=>_});var o=n(72791),a=n(95048),s=n(43504),i=n(48673),r=n(79436),c=n(39230),l=n(80184);const _=function(t){let{text:e,parentStyle:n}=t;const{t:_}=(0,c.$G)(),[d,h]=(0,o.useState)(!0),u=d?null===e||void 0===e?void 0:e.substring(0,200):e,p=(0,a.I0)();return(0,l.jsxs)("p",{className:n,children:[null===u||void 0===u?void 0:u.split(" ").map(((t,e)=>t.startsWith("@",0)?(0,l.jsx)(s.rU,{to:"/q/".concat(t.slice(1,t.length),"/profile"),onClick:()=>{p(i.S.searchId({id:t.slice(1,t.length),type:"USERNAME"}))},style:{color:"#436DFA"},children:" ".concat(t," ")},e):(0,l.jsx)("span",{children:" ".concat(t," ")},e))),d&&(null===e||void 0===e?void 0:e.length)>200?(0,l.jsx)("span",{className:r.Z.showMore,style:{},onClick:()=>h(!d),children:_("show_more_")}):""]})}},93638:(t,e,n)=>{n.d(e,{Z:()=>i});var o=n(39230),a=n(80476),s=n(80184);const i=t=>{let{label:e,count:n,onAction:i,customStyle:r,isTranslate:c}=t;const{t:l}=(0,o.$G)();return c?(0,s.jsxs)("div",{className:a.Z.create_btn_container,onClick:i,style:r,children:[n>0?(0,s.jsxs)("span",{children:[n," "]}):null,e]}):(0,s.jsxs)("div",{className:a.Z.create_btn_container,onClick:i,style:r,children:[n>0?(0,s.jsxs)("span",{children:[n," "]}):null,l(e)]})}},13688:(t,e,n)=>{n.d(e,{WU:()=>l});var o=["second","minute","hour","day","week","month","year"];var a=["\u79d2","\u5206\u949f","\u5c0f\u65f6","\u5929","\u5468","\u4e2a\u6708","\u5e74"];var s={},i=function(t,e){s[t]=e},r=[60,60,24,7,365/7/12,12];function c(t){return t instanceof Date?t:!isNaN(t)||/^\d+$/.test(t)?new Date(parseInt(t)):(t=(t||"").trim().replace(/\.\d+/,"").replace(/-/,"/").replace(/-/,"/").replace(/(\d)T(\d)/,"$1 $2").replace(/Z/," UTC").replace(/([+-]\d\d):?(\d\d)/," $1$2"),new Date(t))}var l=function(t,e,n){var o=function(t,e){return(+(e?c(e):new Date)-+c(t))/1e3}(t,n&&n.relativeDate);return function(t,e){for(var n=t<0?1:0,o=t=Math.abs(t),a=0;t>=r[a]&&a<r.length;a++)t/=r[a];return(t=Math.floor(t))>(0===(a*=2)?9:1)&&(a+=1),e(t,a,o)[n].replace("%s",t.toString())}(o,function(t){return s[t]||s.en_US}(e))};i("en_US",(function(t,e){if(0===e)return["just now","right now"];var n=o[Math.floor(e/2)];return t>1&&(n+="s"),[t+" "+n+" ago","in "+t+" "+n]})),i("zh_CN",(function(t,e){if(0===e)return["\u521a\u521a","\u7247\u523b\u540e"];var n=a[~~(e/2)];return[t+" "+n+"\u524d",t+" "+n+"\u540e"]}))},62359:()=>{},66276:(t,e,n)=>{n.d(e,{Z:()=>o});const o={postText:"EachPost_postText__0NKwv",text:"EachPost_text__pJC7X",textDes:"EachPost_textDes__9RBYP",hashtag:"EachPost_hashtag__lHiVx",postImg:"EachPost_postImg__-0ru7",index:"EachPost_index__wYo8F",videoContainer:"EachPost_videoContainer__gD9S-",comment:"EachPost_comment__lAkg1"}},79436:(t,e,n)=>{n.d(e,{Z:()=>o});const o={eachpost:"PostContainer_eachpost__4Ihag",reactions:"PostContainer_reactions__iW+XA",eachposthead:"PostContainer_eachposthead__g0OCh",imgcontainer:"PostContainer_imgcontainer__hbVj9",iimg:"PostContainer_iimg__j+Wkk",eachpostUserName:"PostContainer_eachpostUserName__4reNe",eachpostUserTime:"PostContainer_eachpostUserTime__naeRX",menu:"PostContainer_menu__Cp0Zi",showMore:"PostContainer_showMore__xHh4T"}},80476:(t,e,n)=>{n.d(e,{Z:()=>o});const o={btn_wrapper:"Button_btn_wrapper__ihT7O",btn_container:"Button_btn_container__OaH2t",create_btn_container:"Button_create_btn_container__JuZrx",upload_excel_file:"Button_upload_excel_file__a7d0K",set_btn_container:"Button_set_btn_container__RvfRG",ccb_button:"Button_ccb_button__Mjv4T"}}}]);
//# sourceMappingURL=73560.43148033.chunk.js.map
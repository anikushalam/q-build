"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[73560],{73560:function(t,n,e){e.r(n);e(72791);var o=e(66276),a=(e(62359),e(28298)),i=e(51760),r=e(93638),s=e(39230),c=e(16871),l=e(80184);n.default=function(t){var n,e,u=t.post,_=(0,s.$G)().t,h=(0,c.s0)(),d=(0,c.UO)();return(0,l.jsxs)(i.Z,{author:null===u||void 0===u?void 0:u.author,authorPhotoId:null===u||void 0===u?void 0:u.authorPhotoId,authorProfilePhoto:null===u||void 0===u?void 0:u.authorProfilePhoto,postStatus:null===u||void 0===u?void 0:u.postStatus,authorUserName:null===u||void 0===u?void 0:u.authorUserName,createdAt:null===u||void 0===u?void 0:u.createdAt,whichType:"ANNOUNCEMENT",children:[" ",null!==u&&void 0!==u&&null!==(n=u.new_announcement)&&void 0!==n&&n.insAnnTitle?(0,l.jsx)("div",{className:o.Z.postText,children:(0,l.jsx)(a.Z,{text:null===u||void 0===u||null===(e=u.new_announcement)||void 0===e?void 0:e.insAnnTitle,stat:"title",parentStyle:o.Z.text})}):null,(0,l.jsx)(r.Z,{onAction:function(){var t;h("/q/".concat(d.username,"/notifications?a=announcement&n=detail"),{state:{annId:null===u||void 0===u||null===(t=u.new_announcement)||void 0===t?void 0:t._id}})},label:_("view_more_detail"),customStyle:{marginInline:"1rem"}})]})}},51760:function(t,n,e){e(72791);var o=e(95048),a=e(43504),i=e(13688),r=e(48673),s=e(69721),c=e(79436),l=e(80184);n.Z=function(t){var n=t.author,e=(t.authorPhotoId,t.authorProfilePhoto),u=t.postStatus,_=t.authorUserName,h=t.createdAt,d=t.setDotsClicked,p=t.whichType,v=t.children,m=(0,o.I0)();return(0,l.jsxs)("div",{className:c.Z.eachpost,children:[(0,l.jsxs)("div",{className:c.Z.eachposthead,children:[(0,l.jsx)("div",{className:c.Z.imgcontainer,children:(0,l.jsx)(a.rU,{to:"/q/".concat(_,"/profile"),onClick:function(){m(r.S.searchId({id:n,type:"ID"}))},children:(0,l.jsx)("img",{alt:"not found",src:e?"".concat(s.yI,"/").concat(e):"/images/ins_default_profile.svg",className:e?"":c.Z.iimg,style:"Anyone"===u?{offset:"none"}:{outline:"2px solid #010447",outlineOffset:"1px"}})})}),(0,l.jsxs)("div",{className:c.Z.eachpostUserName,children:[(0,l.jsx)(a.rU,{to:"/q/".concat(_,"/profile"),onClick:function(){m(r.S.searchId({id:n,type:"ID"}))},children:(0,l.jsx)("h6",{children:_})}),(0,l.jsx)("div",{className:c.Z.eachpostUserTime,style:{display:"flex",gap:"0.5vw",alignItems:"center"},children:(0,l.jsx)("p",{children:(0,i.WU)(h)})})]})]}),"ANNOUNCEMENT"===p?null:(0,l.jsx)("img",{src:"/images/menu-dots-icon.svg",alt:"",className:c.Z.menu,onClick:function(){return d((function(t){return!t}))}}),v]})}},28298:function(t,n,e){var o=e(29439),a=e(72791),i=e(95048),r=e(43504),s=e(48673),c=e(79436),l=e(39230),u=e(80184);n.Z=function(t){var n=t.text,e=t.parentStyle,_=(0,l.$G)().t,h=(0,a.useState)(!0),d=(0,o.Z)(h,2),p=d[0],v=d[1],m=p?null===n||void 0===n?void 0:n.substring(0,200):n,f=(0,i.I0)();return(0,u.jsxs)("p",{className:e,children:[null===m||void 0===m?void 0:m.split(" ").map((function(t,n){return t.startsWith("@",0)?(0,u.jsx)(r.rU,{to:"/q/".concat(t.slice(1,t.length),"/profile"),onClick:function(){f(s.S.searchId({id:t.slice(1,t.length),type:"USERNAME"}))},style:{color:"#436DFA"},children:" ".concat(t," ")},n):(0,u.jsx)("span",{children:" ".concat(t," ")},n)})),p&&(null===n||void 0===n?void 0:n.length)>200?(0,u.jsx)("span",{className:c.Z.showMore,style:{},onClick:function(){return v(!p)},children:_("show_more_")}):""]})}},93638:function(t,n,e){var o=e(39230),a=e(80476),i=e(80184);n.Z=function(t){var n=t.label,e=t.count,r=t.onAction,s=t.customStyle,c=t.isTranslate,l=(0,o.$G)().t;return c?(0,i.jsxs)("div",{className:a.Z.create_btn_container,onClick:r,style:s,children:[e>0?(0,i.jsxs)("span",{children:[e," "]}):null,n]}):(0,i.jsxs)("div",{className:a.Z.create_btn_container,onClick:r,style:s,children:[e>0?(0,i.jsxs)("span",{children:[e," "]}):null,l(n)]})}},13688:function(t,n,e){e.d(n,{WU:function(){return l}});var o=["second","minute","hour","day","week","month","year"];var a=["\u79d2","\u5206\u949f","\u5c0f\u65f6","\u5929","\u5468","\u4e2a\u6708","\u5e74"];var i={},r=function(t,n){i[t]=n},s=[60,60,24,7,365/7/12,12];function c(t){return t instanceof Date?t:!isNaN(t)||/^\d+$/.test(t)?new Date(parseInt(t)):(t=(t||"").trim().replace(/\.\d+/,"").replace(/-/,"/").replace(/-/,"/").replace(/(\d)T(\d)/,"$1 $2").replace(/Z/," UTC").replace(/([+-]\d\d):?(\d\d)/," $1$2"),new Date(t))}var l=function(t,n,e){var o=function(t,n){return(+(n?c(n):new Date)-+c(t))/1e3}(t,e&&e.relativeDate);return function(t,n){for(var e=t<0?1:0,o=t=Math.abs(t),a=0;t>=s[a]&&a<s.length;a++)t/=s[a];return(t=Math.floor(t))>(0===(a*=2)?9:1)&&(a+=1),n(t,a,o)[e].replace("%s",t.toString())}(o,function(t){return i[t]||i.en_US}(n))};r("en_US",(function(t,n){if(0===n)return["just now","right now"];var e=o[Math.floor(n/2)];return t>1&&(e+="s"),[t+" "+e+" ago","in "+t+" "+e]})),r("zh_CN",(function(t,n){if(0===n)return["\u521a\u521a","\u7247\u523b\u540e"];var e=a[~~(n/2)];return[t+" "+e+"\u524d",t+" "+e+"\u540e"]}))},62359:function(){},66276:function(t,n){n.Z={postText:"EachPost_postText__0NKwv",text:"EachPost_text__pJC7X",textDes:"EachPost_textDes__9RBYP",hashtag:"EachPost_hashtag__lHiVx",postImg:"EachPost_postImg__-0ru7",index:"EachPost_index__wYo8F",videoContainer:"EachPost_videoContainer__gD9S-",comment:"EachPost_comment__lAkg1"}},79436:function(t,n){n.Z={eachpost:"PostContainer_eachpost__4Ihag",reactions:"PostContainer_reactions__iW+XA",eachposthead:"PostContainer_eachposthead__g0OCh",imgcontainer:"PostContainer_imgcontainer__hbVj9",iimg:"PostContainer_iimg__j+Wkk",eachpostUserName:"PostContainer_eachpostUserName__4reNe",eachpostUserTime:"PostContainer_eachpostUserTime__naeRX",menu:"PostContainer_menu__Cp0Zi",showMore:"PostContainer_showMore__xHh4T"}},80476:function(t,n){n.Z={btn_wrapper:"Button_btn_wrapper__ihT7O",btn_container:"Button_btn_container__OaH2t",create_btn_container:"Button_create_btn_container__JuZrx",upload_excel_file:"Button_upload_excel_file__a7d0K",set_btn_container:"Button_set_btn_container__RvfRG",ccb_button:"Button_ccb_button__Mjv4T"}}}]);
//# sourceMappingURL=73560.2995a218.chunk.js.map
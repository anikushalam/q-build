"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[46150],{94302:(e,o,t)=>{t.d(o,{Z:()=>i});var s=t(72791),n=t(80184);const i=function(e){let{children:o}=e;const t=(0,s.useRef)(null),i=e=>{};return(0,s.useEffect)((()=>(document.addEventListener("click",i,!0),()=>{document.removeEventListener("click",i,!0)})),[]),(0,n.jsx)("div",{ref:t,children:o})}},46150:(e,o,t)=>{t.r(o),t.d(o,{default:()=>C});var s=t(72791);const n="EachQuestion_postText__8iFj+",i="EachQuestion_text__oJPSF",a="EachQuestion_questionBottom__Mxb0a",r="EachQuestion_questionBottomBorder__byd7M",l="EachQuestion_needCount__W06mq",d="EachQuestion_questionBottomIcon__9IR6D",c="EachQuestion_questionBottomIconOne__6BO1v";var u=t(48673),h=t(94302),v=t(43425),m=t(95048),p=t(51760),_=t(39230),x=t(35395),j=t(47782),g=t(80184);const f=s.lazy((()=>t.e(83058).then(t.bind(t,83058)))),k=s.lazy((()=>t.e(2602).then(t.bind(t,2602))));const C=function(e){let{post:o,profilePost:t,allPosts:C,selectOptions:N}=e;const[P,S]=(0,s.useState)(!1),[I,U]=(0,s.useState)(!1),{t:Z}=(0,_.$G)(),y=(0,m.v9)((e=>e.idChange)),w=(0,m.I0)(),b=e=>{var s;S(!1),w(u.S.openQuestionWithAnswer({repost:"repost",post:o._id,type:"question",otherOption:{profilePost:t,selectOptions:N,directAnswer:e},search:""!==(null===y||void 0===y||null===(s=y.searchProfile)||void 0===s?void 0:s.id)?"search":"not search"}))};return(0,g.jsxs)(p.Z,{author:null===o||void 0===o?void 0:o.author,authorPhotoId:null===o||void 0===o?void 0:o.authorPhotoId,authorProfilePhoto:null===o||void 0===o?void 0:o.authorProfilePhoto,postStatus:null===o||void 0===o?void 0:o.postStatus,authorUserName:null===o||void 0===o?void 0:o.authorUserName,createdAt:null===o||void 0===o?void 0:o.createdAt,setDotsClicked:U,children:[(0,g.jsx)("div",{className:n,children:(0,g.jsx)("p",{className:i,onClick:()=>b(!1),"data-toggle":"tooltip","data-placement":"top",title:"see_all_ans",style:{cursor:"pointer"},children:null===o||void 0===o?void 0:o.postQuestion})}),(0,g.jsxs)("div",{className:a,children:[(0,g.jsxs)("div",{className:r,children:[(0,g.jsxs)("p",{className:l,children:[null===o||void 0===o?void 0:o.needCount," ",Z("need_help")," "]}),(0,g.jsxs)("p",{children:[null===o||void 0===o?void 0:o.commentCount," ",Z("comments_")," | ",null===o||void 0===o?void 0:o.answerCount," ",Z("Answers")]})]}),(0,g.jsxs)("div",{className:d,children:[(0,g.jsxs)("div",{className:c,onClick:()=>b(!1),children:[(0,g.jsx)("img",{src:"/images/repeat.svg",alt:""}),(0,g.jsx)("p",{children:Z("answer")})]}),(0,g.jsxs)("div",{className:c,onClick:()=>{S((e=>!e))},children:[(0,g.jsx)("img",{src:"/images/comment-icon.svg",alt:""}),(0,g.jsx)("p",{children:Z("comment")})]}),(0,g.jsx)("div",{className:c,children:(0,g.jsx)(v.Z,{endUserSave:null===o||void 0===o?void 0:o.endUserSave,pid:null===o||void 0===o?void 0:o._id,parentStyle:c})})]})]}),(0,g.jsx)(s.Suspense,{fallback:(0,g.jsx)(j.Z,{}),children:P&&(0,g.jsx)(f,{pid:null===o||void 0===o?void 0:o._id,commentCount:null===o||void 0===o?void 0:o.commentCount,setCommentOpen:S,commentOpen:P,type:"not repost",comment_turned:null===o||void 0===o?void 0:o.comment_turned})}),I&&(0,g.jsx)(h.Z,{closeMenu:()=>{U(!1)},children:(0,g.jsx)(x.Z,{children:(0,g.jsx)(k,{setDotsClicked:U,options:N,pid:null===o||void 0===o?void 0:o._id,authorId:null===o||void 0===o?void 0:o.author,profilePost:t,status:null===o||void 0===o?void 0:o.postStatus,allPosts:C,popup:!1,postType:null===o||void 0===o?void 0:o.postType,commentStatus:null===o||void 0===o?void 0:o.comment_turned})})})]})}},51760:(e,o,t)=>{t.d(o,{Z:()=>c});t(72791);var s=t(95048),n=t(43504),i=t(13688),a=t(48673),r=t(69721),l=t(79436),d=t(80184);const c=e=>{let{author:o,authorPhotoId:t,authorProfilePhoto:c,postStatus:u,authorUserName:h,createdAt:v,setDotsClicked:m,whichType:p,children:_}=e;const x=(0,s.I0)();return(0,d.jsxs)("div",{className:l.Z.eachpost,children:[(0,d.jsxs)("div",{className:l.Z.eachposthead,children:[(0,d.jsx)("div",{className:l.Z.imgcontainer,children:(0,d.jsx)(n.rU,{to:"/q/".concat(h,"/profile"),onClick:()=>{x(a.S.searchId({id:o,type:"ID"}))},children:(0,d.jsx)("img",{alt:"not found",src:c?"".concat(r.yI,"/").concat(c):"/images/ins_default_profile.svg",className:c?"":l.Z.iimg,style:"Anyone"===u?{offset:"none"}:{outline:"2px solid #010447",outlineOffset:"1px"}})})}),(0,d.jsxs)("div",{className:l.Z.eachpostUserName,children:[(0,d.jsx)(n.rU,{to:"/q/".concat(h,"/profile"),onClick:()=>{x(a.S.searchId({id:o,type:"ID"}))},children:(0,d.jsx)("h6",{children:h})}),(0,d.jsx)("div",{className:l.Z.eachpostUserTime,style:{display:"flex",gap:"0.5vw",alignItems:"center"},children:(0,d.jsx)("p",{children:(0,i.WU)(v)})})]})]}),"ANNOUNCEMENT"===p?null:(0,d.jsx)("img",{src:"/images/menu-dots-icon.svg",alt:"",className:l.Z.menu,onClick:()=>m((e=>!e))}),_]})}},43425:(e,o,t)=>{t.d(o,{Z:()=>u});var s=t(72791),n=t(9447),i=t(92950),a=t(95048),r=t(70092),l=t(16256),d=t(39230),c=t(80184);const u=e=>{let{endUserSave:o,pid:t,parentStyle:u}=e;const[h,v]=s.useState(!0),{t:m}=(0,d.$G)(),p=(0,a.v9)((e=>e.idChange)),_=(0,a.I0)(),[x,j]=s.useState(null===o||void 0===o?void 0:o.some((e=>e===(null===p||void 0===p?void 0:p.id)))),{postSaveRefetch:g}=(0,n.rq)({data:{pid:t,viewAs:l.UJ},skip:h});return(0,c.jsx)(c.Fragment,{children:x?(0,c.jsxs)("div",{className:u,onClick:()=>{_(r.p.removeSave({pid:t,id:null===p||void 0===p?void 0:p.id})),v(!1),j(!1),g()},children:[(0,c.jsx)("img",{src:"/images/unbookmark-icon.svg",alt:"",className:i.Z.bookmarkImage}),(0,c.jsx)("p",{children:m("save")})]}):(0,c.jsxs)("div",{className:u,onClick:()=>{_(r.p.addSave({pid:t,id:null===p||void 0===p?void 0:p.id})),v(!1),j(!0),g()},children:[(0,c.jsx)("img",{src:"/images/bookmark-icon.svg",alt:"",className:i.Z.bookmarkImage}),(0,c.jsx)("p",{children:m("save")})]})})}},13688:(e,o,t)=>{t.d(o,{WU:()=>d});var s=["second","minute","hour","day","week","month","year"];var n=["\u79d2","\u5206\u949f","\u5c0f\u65f6","\u5929","\u5468","\u4e2a\u6708","\u5e74"];var i={},a=function(e,o){i[e]=o},r=[60,60,24,7,365/7/12,12];function l(e){return e instanceof Date?e:!isNaN(e)||/^\d+$/.test(e)?new Date(parseInt(e)):(e=(e||"").trim().replace(/\.\d+/,"").replace(/-/,"/").replace(/-/,"/").replace(/(\d)T(\d)/,"$1 $2").replace(/Z/," UTC").replace(/([+-]\d\d):?(\d\d)/," $1$2"),new Date(e))}var d=function(e,o,t){var s=function(e,o){return(+(o?l(o):new Date)-+l(e))/1e3}(e,t&&t.relativeDate);return function(e,o){for(var t=e<0?1:0,s=e=Math.abs(e),n=0;e>=r[n]&&n<r.length;n++)e/=r[n];return(e=Math.floor(e))>(0===(n*=2)?9:1)&&(n+=1),o(e,n,s)[t].replace("%s",e.toString())}(s,function(e){return i[e]||i.en_US}(o))};a("en_US",(function(e,o){if(0===o)return["just now","right now"];var t=s[Math.floor(o/2)];return e>1&&(t+="s"),[e+" "+t+" ago","in "+e+" "+t]})),a("zh_CN",(function(e,o){if(0===o)return["\u521a\u521a","\u7247\u523b\u540e"];var t=n[~~(o/2)];return[e+" "+t+"\u524d",e+" "+t+"\u540e"]}))},79436:(e,o,t)=>{t.d(o,{Z:()=>s});const s={eachpost:"PostContainer_eachpost__4Ihag",reactions:"PostContainer_reactions__iW+XA",eachposthead:"PostContainer_eachposthead__g0OCh",imgcontainer:"PostContainer_imgcontainer__hbVj9",iimg:"PostContainer_iimg__j+Wkk",eachpostUserName:"PostContainer_eachpostUserName__4reNe",eachpostUserTime:"PostContainer_eachpostUserTime__naeRX",menu:"PostContainer_menu__Cp0Zi",showMore:"PostContainer_showMore__xHh4T"}},92950:(e,o,t)=>{t.d(o,{Z:()=>s});const s={likeImage:"Like_likeImage__Foz5V",bookmarkImage:"Like_bookmarkImage__SPKG5"}}}]);
//# sourceMappingURL=46150.acfd89d2.chunk.js.map
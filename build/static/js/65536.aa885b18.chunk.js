"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[65536],{28453:(e,o,i)=>{i.d(o,{Z:()=>B});var s=i(72791),t=i(16871),l=i(43504),n=i(48673),d=i(69721),a=i(4357);const c="EachPoll_eachpost__8B853",r="EachPoll_eachposthead__q8GZP",u="EachPoll_imgcontainer__u03ac",v="EachPoll_iimg__cxQqE",h="EachPoll_eachpostUserName__seKtO",m="EachPoll_eachpostUserTime__K1FpW",p="EachPoll_bars__M0vq4",_="EachPoll_postText__UDt3u",x="EachPoll_text__nn+bp",j="EachPoll_menu__HUtj0",g="EachPoll_barContainer__DzUu4",k="EachPoll_barContainerVote__xhYsz",N="EachPoll_bar__I2sUf",f="EachPoll_pollQuestion__sxYwB";var I=i(13688),U=i(39230),C=i(30488),P=i(38697),q=i(9447),S=i(95048),w=i(70092),y=i(71766),E=i(40093),O=i(80184);const B=function(e){var o,i,B,A,Z,R;let{post:L,profilePost:F,allPosts:Q,selectOptions:b,dotsClicked:T,setDotsClicked:M,closeMenu:D,viewAs:G}=e;const W=(0,t.UO)(),[H,V]=(0,s.useState)(!1),[K,z]=(0,s.useState)(!1),{t:$}=(0,U.$G)(),[Y,J]=(0,s.useState)(!1),X=(0,S.v9)((e=>e.idChange)),ee=(0,S.I0)(),[oe]=(0,q.AI)(),ie=(e,o)=>{ee(n.S.searchId({id:e,type:"ID",searchAs:o}))};return(0,O.jsxs)("div",{className:c,children:[(0,O.jsxs)("div",{className:r,children:[(0,O.jsx)("div",{className:u,children:(null===L||void 0===L?void 0:L.author)===(null===X||void 0===X?void 0:X.id)?(0,O.jsx)(l.rU,{to:"/q/".concat(null===L||void 0===L?void 0:L.authorUserName,"/profile"),children:(0,O.jsx)("img",{alt:"not found",src:"1"!==L.authorPhotoId?"".concat(d.yI,"/").concat(L.authorProfilePhoto):"/images/ins_default_profile.svg",className:"1"!==L.authorPhotoId?"":v})}):(0,O.jsx)(l.rU,{to:"/q/".concat(null===L||void 0===L?void 0:L.authorUserName,"/profile"),onClick:()=>ie(null===L||void 0===L?void 0:L.author,(null===L||void 0===L?void 0:L.isInstitute)||(null===L||void 0===L?void 0:L.isUser)),children:(0,O.jsx)("img",{alt:"not found",src:"1"!==L.authorPhotoId?"".concat(d.yI,"/").concat(L.authorProfilePhoto):"/images/ins_default_profile.svg",className:"1"!==L.authorPhotoId?"":v})})}),(0,O.jsxs)("div",{className:h,children:[(null===L||void 0===L?void 0:L.author)===(null===X||void 0===X?void 0:X.id)?(0,O.jsx)(l.rU,{to:"/q/".concat(L.authorUserName,"/profile"),children:(0,O.jsx)("h6",{children:L.authorUserName})}):(0,O.jsx)(l.rU,{to:"/q/".concat(null===L||void 0===L?void 0:L.authorUserName,"/profile"),onClick:()=>ie(null===L||void 0===L?void 0:L.author,(null===L||void 0===L?void 0:L.isInstitute)||(null===L||void 0===L?void 0:L.isUser)),children:(0,O.jsx)("h6",{children:L.authorUserName})}),(0,O.jsx)("div",{className:m,style:{display:"flex",gap:"0.5vw",alignItems:"center"},children:(0,O.jsx)("p",{children:(0,I.WU)(null===L||void 0===L?void 0:L.createdAt)})})]})]}),(0,O.jsx)("p",{className:f,children:$("poll_question")}),(0,O.jsx)("div",{className:_,children:(0,O.jsx)("p",{className:x,children:null===L||void 0===L||null===(o=L.poll_query)||void 0===o||null===(i=o.poll_question)||void 0===i||null===(B=i.split(" "))||void 0===B?void 0:B.map(((e,o)=>{var i,s,t;return e.startsWith("#",0)?(0,O.jsx)(l.rU,{to:"/q/".concat(null===W||void 0===W?void 0:W.username,"/hashtag/").concat(e.slice(1,e.length)),onClick:()=>ie(e.slice(1,e.length)),style:{color:"#436DFA"},state:{hid:null===L||void 0===L||null===(i=L.hash_tag)||void 0===i||null===(s=i.filter((o=>(null===o||void 0===o?void 0:o.hashtag_name)===e?o:"")))||void 0===s||null===(t=s[0])||void 0===t?void 0:t._id},children:" ".concat(e," ")},o):(0,O.jsx)("span",{children:" ".concat(e," ")},o)}))})}),(0,O.jsx)("div",{className:p,children:null===L||void 0===L||null===(A=L.poll_query)||void 0===A||null===(Z=A.poll_answer)||void 0===Z?void 0:Z.map(((e,o)=>{var i,s,t;return(0,O.jsxs)("div",{className:null!==e&&void 0!==e&&null!==(i=e.users)&&void 0!==i&&i.includes(null===X||void 0===X?void 0:X.id)?"".concat(k," ").concat(g):g,onClick:()=>(e=>{var o,i;!e||null!==L&&void 0!==L&&null!==(o=L.poll_query)&&void 0!==o&&null!==(i=o.answeredUser)&&void 0!==i&&i.includes(null===X||void 0===X?void 0:X.id)||(ee(w.p.pollVote({pid:null===L||void 0===L?void 0:L._id,aid:e,id:null===X||void 0===X?void 0:X.id})),oe({pid:null===L||void 0===L?void 0:L._id,vote:{answerId:e}}).then((e=>{})).catch({}))})(null===e||void 0===e?void 0:e._id),children:[(0,O.jsx)("h6",{children:null===e||void 0===e?void 0:e.content}),(0,O.jsxs)("p",{children:[null===e||void 0===e||null===(s=e.percent_vote)||void 0===s?void 0:s.toFixed(0),"%"]}),(0,O.jsx)("div",{className:N,style:{width:"".concat(null===e||void 0===e?void 0:e.percent_vote,"%"),backgroundColor:null!==e&&void 0!==e&&null!==(t=e.users)&&void 0!==t&&t.includes(null===X||void 0===X?void 0:X.id)?"rgba(75, 26, 133, 0.1)":"#F2F2F2"}})]},o)}))}),(0,O.jsx)(E.Z,{likeCount:null===L||void 0===L?void 0:L.likeCount,endUserLike:null===L||void 0===L?void 0:L.endUserLike,endUserSave:null===L||void 0===L?void 0:L.endUserSave,pid:null===L||void 0===L?void 0:L._id,setCommentOpen:V,commentOpen:H,commentCount:null===L||void 0===L?void 0:L.commentCount,type:"Poll",total_votes:null===L||void 0===L||null===(R=L.poll_query)||void 0===R?void 0:R.total_votes}),(0,O.jsx)(a.Z,{pid:null===L||void 0===L?void 0:L._id,commentCount:null===L||void 0===L?void 0:L.commentCount,setCommentOpen:V,commentOpen:H,type:"not repost"}),"HASHTAG"===G?"":(0,O.jsx)("img",{src:"/images/menu-dots-icon.svg",alt:"",className:j,onClick:()=>M(!T)}),T&&(0,O.jsx)(C.Z,{closeMenu:D,children:(0,O.jsx)(P.Z,{setDotsClicked:M,options:b,switchOption:e=>{"Report"===(null===e||void 0===e?void 0:e.status)&&(J(null===e||void 0===e?void 0:e.data),z(!0))},pid:null===L||void 0===L?void 0:L._id,authorId:null===L||void 0===L?void 0:L.author,profilePost:F,status:null===L||void 0===L?void 0:L.postStatus,closeMenu:D,allPosts:Q,popup:!1,postType:null===L||void 0===L?void 0:L.postType,reportType:(null===L||void 0===L?void 0:L.isInstitute)||(null===L||void 0===L?void 0:L.isUser)})}),K&&(0,O.jsx)(y.Z,{report:K,hideModal:e=>z(e),id:null===X||void 0===X?void 0:X.id,reportId:Y})]})}},96222:(e,o,i)=>{i.d(o,{Z:()=>A});var s=i(72791);const t="EachQuestion_eachpost__lEIj3",l="EachQuestion_eachposthead__hAp0u",n="EachQuestion_imgcontainer__rzuwK",d="EachQuestion_iimg__IJ8f6",a="EachQuestion_eachpostUserName__nRTvR",c="EachQuestion_eachpostUserTime__tjqfI",r="EachQuestion_postText__MZFII",u="EachQuestion_text__T3FlM",v="EachQuestion_menu__KnxYl",h="EachQuestion_comment__Msz2U",m="EachQuestion_questionBottom__PrD2U",p="EachQuestion_questionBottomBorder__GaVRy",_="EachQuestion_needCount__i29vr",x="EachQuestion_questionBottomIcon__-h4XP",j="EachQuestion_questionBottomIconOne__kSWaE",g="EachQuestion_answerIcon__6i4jo";var k=i(13688),N=i(68676),f=i(48673),I=i(69721),U=i(16871),C=i(43504),P=i(30488),q=i(38697),S=i(39230),w=i(79797),y=i(43101),E=i(4357),O=i(95048),B=i(80184);const A=function(e){var o,i;let{post:A,profilePost:Z,allPosts:R,selectOptions:L,switchOption:F,dotsClicked:Q,setDotsClicked:b,closeMenu:T,viewAs:M}=e;const[D,G]=(0,s.useState)(!1),[W,H]=(0,s.useState)(!1),V=(0,O.I0)(),{t:K}=(0,S.$G)(),z=(0,O.v9)((e=>e.idChange)),$=(0,U.UO)(),Y=e=>{var o;H(!1),V(f.S.openQuestionWithAnswer({repost:"repost",post:A._id,type:"question",otherOption:{profilePost:Z,selectOptions:L,directAnswer:e},search:""!==(null===z||void 0===z||null===(o=z.searchProfile)||void 0===o?void 0:o.id)?"search":"not search"})),G((e=>!e))},J=(e,o)=>{V(f.S.searchId({id:e,type:"ID",searchAs:o}))};return(0,B.jsxs)("div",{className:t,children:[(0,B.jsxs)("div",{className:l,children:[(0,B.jsx)("div",{className:n,children:(null===A||void 0===A?void 0:A.author)===(null===z||void 0===z?void 0:z.id)?(0,B.jsx)(C.rU,{to:"/q/".concat(null===A||void 0===A?void 0:A.authorUserName,"/profile"),onClick:J,children:(0,B.jsx)("img",{alt:"not found",src:"1"!==A.authorPhotoId?"".concat(I.yI,"/").concat(A.authorProfilePhoto):"/images/ins_default_profile.svg",className:"1"!==A.authorPhotoId?"":d})}):(0,B.jsx)(C.rU,{to:"/q/".concat(null===A||void 0===A?void 0:A.authorUserName,"/profile"),onClick:()=>J(null===A||void 0===A?void 0:A.author,(null===A||void 0===A?void 0:A.isInstitute)||(null===A||void 0===A?void 0:A.isUser)),children:(0,B.jsx)("img",{alt:"not found",src:"1"!==A.authorPhotoId?"".concat(I.yI,"/").concat(A.authorProfilePhoto):"/images/ins_default_profile.svg",className:"1"!==A.authorPhotoId?"":d})})}),(0,B.jsxs)("div",{className:a,children:[(null===A||void 0===A?void 0:A.author)===(null===z||void 0===z?void 0:z.id)?(0,B.jsx)(C.rU,{to:"/q/".concat(A.authorUserName,"/profile"),children:(0,B.jsx)("h6",{children:A.authorUserName})}):(0,B.jsx)(C.rU,{to:"/q/".concat(null===A||void 0===A?void 0:A.authorUserName,"/profile"),onClick:()=>J(null===A||void 0===A?void 0:A.author,(null===A||void 0===A?void 0:A.isInstitute)||(null===A||void 0===A?void 0:A.isUser)),children:(0,B.jsx)("h6",{children:A.authorUserName})}),(0,B.jsx)("div",{className:c,style:{display:"flex",gap:"0.5vw",alignItems:"center"},children:(0,B.jsx)("p",{children:(0,k.WU)(null===A||void 0===A?void 0:A.createdAt)})})]})]}),(0,B.jsx)("div",{className:r,children:(0,B.jsx)("p",{className:u,"data-toggle":"tooltip","data-placement":"top",title:"See All Answers...",children:null===A||void 0===A||null===(o=A.postQuestion)||void 0===o||null===(i=o.split(" "))||void 0===i?void 0:i.map(((e,o)=>{var i,s,t;return e.startsWith("#",0)?(0,B.jsx)(C.rU,{to:"/q/".concat(null===$||void 0===$?void 0:$.username,"/hashtag/").concat(e.slice(1,e.length)),onClick:()=>J(e.slice(1,e.length)),style:{color:"#436DFA"},state:{hid:null===A||void 0===A||null===(i=A.hash_tag)||void 0===i||null===(s=i.filter((o=>(null===o||void 0===o?void 0:o.hashtag_name)===e?o:"")))||void 0===s||null===(t=s[0])||void 0===t?void 0:t._id},children:" ".concat(e," ")},o):(0,B.jsx)("span",{onClick:()=>Y(!1),children:" ".concat(e," ")},o)}))})}),(0,B.jsxs)("div",{className:m,children:[(0,B.jsxs)("div",{className:p,children:[(0,B.jsxs)("p",{className:_,children:[null===A||void 0===A?void 0:A.needCount," ",K("needs_help")," "]}),(0,B.jsxs)("p",{children:[null===A||void 0===A?void 0:A.commentCount," ",K("comments")," | ",null===A||void 0===A?void 0:A.answerCount," ",K("Answers")]})]}),(0,B.jsxs)("div",{className:x,children:[(0,B.jsx)("div",{className:j,children:(0,B.jsx)(y.Z,{answerIcon:g,needCount:null===A||void 0===A?void 0:A.needCount,needUser:null===A||void 0===A?void 0:A.needUser,pid:null===A||void 0===A?void 0:A._id,parentStyle:j})}),(0,B.jsxs)("div",{className:j,onClick:()=>{H((e=>!e)),G(!1)},children:[(0,B.jsx)("img",{src:"/images/comment-icon.svg",alt:""}),(0,B.jsx)("p",{children:K("comment")})]}),(0,B.jsxs)("div",{className:j,onClick:()=>Y(!0),children:[(0,B.jsx)("img",{src:"/images/repeat.svg",alt:""}),(0,B.jsx)("p",{children:K("answer")})]}),(0,B.jsx)("div",{className:j,children:(0,B.jsx)(w.Z,{endUserSave:null===A||void 0===A?void 0:A.endUserSave,pid:null===A||void 0===A?void 0:A._id,status:"yes",parentStyle:j})})]})]}),W&&(0,B.jsx)(E.Z,{pid:null===A||void 0===A?void 0:A._id,commentCount:null===A||void 0===A?void 0:A.commentCount,setCommentOpen:H,commentOpen:W,type:"not repost"}),D&&(0,B.jsx)("div",{className:h,children:(0,B.jsx)(N.Z,{pid:null===A||void 0===A?void 0:A._id,setViewIns:G,answerPostType:"notRepost"})}),"HASHTAG"===M?"":(0,B.jsx)("img",{src:"/images/menu-dots-icon.svg",alt:"",className:v,onClick:()=>b(!Q)}),Q&&(0,B.jsx)(P.Z,{closeMenu:T,children:(0,B.jsx)(q.Z,{setDotsClicked:b,options:L,switchOption:F,pid:null===A||void 0===A?void 0:A._id,authorId:null===A||void 0===A?void 0:A.author,profilePost:Z,status:null===A||void 0===A?void 0:A.postStatus,closeMenu:T,allPosts:R,popup:!1,postType:null===A||void 0===A?void 0:A.postType,reportType:(null===A||void 0===A?void 0:A.isInstitute)||(null===A||void 0===A?void 0:A.isUser)})})]})}},76151:(e,o,i)=>{i.d(o,{Z:()=>u});var s=i(72791),t=i(9447),l=i(96220),n=i(95048),d=i(70092),a=i(16256),c=i(39230),r=i(80184);const u=e=>{let{endUserSave:o,pid:i,parentStyle:u}=e;const[v,h]=s.useState(!0),{t:m}=(0,c.$G)(),p=(0,n.v9)((e=>e.idChange)),_=(0,n.I0)(),[x,j]=s.useState(null===o||void 0===o?void 0:o.some((e=>e===(null===p||void 0===p?void 0:p.id)))),{postSaveRefetch:g}=(0,t.rq)({data:{pid:i,viewAs:a.Xe},skip:v});return(0,r.jsx)(r.Fragment,{children:x?(0,r.jsxs)("div",{className:u,onClick:()=>{_(d.p.removeSave({pid:i,id:null===p||void 0===p?void 0:p.id})),h(!1),j(!1),g()},children:[(0,r.jsx)("img",{src:"/images/unbookmark-icon.svg",alt:"",className:l.Z.bookmarkImage}),(0,r.jsx)("p",{children:m("save")})]}):(0,r.jsxs)("div",{className:u,onClick:()=>{_(d.p.addSave({pid:i,id:null===p||void 0===p?void 0:p.id})),h(!1),j(!0),g()},children:[(0,r.jsx)("img",{src:"/images/bookmark-icon.svg",alt:"",className:l.Z.bookmarkImage}),(0,r.jsx)("p",{children:m("save")})]})})}},40093:(e,o,i)=>{i.d(o,{Z:()=>m});var s=i(72791);const t={viewComments:"Reactions_viewComments__4Zhyn",questionBottom:"Reactions_questionBottom__Cls7M",questionBottomBorder:"Reactions_questionBottomBorder__LbKwG",pollVote:"Reactions_pollVote__sNF0H",questionBottomIcon:"Reactions_questionBottomIcon__E-OAO",questionBottomIconOne:"Reactions_questionBottomIconOne__r+qb9",answerIcon:"Reactions_answerIcon__hubPI"};var l=i(95048),n=i(16256),d=i(39230),a=i(9447),c=i(70092),r=i(96220),u=i(80184);const v=e=>{let{parentStyle:o,endUserLike:i,pid:t,type:v}=e;const{t:h}=(0,d.$G)(),m=(0,l.I0)(),[p,_]=s.useState(!0),x=(0,l.v9)((e=>e.idChange)),[j,g]=s.useState(null===i||void 0===i?void 0:i.some((e=>e===(null===x||void 0===x?void 0:x.id)))),{postLikeRefetch:k}=(0,a.gM)({data:{pid:t,viewAs:n.Xe},skip:p});return(0,u.jsx)(u.Fragment,{children:j?(0,u.jsxs)("div",{className:o,onClick:()=>{m(c.p.removeLike({pid:t,id:null===x||void 0===x?void 0:x.id})),g(!1),_(!1),k()},children:[(0,u.jsx)("img",{src:"Poll"!==v?"/images/unlike-icon.svg":"/images/poll-recommended.svg",alt:"unlike",className:r.Z.likeImage}),(0,u.jsx)("p",{children:h("Poll"!==v?"like":"recommend")})]}):(0,u.jsxs)("div",{className:o,onClick:()=>{m(c.p.addLike({pid:t,id:null===x||void 0===x?void 0:x.id})),g(!0),_(!1),k()},children:[(0,u.jsx)("img",{src:"Poll"!==v?"/images/like-icon.svg":"/images/poll-recommend.svg",alt:"like",className:r.Z.likeImage}),(0,u.jsx)("p",{children:h("Poll"!==v?"like":"recommend")})]})})};var h=i(76151);const m=function(e){let{likeCount:o,endUserLike:i,endUserSave:s,pid:l,setCommentOpen:n,commentOpen:a,commentCount:c,type:r,total_votes:m}=e;const{t:p}=(0,d.$G)();return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)("div",{className:t.questionBottom,children:["Poll"!==r?(0,u.jsxs)("div",{className:t.questionBottomBorder,children:[(0,u.jsxs)("p",{className:t.needCount,children:[o," ",p("likes")," "]}),(0,u.jsxs)("p",{children:[c," ",p("comments_")," "]})]}):(0,u.jsxs)("div",{className:t.questionBottomBorder,children:[(0,u.jsxs)("p",{className:t.pollVote,children:[m," ",p("votes")," "]}),(0,u.jsxs)("p",{children:[o," ",p("recommend")," | ",c," ",p("comments_")]})]}),(0,u.jsxs)("div",{className:t.questionBottomIcon,children:[(0,u.jsx)("div",{className:t.questionBottomIconOne,children:(0,u.jsx)(v,{endUserLike:i,pid:l,parentStyle:t.questionBottomIconOne,type:r})}),(0,u.jsxs)("div",{className:t.questionBottomIconOne,onClick:()=>{n(!a)},children:[(0,u.jsx)("img",{src:"/images/comment-icon.svg",alt:""}),(0,u.jsx)("p",{children:p("comment")})]}),(0,u.jsx)("div",{className:t.questionBottomIconOne,children:(0,u.jsx)(h.Z,{endUserSave:s,pid:l,parentStyle:t.questionBottomIconOne})})]})]})})}},12923:(e,o,i)=>{i.d(o,{Ec:()=>g,Em:()=>f,JM:()=>h,NS:()=>l,Pg:()=>m,Q_:()=>j,RH:()=>v,Tv:()=>a,U_:()=>x,VN:()=>n,Wj:()=>r,ZS:()=>u,_8:()=>k,d5:()=>c,tB:()=>_,vI:()=>N,yx:()=>d,zO:()=>p});var s=i(91007),t=i(58208);const l=e=>{const{data:o,refetch:i}=(0,t.YD)(e.search,{skip:e.skip});return{instituteAllSearch:o,instituteAllSearchRefetch:i}},n=()=>{const[e]=(0,t.ak)();return[e]},d=()=>{const[e]=(0,t.WL)();return[e]},a=e=>{const{data:o,refetch:i}=(0,t.pH)(e.list,{skip:e.skip});return{instituteFollowList:o,instituteFollowListRefetch:i}},c=e=>{const{data:o,refetch:i}=(0,t.MG)(e.data,{skip:e.skip});return{instituteOwnFollowingList:o,instituteOwnFollowingListRefetch:i}},r=()=>{const[e]=(0,t.Ky)();return[e]},u=e=>{const{data:o,refetch:i}=(0,t.p8)(e.list);return{userFollowList:o,userFollowListRefetch:i}},v=e=>{const{data:o,refetch:i}=(0,t.Wv)(e);return{userFollowingList:o,userFollowingListRefetch:i}},h=e=>{const{data:o,refetch:i}=(0,t.sz)(e.search,{skip:e.skip});return{userAllSearch:o,userAllSearchRefetch:i}},m=()=>{const[e]=(0,t.Mk)();return[e]},p=()=>{const[e]=(0,t.$i)();return[e]},_=()=>{const[e]=(0,t.Do)();return[e]},x=()=>{const[e]=(0,t.He)();return[e]},j=()=>{const[e]=(0,t.vg)();return[e]},g=()=>{const[e]=(0,t.OO)();return[e]},k=e=>{const{data:o,refetch:i}=(0,t.N2)(e);return{userCircleList:o,userCircleListRefetch:i}},N=e=>{const{data:o,refetch:i}=(0,s.x6)(e.search,{skip:e.skip});return{assignSearchStaff:o,assignSearchStaffRefetch:i}},f=e=>{const{data:o,refetch:i}=(0,t.SJ)(e);return{universalUser:o,universalUserRefetch:i}}},96220:(e,o,i)=>{i.d(o,{Z:()=>s});const s={likke:"Like_likke__TuwAK",likeImage:"Like_likeImage__0+6gy",bookmarkImage:"Like_bookmarkImage__OrT+E"}}}]);
//# sourceMappingURL=65536.aa885b18.chunk.js.map
"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[71522],{30488:function(e,n,i){var t=i(72791),o=i(80184);n.Z=function(e){var n=e.children,i=(e.closeMenu,(0,t.useRef)(null)),s=function(e){};return(0,t.useEffect)((function(){return document.addEventListener("click",s,!0),function(){document.removeEventListener("click",s,!0)}}),[]),(0,o.jsx)("div",{ref:i,children:n})}},38697:function(e,n,i){i.d(n,{Z:function(){return v}});var t=i(29439),o=i(72791),s=i(95048),l=i(16256),a=i(9447),c=i(12923),r=i(70092),d=i(91007),u={profileToolTip:"Menu_profileToolTip__0wglz",triangle:"Menu_triangle__Tf7Ko",triangleDisplay:"Menu_triangleDisplay__CXGXK",profilelist:"Menu_profilelist__Z5Afx"},m=i(80184);var v=function(e){var n=e.options,i=e.switchOption,v=e.authorId,h=e.setDotsClicked,p=e.pid,f=e.postType,x=e.status,_=e.closeMenu,j=e.allPosts,g=e.popup,C=e.reportType,N=(0,s.v9)((function(e){return e.idChange})),k=o.useState(!0),w=(0,t.Z)(k,2),y=w[0],Z=w[1],I=(0,s.I0)(),S=(0,c.Ec)(),A=(0,t.Z)(S,1)[0],R=(0,c.zO)(),P=(0,t.Z)(R,1)[0],b=(0,a.z$)(),E=(0,t.Z)(b,1)[0],L=(0,a.MB)(),U=(0,t.Z)(L,1)[0],T=(0,a.IG)(),F=(0,t.Z)(T,1)[0],q=(0,d.pu)({id:null===N||void 0===N?void 0:N.id,type:"ID"},{skip:y}).refetch,D=(0,o.useRef)(null),G=function(e){if("Unfollow"===e){var n=function(e){for(var n=[],i=0;i<(null===j||void 0===j?void 0:j.length);i++)j[i].author!==e&&n.push(j[i]);return n}(v);I(r.p.unfollowPost({posts:n})),"user"===C?P({userFollowId:v}).then((function(){h(!1)})).catch({}):"institute"===C&&A({InsfollowId:v}).then((function(){h(!1)})).catch({})}else"Visibility"===e?(I(r.p.changeVisibility({pid:p,status:"Anyone"===x?"Private":"Anyone"})),h(!1),E({pid:p,viewAs:l.Xe,postUpdate:{postStatus:"Anyone"===x?"Private":"Anyone"}}).then((function(){})).catch({})):"Delete"===e?(I(r.p.deletePost({pid:p})),h(!1),"Question"===f?F({id:null===N||void 0===N?void 0:N.id,viewAs:l.Xe,pid:p}).then((function(){})).catch({}):U({id:null===N||void 0===N?void 0:N.id,viewAs:l.Xe,pid:p}).then((function(){Z(!1),q()})).catch({})):i({status:e,data:{pid:p,reportType:C}})},V=function(e){e.target.style.zIndex&&"50"===e.target.style.zIndex||_()};return(0,o.useEffect)((function(){return document.addEventListener("click",V,!0),function(){document.removeEventListener("click",V,!0)}}),[]),(0,m.jsxs)("div",{className:g?"".concat(u.profileToolTip," ").concat(u.profileToolTipPopup):u.profileToolTip,id:"menuTooltip",children:[(0,m.jsx)("div",{className:g?"".concat(u.triangle," ").concat(u.trianglePopup):"".concat(u.triangle," ").concat(u.triangleNotPopup)}),(0,m.jsx)("div",{className:u.profilelist,children:n.map((function(e,n){return(0,m.jsx)("div",{ref:D,style:{zIndex:"50"},value:e,onClick:function(){return G(e)},children:e},n)}))})]})}},68676:function(e,n,i){i.d(n,{Z:function(){return b}});var t=i(29439),o=i(72791),s=i(23441),l=i(9447),a=i(69721),c="Answers_answerSection__BOZSm",r="Answers_eachposthead__8kD9P",d="Answers_imgcontainer__NgdE0",u="Answers_iimg__f9Llq",m="Answers_eachpostUserName__4LWd3",v="Answers_eachpostUserTime__fxF2q",h="Answers_answerTitle__VIST7",p="Answers_answerMainContainer__J1Uzj",f="Answers_questionBottom__kBPAR",x="Answers_questionBottomBorder__gh3ZK",_="Answers_questionBottomBorderUser__4RFRc",j="Answers_needCount__Q0XN7",g="Answers_questionBottomIcon__Sl76i",C="Answers_questionBottomIconOne__AtIjV",N="Answers_postImg__gDPL+",k=i(13688),w=i(16256),y=i(9365),Z=i(39230),I=i(95048),S=i(70092),A=i(31349),R=i(80184),P=function(e){var n=e.endUserSave,i=e.aid,s=e.parentStyle,a=o.useState(!0),c=(0,t.Z)(a,2),r=c[0],d=c[1],u=(0,Z.$G)().t,m=(0,I.v9)((function(e){return e.idChange})),v=o.useState(null===n||void 0===n?void 0:n.some((function(e){return e===(null===m||void 0===m?void 0:m.id)}))),h=(0,t.Z)(v,2),p=h[0],f=h[1],x=(0,l.rx)({data:{aid:i},skip:r}).questionAnswerSaveReftech;return(0,R.jsx)(R.Fragment,{children:p?(0,R.jsxs)("div",{className:s,onClick:function(){d(!1),f(!1),x()},children:[(0,R.jsx)("img",{src:"/images/unbookmark-icon.svg",alt:"",className:A.Z.bookmarkImage1}),(0,R.jsx)("p",{children:u("save")})]}):(0,R.jsxs)("div",{className:s,onClick:function(){d(!1),f(!0),x()},children:[(0,R.jsx)("img",{src:"/images/bookmark-icon.svg",alt:"",className:A.Z.bookmarkImage1}),(0,R.jsx)("p",{children:u("save")})]})})};var b=function(e){var n=e.pid,i=(0,o.useState)(1),A=(0,t.Z)(i,2),b=A[0],E=A[1],L=(0,s.YD)(),U=(0,t.Z)(L,2),T=U[0],F=U[1],q=(0,o.useState)(!0),D=(0,t.Z)(q,2),G=D[0],V=D[1],M=(0,I.I0)(),B=(0,Z.$G)().t,H=(0,I.v9)((function(e){return e.postChange.answers})),O=(0,I.v9)((function(e){return e.idChange})),X=(0,l.TA)({data:{pid:n||"",page:b,limit:10,viewAs:w.Xe},skip:!n}),z=X.allPostAnswerQuestion,W=X.allPostAnswerQuestionRefetch;return(0,o.useEffect)((function(){F&&G&&E((function(e){return e+1}))}),[F,G]),(0,o.useEffect)((function(){n&&W()}),[n,b,W]),(0,o.useEffect)((function(){null!==z&&void 0!==z&&z.answer&&M(S.p.addAnswer({postId:n,answer:null===z||void 0===z?void 0:z.answer})),10===(null===z||void 0===z?void 0:z.answer.length)?V(!0):V(!1)}),[b,null===z||void 0===z?void 0:z.answer,n,M]),(0,R.jsx)(R.Fragment,{children:null===H||void 0===H?void 0:H.map((function(e){var i;return e.postId===n?0===(null===e||void 0===e?void 0:e.length)?(0,R.jsx)("p",{children:B("no_ans")}):null===e||void 0===e||null===(i=e.answer)||void 0===i?void 0:i.map((function(i,t){var o,s;return(null===e||void 0===e?void 0:e.answer.length)===t+1?(0,R.jsxs)("div",{className:c,ref:T,children:[(0,R.jsxs)("div",{className:r,children:[(0,R.jsx)("div",{className:d,children:(0,R.jsx)("img",{alt:"not found",src:"1"!==(null===i||void 0===i?void 0:i.authorPhotoId)?"".concat(a.yI,"/").concat(null===i||void 0===i?void 0:i.authorProfilePhoto):"/images/ins_default_profile.svg",className:"1"!==(null===i||void 0===i?void 0:i.authorPhotoId)?"":u})}),(0,R.jsxs)("div",{className:m,children:[(0,R.jsx)("h6",{children:null===i||void 0===i?void 0:i.authorUserName}),(0,R.jsx)("div",{className:v,style:{display:"flex",gap:"0.5vw",alignItems:"center"},children:(0,R.jsx)("p",{children:(0,k.WU)(null===i||void 0===i?void 0:i.createdAt)})})]})]}),(0,R.jsx)("div",{className:p,children:(0,R.jsx)("h5",{className:h,children:i.answerContent})}),null!==(o=i.answerImage)&&void 0!==o&&o.length?(0,R.jsx)("div",{className:N,children:(0,R.jsx)("img",{alt:" answer icon",src:"".concat(a.yI,"/").concat(i.answerImage[0])})}):"",(0,R.jsxs)("div",{className:f,children:[(0,R.jsx)("div",{className:"institute"!==(null===O||void 0===O?void 0:O.loggedinAs)?"".concat(x," ").concat(_):x,children:(0,R.jsxs)("p",{className:j,children:[i.upVoteCount," ",B("find_helpful")]})}),"institute"!==(null===O||void 0===O?void 0:O.loggedinAs)?(0,R.jsxs)("div",{className:g,children:[(0,R.jsx)("div",{className:C,children:(0,R.jsx)(y.Z,{parentStyle:C,upVote:null===i||void 0===i?void 0:i.upVote,aid:null===i||void 0===i?void 0:i._id,rpid:"",pid:n})}),(0,R.jsx)("div",{className:C,children:(0,R.jsx)(P,{endUserSave:null===i||void 0===i?void 0:i.answerSave,aid:null===i||void 0===i?void 0:i._id,parentStyle:C})})]}):""]})]},t):(0,R.jsxs)("div",{className:c,children:[(0,R.jsxs)("div",{className:r,children:[(0,R.jsx)("div",{className:d,children:(0,R.jsx)("img",{alt:"not found",src:"1"!==(null===i||void 0===i?void 0:i.authorPhotoId)?"".concat(a.yI,"/").concat(null===i||void 0===i?void 0:i.authorProfilePhoto):"/images/ins_default_profile.svg",className:"1"!==(null===i||void 0===i?void 0:i.authorPhotoId)?"":u})}),(0,R.jsxs)("div",{className:m,children:[(0,R.jsx)("h6",{children:null===i||void 0===i?void 0:i.authorUserName}),(0,R.jsx)("div",{className:v,style:{display:"flex",gap:"0.5vw",alignItems:"center"},children:(0,R.jsx)("p",{children:(0,k.WU)(null===i||void 0===i?void 0:i.createdAt)})})]})]}),(0,R.jsx)("div",{className:p,children:(0,R.jsx)("h5",{className:h,children:i.answerContent})}),null!==(s=i.answerImage)&&void 0!==s&&s.length?(0,R.jsx)("div",{className:N,children:(0,R.jsx)("img",{alt:" answer icon",src:"".concat(a.yI,"/").concat(i.answerImage[0])})}):"",(0,R.jsxs)("div",{className:f,children:[(0,R.jsx)("div",{className:"institute"!==(null===O||void 0===O?void 0:O.loggedinAs)?"".concat(x," ").concat(_):x,children:(0,R.jsxs)("p",{className:j,children:[i.upVoteCount," ",B("find_helpful")]})}),"institute"!==(null===O||void 0===O?void 0:O.loggedinAs)?(0,R.jsxs)("div",{className:g,children:[(0,R.jsx)("div",{className:C,children:(0,R.jsx)(y.Z,{parentStyle:C,upVote:null===i||void 0===i?void 0:i.upVote,aid:null===i||void 0===i?void 0:i._id,rpid:"",pid:n})}),(0,R.jsx)("div",{className:C,children:(0,R.jsx)(P,{endUserSave:null===i||void 0===i?void 0:i.answerSave,aid:null===i||void 0===i?void 0:i._id,parentStyle:C})})]}):""]})]},t)})):""}))})}},43101:function(e,n,i){var t=i(29439),o=i(72791),s=i(95048),l=i(9447),a=i(70092),c=i(39230),r=i(80184);n.Z=function(e){var n=e.answerIcon,i=e.needUser,d=e.pid,u=e.parentStyle,m=(0,c.$G)().t,v=(0,s.I0)(),h=o.useState(!0),p=(0,t.Z)(h,2),f=p[0],x=p[1],_=(0,s.v9)((function(e){return e.idChange})),j=o.useState(null===i||void 0===i?void 0:i.some((function(e){return e===(null===_||void 0===_?void 0:_.id)}))),g=(0,t.Z)(j,2),C=g[0],N=g[1],k=(0,l.Dx)({data:{pid:d},skip:f}).questionHelpReftech;return(0,r.jsx)(r.Fragment,{children:C?(0,r.jsxs)("div",{className:u,onClick:function(){v(a.p.questionNeedHelp({pid:d,id:null===_||void 0===_?void 0:_.id,type:"notneed"})),N(!1),x(!1),k()},children:[(0,r.jsx)("img",{className:n,src:"/images/answer-text-icon.svg",alt:"answer-text"}),(0,r.jsx)("p",{children:m("need_help")})]}):(0,r.jsxs)("div",{className:u,onClick:function(){v(a.p.questionNeedHelp({pid:d,id:null===_||void 0===_?void 0:_.id,type:"need"})),N(!0),x(!1),k()},children:[(0,r.jsx)("img",{className:n,src:"/images/answer-text-icon.svg",alt:"answer-text",style:{color:"black",opacity:"0.3"}}),(0,r.jsxs)("p",{children:[" ",m("need_help")]})]})})}},79797:function(e,n,i){var t=i(29439),o=i(72791),s=i(9447),l=i(31349),a=i(95048),c=i(70092),r=i(39230),d=i(80184);n.Z=function(e){var n=e.endUserSave,i=e.pid,u=e.status,m=e.parentStyle,v=o.useState(!0),h=(0,t.Z)(v,2),p=h[0],f=h[1],x=(0,r.$G)().t,_=(0,a.v9)((function(e){return e.idChange})),j=(0,a.I0)(),g=o.useState(null===n||void 0===n?void 0:n.some((function(e){return e===(null===_||void 0===_?void 0:_.id)}))),C=(0,t.Z)(g,2),N=C[0],k=C[1],w=(0,s.rn)({data:{pid:i},skip:p}).questionSaveReftech;return(0,d.jsx)(d.Fragment,{children:N?(0,d.jsxs)("div",{className:m,onClick:function(){j(c.p.removeSave({pid:i,id:null===_||void 0===_?void 0:_.id})),f(!1),k(!1),w()},children:[(0,d.jsx)("img",{src:"/images/unbookmark-icon.svg",alt:"",className:"yes"===u?l.Z.bookmarkImage1:l.Z.bookmarkImage}),(0,d.jsx)("p",{children:x("save")})]}):(0,d.jsxs)("div",{className:m,onClick:function(){j(c.p.addSave({pid:i,id:null===_||void 0===_?void 0:_.id})),f(!1),k(!0),w()},children:[(0,d.jsx)("img",{src:"/images/bookmark-icon.svg",alt:"",className:"yes"===u?l.Z.bookmarkImage1:l.Z.bookmarkImage}),(0,d.jsx)("p",{children:x("save")})]})})}},9365:function(e,n,i){var t=i(29439),o=i(72791),s=i(95048),l=i(9447),a=i(39230),c=i(70092),r=i(80184);n.Z=function(e){var n=e.parentStyle,i=e.upVote,d=e.aid,u=e.rpid,m=e.voteType,v=e.pid,h=(0,a.$G)().t,p=(0,s.I0)(),f=o.useState(!0),x=(0,t.Z)(f,2),_=x[0],j=x[1],g=o.useState(!0),C=(0,t.Z)(g,2),N=C[0],k=C[1],w=(0,s.v9)((function(e){return e.idChange})),y=o.useState(null===i||void 0===i?void 0:i.some((function(e){return e===(null===w||void 0===w?void 0:w.id)}))),Z=(0,t.Z)(y,2),I=Z[0],S=Z[1],A=(0,l.d7)({data:{aid:d},skip:_}).questionLikeReftech,R=(0,l.uU)({data:{rpid:u,aid:d},skip1:N}).questionRepostLikeRefetch;return(0,r.jsx)(r.Fragment,{children:I?(0,r.jsxs)("div",{className:n,onClick:function(){S(!1),"voteRepostAnswer"===m?(k(!1),p(c.p.repostAnswerVote({pid:u,id:null===w||void 0===w?void 0:w.id,type:"invalid"})),R()):(j(!1),p(c.p.answerHelpfull({pid:v,id:null===w||void 0===w?void 0:w.id,type:"nothelpfull",aid:d})),A())},children:[(0,r.jsx)("img",{src:"/images/answer-help-white.svg",alt:"up count"}),(0,r.jsx)("p",{children:h("helpful")})]}):(0,r.jsxs)("div",{className:n,onClick:function(){S(!0),"voteRepostAnswer"===m?(k(!1),p(c.p.repostAnswerVote({pid:u,id:null===w||void 0===w?void 0:w.id,type:"vote"})),R()):(j(!1),p(c.p.answerHelpfull({pid:v,id:null===w||void 0===w?void 0:w.id,type:"helpfull",aid:d})),A())},children:[(0,r.jsx)("img",{src:"/images/answer-help-grey.svg",alt:"up count"}),(0,r.jsxs)("p",{children:[" ",h("helpful")]})]})})}},4357:function(e,n,i){i.d(n,{Z:function(){return R}});var t=i(29439),o=i(72791),s=i(95048),l=i(23441),a=i(9447),c=i(39230),r=i(70092),d=i(69721),u={addComment:"AllComments_addComment__IiuLO",imgcontainer:"AllComments_imgcontainer__pHPK7",inputContainer:"AllComments_inputContainer__rO7nG",hr:"AllComments_hr__1bWzu",icons:"AllComments_icons__xPULS",btn:"AllComments_btn__4LD5P"},m=i(13688),v="EachNestedComment_eachComment__4Ffhj",h="EachNestedComment_imgcontainer__Sq1dn",p="EachNestedComment_commentText__t6emH",f="EachNestedComment_eachCommentContainer__3RRYs",x="EachNestedComment_dots__mLPY-",_="EachNestedComment_time__jqkUy",j=i(98684),g=i(80184);var C=function(e){var n=e.comment;return(0,g.jsxs)("div",{className:f,children:[(0,g.jsxs)("div",{className:v,children:[(0,g.jsx)("div",{className:h,children:(0,g.jsx)("img",{src:"1"!==(null===n||void 0===n?void 0:n.authorPhotoId)?"".concat(d.yI,"/").concat(n.authorProfilePhoto):"".concat(j.p3,"/feed-user-avatar.svg"),alt:""})}),(0,g.jsxs)("div",{className:p,children:[(0,g.jsx)("h6",{children:null===n||void 0===n?void 0:n.authorUserName}),(0,g.jsx)("p",{children:null===n||void 0===n?void 0:n.repliedComment})]})]}),(0,g.jsx)("div",{className:x,children:(0,g.jsx)("p",{className:_,children:(0,m.WU)(null===n||void 0===n?void 0:n.createdAt)})})]})},N={eachComment:"NestedComments_eachComment__c+EdU",addComment:"NestedComments_addComment__kPYIR",imgcontainer:"NestedComments_imgcontainer__Kcbtl",inputContainer:"NestedComments_inputContainer__MBWpb",hr:"NestedComments_hr__dsllw",icons:"NestedComments_icons__BAttl",btn:"NestedComments_btn__mY0jb"},k=i(91007),w=i(16256);var y=function(e){var n,i,u=e.pcid,m=e.pid,v=(0,c.$G)().t,h=(0,o.useState)(1),p=(0,t.Z)(h,2),f=p[0],x=p[1],_=(0,l.YD)(),j=(0,t.Z)(_,2),y=j[0],Z=j[1],I=(0,o.useState)(!0),S=(0,t.Z)(I,2),A=S[0],R=S[1],P=(0,o.useRef)(""),b=(0,s.v9)((function(e){return e.idChange})),E=(0,s.v9)((function(e){return e.postChange.replyComments})),L=(0,s.I0)(),U=(0,a._X)({data:{pcid:u||"",page:f,limit:10,viewAs:w.Xe},skip:!1}),T=U.allReplyComment,F=U.allReplyCommentRefetch,q=(0,a.ro)(),D=(0,t.Z)(q,1)[0],G=(0,k.dj)().data;return(0,o.useEffect)((function(){Z&&A&&x((function(e){return e+1}))}),[Z,A]),(0,o.useEffect)((function(){F()}),[f,F,A]),(0,o.useEffect)((function(){var e;null!==T&&void 0!==T&&T.replyComment&&L(r.p.addReplyComment({commentId:u,reply:null===T||void 0===T?void 0:T.replyComment})),10===(null===T||void 0===T||null===(e=T.replyComment)||void 0===e?void 0:e.length)?R(!0):R(!1)}),[null===T||void 0===T?void 0:T.replyComment,L,u]),(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)("div",{className:N.eachComment,children:[(0,g.jsxs)("div",{className:N.addComment,children:[(0,g.jsx)("div",{className:N.imgcontainer,children:(0,g.jsx)("img",{alt:"not found",src:"1"!==(null===G||void 0===G||null===(n=G.user)||void 0===n?void 0:n.photoId)?"".concat(d.yI,"/").concat(null===G||void 0===G||null===(i=G.user)||void 0===i?void 0:i.profilePhoto):"/images/ins_default_profile.svg"})}),(0,g.jsxs)("div",{className:N.inputContainer,children:[(0,g.jsx)("input",{type:"text",ref:P,placeholder:v("add_a_reply"),className:"form-control ".concat(N.searchinput)}),(0,g.jsxs)("div",{className:N.icons,children:[(0,g.jsx)("img",{src:"/images/img-icon.svg",alt:""}),(0,g.jsx)("img",{src:"/images/emoji-icon.svg",alt:""})]})]})]}),(0,g.jsx)("div",{className:N.btn,onClick:function(){L(r.p.addReplyCommentCount({commentId:u,postId:m})),D({replyComment:{comment:P.current.value,uid:b.id},pcid:u,viewAs:w.Xe}).then((function(e){var n;L(r.p.addReplyCreatedComment({commentId:u,reply:null===(n=e.data)||void 0===n?void 0:n.childReplyComment}))})).catch({}),P.current.value=""},children:v("reply")})]}),null===E||void 0===E?void 0:E.map((function(e){var n;return e.commentId===u?null===e||void 0===e||null===(n=e.reply)||void 0===n?void 0:n.map((function(n,i){var t;return(null===e||void 0===e||null===(t=e.reply)||void 0===t?void 0:t.length)===i+1?(0,g.jsxs)("div",{className:N.eachComment,ref:y,children:[(0,g.jsx)(C,{comment:n}),(0,g.jsx)("hr",{})]},i):(0,g.jsxs)("div",{className:N.eachComment,children:[(0,g.jsx)(C,{comment:n}),(0,g.jsx)("hr",{})]},i)})):""}))]})},Z={eachComment:"EachComment_eachComment__KtgVe",imgcontainer:"EachComment_imgcontainer__zSqdV",commentText:"EachComment_commentText__rn+mb",likeReply:"EachComment_likeReply__vPAms",eachCommentContainer:"EachComment_eachCommentContainer__k9poM",dots:"EachComment_dots__188wf",time:"EachComment_time__F7sK9"};var I=function(e){var n=e.comment,i=e.pid,l=(0,o.useState)(!1),u=(0,t.Z)(l,2),v=u[0],h=u[1],p=o.useState(!0),f=(0,t.Z)(p,2),x=f[0],_=f[1],j=(0,s.v9)((function(e){return e.idChange})),C=(0,s.I0)(),N=(0,a.uD)({ids:{cid:null===n||void 0===n?void 0:n._id,id:null===j||void 0===j?void 0:j.id,viewAs:w.Xe},skip:x}),k=N.commentLike,I=N.commentLikeRefetch;o.useEffect((function(){k&&(_(!0),C(r.p.addCommentLike({postId:i,commentId:null===n||void 0===n?void 0:n._id,like:k.allLikeCount})))}),[k]);var S=(0,c.$G)().t;return(0,g.jsxs)("div",{className:Z.eachCommentContainer,children:[(0,g.jsxs)("div",{className:Z.eachComment,children:[(0,g.jsx)("div",{className:Z.imgcontainer,children:(0,g.jsx)("img",{src:"1"!==(null===n||void 0===n?void 0:n.authorPhotoId)?"".concat(d.yI,"/").concat(n.authorProfilePhoto):"/images/member_tab/class/default_avatar.svg",alt:""})}),(0,g.jsxs)("div",{className:Z.commentText,children:[(0,g.jsx)("h6",{children:null===n||void 0===n?void 0:n.authorUserName}),(0,g.jsx)("p",{children:null===n||void 0===n?void 0:n.commentDescription})]})]}),(0,g.jsxs)("div",{className:Z.likeReply,children:[(0,g.jsxs)("p",{onClick:function(){_(!1),I()},children:[S("like")," ",(0,g.jsx)("span",{children:null===n||void 0===n?void 0:n.allLikeCount})]}),(0,g.jsxs)("p",{onClick:function(){return h(!v)},children:[S("reply")," ",(0,g.jsx)("span",{children:null===n||void 0===n?void 0:n.allChildCommentCount})," "]})]}),(0,g.jsx)("div",{className:Z.nested,children:v&&(null===n||void 0===n?void 0:n._id)&&(0,g.jsx)(y,{pcid:null===n||void 0===n?void 0:n._id,pid:i,allChildCommentCount:null===n||void 0===n?void 0:n.allChildCommentCount})}),(0,g.jsx)("div",{className:Z.dots,children:(0,g.jsx)("p",{className:Z.time,children:(0,m.WU)(null===n||void 0===n?void 0:n.createdAt)})})]})},S=i(43504),A=function(e){var n,i,m,v=e.pid,h=e.commentCount,p=e.commentCountIncrement,f=(0,o.useState)(1),x=(0,t.Z)(f,2),_=x[0],j=x[1],C=(0,o.useRef)(""),N=(0,s.I0)(),y=(0,l.YD)(),Z=(0,t.Z)(y,2),A=Z[0],R=Z[1],P=(0,o.useState)(!0),b=(0,t.Z)(P,2),E=b[0],L=b[1],U=(0,s.v9)((function(e){return e.postChange.comments})),T=(0,a.RR)({data:{pid:v||"",viewAs:w.Xe,page:_,limit:10},skip:!1}),F=T.allPostComment,q=T.allPostCommentRefetch,D=(0,a.es)(),G=(0,t.Z)(D,1)[0],V=(0,k.dj)().data;(0,o.useEffect)((function(){R&&E&&j((function(e){return e+1}))}),[R,E]),(0,o.useEffect)((function(){q()}),[_,q]),(0,o.useEffect)((function(){null!==F&&void 0!==F&&F.comment&&N(r.p.addComment({postId:v,comment:null===F||void 0===F?void 0:F.comment})),10===(null===F||void 0===F?void 0:F.comment.length)?L(!0):L(!1)}),[null===F||void 0===F?void 0:F.comment,N,v]);var M=(0,c.$G)().t;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)("div",{className:u.addComment,children:[(0,g.jsx)("div",{className:u.imgcontainer,children:(0,g.jsx)(S.rU,{to:"/q/".concat(null===V||void 0===V||null===(n=V.user)||void 0===n?void 0:n.username,"/profile"),children:(0,g.jsx)("img",{alt:"not found",src:"1"!==(null===V||void 0===V||null===(i=V.user)||void 0===i?void 0:i.photoId)?"".concat(d.yI,"/").concat(null===V||void 0===V||null===(m=V.user)||void 0===m?void 0:m.profilePhoto):"/images/ins_default_profile.svg"})})}),(0,g.jsxs)("div",{className:u.inputContainer,children:[(0,g.jsx)("input",{type:"text",ref:C,placeholder:M("all_comment"),className:"form-control ".concat(u.searchinput)}),(0,g.jsxs)("div",{className:u.icons,children:[(0,g.jsx)("img",{src:"/images/img-icon.svg",alt:""}),(0,g.jsx)("img",{src:"/images/emoji-icon.svg",alt:""})]})]})]}),(0,g.jsx)("div",{className:u.btn,onClick:function(){p(++h),G({comment:{commentDescription:C.current.value},pid:v,viewAs:w.Xe}).then((function(e){var n,i,t,o,s,l,a,c,d,u;N(r.p.addCreatedComment({postId:v,comment:{allChildCommentCount:null===(n=e.data)||void 0===n?void 0:n.comment.allChildCommentCount,allLikeCount:null===(i=e.data)||void 0===i?void 0:i.comment.allLikeCount,author:null===(t=e.data)||void 0===t?void 0:t.comment.author,authorName:null===(o=e.data)||void 0===o?void 0:o.comment.authorName,authorPhotoId:null===(s=e.data)||void 0===s?void 0:s.comment.authorPhotoId,authorProfilePhoto:null===(l=e.data)||void 0===l?void 0:l.comment.authorProfilePhoto,authorUserName:null===(a=e.data)||void 0===a?void 0:a.comment.authorUserName,commentDescription:null===(c=e.data)||void 0===c?void 0:c.comment.commentDescription,createdAt:null===(d=e.data)||void 0===d?void 0:d.comment.createdAt,_id:null===(u=e.data)||void 0===u?void 0:u.comment._id}}))})).catch({}),C.current.value=""},children:M("post")}),null===U||void 0===U?void 0:U.map((function(e){var n;return e.postId===v?null===e||void 0===e||null===(n=e.comment)||void 0===n?void 0:n.map((function(n,i){var t;return(null===e||void 0===e||null===(t=e.comment)||void 0===t?void 0:t.length)===i+1?(0,g.jsxs)("div",{className:u.eachComment,ref:A,children:[(0,g.jsx)(I,{comment:n,pid:v}),(0,g.jsx)("hr",{})]},i):(0,g.jsxs)("div",{className:u.eachComment,children:[(0,g.jsx)(I,{comment:n,pid:v}),(0,g.jsx)("hr",{})]},i)})):""}))]})};var R=function(e){var n=e.pid,i=e.commentCount,s=e.commentOpen,l=e.type,a=(0,o.useState)(i),c=(0,t.Z)(a,2),r=c[0],d=c[1];return(0,g.jsx)(g.Fragment,{children:s&&(0,g.jsx)("div",{style:"repost"===l?{padding:"1vw 0 0 0"}:{padding:"1vw"},children:(0,g.jsx)(A,{pid:n,commentCount:r,commentCountIncrement:function(e){d(e)}})})})}},71766:function(e,n,i){i.d(n,{Z:function(){return _}});var t=i(29439),o=i(72791),s=i(5574),l=i(94721),a="Report_report__GRZk5",c="Report_title__0dGlM",r="Report_submitbtn__G4ule",d="Report_content__GPcY7",u="Report_radio__jS8Vp",m="Report_text__AWLgU",v=i(72078),h=i(25801),p=i(39230),f=i(9447),x=i(80184);var _=function(e){var n=e.report,i=e.hideModal,_=e.id,j=e.reportId,g=(0,o.useState)(null),C=(0,t.Z)(g,2),N=C[0],k=C[1],w=(0,f.ly)(),y=(0,t.Z)(w,1)[0],Z=(0,p.$G)().t,I=(0,f.g_)(),S=(0,t.Z)(I,1)[0],A=function(e){k(e)};return(0,x.jsx)(s.Z,{open:n,onClose:function(){return i(!1)},children:(0,x.jsxs)("div",{className:a,children:[(0,x.jsxs)("div",{className:c,children:[(0,x.jsx)("h5",{children:Z("report_type")}),(0,x.jsx)("div",{className:r,onClick:function(){_&&null!==j&&void 0!==j&&j.pid&&("user"===(null===j||void 0===j?void 0:j.reportType)?y({pid:null===j||void 0===j?void 0:j.pid,id:_,reportPost:{reportStatus:N}}).then((function(){})).catch({}):S({pid:null===j||void 0===j?void 0:j.pid,id:_,reportPost:{reportStatus:N}}).then((function(){})).catch({})),i(!1)},children:Z("report_type")})]}),(0,x.jsx)(l.Z,{}),(0,x.jsxs)("div",{className:"".concat(d," row"),onClick:function(){return A("Sexual content")},children:[(0,x.jsx)("div",{className:"".concat(m," col-10"),children:(0,x.jsx)("p",{children:Z("sexual_content")})}),(0,x.jsx)("div",{className:"".concat(u," col-2"),children:(0,x.jsx)(h.Z,{value:"female",control:(0,x.jsx)(v.Z,{})})})]}),(0,x.jsxs)("div",{className:"".concat(d," row"),onClick:function(){return A("Violent or repulsive content")},children:[(0,x.jsx)("div",{className:"".concat(m," col-8"),children:(0,x.jsx)("p",{children:Z("violence_replusive")})}),(0,x.jsx)("div",{className:"".concat(u," col-4"),children:(0,x.jsx)(h.Z,{value:"female",control:(0,x.jsx)(v.Z,{}),disabled:!0})})]}),(0,x.jsxs)("div",{className:"".concat(d," row"),onClick:function(){return A("Hateful or abusive content")},children:[(0,x.jsx)("div",{className:"".concat(m," col-8"),children:(0,x.jsx)("p",{children:Z("hateful_abusive")})}),(0,x.jsx)("div",{className:"".concat(u," col-4"),children:(0,x.jsx)(h.Z,{value:"female",control:(0,x.jsx)(v.Z,{})})})]}),(0,x.jsxs)("div",{className:"".concat(d," row"),onClick:function(){return A("Harmful or dangerous act")},children:[(0,x.jsx)("div",{className:"".concat(m," col-8"),children:(0,x.jsx)("p",{children:Z("harmful_danger")})}),(0,x.jsx)("div",{className:"".concat(u," col-4"),children:(0,x.jsx)(h.Z,{value:"female",control:(0,x.jsx)(v.Z,{})})})]}),(0,x.jsxs)("div",{className:"".concat(d," row"),onClick:function(){return A("Spam or misleading")},children:[(0,x.jsx)("div",{className:"".concat(m," col-8"),children:(0,x.jsx)("p",{children:Z("spam_misleadleding")})}),(0,x.jsx)("div",{className:"".concat(u," col-4"),children:(0,x.jsx)(h.Z,{value:"female",control:(0,x.jsx)(v.Z,{})})})]}),(0,x.jsxs)("div",{className:"".concat(d," row"),onClick:function(){return A("Other")},children:[(0,x.jsx)("div",{className:"".concat(m," col-8"),children:(0,x.jsx)("p",{children:Z("other")})}),(0,x.jsx)("div",{className:"".concat(u," col-4"),children:(0,x.jsx)(h.Z,{value:"female",control:(0,x.jsx)(v.Z,{})})})]})]})})}},12923:function(e,n,i){i.d(n,{Ec:function(){return g},Em:function(){return k},JM:function(){return h},NS:function(){return l},Pg:function(){return p},Q_:function(){return j},RH:function(){return v},Tv:function(){return r},U_:function(){return _},VN:function(){return a},Wj:function(){return u},ZS:function(){return m},_8:function(){return C},d5:function(){return d},tB:function(){return x},vI:function(){return N},yx:function(){return c},zO:function(){return f}});var t=i(29439),o=i(91007),s=i(58208),l=function(e){var n=(0,s.YD)(e.search,{skip:e.skip});return{instituteAllSearch:n.data,instituteAllSearchRefetch:n.refetch}},a=function(){var e=(0,s.ak)();return[(0,t.Z)(e,1)[0]]},c=function(){var e=(0,s.WL)();return[(0,t.Z)(e,1)[0]]},r=function(e){var n=(0,s.pH)(e.list,{skip:e.skip});return{instituteFollowList:n.data,instituteFollowListRefetch:n.refetch}},d=function(e){var n=(0,s.MG)(e.data,{skip:e.skip});return{instituteOwnFollowingList:n.data,instituteOwnFollowingListRefetch:n.refetch}},u=function(){var e=(0,s.Ky)();return[(0,t.Z)(e,1)[0]]},m=function(e){var n=(0,s.p8)(e.list);return{userFollowList:n.data,userFollowListRefetch:n.refetch}},v=function(e){var n=(0,s.Wv)(e);return{userFollowingList:n.data,userFollowingListRefetch:n.refetch}},h=function(e){var n=(0,s.sz)(e.search,{skip:e.skip});return{userAllSearch:n.data,userAllSearchRefetch:n.refetch}},p=function(){var e=(0,s.Mk)();return[(0,t.Z)(e,1)[0]]},f=function(){var e=(0,s.$i)();return[(0,t.Z)(e,1)[0]]},x=function(){var e=(0,s.Do)();return[(0,t.Z)(e,1)[0]]},_=function(){var e=(0,s.He)();return[(0,t.Z)(e,1)[0]]},j=function(){var e=(0,s.vg)();return[(0,t.Z)(e,1)[0]]},g=function(){var e=(0,s.OO)();return[(0,t.Z)(e,1)[0]]},C=function(e){var n=(0,s.N2)(e);return{userCircleList:n.data,userCircleListRefetch:n.refetch}},N=function(e){var n=(0,o.x6)(e.search,{skip:e.skip});return{assignSearchStaff:n.data,assignSearchStaffRefetch:n.refetch}},k=function(e){var n=(0,s.SJ)(e);return{universalUser:n.data,universalUserRefetch:n.refetch}}},31349:function(e,n){n.Z={bookmarkImage:"Save_bookmarkImage__FMHzI",bookmarkImage1:"Save_bookmarkImage1__M8Gcc"}}}]);
//# sourceMappingURL=71522.aeaa004b.chunk.js.map
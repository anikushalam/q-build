"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[89998],{47184:function(e,n,t){var r=t(1413),o=(t(72791),t(46807)),i=t(80184);n.Z=function(e){var n=e.dynamicImage,t=e.customStyle;return(0,i.jsx)("img",{src:n,alt:"Avatar icon",style:(0,r.Z)({},t),className:o.Z.avatar_image})}},2072:function(e,n,t){t(72791);var r=t(75729),o=t(39230),i=t(80184);n.Z=function(e){var n=e.onEditIocn,t=e.activeIcon,a=e.onPostTypeChange,s=e.addFileToggle,c=e.onAddFile,l=e.acceptFormate,_=e.onVideoIcon,u=e.children,d=(0,o.$G)().t,m=function(e){a(e)};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("hr",{className:r.Z.hr}),(0,i.jsxs)("div",{className:r.Z.iconsContainer,children:[(0,i.jsxs)("div",{className:r.Z.icons,children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("img",{onClick:n,src:"/images/edit-icon.svg",alt:"eidt icon of post",title:"Create Text Post"}),1===t&&(0,i.jsx)("div",{className:r.Z.border1})]}),u,(0,i.jsxs)("div",{children:[(0,i.jsx)("img",{onClick:_,src:"/images/video-post-icon.svg",alt:"video icon of post",title:"Create Video Post"}),3===t&&(0,i.jsx)("div",{className:r.Z.border3})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("img",{onClick:function(){return m("newAnnouncement")},src:"/images/voice-post-icon.svg",alt:"announcement icon of post",title:"Create Announcement"}),4===t&&(0,i.jsx)("div",{className:r.Z.border4})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("img",{onClick:function(){return m("newPoll")},src:"/images/shorts-icon.svg",alt:"poll icon of post",title:"Create Poll Post"}),5===t&&(0,i.jsx)("div",{className:r.Z.border5})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("img",{onClick:function(){return m("newQuestion")},src:"/images/document-icon.svg",alt:"question icon of post",title:"Create Question Post"}),6===t&&(0,i.jsx)("div",{className:r.Z.border6})]})]}),s?(0,i.jsxs)("div",{children:[(0,i.jsx)("label",{htmlFor:"document",style:{cursor:"pointer"},children:(0,i.jsx)("p",{className:r.Z.addfiles,children:d("add_files")})}),(0,i.jsx)("input",{className:r.Z.upload,multiple:!0,id:"document",name:"file",onChange:c,type:"file",accept:l})]}):(0,i.jsx)("p",{children:d("add_files")})]})]})}},6599:function(e,n,t){t(72791);var r=t(47184),o=t(75729),i=t(39230),a=t(90865),s=t(80184);n.Z=function(e){var n=e.postTitle,t=e.onClose,c=e.name,l=e.privateImage,_=e.setPrivateImage,u=e.dynamicImage,d=e.postStatusRef,m=e.checkedToggle,f=e.onToggleHandler,v=e.announcement,h=e.children,p=(0,i.$G)().t;return(0,s.jsxs)("div",{className:o.Z.newPost,children:[(0,s.jsxs)("div",{className:o.Z.header,children:[(0,s.jsx)("h4",{children:n}),(0,s.jsx)("img",{src:"/images/close-post-icon.svg",onClick:t,alt:"close icon"})]}),(0,s.jsx)("hr",{className:o.Z.hr}),(0,s.jsxs)("div",{className:o.Z.content,children:[(0,s.jsxs)("div",{className:o.Z.title,children:[(0,s.jsx)("div",{className:o.Z.imgContainer,children:(0,s.jsx)(r.Z,{dynamicImage:u})}),(0,s.jsxs)("div",{className:o.Z.userName,children:[(0,s.jsx)("h6",{children:c}),(0,s.jsxs)("div",{className:o.Z.public,children:[(0,s.jsx)("img",{className:o.Z.privacyIcon,src:l?"/images/post-private-icon.svg":"/images/privacy-icon.svg",alt:""}),(0,s.jsxs)("div",{className:o.Z.select,children:[(0,s.jsx)("span",{className:o.Z.arrow}),(0,s.jsx)("img",{className:o.Z.arrowIcon,src:"/images/dropdown-icon.svg",alt:""}),(0,s.jsxs)("select",{name:"cars",id:"cars",ref:d,onChange:function(e){return"Anyone"===e.target.value?_(!1):_(!0)},children:[(0,s.jsx)("option",{value:"Anyone",children:p("public")}),(0,s.jsxs)("option",{value:"Private",children:[p("private")," "]})]})]})]})]}),!v&&(0,s.jsx)(a.Z,{labelHeading:p("turn_off_comment"),customContainer:{padding:"0"},customLabel:{fontWeight:"500"},checkedToggle:"On"!==m,onToggleHandler:f})]}),h]})]})}},89998:function(e,n,t){t.r(n);var r=t(29439),o=t(72791),i=t(1999),a=t(39230),s=(t(68464),t(69721)),c=t(12923),l=t(95048),_=t(49384),u=t(6599),d=t(2072),m=t(39480),f=t(80184);n.default=function(e){var n,t,v,h=e.setPostType,p=e.onPostTypeChange,g=(0,a.$G)().t,x=(0,o.useState)(),N=(0,r.Z)(x,2),Z=N[0],j=N[1],w=(0,o.useState)([]),b=(0,r.Z)(w,2),A=b[0],P=b[1],C=(0,o.useState)([]),k=(0,r.Z)(C,2),y=k[0],I=k[1],F=(0,o.useState)(!1),H=(0,r.Z)(F,2),T=H[0],S=H[1],L=(0,o.useState)(!1),R=(0,r.Z)(L,2),U=R[0],D=R[1],M=(0,o.useState)(!1),E=(0,r.Z)(M,2),O=E[0],W=E[1],q=(0,o.useRef)(""),Y=(0,o.useRef)(""),z=(0,o.useRef)(""),K=(0,c.Wj)(),Q=(0,r.Z)(K,1)[0],V=(0,l.v9)((function(e){return e.idChange})),G=(0,m.gq)({id:null===V||void 0===V?void 0:V.id,skip:!(null!==V&&void 0!==V&&V.id)}),J=G.oneInstituteDashboard,X=G.oneInstituteDashboardRefetch;(0,o.useEffect)((function(){null!==V&&void 0!==V&&V.id&&X()}),[null===V||void 0===V?void 0:V.id,X]),(0,o.useEffect)((function(){if(Z){var e=[],n=[];for(var t in Z)for(var r in Z[t])"type"===r&&(Z[t][r].includes("image/")?e.push(URL.createObjectURL(Z[t])):n.push({name:Z[t].name}));P(e),I(n)}}),[Z]);var $=document.querySelector("textarea");return null===$||void 0===$||$.addEventListener("keyup",(function(e){$.style.height="auto";var n=e.target.scrollHeight;$.style.height="".concat(n,"px")})),(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)(u.Z,{postTitle:g("create_announcement"),onClose:function(){return p("post")},dynamicImage:"1"!==(null===J||void 0===J||null===(n=J.institute)||void 0===n?void 0:n.photoId)?"".concat(s.yI,"/").concat(null===J||void 0===J||null===(t=J.institute)||void 0===t?void 0:t.insProfilePhoto):"/images/ins_default_profile.svg",name:null===J||void 0===J||null===(v=J.institute)||void 0===v?void 0:v.insName,privateImage:T,setPrivateImage:S,postStatusRef:z,announcement:!0,children:[(0,f.jsx)("div",{className:i.Z.postTitle,children:(0,f.jsx)("input",{className:i.Z.input,type:"text",ref:q,required:!0,placeholder:g("title_announce")})}),(0,f.jsx)("div",{className:i.Z.postDesc,children:(0,f.jsx)("textarea",{className:i.Z.postTextarea,rows:"3",type:"text",required:!0,ref:Y,name:"CreateInsPost",placeholder:g("description")})}),(0,f.jsxs)("div",{className:i.Z.listContainer,children:[A.length>0&&(0,f.jsx)("div",{className:i.Z.documentList,children:A.map((function(e,n){return(0,f.jsx)("img",{src:e,alt:""},n)}))}),y.length>0&&(0,f.jsx)("div",{className:i.Z.pdfList,children:y.map((function(e,n){return(0,f.jsxs)("div",{className:i.Z.pdfPreview,children:[(0,f.jsx)("img",{src:"/images/pdf-icon.png",alt:""},n),(0,f.jsx)("p",{children:e.name})]})}))})]}),O&&(0,f.jsx)("div",{style:{color:"red"},children:g("please_add")}),(0,f.jsxs)("button",{className:i.Z.btn,disabled:U,onClick:function(){if(""!==q.current.value&&""!==z.current.value){D(!0),W(!1);var e=new FormData;for(var n in e.append("insAnnTitle",q.current.value),e.append("insAnnDescription",Y.current.value),e.append("insAnnVisibility",z.current.value),Z)Z[n].size&&e.append("file",Z[n]);Q({id:null===V||void 0===V?void 0:V.id,announcement:e}).then((function(){p("post"),q.current.value="",Y.current.value="",z.current.value="",D(!1)})).catch({})}else W(!0)},children:[(0,f.jsx)("p",{children:g("post")}),U&&(0,f.jsx)("div",{children:(0,f.jsx)(_.Z,{})})]}),(0,f.jsx)(d.Z,{onEditIocn:function(){p("newPost"),h("text")},onPostTypeChange:p,activeIcon:4,addFileToggle:!0,onAddFile:function(e){j(e.target.files)},acceptFormate:"image/gif, image/jpeg, image/png,  application/pdf, application/msword",children:(0,f.jsx)("div",{children:(0,f.jsx)("img",{src:"/images/img-post-icon.svg",onClick:function(){p("newPost"),h("image")},alt:"file upload icon",title:"Create Image Post"})})})]})})}},12923:function(e,n,t){t.d(n,{Ec:function(){return N},Em:function(){return w},JM:function(){return f},NS:function(){return a},Pg:function(){return v},Q_:function(){return x},RH:function(){return m},Tv:function(){return l},U_:function(){return g},VN:function(){return s},Wj:function(){return u},ZS:function(){return d},_8:function(){return Z},d5:function(){return _},tB:function(){return p},vI:function(){return j},yx:function(){return c},zO:function(){return h}});var r=t(29439),o=t(91007),i=t(58208),a=function(e){var n=(0,i.YD)(e.search,{skip:e.skip});return{instituteAllSearch:n.data,instituteAllSearchRefetch:n.refetch}},s=function(){var e=(0,i.ak)();return[(0,r.Z)(e,1)[0]]},c=function(){var e=(0,i.WL)();return[(0,r.Z)(e,1)[0]]},l=function(e){var n=(0,i.pH)(e.list,{skip:e.skip});return{instituteFollowList:n.data,instituteFollowListRefetch:n.refetch}},_=function(e){var n=(0,i.MG)(e.data,{skip:e.skip});return{instituteOwnFollowingList:n.data,instituteOwnFollowingListRefetch:n.refetch}},u=function(){var e=(0,i.Ky)();return[(0,r.Z)(e,1)[0]]},d=function(e){var n=(0,i.p8)(e.list);return{userFollowList:n.data,userFollowListRefetch:n.refetch}},m=function(e){var n=(0,i.Wv)(e);return{userFollowingList:n.data,userFollowingListRefetch:n.refetch}},f=function(e){var n=(0,i.sz)(e.search,{skip:e.skip});return{userAllSearch:n.data,userAllSearchRefetch:n.refetch}},v=function(){var e=(0,i.Mk)();return[(0,r.Z)(e,1)[0]]},h=function(){var e=(0,i.$i)();return[(0,r.Z)(e,1)[0]]},p=function(){var e=(0,i.Do)();return[(0,r.Z)(e,1)[0]]},g=function(){var e=(0,i.He)();return[(0,r.Z)(e,1)[0]]},x=function(){var e=(0,i.vg)();return[(0,r.Z)(e,1)[0]]},N=function(){var e=(0,i.OO)();return[(0,r.Z)(e,1)[0]]},Z=function(e){var n=(0,i.N2)(e);return{userCircleList:n.data,userCircleListRefetch:n.refetch}},j=function(e){var n=(0,o.x6)(e.search,{skip:e.skip});return{assignSearchStaff:n.data,assignSearchStaffRefetch:n.refetch}},w=function(e){var n=(0,i.SJ)(e);return{universalUser:n.data,universalUserRefetch:n.refetch}}},90865:function(e,n,t){var r=t(1413),o=(t(72791),t(89891)),i=t(39320),a=t(80184),s={inputProps:{"aria-label":"Switch demo"}};n.Z=function(e){var n=e.customContainer,t=e.customLabel,c=e.labelDescription,l=e.labelHeading,_=e.defaultLabel,u=e.checkedToggle,d=e.onToggleHandler,m=e.children;return(0,a.jsxs)("div",{className:i.Z.form_toggle_container,style:(0,r.Z)({},n),children:[(0,a.jsxs)("div",{className:i.Z.form_toggle_label,children:[_?(0,a.jsx)(o.Z,(0,r.Z)((0,r.Z)({},s),{},{defaultChecked:!0,disabled:!0})):(0,a.jsx)(o.Z,(0,r.Z)((0,r.Z)({},s),{},{checked:u,onChange:d})),(0,a.jsx)("span",{style:(0,r.Z)({},t),children:l})]}),c&&(0,a.jsx)("div",{className:i.Z.form_toggle_description,children:c}),m]})}},68464:function(){},46807:function(e,n){n.Z={avatar_image:"Avatar_avatar_image__orRwR",custom_avatar_container:"Avatar_custom_avatar_container__f4BAI",custom_avatar_one:"Avatar_custom_avatar_one__XYFtg",custom_avatar_content:"Avatar_custom_avatar_content__E1nUO"}},75729:function(e,n){n.Z={newPost:"PostHeader_newPost__6jEMR",header:"PostHeader_header__nAWVN",imgContainer:"PostHeader_imgContainer__cnIbK",title:"PostHeader_title__S3tct",public:"PostHeader_public__EImhy",privacyIcon:"PostHeader_privacyIcon__+2tue",select:"PostHeader_select__C-Piu",arrow:"PostHeader_arrow__oZsjY",arrowIcon:"PostHeader_arrowIcon__SawKs",content:"PostHeader_content__FsI2m",hr:"PostHeader_hr__mTrEp",userName:"PostHeader_userName__jfN4e",iconsContainer:"PostHeader_iconsContainer__2M-xr",icons:"PostHeader_icons__MqfoZ",border1:"PostHeader_border1__wMsIw",border4:"PostHeader_border4__UyCNk",border5:"PostHeader_border5__YtPZT",border6:"PostHeader_border6__-EvMl",border3:"PostHeader_border3__dMt41",upload:"PostHeader_upload__D9cRU"}},1999:function(e,n){n.Z={newPost:"NewAnnouncement_newPost__P0MSs",header:"NewAnnouncement_header__4FgoM",imgContainer:"NewAnnouncement_imgContainer__D-zZj",title:"NewAnnouncement_title__XZ99r",public:"NewAnnouncement_public__gr79X",privacyIcon:"NewAnnouncement_privacyIcon__pt718",select:"NewAnnouncement_select__viS+M",arrow:"NewAnnouncement_arrow__OBDH8",arrowIcon:"NewAnnouncement_arrowIcon__hAUsH",hr:"NewAnnouncement_hr__+nmR6",userName:"NewAnnouncement_userName__h9vNW",postTitle:"NewAnnouncement_postTitle__d5Uhn",postDesc:"NewAnnouncement_postDesc__rQu4i",postTextarea:"NewAnnouncement_postTextarea__6oAWU",hashTag:"NewAnnouncement_hashTag__GkP-m",btn:"NewAnnouncement_btn__WWbXt",upload:"NewAnnouncement_upload__U-vJ+",Container:"NewAnnouncement_Container__KAel7",selectedImg:"NewAnnouncement_selectedImg__UJO5z",addfiles:"NewAnnouncement_addfiles__u79vd",iconsContainer:"NewAnnouncement_iconsContainer__1h40Z",icons:"NewAnnouncement_icons__F82H4",tille:"NewAnnouncement_tille__8AF0K",description:"NewAnnouncement_description__Y-v3j",afterbtn:"NewAnnouncement_afterbtn__vZuPx",hashtag:"NewAnnouncement_hashtag__0v8Yo",listContainer:"NewAnnouncement_listContainer__1Tder",documentList:"NewAnnouncement_documentList__Da5La",pdfList:"NewAnnouncement_pdfList__lbuZn",pdfPreview:"NewAnnouncement_pdfPreview__yRLt2",border2:"NewAnnouncement_border2__b0wJ6",border1:"NewAnnouncement_border1__vzr9R",border3:"NewAnnouncement_border3__mH2cK",border4:"NewAnnouncement_border4__oF8nk",mainbody:"NewAnnouncement_mainbody__sq6d+"}},39320:function(e,n){n.Z={staff_form_container:"UniversalForm_staff_form_container__QRs6I",staff_form_header_container:"UniversalForm_staff_form_header_container__+cQn3",form_header_container:"UniversalForm_form_header_container__GVVNM",form_header_list:"UniversalForm_form_header_list__fHs8S",form_header_code:"UniversalForm_form_header_code__LsmbM",form_toggle_description:"UniversalForm_form_toggle_description__281dv",form_toggle_label:"UniversalForm_form_toggle_label__mbisD",form_header_content:"UniversalForm_form_header_content__Y3p2k",form_toggle_container:"UniversalForm_form_toggle_container__D0bu0",form_checkbox_container:"UniversalForm_form_checkbox_container__bxzuK",staff_form_header_container_actions:"UniversalForm_staff_form_header_container_actions__2Ynt9",staff_header_text:"UniversalForm_staff_header_text__dQvPP"}}}]);
//# sourceMappingURL=89998.ef846161.chunk.js.map
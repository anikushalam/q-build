"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[78900],{47184:(e,n,t)=>{t.d(n,{Z:()=>a});t(72791);var o=t(46807),s=t(80184);const a=e=>{let{dynamicImage:n,customStyle:t}=e;return(0,s.jsx)("img",{src:n,alt:"Avatar icon",style:{...t},className:o.Z.avatar_image})}},2072:(e,n,t)=>{t.d(n,{Z:()=>r});t(72791);var o=t(75729),s=t(39230),a=t(80184);const r=e=>{let{onEditIocn:n,activeIcon:t,onPostTypeChange:r,addFileToggle:i,onAddFile:c,acceptFormate:l,onVideoIcon:d,children:_}=e;const{t:m}=(0,s.$G)(),u=e=>{r(e)};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("hr",{className:o.Z.hr}),(0,a.jsxs)("div",{className:o.Z.iconsContainer,children:[(0,a.jsxs)("div",{className:o.Z.icons,children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("img",{onClick:n,src:"/images/edit-icon.svg",alt:"eidt icon of post",title:"Create Text Post"}),1===t&&(0,a.jsx)("div",{className:o.Z.border1})]}),_,(0,a.jsxs)("div",{children:[(0,a.jsx)("img",{onClick:d,src:"/images/video-post-icon.svg",alt:"video icon of post",title:"Create Video Post"}),3===t&&(0,a.jsx)("div",{className:o.Z.border3})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("img",{onClick:()=>u("newAnnouncement"),src:"/images/voice-post-icon.svg",alt:"announcement icon of post",title:"Create Announcement"}),4===t&&(0,a.jsx)("div",{className:o.Z.border4})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("img",{onClick:()=>u("newPoll"),src:"/images/shorts-icon.svg",alt:"poll icon of post",title:"Create Poll Post"}),5===t&&(0,a.jsx)("div",{className:o.Z.border5})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("img",{onClick:()=>u("newQuestion"),src:"/images/document-icon.svg",alt:"question icon of post",title:"Create Question Post"}),6===t&&(0,a.jsx)("div",{className:o.Z.border6})]})]}),i?(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{htmlFor:"document",style:{cursor:"pointer"},children:(0,a.jsx)("p",{className:o.Z.addfiles,children:m("add_files")})}),(0,a.jsx)("input",{className:o.Z.upload,multiple:!0,id:"document",name:"file",onChange:c,type:"file",accept:l})]}):(0,a.jsx)("p",{children:m("add_files")})]})]})}},6599:(e,n,t)=>{t.d(n,{Z:()=>c});t(72791);var o=t(47184),s=t(75729),a=t(39230),r=t(90865),i=t(80184);const c=e=>{let{postTitle:n,onClose:t,name:c,privateImage:l,setPrivateImage:d,dynamicImage:_,postStatusRef:m,checkedToggle:u,onToggleHandler:v,announcement:h,children:g}=e;const{t:p}=(0,a.$G)();return(0,i.jsxs)("div",{className:s.Z.newPost,children:[(0,i.jsxs)("div",{className:s.Z.header,children:[(0,i.jsx)("h4",{children:n}),(0,i.jsx)("img",{src:"/images/close-post-icon.svg",onClick:t,alt:"close icon"})]}),(0,i.jsx)("hr",{className:s.Z.hr}),(0,i.jsxs)("div",{className:s.Z.content,children:[(0,i.jsxs)("div",{className:s.Z.title,children:[(0,i.jsx)("div",{className:s.Z.imgContainer,children:(0,i.jsx)(o.Z,{dynamicImage:_})}),(0,i.jsxs)("div",{className:s.Z.userName,children:[(0,i.jsx)("h6",{children:c}),(0,i.jsxs)("div",{className:s.Z.public,children:[(0,i.jsx)("img",{className:s.Z.privacyIcon,src:l?"/images/post-private-icon.svg":"/images/privacy-icon.svg",alt:""}),(0,i.jsxs)("div",{className:s.Z.select,children:[(0,i.jsx)("span",{className:s.Z.arrow}),(0,i.jsx)("img",{className:s.Z.arrowIcon,src:"/images/dropdown-icon.svg",alt:""}),(0,i.jsxs)("select",{name:"cars",id:"cars",ref:m,onChange:e=>"Anyone"===e.target.value?d(!1):d(!0),children:[(0,i.jsx)("option",{value:"Anyone",children:p("public")}),(0,i.jsxs)("option",{value:"Private",children:[p("private")," "]})]})]})]})]}),!h&&(0,i.jsx)(r.Z,{labelHeading:p("turn_off_comment"),customContainer:{padding:"0"},customLabel:{fontWeight:"500"},checkedToggle:"On"!==u,onToggleHandler:v})]}),g]})]})}},89998:(e,n,t)=>{t.r(n),t.d(n,{default:()=>v});var o=t(72791),s=t(1999),a=t(39230),r=(t(68464),t(69721)),i=t(12923),c=t(95048),l=t(49384),d=t(6599),_=t(2072),m=t(39480),u=t(80184);const v=function(e){var n,t,v;let{setPostType:h,onPostTypeChange:g}=e;const{t:p}=(0,a.$G)(),[f,x]=(0,o.useState)(),[j,N]=(0,o.useState)([]),[w,b]=(0,o.useState)([]),[Z,A]=(0,o.useState)(!1),[P,C]=(0,o.useState)(!1),[y,I]=(0,o.useState)(!1),H=(0,o.useRef)(""),k=(0,o.useRef)(""),F=(0,o.useRef)(""),[T]=(0,i.Wj)(),U=(0,c.v9)((e=>e.idChange)),{oneInstituteDashboard:R,oneInstituteDashboardRefetch:S}=(0,m.gq)({id:null===U||void 0===U?void 0:U.id,skip:!(null!==U&&void 0!==U&&U.id)});(0,o.useEffect)((()=>{null!==U&&void 0!==U&&U.id&&S()}),[null===U||void 0===U?void 0:U.id,S]),(0,o.useEffect)((()=>{if(f){const e=[],n=[];for(let t in f)for(let o in f[t])"type"===o&&(f[t][o].includes("image/")?e.push(URL.createObjectURL(f[t])):n.push({name:f[t].name}));N(e),b(n)}}),[f]);const L=document.querySelector("textarea");return null===L||void 0===L||L.addEventListener("keyup",(e=>{L.style.height="auto";let n=e.target.scrollHeight;L.style.height="".concat(n,"px")})),(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)(d.Z,{postTitle:p("create_announcement"),onClose:()=>g("post"),dynamicImage:"1"!==(null===R||void 0===R||null===(n=R.institute)||void 0===n?void 0:n.photoId)?"".concat(r.yI,"/").concat(null===R||void 0===R||null===(t=R.institute)||void 0===t?void 0:t.insProfilePhoto):"/images/ins_default_profile.svg",name:null===R||void 0===R||null===(v=R.institute)||void 0===v?void 0:v.insName,privateImage:Z,setPrivateImage:A,postStatusRef:F,announcement:!0,children:[(0,u.jsx)("div",{className:s.Z.postTitle,children:(0,u.jsx)("input",{className:s.Z.input,type:"text",ref:H,required:!0,placeholder:p("title_announce")})}),(0,u.jsx)("div",{className:s.Z.postDesc,children:(0,u.jsx)("textarea",{className:s.Z.postTextarea,rows:"3",type:"text",required:!0,ref:k,name:"CreateInsPost",placeholder:p("description")})}),(0,u.jsxs)("div",{className:s.Z.listContainer,children:[j.length>0&&(0,u.jsx)("div",{className:s.Z.documentList,children:j.map(((e,n)=>(0,u.jsx)("img",{src:e,alt:""},n)))}),w.length>0&&(0,u.jsx)("div",{className:s.Z.pdfList,children:w.map(((e,n)=>(0,u.jsxs)("div",{className:s.Z.pdfPreview,children:[(0,u.jsx)("img",{src:"/images/pdf-icon.png",alt:""},n),(0,u.jsx)("p",{children:e.name})]})))})]}),y&&(0,u.jsx)("div",{style:{color:"red"},children:p("please_add")}),(0,u.jsxs)("button",{className:s.Z.btn,disabled:P,onClick:()=>{if(""!==H.current.value&&""!==F.current.value){C(!0),I(!1);const e=new FormData;e.append("insAnnTitle",H.current.value),e.append("insAnnDescription",k.current.value),e.append("insAnnVisibility",F.current.value);for(let n in f)f[n].size&&e.append("file",f[n]);T({id:null===U||void 0===U?void 0:U.id,announcement:e}).then((()=>{g("post"),H.current.value="",k.current.value="",F.current.value="",C(!1)})).catch({})}else I(!0)},children:[(0,u.jsx)("p",{children:p("post")}),P&&(0,u.jsx)("div",{children:(0,u.jsx)(l.Z,{})})]}),(0,u.jsx)(_.Z,{onEditIocn:()=>{g("newPost"),h("text")},onPostTypeChange:g,activeIcon:4,addFileToggle:!0,onAddFile:e=>{x(e.target.files)},acceptFormate:"image/gif, image/jpeg, image/png,  application/pdf, application/msword",children:(0,u.jsx)("div",{children:(0,u.jsx)("img",{src:"/images/img-post-icon.svg",onClick:()=>{g("newPost"),h("image")},alt:"file upload icon",title:"Create Image Post"})})})]})})}},49384:(e,n,t)=>{t.d(n,{Z:()=>a});t(72791);var o=t(6307),s=t(80184);const a=()=>(0,s.jsx)(o.iT,{ariaLabel:"loading-indicator",height:20,width:20,color:"white",secondaryColor:"#1c023b"})},90865:(e,n,t)=>{t.d(n,{Z:()=>i});t(72791);var o=t(89891),s=t(39320),a=t(80184);const r={inputProps:{"aria-label":"Switch demo"}},i=e=>{let{customContainer:n,customLabel:t,labelDescription:i,labelHeading:c,defaultLabel:l,checkedToggle:d,onToggleHandler:_,children:m}=e;return(0,a.jsxs)("div",{className:s.Z.form_toggle_container,style:{...n},children:[(0,a.jsxs)("div",{className:s.Z.form_toggle_label,children:[l?(0,a.jsx)(o.Z,{...r,defaultChecked:!0,disabled:!0}):(0,a.jsx)(o.Z,{...r,checked:d,onChange:_}),(0,a.jsx)("span",{style:{...t},children:c})]}),i&&(0,a.jsx)("div",{className:s.Z.form_toggle_description,children:i}),m]})}},98278:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t(88637).Z},88637:(e,n,t)=>{t.d(n,{Z:()=>s});var o=t(72791);function s(e){let{controlled:n,default:t,name:s,state:a="value"}=e;const{current:r}=o.useRef(void 0!==n),[i,c]=o.useState(t);return[r?n:i,o.useCallback((e=>{r||c(e)}),[])]}},68464:()=>{},46807:(e,n,t)=>{t.d(n,{Z:()=>o});const o={avatar_image:"Avatar_avatar_image__orRwR",custom_avatar_container:"Avatar_custom_avatar_container__f4BAI",custom_avatar_one:"Avatar_custom_avatar_one__XYFtg",custom_avatar_content:"Avatar_custom_avatar_content__E1nUO"}},75729:(e,n,t)=>{t.d(n,{Z:()=>o});const o={newPost:"PostHeader_newPost__6jEMR",header:"PostHeader_header__nAWVN",imgContainer:"PostHeader_imgContainer__cnIbK",title:"PostHeader_title__S3tct",public:"PostHeader_public__EImhy",privacyIcon:"PostHeader_privacyIcon__+2tue",select:"PostHeader_select__C-Piu",arrow:"PostHeader_arrow__oZsjY",arrowIcon:"PostHeader_arrowIcon__SawKs",content:"PostHeader_content__FsI2m",hr:"PostHeader_hr__mTrEp",userName:"PostHeader_userName__jfN4e",iconsContainer:"PostHeader_iconsContainer__2M-xr",icons:"PostHeader_icons__MqfoZ",border1:"PostHeader_border1__wMsIw",border4:"PostHeader_border4__UyCNk",border5:"PostHeader_border5__YtPZT",border6:"PostHeader_border6__-EvMl",border3:"PostHeader_border3__dMt41",upload:"PostHeader_upload__D9cRU"}},1999:(e,n,t)=>{t.d(n,{Z:()=>o});const o={newPost:"NewAnnouncement_newPost__P0MSs",header:"NewAnnouncement_header__4FgoM",imgContainer:"NewAnnouncement_imgContainer__D-zZj",title:"NewAnnouncement_title__XZ99r",public:"NewAnnouncement_public__gr79X",privacyIcon:"NewAnnouncement_privacyIcon__pt718",select:"NewAnnouncement_select__viS+M",arrow:"NewAnnouncement_arrow__OBDH8",arrowIcon:"NewAnnouncement_arrowIcon__hAUsH",hr:"NewAnnouncement_hr__+nmR6",userName:"NewAnnouncement_userName__h9vNW",postTitle:"NewAnnouncement_postTitle__d5Uhn",postDesc:"NewAnnouncement_postDesc__rQu4i",postTextarea:"NewAnnouncement_postTextarea__6oAWU",hashTag:"NewAnnouncement_hashTag__GkP-m",btn:"NewAnnouncement_btn__WWbXt",upload:"NewAnnouncement_upload__U-vJ+",Container:"NewAnnouncement_Container__KAel7",selectedImg:"NewAnnouncement_selectedImg__UJO5z",addfiles:"NewAnnouncement_addfiles__u79vd",iconsContainer:"NewAnnouncement_iconsContainer__1h40Z",icons:"NewAnnouncement_icons__F82H4",tille:"NewAnnouncement_tille__8AF0K",description:"NewAnnouncement_description__Y-v3j",afterbtn:"NewAnnouncement_afterbtn__vZuPx",hashtag:"NewAnnouncement_hashtag__0v8Yo",listContainer:"NewAnnouncement_listContainer__1Tder",documentList:"NewAnnouncement_documentList__Da5La",pdfList:"NewAnnouncement_pdfList__lbuZn",pdfPreview:"NewAnnouncement_pdfPreview__yRLt2",border2:"NewAnnouncement_border2__b0wJ6",border1:"NewAnnouncement_border1__vzr9R",border3:"NewAnnouncement_border3__mH2cK",border4:"NewAnnouncement_border4__oF8nk",mainbody:"NewAnnouncement_mainbody__sq6d+"}},39320:(e,n,t)=>{t.d(n,{Z:()=>o});const o={staff_form_container:"UniversalForm_staff_form_container__QRs6I",staff_form_header_container:"UniversalForm_staff_form_header_container__+cQn3",form_header_container:"UniversalForm_form_header_container__GVVNM",form_header_list:"UniversalForm_form_header_list__fHs8S",form_header_code:"UniversalForm_form_header_code__LsmbM",form_toggle_description:"UniversalForm_form_toggle_description__281dv",form_toggle_label:"UniversalForm_form_toggle_label__mbisD",form_header_content:"UniversalForm_form_header_content__Y3p2k",form_toggle_container:"UniversalForm_form_toggle_container__D0bu0",form_checkbox_container:"UniversalForm_form_checkbox_container__bxzuK",staff_form_header_container_actions:"UniversalForm_staff_form_header_container_actions__2Ynt9",staff_header_text:"UniversalForm_staff_header_text__dQvPP"}}}]);
//# sourceMappingURL=78900.41829342.chunk.js.map
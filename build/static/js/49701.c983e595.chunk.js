"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[49701],{34219:(e,n,i)=>{i.d(n,{Z:()=>l});i(72791);var t=i(11575),a=i(80184);const l=e=>{let{customStyleContainer:n,title:i,subtitle:l,costomTextTitleStyle:o,costomTextSubtitleStyle:s}=e;return(0,a.jsxs)("div",{className:t.Z.empty_container,style:n,children:[i&&(0,a.jsx)("h6",{style:o,children:i}),l&&(0,a.jsx)("p",{style:s,children:l})]})}},49701:(e,n,i)=>{i.r(n),i.d(n,{default:()=>A});var t=i(72791);const a="Body_body__h9R6y",l="Item_item__UW4S0",o="Item_head__sq8Kp",s="Item_text__HYo44",d="Item_content__nvYu+",c="Item_bookmark__jKfDC";var r=i(69721),_=i(72426),v=i.n(_),m=i(16871),u=i(43504),h=i(89064),p=i(91007),y=i(39230),g=i(80184);const j=e=>{let{data:n,onClose:i,onRefetch:a}=e;const{t:l}=(0,y.$G)(),[o,s]=(0,t.useState)(!1),[d]=(0,p.Pm)();return(0,g.jsx)(h.Z,{onClose:i,disabled:o,children:(0,g.jsx)("h6",{onClick:()=>{null!==n&&void 0!==n&&n._id&&(s((e=>!e)),d({annId:null===n||void 0===n?void 0:n._id}).then((()=>{a(),s((e=>!e)),i()})).catch({}))},children:l("delete")})})};const f=function(e){var n,i;let{data:a,onRefetch:_}=e;const h=(0,m.TH)(),p=(0,m.s0)(),y=(0,m.UO)(),[f,x]=(0,t.useState)(!1);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)("div",{className:l,onClick:()=>{p("/q/".concat(y.username,"/notifications?a=announcement&n=detail"),{state:{...h.state,annId:a._id}})},children:[(0,g.jsxs)("div",{className:o,children:[(0,g.jsx)(u.rU,{to:"/q/".concat(null===a||void 0===a||null===(n=a.institute)||void 0===n?void 0:n.name,"/profile"),onClick:e=>{e.stopPropagation()},children:(0,g.jsx)("img",{alt:"Announcement",src:null!==a&&void 0!==a&&a.institute.insProfilePhoto?"".concat(r.yI,"/").concat(null===a||void 0===a?void 0:a.institute.insProfilePhoto):"/images/ins_default_profile.svg"})}),(0,g.jsxs)("div",{className:s,children:[(0,g.jsx)("h6",{children:a&&(null===a||void 0===a?void 0:a.institute.name)}),(0,g.jsxs)("p",{children:[v()(null===a||void 0===a?void 0:a.createdAt).format("MMM Do YY")," |"," ",v()(null===a||void 0===a?void 0:a.createdAt).format("LT")]})]})]}),(0,g.jsx)("div",{className:d,children:(0,g.jsx)("p",{children:(0,g.jsx)("span",{children:null===a||void 0===a||null===(i=a.insAnnTitle)||void 0===i?void 0:i.substr(0,130)})})}),(0,g.jsx)("img",{src:"/images/menu-dots-icon.svg",alt:"icon",className:c,onClick:e=>{e.stopPropagation(),x((e=>!e))}})]}),f&&(0,g.jsx)(j,{data:a,onClose:()=>x(!1),onRefetch:_})]})};var x=i(23441),b=i(95048),N=i(11105),k=i(34219);const C=function(){var e;const[n,i]=(0,t.useState)([]),[l,o]=(0,x.YD)(),[s,d]=(0,t.useState)(!0),[c,r]=(0,t.useState)(1),_=(0,b.v9)((e=>e.idChange)),[v,m]=(0,t.useState)(!0),{data:u,refetch:h}=(0,p.KU)({id:null===_||void 0===_?void 0:_.id,page:c,limit:10},{skip:!(null!==_&&void 0!==_&&_.id)});(0,t.useEffect)((()=>{null!==_&&void 0!==_&&_.id&&(m(!0),h())}),[null===_||void 0===_?void 0:_.id,c,h]),(0,t.useEffect)((()=>{o&&s&&r((e=>e+1))}),[o,s]),(0,t.useEffect)((()=>{var e;if(null!==u&&void 0!==u&&u.announcement){if(1===c)i(null===u||void 0===u?void 0:u.announcement);else{const e=[...n,...null===u||void 0===u?void 0:u.announcement],t=[...new Set(e.map(JSON.stringify))].map(JSON.parse);i(t)}m(!1)}else 0===(null===u||void 0===u||null===(e=u.announcement)||void 0===e?void 0:e.length)&&m(!1);10===(null===u||void 0===u?void 0:u.announcement.length)?d(!0):d(!1)}),[null===u||void 0===u?void 0:u.announcement]);const y=()=>{r((e=>1)),m(!0),h()};return(0,g.jsxs)("div",{className:a,children:[n.map(((e,i)=>(null===n||void 0===n?void 0:n.length)===i+1?(0,g.jsx)("div",{ref:l,children:(0,g.jsx)(f,{data:e||"",time:null===e||void 0===e?void 0:e.createdAt,date:null===e||void 0===e?void 0:e.createdAt,text:null===e||void 0===e?void 0:e.insAnnDescription,onRefetch:y})},null===e||void 0===e?void 0:e._id):(0,g.jsx)(f,{data:e||"",time:null===e||void 0===e?void 0:e.createdAt,date:null===e||void 0===e?void 0:e.createdAt,text:null===e||void 0===e?void 0:e.insAnnDescription,onRefetch:y},null===e||void 0===e?void 0:e._id))),v&&(0,g.jsx)(N.Z,{}),!v&&!(null!==u&&void 0!==u&&null!==(e=u.announcement)&&void 0!==e&&e.length)&&(0,g.jsx)(k.Z,{customStyleContainer:{marginTop:"5rem",height:"inherit"},title:"No announcement created yet."})]})},S={imgcontainer:"Details_imgcontainer__YHc4d",eachposthead:"Details_eachposthead__z5d7p",eachpostUserName:"Details_eachpostUserName__qwO1B",eachpostUserTime:"Details_eachpostUserTime__1QeRg",public:"Details_public__639mJ",details:"Details_details__lOfOd",tille:"Details_tille__+k+M-",description:"Details_description__ydB9J",hashTag:"Details_hashTag__gz9yt",hashtag:"Details_hashtag__7ZdXz",loader:"Details_loader__bFFXC",anndoc:"Details_anndoc__CIk3a",documentContainer:"Details_documentContainer__86Tvx"};var U=i(11968),I=i.n(U),D=i(10307);const q=function(e){var n,i,a,l,o,s,d,c;let{annId:_}=e;const u=(0,m.s0)(),{data:h,isFetching:y,refetch:j}=(0,p.Lr)(_,{skip:!_});return(0,t.useEffect)((()=>{_&&j()}),[_,j]),(0,g.jsx)("div",{className:S.details,children:y?(0,g.jsx)(g.Fragment,{children:(0,g.jsx)("div",{className:S.loader,children:(0,g.jsx)("img",{src:"/images/loader/loader-bg-white.gif",alt:""})})}):(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)("div",{className:S.eachposthead,style:{width:"100%",justifyContent:"space-between",alignItems:"flex-start"},children:[(0,g.jsxs)("div",{className:S.eachposthead,style:{alignItems:"flex-start"},children:[(0,g.jsx)("div",{className:S.imgcontainer,children:(0,g.jsx)("img",{alt:"not found",src:"1"!==(null===h||void 0===h||null===(n=h.announcement)||void 0===n?void 0:n.institute.photoId)?"".concat(r.yI,"/").concat(null===h||void 0===h||null===(i=h.announcement)||void 0===i||null===(a=i.institute)||void 0===a?void 0:a.insProfilePhoto):"/images/ins_default_profile.svg"})}),(0,g.jsxs)("div",{className:S.eachpostUserName,style:{marginTop:"0"},children:[(0,g.jsx)("h6",{children:h&&h.announcement&&(null===(l=h.announcement.institute)||void 0===l?void 0:l.insName)}),(0,g.jsxs)("div",{className:S.eachpostUserTime,style:{display:"flex",gap:"0.5vw",alignItems:"center"},children:[(0,g.jsx)("p",{children:h&&v()(null===(o=h.announcement)||void 0===o?void 0:o.createdAt).format("DD-M-YYYY")}),"Private"===(null===h||void 0===h||null===(s=h.announcement)||void 0===s?void 0:s.insAnnVisibility)?(0,g.jsx)("img",{className:S.public,src:"/images/post-private-icon.svg",alt:"Private"}):(0,g.jsx)("img",{className:S.public,src:"/images/privacy-icon.svg",alt:"Public"})]})]})]}),(0,g.jsx)("img",{src:"/images/close-post-icon.svg",onClick:()=>{u(-1)},alt:"close",style:{cursor:"pointer"}})]}),(0,g.jsxs)("div",{className:S.Container,children:[(0,g.jsx)("p",{className:S.tille,children:h&&(null===(d=h.announcement)||void 0===d?void 0:d.insAnnTitle)}),(0,g.jsx)("hr",{}),(0,g.jsxs)("p",{className:S.description,style:{whiteSpace:"break-spaces"},children:[h&&(null===(c=h.announcement)||void 0===c?void 0:c.insAnnDescription)," "]}),(0,g.jsx)("p",{className:S.description}),(0,g.jsx)("div",{className:S.documentContainer,children:(0,g.jsx)(I(),{className:"Example",autoPlay:!1,indicators:!0,navButtonsAlwaysVisible:!1,navButtonsAlwaysInvisible:!1,next:(e,n)=>{},prev:(e,n)=>{},onChange:(e,n)=>{},children:null===h||void 0===h?void 0:h.announcement.announcementDocument.map((e=>"image/jpeg"===e.documentType||"image/png"===e.documentType||(0,D.Y)(null===e||void 0===e?void 0:e.documentKey)?(0,g.jsx)("div",{className:S.anndoc,children:(0,g.jsx)("img",{className:S.selectedImg,src:"".concat(r.yI,"/").concat(null===e||void 0===e?void 0:e.documentKey),alt:null===e||void 0===e?void 0:e.documentName,style:{width:"100%",height:"auto"}})}):(0,g.jsx)("div",{className:S.anndoc,children:(0,g.jsx)("a",{title:"Download File",href:"https://d3dqpu54js2vfl.cloudfront.net/".concat(null===e||void 0===e?void 0:e.documentKey),target:"_blank",rel:"noopener noreferrer",children:(0,g.jsx)("img",{className:S.selectedImg,src:"/images/pdf-icon.png",alt:null===e||void 0===e?void 0:e.documentName,style:{width:"100%",height:"auto"}})})})))})})]})]})})};const A=function(){var e;const[n]=(0,u.lr)(),i=(0,m.TH)();return(0,g.jsx)(g.Fragment,{children:n.get("n")?(0,g.jsx)(q,{annId:null===(e=i.state)||void 0===e?void 0:e.annId}):(0,g.jsx)(C,{})})}},55336:(e,n,i)=>{i.d(n,{Z:()=>l});var t=i(63244),a=i(80184);const l=()=>(0,a.jsx)("div",{className:t.Z.qviple_loader_backdrop,children:(0,a.jsx)("div",{className:t.Z.qviple_loader_container,children:(0,a.jsx)("div",{className:t.Z.qviple_loader_rotation})})})},90904:(e,n,i)=>{i.d(n,{Z:()=>l});const t="BorderBottom_split_content__RVPoh";var a=i(80184);const l=e=>{let{customStyleBorder:n}=e;return(0,a.jsx)("hr",{className:t,style:n})}},48293:(e,n,i)=>{i.d(n,{Z:()=>c});var t=i(72791),a=i(54164),l=i(15783),o=i(80184);const s=e=>{let{onBackdropClose:n,customBackdropStyle:i}=e;const s=(0,t.useCallback)((()=>{if(!n)return null;n()}),[n]);return a.createPortal((0,o.jsx)("div",{className:l.Z.modal_backdrop,onClick:s,style:i}),document.getElementById("backdrop"))},d=e=>{let{modalState:n,isHide:i,customOverlayStyle:t,children:s}=e;return a.createPortal((0,o.jsx)("div",{className:l.Z.modal_overlay,style:{...t},children:s}),document.getElementById("overlay"))},c=e=>{let{onClose:n,modalState:i,customBackdropStyle:t,customOverlayStyle:a,children:l}=e;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s,{onBackdropClose:n,customBackdropStyle:t}),(0,o.jsx)(d,{customOverlayStyle:a,children:l})]})}},89064:(e,n,i)=>{i.d(n,{Z:()=>d});var t=i(55336),a=i(48293);const l="Modal_modal_menu_card__d0zzt";var o=i(90904),s=i(80184);const d=e=>{let{onClose:n,disabled:i,heading:d,customStyle:c,children:r}=e;return(0,s.jsx)(a.Z,{onClose:()=>{if(i)return null;n()},children:(0,s.jsxs)("div",{className:l,style:c,children:[d?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h5",{children:d}),(0,s.jsx)(o.Z,{})]}):null,r,i&&(0,s.jsx)(t.Z,{})]})})}},10307:(e,n,i)=>{i.d(n,{Y:()=>a});let t=[".jpg",".jpeg",".jpe",".pjpeg",".pjp",".apng",".jif",".jfif",".jfi",".png",".gif",".webp",".tiff",".tif",".psd",".heif",".heic",".svg",".svgz",".ai",".eps",".avif"];const a=e=>{let n=!1;for(let i of t)if(null!==e&&void 0!==e&&e.includes(i)){n=!0;break}return n}},63244:(e,n,i)=>{i.d(n,{Z:()=>t});const t={qviple_loader_backdrop:"Loader_qviple_loader_backdrop__ScdYl",qviple_loader_container:"Loader_qviple_loader_container__SXQ9Y",qviple_loader_rotation:"Loader_qviple_loader_rotation__ltsgT",qviple_loader_rotation_animation:"Loader_qviple_loader_rotation_animation__gy3+j",q_loading:"Loader_q_loading__bwe2c",circle_loading:"Loader_circle_loading__m+ptB",rotate_animation:"Loader_rotate_animation__IV2sY"}},15783:(e,n,i)=>{i.d(n,{Z:()=>t});const t={notify_backdrop:"Utils_notify_backdrop__saL0O",notify_overlay:"Utils_notify_overlay__GtPc5",notify_hide_overlay:"Utils_notify_hide_overlay__MYvkC",notify_overlay_animation:"Utils_notify_overlay_animation__pcASm",notify_hide_overlay_animation:"Utils_notify_hide_overlay_animation__UKRcG",notify_container:"Utils_notify_container__O8DBA",notify_message:"Utils_notify_message__PHwKo",notify_close:"Utils_notify_close__IwjyA",modal_backdrop:"Utils_modal_backdrop__WBquw",modal_overlay:"Utils_modal_overlay__Yy-AV",modal_hide_overlay:"Utils_modal_hide_overlay__elt3A",navbar_modal_hide_overlay:"Utils_navbar_modal_hide_overlay__yqj5q",navbar_modal_overlay:"Utils_navbar_modal_overlay__6ub8g",modal_hide_overlay_animation:"Utils_modal_hide_overlay_animation__d3TNp",navbar_modal_overlay_animation:"Utils_navbar_modal_overlay_animation__Ypk9u",navbar_modal_hide_overlay_animation:"Utils_navbar_modal_hide_overlay_animation__QLEse",empty_container:"Utils_empty_container__-VyCI",modal_overlay_animation:"Utils_modal_overlay_animation__zkjsk"}}}]);
//# sourceMappingURL=49701.c983e595.chunk.js.map
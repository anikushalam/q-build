"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[77730],{91022:(e,n,o)=>{o.d(n,{Z:()=>a});var t=o(72791),_=o(39230),r=o(38733),i=o(80184);const a=e=>{let{selectLabel:n,value:o,onClick:a,selectedValue:l,options:s,errorShow:c,customStyleContainer:d,customLabelStyle:m,customListStyle:u,openAs:h,viewAs:f}=e;const{t:p}=(0,_.$G)(),[v,g]=(0,t.useState)(!1),j=()=>{"REFUND"===h||"BACKLOG"===h||"FINANCE_MANAGER"===f||g((e=>!e))};return(0,i.jsxs)("div",{className:r.Z.join_form_container,style:{...d},children:[(0,i.jsxs)("p",{className:r.Z.join_form_select_paragraph,style:{...m},children:[n," ",c&&(0,i.jsxs)("span",{style:{color:"red",marginLeft:"15px"},children:["* ",p("form_require_label")]})]}),(0,i.jsxs)("section",{className:r.Z.join_form_select_custom,onClick:j,children:[o?(0,i.jsx)("p",{className:r.Z.join_form_select_custom_paragraph,children:null!==o&&void 0!==o?o:""}):(0,i.jsx)("p",{className:r.Z.join_form_select_custom_paragraph,children:l}),(0,i.jsx)("img",{className:r.Z.join_form_select_custom_icon,src:"/images/down-icon.svg",alt:"categor icon"})]}),v&&(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("section",{className:r.Z.join_form_select_custom_list,style:u?{...u}:(null===s||void 0===s?void 0:s.length)>2?{overflowY:"scroll"}:{backgroundColor:"#ffffff"},children:[(0,i.jsx)("p",{className:r.Z.join_form_select_custom_paragraph_option,onClick:j,children:l}),null===s||void 0===s?void 0:s.map(((e,n)=>(0,i.jsx)("p",{onClick:()=>(a(e),void j()),className:r.Z.join_form_select_custom_paragraph_option,children:e},n)))]})})]})}},97655:(e,n,o)=>{o.d(n,{Z:()=>i});o(72791);var t=o(39230),_=o(38733),r=o(80184);const i=e=>{let{labelText:n,name:o,type:i,value:a,onChange:l,placeholder:s,errorShow:c,customStyleContainer:d,customStyleLabel:m,customStyleInput:u,inputLength:h,reAccount:f,disabled:p}=e;const{t:v}=(0,t.$G)();return(0,r.jsxs)("div",{className:_.Z.join_form_container,style:{...d},children:[(0,r.jsxs)("label",{className:_.Z.join_form_label,htmlFor:o,style:{...m},children:[n," ",!f&&c&&(0,r.jsxs)("span",{style:{color:"red",marginLeft:"15px"},children:["* ",v("form_require_label")]}),f&&(0,r.jsx)("span",{style:{color:"red",marginLeft:"15px"},children:f})]}),"tel"===i?(0,r.jsx)("input",{className:_.Z.join_form_input,type:i,value:a,onChange:l,name:o,placeholder:s,maxLength:null!==h&&void 0!==h?h:100,disabled:p,style:u}):(0,r.jsx)("input",{className:_.Z.join_form_input,type:i,value:a,onChange:l,name:o,placeholder:s,disabled:p,style:u})]})}},49384:(e,n,o)=>{o.d(n,{Z:()=>r});o(72791);var t=o(6307),_=o(80184);const r=()=>(0,_.jsx)(t.iT,{ariaLabel:"loading-indicator",height:20,width:20,color:"white",secondaryColor:"#1c023b"})},36665:(e,n,o)=>{o.d(n,{Z:()=>i});o(72791);var t=o(12072),_=o(1874),r=o(80184);const i=e=>{let{onClose:n,children:o}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(_.Z,{onClose:n}),(0,r.jsx)(t.Z,{children:o})]})}},79541:(e,n,o)=>{o.d(n,{Z:()=>v});var t=o(72791),_=o(39230),r=o(23441),i=o(16871),a=o(87338),l=o(11105),s=o(98094),c=o(10406),d=o(80184);const m=e=>{var n,o;let{announcement:t}=e;return(0,d.jsxs)("div",{className:c.Z.announcement_card,children:[(0,d.jsx)("h6",{children:null!==(n=null===t||void 0===t?void 0:t.insAnnTitle)&&void 0!==n?n:""}),(0,d.jsx)("p",{children:null===t||void 0===t||null===(o=t.insAnnDescription)||void 0===o?void 0:o.substring(0,200)})]})};var u=o(1999),h=o(49384),f=o(90865);const p=e=>{let{hid:n,onRefetch:o,onClose:r}=e;const{t:i}=(0,_.$G)(),[l,c]=(0,t.useState)(),[m,p]=(0,t.useState)([]),[v,g]=(0,t.useState)([]),[j,x]=(0,t.useState)(!1),[b,N]=(0,t.useState)(!1),F=(0,t.useRef)(""),y=(0,t.useRef)(""),[w,Z]=(0,t.useState)(""),[J]=(0,a.zA)();(0,t.useEffect)((()=>{if(l){const e=[],n=[];for(let o in l)for(let t in l[o])"type"===t&&(l[o][t].includes("image/")?e.push(URL.createObjectURL(l[o])):n.push({name:l[o].name}));p(e),g(n)}}),[l]);const A=document.querySelector("textarea");null===A||void 0===A||A.addEventListener("keyup",(e=>{A.style.height="auto";let n=e.target.scrollHeight;A.style.height="".concat(n,"px")}));return(0,d.jsxs)("div",{children:[(0,d.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,d.jsx)("h6",{children:i("new_announcement")}),(0,d.jsx)("img",{src:"/images/close-post-icon.svg",onClick:r,alt:"close icon",style:{cursor:"pointer"}})]}),(0,d.jsx)(s.Z,{customStyle:{marginTop:"0.5rem",marginBottom:"0.6rem",width:"100%"}}),(0,d.jsx)(f.Z,{labelHeading:i("turn_announcement_private_only"),customContainer:{padding:"0"},customLabel:{fontWeight:"500"},checkedToggle:j,onToggleHandler:e=>{x(e.target.checked)}}),(0,d.jsxs)("div",{className:u.Z.postTitle,children:[(0,d.jsx)("input",{className:u.Z.input,type:"text",ref:F,required:!0,placeholder:i("title_announce")}),w.title_val&&(0,d.jsx)("div",{style:{color:"red"},children:"* announcement title required"})]}),(0,d.jsx)("div",{className:u.Z.postDesc,children:(0,d.jsx)("textarea",{className:u.Z.postTextarea,rows:"3",type:"text",required:!0,ref:y,name:"CreateInsPost",placeholder:i("description"),style:{border:"0.5px solid rgba(18, 18, 18, 0.3)",borderRadius:"6px"}})}),(0,d.jsxs)("div",{className:u.Z.listContainer,children:[m.length>0&&(0,d.jsx)("div",{className:u.Z.documentList,children:m.map(((e,n)=>(0,d.jsx)("img",{src:e,alt:""},n)))}),v.length>0&&(0,d.jsx)("div",{className:u.Z.pdfList,children:v.map(((e,n)=>(0,d.jsxs)("div",{className:u.Z.pdfPreview,children:[(0,d.jsx)("img",{src:"/images/pdf-icon.png",alt:""},n),(0,d.jsx)("p",{children:e.name})]})))})]}),(0,d.jsx)("label",{htmlFor:"document",style:{cursor:"pointer"},children:(0,d.jsx)("p",{className:u.Z.addfiles,children:i("add_files")})}),(0,d.jsx)("input",{className:u.Z.upload,multiple:!0,id:"document",name:"file",onChange:e=>{c(e.target.files)},type:"file",accept:"image/gif, image/jpeg, image/png,  application/pdf, application/msword"}),(0,d.jsxs)("button",{className:u.Z.btn,disabled:b,onClick:()=>{if(F.current.value){N(!0);const e=new FormData;e.append("insAnnTitle",F.current.value),e.append("insAnnDescription",y.current.value),e.append("insAnnVisibility",j?"Private":"Anyone");let t=0;for(let n in l)l[n].size&&(e.append("file".concat(t+1),l[n]),++t);e.append("announceCount",t),J({hid:n,announcement:e}).then((()=>{o(),r(),F.current.value="",y.current.value="",N(!1)})).catch({})}else Z({title_val:"*required"})},style:{marginTop:"0"},children:[(0,d.jsx)("p",{children:i("post")}),b&&(0,d.jsx)("div",{children:(0,d.jsx)(h.Z,{})})]})]})},v=e=>{var n,o,u,h;let{hid:f,carryParentState:v}=e;const{t:g}=(0,_.$G)(),j=(0,i.TH)(),[x,b]=(0,t.useState)(!1),[N,F]=(0,r.YD)(),[y,w]=(0,t.useState)(1),[Z,J]=(0,t.useState)(!0),[A,S]=(0,t.useState)(!0),[k,C]=(0,t.useState)([]),[I,L]=(0,t.useState)(!1),{getAnnouncementListByHostel:T,getAnnouncementListByHostelRefetch:H}=(0,a.Xc)({data:{hid:null!==f&&void 0!==f?f:null===(n=j.state)||void 0===n?void 0:n.hid,page:y,limit:10},skip:f?!f:!(null!==(o=j.state)&&void 0!==o&&o.hid)});(0,t.useEffect)((()=>{var e;(f||null!==(e=j.state)&&void 0!==e&&e.hid)&&(S(!0),H())}),[f,null===(u=j.state)||void 0===u?void 0:u.hid,y,H]),(0,t.useEffect)((()=>{F&&Z&&w((e=>e+1))}),[F,Z]),(0,t.useEffect)((()=>{var e,n;I?(C(null===T||void 0===T?void 0:T.announcement),S(!1),L(!1)):null!==T&&void 0!==T&&T.announcement?(C((e=>{var n,o;return null===(n=[...new Set(null===(o=[...e,...null===T||void 0===T?void 0:T.announcement])||void 0===o?void 0:o.map(JSON.stringify))])||void 0===n?void 0:n.map(JSON.parse)})),S(!1)):0===(null===T||void 0===T||null===(n=T.announcement)||void 0===n?void 0:n.length)&&S(!1);10===(null===T||void 0===T||null===(e=T.announcement)||void 0===e?void 0:e.length)?J(!0):J(!1)}),[null===T||void 0===T?void 0:T.announcement]);const U=()=>{b((e=>!e))};return(0,d.jsxs)(d.Fragment,{children:[!x&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("div",{className:c.Z.with_search,children:(0,d.jsx)("h6",{children:g("hostel_announcement")})}),(0,d.jsx)(s.Z,{customStyle:{marginTop:"0.5rem",marginBottom:"0.6rem",width:"100%"}}),"HOSTEL_UNIT_TAB"===(null===(h=j.state)||void 0===h?void 0:h.viewNotice)?"":(0,d.jsx)("div",{style:{display:"flex",justifyContent:"flex-end"},children:(0,d.jsx)("p",{className:c.Z.add_new_category,onClick:U,children:g("create_new_announcement")})}),null===k||void 0===k?void 0:k.map(((e,n)=>(null===k||void 0===k?void 0:k.length)===n+1?(0,d.jsx)("div",{ref:N,children:(0,d.jsx)(m,{announcement:e})},null===e||void 0===e?void 0:e._id):(0,d.jsx)(m,{announcement:e},null===e||void 0===e?void 0:e._id))),A&&(0,d.jsx)(l.Z,{})]}),x&&(0,d.jsx)(p,{onClose:U,hid:f,onRefetch:()=>{w(1),L(!0),S(!0),H()}})]})}},38592:(e,n,o)=>{o.r(n),o.d(n,{default:()=>d});o(72791);var t=o(16871),_=o(11464),r=o(26515),i=o(79541),a=o(10406),l=o(83555),s=o(80184);const c=e=>{var n,o,_,c;let{huid:d,carryParentState:m}=e;const u=(0,t.TH)();return(0,s.jsxs)(s.Fragment,{children:[(!(null!==u&&void 0!==u&&u.search)||"hostelites"===(null===u||void 0===u||null===(n=u.search)||void 0===n?void 0:n.substring(3))||"menu&n=room"===(null===u||void 0===u||null===(o=u.search)||void 0===o?void 0:o.substring(3)))&&(0,s.jsx)(r.Z,{huid:d,carryParentState:m,viewAs:"DESIGNATION"}),"unit&n=room"===(null===u||void 0===u||null===(_=u.search)||void 0===_?void 0:_.substring(3))&&(0,s.jsx)(l.Z,{carryParentState:m}),"notice"===(null===u||void 0===u||null===(c=u.search)||void 0===c?void 0:c.substring(3,10))&&(0,s.jsx)("div",{className:a.Z.hostel_container,children:(0,s.jsx)(i.Z,{carryParentState:m})})]})},d=()=>{var e,n,o,r,i,a;const l=(0,t.TH)();return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(_.Z,{index:"32",sid:null!==(e=null===l||void 0===l||null===(n=l.state)||void 0===n?void 0:n.sid)&&void 0!==e?e:"",onClickValue:null!==(o=null===l||void 0===l||null===(r=l.state)||void 0===r?void 0:r.onClickValue)&&void 0!==o?o:"",children:(0,s.jsx)("div",{style:{marginTop:"1rem"},children:(0,s.jsx)(c,{huid:null!==(i=null===l||void 0===l||null===(a=l.state)||void 0===a?void 0:a.huid)&&void 0!==i?i:"",carryParentState:null===l||void 0===l?void 0:l.state})})})})}},12072:(e,n,o)=>{o.d(n,{Z:()=>i});o(72791);var t=o(54164);const _="Overlay_overlay_card__PAr1h";var r=o(80184);const i=e=>{let{children:n,customStyle:o}=e;return(0,r.jsx)(r.Fragment,{children:t.createPortal((0,r.jsx)("div",{className:_,style:{...o},children:n}),document.getElementById("overlay"))})}},84489:(e,n,o)=>{o.d(n,{Z:()=>r});o(72791);var t=o(51857),_=o(80184);const r=e=>{let{onClose:n,customStyleBackdrop:o}=e;return(0,_.jsx)("div",{className:t.Z.search_backdrop,style:{...o},onClick:n})}},1874:(e,n,o)=>{o.d(n,{Z:()=>i});o(72791);var t=o(54164),_=o(84489),r=o(80184);const i=e=>{let{onClose:n,customStyleBackdrop:o}=e;return(0,r.jsx)(r.Fragment,{children:t.createPortal((0,r.jsx)(_.Z,{onClose:n,customStyleBackdrop:o}),document.getElementById("backdrop"))})}},90865:(e,n,o)=>{o.d(n,{Z:()=>a});o(72791);var t=o(89891),_=o(39320),r=o(80184);const i={inputProps:{"aria-label":"Switch demo"}},a=e=>{let{customContainer:n,customLabel:o,labelDescription:a,labelHeading:l,defaultLabel:s,checkedToggle:c,onToggleHandler:d,children:m}=e;return(0,r.jsxs)("div",{className:_.Z.form_toggle_container,style:{...n},children:[(0,r.jsxs)("div",{className:_.Z.form_toggle_label,children:[s?(0,r.jsx)(t.Z,{...i,defaultChecked:!0,disabled:!0}):(0,r.jsx)(t.Z,{...i,checked:c,onChange:d}),(0,r.jsx)("span",{style:{...o},children:l})]}),a&&(0,r.jsx)("div",{className:_.Z.form_toggle_description,children:a}),m]})}},1999:(e,n,o)=>{o.d(n,{Z:()=>t});const t={newPost:"NewAnnouncement_newPost__P0MSs",header:"NewAnnouncement_header__4FgoM",imgContainer:"NewAnnouncement_imgContainer__D-zZj",title:"NewAnnouncement_title__XZ99r",public:"NewAnnouncement_public__gr79X",privacyIcon:"NewAnnouncement_privacyIcon__pt718",select:"NewAnnouncement_select__viS+M",arrow:"NewAnnouncement_arrow__OBDH8",arrowIcon:"NewAnnouncement_arrowIcon__hAUsH",hr:"NewAnnouncement_hr__+nmR6",userName:"NewAnnouncement_userName__h9vNW",postTitle:"NewAnnouncement_postTitle__d5Uhn",postDesc:"NewAnnouncement_postDesc__rQu4i",postTextarea:"NewAnnouncement_postTextarea__6oAWU",hashTag:"NewAnnouncement_hashTag__GkP-m",btn:"NewAnnouncement_btn__WWbXt",upload:"NewAnnouncement_upload__U-vJ+",Container:"NewAnnouncement_Container__KAel7",selectedImg:"NewAnnouncement_selectedImg__UJO5z",addfiles:"NewAnnouncement_addfiles__u79vd",iconsContainer:"NewAnnouncement_iconsContainer__1h40Z",icons:"NewAnnouncement_icons__F82H4",tille:"NewAnnouncement_tille__8AF0K",description:"NewAnnouncement_description__Y-v3j",afterbtn:"NewAnnouncement_afterbtn__vZuPx",hashtag:"NewAnnouncement_hashtag__0v8Yo",listContainer:"NewAnnouncement_listContainer__1Tder",documentList:"NewAnnouncement_documentList__Da5La",pdfList:"NewAnnouncement_pdfList__lbuZn",pdfPreview:"NewAnnouncement_pdfPreview__yRLt2",border2:"NewAnnouncement_border2__b0wJ6",border1:"NewAnnouncement_border1__vzr9R",border3:"NewAnnouncement_border3__mH2cK",border4:"NewAnnouncement_border4__oF8nk",mainbody:"NewAnnouncement_mainbody__sq6d+"}},38733:(e,n,o)=>{o.d(n,{Z:()=>t});const t={navbar:"JoinForm_navbar__npU1d",join_form_container:"JoinForm_join_form_container__6Q37N",join_form_container_view:"JoinForm_join_form_container_view__WTHSM",join_form_label_view:"JoinForm_join_form_label_view__S0UQR",join_form_label:"JoinForm_join_form_label__+f6Zt",join_form_input_view:"JoinForm_join_form_input_view__IQBh3",join_form_input:"JoinForm_join_form_input__9NwMx",join_form_select:"JoinForm_join_form_select__ZKKC0",join_form_text_area:"JoinForm_join_form_text_area__LO4QP",join_form_select_paragraph:"JoinForm_join_form_select_paragraph__I7OdI",goback_container:"JoinForm_goback_container__QOvvd",goback_container_text:"JoinForm_goback_container_text__ypd18",goback_container_text_go:"JoinForm_goback_container_text_go__1LHHZ",student_from_container:"JoinForm_student_from_container__nqW9v",student_from_fill:"JoinForm_student_from_fill__wK3o3",student_from_fill_edit:"JoinForm_student_from_fill_edit__KnMCY",form_container:"JoinForm_form_container__zv+j1",form_other_field:"JoinForm_form_other_field__KTI7H",form_container_profile:"JoinForm_form_container_profile__mhlA2",form_container_profile_image:"JoinForm_form_container_profile_image__3MM9C",form_container_profile_photo:"JoinForm_form_container_profile_photo__rEoTw",form_container_profile_image_label:"JoinForm_form_container_profile_image_label__b3SWJ",form_edit_icon:"JoinForm_form_edit_icon__-KIJI",form_profile_info:"JoinForm_form_profile_info__lWv7z",join_form_file_container:"JoinForm_join_form_file_container__48w3c",join_form_file_choose:"JoinForm_join_form_file_choose__wRgT3",join_form_file_choosen:"JoinForm_join_form_file_choosen__H3gUQ",join_form_yes:"JoinForm_join_form_yes__uvOsh",join_form_no:"JoinForm_join_form_no__DOdmt",join_form_active_background:"JoinForm_join_form_active_background__g8OsI",student_detail_name:"JoinForm_student_detail_name__jhziI",student_detail_gender:"JoinForm_student_detail_gender__WLAnI",optional_subject:"JoinForm_optional_subject__8yMbd",arrowIcon:"JoinForm_arrowIcon__zjTO0",join_form_select_custom:"JoinForm_join_form_select_custom__l0lyn",join_form_select_custom_paragraph:"JoinForm_join_form_select_custom_paragraph__h6oDm",join_form_select_custom_icon:"JoinForm_join_form_select_custom_icon__K+ezK",join_form_select_custom_list:"JoinForm_join_form_select_custom_list__Zq-RM",join_form_select_custom_paragraph_option:"JoinForm_join_form_select_custom_paragraph_option__dfz95",add_batch_wise:"JoinForm_add_batch_wise__12tq5",only_admssion_fees:"JoinForm_only_admssion_fees__jjmRd",form_add_fee_btn:"JoinForm_form_add_fee_btn__9gdSc",is_fee_remain:"JoinForm_is_fee_remain__7hNMX",search_container:"JoinForm_search_container__N1K46",search_container_text:"JoinForm_search_container_text__rMKzy",searchIcon:"JoinForm_searchIcon__07z4t",skip_i_do:"JoinForm_skip_i_do__Sri7h",login_details_modal:"JoinForm_login_details_modal__jhsQQ",login_details_modal_title:"JoinForm_login_details_modal_title__JDkZp",login_details_btn:"JoinForm_login_details_btn__2kYn2",profilephotocontainer:"JoinForm_profilephotocontainer__-5H5K",profilephotoins:"JoinForm_profilephotoins__-LFGo",certidyheading:"JoinForm_certidyheading__NJO+i",buttoncontainer:"JoinForm_buttoncontainer__S+iaM",buttonInner:"JoinForm_buttonInner__jv-6K",button_main:"JoinForm_button_main__7JKyK",duplicateCopy:"JoinForm_duplicateCopy__AfcNi",letter_head_container:"JoinForm_letter_head_container__AMFGH"}},51857:(e,n,o)=>{o.d(n,{Z:()=>t});const t={search_backdrop:"SearchHeader_search_backdrop__MsKpG",search_card:"SearchHeader_search_card__-jNcg",search_container:"SearchHeader_search_container__NS7Om",search_container_text:"SearchHeader_search_container_text__bkolR",searchIcon:"SearchHeader_searchIcon__J7cNp",search_container_back:"SearchHeader_search_container_back__ZoXdV"}},39320:(e,n,o)=>{o.d(n,{Z:()=>t});const t={staff_form_container:"UniversalForm_staff_form_container__QRs6I",staff_form_header_container:"UniversalForm_staff_form_header_container__+cQn3",form_header_container:"UniversalForm_form_header_container__GVVNM",form_header_list:"UniversalForm_form_header_list__fHs8S",form_header_code:"UniversalForm_form_header_code__LsmbM",form_toggle_description:"UniversalForm_form_toggle_description__281dv",form_toggle_label:"UniversalForm_form_toggle_label__mbisD",form_header_content:"UniversalForm_form_header_content__Y3p2k",form_toggle_container:"UniversalForm_form_toggle_container__D0bu0",form_checkbox_container:"UniversalForm_form_checkbox_container__bxzuK",staff_form_header_container_actions:"UniversalForm_staff_form_header_container_actions__2Ynt9",staff_header_text:"UniversalForm_staff_header_text__dQvPP"}}}]);
//# sourceMappingURL=77730.2d6ea986.chunk.js.map
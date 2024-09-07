"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[17536],{70966:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(97893),s=a(54155),o=a(4899),i=a(77386),l=a(64554),r=a(4567),c=a(59256),_=a(5849),d=a(72791),f=a(97005),h=a(17107),u=(a(91711),a(80184));const p=e=>{let{setPhotoURL:t,photoURL:a,setFile:p,setOpenCrop:v,setUpload:x,setProfilePhoto:g,first:S,second:j}=e;const[b,Z]=(0,d.useState)({x:0,y:0}),[P,C]=(0,d.useState)(1),[w,y]=(0,d.useState)(0),[k,L]=(0,d.useState)(null);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(o.Z,{dividers:!0,sx:{background:"#333",position:"relative",height:400,minWidth:580},children:(0,u.jsx)(f.Z,{image:a,crop:b,zoom:P,rotation:w,aspect:S/j,onZoomChange:C,onRotationChange:y,onCropChange:Z,onCropComplete:(e,t)=>{L(t)}})}),(0,u.jsxs)(i.Z,{sx:{flexDirection:"column",mx:3,my:2,width:531},children:[(0,u.jsxs)(l.Z,{sx:{width:"100%",mb:1},children:[(0,u.jsxs)(l.Z,{children:[(0,u.jsxs)(r.Z,{children:["Zoom: ",m(P)]}),(0,u.jsx)(c.ZP,{valueLabelDisplay:"auto",valueLabelFormat:m,min:1,max:3,step:.1,value:P,onChange:(e,t)=>C(t)})]}),(0,u.jsxs)(l.Z,{children:[(0,u.jsxs)(r.Z,{children:["Rotation: ",w+"\xb0"]}),(0,u.jsx)(c.ZP,{valueLabelDisplay:"auto",min:0,max:360,value:w,onChange:(e,t)=>y(t)})]})]}),(0,u.jsxs)(l.Z,{sx:{display:"flex",gap:34,flexWrap:"wrap"},children:[(0,u.jsx)(_.Z,{variant:"outlined",startIcon:(0,u.jsx)(n.Z,{}),onClick:()=>v(!1),children:"Cancel"}),(0,u.jsx)(_.Z,{variant:"contained",startIcon:(0,u.jsx)(s.Z,{}),onClick:async()=>{try{const{file:e,url:n}=await(0,h.ZP)(a,k,w);t(n),p(e),v(!1),x(!0),g(n)}catch(e){console.log(e)}},children:"Upload"})]})]})]})},m=e=>"".concat(Math.round(100*e),"%")},17107:(e,t,a)=>{a.d(t,{ZP:()=>o});const n=e=>new Promise(((t,a)=>{const n=new Image;n.addEventListener("load",(()=>t(n))),n.addEventListener("error",(e=>a(e))),n.setAttribute("crossOrigin","anonymous"),n.src=e}));function s(e){return e*Math.PI/180}async function o(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{horizontal:!1,vertical:!1};const i=await n(e),l=document.createElement("canvas"),r=l.getContext("2d");if(!r)return null;const c=s(a),{width:_,height:d}=function(e,t,a){const n=s(a);return{width:Math.abs(Math.cos(n)*e)+Math.abs(Math.sin(n)*t),height:Math.abs(Math.sin(n)*e)+Math.abs(Math.cos(n)*t)}}(i.width,i.height,a);l.width=_,l.height=d,r.translate(_/2,d/2),r.rotate(c),r.scale(o.horizontal?-1:1,o.vertical?-1:1),r.translate(-i.width/2,-i.height/2),r.drawImage(i,0,0);const f=r.getImageData(t.x,t.y,t.width,t.height);return l.width=t.width,l.height=t.height,r.putImageData(f,0,0),new Promise(((e,t)=>{l.toBlob((t=>{t.name="cropped.jpeg",e({file:t,url:URL.createObjectURL(t)})}),"image/jpeg")}))}},81693:(e,t,a)=>{a.d(t,{Z:()=>i});a(72791);var n=a(39230),s=a(38733),o=a(80184);const i=e=>{let{selectLabel:t,value:a,name:i,onChange:l,selectedValue:r,options:c,optionsValue:_,errorShow:d,customStyleContainer:f,customStyleLabel:h,customStyleInput:u,disabled:p,isNotTranslation:m,openAs:v}=e;const{t:x}=(0,n.$G)();return(0,o.jsxs)("div",{className:s.Z.join_form_container,style:{...f},children:[(0,o.jsxs)("p",{className:s.Z.join_form_select_paragraph,style:{...h},children:[t," ",d&&(0,o.jsxs)("span",{style:{color:"red",marginLeft:"15px"},children:["* ",x("form_require_label")]})]}),(0,o.jsxs)("select",{className:s.Z.join_form_select,value:a,onChange:l,name:i,disabled:p,style:{...u},children:[(0,o.jsx)("option",{selected:!0,children:r}),m?null===c||void 0===c?void 0:c.map(((e,t)=>(0,o.jsx)("option",{value:e,children:e},t))):"academicSiteInfo"===v?null===c||void 0===c?void 0:c.map(((e,t)=>(0,o.jsx)("option",{value:null===e||void 0===e?void 0:e._id,children:"".concat((null===e||void 0===e?void 0:e.staffFirstName)||""," ").concat(null!==e&&void 0!==e&&e.staffMiddleName?null===e||void 0===e?void 0:e.staffMiddleName:""," ").concat((null===e||void 0===e?void 0:e.staffLastName)||"")},t))):null===c||void 0===c?void 0:c.map(((e,t)=>(0,o.jsx)("option",{value:_?_[null===e||void 0===e?void 0:e.keys]:e,children:x(null===e||void 0===e?void 0:e.keys)},t)))]})]})}},12923:(e,t,a)=>{a.d(t,{Ec:()=>g,Em:()=>b,JM:()=>h,NS:()=>o,Pg:()=>u,Q_:()=>x,RH:()=>f,Tv:()=>r,U_:()=>v,VN:()=>i,Wj:()=>_,ZS:()=>d,_8:()=>S,d5:()=>c,tB:()=>m,vI:()=>j,yx:()=>l,zO:()=>p});var n=a(91007),s=a(58208);const o=e=>{const{data:t,refetch:a}=(0,s.YD)(e.search,{skip:e.skip});return{instituteAllSearch:t,instituteAllSearchRefetch:a}},i=()=>{const[e]=(0,s.ak)();return[e]},l=()=>{const[e]=(0,s.WL)();return[e]},r=e=>{const{data:t,refetch:a}=(0,s.pH)(e.list,{skip:e.skip});return{instituteFollowList:t,instituteFollowListRefetch:a}},c=e=>{const{data:t,refetch:a}=(0,s.MG)(e.data,{skip:e.skip});return{instituteOwnFollowingList:t,instituteOwnFollowingListRefetch:a}},_=()=>{const[e]=(0,s.Ky)();return[e]},d=e=>{const{data:t,refetch:a}=(0,s.p8)(e.list);return{userFollowList:t,userFollowListRefetch:a}},f=e=>{const{data:t,refetch:a}=(0,s.Wv)(e);return{userFollowingList:t,userFollowingListRefetch:a}},h=e=>{const{data:t,refetch:a}=(0,s.sz)(e.search,{skip:e.skip});return{userAllSearch:t,userAllSearchRefetch:a}},u=()=>{const[e]=(0,s.Mk)();return[e]},p=()=>{const[e]=(0,s.$i)();return[e]},m=()=>{const[e]=(0,s.Do)();return[e]},v=()=>{const[e]=(0,s.He)();return[e]},x=()=>{const[e]=(0,s.vg)();return[e]},g=()=>{const[e]=(0,s.OO)();return[e]},S=e=>{const{data:t,refetch:a}=(0,s.N2)(e);return{userCircleList:t,userCircleListRefetch:a}},j=e=>{const{data:t,refetch:a}=(0,n.x6)(e.search,{skip:e.skip});return{assignSearchStaff:t,assignSearchStaffRefetch:a}},b=e=>{const{data:t,refetch:a}=(0,s.SJ)(e);return{universalUser:t,universalUserRefetch:a}}},65034:(e,t,a)=>{a.r(t),a.d(t,{default:()=>Z});var n=a(72791),s=a(42190),o=a(20772),i=a(16871),l=a(89792),r=a(39230),c=a(72952),_=a(98734),d=a(98094),f=(a(91007),a(29899)),h=a(97655),u=a(84959),p=a(81622),m=a(81693),v=a(95048),x=a(12923),g=a(70966),S=a(5574),j=a(80184);const b=function(e){var t;let{instituteId:a,nid:s,viewAs:o}=e;const{t:b}=(0,r.$G)(),Z=(0,i.s0)(),P=(0,v.v9)((e=>{var t;return null===(t=e.idChange)||void 0===t?void 0:t.id})),[C,w]=(0,n.useState)(!1),[y]=(0,u.FL)(),[k,L]=(0,n.useState)([]),[N,I]=(0,n.useState)(""),[M,R]=(0,n.useState)(""),[T,F]=(0,n.useState)(""),[A,U]=(0,n.useState)(!1),[D,O]=(0,n.useState)(!1),[E,H]=(0,n.useState)(""),[V]=(0,f.mG)(),[z]=(0,f.XA)(),[G,W]=(0,n.useState)({nss_about:"",nss_photo:"",nss_objective:"",nss_head:"",nss_roles:"",nss_commitee:[]}),[K,X]=(0,n.useState)([]);(0,n.useEffect)((()=>{W((e=>({...e,[N]:K})))}),[K,N]);const{assignSearchStaff:q,assignSearchStaffRefetch:B}=(0,x.vI)({skip:"ADMISSION_ADMIN"===o?!a:!P,search:{search:"",page:1,id:"ADMISSION_ADMIN"===o?a:P,limit:500}}),{getNssSiteInfo:J,getNssSiteInfoRefetch:Q}=(0,f.Sj)({nid:s,skip:!s});(0,n.useEffect)((()=>{D&&(e=>{if(e){w((e=>!e));const t=new FormData;t.append("file",e),y({fileUpload:t}).then((e=>{var t;null!==(t=e.data)&&void 0!==t&&t.imageKey&&W((t=>{var a;return{...t,nss_photo:null===(a=e.data)||void 0===a?void 0:a.imageKey}})),w((e=>!e))})).catch({})}})(T)}),[D,T]);const $=(e,t)=>{if("name"===e.target.name||"designation"===e.target.name){const a=[...K];for(let n=0;n<(null===a||void 0===a?void 0:a.length);n++)n===t&&(a[n][e.target.name]=e.target.value);X(a)}else W((t=>({...t,[e.target.name]:e.target.value})))};return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("div",{className:l.Z.bgContainer,children:(0,j.jsxs)("div",{className:l.Z.container,children:[(0,j.jsxs)("div",{className:l.Z.containerhead,children:[(0,j.jsx)("h6",{children:b("nss")}),(0,j.jsx)("img",{src:"/images/close-post-icon.svg",alt:"",onClick:()=>{Z(-1)}})]}),(0,j.jsx)(d.Z,{customStyle:{width:"100%",marginBottom:"1rem"}}),(0,j.jsx)("div",{className:l.Z.containercontent,children:(0,j.jsxs)("div",{className:l.Z.container_inner_content,children:[(0,j.jsx)(c.Z,{labelText:b("nss_about"),placeholder:b("nss_about_placeholder"),name:"nss_about",value:G.nss_about,type:"text",onChange:$,customStyleContainer:{width:"100%"}}),(0,j.jsxs)("div",{className:l.Z.show_field,style:{alignItems:"flex-start"},children:[(0,j.jsx)(m.Z,{selectLabel:b("select_dean_academic"),selectedValue:b("select_dean_placeholder"),value:G.academic_head,name:"nss_head",onChange:$,options:null===q||void 0===q?void 0:q.staff,openAs:"academicSiteInfo",customStyleContainer:{width:"49.5%"}}),(0,j.jsx)(p.Z,{labelText:b("academic_photo"),name:"dean_academic_photo",value:G.nss_photo,onChange:e=>{if(e.target.files[0]){const t=URL.createObjectURL(e.target.files[0]);F(e.target.files[0]),H(t),R(t),U(!0)}},customStyleContainer:{width:"49.5%"}})]}),(0,j.jsx)(c.Z,{labelText:b("nss_objective"),placeholder:b("nss_objective_placeholder"),name:"nss_objective",value:G.nss_objective,type:"text",onChange:$,customStyleContainer:{width:"100%"}}),(0,j.jsx)(c.Z,{labelText:b("nss_roles"),placeholder:b("nss_roles_placeholder"),name:"nss_roles",value:G.nss_roles,type:"text",onChange:$,customStyleContainer:{width:"100%"}}),(0,j.jsxs)("div",{className:l.Z.add_contact_person,children:[(0,j.jsx)("h6",{style:{marginTop:"1.5rem"},children:b("nss_commitee")}),null===G||void 0===G||null===(t=G.nss_commitee)||void 0===t?void 0:t.map(((e,t)=>(0,j.jsx)("div",{children:(0,j.jsxs)("div",{className:l.Z.show_field,children:[(0,j.jsx)(h.Z,{labelText:b("name"),placeholder:b("enter_name"),name:"name",value:null===e||void 0===e?void 0:e.name,type:"text",onChange:e=>$(e,t),customStyleContainer:{width:"49.5%"}}),(0,j.jsx)(h.Z,{labelText:b("designation"),placeholder:b("designation_details"),name:"designation",value:null===K||void 0===K?void 0:K.designation,type:"text",onChange:e=>$(e,t),customStyleContainer:{width:"49.5%"}})]})},t)))]}),(0,j.jsx)("button",{className:l.Z.add_contact_person_btn,title:"Add Member",onClick:()=>(e=>{I(e),X([...G[e],{name:"",designation:""}])})("nss_commitee"),children:b("add_member")}),(0,j.jsx)("button",{className:l.Z.update_btn,onClick:()=>{w((e=>!e)),s?z({aid:s,updateSiteInfo:{otherField:G}}).then((()=>{w((e=>!e))})).catch({}):V({id:P,updateSiteInfo:{otherField:G}}).then((()=>{w((e=>!e))})).catch({})},children:b(s?"update":"add")})]})})]})}),C&&(0,j.jsx)(_.Z,{}),(0,j.jsx)(S.Z,{open:A,children:(0,j.jsx)(g.Z,{setPhotoURL:R,photoURL:M,setFile:F,setOpenCrop:U,setUpload:O,setProfilePhoto:H,first:1,second:1})})]})};const Z=function(){var e,t;const a=(0,i.TH)();return(0,j.jsxs)("div",{className:s.Z.insChat,children:[(0,j.jsx)("div",{className:s.Z.navbarr,children:(0,j.jsx)(o.default,{status:"home"})}),"site"===(null===(e=a.search)||void 0===e?void 0:e.substring(3))&&(0,j.jsx)(b,{nid:null===a||void 0===a||null===(t=a.state)||void 0===t?void 0:t.nid,viewAs:"INSTITUTE"})]})}},65543:(e,t,a)=>{a.d(t,{u:()=>s});var n=a(72791);const s=()=>({hideScrollbar:n.useCallback((()=>{}),[]),showScrollbar:n.useCallback((()=>{document.body.style.overflow=""}),[]),scrollToTop:n.useCallback((()=>{window.scrollTo(0,0)}),[])})},98094:(e,t,a)=>{a.d(t,{Z:()=>o});a(72791);var n=a(55136),s=a(80184);const o=e=>{let{customStyle:t}=e;return(0,s.jsx)("hr",{className:n.Z.universal_hr,style:{...t}})}},94811:(e,t,a)=>{a.d(t,{Q0:()=>s,a4:()=>n,yY:()=>o});const n="POST",s="PATCH",o="DELETE"},54155:(e,t,a)=>{var n=a(64836);t.Z=void 0;var s=n(a(45649)),o=a(80184),i=(0,s.default)((0,o.jsx)("path",{d:"M17 15h2V7c0-1.1-.9-2-2-2H9v2h8v8zM7 17V1H5v4H1v2h4v10c0 1.1.9 2 2 2h10v4h2v-4h4v-2H7z"}),"Crop");t.Z=i},97893:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(74223),s=a(80184);const o=(0,n.Z)((0,s.jsx)("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel")},91711:()=>{},55136:(e,t,a)=>{a.d(t,{Z:()=>n});const n={staff_profile_container:"StaffProfile_staff_profile_container__GG5AM",staff_header_container:"StaffProfile_staff_header_container__avRlK",staff_header_function:"StaffProfile_staff_header_function__l9cDM",staff_header_text:"StaffProfile_staff_header_text__XX8rQ",staff_header_prev:"StaffProfile_staff_header_prev__ImXKU",staff_header_next:"StaffProfile_staff_header_next__jjoJr",staff_header_close:"StaffProfile_staff_header_close__wXG-N",staff_profile_photo_name:"StaffProfile_staff_profile_photo_name__WWUV4",staff_profile_photo_index:"StaffProfile_staff_profile_photo_index__-yyx9",each_info_container:"StaffProfile_each_info_container__Mo3TB",each_field_text:"StaffProfile_each_field_text__vvAvg",each_field_text_value:"StaffProfile_each_field_text_value__k1OsE",universal_hr:"StaffProfile_universal_hr__w130J",staff_profile_photo_container:"StaffProfile_staff_profile_photo_container__rFPEV",staff_profile_photo_info:"StaffProfile_staff_profile_photo_info__CxVDi",staff_profile_photo_image:"StaffProfile_staff_profile_photo_image__5f2cC",staff_profile_photo_edit:"StaffProfile_staff_profile_photo_edit__y03dk",each_field_container:"StaffProfile_each_field_container__0qKjw",each_field:"StaffProfile_each_field__18G-9",student_attendane_container:"StaffProfile_student_attendane_container__64BII",student_attendance_heading:"StaffProfile_student_attendance_heading__0hW2K",colours:"StaffProfile_colours__-7mIV",monthColours:"StaffProfile_monthColours__A3asC",percentage:"StaffProfile_percentage__GO1RT",presentcount:"StaffProfile_presentcount__u30HH",absentcount:"StaffProfile_absentcount__d+utq",link_hold_container:"StaffProfile_link_hold_container__0dRjX",link_hold_container_hostel:"StaffProfile_link_hold_container_hostel__LcldT",card_hold_container:"StaffProfile_card_hold_container__HQQcE",admission_fees:"StaffProfile_admission_fees__MoZHM",certificate_btn_container:"StaffProfile_certificate_btn_container__jui9m",admission_actions:"StaffProfile_admission_actions__ayyJD",staff_designation_btn:"StaffProfile_staff_designation_btn__4C3h7",ospp_header:"StaffProfile_ospp_header__oteF5",ospph_img:"StaffProfile_ospph_img__gPivu",cbc_row:"StaffProfile_cbc_row__rm60T",certificate_btn:"StaffProfile_certificate_btn__3NWfg"}}}]);
//# sourceMappingURL=17536.e0965b53.chunk.js.map
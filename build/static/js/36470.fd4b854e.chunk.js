"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[36470],{76043:(e,t,a)=>{a.r(t),a.d(t,{default:()=>m});var o=a(72791),i=a(39230),s=a(95048),l=a(16871),n=a(87984),_=a(39480),d=a(9447),r=a(69721),h=a(98094);const f={navbar:"HashtagProfile_navbar__DxWiU",mainbody:"HashtagProfile_mainbody__FXbBb",hashtag_left:"HashtagProfile_hashtag_left__OmsPj",hashtag_right:"HashtagProfile_hashtag_right__yDWa9",hashtag_right_one:"HashtagProfile_hashtag_right_one__pjIh0",hashtag_count_text:"HashtagProfile_hashtag_count_text__6J8K2",post_container:"HashtagProfile_post_container__HT4ME",post_container_h6:"HashtagProfile_post_container_h6__mIJVz"};var c=a(80184);const u=e=>{var t,a,o,s;let{hash:l}=e;const{t:n}=(0,i.$G)();return(0,c.jsxs)("div",{className:f.hashtag_right,children:[(0,c.jsxs)("div",{className:f.hashtag_right_one,children:[(0,c.jsxs)("div",{className:f.hashtag_count_text,children:[(0,c.jsx)("h6",{children:n("hashtag_follower")}),(0,c.jsx)("p",{children:n("hashtag_follower_placeholder")})]}),(0,c.jsx)("h6",{children:null!==(t=null===l||void 0===l?void 0:l.hashtag_follower_count)&&void 0!==t?t:0})]}),(0,c.jsx)(h.Z,{customStyle:{width:"100%"}}),(0,c.jsxs)("div",{className:f.hashtag_right_one,children:[(0,c.jsxs)("div",{className:f.hashtag_count_text,children:[(0,c.jsx)("h6",{children:n("hashtag_question")}),(0,c.jsx)("p",{children:n("hashtag_question_placeholder")})]}),(0,c.jsx)("h6",{children:null!==(a=null===l||void 0===l?void 0:l.hashtag_question_count)&&void 0!==a?a:0})]}),(0,c.jsx)(h.Z,{customStyle:{width:"100%"}}),(0,c.jsxs)("div",{className:f.hashtag_right_one,children:[(0,c.jsxs)("div",{className:f.hashtag_count_text,children:[(0,c.jsx)("h6",{children:n("hashtag_quiz_polls")}),(0,c.jsx)("p",{children:n("hashtag_quiz_polls_placeholder")})]}),(0,c.jsx)("h6",{children:null!==(o=null===l||void 0===l?void 0:l.hashtag_poll_count)&&void 0!==o?o:0})]}),(0,c.jsx)(h.Z,{customStyle:{width:"100%"}}),(0,c.jsxs)("div",{className:f.hashtag_right_one,children:[(0,c.jsxs)("div",{className:f.hashtag_count_text,children:[(0,c.jsx)("h6",{children:n("hashtag_answers")}),(0,c.jsx)("p",{children:n("hashtag_answers_placeholder")})]}),(0,c.jsx)("h6",{children:null!==(s=null===l||void 0===l?void 0:l.hashtag_repost_count)&&void 0!==s?s:0})]})]})};var v=a(28453),p=a(96222),g=a(11105);const x=e=>{var t,a;let{hid:i}=e;const[s,l]=(0,o.useState)(!0),{getOneHashtagPostList:n,getOneHashtagPostListRefetch:_}=(0,d.hX)({data:{hid:i,page:1,limit:100},skip:!i});return(0,o.useEffect)((()=>{i&&(l(!0),_())}),[i,_]),(0,o.useEffect)((()=>{var e;(null!==n&&void 0!==n&&n.post||0===(null===n||void 0===n||null===(e=n.post)||void 0===e?void 0:e.length))&&l(!1)}),[null===n||void 0===n?void 0:n.post]),(0,c.jsxs)("div",{className:f.post_container,children:[null===n||void 0===n||null===(t=n.post)||void 0===t?void 0:t.map((e=>"Question"===(null===e||void 0===e?void 0:e.postType)?(0,c.jsx)(p.Z,{post:e,viewAs:"HASHTAG"},null===e||void 0===e?void 0:e._id):(0,c.jsx)(v.Z,{post:e,viewAs:"HASHTAG"},null===e||void 0===e?void 0:e._id))),s&&(0,c.jsx)(g.Z,{}),!s&&!(null!==n&&void 0!==n&&null!==(a=n.post)&&void 0!==a&&a.length)&&(0,c.jsx)("h6",{className:f.post_container_h6,children:"No Post use this #tag "})]})},m=()=>{var e,t,a,h,v,p,g,m,P,S,j,b,k,w,Z;const{t:y}=(0,i.$G)(),H=(0,s.v9)((e=>e.idChange)),N=(0,l.TH)(),[C]=(0,d.Ql)(),[I,R]=(0,o.useState)(!1);(0,o.useEffect)((()=>{var e;null===(e=document.getElementById("scrollViewHashtag"))||void 0===e||e.scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})}),[]);const{oneUserDashboard:F,oneUserDashboardRefetch:B}=(0,_.ku)({id:null===H||void 0===H?void 0:H.id,skip:!H.id}),{getOneHashtagDetail:q,getOneHashtagDetailRefetch:E}=(0,d.M8)({data:{hid:null===(e=N.state)||void 0===e?void 0:e.hid},skip:!(null!==(t=N.state)&&void 0!==t&&t.hid)});(0,o.useEffect)((()=>{H.id&&B()}),[H.id,B]),(0,o.useEffect)((()=>{var e;null!==(e=N.state)&&void 0!==e&&e.hid&&E()}),[null===(a=N.state)||void 0===a?void 0:a.hid,E]);return(0,c.jsxs)("div",{className:f.Profile,children:[(0,c.jsx)("div",{className:f.navbar,children:(0,c.jsx)(n.default,{status:"dashboard",profileData:null===F||void 0===F?void 0:F.user,username:null===F||void 0===F||null===(h=F.user)||void 0===h?void 0:h.username,name:null===F||void 0===F||null===(v=F.user)||void 0===v?void 0:v.userLegalName,photoId:null===F||void 0===F||null===(p=F.user)||void 0===p?void 0:p.photoId,profilePhoto:null===F||void 0===F||null===(g=F.user)||void 0===g?void 0:g.profilePhoto})}),(0,c.jsxs)("div",{className:f.mainbody,children:[(0,c.jsxs)("div",{className:f.hashtag_left,id:"scrollViewHashtag",children:[(0,c.jsx)("img",{src:null!==q&&void 0!==q&&null!==(m=q.hash)&&void 0!==m&&m.hashtag_profile_photo?"".concat(r.yI,"/").concat(null===q||void 0===q||null===(P=q.hash)||void 0===P?void 0:P.hashtag_profile_photo):"/images/hashtag-bg-icon.svg",alt:"hashtag icon"}),(0,c.jsx)("h6",{children:null!==(S=null===q||void 0===q||null===(j=q.hash)||void 0===j?void 0:j.hashtag_name)&&void 0!==S?S:""}),(0,c.jsx)("button",{onClick:()=>{var e,t;null!==(e=N.state)&&void 0!==e&&e.hid&&(R(!0),C({hid:null===(t=N.state)||void 0===t?void 0:t.hid}).then((()=>{B(),E(),R(!1)})).catch({}))},disabled:I,children:y(null!==F&&void 0!==F&&null!==(b=F.user)&&void 0!==b&&null!==(k=b.follow_hashtag)&&void 0!==k&&k.includes(null===q||void 0===q||null===(w=q.hash)||void 0===w?void 0:w._id)?"following":"follow")})]}),(0,c.jsx)(x,{hid:null===(Z=N.state)||void 0===Z?void 0:Z.hid}),(0,c.jsx)(u,{hash:null===q||void 0===q?void 0:q.hash})]})]})}},98094:(e,t,a)=>{a.d(t,{Z:()=>s});a(72791);var o=a(55136),i=a(80184);const s=e=>{let{customStyle:t}=e;return(0,i.jsx)("hr",{className:o.Z.universal_hr,style:{...t}})}},93840:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a(72791).createContext(void 0)},52930:(e,t,a)=>{a.d(t,{Z:()=>s});var o=a(72791),i=a(93840);function s(){return o.useContext(i.Z)}},97278:(e,t,a)=>{a.d(t,{Z:()=>P});var o=a(63366),i=a(87462),s=a(72791),l=a(59278),n=a(94419),_=a(14036),d=a(66934),r=a(98278),h=a(52930),f=a(87171),c=a(75878),u=a(21217);function v(e){return(0,u.Z)("PrivateSwitchBase",e)}(0,c.Z)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var p=a(80184);const g=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],x=(0,d.ZP)(f.Z)((e=>{let{ownerState:t}=e;return(0,i.Z)({padding:9,borderRadius:"50%"},"start"===t.edge&&{marginLeft:"small"===t.size?-3:-12},"end"===t.edge&&{marginRight:"small"===t.size?-3:-12})})),m=(0,d.ZP)("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),P=s.forwardRef((function(e,t){const{autoFocus:a,checked:s,checkedIcon:d,className:f,defaultChecked:c,disabled:u,disableFocusRipple:P=!1,edge:S=!1,icon:j,id:b,inputProps:k,inputRef:w,name:Z,onBlur:y,onChange:H,onFocus:N,readOnly:C,required:I=!1,tabIndex:R,type:F,value:B}=e,q=(0,o.Z)(e,g),[E,D]=(0,r.Z)({controlled:s,default:Boolean(c),name:"SwitchBase",state:"checked"}),O=(0,h.Z)();let A=u;O&&"undefined"===typeof A&&(A=O.disabled);const G="checkbox"===F||"radio"===F,T=(0,i.Z)({},e,{checked:E,disabled:A,disableFocusRipple:P,edge:S}),V=(e=>{const{classes:t,checked:a,disabled:o,edge:i}=e,s={root:["root",a&&"checked",o&&"disabled",i&&"edge".concat((0,_.Z)(i))],input:["input"]};return(0,n.Z)(s,v,t)})(T);return(0,p.jsxs)(x,(0,i.Z)({component:"span",className:(0,l.Z)(V.root,f),centerRipple:!0,focusRipple:!P,disabled:A,tabIndex:null,role:void 0,onFocus:e=>{N&&N(e),O&&O.onFocus&&O.onFocus(e)},onBlur:e=>{y&&y(e),O&&O.onBlur&&O.onBlur(e)},ownerState:T,ref:t},q,{children:[(0,p.jsx)(m,(0,i.Z)({autoFocus:a,checked:s,defaultChecked:c,className:V.input,disabled:A,id:G?b:void 0,name:Z,onChange:e=>{if(e.nativeEvent.defaultPrevented)return;const t=e.target.checked;D(t),H&&H(e,t)},readOnly:C,ref:w,required:I,ownerState:T,tabIndex:R,type:F},"checkbox"===F&&void 0===B?{}:{value:B},k)),E?d:j]}))}))},55136:(e,t,a)=>{a.d(t,{Z:()=>o});const o={staff_profile_container:"StaffProfile_staff_profile_container__GG5AM",staff_header_container:"StaffProfile_staff_header_container__avRlK",staff_header_function:"StaffProfile_staff_header_function__l9cDM",staff_header_text:"StaffProfile_staff_header_text__XX8rQ",staff_header_prev:"StaffProfile_staff_header_prev__ImXKU",staff_header_next:"StaffProfile_staff_header_next__jjoJr",staff_header_close:"StaffProfile_staff_header_close__wXG-N",staff_profile_photo_name:"StaffProfile_staff_profile_photo_name__WWUV4",staff_profile_photo_index:"StaffProfile_staff_profile_photo_index__-yyx9",each_info_container:"StaffProfile_each_info_container__Mo3TB",each_field_text:"StaffProfile_each_field_text__vvAvg",each_field_text_value:"StaffProfile_each_field_text_value__k1OsE",universal_hr:"StaffProfile_universal_hr__w130J",staff_profile_photo_container:"StaffProfile_staff_profile_photo_container__rFPEV",staff_profile_photo_info:"StaffProfile_staff_profile_photo_info__CxVDi",staff_profile_photo_image:"StaffProfile_staff_profile_photo_image__5f2cC",staff_profile_photo_edit:"StaffProfile_staff_profile_photo_edit__y03dk",each_field_container:"StaffProfile_each_field_container__0qKjw",each_field:"StaffProfile_each_field__18G-9",student_attendane_container:"StaffProfile_student_attendane_container__64BII",student_attendance_heading:"StaffProfile_student_attendance_heading__0hW2K",colours:"StaffProfile_colours__-7mIV",monthColours:"StaffProfile_monthColours__A3asC",percentage:"StaffProfile_percentage__GO1RT",presentcount:"StaffProfile_presentcount__u30HH",absentcount:"StaffProfile_absentcount__d+utq",link_hold_container:"StaffProfile_link_hold_container__0dRjX",link_hold_container_hostel:"StaffProfile_link_hold_container_hostel__LcldT",card_hold_container:"StaffProfile_card_hold_container__HQQcE",admission_fees:"StaffProfile_admission_fees__MoZHM",certificate_btn_container:"StaffProfile_certificate_btn_container__jui9m",admission_actions:"StaffProfile_admission_actions__ayyJD",staff_designation_btn:"StaffProfile_staff_designation_btn__4C3h7",ospp_header:"StaffProfile_ospp_header__oteF5",ospph_img:"StaffProfile_ospph_img__gPivu",cbc_row:"StaffProfile_cbc_row__rm60T",certificate_btn:"StaffProfile_certificate_btn__3NWfg"}}}]);
//# sourceMappingURL=36470.fd4b854e.chunk.js.map
"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[76043],{76043:(e,t,a)=>{a.r(t),a.d(t,{default:()=>m});var o=a(72791),i=a(39230),_=a(95048),l=a(16871),s=a(79872),n=a(39480),h=a(9447),f=a(69721),d=a(98094);const r={navbar:"HashtagProfile_navbar__DxWiU",mainbody:"HashtagProfile_mainbody__FXbBb",hashtag_left:"HashtagProfile_hashtag_left__OmsPj",hashtag_right:"HashtagProfile_hashtag_right__yDWa9",hashtag_right_one:"HashtagProfile_hashtag_right_one__pjIh0",hashtag_count_text:"HashtagProfile_hashtag_count_text__6J8K2",post_container:"HashtagProfile_post_container__HT4ME",post_container_h6:"HashtagProfile_post_container_h6__mIJVz"};var c=a(80184);const u=e=>{var t,a,o,_;let{hash:l}=e;const{t:s}=(0,i.$G)();return(0,c.jsxs)("div",{className:r.hashtag_right,children:[(0,c.jsxs)("div",{className:r.hashtag_right_one,children:[(0,c.jsxs)("div",{className:r.hashtag_count_text,children:[(0,c.jsx)("h6",{children:s("hashtag_follower")}),(0,c.jsx)("p",{children:s("hashtag_follower_placeholder")})]}),(0,c.jsx)("h6",{children:null!==(t=null===l||void 0===l?void 0:l.hashtag_follower_count)&&void 0!==t?t:0})]}),(0,c.jsx)(d.Z,{customStyle:{width:"100%"}}),(0,c.jsxs)("div",{className:r.hashtag_right_one,children:[(0,c.jsxs)("div",{className:r.hashtag_count_text,children:[(0,c.jsx)("h6",{children:s("hashtag_question")}),(0,c.jsx)("p",{children:s("hashtag_question_placeholder")})]}),(0,c.jsx)("h6",{children:null!==(a=null===l||void 0===l?void 0:l.hashtag_question_count)&&void 0!==a?a:0})]}),(0,c.jsx)(d.Z,{customStyle:{width:"100%"}}),(0,c.jsxs)("div",{className:r.hashtag_right_one,children:[(0,c.jsxs)("div",{className:r.hashtag_count_text,children:[(0,c.jsx)("h6",{children:s("hashtag_quiz_polls")}),(0,c.jsx)("p",{children:s("hashtag_quiz_polls_placeholder")})]}),(0,c.jsx)("h6",{children:null!==(o=null===l||void 0===l?void 0:l.hashtag_poll_count)&&void 0!==o?o:0})]}),(0,c.jsx)(d.Z,{customStyle:{width:"100%"}}),(0,c.jsxs)("div",{className:r.hashtag_right_one,children:[(0,c.jsxs)("div",{className:r.hashtag_count_text,children:[(0,c.jsx)("h6",{children:s("hashtag_answers")}),(0,c.jsx)("p",{children:s("hashtag_answers_placeholder")})]}),(0,c.jsx)("h6",{children:null!==(_=null===l||void 0===l?void 0:l.hashtag_repost_count)&&void 0!==_?_:0})]})]})};var v=a(28453),g=a(96222),p=a(11105);const x=e=>{var t,a;let{hid:i}=e;const[_,l]=(0,o.useState)(!0),{getOneHashtagPostList:s,getOneHashtagPostListRefetch:n}=(0,h.hX)({data:{hid:i,page:1,limit:100},skip:!i});return(0,o.useEffect)((()=>{i&&(l(!0),n())}),[i,n]),(0,o.useEffect)((()=>{var e;(null!==s&&void 0!==s&&s.post||0===(null===s||void 0===s||null===(e=s.post)||void 0===e?void 0:e.length))&&l(!1)}),[null===s||void 0===s?void 0:s.post]),(0,c.jsxs)("div",{className:r.post_container,children:[null===s||void 0===s||null===(t=s.post)||void 0===t?void 0:t.map((e=>"Question"===(null===e||void 0===e?void 0:e.postType)?(0,c.jsx)(g.Z,{post:e,viewAs:"HASHTAG"},null===e||void 0===e?void 0:e._id):(0,c.jsx)(v.Z,{post:e,viewAs:"HASHTAG"},null===e||void 0===e?void 0:e._id))),_&&(0,c.jsx)(p.Z,{}),!_&&!(null!==s&&void 0!==s&&null!==(a=s.post)&&void 0!==a&&a.length)&&(0,c.jsx)("h6",{className:r.post_container_h6,children:"No Post use this #tag "})]})},m=()=>{var e,t,a,d,v,g,p,m,P,j,S,b,H,w,N;const{t:k}=(0,i.$G)(),y=(0,_.v9)((e=>e.idChange)),I=(0,l.TH)(),[C]=(0,h.Ql)(),[D,E]=(0,o.useState)(!1);(0,o.useEffect)((()=>{var e;null===(e=document.getElementById("scrollViewHashtag"))||void 0===e||e.scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})}),[]);const{oneUserDashboard:Z,oneUserDashboardRefetch:q}=(0,n.ku)({id:null===y||void 0===y?void 0:y.id,skip:!y.id}),{getOneHashtagDetail:A,getOneHashtagDetailRefetch:G}=(0,h.M8)({data:{hid:null===(e=I.state)||void 0===e?void 0:e.hid},skip:!(null!==(t=I.state)&&void 0!==t&&t.hid)});(0,o.useEffect)((()=>{y.id&&q()}),[y.id,q]),(0,o.useEffect)((()=>{var e;null!==(e=I.state)&&void 0!==e&&e.hid&&G()}),[null===(a=I.state)||void 0===a?void 0:a.hid,G]);return(0,c.jsxs)("div",{className:r.Profile,children:[(0,c.jsx)("div",{className:r.navbar,children:(0,c.jsx)(s.default,{status:"dashboard",profileData:null===Z||void 0===Z?void 0:Z.user,username:null===Z||void 0===Z||null===(d=Z.user)||void 0===d?void 0:d.username,name:null===Z||void 0===Z||null===(v=Z.user)||void 0===v?void 0:v.userLegalName,photoId:null===Z||void 0===Z||null===(g=Z.user)||void 0===g?void 0:g.photoId,profilePhoto:null===Z||void 0===Z||null===(p=Z.user)||void 0===p?void 0:p.profilePhoto})}),(0,c.jsxs)("div",{className:r.mainbody,children:[(0,c.jsxs)("div",{className:r.hashtag_left,id:"scrollViewHashtag",children:[(0,c.jsx)("img",{src:null!==A&&void 0!==A&&null!==(m=A.hash)&&void 0!==m&&m.hashtag_profile_photo?"".concat(f.yI,"/").concat(null===A||void 0===A||null===(P=A.hash)||void 0===P?void 0:P.hashtag_profile_photo):"/images/hashtag-bg-icon.svg",alt:"hashtag icon"}),(0,c.jsx)("h6",{children:null!==(j=null===A||void 0===A||null===(S=A.hash)||void 0===S?void 0:S.hashtag_name)&&void 0!==j?j:""}),(0,c.jsx)("button",{onClick:()=>{var e,t;null!==(e=I.state)&&void 0!==e&&e.hid&&(E(!0),C({hid:null===(t=I.state)||void 0===t?void 0:t.hid}).then((()=>{q(),G(),E(!1)})).catch({}))},disabled:D,children:k(null!==Z&&void 0!==Z&&null!==(b=Z.user)&&void 0!==b&&null!==(H=b.follow_hashtag)&&void 0!==H&&H.includes(null===A||void 0===A||null===(w=A.hash)||void 0===w?void 0:w._id)?"following":"follow")})]}),(0,c.jsx)(x,{hid:null===(N=I.state)||void 0===N?void 0:N.hid}),(0,c.jsx)(u,{hash:null===A||void 0===A?void 0:A.hash})]})]})}},98094:(e,t,a)=>{a.d(t,{Z:()=>_});a(72791);var o=a(55136),i=a(80184);const _=e=>{let{customStyle:t}=e;return(0,i.jsx)("hr",{className:o.Z.universal_hr,style:{...t}})}},55136:(e,t,a)=>{a.d(t,{Z:()=>o});const o={staff_profile_container:"StaffProfile_staff_profile_container__GG5AM",staff_header_container:"StaffProfile_staff_header_container__avRlK",staff_header_function:"StaffProfile_staff_header_function__l9cDM",staff_header_text:"StaffProfile_staff_header_text__XX8rQ",staff_header_prev:"StaffProfile_staff_header_prev__ImXKU",staff_header_next:"StaffProfile_staff_header_next__jjoJr",staff_header_close:"StaffProfile_staff_header_close__wXG-N",staff_profile_photo_name:"StaffProfile_staff_profile_photo_name__WWUV4",staff_profile_photo_index:"StaffProfile_staff_profile_photo_index__-yyx9",each_info_container:"StaffProfile_each_info_container__Mo3TB",each_field_text:"StaffProfile_each_field_text__vvAvg",each_field_text_value:"StaffProfile_each_field_text_value__k1OsE",universal_hr:"StaffProfile_universal_hr__w130J",staff_profile_photo_container:"StaffProfile_staff_profile_photo_container__rFPEV",staff_profile_photo_info:"StaffProfile_staff_profile_photo_info__CxVDi",staff_profile_photo_image:"StaffProfile_staff_profile_photo_image__5f2cC",staff_profile_photo_edit:"StaffProfile_staff_profile_photo_edit__y03dk",each_field_container:"StaffProfile_each_field_container__0qKjw",each_field:"StaffProfile_each_field__18G-9",student_attendane_container:"StaffProfile_student_attendane_container__64BII",student_attendance_heading:"StaffProfile_student_attendance_heading__0hW2K",colours:"StaffProfile_colours__-7mIV",monthColours:"StaffProfile_monthColours__A3asC",percentage:"StaffProfile_percentage__GO1RT",presentcount:"StaffProfile_presentcount__u30HH",absentcount:"StaffProfile_absentcount__d+utq",link_hold_container:"StaffProfile_link_hold_container__0dRjX",link_hold_container_hostel:"StaffProfile_link_hold_container_hostel__LcldT",card_hold_container:"StaffProfile_card_hold_container__HQQcE",admission_fees:"StaffProfile_admission_fees__MoZHM",certificate_btn_container:"StaffProfile_certificate_btn_container__jui9m",certificate_btn:"StaffProfile_certificate_btn__3NWfg",admission_actions:"StaffProfile_admission_actions__ayyJD",staff_designation_btn:"StaffProfile_staff_designation_btn__4C3h7",ospp_header:"StaffProfile_ospp_header__oteF5",ospph_img:"StaffProfile_ospph_img__gPivu"}}}]);
//# sourceMappingURL=76043.d090fc4e.chunk.js.map
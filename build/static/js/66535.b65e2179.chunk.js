"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[66535,63687,21348],{46370:(e,a,t)=>{t.d(a,{Z:()=>i});t(72791);const n="Card_card__YVxIv";var o=t(80184);const i=function(e){let{img:a,name:t,customStyle:i}=e;return(0,o.jsxs)("div",{className:n,style:i,children:[(0,o.jsx)("img",{src:a,alt:""}),(0,o.jsx)("h6",{children:t})]})}},66535:(e,a,t)=>{t.r(a),t.d(a,{default:()=>T});var n=t(72791),o=t(92717),i=t(98094),_=t(16871),l=t(43504),r=t(39230),s=t(20772),c=t(46370),d=t(80184);const m=()=>{const{t:e}=(0,r.$G)(),a=(0,_.UO)();return(0,d.jsxs)("div",{className:o.Z.institute_setting_tab,children:[(0,d.jsx)("div",{className:o.Z.institute_admission,children:(0,d.jsx)(l.rU,{to:"/q/".concat(a.username,"/institute/member/staff?type=form"),children:(0,d.jsx)(c.Z,{name:e("staff_form_setting"),img:"/images/member_tab/institute/form-setting-icon.svg",customStyle:{height:"100%"}})})}),(0,d.jsx)("div",{className:o.Z.institute_admission,children:(0,d.jsx)(l.rU,{to:"/q/".concat(a.username,"/institute/member/student?type=form"),children:(0,d.jsx)(c.Z,{name:e("student_form_setting"),img:"/images/member_tab/institute/form-setting-icon.svg",customStyle:{height:"100%"}})})}),(0,d.jsx)("div",{className:o.Z.institute_admission,children:(0,d.jsx)(l.rU,{to:"/q/".concat(a.username,"/settings"),children:(0,d.jsx)(c.Z,{name:e("profile_form_setting"),img:"/images/member_tab/institute/profile-setting-icon.svg",customStyle:{height:"100%"}})})}),(0,d.jsx)("div",{className:o.Z.institute_admission,children:(0,d.jsx)(l.rU,{to:"/q/".concat(a.username,"/other/setting?a=department"),children:(0,d.jsx)(c.Z,{name:e("department_tab_controller"),img:"/images/member_tab/institute/form-setting-icon.svg",customStyle:{height:"100%"}})})}),(0,d.jsx)("div",{className:o.Z.institute_admission,children:(0,d.jsx)(l.rU,{to:"/q/".concat(a.username,"/other/setting?a=class"),children:(0,d.jsx)(c.Z,{name:e("class_tab_controller"),img:"/images/member_tab/institute/form-setting-icon.svg",customStyle:{height:"100%"}})})}),(0,d.jsx)("div",{className:o.Z.institute_admission,children:(0,d.jsx)(l.rU,{to:"/q/".concat(a.username,"/other/setting?a=subject"),children:(0,d.jsx)(c.Z,{name:e("subject_tab_controller"),img:"/images/member_tab/institute/form-setting-icon.svg",customStyle:{height:"100%"}})})})]})};var f=t(63687),g=t(21348),u=t(90904),h=t(90865),v=t(56959),b=t(85794),x=t(93339);const p=e=>{let{did:a}=e;const{t:t}=(0,r.$G)(),[o,i]=(0,n.useState)({all_staff:!0,mentor:!0,fees:!0,checklist:!0,examination:!0,copo:!0,malicious:!0,backlog:!0,holiday:!0,setting:!0,complaint:!0}),[_,l]=(0,n.useState)({open:!1,msg:"",variant:"error"}),[s]=(0,x.EI)(),{departmentTabManage:c}=(0,x.jU)({data:{did:a},skip:!a});(0,n.useEffect)((()=>{var e,a,t,n,o,_,l,r,s,d,m;null!==c&&void 0!==c&&c.tab_manage&&i({all_staff:null===c||void 0===c||null===(e=c.tab_manage)||void 0===e?void 0:e.all_staff,mentor:null===c||void 0===c||null===(a=c.tab_manage)||void 0===a?void 0:a.mentor,fees:null===c||void 0===c||null===(t=c.tab_manage)||void 0===t?void 0:t.fees,checklist:null===c||void 0===c||null===(n=c.tab_manage)||void 0===n?void 0:n.checklist,examination:null===c||void 0===c||null===(o=c.tab_manage)||void 0===o?void 0:o.examination,copo:null===c||void 0===c||null===(_=c.tab_manage)||void 0===_?void 0:_.copo,malicious:null===c||void 0===c||null===(l=c.tab_manage)||void 0===l?void 0:l.malicious,backlog:null===c||void 0===c||null===(r=c.tab_manage)||void 0===r?void 0:r.backlog,holiday:null===c||void 0===c||null===(s=c.tab_manage)||void 0===s?void 0:s.holiday,complaint:null===c||void 0===c||null===(d=c.tab_manage)||void 0===d?void 0:d.complaint,setting:null===c||void 0===c||null===(m=c.tab_manage)||void 0===m?void 0:m.setting})}),[null===c||void 0===c?void 0:c.tab_manage]);const m=(e,t)=>{const n={...o};for(let a in n)a===e&&(n[a]=t);s({did:a,tabManage:{department_tab_manage:n}}).then((()=>{l({msg:"Updated",open:!0,variant:"success"})})).catch({}),i((a=>({...a,[e]:t})))};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(f.default,{children:[(0,d.jsx)(g.default,{children:(0,d.jsx)("div",{className:v.Z.fm_header_container,children:(0,d.jsx)("h6",{children:t("department_tab_controller")})})}),(0,d.jsx)(u.Z,{}),(0,d.jsxs)(g.default,{customStyle:{paddingTop:"0"},children:[(0,d.jsxs)("div",{className:v.Z.fm_search,children:[(0,d.jsx)(h.Z,{labelHeading:t("all_staff"),checkedToggle:o.all_staff,onToggleHandler:e=>m("all_staff",e.target.checked),customContainer:{flex:"1 1 33%"}}),(0,d.jsx)(h.Z,{labelHeading:t("mentor"),checkedToggle:o.mentor,onToggleHandler:e=>m("mentor",e.target.checked),customContainer:{flex:"1 1 33%"}}),(0,d.jsx)(h.Z,{labelHeading:t("fees"),checkedToggle:o.fees,onToggleHandler:e=>m("fees",e.target.checked),customContainer:{flex:"1 1 33%"}})]}),(0,d.jsx)(u.Z,{}),(0,d.jsxs)("div",{className:v.Z.fm_search,children:[(0,d.jsx)(h.Z,{labelHeading:t("checklist"),checkedToggle:o.checklist,onToggleHandler:e=>m("checklist",e.target.checked),customContainer:{flex:"1 1 33%"}}),(0,d.jsx)(h.Z,{labelHeading:t("examination"),checkedToggle:o.examination,onToggleHandler:e=>m("examination",e.target.checked),customContainer:{flex:"1 1 33%"}}),(0,d.jsx)(h.Z,{labelHeading:t("copo"),checkedToggle:o.copo,onToggleHandler:e=>m("copo",e.target.checked),customContainer:{flex:"1 1 33%"}})]}),(0,d.jsx)(u.Z,{}),(0,d.jsxs)("div",{className:v.Z.fm_search,children:[(0,d.jsx)(h.Z,{labelHeading:t("malicious"),checkedToggle:o.malicious,onToggleHandler:e=>m("malicious",e.target.checked),customContainer:{flex:"1 1 33%"}}),(0,d.jsx)(h.Z,{labelHeading:t("backlog"),checkedToggle:o.backlog,onToggleHandler:e=>m("backlog",e.target.checked),customContainer:{flex:"1 1 33%"}}),(0,d.jsx)(h.Z,{labelHeading:t("holiday"),checkedToggle:o.holiday,onToggleHandler:e=>m("holiday",e.target.checked),customContainer:{flex:"1 1 33%"}})]}),(0,d.jsx)(u.Z,{}),(0,d.jsxs)("div",{className:v.Z.fm_search,children:[(0,d.jsx)(h.Z,{labelHeading:t("complaint"),checkedToggle:o.complaint,onToggleHandler:e=>m("complaint",e.target.checked),customContainer:{flex:"1 1 33%"}}),(0,d.jsx)(h.Z,{labelHeading:t("setting"),checkedToggle:o.setting,onToggleHandler:e=>m("setting",e.target.checked),customContainer:{flex:"1 1 33%"}}),(0,d.jsx)("div",{style:{flex:"1 1 33%"}})]})]})]}),(0,d.jsx)(b.Z,{eventState:_,eventStateHandler:l})]})};var j=t(95048),k=t(29392);const y=e=>{let{did:a}=e;const{t:t}=(0,r.$G)(),[o,i]=(0,n.useState)({catalog:!0,attendance:!0,assignment:!0,examination:!0,academic:!0,copo:!0,setting:!0,mcq:!0}),[_,l]=(0,n.useState)({open:!1,msg:"",variant:"error"}),[s]=(0,k.uH)(),{subjectTabManage:c}=(0,k.iu)({data:{did:a},skip:!a});(0,n.useEffect)((()=>{var e,a,t,n,o,_,l,r;null!==c&&void 0!==c&&c.tab_manage&&i({catalog:null===c||void 0===c||null===(e=c.tab_manage)||void 0===e?void 0:e.catalog,attendance:null===c||void 0===c||null===(a=c.tab_manage)||void 0===a?void 0:a.attendance,assignment:null===c||void 0===c||null===(t=c.tab_manage)||void 0===t?void 0:t.assignment,examination:null===c||void 0===c||null===(n=c.tab_manage)||void 0===n?void 0:n.examination,academic:null===c||void 0===c||null===(o=c.tab_manage)||void 0===o?void 0:o.academic,copo:null===c||void 0===c||null===(_=c.tab_manage)||void 0===_?void 0:_.copo,setting:null===c||void 0===c||null===(l=c.tab_manage)||void 0===l?void 0:l.setting,mcq:null===c||void 0===c||null===(r=c.tab_manage)||void 0===r?void 0:r.mcq})}),[null===c||void 0===c?void 0:c.tab_manage]);const m=(e,t)=>{const n={...o};for(let a in n)a===e&&(n[a]=t);s({did:a,tabManage:{subject_tab_manage:n}}).then((()=>{l({msg:"Updated",open:!0,variant:"success"})})).catch({}),i((a=>({...a,[e]:t})))};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(f.default,{children:[(0,d.jsx)(g.default,{children:(0,d.jsx)("div",{className:v.Z.fm_header_container,children:(0,d.jsx)("h6",{children:t("subject_tab_controller")})})}),(0,d.jsx)(u.Z,{}),(0,d.jsxs)(g.default,{customStyle:{paddingTop:"0"},children:[(0,d.jsxs)("div",{className:v.Z.fm_search,children:[(0,d.jsx)(h.Z,{labelHeading:t("catalog"),checkedToggle:o.catalog,onToggleHandler:e=>m("catalog",e.target.checked),customContainer:{flex:"1 1 33%"}}),(0,d.jsx)(h.Z,{labelHeading:t("attendance"),checkedToggle:o.attendance,onToggleHandler:e=>m("attendance",e.target.checked),customContainer:{flex:"1 1 33%"}}),(0,d.jsx)(h.Z,{labelHeading:t("assignment"),checkedToggle:o.assignment,onToggleHandler:e=>m("assignment",e.target.checked),customContainer:{flex:"1 1 33%"}})]}),(0,d.jsx)(u.Z,{}),(0,d.jsxs)("div",{className:v.Z.fm_search,children:[(0,d.jsx)(h.Z,{labelHeading:t("examination"),checkedToggle:o.examination,onToggleHandler:e=>m("examination",e.target.checked),customContainer:{flex:"1 1 33%"}}),(0,d.jsx)(h.Z,{labelHeading:t("academics_teachings"),checkedToggle:o.academic,onToggleHandler:e=>m("academic",e.target.checked),customContainer:{flex:"1 1 33%"}}),(0,d.jsx)(h.Z,{labelHeading:t("co_mapping_and_attainment"),checkedToggle:o.copo,onToggleHandler:e=>m("copo",e.target.checked),customContainer:{flex:"1 1 33%"}})]}),(0,d.jsx)(u.Z,{}),(0,d.jsx)(u.Z,{}),(0,d.jsxs)("div",{className:v.Z.fm_search,children:[(0,d.jsx)(h.Z,{labelHeading:t("setting"),checkedToggle:o.setting,onToggleHandler:e=>m("setting",e.target.checked),customContainer:{flex:"1 1 33%"}}),(0,d.jsx)(h.Z,{labelHeading:t("mcqs"),checkedToggle:o.mcq,onToggleHandler:e=>m("mcq",e.target.checked),customContainer:{flex:"1 1 33%"}}),(0,d.jsx)("div",{style:{flex:"1 1 33%"}})]})]})]}),(0,d.jsx)(b.Z,{eventState:_,eventStateHandler:l})]})};var Z=t(41127);const S=e=>{let{did:a}=e;const{t:t}=(0,r.$G)(),[o,i]=(0,n.useState)({catalog:!0,batch_standard:!0,attendance:!0,leave_and_transfer:!0,fees:!0,timetable:!0,checklist:!0,behaviour:!0,report_card:!0,promote_student:!0,complaint:!0,setting:!0}),[_,l]=(0,n.useState)({open:!1,msg:"",variant:"error"}),[s]=(0,Z.cS)(),{classTabManage:c}=(0,Z.lF)({data:{did:a},skip:!a});(0,n.useEffect)((()=>{var e,a,t,n,o,_,l,r,s,d,m,f;null!==c&&void 0!==c&&c.tab_manage&&i({catalog:null===c||void 0===c||null===(e=c.tab_manage)||void 0===e?void 0:e.catalog,batch_standard:null===c||void 0===c||null===(a=c.tab_manage)||void 0===a?void 0:a.batch_standard,attendance:null===c||void 0===c||null===(t=c.tab_manage)||void 0===t?void 0:t.attendance,leave_and_transfer:null===c||void 0===c||null===(n=c.tab_manage)||void 0===n?void 0:n.leave_and_transfer,fees:null===c||void 0===c||null===(o=c.tab_manage)||void 0===o?void 0:o.fees,timetable:null===c||void 0===c||null===(_=c.tab_manage)||void 0===_?void 0:_.timetable,checklist:null===c||void 0===c||null===(l=c.tab_manage)||void 0===l?void 0:l.checklist,behaviour:null===c||void 0===c||null===(r=c.tab_manage)||void 0===r?void 0:r.behaviour,report_card:null===c||void 0===c||null===(s=c.tab_manage)||void 0===s?void 0:s.report_card,complaint:null===c||void 0===c||null===(d=c.tab_manage)||void 0===d?void 0:d.complaint,promote_student:null===c||void 0===c||null===(m=c.tab_manage)||void 0===m?void 0:m.promote_student,setting:null===c||void 0===c||null===(f=c.tab_manage)||void 0===f?void 0:f.setting})}),[null===c||void 0===c?void 0:c.tab_manage]);const m=(e,t)=>{const n={...o};for(let a in n)a===e&&(n[a]=t);s({did:a,tabManage:{class_tab_manage:n}}).then((()=>{l({msg:"Updated",open:!0,variant:"success"})})).catch({}),i((a=>({...a,[e]:t})))};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(f.default,{children:[(0,d.jsx)(g.default,{children:(0,d.jsx)("div",{className:v.Z.fm_header_container,children:(0,d.jsx)("h6",{children:t("class_tab_controller")})})}),(0,d.jsx)(u.Z,{}),(0,d.jsxs)(g.default,{customStyle:{paddingTop:"0"},children:[(0,d.jsxs)("div",{className:v.Z.fm_search,children:[(0,d.jsx)(h.Z,{labelHeading:t("class_catalog"),checkedToggle:o.catalog,onToggleHandler:e=>m("catalog",e.target.checked),customContainer:{flex:"1 1 33%"}}),(0,d.jsx)(h.Z,{labelHeading:t("hostel_tab_batch"),checkedToggle:o.batch_standard,onToggleHandler:e=>m("batch_standard",e.target.checked),customContainer:{flex:"1 1 33%"}}),(0,d.jsx)(h.Z,{labelHeading:t("attendance"),checkedToggle:o.attendance,onToggleHandler:e=>m("attendance",e.target.checked),customContainer:{flex:"1 1 33%"}})]}),(0,d.jsx)(u.Z,{}),(0,d.jsxs)("div",{className:v.Z.fm_search,children:[(0,d.jsx)(h.Z,{labelHeading:t("leaves_and_transfer"),checkedToggle:o.leave_and_transfer,onToggleHandler:e=>m("leave_and_transfer",e.target.checked),customContainer:{flex:"1 1 33%"}}),(0,d.jsx)(h.Z,{labelHeading:t("class_fees"),checkedToggle:o.fees,onToggleHandler:e=>m("fees",e.target.checked),customContainer:{flex:"1 1 33%"}}),(0,d.jsx)(h.Z,{labelHeading:t("time_table"),checkedToggle:o.timetable,onToggleHandler:e=>m("timetable",e.target.checked),customContainer:{flex:"1 1 33%"}})]}),(0,d.jsx)(u.Z,{}),(0,d.jsxs)("div",{className:v.Z.fm_search,children:[(0,d.jsx)(h.Z,{labelHeading:t("checklist"),checkedToggle:o.checklist,onToggleHandler:e=>m("checklist",e.target.checked),customContainer:{flex:"1 1 33%"}}),(0,d.jsx)(h.Z,{labelHeading:t("behaviour"),checkedToggle:o.behaviour,onToggleHandler:e=>m("behaviour",e.target.checked),customContainer:{flex:"1 1 33%"}}),(0,d.jsx)(h.Z,{labelHeading:t("final_report"),checkedToggle:o.report_card,onToggleHandler:e=>m("report_card",e.target.checked),customContainer:{flex:"1 1 33%"}})]}),(0,d.jsx)(u.Z,{}),(0,d.jsxs)("div",{className:v.Z.fm_search,children:[(0,d.jsx)(h.Z,{labelHeading:t("complaint"),checkedToggle:o.complaint,onToggleHandler:e=>m("complaint",e.target.checked),customContainer:{flex:"1 1 33%"}}),(0,d.jsx)("div",{style:{flex:"1 1 33%"},children:(0,d.jsx)(h.Z,{labelHeading:t("promote_student"),checkedToggle:o.promote_student,onToggleHandler:e=>m("promote_student",e.target.checked),customContainer:{flex:"1 1 33%"}})}),(0,d.jsx)("div",{style:{flex:"1 1 33%"},children:(0,d.jsx)(h.Z,{labelHeading:t("setting"),checkedToggle:o.setting,onToggleHandler:e=>m("setting",e.target.checked),customContainer:{flex:"1 1 33%"}})})]})]})]}),(0,d.jsx)(b.Z,{eventState:_,eventStateHandler:l})]})},T=()=>{const{t:e}=(0,r.$G)(),a=(0,_.s0)(),t=(0,j.v9)((e=>e.idChange.id)),[n]=(0,l.lr)();return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("div",{className:o.Z.navbar,children:(0,d.jsx)(s.default,{status:"home"})}),(0,d.jsx)("div",{className:o.Z.goback_container,children:(0,d.jsxs)("div",{className:o.Z.goback_container_text,onClick:()=>{a(-1)},children:[(0,d.jsx)("img",{src:"/images/arr-left-white.svg",alt:"go back icon"}),(0,d.jsx)("h6",{className:o.Z.goback_container_text_go,children:e("go_back")})]})}),n.get("a")?"department"===n.get("a")?(0,d.jsx)("div",{className:o.Z.student_from_container,style:{border:"none"},children:(0,d.jsx)(p,{did:t})}):"class"===n.get("a")?(0,d.jsx)("div",{className:o.Z.student_from_container,style:{border:"none"},children:(0,d.jsx)(S,{did:t})}):"subject"===n.get("a")?(0,d.jsx)("div",{className:o.Z.student_from_container,style:{border:"none"},children:(0,d.jsx)(y,{did:t})}):null:(0,d.jsxs)("div",{className:o.Z.student_from_container,children:[(0,d.jsx)("h6",{className:o.Z.student_from_fill,children:e("institute_setting")}),(0,d.jsx)(i.Z,{customStyle:{width:"100%"}}),(0,d.jsx)(m,{})]})]})}},98094:(e,a,t)=>{t.d(a,{Z:()=>i});t(72791);var n=t(55136),o=t(80184);const i=e=>{let{customStyle:a}=e;return(0,o.jsx)("hr",{className:n.Z.universal_hr,style:{...a}})}},90865:(e,a,t)=>{t.d(a,{Z:()=>l});t(72791);var n=t(89891),o=t(39320),i=t(80184);const _={inputProps:{"aria-label":"Switch demo"}},l=e=>{let{customContainer:a,customLabel:t,labelDescription:l,labelHeading:r,defaultLabel:s,checkedToggle:c,onToggleHandler:d,children:m}=e;return(0,i.jsxs)("div",{className:o.Z.form_toggle_container,style:{...a},children:[(0,i.jsxs)("div",{className:o.Z.form_toggle_label,children:[s?(0,i.jsx)(n.Z,{..._,defaultChecked:!0,disabled:!0}):(0,i.jsx)(n.Z,{..._,checked:c,onChange:d}),(0,i.jsx)("span",{style:{...t},children:r})]}),l&&(0,i.jsx)("div",{className:o.Z.form_toggle_description,children:l}),m]})}},41127:(e,a,t)=>{t.d(a,{il:()=>h,Fu:()=>v,cS:()=>u,lF:()=>g});var n=t(83426),o=t(94811);const i=e=>e.query({query:e=>{var a;return"/v1/class/tab/manage/".concat(null===e||void 0===e?void 0:e.did,"/query?flow=").concat(null!==(a=null===e||void 0===e?void 0:e.flow)&&void 0!==a?a:"")},providesTags:["Tab_Manage"],serializeQueryArgs:e=>{let{endpointName:a}=e;return a},forceRefetch(e){let{currentArg:a,previousArg:t}=e;return a!==t}}),_=e=>e.mutation({query:e=>({url:"/v1/class/tab/manage/".concat(null===e||void 0===e?void 0:e.did,"/query"),method:o.Q0,body:e.tabManage}),invalidatesTags:["Tab_Manage"]}),l=e=>e.query({query:e=>"/v1/ins/".concat(e.id,"/unapprove-student/list/combined/query?page=").concat(e.page,"&limit=").concat(e.limit,"&search=").concat(null===e||void 0===e?void 0:e.search),serializeQueryArgs:e=>{let{endpointName:a}=e;return a},transformResponse:(e,a,t)=>null!==t&&void 0!==t&&t.search?{search:!0,list:null===e||void 0===e?void 0:e.studentIns}:{page:null===t||void 0===t?void 0:t.page,list:null===e||void 0===e?void 0:e.studentIns},merge:(e,a)=>{var t;return null!==a&&void 0!==a&&a.search||1===(null===a||void 0===a?void 0:a.page)?a:void(null===e||void 0===e||null===(t=e.list)||void 0===t||t.push(...null===a||void 0===a?void 0:a.list))},forceRefetch(e){let{currentArg:a,previousArg:t}=e;return a!==t}}),r=e=>e.mutation({query:e=>({url:"/v1/feed/filter/by/trigger/class/catalog/".concat(null===e||void 0===e?void 0:e.cid,"?sort_query=").concat(null===e||void 0===e?void 0:e.sort_query),method:o.Q0,body:e.bodyParameter})}),s=n.H.injectEndpoints({endpoints:e=>({classTabManage:i(e),classTabController:_(e),catalogClassAllStudentList:l(e),classCatalogReshuffle:r(e)})}),{useClassTabManageQuery:c,useClassTabControllerMutation:d,useCatalogClassAllStudentListQuery:m,useClassCatalogReshuffleMutation:f}=s,g=e=>{const{data:a,refetch:t,isFetching:n}=c(e.data,{skip:e.skip});return{classTabManage:a,classTabManageRefetch:t,classTabManageLoading:n}},u=()=>{const[e]=d();return[e]},h=e=>{const{data:a,refetch:t,isFetching:n}=m(null===e||void 0===e?void 0:e.data,{skip:e.skip});return{catalogClassAllStudentList:a,catalogClassAllStudentListRefetch:t,catalogClassAllStudentListLoading:n}},v=()=>{const[e]=f();return[e]}},90904:(e,a,t)=>{t.d(a,{Z:()=>i});const n="BorderBottom_split_content__RVPoh";var o=t(80184);const i=e=>{let{customStyleBorder:a}=e;return(0,o.jsx)("hr",{className:n,style:a})}},63687:(e,a,t)=>{t.r(a),t.d(a,{default:()=>i});var n=t(59393),o=t(80184);const i=e=>{let{customStyle:a,children:t}=e;return(0,o.jsx)("div",{className:n.Z.user_member_container_wrapper,style:a,children:t})}},21348:(e,a,t)=>{t.r(a),t.d(a,{default:()=>i});var n=t(59393),o=t(80184);const i=e=>{let{customStyle:a,children:t}=e;return(0,o.jsx)("div",{className:n.Z.user_member_content_wrapper,style:a,children:t})}},85794:(e,a,t)=>{t.d(a,{Z:()=>c});var n=t(72791),o=t(54164),i=t(15783),_=t(98684),l=t(80184);const r=e=>{let{onClose:a,isVariant:t,isHide:n,children:r}=e;return o.createPortal((0,l.jsx)("div",{children:(0,l.jsx)("div",{className:n?i.Z.notify_hide_overlay:i.Z.notify_overlay,children:(0,l.jsxs)("div",{className:i.Z.notify_container,style:{"--notify-bg-color":t},children:[r,(0,l.jsx)("img",{src:"".concat(_.Fk,"/close-white.svg"),alt:"close icon",onClick:a,className:i.Z.notify_close})]})})}),document.getElementById("notify-alert"))},s={success:"green",error:"#ed4a4a",warning:"orange"},c=e=>{var a;let{eventState:t,eventStateHandler:o}=e;const[_,c]=(0,n.useState)(!1);return null!==t&&void 0!==t&&t.open?(0,l.jsx)(r,{onClose:()=>{c(!0);let e=setTimeout((()=>{o((e=>({...e,open:!1,msg:"",variant:"success"}))),c(!1)}),500);return()=>clearTimeout(e)},isVariant:s[null===t||void 0===t?void 0:t.variant],isHide:_,children:(0,l.jsx)("h6",{className:i.Z.notify_message,children:null!==(a=null===t||void 0===t?void 0:t.msg)&&void 0!==a?a:""})}):null}},92717:(e,a,t)=>{t.d(a,{Z:()=>n});const n={navbar:"InstituteSetting_navbar__dEGRd",goback_container:"InstituteSetting_goback_container__Xrt5O",goback_container_text:"InstituteSetting_goback_container_text__lvoLi",goback_container_text_go:"InstituteSetting_goback_container_text_go__WDylC",student_from_container:"InstituteSetting_student_from_container__JJfDE",student_from_fill:"InstituteSetting_student_from_fill__SqSZZ",institute_setting_tab:"InstituteSetting_institute_setting_tab__hEUkN",institute_admission:"InstituteSetting_institute_admission__8hkSQ",institute_admission_preview:"InstituteSetting_institute_admission_preview__QsJiz"}},55136:(e,a,t)=>{t.d(a,{Z:()=>n});const n={staff_profile_container:"StaffProfile_staff_profile_container__GG5AM",staff_header_container:"StaffProfile_staff_header_container__avRlK",staff_header_function:"StaffProfile_staff_header_function__l9cDM",staff_header_text:"StaffProfile_staff_header_text__XX8rQ",staff_header_prev:"StaffProfile_staff_header_prev__ImXKU",staff_header_next:"StaffProfile_staff_header_next__jjoJr",staff_header_close:"StaffProfile_staff_header_close__wXG-N",staff_profile_photo_name:"StaffProfile_staff_profile_photo_name__WWUV4",staff_profile_photo_index:"StaffProfile_staff_profile_photo_index__-yyx9",each_info_container:"StaffProfile_each_info_container__Mo3TB",each_field_text:"StaffProfile_each_field_text__vvAvg",each_field_text_value:"StaffProfile_each_field_text_value__k1OsE",universal_hr:"StaffProfile_universal_hr__w130J",staff_profile_photo_container:"StaffProfile_staff_profile_photo_container__rFPEV",staff_profile_photo_info:"StaffProfile_staff_profile_photo_info__CxVDi",staff_profile_photo_image:"StaffProfile_staff_profile_photo_image__5f2cC",staff_profile_photo_edit:"StaffProfile_staff_profile_photo_edit__y03dk",each_field_container:"StaffProfile_each_field_container__0qKjw",each_field:"StaffProfile_each_field__18G-9",student_attendane_container:"StaffProfile_student_attendane_container__64BII",student_attendance_heading:"StaffProfile_student_attendance_heading__0hW2K",colours:"StaffProfile_colours__-7mIV",monthColours:"StaffProfile_monthColours__A3asC",percentage:"StaffProfile_percentage__GO1RT",presentcount:"StaffProfile_presentcount__u30HH",absentcount:"StaffProfile_absentcount__d+utq",link_hold_container:"StaffProfile_link_hold_container__0dRjX",link_hold_container_hostel:"StaffProfile_link_hold_container_hostel__LcldT",card_hold_container:"StaffProfile_card_hold_container__HQQcE",admission_fees:"StaffProfile_admission_fees__MoZHM",certificate_btn_container:"StaffProfile_certificate_btn_container__jui9m",admission_actions:"StaffProfile_admission_actions__ayyJD",staff_designation_btn:"StaffProfile_staff_designation_btn__4C3h7",ospp_header:"StaffProfile_ospp_header__oteF5",ospph_img:"StaffProfile_ospph_img__gPivu",cbc_row:"StaffProfile_cbc_row__rm60T",certificate_btn:"StaffProfile_certificate_btn__3NWfg"}},39320:(e,a,t)=>{t.d(a,{Z:()=>n});const n={staff_form_container:"UniversalForm_staff_form_container__QRs6I",staff_form_header_container:"UniversalForm_staff_form_header_container__+cQn3",form_header_container:"UniversalForm_form_header_container__GVVNM",form_header_list:"UniversalForm_form_header_list__fHs8S",form_header_code:"UniversalForm_form_header_code__LsmbM",form_toggle_description:"UniversalForm_form_toggle_description__281dv",form_toggle_label:"UniversalForm_form_toggle_label__mbisD",form_header_content:"UniversalForm_form_header_content__Y3p2k",form_toggle_container:"UniversalForm_form_toggle_container__D0bu0",form_checkbox_container:"UniversalForm_form_checkbox_container__bxzuK",staff_form_header_container_actions:"UniversalForm_staff_form_header_container_actions__2Ynt9",staff_header_text:"UniversalForm_staff_header_text__dQvPP"}},59393:(e,a,t)=>{t.d(a,{Z:()=>n});const n={user_member_header_wrapper:"UserMember_user_member_header_wrapper__GbnRw",umhw_cover:"UserMember_umhw_cover__9nFBA",umhw_cover_photo:"UserMember_umhw_cover_photo__SlMdy",umhw_cover_label:"UserMember_umhw_cover_label__3yZV3",umhw_cover_camera:"UserMember_umhw_cover_camera__vKOnO",umhw_info_container:"UserMember_umhw_info_container__ce+81",umhw_info_container_header:"UserMember_umhw_info_container_header__FD+-b",umhw_info_container_footer:"UserMember_umhw_info_container_footer__lVzFw",user_member_tabs_wrapper:"UserMember_user_member_tabs_wrapper__mhpkS",user_member_container_wrapper:"UserMember_user_member_container_wrapper__xbfdC",user_member_content_wrapper:"UserMember_user_member_content_wrapper__PP2xI",uf_link:"UserMember_uf_link__usZfM"}},56959:(e,a,t)=>{t.d(a,{Z:()=>n});const n={fm_header_container:"FinanceManager_fm_header_container__4809h",fm_header_start_container:"FinanceManager_fm_header_start_container__MIMYE",fm_title_heading:"FinanceManager_fm_title_heading__K-4lB",fm_search:"FinanceManager_fm_search__42NnY",fm_search_container:"FinanceManager_fm_search_container__23+f8",fm_search_container_inner:"FinanceManager_fm_search_container_inner__YySAp",fm_search_icon:"FinanceManager_fm_search_icon__WftS9",fm_all_time_data_container:"FinanceManager_fm_all_time_data_container__jIgPj",fm_all_time_data:"FinanceManager_fm_all_time_data__Re+uG",fm_total_amount:"FinanceManager_fm_total_amount__wAS13",fm_both_filter:"FinanceManager_fm_both_filter__25sOi",fm_both_filter_with_name:"FinanceManager_fm_both_filter_with_name__-29YH",fm_add_button:"FinanceManager_fm_add_button__9h09Q",fm_search_full:"FinanceManager_fm_search_full__vDPwG",fm_search_full_container:"FinanceManager_fm_search_full_container__PVgHt",fm_search_full_container_inner:"FinanceManager_fm_search_full_container_inner__tmOa6",fm_search_full_icon:"FinanceManager_fm_search_full_icon__BaRMK",fm_fs_container:"FinanceManager_fm_fs_container__cQS8l",fm_fs_container_inner:"FinanceManager_fm_fs_container_inner__eLCO6",fm_fs_refetch_container:"FinanceManager_fm_fs_refetch_container__W3BMl",fm_fs_refetch_container_inner:"FinanceManager_fm_fs_refetch_container_inner__y6kWF",fm_fund_card:"FinanceManager_fm_fund_card__Xo-wt",fm_fund_total:"FinanceManager_fm_fund_total__Z-m5Y",fm_fund_total_inner:"FinanceManager_fm_fund_total_inner__WjTx9",fm_flex:"FinanceManager_fm_flex__KK95u",fm_other_admission:"FinanceManager_fm_other_admission__m7mDo",lms_rule_container:"FinanceManager_lms_rule_container__8hkCA",fm_header_paragraph:"FinanceManager_fm_header_paragraph__x9942",ossa_form:"FinanceManager_ossa_form__trk++"}},15783:(e,a,t)=>{t.d(a,{Z:()=>n});const n={notify_backdrop:"Utils_notify_backdrop__saL0O",notify_overlay:"Utils_notify_overlay__GtPc5",notify_hide_overlay:"Utils_notify_hide_overlay__MYvkC",notify_overlay_animation:"Utils_notify_overlay_animation__pcASm",notify_hide_overlay_animation:"Utils_notify_hide_overlay_animation__UKRcG",notify_container:"Utils_notify_container__O8DBA",notify_message:"Utils_notify_message__PHwKo",notify_close:"Utils_notify_close__IwjyA",modal_backdrop:"Utils_modal_backdrop__WBquw",modal_overlay:"Utils_modal_overlay__Yy-AV",modal_hide_overlay:"Utils_modal_hide_overlay__elt3A",navbar_modal_hide_overlay:"Utils_navbar_modal_hide_overlay__yqj5q",navbar_modal_overlay:"Utils_navbar_modal_overlay__6ub8g",modal_hide_overlay_animation:"Utils_modal_hide_overlay_animation__d3TNp",navbar_modal_overlay_animation:"Utils_navbar_modal_overlay_animation__Ypk9u",navbar_modal_hide_overlay_animation:"Utils_navbar_modal_hide_overlay_animation__QLEse",empty_container:"Utils_empty_container__-VyCI",modal_overlay_animation:"Utils_modal_overlay_animation__zkjsk"}}}]);
//# sourceMappingURL=66535.b65e2179.chunk.js.map
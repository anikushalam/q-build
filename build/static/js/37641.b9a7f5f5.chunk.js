"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[37641],{27302:(e,s,a)=>{a.d(s,{Z:()=>l});a(72791);var t=a(80272),i=a(80184);const l=e=>{let{message:s,customStyle:a}=e;return(0,i.jsx)("section",{style:{...a},className:t.Z.mark_container,children:s})}},50710:(e,s,a)=>{a.r(s),a.d(s,{default:()=>_});var t=a(72791);a(7135);const i={DModal:"CreateClass_DModal__pza9d",title:"CreateClass_title__CRjLH",input:"CreateClass_input__1Ym9U",mid:"CreateClass_mid__ti5ga",text:"CreateClass_text__ePxmn",btn:"CreateClass_btn__wnfka",notFound:"CreateClass_notFound__FilS6",item:"CreateClass_item__AXKu9",select:"CreateClass_select__E-7CD",tooltip:"CreateClass_tooltip__4Yui1",profileToolTip:"CreateClass_profileToolTip__dMV+T",triangle:"CreateClass_triangle__V7X33",triangleDisplay:"CreateClass_triangleDisplay__Rr4go",profilelist:"CreateClass_profilelist__5nZKb"};var l=a(5574),n=a(39230),c=a(33992),o=a(69721),d=a(49384),r=a(46876),u=a(57431),g=a(27302),h=a(80184);function v(e){let{options:s,switchOption:a,customStyle:t}=e;return(0,h.jsxs)("div",{className:i.profileToolTip,style:{...t},children:[(0,h.jsx)("div",{className:i.triangle}),(0,h.jsx)("div",{className:i.profilelist,children:null===s||void 0===s?void 0:s.map(((e,s)=>(0,h.jsx)("div",{value:e._id,onClick:()=>a(e),children:e.className},s)))})]})}const _=function(e){var s,a;let{departmentModal:_,hideModal:f,id:m,did:p,bid:j,edit:x,setEdit:C,editClass:S,onRefetch:N,isEditBy:b}=e;const{t:T}=(0,n.$G)(),[P,k]=(0,t.useState)(!1),[M,w]=(0,t.useState)(!0),[A,I]=(0,t.useState)(!1),[H,y]=(0,t.useState)(!1),[D,L]=(0,t.useState)([]),[R,F]=(0,t.useState)(!1),[Z,E]=(0,t.useState)(x&&(null===S||void 0===S?void 0:S.className)||T("select_standerd_")),[O,U]=(0,t.useState)({mcId:x&&(null===S||void 0===S?void 0:S.masterClassName)||"",classTitle:x&&(null===S||void 0===S?void 0:S.classTitle)||"",classHeadTitle:x&&(null===S||void 0===S?void 0:S.classHeadTitle)||"",sid:x&&(null===S||void 0===S||null===(s=S.classTeacher)||void 0===s?void 0:s._id)||"",aggregatePassingPercentage:x&&(null===S||void 0===S||null===(a=S.finalReportsSettings)||void 0===a?void 0:a.aggregatePassingPercentage)||"",optionalSubjectCount:x&&(null===S||void 0===S?void 0:S.optionalSubjectCount)||T("select_number_of_subject")}),[q,B]=(0,t.useState)(!1),[Y,z]=(0,t.useState)(x&&(null===S||void 0===S?void 0:S.classTeacher)),{allClassMaster:G}=(0,c.tx)({data:{id:m,did:p},skip:m?!p:!m}),[V]=(0,c.u2)(),[K]=(0,c.pL)(),{oneDepartmentRefetch:W}=(0,c._C)({did:p,skip:!p});(0,t.useEffect)((()=>{var e,s;x&&S&&(U({mcId:(null===S||void 0===S?void 0:S.masterClassName)||"",classTitle:(null===S||void 0===S?void 0:S.classTitle)||"",classHeadTitle:(null===S||void 0===S?void 0:S.classHeadTitle)||"",sid:(null===S||void 0===S||null===(e=S.classTeacher)||void 0===e?void 0:e._id)||"",aggregatePassingPercentage:(null===S||void 0===S||null===(s=S.finalReportsSettings)||void 0===s?void 0:s.aggregatePassingPercentage)||0,optionalSubjectCount:(null===S||void 0===S?void 0:S.optionalSubjectCount)||T("select_number_of_subject")}),E((null===S||void 0===S?void 0:S.className)||"Please select standard"),z(null===S||void 0===S?void 0:S.classTeacher))}),[x,S]),(0,t.useEffect)((()=>{null!==G&&void 0!==G&&G.classMaster&&L(null===G||void 0===G?void 0:G.classMaster)}),[G]);const X=e=>{z(e),U({...O,sid:e._id}),w(!0)};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(l.Z,{open:_,children:(0,h.jsxs)("div",{className:i.DModal,children:[(0,h.jsxs)("div",{className:i.title,children:[x?(0,h.jsx)("h5",{children:"Edit Class"}):(0,h.jsx)("h5",{children:T("add_class_n_place")}),(0,h.jsx)("img",{src:"/images/close-post-icon.svg",alt:"",onClick:()=>{f(!1),C(!1),E(T("select_standerd_")),U({mcId:"",classTitle:"",classHeadTitle:"",sid:"",aggregatePassingPercentage:0,optionalSubjectCount:T("select_number_of_subject")}),z("")}})]}),(0,h.jsx)("div",{hidden:M,className:i.notFound,children:"Please Fill all details to create a Class"}),(0,h.jsxs)("div",{className:i.item,onClick:()=>I(!A),children:[(0,h.jsx)("h6",{children:T("select_standard_grade_place")}),(0,h.jsxs)("div",{className:i.select,children:[(0,h.jsx)("p",{children:Z}),(0,h.jsx)("img",{src:"/images/select-icon.svg",alt:""})]}),A&&(0,h.jsx)("div",{className:i.tooltip,children:(0,h.jsx)(v,{options:D,switchOption:e=>{E(e.className),U({...O,mcId:e._id}),w(!0)}})})]}),(0,h.jsxs)("div",{className:i.input,children:[(0,h.jsx)("h6",{children:T("class_name")}),(0,h.jsx)("input",{type:"text",value:O.classTitle,onChange:e=>{var s;(null===(s=e.target.value)||void 0===s?void 0:s.length)<=45&&(U({...O,classTitle:e.target.value}),w(!0))},placeholder:"e.g. 6th A / FY BSC",required:!0}),(0,h.jsx)(u.Z,{maxLength:45,valueLength:O.classTitle})]}),(0,h.jsxs)("div",{className:i.mid,onClick:()=>B(!0),children:[(0,h.jsx)("img",{src:null!==Y&&void 0!==Y&&Y.staffProfilePhoto?"".concat(o.yI,"/").concat(Y.staffProfilePhoto):"/images/avatar-icon.png",alt:""}),(0,h.jsxs)("div",{className:i.text,children:[(0,h.jsx)("h6",{children:Y?"".concat(null===Y||void 0===Y?void 0:Y.staffFirstName," ").concat((null===Y||void 0===Y?void 0:Y.staffMiddleName)||""," ").concat(null===Y||void 0===Y?void 0:Y.staffLastName):"".concat(T("assign_chead")," ").concat(T("optional"))}),(0,h.jsx)("p",{children:T("search_from_joined_list")})]})]}),(0,h.jsxs)("div",{className:i.input,children:[(0,h.jsx)("h6",{children:T("give_chead_title")}),(0,h.jsx)("input",{type:"text",value:O.classHeadTitle,onChange:e=>{var s;(null===(s=e.target.value)||void 0===s?void 0:s.length)<=40&&(U({...O,classHeadTitle:e.target.value}),w(!0))},required:!0,placeholder:T("class_head_example")}),(0,h.jsx)(u.Z,{maxLength:40,valueLength:O.classHeadTitle})]}),(0,h.jsxs)("div",{className:i.input,children:[(0,h.jsxs)("h6",{children:[T("pass_percentage")," ",T("optional")]}),(0,h.jsx)("input",{type:"text",value:O.aggregatePassingPercentage,onChange:e=>{+e.target.value<=100?(U({...O,aggregatePassingPercentage:+e.target.value}),w(!0)):F(!0)},placeholder:"E.g. 34"}),R&&(0,h.jsx)(g.Z,{message:"Mark is not greater than 100"})]}),(0,h.jsxs)("div",{className:i.item,onClick:()=>y((e=>!e)),children:[(0,h.jsx)("h6",{children:T("optional_subject")}),(0,h.jsxs)("div",{className:i.select,children:[(0,h.jsx)("p",{children:O.optionalSubjectCount}),(0,h.jsx)("img",{src:"/images/select-icon.svg",alt:""})]}),H&&(0,h.jsx)("div",{className:i.tooltip,children:(0,h.jsx)(v,{customStyle:{top:"561px",right:"-51px"},options:[{className:0},{className:1},{className:2},{className:3},{className:4},{className:5}],switchOption:e=>{U({...O,optionalSubjectCount:e.className}),w(!0)}})})]}),(0,h.jsxs)("button",{className:i.btn,onClick:()=>{if(O.mcId&&O.classTitle&&O.classHeadTitle)if(k(!0),x){var e;const s={mcId:O.mcId,classTitle:(null===S||void 0===S?void 0:S.classTitle)===O.classTitle?"":O.classTitle,classHeadTitle:(null===S||void 0===S?void 0:S.classHeadTitle)===O.classHeadTitle?"":O.classHeadTitle,classTeacher:(null===S||void 0===S||null===(e=S.classTeacher)||void 0===e?void 0:e._id)===O.sid?"":O.sid,aggregatePassingPercentage:+O.aggregatePassingPercentage,optionalSubjectCount:O.optionalSubjectCount===T("select_number_of_subject")?0:+O.optionalSubjectCount};K({classDetail:s,cid:null===S||void 0===S?void 0:S._id}).then((()=>{f(!1),k(!1),C(!1),"DEPARTMENT_HEAD"===b?N():W(),U({mcId:"",classTitle:"",classHeadTitle:"",sid:"",aggregatePassingPercentage:0,optionalSubjectCount:T("select_number_of_subject")}),z("")})).catch({})}else V({classCreate:{mcId:O.mcId,classTitle:O.classTitle,classHeadTitle:O.classHeadTitle,sid:O.sid,aggregatePassingPercentage:O.aggregatePassingPercentage||0,optionalSubjectCount:O.optionalSubjectCount===T("select_number_of_subject")?0:+O.optionalSubjectCount},id:m,did:p,bid:j}).then((()=>{f(!1),k(!1),W(),U({mcId:"",classTitle:"",classHeadTitle:"",sid:"",aggregatePassingPercentage:0,optionalSubjectCount:"Please select no. of subjects one can choose"}),z("")})).catch({});else w(!1)},disabled:P,children:[x?(0,h.jsx)("p",{children:"Update"}):(0,h.jsx)("p",{children:T("create")}),P&&(0,h.jsx)("div",{children:(0,h.jsx)(d.Z,{})})]})]})}),q&&("DEPARTMENT_HEAD"===b?(0,h.jsx)(r.default,{assignHead:q,headSelect:e=>{X(e),B((e=>!e))},title:T("assign_chead"),onClose:()=>B((e=>!e)),instituteId:m,viewAs:"ADMISSION_ADMIN"}):(0,h.jsx)(r.default,{assignHead:q,headSelect:X,title:T("assign_chead"),onClose:()=>B((e=>!e))}))]})}},46876:(e,s,a)=>{a.r(s),a.d(s,{default:()=>v});var t=a(72791),i=a(23441),l=a(95048),n=a(12923),c=a(763),o=a(69721),d=a(52124),r=a(5574),u=a(39230),g=a(80184);const h=window.innerHeight,v=e=>{let{onClose:s,title:a,headSelect:v,assignHead:_,disabledId:f,instituteId:m,viewAs:p,isMultiSelect:j,selectList:x,onMultiSelect:C,onDone:S}=e;const{t:N}=(0,u.$G)(),[b,T]=(0,t.useState)(1),[P,k]=(0,t.useState)(!0),[M,w]=(0,i.YD)(),[A,I]=(0,t.useState)(""),[H,y]=t.useState([]),D=(0,l.v9)((e=>e.idChange)),{assignSearchStaff:L,assignSearchStaffRefetch:R}=(0,n.vI)({skip:"ADMISSION_ADMIN"===p?!m:!(null!==D&&void 0!==D&&D.id),search:{search:A,page:b,id:"ADMISSION_ADMIN"===p?m:null===D||void 0===D?void 0:D.id,limit:10}});t.useEffect((()=>{null!==D&&void 0!==D&&D.id&&R()}),[null===D||void 0===D?void 0:D.id,R,b]),(0,t.useEffect)((()=>{w&&P&&T((e=>e+1))}),[w,P]),t.useEffect((()=>{null!==L&&void 0!==L&&L.staff&&y(A?null===L||void 0===L?void 0:L.staff:e=>(e=>{for(let t=0;t<(null===e||void 0===e?void 0:e.length);t++)for(let i=t+1;i<(null===e||void 0===e?void 0:e.length);i++){var s,a;(null===(s=e[t])||void 0===s?void 0:s._id)===(null===(a=e[i])||void 0===a?void 0:a._id)&&(null===e||void 0===e||e.splice(i,1))}return e})([...e,...null===L||void 0===L?void 0:L.staff])),10===(null===L||void 0===L?void 0:L.staff.length)?k(!0):k(!1)}),[null===L||void 0===L?void 0:L.staff]),(0,t.useEffect)((()=>{A&&F()}),[A]);const F=()=>{R()},Z=(0,t.useCallback)((0,c.debounce)((e=>I(e)),500),[]),E=e=>{f===(null===e||void 0===e?void 0:e._id)||(j?C(e):(v(e),"ADMISSION_ADMIN"===p||s()))};return(0,g.jsx)(r.Z,{open:_,onClose:s,children:(0,g.jsxs)("div",{style:{backgroundColor:"#FAFAFA",width:"35rem",height:"".concat(h-20,"px"),overflowX:"hidden"},children:[(0,g.jsxs)("div",{className:d.Z.assign_title,style:{width:"100%"},children:[(0,g.jsx)("h5",{children:a}),j?(0,g.jsxs)("div",{className:d.Z.is_mulitselect_container,children:[(0,g.jsx)("h6",{style:{cursor:"pointer"},onClick:S,children:N("select")}),(0,g.jsx)("img",{src:"/images/close-post-icon.svg",onClick:s,alt:"staff assign pop close icon"})]}):(0,g.jsx)("img",{src:"/images/close-post-icon.svg",onClick:s,alt:"staff assign pop close icon"})]}),(0,g.jsxs)("div",{className:d.Z.assign_search_container,children:[(0,g.jsx)("input",{type:"text",placeholder:N("search"),className:d.Z.assign_search_input,onChange:e=>{return s=e.target.value,void Z(s);var s}}),(0,g.jsx)("img",{src:"/images/search-dash-icon.svg",alt:"search icon"})]}),(0,g.jsx)("div",{className:d.Z.assign_show_list,children:null===H||void 0===H?void 0:H.map(((e,s)=>(null===H||void 0===H?void 0:H.length)===s+1?(0,g.jsxs)("div",{ref:M,children:[(0,g.jsxs)("div",{className:d.Z.assign_show_list_each,style:f===e._id?{backgroundColor:"rgba(75, 26, 133, 0.1)"}:{backgroundColor:"inherit"},onClick:()=>E(e),children:[j?null!==x&&void 0!==x&&x.includes(null===e||void 0===e?void 0:e._id)?(0,g.jsx)("img",{src:"/images/checkbox-icon.svg",alt:"icon",style:{height:"1.3rem",borderRadius:"0",cursor:"pointer"}}):(0,g.jsx)("img",{style:{height:"1.3rem",borderRadius:"0",cursor:"pointer"},src:"/images/box-icon.svg",alt:"icon"}):"",(0,g.jsx)("img",{src:null!==e&&void 0!==e&&e.staffProfilePhoto?"".concat(o.yI,"/").concat(e.staffProfilePhoto):"/images/member_tab/class/default_avatar.svg",alt:"staff profile avatar"}),(0,g.jsxs)("div",{className:d.Z.assign_each_paragraph,children:[(0,g.jsx)("h6",{children:"".concat(e.staffFirstName," ").concat(null!==e&&void 0!==e&&e.staffMiddleName?null===e||void 0===e?void 0:e.staffMiddleName:""," ").concat(e.staffLastName)}),(0,g.jsxs)("p",{children:[" ",N("index")," ",null===e||void 0===e?void 0:e.staffROLLNO]})]})]}),(0,g.jsx)("hr",{})]},e._id):(0,g.jsxs)("div",{children:[(0,g.jsxs)("div",{className:d.Z.assign_show_list_each,style:f===e._id?{backgroundColor:"rgba(75, 26, 133, 0.1)"}:{backgroundColor:"inherit"},onClick:()=>E(e),children:[j?null!==x&&void 0!==x&&x.includes(null===e||void 0===e?void 0:e._id)?(0,g.jsx)("img",{style:{height:"1.3rem",borderRadius:"0",cursor:"pointer"},src:"/images/checkbox-icon.svg",alt:"icon"}):(0,g.jsx)("img",{style:{height:"1.3rem",borderRadius:"0",cursor:"pointer"},src:"/images/box-icon.svg",alt:"icon"}):"",(0,g.jsx)("img",{src:null!==e&&void 0!==e&&e.staffProfilePhoto?"".concat(o.yI,"/").concat(e.staffProfilePhoto):"/images/member_tab/class/default_avatar.svg",alt:"staff profile avatar"}),(0,g.jsxs)("div",{className:d.Z.assign_each_paragraph,children:[(0,g.jsx)("h6",{children:"".concat(e.staffFirstName," ").concat(null!==e&&void 0!==e&&e.staffMiddleName?null===e||void 0===e?void 0:e.staffMiddleName:""," ").concat(e.staffLastName)}),(0,g.jsxs)("p",{children:[" ",N("index")," ",null===e||void 0===e?void 0:e.staffROLLNO]})]})]}),(0,g.jsx)("hr",{})]},e._id)))})]})})}},49384:(e,s,a)=>{a.d(s,{Z:()=>l});a(72791);var t=a(6307),i=a(80184);const l=()=>(0,i.jsx)(t.iT,{ariaLabel:"loading-indicator",height:20,width:20,color:"white",secondaryColor:"#1c023b"})},12923:(e,s,a)=>{a.d(s,{Ec:()=>j,Em:()=>S,JM:()=>h,NS:()=>l,Pg:()=>v,Q_:()=>p,RH:()=>g,Tv:()=>o,U_:()=>m,VN:()=>n,Wj:()=>r,ZS:()=>u,_8:()=>x,d5:()=>d,tB:()=>f,vI:()=>C,yx:()=>c,zO:()=>_});var t=a(91007),i=a(58208);const l=e=>{const{data:s,refetch:a}=(0,i.YD)(e.search,{skip:e.skip});return{instituteAllSearch:s,instituteAllSearchRefetch:a}},n=()=>{const[e]=(0,i.ak)();return[e]},c=()=>{const[e]=(0,i.WL)();return[e]},o=e=>{const{data:s,refetch:a}=(0,i.pH)(e.list,{skip:e.skip});return{instituteFollowList:s,instituteFollowListRefetch:a}},d=e=>{const{data:s,refetch:a}=(0,i.MG)(e.data,{skip:e.skip});return{instituteOwnFollowingList:s,instituteOwnFollowingListRefetch:a}},r=()=>{const[e]=(0,i.Ky)();return[e]},u=e=>{const{data:s,refetch:a}=(0,i.p8)(e.list);return{userFollowList:s,userFollowListRefetch:a}},g=e=>{const{data:s,refetch:a}=(0,i.Wv)(e);return{userFollowingList:s,userFollowingListRefetch:a}},h=e=>{const{data:s,refetch:a}=(0,i.sz)(e.search,{skip:e.skip});return{userAllSearch:s,userAllSearchRefetch:a}},v=()=>{const[e]=(0,i.Mk)();return[e]},_=()=>{const[e]=(0,i.$i)();return[e]},f=()=>{const[e]=(0,i.Do)();return[e]},m=()=>{const[e]=(0,i.He)();return[e]},p=()=>{const[e]=(0,i.vg)();return[e]},j=()=>{const[e]=(0,i.OO)();return[e]},x=e=>{const{data:s,refetch:a}=(0,i.N2)(e);return{userCircleList:s,userCircleListRefetch:a}},C=e=>{const{data:s,refetch:a}=(0,t.x6)(e.search,{skip:e.skip});return{assignSearchStaff:s,assignSearchStaffRefetch:a}},S=e=>{const{data:s,refetch:a}=(0,i.SJ)(e);return{universalUser:s,universalUserRefetch:a}}},7135:()=>{},52124:(e,s,a)=>{a.d(s,{Z:()=>t});const t={assign_title:"AssignStaffModal_assign_title__4DGBV",assign_search_container:"AssignStaffModal_assign_search_container__3x6RD",assign_search_input:"AssignStaffModal_assign_search_input__rO3c7",assign_show_list:"AssignStaffModal_assign_show_list__yHhf7",assign_show_list_each:"AssignStaffModal_assign_show_list_each__ACUEw",assign_each_paragraph:"AssignStaffModal_assign_each_paragraph__pMHTq",universal_modal:"AssignStaffModal_universal_modal__czmpB",is_mulitselect_container:"AssignStaffModal_is_mulitselect_container__0cPQ2"}}}]);
//# sourceMappingURL=37641.b9a7f5f5.chunk.js.map
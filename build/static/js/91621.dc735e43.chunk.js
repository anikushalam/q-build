"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[91621],{35395:(t,e,i)=>{i.d(e,{Z:()=>s});var a=i(72791),n=i(98734),d=i(80184);const s=t=>{let{children:e}=t;return(0,d.jsx)(a.Suspense,{fallback:(0,d.jsx)(n.Z,{}),children:e})}},57431:(t,e,i)=>{i.d(e,{Z:()=>d});i(72791);var a=i(80272),n=i(80184);const d=t=>{var e;let{valueLength:i,maxLength:d,customStyle:s}=t;return(0,n.jsxs)("section",{style:{...s},className:a.Z.string_container,children:[null!==(e=null===i||void 0===i?void 0:i.length)&&void 0!==e?e:0,"/",d]})}},71188:(t,e,i)=>{i.r(e),i.d(e,{default:()=>H});var a=i(72791),n=i(20772),d=i(6796),s=i(70462),l=i(81490),r=i(33992),_=i(95048),o=i(98990),c=i(35395),u=i(11105),m=i(39230),p=i(43504),v=i(80184);const h=t=>{var e,i,a,n;let{depart:d}=t;const{t:s}=(0,m.$G)(),r=(0,_.I0)();return(0,v.jsx)(p.rU,{to:"/q/".concat(null===d||void 0===d?void 0:d.dName,"/viewdept"),onClick:()=>{var t;t=d._id,r(o.S.addDepartmentId({did:t}))},children:(0,v.jsxs)("div",{className:l.Z.department_card_container,children:[(0,v.jsx)("img",{src:"/images/profileAndCover/department-profile-img.svg",alt:"department avatar",className:l.Z.department_card_image}),(0,v.jsxs)("div",{children:[(0,v.jsx)("h6",{className:l.Z.department_card_name,children:(null===d||void 0===d?void 0:d.dName)||"Mechanical Engineering"}),(0,v.jsxs)("p",{className:l.Z.department_card_head,children:[null===d||void 0===d||null===(e=d.dHead)||void 0===e?void 0:e.staffFirstName,null!==d&&void 0!==d&&null!==(i=d.dHead)&&void 0!==i&&i.staffMiddleName?" ".concat(null===d||void 0===d||null===(a=d.dHead)||void 0===a?void 0:a.staffMiddleName," "):" ",null===d||void 0===d||null===(n=d.dHead)||void 0===n?void 0:n.staffLastName]}),(0,v.jsx)("p",{className:l.Z.department_card_title,children:(null===d||void 0===d?void 0:d.dTitle)||s("hod")})]})]})})};var f=i(16871),x=i(90702),y=i(38857),g=i(21348),j=i(90904),b=i(93638),Z=i(55336),w=i(16925),I=i(98684),N=i(91448),C=i(57431),S=i(1095),k=i(61055),T=i(99183),L=i(82815);const A=t=>{var e,i,n,d,s,l,_,o;let{instituteId:c,onClose:u,onRefetch:p}=t;const{t:h}=(0,m.$G)(),[f,A]=(0,a.useState)({dName:"",dTitle:"",sid:"",gr_initials:"",institute_type:"",institute_type_id:null,affiliation_with_institute:"",affiliation_with_institute_id:null,department_type:"",department_type_id:null,stream_type:"",stream_type_id:null}),[D,U]=(0,a.useState)(""),[V,H]=(0,a.useState)(1),[F,P]=(0,a.useState)(""),[q,B]=(0,a.useState)(!1),{automateInstituteTypeList:M}=(0,L.d7)({data:{id:c,page:1,limit:1e3,search:""},skip:!c}),{automateInstituteUniveristyTypeList:E}=(0,L.Cc)({data:{id:f.institute_type_id,page:1,limit:1e3,search:""},skip:!f.institute_type_id}),{automateInstituteDepartmentTypeList:Y}=(0,L.NE)({data:{id:f.affiliation_with_institute_id,page:1,limit:1e3,search:""},skip:!f.affiliation_with_institute_id}),{automateInstituteUniversityDepartmentStreamList:G}=(0,L.AI)({data:{page:1,limit:1e3,search:"",did:f.department_type_id,institute_type_id:f.institute_type_id,university_id:f.affiliation_with_institute_id},skip:!f.department_type_id}),[O]=(0,r.Gg)(),[J]=(0,L.hQ)(),Q=(t,e)=>{var i;(null===(i=t.target.value)||void 0===i?void 0:i.length)<=e&&A((e=>({...e,[t.target.name]:t.target.value})))};return(0,v.jsx)(v.Fragment,{children:3===V?(0,v.jsx)(x.Z,{onSelectStaff:t=>{U(t),A((e=>({...e,sid:null===t||void 0===t?void 0:t._id}))),H(2)},onClose:()=>H(2),instituteId:c}):(0,v.jsx)(y.Z,{onClose:u,children:(0,v.jsxs)("div",{className:w.Z.modal_container,children:[(0,v.jsx)(g.Z,{children:(0,v.jsxs)("div",{className:w.Z.modal_container_outer_header,children:[(0,v.jsx)("div",{className:w.Z.modal_container_header,children:(0,v.jsx)("h6",{children:h("add_new_dept")})}),(0,v.jsx)("img",{src:"".concat(I.J7,"/close.svg"),alt:"close icon",onClick:()=>{2===V?H(1):u()}})]})}),(0,v.jsx)(j.Z,{}),1===V?(0,v.jsxs)(g.Z,{customStyle:{paddingTop:"0"},children:[(0,v.jsx)(N.Z,{selectLabel:h("type_of_institute"),selectedValue:h("please_select_type_of_institute"),onClick:t=>{A((e=>({...e,institute_type:null===t||void 0===t?void 0:t.name,institute_type_id:null===t||void 0===t?void 0:t._id})))},options:null!==(e=null===M||void 0===M?void 0:M.list)&&void 0!==e?e:[],defalutValue:f.institute_type,errorShow:F.institute_type}),(0,v.jsx)(N.Z,{selectLabel:h("affiliated_with"),selectedValue:h("please_select_affiliated_with"),onClick:t=>{"Autonomous"===(null===t||void 0===t?void 0:t.name)?(A((e=>({...e,affiliation_with_institute:null===t||void 0===t?void 0:t.name,affiliation_with_institute_id:null,institute_type:"",institute_type_id:null,stream_type:"",stream_type_id:null,department_type:"",department_type_id:null}))),H(2)):A((e=>({...e,affiliation_with_institute:null===t||void 0===t?void 0:t.name,affiliation_with_institute_id:null===t||void 0===t?void 0:t._id})))},options:(null===E||void 0===E||null===(i=E.list)||void 0===i?void 0:i.length)>0?[{name:"Autonomous"},...null===E||void 0===E?void 0:E.list]:[{name:"Autonomous"}],defalutValue:f.affiliation_with_institute,errorShow:F.affiliation_with_institute}),(0,v.jsx)(N.Z,{selectLabel:h("department_type"),selectedValue:h("please_select_department_type"),onClick:t=>{"First Year"===(null===t||void 0===t?void 0:t.name)?A((e=>{var i;return{...e,department_type:null===t||void 0===t?void 0:t.name,department_type_id:null===t||void 0===t?void 0:t._id,stream_type:"First Year Stream",stream_type_id:null===t||void 0===t||null===(i=t.streams)||void 0===i?void 0:i[0]}})):A((e=>({...e,department_type:null===t||void 0===t?void 0:t.name,department_type_id:null===t||void 0===t?void 0:t._id})))},options:null!==(n=null===Y||void 0===Y?void 0:Y.list)&&void 0!==n?n:[],defalutValue:f.department_type,errorShow:F.department_type}),"First Year"===f.department_type?null:(0,v.jsx)(N.Z,{selectLabel:h("stream"),selectedValue:h("please_select_stream"),onClick:t=>{A((e=>({...e,stream_type:null===t||void 0===t?void 0:t.name,stream_type_id:null===t||void 0===t?void 0:t._id})))},options:null!==(d=null===G||void 0===G?void 0:G.list)&&void 0!==d?d:[],defalutValue:f.stream_type,errorShow:F.stream_type}),(0,v.jsx)(b.Z,{label:"next",onAction:()=>{let t="";t=R(f),(0,T.x)(t)?H(2):P(t)}})]}):2===V?(0,v.jsxs)(g.Z,{customStyle:{paddingTop:"0"},children:[(0,v.jsx)(k.Z,{label:h("department_name"),placeholder:h("dept_example"),name:"dName",value:f.dName,type:"text",onChange:t=>Q(t,45),errorShow:F.dName}),(0,v.jsx)(C.Z,{maxLength:45,valueLength:f.dName}),(0,v.jsxs)("div",{className:w.Z.card_container_image,onClick:()=>H(3),style:{cursor:"pointer"},children:[(0,v.jsx)("img",{alt:"not found",src:null!==D&&void 0!==D&&D.staffProfilePhoto?"".concat(S.yI,"/").concat(D.staffProfilePhoto):"".concat(I.p3,"/feed-user-avatar.svg")}),(0,v.jsx)("div",{className:w.Z.card_container_inner,children:null!==D&&void 0!==D&&D.staffFirstName?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("h6",{children:"".concat(null!==(s=null===D||void 0===D?void 0:D.staffFirstName)&&void 0!==s?s:""," \n                    ").concat(null!==(l=null===D||void 0===D?void 0:D.staffMiddleName)&&void 0!==l?l:"","\n                    ").concat(null!==(_=null===D||void 0===D?void 0:D.staffLastName)&&void 0!==_?_:"")}),(0,v.jsxs)("p",{children:[h("index_number_1")," ",null!==(o=null===D||void 0===D?void 0:D.staffROLLNO)&&void 0!==o?o:""]})]}):(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("h6",{children:[h("assign_dhead")," ",h("optional")]}),(0,v.jsx)("p",{children:h("search_from_joined_list")})]})})]}),(0,v.jsx)(k.Z,{label:h("give_dhead_title"),placeholder:h("dhead_example"),name:"dTitle",value:f.dTitle,type:"text",onChange:t=>Q(t,40),errorShow:F.dTitle}),(0,v.jsx)(C.Z,{maxLength:40,valueLength:f.dTitle}),(0,v.jsx)(k.Z,{label:h("department_initials"),placeholder:h("department_initials_placeholder"),name:"gr_initials",value:f.gr_initials,type:"text",onChange:t=>Q(t,10)}),(0,v.jsx)(C.Z,{maxLength:10,valueLength:f.gr_initials}),(0,v.jsx)(b.Z,{label:"create",onAction:()=>{let t=(0,T.l)(f,["sid","gr_initials","institute_type","institute_type_id","affiliation_with_institute","affiliation_with_institute_id","department_type","department_type_id","stream_type","stream_type_id"]);(0,T.x)(t)&&c?(B((t=>!t)),"Autonomous"===f.affiliation_with_institute?O({departmentCreate:f,id:c}).then((()=>{p(),B((t=>!t)),u()})).catch({}):J({id:c,bodyParameter:f}).then((()=>{p(),B((t=>!t)),u()})).catch({})):P(t)}})]}):null,q&&(0,v.jsx)(Z.Z,{})]})})})},R=t=>t.affiliation_with_institute?"First Year"===t.department_type?(0,T.l)(t,["dName","dTitle","sid","gr_initials","institute_type_id","affiliation_with_institute_id","department_type_id","stream_type","stream_type_id"]):"Anonymous"===t.affiliation_with_institute?(0,T.l)(t,["dName","dTitle","sid","gr_initials","institute_type","institute_type_id","affiliation_with_institute_id","department_type","department_type_id","stream_type","stream_type_id"]):(0,T.l)(t,["dName","dTitle","sid","gr_initials","institute_type_id","affiliation_with_institute_id","department_type_id","stream_type_id"]):(0,T.l)(t,["dName","dTitle","sid","gr_initials","institute_type","institute_type_id","affiliation_with_institute_id","department_type","department_type_id","stream_type","stream_type_id"]);const D=function(){var t,e;const{t:i}=(0,m.$G)(),n=(0,_.v9)((t=>t.idChange)),d=(0,_.v9)((t=>t.authChange.loginRole)),s=(0,_.I0)(),p=(0,f.UO)(),{onAddBack:x}=(()=>{const t=(0,_.I0)(),e=(0,_.v9)((t=>t.idChange.universalBack));return{onBack:()=>{const i=e.ChildList;null===i||void 0===i||i.pop();const a=i,n=e.childHeight-1;t(o.S.workUniversalBack({childList:a,childHeight:n}))},onAddBack:i=>{var a;const n=null!==(a=e.ChildList)&&void 0!==a?a:[];let d=e.childHeight;0===d?d=0:d+=1,null===n||void 0===n||n.push(i),t(o.S.workUniversalBack({childList:n,childHeight:d}))}}})(),[y,g]=a.useState(!0),[j,b]=a.useState(!1),{allDepartment:Z,allDepartmentRefetch:w}=(0,r.SM)({data:{id:null===n||void 0===n?void 0:n.id,which_type:"Normal"},skip:!(null!==n&&void 0!==n&&n.id)});return a.useEffect((()=>{var t,e;null!==Z&&void 0!==Z&&null!==(t=Z.institute)&&void 0!==t&&t.depart&&(s(o.S.addDepartment({departments:null===Z||void 0===Z||null===(e=Z.institute)||void 0===e?void 0:e.depart})),g(!1))}),[null===Z||void 0===Z||null===(t=Z.institute)||void 0===t?void 0:t.depart]),a.useEffect((()=>{null!==n&&void 0!==n&&n.id&&w()}),[null===n||void 0===n?void 0:n.id,w]),a.useEffect((()=>{x({linkType:!0,linkUrl:"/q/".concat(p.username,"/feed")})}),[p.username]),(0,v.jsxs)("div",{className:l.Z.department_conatiner,children:["_usr_ia"===d?null:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("p",{className:l.Z.department_add_new,onClick:()=>b((t=>!t)),children:i("add_new_dept")}),(0,v.jsx)("hr",{className:l.Z.department_hr})]}),null===n||void 0===n||null===(e=n.departments)||void 0===e?void 0:e.map((t=>(0,v.jsx)(h,{depart:t},t._id))),y&&(0,v.jsx)(u.Z,{}),(0,v.jsx)(c.Z,{children:j&&(0,v.jsx)(A,{onClose:()=>b(!1),instituteId:null===n||void 0===n?void 0:n.id,onRefetch:w})})]})};var U=i(44701);const V=t=>{let{activeIndex:e}=t;const{t:i}=(0,m.$G)(),a=(0,f.UO)(),n=()=>{};return(0,v.jsxs)("div",{className:d.Z.staff_tab_tabs,children:[(0,v.jsx)(p.rU,{to:"/q/".concat(a.username,"/department"),children:(0,v.jsx)(U.Z,{tabLevel:i("departments"),onTabAction:n,customStyleContainer:{marginRight:"2px",borderTopLeftRadius:"6px"},customStyleLevel:{borderTopLeftRadius:"6px"},tabValue:0,currentValue:e})}),(0,v.jsx)(p.rU,{to:"/q/".concat(a.username,"/staff"),children:(0,v.jsx)(U.Z,{tabLevel:i("staffs"),onTabAction:n,customStyleContainer:{marginRight:"2px"},tabValue:1,currentValue:e})}),(0,v.jsx)(p.rU,{to:"/q/".concat(a.username,"/student"),children:(0,v.jsx)(U.Z,{tabLevel:i("students"),customStyleContainer:{borderTopRightRadius:"6px"},customStyleLevel:{borderTopRightRadius:"6px"},onTabAction:n,tabValue:2,currentValue:e})})]})},H=()=>(0,v.jsxs)("div",{className:d.Z.insprofilesetting,children:[(0,v.jsx)("div",{className:d.Z.navbar,children:(0,v.jsx)(n.default,{status:"home"})}),(0,v.jsxs)("div",{className:d.Z.staff_tab_container,children:[(0,v.jsx)("div",{children:(0,v.jsx)("div",{className:d.Z.staff_tab_sidebar,children:(0,v.jsx)(s.Z,{activeIndex:0})})}),(0,v.jsxs)("div",{className:d.Z.staff_tab_main,children:[(0,v.jsx)(V,{activeIndex:0}),(0,v.jsx)("div",{className:d.Z.staff_tab_department_wrapper,children:(0,v.jsx)(D,{})})]})]})]})},70462:(t,e,i)=>{i.d(e,{Z:()=>h});var a=i(72791),n=i(95048),d=i(39230),s=i(6245),l=i(69721),r=i(90788),_=i(80184);const o=t=>{let{children:e}=t;return(0,_.jsx)("div",{className:r.Z.common_card_wrapper,children:e})};var c=i(85050),u=i(93738),m=i(21093),p=i(16871),v=i(43504);const h=t=>{var e,i,r,h,f,x;let{activeIndex:y}=t;const{t:g}=(0,d.$G)(),j=(0,n.v9)((t=>t.idChange)),b=(0,p.UO)(),{instituteStatsCount:Z,instituteStatsCountRefetch:w}=(0,s.S$)({data:{id:null===j||void 0===j?void 0:j.id,flow:"Normal"},skip:!(null!==j&&void 0!==j&&j.id)});return(0,a.useEffect)((()=>{null!==j&&void 0!==j&&j.id&&w()}),[null===j||void 0===j?void 0:j.id,w]),(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(m.Z,{whichType:"PREVIOUS_GO"}),(0,_.jsx)(c.Z,{dynamicImage:null!==Z&&void 0!==Z&&null!==(e=Z.stats)&&void 0!==e&&e.insProfileCoverPhoto?"".concat(l.yI,"/").concat(null===Z||void 0===Z||null===(i=Z.stats)||void 0===i?void 0:i.insProfileCoverPhoto):"/images/profileAndCover/department-cover.svg"}),(0,_.jsx)(o,{children:(0,_.jsx)(v.rU,{to:"/q/".concat(b.username,"/department"),children:(0,_.jsx)(u.Z,{cardAsHead:!1,heading:g("departments"),description:g("dept_in_ins"),count:(null===Z||void 0===Z||null===(r=Z.stats)||void 0===r?void 0:r.departmentCount)||0,customStyleCard:{borderRadius:"18px 18px 0px 0px",border:"none",marginTop:"-2.49vw",cursor:"pointer"},asActive:0===y&&!0})})}),(0,_.jsx)(v.rU,{to:"/q/".concat(b.username,"/staff"),children:(0,_.jsx)(u.Z,{cardAsHead:!1,heading:g("total_staffs"),description:g("all_staff_working"),count:(null===Z||void 0===Z||null===(h=Z.stats)||void 0===h?void 0:h.staffCount)||0,asActive:1===y&&!0,customStyleCard:{cursor:"pointer"}})}),(0,_.jsx)(v.rU,{to:"/q/".concat(b.username,"/student"),children:(0,_.jsx)(u.Z,{cardAsHead:!1,heading:g("total_students"),description:g("current_plus"),count:(null===Z||void 0===Z||null===(f=Z.stats)||void 0===f?void 0:f.studentCount)||0,customStyleCard:{cursor:"pointer"},asActive:2===y&&!0})}),(0,_.jsx)(v.rU,{to:"/q/".concat(b.username,"/student?a=unapproved"),children:(0,_.jsx)(u.Z,{cardAsHead:!1,heading:g("total_unapproved_students"),description:g("current_plus"),count:(null===Z||void 0===Z||null===(x=Z.stats)||void 0===x?void 0:x.un_approved_student_count)||0,customStyleCard:{borderRadius:"0 0 12px 12px",borderBottom:"0.4px solid rgba(0, 0, 0, 0.15)",cursor:"pointer"},asActive:3===y&&!0})})]})}},57588:(t,e,i)=>{i.d(e,{J:()=>a});const a=(t,e)=>{let i;return function(){let a=this,n=arguments;clearTimeout(i),i=setTimeout((()=>{t.apply(a,n)}),e)}}},91427:(t,e,i)=>{i.d(e,{f:()=>a});const a=t=>t%10===0},80272:(t,e,i)=>{i.d(e,{Z:()=>a});const a={string_container:"StringLength_string_container__v6b--",mark_container:"StringLength_mark_container__KQsQy"}},81490:(t,e,i)=>{i.d(e,{Z:()=>a});const a={departments:"Departments_departments__MtyWV",deptcontainer:"Departments_deptcontainer__jvgAe",department_add_new:"Departments_department_add_new__e8m85",department_card_name:"Departments_department_card_name__YHN1k",department_card_head:"Departments_department_card_head__rMCPk",department_card_title:"Departments_department_card_title__pYCbV",department_conatiner:"Departments_department_conatiner__+CRQb",department_hr:"Departments_department_hr__Yx7B3",department_card_container:"Departments_department_card_container__eQrcm",department_card_image:"Departments_department_card_image__nswVA",edit_container:"Departments_edit_container__RcNp1"}},6796:(t,e,i)=>{i.d(e,{Z:()=>a});const a={navbar:"staffTab_navbar__Zam1e",staff_tab_container:"staffTab_staff_tab_container__zBlIX",staff_tab_sidebar:"staffTab_staff_tab_sidebar__IMkEm",staff_tab_main:"staffTab_staff_tab_main__J0rQb",staff_tab_tabs:"staffTab_staff_tab_tabs__mT+zz",staff_tab_department_wrapper:"staffTab_staff_tab_department_wrapper__12Rd7"}},16925:(t,e,i)=>{i.d(e,{Z:()=>a});const a={right:"Income_right__XnzYj",rightHead:"Income_rightHead__1rLc6",rightBody:"Income_rightBody__fGEC5",income_detail:"Income_income_detail__IWoJa",detailTop:"Income_detailTop__4JXuu",detailTopMid:"Income_detailTopMid__yc2yv",modal_container:"Income_modal_container__HiGr+",modal_container_outer_header:"Income_modal_container_outer_header__F9c7X",modal_container_header:"Income_modal_container_header__td-Fb",card_container:"Income_card_container__ewKhQ",card_container_image:"Income_card_container_image__5XloP",card_container_inner:"Income_card_container_inner__JBmxr",admission_fees_row:"Income_admission_fees_row__MPJCs",close_icon:"Income_close_icon__Ozq4u",student_message_container:"Income_student_message_container__8KnPc",student_message_container_inner:"Income_student_message_container_inner__mRYpD",usm_institute_container:"Income_usm_institute_container__4LkYt",usm_institute:"Income_usm_institute__hlzdF",date_select:"Income_date_select__D3VkU",gsf_star_container:"Income_gsf_star_container__7gdUs",afsi_container:"Income_afsi_container__7u06w",days_container:"Income_days_container__xq2RX",days_container_child:"Income_days_container_child__E30h2",days_container_child_active:"Income_days_container_child_active__y6eWZ"}}}]);
//# sourceMappingURL=91621.dc735e43.chunk.js.map
"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[8466],{35395:function(t,e,a){var n=a(72791),d=a(98734),i=a(80184);e.Z=function(t){var e=t.children;return(0,i.jsx)(n.Suspense,{fallback:(0,i.jsx)(d.Z,{}),children:e})}},88466:function(t,e,a){a.r(e),a.d(e,{default:function(){return C}});var n=a(72791),d=a(20772),i=a(6796),r=a(70462),s=a(29439),o=a(81490),l=a(33992),c=a(95048),u=a(48673),_=a(35395),p=a(11105),m=a(39230),v=a(43504),f=a(80184),h=function(t){var e,a,n,d,i=t.depart,r=(0,m.$G)().t,s=(0,c.I0)();return(0,f.jsx)(v.rU,{to:"/q/".concat(null===i||void 0===i?void 0:i.dName,"/viewdept"),onClick:function(){var t;t=i._id,s(u.S.addDepartmentId({did:t}))},children:(0,f.jsxs)("div",{className:o.Z.department_card_container,children:[(0,f.jsx)("img",{src:"/images/profileAndCover/department-profile-img.svg",alt:"department avatar",className:o.Z.department_card_image}),(0,f.jsxs)("div",{children:[(0,f.jsx)("h6",{className:o.Z.department_card_name,children:(null===i||void 0===i?void 0:i.dName)||"Mechanical Engineering"}),(0,f.jsxs)("p",{className:o.Z.department_card_head,children:[null===i||void 0===i||null===(e=i.dHead)||void 0===e?void 0:e.staffFirstName,null!==i&&void 0!==i&&null!==(a=i.dHead)&&void 0!==a&&a.staffMiddleName?" ".concat(null===i||void 0===i||null===(n=i.dHead)||void 0===n?void 0:n.staffMiddleName," "):" ",null===i||void 0===i||null===(d=i.dHead)||void 0===d?void 0:d.staffLastName]}),(0,f.jsx)("p",{className:o.Z.department_card_title,children:(null===i||void 0===i?void 0:i.dTitle)||r("hod")})]})]})})},x=a(16871),b=n.lazy((function(){return Promise.all([a.e(6307),a.e(312)]).then(a.bind(a,20312))}));var j=function(){var t,e,a=(0,m.$G)().t,d=(0,c.v9)((function(t){return t.idChange})),i=(0,c.I0)(),r=(0,x.UO)(),v=function(){var t=(0,c.I0)(),e=(0,c.v9)((function(t){return t.idChange.universalBack}));return{onBack:function(){var a=e.ChildList;null===a||void 0===a||a.pop();var n=a,d=e.childHeight-1;t(u.S.workUniversalBack({childList:n,childHeight:d}))},onAddBack:function(a){var n,d=null!==(n=e.ChildList)&&void 0!==n?n:[],i=e.childHeight;0===i?i=0:i+=1,null===d||void 0===d||d.push(a),t(u.S.workUniversalBack({childList:d,childHeight:i}))}}}().onAddBack,j=n.useState(!0),Z=(0,s.Z)(j,2),g=Z[0],C=Z[1],k=n.useState(!1),N=(0,s.Z)(k,2),S=N[0],w=N[1],T=(0,l.SM)({id:null===d||void 0===d?void 0:d.id,skip:!(null!==d&&void 0!==d&&d.id)}),A=T.allDepartment,D=T.allDepartmentRefetch;return n.useEffect((function(){var t,e;null!==A&&void 0!==A&&null!==(t=A.institute)&&void 0!==t&&t.depart&&(i(u.S.addDepartment({departments:null===A||void 0===A||null===(e=A.institute)||void 0===e?void 0:e.depart})),C(!1))}),[null===A||void 0===A||null===(t=A.institute)||void 0===t?void 0:t.depart]),n.useEffect((function(){null!==d&&void 0!==d&&d.id&&D()}),[null===d||void 0===d?void 0:d.id,D]),n.useEffect((function(){v({linkType:!0,linkUrl:"/q/".concat(r.username,"/feed")})}),[r.username]),(0,f.jsxs)("div",{className:o.Z.department_conatiner,children:[(0,f.jsx)("p",{className:o.Z.department_add_new,onClick:function(){return w((function(t){return!t}))},children:a("add_new_dept")}),(0,f.jsx)("hr",{className:o.Z.department_hr}),null===d||void 0===d||null===(e=d.departments)||void 0===e?void 0:e.map((function(t){return(0,f.jsx)(h,{depart:t},t._id)})),g&&(0,f.jsx)(p.Z,{}),(0,f.jsx)(_.Z,{children:S&&(0,f.jsx)(b,{departmentModal:S,hideModal:w,edit:"",setEdit:function(){},editDepartment:""})})]})},Z=a(44701),g=function(t){var e=t.activeIndex,a=(0,m.$G)().t,n=(0,x.UO)(),d=function(){};return(0,f.jsxs)("div",{className:i.Z.staff_tab_tabs,children:[(0,f.jsx)(v.rU,{to:"/q/".concat(n.username,"/department"),children:(0,f.jsx)(Z.Z,{tabLevel:a("departments"),onTabAction:d,customStyleContainer:{marginRight:"2px",borderTopLeftRadius:"6px"},customStyleLevel:{borderTopLeftRadius:"6px"},tabValue:0,currentValue:e})}),(0,f.jsx)(v.rU,{to:"/q/".concat(n.username,"/staff"),children:(0,f.jsx)(Z.Z,{tabLevel:a("staffs"),onTabAction:d,customStyleContainer:{marginRight:"2px"},tabValue:1,currentValue:e})}),(0,f.jsx)(v.rU,{to:"/q/".concat(n.username,"/student"),children:(0,f.jsx)(Z.Z,{tabLevel:a("students"),customStyleContainer:{borderTopRightRadius:"6px",width:"280px"},customStyleLevel:{borderTopRightRadius:"6px"},onTabAction:d,tabValue:2,currentValue:e})})]})},C=function(){return(0,f.jsxs)("div",{className:i.Z.insprofilesetting,children:[(0,f.jsx)("div",{className:i.Z.navbar,children:(0,f.jsx)(d.default,{status:"home"})}),(0,f.jsxs)("div",{className:i.Z.staff_tab_container,children:[(0,f.jsx)("div",{children:(0,f.jsx)("div",{className:i.Z.staff_tab_sidebar,children:(0,f.jsx)(r.Z,{activeIndex:0})})}),(0,f.jsxs)("div",{className:i.Z.staff_tab_main,children:[(0,f.jsx)(g,{activeIndex:0}),(0,f.jsx)("div",{className:i.Z.staff_tab_department_wrapper,children:(0,f.jsx)(j,{})})]})]})]})}},70462:function(t,e,a){a.d(e,{Z:function(){return f}});var n=a(72791),d=a(95048),i=a(39230),r=a(6245),s=a(69721),o=a(90788),l=a(80184),c=function(t){var e=t.children;return(0,l.jsx)("div",{className:o.Z.common_card_wrapper,children:e})},u=a(85050),_=a(93738),p=a(21093),m=a(16871),v=a(43504),f=function(t){var e,a,o,f,h,x,b=t.activeIndex,j=(0,i.$G)().t,Z=(0,d.v9)((function(t){return t.idChange})),g=(0,m.UO)(),C=(0,r.S$)({id:null===Z||void 0===Z?void 0:Z.id,skip:!(null!==Z&&void 0!==Z&&Z.id)}),k=C.instituteStatsCount,N=C.instituteStatsCountRefetch;return(0,n.useEffect)((function(){null!==Z&&void 0!==Z&&Z.id&&N()}),[null===Z||void 0===Z?void 0:Z.id,N]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(p.Z,{whichType:"PREVIOUS_GO"}),(0,l.jsx)(u.Z,{dynamicImage:null!==k&&void 0!==k&&null!==(e=k.stats)&&void 0!==e&&e.insProfileCoverPhoto?"".concat(s.yI,"/").concat(null===k||void 0===k||null===(a=k.stats)||void 0===a?void 0:a.insProfileCoverPhoto):"/images/profileAndCover/department-cover.svg"}),(0,l.jsx)(c,{children:(0,l.jsx)(v.rU,{to:"/q/".concat(g.username,"/department"),children:(0,l.jsx)(_.Z,{cardAsHead:!1,heading:j("departments"),description:j("dept_in_ins"),count:(null===k||void 0===k||null===(o=k.stats)||void 0===o?void 0:o.departmentCount)||0,customStyleCard:{borderRadius:"18px 18px 0px 0px",border:"none",marginTop:"-2.49vw",cursor:"pointer"},asActive:0===b&&!0})})}),(0,l.jsx)(v.rU,{to:"/q/".concat(g.username,"/staff"),children:(0,l.jsx)(_.Z,{cardAsHead:!1,heading:j("total_staffs"),description:j("all_staff_working"),count:(null===k||void 0===k||null===(f=k.stats)||void 0===f?void 0:f.staffCount)||0,asActive:1===b&&!0,customStyleCard:{cursor:"pointer"}})}),(0,l.jsx)(v.rU,{to:"/q/".concat(g.username,"/student"),children:(0,l.jsx)(_.Z,{cardAsHead:!1,heading:j("total_students"),description:j("current_plus"),count:(null===k||void 0===k||null===(h=k.stats)||void 0===h?void 0:h.studentCount)||0,customStyleCard:{cursor:"pointer"},asActive:2===b&&!0})}),(0,l.jsx)(v.rU,{to:"/q/".concat(g.username,"/student?a=unapproved"),children:(0,l.jsx)(_.Z,{cardAsHead:!1,heading:j("total_unapproved_students"),description:j("current_plus"),count:(null===k||void 0===k||null===(x=k.stats)||void 0===x?void 0:x.un_approved_student_count)||0,customStyleCard:{borderRadius:"0 0 12px 12px",borderBottom:"0.4px solid rgba(0, 0, 0, 0.15)",cursor:"pointer"},asActive:3===b&&!0})})]})}},81490:function(t,e){e.Z={departments:"Departments_departments__MtyWV",deptcontainer:"Departments_deptcontainer__jvgAe",department_add_new:"Departments_department_add_new__e8m85",department_card_name:"Departments_department_card_name__YHN1k",department_card_head:"Departments_department_card_head__rMCPk",department_card_title:"Departments_department_card_title__pYCbV",department_conatiner:"Departments_department_conatiner__+CRQb",department_hr:"Departments_department_hr__Yx7B3",department_card_container:"Departments_department_card_container__eQrcm",department_card_image:"Departments_department_card_image__nswVA",edit_container:"Departments_edit_container__RcNp1"}},6796:function(t,e){e.Z={navbar:"staffTab_navbar__Zam1e",staff_tab_container:"staffTab_staff_tab_container__zBlIX",staff_tab_sidebar:"staffTab_staff_tab_sidebar__IMkEm",staff_tab_main:"staffTab_staff_tab_main__J0rQb",staff_tab_tabs:"staffTab_staff_tab_tabs__mT+zz",staff_tab_department_wrapper:"staffTab_staff_tab_department_wrapper__12Rd7"}}}]);
//# sourceMappingURL=8466.18ed5b64.chunk.js.map
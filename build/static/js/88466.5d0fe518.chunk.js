"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[88466],{35395:function(t,e,n){var a=n(72791),d=n(98734),r=n(80184);e.Z=function(t){var e=t.children;return(0,r.jsx)(a.Suspense,{fallback:(0,r.jsx)(d.Z,{}),children:e})}},88466:function(t,e,n){n.r(e),n.d(e,{default:function(){return C}});var a=n(72791),d=n(20772),r=n(6796),i=n(70462),s=n(29439),o=n(81490),l=n(33992),c=n(95048),u=n(48673),_=n(35395),p=n(11105),m=n(39230),v=n(43504),f=n(80184),h=function(t){var e,n,a,d,r=t.depart,i=(0,m.$G)().t,s=(0,c.I0)();return(0,f.jsx)(v.rU,{to:"/q/".concat(null===r||void 0===r?void 0:r.dName,"/viewdept"),onClick:function(){var t;t=r._id,s(u.S.addDepartmentId({did:t}))},children:(0,f.jsxs)("div",{className:o.Z.department_card_container,children:[(0,f.jsx)("img",{src:"/images/profileAndCover/department-profile-img.svg",alt:"department avatar",className:o.Z.department_card_image}),(0,f.jsxs)("div",{children:[(0,f.jsx)("h6",{className:o.Z.department_card_name,children:(null===r||void 0===r?void 0:r.dName)||"Mechanical Engineering"}),(0,f.jsxs)("p",{className:o.Z.department_card_head,children:[null===r||void 0===r||null===(e=r.dHead)||void 0===e?void 0:e.staffFirstName,null!==r&&void 0!==r&&null!==(n=r.dHead)&&void 0!==n&&n.staffMiddleName?" ".concat(null===r||void 0===r||null===(a=r.dHead)||void 0===a?void 0:a.staffMiddleName," "):" ",null===r||void 0===r||null===(d=r.dHead)||void 0===d?void 0:d.staffLastName]}),(0,f.jsx)("p",{className:o.Z.department_card_title,children:(null===r||void 0===r?void 0:r.dTitle)||i("hod")})]})]})})},x=n(16871),b=a.lazy((function(){return Promise.all([n.e(6307),n.e(20312)]).then(n.bind(n,20312))}));var j=function(){var t,e,n=(0,m.$G)().t,d=(0,c.v9)((function(t){return t.idChange})),r=(0,c.v9)((function(t){return t.authChange.loginRole})),i=(0,c.I0)(),v=(0,x.UO)(),j=function(){var t=(0,c.I0)(),e=(0,c.v9)((function(t){return t.idChange.universalBack}));return{onBack:function(){var n=e.ChildList;null===n||void 0===n||n.pop();var a=n,d=e.childHeight-1;t(u.S.workUniversalBack({childList:a,childHeight:d}))},onAddBack:function(n){var a,d=null!==(a=e.ChildList)&&void 0!==a?a:[],r=e.childHeight;0===r?r=0:r+=1,null===d||void 0===d||d.push(n),t(u.S.workUniversalBack({childList:d,childHeight:r}))}}}().onAddBack,g=a.useState(!0),Z=(0,s.Z)(g,2),C=Z[0],k=Z[1],N=a.useState(!1),S=(0,s.Z)(N,2),T=S[0],w=S[1],A=(0,l.SM)({id:null===d||void 0===d?void 0:d.id,skip:!(null!==d&&void 0!==d&&d.id)}),R=A.allDepartment,D=A.allDepartmentRefetch;return a.useEffect((function(){var t,e;null!==R&&void 0!==R&&null!==(t=R.institute)&&void 0!==t&&t.depart&&(i(u.S.addDepartment({departments:null===R||void 0===R||null===(e=R.institute)||void 0===e?void 0:e.depart})),k(!1))}),[null===R||void 0===R||null===(t=R.institute)||void 0===t?void 0:t.depart]),a.useEffect((function(){null!==d&&void 0!==d&&d.id&&D()}),[null===d||void 0===d?void 0:d.id,D]),a.useEffect((function(){j({linkType:!0,linkUrl:"/q/".concat(v.username,"/feed")})}),[v.username]),(0,f.jsxs)("div",{className:o.Z.department_conatiner,children:["_usr_ia"===r?null:(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("p",{className:o.Z.department_add_new,onClick:function(){return w((function(t){return!t}))},children:n("add_new_dept")}),(0,f.jsx)("hr",{className:o.Z.department_hr})]}),null===d||void 0===d||null===(e=d.departments)||void 0===e?void 0:e.map((function(t){return(0,f.jsx)(h,{depart:t},t._id)})),C&&(0,f.jsx)(p.Z,{}),(0,f.jsx)(_.Z,{children:T&&(0,f.jsx)(b,{departmentModal:T,hideModal:w,edit:"",setEdit:function(){},editDepartment:""})})]})},g=n(44701),Z=function(t){var e=t.activeIndex,n=(0,m.$G)().t,a=(0,x.UO)(),d=function(){};return(0,f.jsxs)("div",{className:r.Z.staff_tab_tabs,children:[(0,f.jsx)(v.rU,{to:"/q/".concat(a.username,"/department"),children:(0,f.jsx)(g.Z,{tabLevel:n("departments"),onTabAction:d,customStyleContainer:{marginRight:"2px",borderTopLeftRadius:"6px"},customStyleLevel:{borderTopLeftRadius:"6px"},tabValue:0,currentValue:e})}),(0,f.jsx)(v.rU,{to:"/q/".concat(a.username,"/staff"),children:(0,f.jsx)(g.Z,{tabLevel:n("staffs"),onTabAction:d,customStyleContainer:{marginRight:"2px"},tabValue:1,currentValue:e})}),(0,f.jsx)(v.rU,{to:"/q/".concat(a.username,"/student"),children:(0,f.jsx)(g.Z,{tabLevel:n("students"),customStyleContainer:{borderTopRightRadius:"6px"},customStyleLevel:{borderTopRightRadius:"6px"},onTabAction:d,tabValue:2,currentValue:e})})]})},C=function(){return(0,f.jsxs)("div",{className:r.Z.insprofilesetting,children:[(0,f.jsx)("div",{className:r.Z.navbar,children:(0,f.jsx)(d.default,{status:"home"})}),(0,f.jsxs)("div",{className:r.Z.staff_tab_container,children:[(0,f.jsx)("div",{children:(0,f.jsx)("div",{className:r.Z.staff_tab_sidebar,children:(0,f.jsx)(i.Z,{activeIndex:0})})}),(0,f.jsxs)("div",{className:r.Z.staff_tab_main,children:[(0,f.jsx)(Z,{activeIndex:0}),(0,f.jsx)("div",{className:r.Z.staff_tab_department_wrapper,children:(0,f.jsx)(j,{})})]})]})]})}},70462:function(t,e,n){n.d(e,{Z:function(){return f}});var a=n(72791),d=n(95048),r=n(39230),i=n(6245),s=n(69721),o=n(90788),l=n(80184),c=function(t){var e=t.children;return(0,l.jsx)("div",{className:o.Z.common_card_wrapper,children:e})},u=n(85050),_=n(93738),p=n(21093),m=n(16871),v=n(43504),f=function(t){var e,n,o,f,h,x,b=t.activeIndex,j=(0,r.$G)().t,g=(0,d.v9)((function(t){return t.idChange})),Z=(0,m.UO)(),C=(0,i.S$)({id:null===g||void 0===g?void 0:g.id,skip:!(null!==g&&void 0!==g&&g.id)}),k=C.instituteStatsCount,N=C.instituteStatsCountRefetch;return(0,a.useEffect)((function(){null!==g&&void 0!==g&&g.id&&N()}),[null===g||void 0===g?void 0:g.id,N]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(p.Z,{whichType:"PREVIOUS_GO"}),(0,l.jsx)(u.Z,{dynamicImage:null!==k&&void 0!==k&&null!==(e=k.stats)&&void 0!==e&&e.insProfileCoverPhoto?"".concat(s.yI,"/").concat(null===k||void 0===k||null===(n=k.stats)||void 0===n?void 0:n.insProfileCoverPhoto):"/images/profileAndCover/department-cover.svg"}),(0,l.jsx)(c,{children:(0,l.jsx)(v.rU,{to:"/q/".concat(Z.username,"/department"),children:(0,l.jsx)(_.Z,{cardAsHead:!1,heading:j("departments"),description:j("dept_in_ins"),count:(null===k||void 0===k||null===(o=k.stats)||void 0===o?void 0:o.departmentCount)||0,customStyleCard:{borderRadius:"18px 18px 0px 0px",border:"none",marginTop:"-2.49vw",cursor:"pointer"},asActive:0===b&&!0})})}),(0,l.jsx)(v.rU,{to:"/q/".concat(Z.username,"/staff"),children:(0,l.jsx)(_.Z,{cardAsHead:!1,heading:j("total_staffs"),description:j("all_staff_working"),count:(null===k||void 0===k||null===(f=k.stats)||void 0===f?void 0:f.staffCount)||0,asActive:1===b&&!0,customStyleCard:{cursor:"pointer"}})}),(0,l.jsx)(v.rU,{to:"/q/".concat(Z.username,"/student"),children:(0,l.jsx)(_.Z,{cardAsHead:!1,heading:j("total_students"),description:j("current_plus"),count:(null===k||void 0===k||null===(h=k.stats)||void 0===h?void 0:h.studentCount)||0,customStyleCard:{cursor:"pointer"},asActive:2===b&&!0})}),(0,l.jsx)(v.rU,{to:"/q/".concat(Z.username,"/student?a=unapproved"),children:(0,l.jsx)(_.Z,{cardAsHead:!1,heading:j("total_unapproved_students"),description:j("current_plus"),count:(null===k||void 0===k||null===(x=k.stats)||void 0===x?void 0:x.un_approved_student_count)||0,customStyleCard:{borderRadius:"0 0 12px 12px",borderBottom:"0.4px solid rgba(0, 0, 0, 0.15)",cursor:"pointer"},asActive:3===b&&!0})})]})}},81490:function(t,e){e.Z={departments:"Departments_departments__MtyWV",deptcontainer:"Departments_deptcontainer__jvgAe",department_add_new:"Departments_department_add_new__e8m85",department_card_name:"Departments_department_card_name__YHN1k",department_card_head:"Departments_department_card_head__rMCPk",department_card_title:"Departments_department_card_title__pYCbV",department_conatiner:"Departments_department_conatiner__+CRQb",department_hr:"Departments_department_hr__Yx7B3",department_card_container:"Departments_department_card_container__eQrcm",department_card_image:"Departments_department_card_image__nswVA",edit_container:"Departments_edit_container__RcNp1"}},6796:function(t,e){e.Z={navbar:"staffTab_navbar__Zam1e",staff_tab_container:"staffTab_staff_tab_container__zBlIX",staff_tab_sidebar:"staffTab_staff_tab_sidebar__IMkEm",staff_tab_main:"staffTab_staff_tab_main__J0rQb",staff_tab_tabs:"staffTab_staff_tab_tabs__mT+zz",staff_tab_department_wrapper:"staffTab_staff_tab_department_wrapper__12Rd7"}}}]);
//# sourceMappingURL=88466.5d0fe518.chunk.js.map
"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[312,6876],{57431:function(e,i,t){var n=t(1413),a=(t(72791),t(80272)),s=t(80184);i.Z=function(e){var i,t=e.valueLength,r=e.maxLength,l=e.customStyle;return(0,s.jsxs)("section",{style:(0,n.Z)({},l),className:a.Z.string_container,children:[null!==(i=null===t||void 0===t?void 0:t.length)&&void 0!==i?i:0,"/",r]})}},20312:function(e,i,t){t.r(i),t.d(i,{default:function(){return S}});var n=t(1413),a=t(29439),s=t(72791),r="CreateDepartment_DModal__3QHry",l="CreateDepartment_title__K2VUT",d="CreateDepartment_input__F08Y4",o="CreateDepartment_mid__pRfdT",c="CreateDepartment_text__qomYt",u="CreateDepartment_btn__bzFPY",f="CreateDepartment_notFound__ac5c5",v=t(5574),h=t(39230),_=(t(7135),t(69721)),g=t(33992),m=t(49384),p=t(78687),x=t(48673),j=t(46876),N=t(57431),Z=t(80184);var S=function(e){var i,t=e.departmentModal,S=e.hideModal,C=e.edit,k=e.setEdit,w=e.editDepartment,L=e.onReftech,M=(0,p.useSelector)((function(e){return e.idChange.id})),A=(0,s.useState)(!1),D=(0,a.Z)(A,2),T=D[0],b=D[1],y=(0,s.useState)(C&&(null===w||void 0===w?void 0:w.dHead)),F=(0,a.Z)(y,2),R=F[0],I=F[1],H=(0,s.useState)(!1),P=(0,a.Z)(H,2),O=P[0],E=P[1],q=(0,s.useState)(!0),G=(0,a.Z)(q,2),Q=G[0],U=G[1],Y=(0,h.$G)().t,z=(0,s.useState)({dName:C&&(null===w||void 0===w?void 0:w.dName)||"",dTitle:C&&(null===w||void 0===w?void 0:w.dTitle)||"",sid:C&&(null===w||void 0===w||null===(i=w.dHead)||void 0===i?void 0:i._id)||"",gr_initials:C&&(null===w||void 0===w?void 0:w.gr_initials)||""}),B=(0,a.Z)(z,2),K=B[0],V=B[1],W=(0,g.SM)({id:M,skip:!M}).allDepartmentRefetch,$=(0,g.Gg)(),J=(0,a.Z)($,1)[0],X=(0,g.nr)(),ee=(0,a.Z)(X,1)[0],ie=(0,p.useDispatch)();return(0,s.useEffect)((function(){var e;C&&w&&(V({dName:(null===w||void 0===w?void 0:w.dName)||"",dTitle:(null===w||void 0===w?void 0:w.dTitle)||"",sid:(null===w||void 0===w||null===(e=w.dHead)||void 0===e?void 0:e._id)||"",gr_initials:(null===w||void 0===w?void 0:w.gr_initials)||""}),I(null===w||void 0===w?void 0:w.dHead))}),[C,w]),(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(v.Z,{open:t,children:(0,Z.jsxs)("div",{className:r,children:[(0,Z.jsxs)("div",{className:l,children:[C?(0,Z.jsx)("h5",{children:Y("edit_department")}):(0,Z.jsx)("h5",{children:Y("add_new_dept")}),(0,Z.jsx)("img",{src:"/images/close-post-icon.svg",onClick:function(){S(!1),k(!1),V({dName:"",dTitle:"",sid:"",gr_initials:""}),I("")},alt:""})]}),(0,Z.jsx)("div",{hidden:Q,className:f,children:Y("fill_all_the_details")}),(0,Z.jsxs)("div",{className:d,children:[(0,Z.jsx)("h6",{children:Y("department_name")}),(0,Z.jsx)("input",{type:"text",value:K.dName,onChange:function(e){var i;(null===(i=e.target.value)||void 0===i?void 0:i.length)<=45&&(V((0,n.Z)((0,n.Z)({},K),{},{dName:e.target.value})),U(!0))},required:!0,placeholder:Y("dept_example")}),(0,Z.jsx)(N.Z,{maxLength:45,valueLength:K.dName})]}),(0,Z.jsxs)("div",{className:o,onClick:function(){return b(!0)},children:[(0,Z.jsx)("img",{src:null!==R&&void 0!==R&&R.staffProfilePhoto?"".concat(_.yI,"/").concat(R.staffProfilePhoto):"/images/avatar-icon.png",alt:""}),(0,Z.jsxs)("div",{className:c,children:[(0,Z.jsx)("h6",{children:R?"".concat(null===R||void 0===R?void 0:R.staffFirstName," ").concat(R.staffMiddleName?R.staffMiddleName:""," ").concat(null===R||void 0===R?void 0:R.staffLastName):"".concat(Y("assign_dhead")," ").concat(Y("optional"))}),(0,Z.jsx)("p",{children:Y("search_from_joined_list")})]})]}),(0,Z.jsxs)("div",{className:d,children:[(0,Z.jsx)("h6",{children:Y("give_dhead_title")}),(0,Z.jsx)("input",{type:"text",value:K.dTitle,onChange:function(e){var i;(null===(i=e.target.value)||void 0===i?void 0:i.length)<=40&&(V((0,n.Z)((0,n.Z)({},K),{},{dTitle:e.target.value})),U(!0))},placeholder:Y("dhead_example"),required:!0}),(0,Z.jsx)(N.Z,{maxLength:40,valueLength:K.dTitle})]}),(0,Z.jsxs)("div",{className:d,children:[(0,Z.jsx)("h6",{children:Y("department_initials")}),(0,Z.jsx)("input",{type:"text",value:K.gr_initials,onChange:function(e){var i;(null===(i=e.target.value)||void 0===i?void 0:i.length)<=10&&(V((0,n.Z)((0,n.Z)({},K),{},{gr_initials:e.target.value})),U(!0))},placeholder:Y("department_initials_placeholder"),required:!0}),(0,Z.jsx)(N.Z,{maxLength:10,valueLength:K.gr_initials})]}),(0,Z.jsxs)("button",{className:u,onClick:function(){if(K.dName&&K.dTitle)if(E(!0),C){var e,i={dName:(null===w||void 0===w?void 0:w.dName)===K.dName?"":K.dName,dTitle:(null===w||void 0===w?void 0:w.dTitle)===K.dTitle?"":K.dTitle,sid:(null===w||void 0===w||null===(e=w.dHead)||void 0===e?void 0:e._id)===K.sid?"":K.sid,gr_initials:(null===w||void 0===w?void 0:w.gr_initials)===K.gr_initials?"":K.gr_initials};ee({department:i,did:null===w||void 0===w?void 0:w._id}).then((function(e){e&&(ie(x.S.editOneDepartment({did:null===w||void 0===w?void 0:w._id,dName:K.dName,dTitle:K.dTitle,dHead:R})),L(),S(!1),E(!1),V({dName:"",dTitle:"",sid:"",gr_initials:""}),I(""))})).catch({})}else J({departmentCreate:K,id:M}).then((function(e){e&&(S(!1),W(),E(!1),V({dName:"",dTitle:"",sid:"",gr_initials:""}),I(""))})).catch({});else U(!1)},disabled:O,children:[C?(0,Z.jsx)("p",{children:Y("update")}):(0,Z.jsx)("p",{children:Y("create")}),O&&(0,Z.jsx)("div",{children:(0,Z.jsx)(m.Z,{})})]})]})}),T&&(0,Z.jsx)(j.default,{assignHead:T,headSelect:function(e){I(e),V((0,n.Z)((0,n.Z)({},K),{},{sid:e._id})),U(!0)},title:Y("assign-d-head"),onClose:function(){return b((function(e){return!e}))}})]})}},46876:function(e,i,t){t.r(i);var n=t(93433),a=t(29439),s=t(72791),r=t(23441),l=t(78687),d=t(12923),o=t(763),c=t(69721),u=t(52124),f=t(5574),v=t(39230),h=t(80184),_=window.innerHeight;i.default=function(e){var i=e.onClose,t=e.title,g=e.headSelect,m=e.assignHead,p=e.disabledId,x=e.instituteId,j=e.viewAs,N=(0,v.$G)().t,Z=(0,s.useState)(1),S=(0,a.Z)(Z,2),C=S[0],k=S[1],w=(0,s.useState)(!0),L=(0,a.Z)(w,2),M=L[0],A=L[1],D=(0,r.YD)(),T=(0,a.Z)(D,2),b=T[0],y=T[1],F=(0,s.useState)(""),R=(0,a.Z)(F,2),I=R[0],H=R[1],P=s.useState([]),O=(0,a.Z)(P,2),E=O[0],q=O[1],G=(0,l.useSelector)((function(e){return e.idChange})),Q=(0,d.vI)({skip:"ADMISSION_ADMIN"===j?!x:!(null!==G&&void 0!==G&&G.id),search:{search:I,page:C,id:"ADMISSION_ADMIN"===j?x:null===G||void 0===G?void 0:G.id,limit:10}}),U=Q.assignSearchStaff,Y=Q.assignSearchStaffRefetch;s.useEffect((function(){null!==G&&void 0!==G&&G.id&&Y()}),[null===G||void 0===G?void 0:G.id,Y,C]),(0,s.useEffect)((function(){y&&M&&k((function(e){return e+1}))}),[y,M]),s.useEffect((function(){null!==U&&void 0!==U&&U.staff&&q(I?null===U||void 0===U?void 0:U.staff:function(e){return function(e){for(var i=0;i<(null===e||void 0===e?void 0:e.length);i++)for(var t=i+1;t<(null===e||void 0===e?void 0:e.length);t++){var n,a;(null===(n=e[i])||void 0===n?void 0:n._id)===(null===(a=e[t])||void 0===a?void 0:a._id)&&(null===e||void 0===e||e.splice(t,1))}return e}([].concat((0,n.Z)(e),(0,n.Z)(null===U||void 0===U?void 0:U.staff)))}),10===(null===U||void 0===U?void 0:U.staff.length)?A(!0):A(!1)}),[null===U||void 0===U?void 0:U.staff]),(0,s.useEffect)((function(){I&&z()}),[I]);var z=function(){Y()},B=(0,s.useCallback)((0,o.debounce)((function(e){return H(e)}),500),[]),K=function(e){p===(null===e||void 0===e?void 0:e._id)||(g(e),"ADMISSION_ADMIN"===j||i())};return(0,h.jsx)(f.Z,{open:m,onClose:i,children:(0,h.jsxs)("div",{style:{backgroundColor:"#FAFAFA",width:"35rem",height:"".concat(_-20,"px"),overflowX:"hidden"},children:[(0,h.jsxs)("div",{className:u.Z.assign_title,style:{width:"100%"},children:[(0,h.jsx)("h5",{children:t}),(0,h.jsx)("img",{src:"/images/close-post-icon.svg",onClick:i,alt:"staff assign pop close icon"})]}),(0,h.jsxs)("div",{className:u.Z.assign_search_container,children:[(0,h.jsx)("input",{type:"text",placeholder:N("search"),className:u.Z.assign_search_input,onChange:function(e){return i=e.target.value,void B(i);var i}}),(0,h.jsx)("img",{src:"/images/search-dash-icon.svg",alt:"search icon"})]}),(0,h.jsx)("div",{className:u.Z.assign_show_list,children:null===E||void 0===E?void 0:E.map((function(e,i){return(null===E||void 0===E?void 0:E.length)===i+1?(0,h.jsxs)("div",{ref:b,children:[(0,h.jsxs)("div",{className:u.Z.assign_show_list_each,style:p===e._id?{backgroundColor:"rgba(75, 26, 133, 0.1)"}:{backgroundColor:"inherit"},onClick:function(){return K(e)},children:[(0,h.jsx)("img",{src:null!==e&&void 0!==e&&e.staffProfilePhoto?"".concat(c.yI,"/").concat(e.staffProfilePhoto):"/images/demo_users/user1.svg",alt:"staff profile avatar"}),(0,h.jsxs)("div",{className:u.Z.assign_each_paragraph,children:[(0,h.jsx)("h6",{children:"".concat(e.staffFirstName," ").concat(null!==e&&void 0!==e&&e.staffMiddleName?null===e||void 0===e?void 0:e.staffMiddleName:""," ").concat(e.staffLastName)}),(0,h.jsxs)("p",{children:[" ",N("index")," ",null===e||void 0===e?void 0:e.staffROLLNO]})]})]}),(0,h.jsx)("hr",{})]},e._id):(0,h.jsxs)("div",{children:[(0,h.jsxs)("div",{className:u.Z.assign_show_list_each,style:p===e._id?{backgroundColor:"rgba(75, 26, 133, 0.1)"}:{backgroundColor:"inherit"},onClick:function(){return K(e)},children:[(0,h.jsx)("img",{src:null!==e&&void 0!==e&&e.staffProfilePhoto?"".concat(c.yI,"/").concat(e.staffProfilePhoto):"/images/demo_users/user1.svg",alt:"staff profile avatar"}),(0,h.jsxs)("div",{className:u.Z.assign_each_paragraph,children:[(0,h.jsx)("h6",{children:"".concat(e.staffFirstName," ").concat(null!==e&&void 0!==e&&e.staffMiddleName?null===e||void 0===e?void 0:e.staffMiddleName:""," ").concat(e.staffLastName)}),(0,h.jsxs)("p",{children:[" ",N("index")," ",null===e||void 0===e?void 0:e.staffROLLNO]})]})]}),(0,h.jsx)("hr",{})]},e._id)}))})]})})}},49384:function(e,i,t){t.d(i,{Z:function(){return s}});t(72791);var n=t(6307),a=t(80184),s=function(){return(0,a.jsx)(n.iT,{ariaLabel:"loading-indicator",height:20,width:20,color:"white",secondaryColor:"#1c023b"})}},12923:function(e,i,t){t.d(i,{Ec:function(){return j},Em:function(){return S},JM:function(){return h},NS:function(){return r},Pg:function(){return _},Q_:function(){return x},RH:function(){return v},Tv:function(){return o},U_:function(){return p},VN:function(){return l},Wj:function(){return u},ZS:function(){return f},_8:function(){return N},d5:function(){return c},tB:function(){return m},vI:function(){return Z},yx:function(){return d},zO:function(){return g}});var n=t(29439),a=t(91007),s=t(58208),r=function(e){var i=(0,s.YD)(e.search,{skip:e.skip});return{instituteAllSearch:i.data,instituteAllSearchRefetch:i.refetch}},l=function(){var e=(0,s.ak)();return[(0,n.Z)(e,1)[0]]},d=function(){var e=(0,s.WL)();return[(0,n.Z)(e,1)[0]]},o=function(e){var i=(0,s.pH)(e.list,{skip:e.skip});return{instituteFollowList:i.data,instituteFollowListRefetch:i.refetch}},c=function(e){var i=(0,s.MG)(e.data,{skip:e.skip});return{instituteOwnFollowingList:i.data,instituteOwnFollowingListRefetch:i.refetch}},u=function(){var e=(0,s.Ky)();return[(0,n.Z)(e,1)[0]]},f=function(e){var i=(0,s.p8)(e.list);return{userFollowList:i.data,userFollowListRefetch:i.refetch}},v=function(e){var i=(0,s.Wv)(e);return{userFollowingList:i.data,userFollowingListRefetch:i.refetch}},h=function(e){var i=(0,s.sz)(e.search,{skip:e.skip});return{userAllSearch:i.data,userAllSearchRefetch:i.refetch}},_=function(){var e=(0,s.Mk)();return[(0,n.Z)(e,1)[0]]},g=function(){var e=(0,s.$i)();return[(0,n.Z)(e,1)[0]]},m=function(){var e=(0,s.Do)();return[(0,n.Z)(e,1)[0]]},p=function(){var e=(0,s.He)();return[(0,n.Z)(e,1)[0]]},x=function(){var e=(0,s.vg)();return[(0,n.Z)(e,1)[0]]},j=function(){var e=(0,s.OO)();return[(0,n.Z)(e,1)[0]]},N=function(e){var i=(0,s.N2)(e);return{userCircleList:i.data,userCircleListRefetch:i.refetch}},Z=function(e){var i=(0,a.x6)(e.search,{skip:e.skip});return{assignSearchStaff:i.data,assignSearchStaffRefetch:i.refetch}},S=function(e){var i=(0,s.SJ)(e);return{universalUser:i.data,universalUserRefetch:i.refetch}}},7135:function(){},80272:function(e,i){i.Z={string_container:"StringLength_string_container__v6b--",mark_container:"StringLength_mark_container__KQsQy"}},52124:function(e,i){i.Z={assign_title:"AssignStaffModal_assign_title__4DGBV",assign_search_container:"AssignStaffModal_assign_search_container__3x6RD",assign_search_input:"AssignStaffModal_assign_search_input__rO3c7",assign_show_list:"AssignStaffModal_assign_show_list__yHhf7",assign_show_list_each:"AssignStaffModal_assign_show_list_each__ACUEw",assign_each_paragraph:"AssignStaffModal_assign_each_paragraph__pMHTq",universal_modal:"AssignStaffModal_universal_modal__czmpB",is_mulitselect_container:"AssignStaffModal_is_mulitselect_container__0cPQ2"}}}]);
//# sourceMappingURL=312.c91284a6.chunk.js.map
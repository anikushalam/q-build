"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[312,6876],{57431:function(i,e,t){var n=t(1413),a=(t(72791),t(80272)),s=t(80184);e.Z=function(i){var e,t=i.valueLength,r=i.maxLength,l=i.customStyle;return(0,s.jsxs)("section",{style:(0,n.Z)({},l),className:a.Z.string_container,children:[null!==(e=null===t||void 0===t?void 0:t.length)&&void 0!==e?e:0,"/",r]})}},20312:function(i,e,t){t.r(e),t.d(e,{default:function(){return S}});var n=t(1413),a=t(29439),s=t(72791),r="CreateDepartment_DModal__3QHry",l="CreateDepartment_title__K2VUT",d="CreateDepartment_input__F08Y4",o="CreateDepartment_mid__pRfdT",c="CreateDepartment_text__qomYt",u="CreateDepartment_btn__bzFPY",f="CreateDepartment_notFound__ac5c5",v=t(5574),h=t(39230),_=(t(7135),t(69721)),g=t(33992),m=t(49384),p=t(95048),x=t(48673),j=t(46876),N=t(57431),Z=t(80184);var S=function(i){var e,t=i.departmentModal,S=i.hideModal,C=i.edit,k=i.setEdit,w=i.editDepartment,L=i.onReftech,M=(0,p.v9)((function(i){return i.idChange.id})),b=(0,s.useState)(!1),A=(0,a.Z)(b,2),D=A[0],T=A[1],y=(0,s.useState)(C&&(null===w||void 0===w?void 0:w.dHead)),F=(0,a.Z)(y,2),I=F[0],R=F[1],H=(0,s.useState)(!1),P=(0,a.Z)(H,2),O=P[0],E=P[1],q=(0,s.useState)(!0),G=(0,a.Z)(q,2),Q=G[0],U=G[1],Y=(0,h.$G)().t,z=(0,s.useState)({dName:C&&(null===w||void 0===w?void 0:w.dName)||"",dTitle:C&&(null===w||void 0===w?void 0:w.dTitle)||"",sid:C&&(null===w||void 0===w||null===(e=w.dHead)||void 0===e?void 0:e._id)||"",gr_initials:C&&(null===w||void 0===w?void 0:w.gr_initials)||""}),B=(0,a.Z)(z,2),K=B[0],V=B[1],W=(0,g.SM)({id:M,skip:!M}).allDepartmentRefetch,$=(0,g.Gg)(),J=(0,a.Z)($,1)[0],X=(0,g.nr)(),ii=(0,a.Z)(X,1)[0],ei=(0,p.I0)();return(0,s.useEffect)((function(){var i;C&&w&&(V({dName:(null===w||void 0===w?void 0:w.dName)||"",dTitle:(null===w||void 0===w?void 0:w.dTitle)||"",sid:(null===w||void 0===w||null===(i=w.dHead)||void 0===i?void 0:i._id)||"",gr_initials:(null===w||void 0===w?void 0:w.gr_initials)||""}),R(null===w||void 0===w?void 0:w.dHead))}),[C,w]),(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(v.Z,{open:t,children:(0,Z.jsxs)("div",{className:r,children:[(0,Z.jsxs)("div",{className:l,children:[C?(0,Z.jsx)("h5",{children:Y("edit_department")}):(0,Z.jsx)("h5",{children:Y("add_new_dept")}),(0,Z.jsx)("img",{src:"/images/close-post-icon.svg",onClick:function(){S(!1),k(!1),V({dName:"",dTitle:"",sid:"",gr_initials:""}),R("")},alt:""})]}),(0,Z.jsx)("div",{hidden:Q,className:f,children:Y("fill_all_the_details")}),(0,Z.jsxs)("div",{className:d,children:[(0,Z.jsx)("h6",{children:Y("department_name")}),(0,Z.jsx)("input",{type:"text",value:K.dName,onChange:function(i){var e;(null===(e=i.target.value)||void 0===e?void 0:e.length)<=45&&(V((0,n.Z)((0,n.Z)({},K),{},{dName:i.target.value})),U(!0))},required:!0,placeholder:Y("dept_example")}),(0,Z.jsx)(N.Z,{maxLength:45,valueLength:K.dName})]}),(0,Z.jsxs)("div",{className:o,onClick:function(){return T(!0)},children:[(0,Z.jsx)("img",{src:null!==I&&void 0!==I&&I.staffProfilePhoto?"".concat(_.yI,"/").concat(I.staffProfilePhoto):"/images/avatar-icon.png",alt:""}),(0,Z.jsxs)("div",{className:c,children:[(0,Z.jsx)("h6",{children:I?"".concat(null===I||void 0===I?void 0:I.staffFirstName," ").concat(I.staffMiddleName?I.staffMiddleName:""," ").concat(null===I||void 0===I?void 0:I.staffLastName):"".concat(Y("assign_dhead")," ").concat(Y("optional"))}),(0,Z.jsx)("p",{children:Y("search_from_joined_list")})]})]}),(0,Z.jsxs)("div",{className:d,children:[(0,Z.jsx)("h6",{children:Y("give_dhead_title")}),(0,Z.jsx)("input",{type:"text",value:K.dTitle,onChange:function(i){var e;(null===(e=i.target.value)||void 0===e?void 0:e.length)<=40&&(V((0,n.Z)((0,n.Z)({},K),{},{dTitle:i.target.value})),U(!0))},placeholder:Y("dhead_example"),required:!0}),(0,Z.jsx)(N.Z,{maxLength:40,valueLength:K.dTitle})]}),(0,Z.jsxs)("div",{className:d,children:[(0,Z.jsx)("h6",{children:Y("department_initials")}),(0,Z.jsx)("input",{type:"text",value:K.gr_initials,onChange:function(i){var e;(null===(e=i.target.value)||void 0===e?void 0:e.length)<=10&&(V((0,n.Z)((0,n.Z)({},K),{},{gr_initials:i.target.value})),U(!0))},placeholder:Y("department_initials_placeholder"),required:!0}),(0,Z.jsx)(N.Z,{maxLength:10,valueLength:K.gr_initials})]}),(0,Z.jsxs)("button",{className:u,onClick:function(){if(K.dName&&K.dTitle)if(E(!0),C){var i,e={dName:(null===w||void 0===w?void 0:w.dName)===K.dName?"":K.dName,dTitle:(null===w||void 0===w?void 0:w.dTitle)===K.dTitle?"":K.dTitle,sid:(null===w||void 0===w||null===(i=w.dHead)||void 0===i?void 0:i._id)===K.sid?"":K.sid,gr_initials:(null===w||void 0===w?void 0:w.gr_initials)===K.gr_initials?"":K.gr_initials};ii({department:e,did:null===w||void 0===w?void 0:w._id}).then((function(i){i&&(ei(x.S.editOneDepartment({did:null===w||void 0===w?void 0:w._id,dName:K.dName,dTitle:K.dTitle,dHead:I})),L(),S(!1),E(!1),V({dName:"",dTitle:"",sid:"",gr_initials:""}),R(""))})).catch({})}else J({departmentCreate:K,id:M}).then((function(i){i&&(S(!1),W(),E(!1),V({dName:"",dTitle:"",sid:"",gr_initials:""}),R(""))})).catch({});else U(!1)},disabled:O,children:[C?(0,Z.jsx)("p",{children:Y("update")}):(0,Z.jsx)("p",{children:Y("create")}),O&&(0,Z.jsx)("div",{children:(0,Z.jsx)(m.Z,{})})]})]})}),D&&(0,Z.jsx)(j.default,{assignHead:D,headSelect:function(i){R(i),V((0,n.Z)((0,n.Z)({},K),{},{sid:i._id})),U(!0)},title:Y("assign-d-head"),onClose:function(){return T((function(i){return!i}))}})]})}},46876:function(i,e,t){t.r(e);var n=t(93433),a=t(29439),s=t(72791),r=t(23441),l=t(95048),d=t(12923),o=t(763),c=t(69721),u=t(52124),f=t(5574),v=t(39230),h=t(80184),_=window.innerHeight;e.default=function(i){var e=i.onClose,t=i.title,g=i.headSelect,m=i.assignHead,p=i.disabledId,x=i.instituteId,j=i.viewAs,N=(0,v.$G)().t,Z=(0,s.useState)(1),S=(0,a.Z)(Z,2),C=S[0],k=S[1],w=(0,s.useState)(!0),L=(0,a.Z)(w,2),M=L[0],b=L[1],A=(0,r.YD)(),D=(0,a.Z)(A,2),T=D[0],y=D[1],F=(0,s.useState)(""),I=(0,a.Z)(F,2),R=I[0],H=I[1],P=s.useState([]),O=(0,a.Z)(P,2),E=O[0],q=O[1],G=(0,l.v9)((function(i){return i.idChange})),Q=(0,d.vI)({skip:"ADMISSION_ADMIN"===j?!x:!(null!==G&&void 0!==G&&G.id),search:{search:R,page:C,id:"ADMISSION_ADMIN"===j?x:null===G||void 0===G?void 0:G.id,limit:10}}),U=Q.assignSearchStaff,Y=Q.assignSearchStaffRefetch;s.useEffect((function(){null!==G&&void 0!==G&&G.id&&Y()}),[null===G||void 0===G?void 0:G.id,Y,C]),(0,s.useEffect)((function(){y&&M&&k((function(i){return i+1}))}),[y,M]),s.useEffect((function(){null!==U&&void 0!==U&&U.staff&&q(R?null===U||void 0===U?void 0:U.staff:function(i){return function(i){for(var e=0;e<(null===i||void 0===i?void 0:i.length);e++)for(var t=e+1;t<(null===i||void 0===i?void 0:i.length);t++){var n,a;(null===(n=i[e])||void 0===n?void 0:n._id)===(null===(a=i[t])||void 0===a?void 0:a._id)&&(null===i||void 0===i||i.splice(t,1))}return i}([].concat((0,n.Z)(i),(0,n.Z)(null===U||void 0===U?void 0:U.staff)))}),10===(null===U||void 0===U?void 0:U.staff.length)?b(!0):b(!1)}),[null===U||void 0===U?void 0:U.staff]),(0,s.useEffect)((function(){R&&z()}),[R]);var z=function(){Y()},B=(0,s.useCallback)((0,o.debounce)((function(i){return H(i)}),500),[]),K=function(i){p===(null===i||void 0===i?void 0:i._id)||(g(i),"ADMISSION_ADMIN"===j||e())};return(0,h.jsx)(f.Z,{open:m,onClose:e,children:(0,h.jsxs)("div",{style:{backgroundColor:"#FAFAFA",width:"35rem",height:"".concat(_-20,"px"),overflowX:"hidden"},children:[(0,h.jsxs)("div",{className:u.Z.assign_title,style:{width:"100%"},children:[(0,h.jsx)("h5",{children:t}),(0,h.jsx)("img",{src:"/images/close-post-icon.svg",onClick:e,alt:"staff assign pop close icon"})]}),(0,h.jsxs)("div",{className:u.Z.assign_search_container,children:[(0,h.jsx)("input",{type:"text",placeholder:N("search"),className:u.Z.assign_search_input,onChange:function(i){return e=i.target.value,void B(e);var e}}),(0,h.jsx)("img",{src:"/images/search-dash-icon.svg",alt:"search icon"})]}),(0,h.jsx)("div",{className:u.Z.assign_show_list,children:null===E||void 0===E?void 0:E.map((function(i,e){return(null===E||void 0===E?void 0:E.length)===e+1?(0,h.jsxs)("div",{ref:T,children:[(0,h.jsxs)("div",{className:u.Z.assign_show_list_each,style:p===i._id?{backgroundColor:"rgba(75, 26, 133, 0.1)"}:{backgroundColor:"inherit"},onClick:function(){return K(i)},children:[(0,h.jsx)("img",{src:null!==i&&void 0!==i&&i.staffProfilePhoto?"".concat(c.yI,"/").concat(i.staffProfilePhoto):"/images/member_tab/class/default_avatar.svg",alt:"staff profile avatar"}),(0,h.jsxs)("div",{className:u.Z.assign_each_paragraph,children:[(0,h.jsx)("h6",{children:"".concat(i.staffFirstName," ").concat(null!==i&&void 0!==i&&i.staffMiddleName?null===i||void 0===i?void 0:i.staffMiddleName:""," ").concat(i.staffLastName)}),(0,h.jsxs)("p",{children:[" ",N("index")," ",null===i||void 0===i?void 0:i.staffROLLNO]})]})]}),(0,h.jsx)("hr",{})]},i._id):(0,h.jsxs)("div",{children:[(0,h.jsxs)("div",{className:u.Z.assign_show_list_each,style:p===i._id?{backgroundColor:"rgba(75, 26, 133, 0.1)"}:{backgroundColor:"inherit"},onClick:function(){return K(i)},children:[(0,h.jsx)("img",{src:null!==i&&void 0!==i&&i.staffProfilePhoto?"".concat(c.yI,"/").concat(i.staffProfilePhoto):"/images/member_tab/class/default_avatar.svg",alt:"staff profile avatar"}),(0,h.jsxs)("div",{className:u.Z.assign_each_paragraph,children:[(0,h.jsx)("h6",{children:"".concat(i.staffFirstName," ").concat(null!==i&&void 0!==i&&i.staffMiddleName?null===i||void 0===i?void 0:i.staffMiddleName:""," ").concat(i.staffLastName)}),(0,h.jsxs)("p",{children:[" ",N("index")," ",null===i||void 0===i?void 0:i.staffROLLNO]})]})]}),(0,h.jsx)("hr",{})]},i._id)}))})]})})}},49384:function(i,e,t){t.d(e,{Z:function(){return s}});t(72791);var n=t(6307),a=t(80184),s=function(){return(0,a.jsx)(n.iT,{ariaLabel:"loading-indicator",height:20,width:20,color:"white",secondaryColor:"#1c023b"})}},12923:function(i,e,t){t.d(e,{Ec:function(){return j},Em:function(){return S},JM:function(){return h},NS:function(){return r},Pg:function(){return _},Q_:function(){return x},RH:function(){return v},Tv:function(){return o},U_:function(){return p},VN:function(){return l},Wj:function(){return u},ZS:function(){return f},_8:function(){return N},d5:function(){return c},tB:function(){return m},vI:function(){return Z},yx:function(){return d},zO:function(){return g}});var n=t(29439),a=t(91007),s=t(58208),r=function(i){var e=(0,s.YD)(i.search,{skip:i.skip});return{instituteAllSearch:e.data,instituteAllSearchRefetch:e.refetch}},l=function(){var i=(0,s.ak)();return[(0,n.Z)(i,1)[0]]},d=function(){var i=(0,s.WL)();return[(0,n.Z)(i,1)[0]]},o=function(i){var e=(0,s.pH)(i.list,{skip:i.skip});return{instituteFollowList:e.data,instituteFollowListRefetch:e.refetch}},c=function(i){var e=(0,s.MG)(i.data,{skip:i.skip});return{instituteOwnFollowingList:e.data,instituteOwnFollowingListRefetch:e.refetch}},u=function(){var i=(0,s.Ky)();return[(0,n.Z)(i,1)[0]]},f=function(i){var e=(0,s.p8)(i.list);return{userFollowList:e.data,userFollowListRefetch:e.refetch}},v=function(i){var e=(0,s.Wv)(i);return{userFollowingList:e.data,userFollowingListRefetch:e.refetch}},h=function(i){var e=(0,s.sz)(i.search,{skip:i.skip});return{userAllSearch:e.data,userAllSearchRefetch:e.refetch}},_=function(){var i=(0,s.Mk)();return[(0,n.Z)(i,1)[0]]},g=function(){var i=(0,s.$i)();return[(0,n.Z)(i,1)[0]]},m=function(){var i=(0,s.Do)();return[(0,n.Z)(i,1)[0]]},p=function(){var i=(0,s.He)();return[(0,n.Z)(i,1)[0]]},x=function(){var i=(0,s.vg)();return[(0,n.Z)(i,1)[0]]},j=function(){var i=(0,s.OO)();return[(0,n.Z)(i,1)[0]]},N=function(i){var e=(0,s.N2)(i);return{userCircleList:e.data,userCircleListRefetch:e.refetch}},Z=function(i){var e=(0,a.x6)(i.search,{skip:i.skip});return{assignSearchStaff:e.data,assignSearchStaffRefetch:e.refetch}},S=function(i){var e=(0,s.SJ)(i);return{universalUser:e.data,universalUserRefetch:e.refetch}}},7135:function(){},80272:function(i,e){e.Z={string_container:"StringLength_string_container__v6b--",mark_container:"StringLength_mark_container__KQsQy"}},52124:function(i,e){e.Z={assign_title:"AssignStaffModal_assign_title__4DGBV",assign_search_container:"AssignStaffModal_assign_search_container__3x6RD",assign_search_input:"AssignStaffModal_assign_search_input__rO3c7",assign_show_list:"AssignStaffModal_assign_show_list__yHhf7",assign_show_list_each:"AssignStaffModal_assign_show_list_each__ACUEw",assign_each_paragraph:"AssignStaffModal_assign_each_paragraph__pMHTq",universal_modal:"AssignStaffModal_universal_modal__czmpB",is_mulitselect_container:"AssignStaffModal_is_mulitselect_container__0cPQ2"}}}]);
//# sourceMappingURL=312.194fa8f4.chunk.js.map
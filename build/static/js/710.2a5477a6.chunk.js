"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[710,6876],{27302:function(e,t,s){var i=s(1413),a=(s(72791),s(80272)),n=s(80184);t.Z=function(e){var t=e.message,s=e.customStyle;return(0,n.jsx)("section",{style:(0,i.Z)({},s),className:a.Z.mark_container,children:t})}},57431:function(e,t,s){var i=s(1413),a=(s(72791),s(80272)),n=s(80184);t.Z=function(e){var t,s=e.valueLength,l=e.maxLength,c=e.customStyle;return(0,n.jsxs)("section",{style:(0,i.Z)({},c),className:a.Z.string_container,children:[null!==(t=null===s||void 0===s?void 0:s.length)&&void 0!==t?t:0,"/",l]})}},50710:function(e,t,s){s.r(t),s.d(t,{default:function(){return m}});var i=s(29439),a=s(1413),n=s(72791),l=(s(7135),{DModal:"CreateClass_DModal__pza9d",title:"CreateClass_title__CRjLH",input:"CreateClass_input__1Ym9U",mid:"CreateClass_mid__ti5ga",text:"CreateClass_text__ePxmn",btn:"CreateClass_btn__wnfka",notFound:"CreateClass_notFound__FilS6",item:"CreateClass_item__AXKu9",select:"CreateClass_select__E-7CD",tooltip:"CreateClass_tooltip__4Yui1",profileToolTip:"CreateClass_profileToolTip__dMV+T",triangle:"CreateClass_triangle__V7X33",triangleDisplay:"CreateClass_triangleDisplay__Rr4go",profilelist:"CreateClass_profilelist__5nZKb"}),c=s(5574),o=s(39230),r=s(33992),d=s(69721),u=s(49384),f=s(46876),v=s(57431),h=s(27302),g=s(80184);function _(e){var t=e.options,s=e.switchOption,i=e.customStyle;return(0,g.jsxs)("div",{className:l.profileToolTip,style:(0,a.Z)({},i),children:[(0,g.jsx)("div",{className:l.triangle}),(0,g.jsx)("div",{className:l.profilelist,children:null===t||void 0===t?void 0:t.map((function(e,t){return(0,g.jsx)("div",{value:e._id,onClick:function(){return s(e)},children:e.className},t)}))})]})}var m=function(e){var t,s,m=e.departmentModal,p=e.hideModal,j=e.id,x=e.did,C=e.bid,S=e.edit,Z=e.setEdit,N=e.editClass,b=(0,o.$G)().t,T=(0,n.useState)(!1),P=(0,i.Z)(T,2),k=P[0],M=P[1],w=(0,n.useState)(!0),L=(0,i.Z)(w,2),I=L[0],H=L[1],y=(0,n.useState)(!1),A=(0,i.Z)(y,2),F=A[0],D=A[1],R=(0,n.useState)(!1),O=(0,i.Z)(R,2),E=O[0],U=O[1],q=(0,n.useState)([]),Y=(0,i.Z)(q,2),z=Y[0],B=Y[1],G=(0,n.useState)(!1),K=(0,i.Z)(G,2),Q=K[0],V=K[1],W=(0,n.useState)(S&&(null===N||void 0===N?void 0:N.className)||b("select_standerd_")),X=(0,i.Z)(W,2),$=X[0],J=X[1],ee=(0,n.useState)({mcId:S&&(null===N||void 0===N?void 0:N.masterClassName)||"",classTitle:S&&(null===N||void 0===N?void 0:N.classTitle)||"",classHeadTitle:S&&(null===N||void 0===N?void 0:N.classHeadTitle)||"",sid:S&&(null===N||void 0===N||null===(t=N.classTeacher)||void 0===t?void 0:t._id)||"",aggregatePassingPercentage:S&&(null===N||void 0===N||null===(s=N.finalReportsSettings)||void 0===s?void 0:s.aggregatePassingPercentage)||"",optionalSubjectCount:S&&(null===N||void 0===N?void 0:N.optionalSubjectCount)||b("select_number_of_subject")}),te=(0,i.Z)(ee,2),se=te[0],ie=te[1],ae=(0,n.useState)(!1),ne=(0,i.Z)(ae,2),le=ne[0],ce=ne[1],oe=(0,n.useState)(S&&(null===N||void 0===N?void 0:N.classTeacher)),re=(0,i.Z)(oe,2),de=re[0],ue=re[1],fe=(0,r.tx)({data:{id:j,did:x},skip:!j}).allClassMaster,ve=(0,r.u2)(),he=(0,i.Z)(ve,1)[0],ge=(0,r.pL)(),_e=(0,i.Z)(ge,1)[0],me=(0,r._C)({did:x,skip:!1}).oneDepartmentRefetch;return(0,n.useEffect)((function(){var e,t;S&&N&&(ie({mcId:(null===N||void 0===N?void 0:N.masterClassName)||"",classTitle:(null===N||void 0===N?void 0:N.classTitle)||"",classHeadTitle:(null===N||void 0===N?void 0:N.classHeadTitle)||"",sid:(null===N||void 0===N||null===(e=N.classTeacher)||void 0===e?void 0:e._id)||"",aggregatePassingPercentage:(null===N||void 0===N||null===(t=N.finalReportsSettings)||void 0===t?void 0:t.aggregatePassingPercentage)||0,optionalSubjectCount:(null===N||void 0===N?void 0:N.optionalSubjectCount)||b("select_number_of_subject")}),J((null===N||void 0===N?void 0:N.className)||"Please select standard"),ue(null===N||void 0===N?void 0:N.classTeacher))}),[S,N]),(0,n.useEffect)((function(){null!==fe&&void 0!==fe&&fe.classMaster&&B(null===fe||void 0===fe?void 0:fe.classMaster)}),[fe]),(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(c.Z,{open:m,children:(0,g.jsxs)("div",{className:l.DModal,children:[(0,g.jsxs)("div",{className:l.title,children:[S?(0,g.jsx)("h5",{children:"Edit Class"}):(0,g.jsx)("h5",{children:b("add_class_n_place")}),(0,g.jsx)("img",{src:"/images/close-post-icon.svg",alt:"",onClick:function(){p(!1),Z(!1),J(b("select_standerd_")),ie({mcId:"",classTitle:"",classHeadTitle:"",sid:"",aggregatePassingPercentage:0,optionalSubjectCount:b("select_number_of_subject")}),ue("")}})]}),(0,g.jsx)("div",{hidden:I,className:l.notFound,children:"Please Fill all details to create a Class"}),(0,g.jsxs)("div",{className:l.item,onClick:function(){return D(!F)},children:[(0,g.jsx)("h6",{children:b("select_standard_grade_place")}),(0,g.jsxs)("div",{className:l.select,children:[(0,g.jsx)("p",{children:$}),(0,g.jsx)("img",{src:"/images/select-icon.svg",alt:""})]}),F&&(0,g.jsx)("div",{className:l.tooltip,children:(0,g.jsx)(_,{options:z,switchOption:function(e){J(e.className),ie((0,a.Z)((0,a.Z)({},se),{},{mcId:e._id})),H(!0)}})})]}),(0,g.jsxs)("div",{className:l.input,children:[(0,g.jsx)("h6",{children:b("class_name")}),(0,g.jsx)("input",{type:"text",value:se.classTitle,onChange:function(e){var t;(null===(t=e.target.value)||void 0===t?void 0:t.length)<=45&&(ie((0,a.Z)((0,a.Z)({},se),{},{classTitle:e.target.value})),H(!0))},placeholder:"e.g. 6th A / FY BSC",required:!0}),(0,g.jsx)(v.Z,{maxLength:45,valueLength:se.classTitle})]}),(0,g.jsxs)("div",{className:l.mid,onClick:function(){return ce(!0)},children:[(0,g.jsx)("img",{src:null!==de&&void 0!==de&&de.staffProfilePhoto?"".concat(d.yI,"/").concat(de.staffProfilePhoto):"/images/avatar-icon.png",alt:""}),(0,g.jsxs)("div",{className:l.text,children:[(0,g.jsx)("h6",{children:de?"".concat(null===de||void 0===de?void 0:de.staffFirstName," ").concat((null===de||void 0===de?void 0:de.staffMiddleName)||""," ").concat(null===de||void 0===de?void 0:de.staffLastName):"".concat(b("assign_chead")," ").concat(b("optional"))}),(0,g.jsx)("p",{children:b("search_from_joined_list")})]})]}),(0,g.jsxs)("div",{className:l.input,children:[(0,g.jsx)("h6",{children:b("give_chead_title")}),(0,g.jsx)("input",{type:"text",value:se.classHeadTitle,onChange:function(e){var t;(null===(t=e.target.value)||void 0===t?void 0:t.length)<=40&&(ie((0,a.Z)((0,a.Z)({},se),{},{classHeadTitle:e.target.value})),H(!0))},required:!0,placeholder:b("class_head_example")}),(0,g.jsx)(v.Z,{maxLength:40,valueLength:se.classHeadTitle})]}),(0,g.jsxs)("div",{className:l.input,children:[(0,g.jsxs)("h6",{children:[b("pass_percentage")," ",b("optional")]}),(0,g.jsx)("input",{type:"text",value:se.aggregatePassingPercentage,onChange:function(e){+e.target.value<=100?(ie((0,a.Z)((0,a.Z)({},se),{},{aggregatePassingPercentage:+e.target.value})),H(!0)):V(!0)},placeholder:"E.g. 34"}),Q&&(0,g.jsx)(h.Z,{message:"Mark is not greater than 100"})]}),(0,g.jsxs)("div",{className:l.item,onClick:function(){return U((function(e){return!e}))},children:[(0,g.jsx)("h6",{children:b("optional_subject")}),(0,g.jsxs)("div",{className:l.select,children:[(0,g.jsx)("p",{children:se.optionalSubjectCount}),(0,g.jsx)("img",{src:"/images/select-icon.svg",alt:""})]}),E&&(0,g.jsx)("div",{className:l.tooltip,children:(0,g.jsx)(_,{customStyle:{top:"561px",right:"-51px"},options:[{className:0},{className:1},{className:2},{className:3},{className:4},{className:5}],switchOption:function(e){ie((0,a.Z)((0,a.Z)({},se),{},{optionalSubjectCount:e.className})),H(!0)}})})]}),(0,g.jsxs)("button",{className:l.btn,onClick:function(){if(se.mcId&&se.classTitle&&se.classHeadTitle)if(M(!0),S){var e,t={mcId:se.mcId,classTitle:(null===N||void 0===N?void 0:N.classTitle)===se.classTitle?"":se.classTitle,classHeadTitle:(null===N||void 0===N?void 0:N.classHeadTitle)===se.classHeadTitle?"":se.classHeadTitle,classTeacher:(null===N||void 0===N||null===(e=N.classTeacher)||void 0===e?void 0:e._id)===se.sid?"":se.sid,aggregatePassingPercentage:+se.aggregatePassingPercentage,optionalSubjectCount:se.optionalSubjectCount===b("select_number_of_subject")?0:+se.optionalSubjectCount};_e({classDetail:t,cid:null===N||void 0===N?void 0:N._id}).then((function(){p(!1),M(!1),Z(!1),me(),ie({mcId:"",classTitle:"",classHeadTitle:"",sid:"",aggregatePassingPercentage:0,optionalSubjectCount:b("select_number_of_subject")}),ue("")})).catch({})}else he({classCreate:{mcId:se.mcId,classTitle:se.classTitle,classHeadTitle:se.classHeadTitle,sid:se.sid,aggregatePassingPercentage:se.aggregatePassingPercentage||0,optionalSubjectCount:se.optionalSubjectCount===b("select_number_of_subject")?0:+se.optionalSubjectCount},id:j,did:x,bid:C}).then((function(){p(!1),M(!1),me(),ie({mcId:"",classTitle:"",classHeadTitle:"",sid:"",aggregatePassingPercentage:0,optionalSubjectCount:"Please select no. of subjects one can choose"}),ue("")})).catch({});else H(!1)},disabled:k,children:[S?(0,g.jsx)("p",{children:"Update"}):(0,g.jsx)("p",{children:b("create")}),k&&(0,g.jsx)("div",{children:(0,g.jsx)(u.Z,{})})]})]})}),le&&(0,g.jsx)(f.default,{assignHead:le,headSelect:function(e){ue(e),ie((0,a.Z)((0,a.Z)({},se),{},{sid:e._id})),H(!0)},title:b("assign_chead"),onClose:function(){return ce((function(e){return!e}))}})]})}},46876:function(e,t,s){s.r(t);var i=s(93433),a=s(29439),n=s(72791),l=s(23441),c=s(78687),o=s(12923),r=s(763),d=s(69721),u=s(52124),f=s(5574),v=s(39230),h=s(80184),g=window.innerHeight;t.default=function(e){var t=e.onClose,s=e.title,_=e.headSelect,m=e.assignHead,p=e.disabledId,j=e.instituteId,x=e.viewAs,C=(0,v.$G)().t,S=(0,n.useState)(1),Z=(0,a.Z)(S,2),N=Z[0],b=Z[1],T=(0,n.useState)(!0),P=(0,a.Z)(T,2),k=P[0],M=P[1],w=(0,l.YD)(),L=(0,a.Z)(w,2),I=L[0],H=L[1],y=(0,n.useState)(""),A=(0,a.Z)(y,2),F=A[0],D=A[1],R=n.useState([]),O=(0,a.Z)(R,2),E=O[0],U=O[1],q=(0,c.useSelector)((function(e){return e.idChange})),Y=(0,o.vI)({skip:"ADMISSION_ADMIN"===x?!j:!(null!==q&&void 0!==q&&q.id),search:{search:F,page:N,id:"ADMISSION_ADMIN"===x?j:null===q||void 0===q?void 0:q.id,limit:10}}),z=Y.assignSearchStaff,B=Y.assignSearchStaffRefetch;n.useEffect((function(){null!==q&&void 0!==q&&q.id&&B()}),[null===q||void 0===q?void 0:q.id,B,N]),(0,n.useEffect)((function(){H&&k&&b((function(e){return e+1}))}),[H,k]),n.useEffect((function(){null!==z&&void 0!==z&&z.staff&&U(F?null===z||void 0===z?void 0:z.staff:function(e){return function(e){for(var t=0;t<(null===e||void 0===e?void 0:e.length);t++)for(var s=t+1;s<(null===e||void 0===e?void 0:e.length);s++){var i,a;(null===(i=e[t])||void 0===i?void 0:i._id)===(null===(a=e[s])||void 0===a?void 0:a._id)&&(null===e||void 0===e||e.splice(s,1))}return e}([].concat((0,i.Z)(e),(0,i.Z)(null===z||void 0===z?void 0:z.staff)))}),10===(null===z||void 0===z?void 0:z.staff.length)?M(!0):M(!1)}),[null===z||void 0===z?void 0:z.staff]),(0,n.useEffect)((function(){F&&G()}),[F]);var G=function(){B()},K=(0,n.useCallback)((0,r.debounce)((function(e){return D(e)}),500),[]),Q=function(e){p===(null===e||void 0===e?void 0:e._id)||(_(e),"ADMISSION_ADMIN"===x||t())};return(0,h.jsx)(f.Z,{open:m,onClose:t,children:(0,h.jsxs)("div",{style:{backgroundColor:"#FAFAFA",width:"35rem",height:"".concat(g-20,"px"),overflowX:"hidden"},children:[(0,h.jsxs)("div",{className:u.Z.assign_title,style:{width:"100%"},children:[(0,h.jsx)("h5",{children:s}),(0,h.jsx)("img",{src:"/images/close-post-icon.svg",onClick:t,alt:"staff assign pop close icon"})]}),(0,h.jsxs)("div",{className:u.Z.assign_search_container,children:[(0,h.jsx)("input",{type:"text",placeholder:C("search"),className:u.Z.assign_search_input,onChange:function(e){return t=e.target.value,void K(t);var t}}),(0,h.jsx)("img",{src:"/images/search-dash-icon.svg",alt:"search icon"})]}),(0,h.jsx)("div",{className:u.Z.assign_show_list,children:null===E||void 0===E?void 0:E.map((function(e,t){return(null===E||void 0===E?void 0:E.length)===t+1?(0,h.jsxs)("div",{ref:I,children:[(0,h.jsxs)("div",{className:u.Z.assign_show_list_each,style:p===e._id?{backgroundColor:"rgba(75, 26, 133, 0.1)"}:{backgroundColor:"inherit"},onClick:function(){return Q(e)},children:[(0,h.jsx)("img",{src:null!==e&&void 0!==e&&e.staffProfilePhoto?"".concat(d.yI,"/").concat(e.staffProfilePhoto):"/images/demo_users/user1.svg",alt:"staff profile avatar"}),(0,h.jsxs)("div",{className:u.Z.assign_each_paragraph,children:[(0,h.jsx)("h6",{children:"".concat(e.staffFirstName," ").concat(null!==e&&void 0!==e&&e.staffMiddleName?null===e||void 0===e?void 0:e.staffMiddleName:""," ").concat(e.staffLastName)}),(0,h.jsxs)("p",{children:[" ",C("index")," ",null===e||void 0===e?void 0:e.staffROLLNO]})]})]}),(0,h.jsx)("hr",{})]},e._id):(0,h.jsxs)("div",{children:[(0,h.jsxs)("div",{className:u.Z.assign_show_list_each,style:p===e._id?{backgroundColor:"rgba(75, 26, 133, 0.1)"}:{backgroundColor:"inherit"},onClick:function(){return Q(e)},children:[(0,h.jsx)("img",{src:null!==e&&void 0!==e&&e.staffProfilePhoto?"".concat(d.yI,"/").concat(e.staffProfilePhoto):"/images/demo_users/user1.svg",alt:"staff profile avatar"}),(0,h.jsxs)("div",{className:u.Z.assign_each_paragraph,children:[(0,h.jsx)("h6",{children:"".concat(e.staffFirstName," ").concat(null!==e&&void 0!==e&&e.staffMiddleName?null===e||void 0===e?void 0:e.staffMiddleName:""," ").concat(e.staffLastName)}),(0,h.jsxs)("p",{children:[" ",C("index")," ",null===e||void 0===e?void 0:e.staffROLLNO]})]})]}),(0,h.jsx)("hr",{})]},e._id)}))})]})})}},49384:function(e,t,s){s.d(t,{Z:function(){return n}});s(72791);var i=s(6307),a=s(80184),n=function(){return(0,a.jsx)(i.iT,{ariaLabel:"loading-indicator",height:20,width:20,color:"white",secondaryColor:"#1c023b"})}},12923:function(e,t,s){s.d(t,{Ec:function(){return x},Em:function(){return Z},JM:function(){return h},NS:function(){return l},Pg:function(){return g},Q_:function(){return j},RH:function(){return v},Tv:function(){return r},U_:function(){return p},VN:function(){return c},Wj:function(){return u},ZS:function(){return f},_8:function(){return C},d5:function(){return d},tB:function(){return m},vI:function(){return S},yx:function(){return o},zO:function(){return _}});var i=s(29439),a=s(91007),n=s(58208),l=function(e){var t=(0,n.YD)(e.search,{skip:e.skip});return{instituteAllSearch:t.data,instituteAllSearchRefetch:t.refetch}},c=function(){var e=(0,n.ak)();return[(0,i.Z)(e,1)[0]]},o=function(){var e=(0,n.WL)();return[(0,i.Z)(e,1)[0]]},r=function(e){var t=(0,n.pH)(e.list,{skip:e.skip});return{instituteFollowList:t.data,instituteFollowListRefetch:t.refetch}},d=function(e){var t=(0,n.MG)(e.data,{skip:e.skip});return{instituteOwnFollowingList:t.data,instituteOwnFollowingListRefetch:t.refetch}},u=function(){var e=(0,n.Ky)();return[(0,i.Z)(e,1)[0]]},f=function(e){var t=(0,n.p8)(e.list);return{userFollowList:t.data,userFollowListRefetch:t.refetch}},v=function(e){var t=(0,n.Wv)(e);return{userFollowingList:t.data,userFollowingListRefetch:t.refetch}},h=function(e){var t=(0,n.sz)(e.search,{skip:e.skip});return{userAllSearch:t.data,userAllSearchRefetch:t.refetch}},g=function(){var e=(0,n.Mk)();return[(0,i.Z)(e,1)[0]]},_=function(){var e=(0,n.$i)();return[(0,i.Z)(e,1)[0]]},m=function(){var e=(0,n.Do)();return[(0,i.Z)(e,1)[0]]},p=function(){var e=(0,n.He)();return[(0,i.Z)(e,1)[0]]},j=function(){var e=(0,n.vg)();return[(0,i.Z)(e,1)[0]]},x=function(){var e=(0,n.OO)();return[(0,i.Z)(e,1)[0]]},C=function(e){var t=(0,n.N2)(e);return{userCircleList:t.data,userCircleListRefetch:t.refetch}},S=function(e){var t=(0,a.x6)(e.search,{skip:e.skip});return{assignSearchStaff:t.data,assignSearchStaffRefetch:t.refetch}},Z=function(e){var t=(0,n.SJ)(e);return{universalUser:t.data,universalUserRefetch:t.refetch}}},7135:function(){},80272:function(e,t){t.Z={string_container:"StringLength_string_container__v6b--",mark_container:"StringLength_mark_container__KQsQy"}},52124:function(e,t){t.Z={assign_title:"AssignStaffModal_assign_title__4DGBV",assign_search_container:"AssignStaffModal_assign_search_container__3x6RD",assign_search_input:"AssignStaffModal_assign_search_input__rO3c7",assign_show_list:"AssignStaffModal_assign_show_list__yHhf7",assign_show_list_each:"AssignStaffModal_assign_show_list_each__ACUEw",assign_each_paragraph:"AssignStaffModal_assign_each_paragraph__pMHTq",universal_modal:"AssignStaffModal_universal_modal__czmpB",is_mulitselect_container:"AssignStaffModal_is_mulitselect_container__0cPQ2"}}}]);
//# sourceMappingURL=710.2a5477a6.chunk.js.map
"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[50710,46876],{27302:function(e,s,t){var i=t(1413),a=(t(72791),t(80272)),n=t(80184);s.Z=function(e){var s=e.message,t=e.customStyle;return(0,n.jsx)("section",{style:(0,i.Z)({},t),className:a.Z.mark_container,children:s})}},50710:function(e,s,t){t.r(s),t.d(s,{default:function(){return m}});var i=t(29439),a=t(1413),n=t(72791),l=(t(7135),{DModal:"CreateClass_DModal__pza9d",title:"CreateClass_title__CRjLH",input:"CreateClass_input__1Ym9U",mid:"CreateClass_mid__ti5ga",text:"CreateClass_text__ePxmn",btn:"CreateClass_btn__wnfka",notFound:"CreateClass_notFound__FilS6",item:"CreateClass_item__AXKu9",select:"CreateClass_select__E-7CD",tooltip:"CreateClass_tooltip__4Yui1",profileToolTip:"CreateClass_profileToolTip__dMV+T",triangle:"CreateClass_triangle__V7X33",triangleDisplay:"CreateClass_triangleDisplay__Rr4go",profilelist:"CreateClass_profilelist__5nZKb"}),c=t(5574),o=t(39230),r=t(33992),d=t(69721),u=t(49384),f=t(46876),v=t(57431),g=t(27302),h=t(80184);function _(e){var s=e.options,t=e.switchOption,i=e.customStyle;return(0,h.jsxs)("div",{className:l.profileToolTip,style:(0,a.Z)({},i),children:[(0,h.jsx)("div",{className:l.triangle}),(0,h.jsx)("div",{className:l.profilelist,children:null===s||void 0===s?void 0:s.map((function(e,s){return(0,h.jsx)("div",{value:e._id,onClick:function(){return t(e)},children:e.className},s)}))})]})}var m=function(e){var s,t,m=e.departmentModal,p=e.hideModal,j=e.id,x=e.did,C=e.bid,S=e.edit,N=e.setEdit,b=e.editClass,Z=e.onRefetch,T=e.isEditBy,P=(0,o.$G)().t,k=(0,n.useState)(!1),M=(0,i.Z)(k,2),w=M[0],A=M[1],I=(0,n.useState)(!0),H=(0,i.Z)(I,2),y=H[0],D=H[1],L=(0,n.useState)(!1),R=(0,i.Z)(L,2),F=R[0],E=R[1],O=(0,n.useState)(!1),U=(0,i.Z)(O,2),q=U[0],B=U[1],Y=(0,n.useState)([]),z=(0,i.Z)(Y,2),G=z[0],V=z[1],K=(0,n.useState)(!1),W=(0,i.Z)(K,2),X=W[0],$=W[1],J=(0,n.useState)(S&&(null===b||void 0===b?void 0:b.className)||P("select_standerd_")),Q=(0,i.Z)(J,2),ee=Q[0],se=Q[1],te=(0,n.useState)({mcId:S&&(null===b||void 0===b?void 0:b.masterClassName)||"",classTitle:S&&(null===b||void 0===b?void 0:b.classTitle)||"",classHeadTitle:S&&(null===b||void 0===b?void 0:b.classHeadTitle)||"",sid:S&&(null===b||void 0===b||null===(s=b.classTeacher)||void 0===s?void 0:s._id)||"",aggregatePassingPercentage:S&&(null===b||void 0===b||null===(t=b.finalReportsSettings)||void 0===t?void 0:t.aggregatePassingPercentage)||"",optionalSubjectCount:S&&(null===b||void 0===b?void 0:b.optionalSubjectCount)||P("select_number_of_subject")}),ie=(0,i.Z)(te,2),ae=ie[0],ne=ie[1],le=(0,n.useState)(!1),ce=(0,i.Z)(le,2),oe=ce[0],re=ce[1],de=(0,n.useState)(S&&(null===b||void 0===b?void 0:b.classTeacher)),ue=(0,i.Z)(de,2),fe=ue[0],ve=ue[1],ge=(0,r.tx)({data:{id:j,did:x},skip:j?!x:!j}).allClassMaster,he=(0,r.u2)(),_e=(0,i.Z)(he,1)[0],me=(0,r.pL)(),pe=(0,i.Z)(me,1)[0],je=(0,r._C)({did:x,skip:!x}).oneDepartmentRefetch;(0,n.useEffect)((function(){var e,s;S&&b&&(ne({mcId:(null===b||void 0===b?void 0:b.masterClassName)||"",classTitle:(null===b||void 0===b?void 0:b.classTitle)||"",classHeadTitle:(null===b||void 0===b?void 0:b.classHeadTitle)||"",sid:(null===b||void 0===b||null===(e=b.classTeacher)||void 0===e?void 0:e._id)||"",aggregatePassingPercentage:(null===b||void 0===b||null===(s=b.finalReportsSettings)||void 0===s?void 0:s.aggregatePassingPercentage)||0,optionalSubjectCount:(null===b||void 0===b?void 0:b.optionalSubjectCount)||P("select_number_of_subject")}),se((null===b||void 0===b?void 0:b.className)||"Please select standard"),ve(null===b||void 0===b?void 0:b.classTeacher))}),[S,b]),(0,n.useEffect)((function(){null!==ge&&void 0!==ge&&ge.classMaster&&V(null===ge||void 0===ge?void 0:ge.classMaster)}),[ge]);var xe=function(e){ve(e),ne((0,a.Z)((0,a.Z)({},ae),{},{sid:e._id})),D(!0)};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(c.Z,{open:m,children:(0,h.jsxs)("div",{className:l.DModal,children:[(0,h.jsxs)("div",{className:l.title,children:[S?(0,h.jsx)("h5",{children:"Edit Class"}):(0,h.jsx)("h5",{children:P("add_class_n_place")}),(0,h.jsx)("img",{src:"/images/close-post-icon.svg",alt:"",onClick:function(){p(!1),N(!1),se(P("select_standerd_")),ne({mcId:"",classTitle:"",classHeadTitle:"",sid:"",aggregatePassingPercentage:0,optionalSubjectCount:P("select_number_of_subject")}),ve("")}})]}),(0,h.jsx)("div",{hidden:y,className:l.notFound,children:"Please Fill all details to create a Class"}),(0,h.jsxs)("div",{className:l.item,onClick:function(){return E(!F)},children:[(0,h.jsx)("h6",{children:P("select_standard_grade_place")}),(0,h.jsxs)("div",{className:l.select,children:[(0,h.jsx)("p",{children:ee}),(0,h.jsx)("img",{src:"/images/select-icon.svg",alt:""})]}),F&&(0,h.jsx)("div",{className:l.tooltip,children:(0,h.jsx)(_,{options:G,switchOption:function(e){se(e.className),ne((0,a.Z)((0,a.Z)({},ae),{},{mcId:e._id})),D(!0)}})})]}),(0,h.jsxs)("div",{className:l.input,children:[(0,h.jsx)("h6",{children:P("class_name")}),(0,h.jsx)("input",{type:"text",value:ae.classTitle,onChange:function(e){var s;(null===(s=e.target.value)||void 0===s?void 0:s.length)<=45&&(ne((0,a.Z)((0,a.Z)({},ae),{},{classTitle:e.target.value})),D(!0))},placeholder:"e.g. 6th A / FY BSC",required:!0}),(0,h.jsx)(v.Z,{maxLength:45,valueLength:ae.classTitle})]}),(0,h.jsxs)("div",{className:l.mid,onClick:function(){return re(!0)},children:[(0,h.jsx)("img",{src:null!==fe&&void 0!==fe&&fe.staffProfilePhoto?"".concat(d.yI,"/").concat(fe.staffProfilePhoto):"/images/avatar-icon.png",alt:""}),(0,h.jsxs)("div",{className:l.text,children:[(0,h.jsx)("h6",{children:fe?"".concat(null===fe||void 0===fe?void 0:fe.staffFirstName," ").concat((null===fe||void 0===fe?void 0:fe.staffMiddleName)||""," ").concat(null===fe||void 0===fe?void 0:fe.staffLastName):"".concat(P("assign_chead")," ").concat(P("optional"))}),(0,h.jsx)("p",{children:P("search_from_joined_list")})]})]}),(0,h.jsxs)("div",{className:l.input,children:[(0,h.jsx)("h6",{children:P("give_chead_title")}),(0,h.jsx)("input",{type:"text",value:ae.classHeadTitle,onChange:function(e){var s;(null===(s=e.target.value)||void 0===s?void 0:s.length)<=40&&(ne((0,a.Z)((0,a.Z)({},ae),{},{classHeadTitle:e.target.value})),D(!0))},required:!0,placeholder:P("class_head_example")}),(0,h.jsx)(v.Z,{maxLength:40,valueLength:ae.classHeadTitle})]}),(0,h.jsxs)("div",{className:l.input,children:[(0,h.jsxs)("h6",{children:[P("pass_percentage")," ",P("optional")]}),(0,h.jsx)("input",{type:"text",value:ae.aggregatePassingPercentage,onChange:function(e){+e.target.value<=100?(ne((0,a.Z)((0,a.Z)({},ae),{},{aggregatePassingPercentage:+e.target.value})),D(!0)):$(!0)},placeholder:"E.g. 34"}),X&&(0,h.jsx)(g.Z,{message:"Mark is not greater than 100"})]}),(0,h.jsxs)("div",{className:l.item,onClick:function(){return B((function(e){return!e}))},children:[(0,h.jsx)("h6",{children:P("optional_subject")}),(0,h.jsxs)("div",{className:l.select,children:[(0,h.jsx)("p",{children:ae.optionalSubjectCount}),(0,h.jsx)("img",{src:"/images/select-icon.svg",alt:""})]}),q&&(0,h.jsx)("div",{className:l.tooltip,children:(0,h.jsx)(_,{customStyle:{top:"561px",right:"-51px"},options:[{className:0},{className:1},{className:2},{className:3},{className:4},{className:5}],switchOption:function(e){ne((0,a.Z)((0,a.Z)({},ae),{},{optionalSubjectCount:e.className})),D(!0)}})})]}),(0,h.jsxs)("button",{className:l.btn,onClick:function(){if(ae.mcId&&ae.classTitle&&ae.classHeadTitle)if(A(!0),S){var e,s={mcId:ae.mcId,classTitle:(null===b||void 0===b?void 0:b.classTitle)===ae.classTitle?"":ae.classTitle,classHeadTitle:(null===b||void 0===b?void 0:b.classHeadTitle)===ae.classHeadTitle?"":ae.classHeadTitle,classTeacher:(null===b||void 0===b||null===(e=b.classTeacher)||void 0===e?void 0:e._id)===ae.sid?"":ae.sid,aggregatePassingPercentage:+ae.aggregatePassingPercentage,optionalSubjectCount:ae.optionalSubjectCount===P("select_number_of_subject")?0:+ae.optionalSubjectCount};pe({classDetail:s,cid:null===b||void 0===b?void 0:b._id}).then((function(){p(!1),A(!1),N(!1),je(),"DEPARTMENT_HEAD"===T&&Z(),ne({mcId:"",classTitle:"",classHeadTitle:"",sid:"",aggregatePassingPercentage:0,optionalSubjectCount:P("select_number_of_subject")}),ve("")})).catch({})}else _e({classCreate:{mcId:ae.mcId,classTitle:ae.classTitle,classHeadTitle:ae.classHeadTitle,sid:ae.sid,aggregatePassingPercentage:ae.aggregatePassingPercentage||0,optionalSubjectCount:ae.optionalSubjectCount===P("select_number_of_subject")?0:+ae.optionalSubjectCount},id:j,did:x,bid:C}).then((function(){p(!1),A(!1),je(),ne({mcId:"",classTitle:"",classHeadTitle:"",sid:"",aggregatePassingPercentage:0,optionalSubjectCount:"Please select no. of subjects one can choose"}),ve("")})).catch({});else D(!1)},disabled:w,children:[S?(0,h.jsx)("p",{children:"Update"}):(0,h.jsx)("p",{children:P("create")}),w&&(0,h.jsx)("div",{children:(0,h.jsx)(u.Z,{})})]})]})}),oe&&("DEPARTMENT_HEAD"===T?(0,h.jsx)(f.default,{assignHead:oe,headSelect:function(e){xe(e),re((function(e){return!e}))},title:P("assign_chead"),onClose:function(){return re((function(e){return!e}))},instituteId:j,viewAs:"ADMISSION_ADMIN"}):(0,h.jsx)(f.default,{assignHead:oe,headSelect:xe,title:P("assign_chead"),onClose:function(){return re((function(e){return!e}))}}))]})}},46876:function(e,s,t){t.r(s);var i=t(93433),a=t(29439),n=t(72791),l=t(23441),c=t(95048),o=t(12923),r=t(763),d=t(69721),u=t(52124),f=t(5574),v=t(39230),g=t(80184),h=window.innerHeight;s.default=function(e){var s=e.onClose,t=e.title,_=e.headSelect,m=e.assignHead,p=e.disabledId,j=e.instituteId,x=e.viewAs,C=e.isMultiSelect,S=e.selectList,N=e.onMultiSelect,b=e.onDone,Z=(0,v.$G)().t,T=(0,n.useState)(1),P=(0,a.Z)(T,2),k=P[0],M=P[1],w=(0,n.useState)(!0),A=(0,a.Z)(w,2),I=A[0],H=A[1],y=(0,l.YD)(),D=(0,a.Z)(y,2),L=D[0],R=D[1],F=(0,n.useState)(""),E=(0,a.Z)(F,2),O=E[0],U=E[1],q=n.useState([]),B=(0,a.Z)(q,2),Y=B[0],z=B[1],G=(0,c.v9)((function(e){return e.idChange})),V=(0,o.vI)({skip:"ADMISSION_ADMIN"===x?!j:!(null!==G&&void 0!==G&&G.id),search:{search:O,page:k,id:"ADMISSION_ADMIN"===x?j:null===G||void 0===G?void 0:G.id,limit:10}}),K=V.assignSearchStaff,W=V.assignSearchStaffRefetch;n.useEffect((function(){null!==G&&void 0!==G&&G.id&&W()}),[null===G||void 0===G?void 0:G.id,W,k]),(0,n.useEffect)((function(){R&&I&&M((function(e){return e+1}))}),[R,I]),n.useEffect((function(){null!==K&&void 0!==K&&K.staff&&z(O?null===K||void 0===K?void 0:K.staff:function(e){return function(e){for(var s=0;s<(null===e||void 0===e?void 0:e.length);s++)for(var t=s+1;t<(null===e||void 0===e?void 0:e.length);t++){var i,a;(null===(i=e[s])||void 0===i?void 0:i._id)===(null===(a=e[t])||void 0===a?void 0:a._id)&&(null===e||void 0===e||e.splice(t,1))}return e}([].concat((0,i.Z)(e),(0,i.Z)(null===K||void 0===K?void 0:K.staff)))}),10===(null===K||void 0===K?void 0:K.staff.length)?H(!0):H(!1)}),[null===K||void 0===K?void 0:K.staff]),(0,n.useEffect)((function(){O&&X()}),[O]);var X=function(){W()},$=(0,n.useCallback)((0,r.debounce)((function(e){return U(e)}),500),[]),J=function(e){p===(null===e||void 0===e?void 0:e._id)||(C?N(e):(_(e),"ADMISSION_ADMIN"===x||s()))};return(0,g.jsx)(f.Z,{open:m,onClose:s,children:(0,g.jsxs)("div",{style:{backgroundColor:"#FAFAFA",width:"35rem",height:"".concat(h-20,"px"),overflowX:"hidden"},children:[(0,g.jsxs)("div",{className:u.Z.assign_title,style:{width:"100%"},children:[(0,g.jsx)("h5",{children:t}),C?(0,g.jsxs)("div",{className:u.Z.is_mulitselect_container,children:[(0,g.jsx)("h6",{style:{cursor:"pointer"},onClick:b,children:Z("select")}),(0,g.jsx)("img",{src:"/images/close-post-icon.svg",onClick:s,alt:"staff assign pop close icon"})]}):(0,g.jsx)("img",{src:"/images/close-post-icon.svg",onClick:s,alt:"staff assign pop close icon"})]}),(0,g.jsxs)("div",{className:u.Z.assign_search_container,children:[(0,g.jsx)("input",{type:"text",placeholder:Z("search"),className:u.Z.assign_search_input,onChange:function(e){return s=e.target.value,void $(s);var s}}),(0,g.jsx)("img",{src:"/images/search-dash-icon.svg",alt:"search icon"})]}),(0,g.jsx)("div",{className:u.Z.assign_show_list,children:null===Y||void 0===Y?void 0:Y.map((function(e,s){return(null===Y||void 0===Y?void 0:Y.length)===s+1?(0,g.jsxs)("div",{ref:L,children:[(0,g.jsxs)("div",{className:u.Z.assign_show_list_each,style:p===e._id?{backgroundColor:"rgba(75, 26, 133, 0.1)"}:{backgroundColor:"inherit"},onClick:function(){return J(e)},children:[C?null!==S&&void 0!==S&&S.includes(null===e||void 0===e?void 0:e._id)?(0,g.jsx)("img",{src:"/images/checkbox-icon.svg",alt:"icon",style:{height:"1.3rem",borderRadius:"0",cursor:"pointer"}}):(0,g.jsx)("img",{style:{height:"1.3rem",borderRadius:"0",cursor:"pointer"},src:"/images/box-icon.svg",alt:"icon"}):"",(0,g.jsx)("img",{src:null!==e&&void 0!==e&&e.staffProfilePhoto?"".concat(d.yI,"/").concat(e.staffProfilePhoto):"/images/member_tab/class/default_avatar.svg",alt:"staff profile avatar"}),(0,g.jsxs)("div",{className:u.Z.assign_each_paragraph,children:[(0,g.jsx)("h6",{children:"".concat(e.staffFirstName," ").concat(null!==e&&void 0!==e&&e.staffMiddleName?null===e||void 0===e?void 0:e.staffMiddleName:""," ").concat(e.staffLastName)}),(0,g.jsxs)("p",{children:[" ",Z("index")," ",null===e||void 0===e?void 0:e.staffROLLNO]})]})]}),(0,g.jsx)("hr",{})]},e._id):(0,g.jsxs)("div",{children:[(0,g.jsxs)("div",{className:u.Z.assign_show_list_each,style:p===e._id?{backgroundColor:"rgba(75, 26, 133, 0.1)"}:{backgroundColor:"inherit"},onClick:function(){return J(e)},children:[C?null!==S&&void 0!==S&&S.includes(null===e||void 0===e?void 0:e._id)?(0,g.jsx)("img",{style:{height:"1.3rem",borderRadius:"0",cursor:"pointer"},src:"/images/checkbox-icon.svg",alt:"icon"}):(0,g.jsx)("img",{style:{height:"1.3rem",borderRadius:"0",cursor:"pointer"},src:"/images/box-icon.svg",alt:"icon"}):"",(0,g.jsx)("img",{src:null!==e&&void 0!==e&&e.staffProfilePhoto?"".concat(d.yI,"/").concat(e.staffProfilePhoto):"/images/member_tab/class/default_avatar.svg",alt:"staff profile avatar"}),(0,g.jsxs)("div",{className:u.Z.assign_each_paragraph,children:[(0,g.jsx)("h6",{children:"".concat(e.staffFirstName," ").concat(null!==e&&void 0!==e&&e.staffMiddleName?null===e||void 0===e?void 0:e.staffMiddleName:""," ").concat(e.staffLastName)}),(0,g.jsxs)("p",{children:[" ",Z("index")," ",null===e||void 0===e?void 0:e.staffROLLNO]})]})]}),(0,g.jsx)("hr",{})]},e._id)}))})]})})}},49384:function(e,s,t){t.d(s,{Z:function(){return n}});t(72791);var i=t(6307),a=t(80184),n=function(){return(0,a.jsx)(i.iT,{ariaLabel:"loading-indicator",height:20,width:20,color:"white",secondaryColor:"#1c023b"})}},12923:function(e,s,t){t.d(s,{Ec:function(){return x},Em:function(){return N},JM:function(){return g},NS:function(){return l},Pg:function(){return h},Q_:function(){return j},RH:function(){return v},Tv:function(){return r},U_:function(){return p},VN:function(){return c},Wj:function(){return u},ZS:function(){return f},_8:function(){return C},d5:function(){return d},tB:function(){return m},vI:function(){return S},yx:function(){return o},zO:function(){return _}});var i=t(29439),a=t(91007),n=t(58208),l=function(e){var s=(0,n.YD)(e.search,{skip:e.skip});return{instituteAllSearch:s.data,instituteAllSearchRefetch:s.refetch}},c=function(){var e=(0,n.ak)();return[(0,i.Z)(e,1)[0]]},o=function(){var e=(0,n.WL)();return[(0,i.Z)(e,1)[0]]},r=function(e){var s=(0,n.pH)(e.list,{skip:e.skip});return{instituteFollowList:s.data,instituteFollowListRefetch:s.refetch}},d=function(e){var s=(0,n.MG)(e.data,{skip:e.skip});return{instituteOwnFollowingList:s.data,instituteOwnFollowingListRefetch:s.refetch}},u=function(){var e=(0,n.Ky)();return[(0,i.Z)(e,1)[0]]},f=function(e){var s=(0,n.p8)(e.list);return{userFollowList:s.data,userFollowListRefetch:s.refetch}},v=function(e){var s=(0,n.Wv)(e);return{userFollowingList:s.data,userFollowingListRefetch:s.refetch}},g=function(e){var s=(0,n.sz)(e.search,{skip:e.skip});return{userAllSearch:s.data,userAllSearchRefetch:s.refetch}},h=function(){var e=(0,n.Mk)();return[(0,i.Z)(e,1)[0]]},_=function(){var e=(0,n.$i)();return[(0,i.Z)(e,1)[0]]},m=function(){var e=(0,n.Do)();return[(0,i.Z)(e,1)[0]]},p=function(){var e=(0,n.He)();return[(0,i.Z)(e,1)[0]]},j=function(){var e=(0,n.vg)();return[(0,i.Z)(e,1)[0]]},x=function(){var e=(0,n.OO)();return[(0,i.Z)(e,1)[0]]},C=function(e){var s=(0,n.N2)(e);return{userCircleList:s.data,userCircleListRefetch:s.refetch}},S=function(e){var s=(0,a.x6)(e.search,{skip:e.skip});return{assignSearchStaff:s.data,assignSearchStaffRefetch:s.refetch}},N=function(e){var s=(0,n.SJ)(e);return{universalUser:s.data,universalUserRefetch:s.refetch}}},7135:function(){},52124:function(e,s){s.Z={assign_title:"AssignStaffModal_assign_title__4DGBV",assign_search_container:"AssignStaffModal_assign_search_container__3x6RD",assign_search_input:"AssignStaffModal_assign_search_input__rO3c7",assign_show_list:"AssignStaffModal_assign_show_list__yHhf7",assign_show_list_each:"AssignStaffModal_assign_show_list_each__ACUEw",assign_each_paragraph:"AssignStaffModal_assign_each_paragraph__pMHTq",universal_modal:"AssignStaffModal_universal_modal__czmpB",is_mulitselect_container:"AssignStaffModal_is_mulitselect_container__0cPQ2"}}}]);
//# sourceMappingURL=50710.63533dd5.chunk.js.map
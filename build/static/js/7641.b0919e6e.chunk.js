"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[7641],{27302:function(e,s,t){var a=t(1413),l=(t(72791),t(80272)),i=t(80184);s.Z=function(e){var s=e.message,t=e.customStyle;return(0,i.jsx)("section",{style:(0,a.Z)({},t),className:l.Z.mark_container,children:s})}},57431:function(e,s,t){var a=t(1413),l=(t(72791),t(80272)),i=t(80184);s.Z=function(e){var s,t=e.valueLength,n=e.maxLength,c=e.customStyle;return(0,i.jsxs)("section",{style:(0,a.Z)({},c),className:l.Z.string_container,children:[null!==(s=null===t||void 0===t?void 0:t.length)&&void 0!==s?s:0,"/",n]})}},50710:function(e,s,t){t.r(s),t.d(s,{default:function(){return p}});var a=t(29439),l=t(1413),i=t(72791),n=(t(7135),{DModal:"CreateClass_DModal__pza9d",title:"CreateClass_title__CRjLH",input:"CreateClass_input__1Ym9U",mid:"CreateClass_mid__ti5ga",text:"CreateClass_text__ePxmn",btn:"CreateClass_btn__wnfka",notFound:"CreateClass_notFound__FilS6",item:"CreateClass_item__AXKu9",select:"CreateClass_select__E-7CD",tooltip:"CreateClass_tooltip__4Yui1",profileToolTip:"CreateClass_profileToolTip__dMV+T",triangle:"CreateClass_triangle__V7X33",triangleDisplay:"CreateClass_triangleDisplay__Rr4go",profilelist:"CreateClass_profilelist__5nZKb"}),c=t(5574),o=t(39230),d=t(33992),r=t(69721),u=t(49384),g=t(46876),v=t(57431),_=t(27302),h=t(80184);function m(e){var s=e.options,t=e.switchOption,a=e.customStyle;return(0,h.jsxs)("div",{className:n.profileToolTip,style:(0,l.Z)({},a),children:[(0,h.jsx)("div",{className:n.triangle}),(0,h.jsx)("div",{className:n.profilelist,children:null===s||void 0===s?void 0:s.map((function(e,s){return(0,h.jsx)("div",{value:e._id,onClick:function(){return t(e)},children:e.className},s)}))})]})}var p=function(e){var s,t,p=e.departmentModal,f=e.hideModal,j=e.id,C=e.did,x=e.bid,T=e.edit,b=e.setEdit,N=e.editClass,S=e.onRefetch,Z=e.isEditBy,P=(0,o.$G)().t,H=(0,i.useState)(!1),k=(0,a.Z)(H,2),y=k[0],I=k[1],M=(0,i.useState)(!0),D=(0,a.Z)(M,2),E=D[0],L=D[1],w=(0,i.useState)(!1),A=(0,a.Z)(w,2),F=A[0],R=A[1],q=(0,i.useState)(!1),O=(0,a.Z)(q,2),K=O[0],Y=O[1],B=(0,i.useState)([]),Q=(0,a.Z)(B,2),U=Q[0],V=Q[1],X=(0,i.useState)(!1),z=(0,a.Z)(X,2),G=z[0],$=z[1],J=(0,i.useState)(T&&(null===N||void 0===N?void 0:N.className)||P("select_standerd_")),W=(0,a.Z)(J,2),ee=W[0],se=W[1],te=(0,i.useState)({mcId:T&&(null===N||void 0===N?void 0:N.masterClassName)||"",classTitle:T&&(null===N||void 0===N?void 0:N.classTitle)||"",classHeadTitle:T&&(null===N||void 0===N?void 0:N.classHeadTitle)||"",sid:T&&(null===N||void 0===N||null===(s=N.classTeacher)||void 0===s?void 0:s._id)||"",aggregatePassingPercentage:T&&(null===N||void 0===N||null===(t=N.finalReportsSettings)||void 0===t?void 0:t.aggregatePassingPercentage)||"",optionalSubjectCount:T&&(null===N||void 0===N?void 0:N.optionalSubjectCount)||P("select_number_of_subject")}),ae=(0,a.Z)(te,2),le=ae[0],ie=ae[1],ne=(0,i.useState)(!1),ce=(0,a.Z)(ne,2),oe=ce[0],de=ce[1],re=(0,i.useState)(T&&(null===N||void 0===N?void 0:N.classTeacher)),ue=(0,a.Z)(re,2),ge=ue[0],ve=ue[1],_e=(0,d.tx)({data:{id:j,did:C},skip:j?!C:!j}).allClassMaster,he=(0,d.u2)(),me=(0,a.Z)(he,1)[0],pe=(0,d.pL)(),fe=(0,a.Z)(pe,1)[0],je=(0,d._C)({did:C,skip:!C}).oneDepartmentRefetch;(0,i.useEffect)((function(){var e,s;T&&N&&(ie({mcId:(null===N||void 0===N?void 0:N.masterClassName)||"",classTitle:(null===N||void 0===N?void 0:N.classTitle)||"",classHeadTitle:(null===N||void 0===N?void 0:N.classHeadTitle)||"",sid:(null===N||void 0===N||null===(e=N.classTeacher)||void 0===e?void 0:e._id)||"",aggregatePassingPercentage:(null===N||void 0===N||null===(s=N.finalReportsSettings)||void 0===s?void 0:s.aggregatePassingPercentage)||0,optionalSubjectCount:(null===N||void 0===N?void 0:N.optionalSubjectCount)||P("select_number_of_subject")}),se((null===N||void 0===N?void 0:N.className)||"Please select standard"),ve(null===N||void 0===N?void 0:N.classTeacher))}),[T,N]),(0,i.useEffect)((function(){null!==_e&&void 0!==_e&&_e.classMaster&&V(null===_e||void 0===_e?void 0:_e.classMaster)}),[_e]);var Ce=function(e){ve(e),ie((0,l.Z)((0,l.Z)({},le),{},{sid:e._id})),L(!0)};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(c.Z,{open:p,children:(0,h.jsxs)("div",{className:n.DModal,children:[(0,h.jsxs)("div",{className:n.title,children:[T?(0,h.jsx)("h5",{children:"Edit Class"}):(0,h.jsx)("h5",{children:P("add_class_n_place")}),(0,h.jsx)("img",{src:"/images/close-post-icon.svg",alt:"",onClick:function(){f(!1),b(!1),se(P("select_standerd_")),ie({mcId:"",classTitle:"",classHeadTitle:"",sid:"",aggregatePassingPercentage:0,optionalSubjectCount:P("select_number_of_subject")}),ve("")}})]}),(0,h.jsx)("div",{hidden:E,className:n.notFound,children:"Please Fill all details to create a Class"}),(0,h.jsxs)("div",{className:n.item,onClick:function(){return R(!F)},children:[(0,h.jsx)("h6",{children:P("select_standard_grade_place")}),(0,h.jsxs)("div",{className:n.select,children:[(0,h.jsx)("p",{children:ee}),(0,h.jsx)("img",{src:"/images/select-icon.svg",alt:""})]}),F&&(0,h.jsx)("div",{className:n.tooltip,children:(0,h.jsx)(m,{options:U,switchOption:function(e){se(e.className),ie((0,l.Z)((0,l.Z)({},le),{},{mcId:e._id})),L(!0)}})})]}),(0,h.jsxs)("div",{className:n.input,children:[(0,h.jsx)("h6",{children:P("class_name")}),(0,h.jsx)("input",{type:"text",value:le.classTitle,onChange:function(e){var s;(null===(s=e.target.value)||void 0===s?void 0:s.length)<=45&&(ie((0,l.Z)((0,l.Z)({},le),{},{classTitle:e.target.value})),L(!0))},placeholder:"e.g. 6th A / FY BSC",required:!0}),(0,h.jsx)(v.Z,{maxLength:45,valueLength:le.classTitle})]}),(0,h.jsxs)("div",{className:n.mid,onClick:function(){return de(!0)},children:[(0,h.jsx)("img",{src:null!==ge&&void 0!==ge&&ge.staffProfilePhoto?"".concat(r.yI,"/").concat(ge.staffProfilePhoto):"/images/avatar-icon.png",alt:""}),(0,h.jsxs)("div",{className:n.text,children:[(0,h.jsx)("h6",{children:ge?"".concat(null===ge||void 0===ge?void 0:ge.staffFirstName," ").concat((null===ge||void 0===ge?void 0:ge.staffMiddleName)||""," ").concat(null===ge||void 0===ge?void 0:ge.staffLastName):"".concat(P("assign_chead")," ").concat(P("optional"))}),(0,h.jsx)("p",{children:P("search_from_joined_list")})]})]}),(0,h.jsxs)("div",{className:n.input,children:[(0,h.jsx)("h6",{children:P("give_chead_title")}),(0,h.jsx)("input",{type:"text",value:le.classHeadTitle,onChange:function(e){var s;(null===(s=e.target.value)||void 0===s?void 0:s.length)<=40&&(ie((0,l.Z)((0,l.Z)({},le),{},{classHeadTitle:e.target.value})),L(!0))},required:!0,placeholder:P("class_head_example")}),(0,h.jsx)(v.Z,{maxLength:40,valueLength:le.classHeadTitle})]}),(0,h.jsxs)("div",{className:n.input,children:[(0,h.jsxs)("h6",{children:[P("pass_percentage")," ",P("optional")]}),(0,h.jsx)("input",{type:"text",value:le.aggregatePassingPercentage,onChange:function(e){+e.target.value<=100?(ie((0,l.Z)((0,l.Z)({},le),{},{aggregatePassingPercentage:+e.target.value})),L(!0)):$(!0)},placeholder:"E.g. 34"}),G&&(0,h.jsx)(_.Z,{message:"Mark is not greater than 100"})]}),(0,h.jsxs)("div",{className:n.item,onClick:function(){return Y((function(e){return!e}))},children:[(0,h.jsx)("h6",{children:P("optional_subject")}),(0,h.jsxs)("div",{className:n.select,children:[(0,h.jsx)("p",{children:le.optionalSubjectCount}),(0,h.jsx)("img",{src:"/images/select-icon.svg",alt:""})]}),K&&(0,h.jsx)("div",{className:n.tooltip,children:(0,h.jsx)(m,{customStyle:{top:"561px",right:"-51px"},options:[{className:0},{className:1},{className:2},{className:3},{className:4},{className:5}],switchOption:function(e){ie((0,l.Z)((0,l.Z)({},le),{},{optionalSubjectCount:e.className})),L(!0)}})})]}),(0,h.jsxs)("button",{className:n.btn,onClick:function(){if(le.mcId&&le.classTitle&&le.classHeadTitle)if(I(!0),T){var e,s={mcId:le.mcId,classTitle:(null===N||void 0===N?void 0:N.classTitle)===le.classTitle?"":le.classTitle,classHeadTitle:(null===N||void 0===N?void 0:N.classHeadTitle)===le.classHeadTitle?"":le.classHeadTitle,classTeacher:(null===N||void 0===N||null===(e=N.classTeacher)||void 0===e?void 0:e._id)===le.sid?"":le.sid,aggregatePassingPercentage:+le.aggregatePassingPercentage,optionalSubjectCount:le.optionalSubjectCount===P("select_number_of_subject")?0:+le.optionalSubjectCount};fe({classDetail:s,cid:null===N||void 0===N?void 0:N._id}).then((function(){f(!1),I(!1),b(!1),je(),"DEPARTMENT_HEAD"===Z&&S(),ie({mcId:"",classTitle:"",classHeadTitle:"",sid:"",aggregatePassingPercentage:0,optionalSubjectCount:P("select_number_of_subject")}),ve("")})).catch({})}else me({classCreate:{mcId:le.mcId,classTitle:le.classTitle,classHeadTitle:le.classHeadTitle,sid:le.sid,aggregatePassingPercentage:le.aggregatePassingPercentage||0,optionalSubjectCount:le.optionalSubjectCount===P("select_number_of_subject")?0:+le.optionalSubjectCount},id:j,did:C,bid:x}).then((function(){f(!1),I(!1),je(),ie({mcId:"",classTitle:"",classHeadTitle:"",sid:"",aggregatePassingPercentage:0,optionalSubjectCount:"Please select no. of subjects one can choose"}),ve("")})).catch({});else L(!1)},disabled:y,children:[T?(0,h.jsx)("p",{children:"Update"}):(0,h.jsx)("p",{children:P("create")}),y&&(0,h.jsx)("div",{children:(0,h.jsx)(u.Z,{})})]})]})}),oe&&("DEPARTMENT_HEAD"===Z?(0,h.jsx)(g.default,{assignHead:oe,headSelect:function(e){Ce(e),de((function(e){return!e}))},title:P("assign_chead"),onClose:function(){return de((function(e){return!e}))},instituteId:j,viewAs:"ADMISSION_ADMIN"}):(0,h.jsx)(g.default,{assignHead:oe,headSelect:Ce,title:P("assign_chead"),onClose:function(){return de((function(e){return!e}))}}))]})}},49384:function(e,s,t){t.d(s,{Z:function(){return i}});t(72791);var a=t(6307),l=t(80184),i=function(){return(0,l.jsx)(a.iT,{ariaLabel:"loading-indicator",height:20,width:20,color:"white",secondaryColor:"#1c023b"})}},7135:function(){},80272:function(e,s){s.Z={string_container:"StringLength_string_container__v6b--",mark_container:"StringLength_mark_container__KQsQy"}}}]);
//# sourceMappingURL=7641.b0919e6e.chunk.js.map
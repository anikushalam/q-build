"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[66040],{66040:function(e,t,a){a.r(t),a.d(t,{default:function(){return p}});var n=a(93433),r=a(29439),c=a(72791),s="CreateMaster_DModal__eSmTR",l="CreateMaster_title__V5f28",i="CreateMaster_btn__8XDZ1",d="CreateMaster_item__MjBgP",u="CreateMaster_subject_tile_container__FaUtF",o="CreateMaster_subject_tile__DIwTq",_="CreateMaster_subject_tile_active__m7kBe",h=a(5574),m=a(39230),v=(a(7135),a(33992)),j=a(49384),x=a(57431),f=a(97655),b=a(80184);var p=function(e){var t=e.departmentModal,a=e.hideModal,p=e.id,M=e.did,C=(0,m.$G)().t,g=(0,c.useState)("Standard/Grade/Level Master"),S=(0,r.Z)(g,2),Z=S[0],k=S[1],N=(0,c.useState)(!1),w=(0,r.Z)(N,2),y=w[0],L=w[1],T=(0,c.useState)(""),G=(0,r.Z)(T,2),q=G[0],F=G[1],D=(0,c.useState)(""),R=(0,r.Z)(D,2),B=R[0],O=R[1],A=(0,c.useState)(""),I=(0,r.Z)(A,2),J=I[0],K=I[1],P=(0,c.useState)(""),U=(0,r.Z)(P,2),V=U[0],X=U[1],Y=(0,c.useState)([]),$=(0,r.Z)(Y,2),z=$[0],E=$[1],H=function(e){k(e),O("")},Q=(0,v.fA)(),W=(0,r.Z)(Q,1)[0],ee=(0,v.wK)({data:{id:p,did:M},skip:p?!M:!p}).allSubjectMasterRefetch,te=(0,v.ji)(),ae=(0,r.Z)(te,1)[0],ne=(0,v.tx)({data:{id:p,did:M},skip:p?!M:!p}).allClassMasterRefetch;return(0,b.jsx)(h.Z,{open:t,children:(0,b.jsxs)("div",{className:s,children:[(0,b.jsxs)("div",{className:l,children:[(0,b.jsx)("h5",{children:C("create_new_master")}),(0,b.jsx)("img",{src:"/images/close-post-icon.svg",onClick:function(){return a(!1)},alt:""})]}),(0,b.jsxs)("div",{className:d,children:[(0,b.jsx)("h6",{children:C("create_master_header_1")}),(0,b.jsxs)("section",{className:u,children:[(0,b.jsx)("div",{className:"Standard/Grade/Level Master"===Z?_:o,onClick:function(){return H("Standard/Grade/Level Master")},children:"Standard/Grade/Level Master"}),(0,b.jsx)("div",{className:"Subject Master"===Z?_:o,onClick:function(){return H("Subject Master")},children:"Subject Master"})]})]}),(0,b.jsx)(f.Z,{labelText:C("create_master_header_2"),placeholder:C("e.g. 6th Class/ FYJC"),name:"subjectName",value:B,type:"text",onChange:function(e){var t;(null===(t=e.target.value)||void 0===t?void 0:t.length)<=40&&O(e.target.value)},errorShow:q}),(0,b.jsx)(x.Z,{maxLength:40,valueLength:B}),"Subject Master"===Z?(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(f.Z,{labelText:C("course_code"),placeholder:C("course_code_placeholder"),name:"course",value:J,type:"text",onChange:function(e){return K(e.target.value)}}),(0,b.jsx)(f.Z,{labelText:C("co_count"),placeholder:C("co_count_placeholder"),name:"count",value:V,type:"text",onChange:function(e){X(e.target.value);for(var t=[],a=0;a<+e.target.value;a++){var n={attainment_name:"CO".concat(a+1),attainment_type:"CO"};t.push(n)}E(t)}}),null===z||void 0===z?void 0:z.map((function(e,t){return(0,b.jsx)(f.Z,{labelText:C("co_name"),placeholder:C("co_name_placeholder"),name:e.attainment_name,value:e.attainment_name,type:"text",onChange:function(e){return function(e,t){for(var a=(0,n.Z)(z),r=0;r<(null===a||void 0===a?void 0:a.length);r++)r===t&&(a[r].attainment_name=e.target.value);E(a)}(e,t)}},t)}))]}):null,(0,b.jsxs)("button",{className:i,onClick:function(){"Standard/Grade/Level Master"===Z?B?(L(!0),ae({className:{className:B},id:p,did:M}).then((function(e){null!==e&&void 0!==e&&e.data&&(a(!1),L(!1),O(""),ne())})).catch({})):F({subjectName:"* required"}):"Subject Master"===Z&&(B?(L(!0),W({subject:{subjectName:B,subjectType:"Mandatory",co_attainment_count:V,co_attainment_list:z,course_code:J},id:p,did:M}).then((function(e){null!==e&&void 0!==e&&e.data&&(a(!1),L(!1),ee(),O(""))})).catch({})):F({subjectName:"* required"}))},disabled:y,children:[(0,b.jsx)("p",{children:C("create")}),y&&(0,b.jsx)("div",{children:(0,b.jsx)(j.Z,{})})]})]})})}},49384:function(e,t,a){a.d(t,{Z:function(){return c}});a(72791);var n=a(6307),r=a(80184),c=function(){return(0,r.jsx)(n.iT,{ariaLabel:"loading-indicator",height:20,width:20,color:"white",secondaryColor:"#1c023b"})}},7135:function(){}}]);
//# sourceMappingURL=66040.237b00e4.chunk.js.map
"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[6035,6876],{76035:function(i,n,t){t.r(n),t.d(n,{default:function(){return A}});var s=t(29439),a=t(72791),e=t(5574),o=t(94721),l="AdmissionModal_financeModal__6CKus",r="AdmissionModal_financeModalhead__RF6hf",d="AdmissionModal_financeModalbody__Q+p1l",c="AdmissionModal_financeModalfooter__xBQYG",f="AdmissionModal_assignManager__ZRcL5",u="AdmissionModal_sidebarbottomitem__mFL4t",v="AdmissionModal_namee__jDkpC",h="AdmissionModal_desig__68gI6",_="AdmissionModal_activebtn__IPurt",m=t(69721),g=t(16871),p=t(95048),N=t(85243),x=t(46876),j=t(98734),M=t(39230),S=t(29017),Z=t(80184);var A=function(i){var n=i.admissionModal,t=i.hideModal,A=i.edit,k=i.admissionManagerName,C=i.onParentRefetch,L=(0,p.I0)(),w=(0,a.useState)(!1),b=(0,s.Z)(w,2),P=b[0],F=b[1],I=(0,a.useState)(!1),R=(0,s.Z)(I,2),O=R[0],y=R[1],D=(0,a.useState)(""),H=(0,s.Z)(D,2),E=H[0],G=H[1],Q=(0,p.v9)((function(i){return i.idChange})),U=(0,S.NC)(),q=(0,s.Z)(U,1)[0],B=(0,S.SU)(),z=(0,s.Z)(B,1)[0],W=(0,M.$G)().t,Y=(0,g.s0)();return(0,Z.jsxs)(Z.Fragment,{children:[!O&&(0,Z.jsx)(e.Z,{open:n,onClose:function(){return t(!1)},children:(0,Z.jsxs)("div",{className:l,children:[(0,Z.jsxs)("div",{className:r,children:[(0,Z.jsx)("h6",{children:W(A?"edit_asmission_dept":"activete_admission_dept")}),(0,Z.jsx)("img",{onClick:function(){return t(!1)},src:"/images/close-post-icon.svg",alt:""})]}),(0,Z.jsx)(o.Z,{}),(0,Z.jsxs)("div",{className:d,children:[!E&&!A&&(0,Z.jsx)("img",{className:f,onClick:function(){return F(!0)},src:"/images/admin/activate-admission.svg",alt:""}),(E||k)&&(0,Z.jsxs)("div",{className:u,onClick:function(){return F(!0)},children:[(0,Z.jsx)("img",{alt:"not found",src:null!==E&&void 0!==E&&E.staffProfilePhoto||null!==k&&void 0!==k&&k.staffProfilePhoto?"".concat(m.yI,"/").concat(E.staffProfilePhoto?E.staffProfilePhoto:null===k||void 0===k?void 0:k.staffProfilePhoto):"/images/member_tab/class/default_avatar.svg"}),(0,Z.jsxs)("div",{children:[(0,Z.jsx)("p",{className:v,children:"".concat(null!==E&&void 0!==E&&E.staffFirstName?null===E||void 0===E?void 0:E.staffFirstName:null===k||void 0===k?void 0:k.staffFirstName," \n                    ").concat(null!==E&&void 0!==E&&E.staffMiddleName?null===E||void 0===E?void 0:E.staffMiddleName:null!==E&&void 0!==E&&E.staffFirstName?"":null!==k&&void 0!==k&&k.staffMiddleName?null===k||void 0===k?void 0:k.staffMiddleName:"","\n                    ").concat(null!==E&&void 0!==E&&E.staffLastName?null===E||void 0===E?void 0:E.staffLastName:null===k||void 0===k?void 0:k.staffLastName," ")}),(0,Z.jsxs)("p",{className:h,children:["No."," ",null!==E&&void 0!==E&&E.staffROLLNO?null===E||void 0===E?void 0:E.staffROLLNO:null===k||void 0===k?void 0:k.staffROLLNO]})]})]})]}),(0,Z.jsxs)("div",{className:c,children:[!A&&(0,Z.jsx)("div",{className:_,onClick:function(){y(!0),q({id:Q.id,fActivate:{sid:null===E||void 0===E?void 0:E._id}}).then((function(i){var n;i.data.status&&(L(N.F.admissionQuery({aid:i.data.admission})),y(!1),Y("/q/".concat(null===(n=Q.loginProfile)||void 0===n?void 0:n.username,"/admission")))}))},children:W("activate")}),A&&(null===E||void 0===E?void 0:E._id)&&(0,Z.jsx)("div",{className:_,onClick:function(){null!==E&&void 0!==E&&E._id&&null!==k&&void 0!==k&&k._id?(y(!0),z({osid:null===k||void 0===k?void 0:k._id,nsid:null===E||void 0===E?void 0:E._id}).then((function(){C(),y(!1),t()}))):t()},children:W("update")})]})]})}),P&&(0,Z.jsx)(x.default,{assignHead:P,headSelect:function(i){G(i)},title:"Select Admission Admin",onClose:function(){return F((function(i){return!i}))},disabledId:null===k||void 0===k?void 0:k._id}),O&&(0,Z.jsx)(j.Z,{})]})}},46876:function(i,n,t){t.r(n);var s=t(93433),a=t(29439),e=t(72791),o=t(23441),l=t(95048),r=t(12923),d=t(763),c=t(69721),f=t(52124),u=t(5574),v=t(39230),h=t(80184),_=window.innerHeight;n.default=function(i){var n=i.onClose,t=i.title,m=i.headSelect,g=i.assignHead,p=i.disabledId,N=i.instituteId,x=i.viewAs,j=(0,v.$G)().t,M=(0,e.useState)(1),S=(0,a.Z)(M,2),Z=S[0],A=S[1],k=(0,e.useState)(!0),C=(0,a.Z)(k,2),L=C[0],w=C[1],b=(0,o.YD)(),P=(0,a.Z)(b,2),F=P[0],I=P[1],R=(0,e.useState)(""),O=(0,a.Z)(R,2),y=O[0],D=O[1],H=e.useState([]),E=(0,a.Z)(H,2),G=E[0],Q=E[1],U=(0,l.v9)((function(i){return i.idChange})),q=(0,r.vI)({skip:"ADMISSION_ADMIN"===x?!N:!(null!==U&&void 0!==U&&U.id),search:{search:y,page:Z,id:"ADMISSION_ADMIN"===x?N:null===U||void 0===U?void 0:U.id,limit:10}}),B=q.assignSearchStaff,z=q.assignSearchStaffRefetch;e.useEffect((function(){null!==U&&void 0!==U&&U.id&&z()}),[null===U||void 0===U?void 0:U.id,z,Z]),(0,e.useEffect)((function(){I&&L&&A((function(i){return i+1}))}),[I,L]),e.useEffect((function(){null!==B&&void 0!==B&&B.staff&&Q(y?null===B||void 0===B?void 0:B.staff:function(i){return function(i){for(var n=0;n<(null===i||void 0===i?void 0:i.length);n++)for(var t=n+1;t<(null===i||void 0===i?void 0:i.length);t++){var s,a;(null===(s=i[n])||void 0===s?void 0:s._id)===(null===(a=i[t])||void 0===a?void 0:a._id)&&(null===i||void 0===i||i.splice(t,1))}return i}([].concat((0,s.Z)(i),(0,s.Z)(null===B||void 0===B?void 0:B.staff)))}),10===(null===B||void 0===B?void 0:B.staff.length)?w(!0):w(!1)}),[null===B||void 0===B?void 0:B.staff]),(0,e.useEffect)((function(){y&&W()}),[y]);var W=function(){z()},Y=(0,e.useCallback)((0,d.debounce)((function(i){return D(i)}),500),[]),$=function(i){p===(null===i||void 0===i?void 0:i._id)||(m(i),"ADMISSION_ADMIN"===x||n())};return(0,h.jsx)(u.Z,{open:g,onClose:n,children:(0,h.jsxs)("div",{style:{backgroundColor:"#FAFAFA",width:"35rem",height:"".concat(_-20,"px"),overflowX:"hidden"},children:[(0,h.jsxs)("div",{className:f.Z.assign_title,style:{width:"100%"},children:[(0,h.jsx)("h5",{children:t}),(0,h.jsx)("img",{src:"/images/close-post-icon.svg",onClick:n,alt:"staff assign pop close icon"})]}),(0,h.jsxs)("div",{className:f.Z.assign_search_container,children:[(0,h.jsx)("input",{type:"text",placeholder:j("search"),className:f.Z.assign_search_input,onChange:function(i){return n=i.target.value,void Y(n);var n}}),(0,h.jsx)("img",{src:"/images/search-dash-icon.svg",alt:"search icon"})]}),(0,h.jsx)("div",{className:f.Z.assign_show_list,children:null===G||void 0===G?void 0:G.map((function(i,n){return(null===G||void 0===G?void 0:G.length)===n+1?(0,h.jsxs)("div",{ref:F,children:[(0,h.jsxs)("div",{className:f.Z.assign_show_list_each,style:p===i._id?{backgroundColor:"rgba(75, 26, 133, 0.1)"}:{backgroundColor:"inherit"},onClick:function(){return $(i)},children:[(0,h.jsx)("img",{src:null!==i&&void 0!==i&&i.staffProfilePhoto?"".concat(c.yI,"/").concat(i.staffProfilePhoto):"/images/member_tab/class/default_avatar.svg",alt:"staff profile avatar"}),(0,h.jsxs)("div",{className:f.Z.assign_each_paragraph,children:[(0,h.jsx)("h6",{children:"".concat(i.staffFirstName," ").concat(null!==i&&void 0!==i&&i.staffMiddleName?null===i||void 0===i?void 0:i.staffMiddleName:""," ").concat(i.staffLastName)}),(0,h.jsxs)("p",{children:[" ",j("index")," ",null===i||void 0===i?void 0:i.staffROLLNO]})]})]}),(0,h.jsx)("hr",{})]},i._id):(0,h.jsxs)("div",{children:[(0,h.jsxs)("div",{className:f.Z.assign_show_list_each,style:p===i._id?{backgroundColor:"rgba(75, 26, 133, 0.1)"}:{backgroundColor:"inherit"},onClick:function(){return $(i)},children:[(0,h.jsx)("img",{src:null!==i&&void 0!==i&&i.staffProfilePhoto?"".concat(c.yI,"/").concat(i.staffProfilePhoto):"/images/member_tab/class/default_avatar.svg",alt:"staff profile avatar"}),(0,h.jsxs)("div",{className:f.Z.assign_each_paragraph,children:[(0,h.jsx)("h6",{children:"".concat(i.staffFirstName," ").concat(null!==i&&void 0!==i&&i.staffMiddleName?null===i||void 0===i?void 0:i.staffMiddleName:""," ").concat(i.staffLastName)}),(0,h.jsxs)("p",{children:[" ",j("index")," ",null===i||void 0===i?void 0:i.staffROLLNO]})]})]}),(0,h.jsx)("hr",{})]},i._id)}))})]})})}},12923:function(i,n,t){t.d(n,{Ec:function(){return x},Em:function(){return S},JM:function(){return h},NS:function(){return o},Pg:function(){return _},Q_:function(){return N},RH:function(){return v},Tv:function(){return d},U_:function(){return p},VN:function(){return l},Wj:function(){return f},ZS:function(){return u},_8:function(){return j},d5:function(){return c},tB:function(){return g},vI:function(){return M},yx:function(){return r},zO:function(){return m}});var s=t(29439),a=t(91007),e=t(58208),o=function(i){var n=(0,e.YD)(i.search,{skip:i.skip});return{instituteAllSearch:n.data,instituteAllSearchRefetch:n.refetch}},l=function(){var i=(0,e.ak)();return[(0,s.Z)(i,1)[0]]},r=function(){var i=(0,e.WL)();return[(0,s.Z)(i,1)[0]]},d=function(i){var n=(0,e.pH)(i.list,{skip:i.skip});return{instituteFollowList:n.data,instituteFollowListRefetch:n.refetch}},c=function(i){var n=(0,e.MG)(i.data,{skip:i.skip});return{instituteOwnFollowingList:n.data,instituteOwnFollowingListRefetch:n.refetch}},f=function(){var i=(0,e.Ky)();return[(0,s.Z)(i,1)[0]]},u=function(i){var n=(0,e.p8)(i.list);return{userFollowList:n.data,userFollowListRefetch:n.refetch}},v=function(i){var n=(0,e.Wv)(i);return{userFollowingList:n.data,userFollowingListRefetch:n.refetch}},h=function(i){var n=(0,e.sz)(i.search,{skip:i.skip});return{userAllSearch:n.data,userAllSearchRefetch:n.refetch}},_=function(){var i=(0,e.Mk)();return[(0,s.Z)(i,1)[0]]},m=function(){var i=(0,e.$i)();return[(0,s.Z)(i,1)[0]]},g=function(){var i=(0,e.Do)();return[(0,s.Z)(i,1)[0]]},p=function(){var i=(0,e.He)();return[(0,s.Z)(i,1)[0]]},N=function(){var i=(0,e.vg)();return[(0,s.Z)(i,1)[0]]},x=function(){var i=(0,e.OO)();return[(0,s.Z)(i,1)[0]]},j=function(i){var n=(0,e.N2)(i);return{userCircleList:n.data,userCircleListRefetch:n.refetch}},M=function(i){var n=(0,a.x6)(i.search,{skip:i.skip});return{assignSearchStaff:n.data,assignSearchStaffRefetch:n.refetch}},S=function(i){var n=(0,e.SJ)(i);return{universalUser:n.data,universalUserRefetch:n.refetch}}},52124:function(i,n){n.Z={assign_title:"AssignStaffModal_assign_title__4DGBV",assign_search_container:"AssignStaffModal_assign_search_container__3x6RD",assign_search_input:"AssignStaffModal_assign_search_input__rO3c7",assign_show_list:"AssignStaffModal_assign_show_list__yHhf7",assign_show_list_each:"AssignStaffModal_assign_show_list_each__ACUEw",assign_each_paragraph:"AssignStaffModal_assign_each_paragraph__pMHTq",universal_modal:"AssignStaffModal_universal_modal__czmpB",is_mulitselect_container:"AssignStaffModal_is_mulitselect_container__0cPQ2"}}}]);
//# sourceMappingURL=6035.39781696.chunk.js.map
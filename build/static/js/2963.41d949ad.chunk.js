"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[2963,6876],{92963:function(n,i,e){e.r(i);var a=e(29439),t=e(72791),s=e(5574),o=e(94721),l=e(80255),r=e(69721),c=e(16871),d=e(39230),u=e(46876),f=e(98734),v=e(78687),h=e(87338),_=e(80184);i.default=function(n){var i,e,g,m,p,M,x,N,j,Z=n.hostelModal,S=n.hideModal,k=n.edit,b=n.hostelManagerName,F=n.onParentRefetch,C=(0,d.$G)().t,L=(0,t.useState)(!1),w=(0,a.Z)(L,2),A=w[0],O=w[1],P=(0,t.useState)(!1),R=(0,a.Z)(P,2),y=R[0],I=R[1],D=(0,t.useState)(""),E=(0,a.Z)(D,2),H=E[0],U=E[1],q=(0,v.useSelector)((function(n){return n.idChange})),z=(0,h.Tr)(),J=(0,a.Z)(z,1)[0],T=(0,h.M_)(),G=(0,a.Z)(T,1)[0],B=(0,c.s0)();return(0,_.jsxs)(_.Fragment,{children:[!y&&(0,_.jsx)(s.Z,{open:Z,onClose:function(){return S(!1)},children:(0,_.jsxs)("div",{className:l.Z.financeModal,children:[(0,_.jsxs)("div",{className:l.Z.financeModalhead,children:[(0,_.jsx)("h6",{children:C(k?"edit_hostel_dept":"active_hostel")}),(0,_.jsx)("img",{onClick:function(){return S(!1)},src:"/images/close-post-icon.svg",alt:""})]}),(0,_.jsx)(o.Z,{}),(0,_.jsxs)("div",{className:l.Z.financeModalbody,children:[!H&&!k&&(0,_.jsxs)("div",{className:l.Z.assignDesignation,onClick:function(){return O(!0)},children:[(0,_.jsx)("img",{className:l.Z.assignManager,src:"/images/sports/avatar-circle.svg",alt:""}),(0,_.jsxs)("div",{children:[(0,_.jsx)("h6",{children:C("assign_hostel_head")}),(0,_.jsx)("p",{children:C("search_from_joined_list")})]})]}),(H||b)&&(0,_.jsxs)("div",{className:l.Z.sidebarbottomitem,onClick:function(){return O(!0)},children:[(0,_.jsx)("img",{alt:"not found",src:null!==H&&void 0!==H&&H.staffProfilePhoto||null!==b&&void 0!==b&&b.staffProfilePhoto?"".concat(r.yI,"/").concat(null!==(i=H.staffProfilePhoto)&&void 0!==i?i:null===b||void 0===b?void 0:b.staffProfilePhoto):"/images/finance/assign-manager.svg"}),(0,_.jsxs)("div",{children:[(0,_.jsx)("p",{className:l.Z.namee,children:"".concat(null!==(e=null!==(g=null===H||void 0===H?void 0:H.staffFirstName)&&void 0!==g?g:null===b||void 0===b?void 0:b.staffFirstName)&&void 0!==e?e:""," \n                    ").concat(null!==(m=null!==(p=null===H||void 0===H?void 0:H.staffMiddleName)&&void 0!==p?p:null===b||void 0===b?void 0:b.staffMiddleName)&&void 0!==m?m:"","\n                    ").concat(null!==(M=null!==(x=null===H||void 0===H?void 0:H.staffLastName)&&void 0!==x?x:null===b||void 0===b?void 0:b.staffLastName)&&void 0!==M?M:""," ")}),(0,_.jsxs)("p",{className:l.Z.desig,children:["No."," ",null!==(N=null!==(j=null===H||void 0===H?void 0:H.staffROLLNO)&&void 0!==j?j:null===b||void 0===b?void 0:b.staffROLLNO)&&void 0!==N?N:""]})]})]})]}),(0,_.jsxs)("div",{className:l.Z.financeModalfooter,children:[!k&&(0,_.jsx)("div",{className:l.Z.activebtn,onClick:function(){I(!0),J({id:q.id,fActivate:{sid:null===H||void 0===H?void 0:H._id}}).then((function(n){var i;(I(!1),n.data.status)&&B("/q/".concat(null===(i=q.loginProfile)||void 0===i?void 0:i.username,"/hostel"),{state:{hid:n.data.hostel}})})).catch({})},children:C("activate")}),k&&(null===H||void 0===H?void 0:H._id)&&(0,_.jsx)("div",{className:l.Z.activebtn,onClick:function(){null!==H&&void 0!==H&&H._id&&null!==b&&void 0!==b&&b._id?(I(!0),G({osid:null===b||void 0===b?void 0:b._id,nsid:null===H||void 0===H?void 0:H._id}).then((function(){F(),I(!1),S()})).catch({})):S()},children:C("update")})]})]})}),A&&(0,_.jsx)(u.default,{assignHead:A,headSelect:function(n){U(n)},title:C("secect_hostel_head"),onClose:function(){return O((function(n){return!n}))},disabledId:null===b||void 0===b?void 0:b._id}),y&&(0,_.jsx)(f.Z,{})]})}},46876:function(n,i,e){e.r(i);var a=e(93433),t=e(29439),s=e(72791),o=e(23441),l=e(78687),r=e(12923),c=e(763),d=e(69721),u=e(52124),f=e(5574),v=e(39230),h=e(80184);i.default=function(n){var i=n.onClose,e=n.title,_=n.headSelect,g=n.assignHead,m=n.disabledId,p=n.instituteId,M=n.viewAs,x=(0,v.$G)().t,N=(0,s.useState)(1),j=(0,t.Z)(N,2),Z=j[0],S=j[1],k=(0,s.useState)(!0),b=(0,t.Z)(k,2),F=b[0],C=b[1],L=(0,o.YD)(),w=(0,t.Z)(L,2),A=w[0],O=w[1],P=(0,s.useState)(""),R=(0,t.Z)(P,2),y=R[0],I=R[1],D=s.useState([]),E=(0,t.Z)(D,2),H=E[0],U=E[1],q=(0,l.useSelector)((function(n){return n.idChange})),z=(0,r.vI)({skip:"ADMISSION_ADMIN"===M?!p:!(null!==q&&void 0!==q&&q.id),search:{search:y,page:Z,id:"ADMISSION_ADMIN"===M?p:null===q||void 0===q?void 0:q.id,limit:10}}),J=z.assignSearchStaff,T=z.assignSearchStaffRefetch;s.useEffect((function(){null!==q&&void 0!==q&&q.id&&T()}),[null===q||void 0===q?void 0:q.id,T,Z]),(0,s.useEffect)((function(){O&&F&&S((function(n){return n+1}))}),[O,F]),s.useEffect((function(){null!==J&&void 0!==J&&J.staff&&U(y?null===J||void 0===J?void 0:J.staff:function(n){var i,e;return null===(i=(0,a.Z)(new Set(null===(e=[].concat((0,a.Z)(n),(0,a.Z)(null===J||void 0===J?void 0:J.staff)))||void 0===e?void 0:e.map(JSON.stringify))))||void 0===i?void 0:i.map(JSON.parse)}),10===(null===J||void 0===J?void 0:J.staff.length)?C(!0):C(!1)}),[null===J||void 0===J?void 0:J.staff]),(0,s.useEffect)((function(){y&&G()}),[y]);var G=function(){T()},B=(0,s.useCallback)((0,c.debounce)((function(n){return I(n)}),500),[]),K=function(n){m===(null===n||void 0===n?void 0:n._id)||(_(n),"ADMISSION_ADMIN"===M||i())};return(0,h.jsx)(f.Z,{open:g,onClose:i,children:(0,h.jsxs)("div",{style:{backgroundColor:"#FAFAFA"},children:[(0,h.jsxs)("div",{className:u.Z.assign_title,children:[(0,h.jsx)("h5",{children:e}),(0,h.jsx)("img",{src:"/images/close-post-icon.svg",onClick:i,alt:"staff assign pop close icon"})]}),(0,h.jsxs)("div",{className:u.Z.assign_search_container,children:[(0,h.jsx)("input",{type:"text",placeholder:x("search"),className:u.Z.assign_search_input,onChange:function(n){return i=n.target.value,void B(i);var i}}),(0,h.jsx)("img",{src:"/images/search-dash-icon.svg",alt:"search icon"})]}),(0,h.jsx)("div",{className:u.Z.assign_show_list,children:null===H||void 0===H?void 0:H.map((function(n,i){return(null===H||void 0===H?void 0:H.length)===i+1?(0,h.jsxs)("div",{ref:A,children:[(0,h.jsxs)("div",{className:u.Z.assign_show_list_each,style:m===n._id?{backgroundColor:"rgba(75, 26, 133, 0.1)"}:{backgroundColor:"inherit"},onClick:function(){return K(n)},children:[(0,h.jsx)("img",{src:null!==n&&void 0!==n&&n.staffProfilePhoto?"".concat(d.yI,"/").concat(n.staffProfilePhoto):"/images/demo_users/user1.svg",alt:"staff profile avatar"}),(0,h.jsxs)("div",{className:u.Z.assign_each_paragraph,children:[(0,h.jsx)("h6",{children:"".concat(n.staffFirstName," ").concat(null!==n&&void 0!==n&&n.staffMiddleName?null===n||void 0===n?void 0:n.staffMiddleName:""," ").concat(n.staffLastName)}),(0,h.jsxs)("p",{children:[" ",x("index")," ",null===n||void 0===n?void 0:n.staffROLLNO]})]})]}),(0,h.jsx)("hr",{})]},n._id):(0,h.jsxs)("div",{children:[(0,h.jsxs)("div",{className:u.Z.assign_show_list_each,style:m===n._id?{backgroundColor:"rgba(75, 26, 133, 0.1)"}:{backgroundColor:"inherit"},onClick:function(){return K(n)},children:[(0,h.jsx)("img",{src:null!==n&&void 0!==n&&n.staffProfilePhoto?"".concat(d.yI,"/").concat(n.staffProfilePhoto):"/images/demo_users/user1.svg",alt:"staff profile avatar"}),(0,h.jsxs)("div",{className:u.Z.assign_each_paragraph,children:[(0,h.jsx)("h6",{children:"".concat(n.staffFirstName," ").concat(null!==n&&void 0!==n&&n.staffMiddleName?null===n||void 0===n?void 0:n.staffMiddleName:""," ").concat(n.staffLastName)}),(0,h.jsxs)("p",{children:[" ",x("index")," ",null===n||void 0===n?void 0:n.staffROLLNO]})]})]}),(0,h.jsx)("hr",{})]},n._id)}))})]})})}},12923:function(n,i,e){e.d(i,{Ec:function(){return x},Em:function(){return Z},JM:function(){return h},NS:function(){return o},Pg:function(){return _},Q_:function(){return M},RH:function(){return v},Tv:function(){return c},U_:function(){return p},VN:function(){return l},Wj:function(){return u},ZS:function(){return f},_8:function(){return N},d5:function(){return d},tB:function(){return m},vI:function(){return j},yx:function(){return r},zO:function(){return g}});var a=e(29439),t=e(91007),s=e(58208),o=function(n){var i=(0,s.YD)(n.search,{skip:n.skip});return{instituteAllSearch:i.data,instituteAllSearchRefetch:i.refetch}},l=function(){var n=(0,s.ak)();return[(0,a.Z)(n,1)[0]]},r=function(){var n=(0,s.WL)();return[(0,a.Z)(n,1)[0]]},c=function(n){var i=(0,s.pH)(n.list,{skip:n.skip});return{instituteFollowList:i.data,instituteFollowListRefetch:i.refetch}},d=function(n){var i=(0,s.MG)(n.data,{skip:n.skip});return{instituteOwnFollowingList:i.data,instituteOwnFollowingListRefetch:i.refetch}},u=function(){var n=(0,s.Ky)();return[(0,a.Z)(n,1)[0]]},f=function(n){var i=(0,s.p8)(n.list);return{userFollowList:i.data,userFollowListRefetch:i.refetch}},v=function(n){var i=(0,s.Wv)(n);return{userFollowingList:i.data,userFollowingListRefetch:i.refetch}},h=function(n){var i=(0,s.sz)(n.search,{skip:n.skip});return{userAllSearch:i.data,userAllSearchRefetch:i.refetch}},_=function(){var n=(0,s.Mk)();return[(0,a.Z)(n,1)[0]]},g=function(){var n=(0,s.$i)();return[(0,a.Z)(n,1)[0]]},m=function(){var n=(0,s.Do)();return[(0,a.Z)(n,1)[0]]},p=function(){var n=(0,s.He)();return[(0,a.Z)(n,1)[0]]},M=function(){var n=(0,s.vg)();return[(0,a.Z)(n,1)[0]]},x=function(){var n=(0,s.OO)();return[(0,a.Z)(n,1)[0]]},N=function(n){var i=(0,s.N2)(n);return{userCircleList:i.data,userCircleListRefetch:i.refetch}},j=function(n){var i=(0,t.x6)(n.search,{skip:n.skip});return{assignSearchStaff:i.data,assignSearchStaffRefetch:i.refetch}},Z=function(n){var i=(0,s.SJ)(n);return{universalUser:i.data,universalUserRefetch:i.refetch}}},80255:function(n,i){i.Z={financeModal:"FinanceModal_financeModal__1RywL",financeModalhead:"FinanceModal_financeModalhead__-XMvQ",financeModalbody:"FinanceModal_financeModalbody__b2UgF",financeModalfooter:"FinanceModal_financeModalfooter__qy0zU",assignManager:"FinanceModal_assignManager__5zOEh",searchbar:"FinanceModal_searchbar__0fRN9",sidebarbottomitem:"FinanceModal_sidebarbottomitem__hij21",namee:"FinanceModal_namee__P+JTM",desig:"FinanceModal_desig__6TdtK",items:"FinanceModal_items__0ySKx",financebtn:"FinanceModal_financebtn__pym7q",activebtn:"FinanceModal_activebtn__Ssn8E",assignDesignation:"FinanceModal_assignDesignation__p-fvU"}},52124:function(n,i){i.Z={assign_title:"AssignStaffModal_assign_title__4DGBV",assign_search_container:"AssignStaffModal_assign_search_container__3x6RD",assign_search_input:"AssignStaffModal_assign_search_input__rO3c7",assign_show_list:"AssignStaffModal_assign_show_list__yHhf7",assign_show_list_each:"AssignStaffModal_assign_show_list_each__ACUEw",assign_each_paragraph:"AssignStaffModal_assign_each_paragraph__pMHTq",universal_modal:"AssignStaffModal_universal_modal__czmpB"}}}]);
//# sourceMappingURL=2963.41d949ad.chunk.js.map
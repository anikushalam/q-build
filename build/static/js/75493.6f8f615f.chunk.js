"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[75493],{12923:function(t,e,i){i.d(e,{Ec:function(){return L},Em:function(){return j},JM:function(){return h},NS:function(){return s},Pg:function(){return _},Q_:function(){return g},RH:function(){return v},Tv:function(){return f},U_:function(){return m},VN:function(){return l},Wj:function(){return o},ZS:function(){return d},_8:function(){return x},d5:function(){return u},tB:function(){return S},vI:function(){return k},yx:function(){return c},zO:function(){return p}});var n=i(29439),a=i(91007),r=i(58208),s=function(t){var e=(0,r.YD)(t.search,{skip:t.skip});return{instituteAllSearch:e.data,instituteAllSearchRefetch:e.refetch}},l=function(){var t=(0,r.ak)();return[(0,n.Z)(t,1)[0]]},c=function(){var t=(0,r.WL)();return[(0,n.Z)(t,1)[0]]},f=function(t){var e=(0,r.pH)(t.list,{skip:t.skip});return{instituteFollowList:e.data,instituteFollowListRefetch:e.refetch}},u=function(t){var e=(0,r.MG)(t.data,{skip:t.skip});return{instituteOwnFollowingList:e.data,instituteOwnFollowingListRefetch:e.refetch}},o=function(){var t=(0,r.Ky)();return[(0,n.Z)(t,1)[0]]},d=function(t){var e=(0,r.p8)(t.list);return{userFollowList:e.data,userFollowListRefetch:e.refetch}},v=function(t){var e=(0,r.Wv)(t);return{userFollowingList:e.data,userFollowingListRefetch:e.refetch}},h=function(t){var e=(0,r.sz)(t.search,{skip:t.skip});return{userAllSearch:e.data,userAllSearchRefetch:e.refetch}},_=function(){var t=(0,r.Mk)();return[(0,n.Z)(t,1)[0]]},p=function(){var t=(0,r.$i)();return[(0,n.Z)(t,1)[0]]},S=function(){var t=(0,r.Do)();return[(0,n.Z)(t,1)[0]]},m=function(){var t=(0,r.He)();return[(0,n.Z)(t,1)[0]]},g=function(){var t=(0,r.vg)();return[(0,n.Z)(t,1)[0]]},L=function(){var t=(0,r.OO)();return[(0,n.Z)(t,1)[0]]},x=function(t){var e=(0,r.N2)(t);return{userCircleList:e.data,userCircleListRefetch:e.refetch}},k=function(t){var e=(0,a.x6)(t.search,{skip:t.skip});return{assignSearchStaff:e.data,assignSearchStaffRefetch:e.refetch}},j=function(t){var e=(0,r.SJ)(t);return{universalUser:e.data,universalUserRefetch:e.refetch}}},75493:function(t,e,i){i.r(e),i.d(e,{default:function(){return p}});var n=i(93433),a=i(29439),r=i(72791),s=i(23441),l=i(95048),c=i(12923),f=i(763),u={complaintDetails:"AllStaffList_complaintDetails__yX+MM",detailsheader:"AllStaffList_detailsheader__WXeli",list:"AllStaffList_list__jaiky",datetime:"AllStaffList_datetime__jitwV",item:"AllStaffList_item__lUg7F",detailsbody:"AllStaffList_detailsbody__NL7m2",solvedbtn:"AllStaffList_solvedbtn__s96-Z",searchbar:"AllStaffList_searchbar__nThuI",items:"AllStaffList_items__Ku7dP",divider:"AllStaffList_divider__Q6FBd",text:"AllStaffList_text__3nEF9"},o=i(69721),d=i(98684),v=i(80184),h=function(t){var e=t.val,i=t.setReplacedStaff,n=t.replacedStaff;return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("div",{className:u.item,onClick:function(){i(e)},style:{backgroundColor:(null===n||void 0===n?void 0:n._id)===(null===e||void 0===e?void 0:e._id)?"rgba(75, 26, 133, 0.1)":"inherit"},children:[(0,v.jsx)("img",{src:""!==(null===e||void 0===e?void 0:e.photoId)?"".concat(o.yI,"/").concat(null===e||void 0===e?void 0:e.staffProfilePhoto):"".concat(d.p3,"/feed-user-avatar.svg"),alt:""}),(0,v.jsxs)("div",{className:u.text,children:[(0,v.jsx)("h6",{children:"".concat(null===e||void 0===e?void 0:e.staffFirstName," ").concat(null!==e&&void 0!==e&&e.staffMiddleName?null===e||void 0===e?void 0:e.staffMiddleName:""," ").concat(null===e||void 0===e?void 0:e.staffLastName)}),(0,v.jsx)("p",{children:null===e||void 0===e?void 0:e.staffROLLNO})]})]}),(0,v.jsx)("div",{className:u.divider})]})},_=i(39230);var p=function(t){var e=t.setStaffListView,i=t.setReplacedStaff,o=t.replaceStaffId,d=t.replacedStaff,p=(0,l.v9)((function(t){return t.idChange.id})),S=(0,r.useState)(1),m=(0,a.Z)(S,2),g=m[0],L=m[1],x=(0,r.useState)(!0),k=(0,a.Z)(x,2),j=k[0],N=k[1],Z=(0,_.$G)().t,R=(0,s.YD)(),w=(0,a.Z)(R,2),A=w[0],b=w[1],F=r.useState([]),y=(0,a.Z)(F,2),C=y[0],O=y[1],E=(0,r.useState)(""),I=(0,a.Z)(E,2),M=I[0],D=I[1],J=(0,c.vI)({skip:!p,search:{search:M,page:g,id:p,limit:10}}),P=J.assignSearchStaff,U=J.assignSearchStaffRefetch;r.useEffect((function(){p&&U()}),[p,g,U]),(0,r.useEffect)((function(){b&&j&&L((function(t){return t+1}))}),[b,j]),r.useEffect((function(){if(null!==P&&void 0!==P&&P.staff)if(M)O(null===P||void 0===P?void 0:P.staff);else{var t=[].concat((0,n.Z)(C),(0,n.Z)(null===P||void 0===P?void 0:P.staff)),e=(0,n.Z)(new Set(t.map(JSON.stringify))).map(JSON.parse);O(e)}10===(null===P||void 0===P?void 0:P.staff.length)?N(!0):N(!1)}),[null===P||void 0===P?void 0:P.staff]),(0,r.useEffect)((function(){M&&W()}),[M]);var W=function(){U()},H=(0,r.useCallback)((0,f.debounce)((function(t){return D(t)}),500),[]);return(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)("div",{className:u.complaintDetails,children:[(0,v.jsxs)("div",{className:u.detailsheader,children:[(0,v.jsx)("h6",{children:Z("all_staff_list")}),(0,v.jsx)("img",{onClick:function(){return e(!1)},src:"/images/close-post-icon.svg",alt:""})]}),(0,v.jsxs)("div",{className:u.detailsbody,children:[(0,v.jsxs)("div",{className:u.searchbar,children:[(0,v.jsx)("input",{type:"text",placeholder:Z("search"),className:"form-control ".concat(u.searchinput),onChange:function(t){return e=t.target.value,void H(e);var e}}),(0,v.jsx)("img",{className:u.searchIcon,alt:"img",src:"/images/search-dash-icon.svg"})]}),(0,v.jsx)("div",{className:u.items,children:null===C||void 0===C?void 0:C.map((function(t,e){return(null===C||void 0===C?void 0:C.length)===e+1?(0,v.jsx)("div",{ref:A,children:(null===t||void 0===t?void 0:t._id)==="".concat(o)?"":(0,v.jsx)(h,{setReplacedStaff:i,val:t,replacedStaff:d})},e):(null===t||void 0===t?void 0:t._id)==="".concat(o)?"":(0,v.jsx)(h,{setReplacedStaff:i,val:t,replacedStaff:d},e)}))})]})]})})}}}]);
//# sourceMappingURL=75493.6f8f615f.chunk.js.map
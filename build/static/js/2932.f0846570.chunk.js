"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[2932],{62932:function(a,e,s){s.r(e);var n=s(93433),i=s(29439),c=s(72791),t=s(23441),r=s(763),o=s(52124),l=s(1874),_=s(12072),d=s(39230),h=s(95378),u=s(69721),f=s(80184);e.default=function(a){var e=a.onClose,s=a.selectMember,v=(0,c.useState)(1),g=(0,i.Z)(v,2),m=g[0],p=g[1],x=(0,c.useState)(!0),j=(0,i.Z)(x,2),S=j[0],Z=j[1],k=(0,t.YD)(),b=(0,i.Z)(k,2),y=b[0],C=b[1],N=(0,d.$G)().t,A=(0,c.useState)(""),w=(0,i.Z)(A,2),M=w[0],H=w[1],B=c.useState([]),E=(0,i.Z)(B,2),I=E[0],F=E[1],O=(0,h.I9)({search:M,page:m,limit:10}),P=O.affiliatedSearch,R=O.affiliatedSearchRefetch;c.useEffect((function(){R()}),[R,m]),(0,c.useEffect)((function(){C&&S&&p((function(a){return a+1}))}),[C,S]),c.useEffect((function(){if(null!==P&&void 0!==P&&P.manage)if(M)F(null===P||void 0===P?void 0:P.manage);else{var a=[].concat((0,n.Z)(I),(0,n.Z)(null===P||void 0===P?void 0:P.manage)),e=(0,n.Z)(new Set(a.map(JSON.stringify))).map(JSON.parse);F(e)}10===(null===P||void 0===P?void 0:P.manage.length)?Z(!0):Z(!1)}),[null===P||void 0===P?void 0:P.manage]),(0,c.useEffect)((function(){M&&q()}),[M]);var q=function(){R()},D=(0,c.useCallback)((0,r.debounce)((function(a){return H(a)}),500),[]),G=function(a){s(a),e()};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(l.Z,{onClose:function(){e()}}),(0,f.jsx)(_.Z,{children:(0,f.jsxs)("div",{style:{backgroundColor:"#FAFAFA",borderRadius:"10px"},children:[(0,f.jsxs)("div",{className:o.Z.assign_title,children:[(0,f.jsx)("h5",{children:N("search_select")}),(0,f.jsx)("img",{src:"/images/close-post-icon.svg",onClick:e,alt:"staff assign pop close icon"})]}),(0,f.jsxs)("div",{className:o.Z.assign_search_container,children:[(0,f.jsx)("input",{type:"text",placeholder:N("search"),className:o.Z.assign_search_input,onChange:function(a){return e=a.target.value,void D(e);var e}}),(0,f.jsx)("img",{src:"/images/search-dash-icon.svg",alt:"search icon"})]}),(0,f.jsx)("div",{className:o.Z.assign_show_list,children:null===I||void 0===I?void 0:I.map((function(a,e){return(null===I||void 0===I?void 0:I.length)===e+1?(0,f.jsxs)("div",{ref:y,children:[(0,f.jsxs)("div",{className:o.Z.assign_show_list_each,onClick:function(){return G(a)},children:[(0,f.jsx)("img",{src:null!==a&&void 0!==a&&a.photo?"".concat(u.yI,"/").concat(a.photo):"/images/member_tab/class/default_avatar.svg",alt:"student profile avatar"}),(0,f.jsxs)("div",{className:o.Z.assign_each_paragraph,children:[(0,f.jsx)("h6",{children:null===a||void 0===a?void 0:a.affiliation_name}),(0,f.jsxs)("p",{children:[N("aff_ins")," ",null===a||void 0===a?void 0:a.affiliation_institute_approve_count]})]})]}),(0,f.jsx)("hr",{})]},a._id):(0,f.jsxs)("div",{children:[(0,f.jsxs)("div",{className:o.Z.assign_show_list_each,onClick:function(){return G(a)},children:[(0,f.jsx)("img",{src:null!==a&&void 0!==a&&a.photo?"".concat(u.yI,"/").concat(a.photo):"/images/member_tab/class/default_avatar.svg",alt:"student profile avatar"}),(0,f.jsxs)("div",{className:o.Z.assign_each_paragraph,children:[(0,f.jsx)("h6",{children:null===a||void 0===a?void 0:a.affiliation_name}),(0,f.jsxs)("p",{children:[N("aff_ins")," ",null===a||void 0===a?void 0:a.affiliation_institute_approve_count]})]})]}),(0,f.jsx)("hr",{})]},a._id)}))})]})})]})}},12072:function(a,e,s){s.d(e,{Z:function(){return r}});var n=s(1413),i=(s(72791),s(54164)),c="Overlay_overlay_card__PAr1h",t=s(80184),r=function(a){var e=a.children,s=a.customStyle;return(0,t.jsx)(t.Fragment,{children:i.createPortal((0,t.jsx)("div",{className:c,style:(0,n.Z)({},s),children:e}),document.getElementById("overlay"))})}},84489:function(a,e,s){var n=s(1413),i=(s(72791),s(51857)),c=s(80184);e.Z=function(a){var e=a.onClose,s=a.customStyleBackdrop;return(0,c.jsx)("div",{className:i.Z.search_backdrop,style:(0,n.Z)({},s),onClick:e})}},1874:function(a,e,s){s(72791);var n=s(54164),i=s(84489),c=s(80184);e.Z=function(a){var e=a.onClose,s=a.customStyleBackdrop;return(0,c.jsx)(c.Fragment,{children:n.createPortal((0,c.jsx)(i.Z,{onClose:e,customStyleBackdrop:s}),document.getElementById("backdrop"))})}},52124:function(a,e){e.Z={assign_title:"AssignStaffModal_assign_title__4DGBV",assign_search_container:"AssignStaffModal_assign_search_container__3x6RD",assign_search_input:"AssignStaffModal_assign_search_input__rO3c7",assign_show_list:"AssignStaffModal_assign_show_list__yHhf7",assign_show_list_each:"AssignStaffModal_assign_show_list_each__ACUEw",assign_each_paragraph:"AssignStaffModal_assign_each_paragraph__pMHTq",universal_modal:"AssignStaffModal_universal_modal__czmpB",is_mulitselect_container:"AssignStaffModal_is_mulitselect_container__0cPQ2"}},51857:function(a,e){e.Z={search_backdrop:"SearchHeader_search_backdrop__MsKpG",search_card:"SearchHeader_search_card__-jNcg",search_container:"SearchHeader_search_container__NS7Om",search_container_text:"SearchHeader_search_container_text__bkolR",searchIcon:"SearchHeader_searchIcon__J7cNp",search_container_back:"SearchHeader_search_container_back__ZoXdV"}}}]);
//# sourceMappingURL=2932.f0846570.chunk.js.map
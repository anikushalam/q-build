"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[71015,46876],{46876:function(e,t,n){n.r(t);var i=n(93433),s=n(29439),o=n(72791),a=n(23441),l=n(95048),r=n(12923),c=n(763),d=n(69721),u=n(52124),_=n(5574),v=n(39230),h=n(80184),f=window.innerHeight;t.default=function(e){var t=e.onClose,n=e.title,m=e.headSelect,g=e.assignHead,p=e.disabledId,x=e.instituteId,j=e.viewAs,Z=e.isMultiSelect,N=e.selectList,b=e.onMultiSelect,S=e.onDone,I=(0,v.$G)().t,w=(0,o.useState)(1),y=(0,s.Z)(w,2),k=y[0],A=y[1],C=(0,o.useState)(!0),H=(0,s.Z)(C,2),L=H[0],E=H[1],M=(0,a.YD)(),R=(0,s.Z)(M,2),F=R[0],T=R[1],D=(0,o.useState)(""),O=(0,s.Z)(D,2),P=O[0],U=O[1],q=o.useState([]),B=(0,s.Z)(q,2),G=B[0],W=B[1],$=(0,l.v9)((function(e){return e.idChange})),z=(0,r.vI)({skip:"ADMISSION_ADMIN"===j?!x:!(null!==$&&void 0!==$&&$.id),search:{search:P,page:k,id:"ADMISSION_ADMIN"===j?x:null===$||void 0===$?void 0:$.id,limit:10}}),J=z.assignSearchStaff,Q=z.assignSearchStaffRefetch;o.useEffect((function(){null!==$&&void 0!==$&&$.id&&Q()}),[null===$||void 0===$?void 0:$.id,Q,k]),(0,o.useEffect)((function(){T&&L&&A((function(e){return e+1}))}),[T,L]),o.useEffect((function(){null!==J&&void 0!==J&&J.staff&&W(P?null===J||void 0===J?void 0:J.staff:function(e){return function(e){for(var t=0;t<(null===e||void 0===e?void 0:e.length);t++)for(var n=t+1;n<(null===e||void 0===e?void 0:e.length);n++){var i,s;(null===(i=e[t])||void 0===i?void 0:i._id)===(null===(s=e[n])||void 0===s?void 0:s._id)&&(null===e||void 0===e||e.splice(n,1))}return e}([].concat((0,i.Z)(e),(0,i.Z)(null===J||void 0===J?void 0:J.staff)))}),10===(null===J||void 0===J?void 0:J.staff.length)?E(!0):E(!1)}),[null===J||void 0===J?void 0:J.staff]),(0,o.useEffect)((function(){P&&V()}),[P]);var V=function(){Q()},Y=(0,o.useCallback)((0,c.debounce)((function(e){return U(e)}),500),[]),X=function(e){p===(null===e||void 0===e?void 0:e._id)||(Z?b(e):(m(e),"ADMISSION_ADMIN"===j||t()))};return(0,h.jsx)(_.Z,{open:g,onClose:t,children:(0,h.jsxs)("div",{style:{backgroundColor:"#FAFAFA",width:"35rem",height:"".concat(f-20,"px"),overflowX:"hidden"},children:[(0,h.jsxs)("div",{className:u.Z.assign_title,style:{width:"100%"},children:[(0,h.jsx)("h5",{children:n}),Z?(0,h.jsxs)("div",{className:u.Z.is_mulitselect_container,children:[(0,h.jsx)("h6",{style:{cursor:"pointer"},onClick:S,children:I("select")}),(0,h.jsx)("img",{src:"/images/close-post-icon.svg",onClick:t,alt:"staff assign pop close icon"})]}):(0,h.jsx)("img",{src:"/images/close-post-icon.svg",onClick:t,alt:"staff assign pop close icon"})]}),(0,h.jsxs)("div",{className:u.Z.assign_search_container,children:[(0,h.jsx)("input",{type:"text",placeholder:I("search"),className:u.Z.assign_search_input,onChange:function(e){return t=e.target.value,void Y(t);var t}}),(0,h.jsx)("img",{src:"/images/search-dash-icon.svg",alt:"search icon"})]}),(0,h.jsx)("div",{className:u.Z.assign_show_list,children:null===G||void 0===G?void 0:G.map((function(e,t){return(null===G||void 0===G?void 0:G.length)===t+1?(0,h.jsxs)("div",{ref:F,children:[(0,h.jsxs)("div",{className:u.Z.assign_show_list_each,style:p===e._id?{backgroundColor:"rgba(75, 26, 133, 0.1)"}:{backgroundColor:"inherit"},onClick:function(){return X(e)},children:[Z?null!==N&&void 0!==N&&N.includes(null===e||void 0===e?void 0:e._id)?(0,h.jsx)("img",{src:"/images/checkbox-icon.svg",alt:"icon",style:{height:"1.3rem",borderRadius:"0",cursor:"pointer"}}):(0,h.jsx)("img",{style:{height:"1.3rem",borderRadius:"0",cursor:"pointer"},src:"/images/box-icon.svg",alt:"icon"}):"",(0,h.jsx)("img",{src:null!==e&&void 0!==e&&e.staffProfilePhoto?"".concat(d.yI,"/").concat(e.staffProfilePhoto):"/images/member_tab/class/default_avatar.svg",alt:"staff profile avatar"}),(0,h.jsxs)("div",{className:u.Z.assign_each_paragraph,children:[(0,h.jsx)("h6",{children:"".concat(e.staffFirstName," ").concat(null!==e&&void 0!==e&&e.staffMiddleName?null===e||void 0===e?void 0:e.staffMiddleName:""," ").concat(e.staffLastName)}),(0,h.jsxs)("p",{children:[" ",I("index")," ",null===e||void 0===e?void 0:e.staffROLLNO]})]})]}),(0,h.jsx)("hr",{})]},e._id):(0,h.jsxs)("div",{children:[(0,h.jsxs)("div",{className:u.Z.assign_show_list_each,style:p===e._id?{backgroundColor:"rgba(75, 26, 133, 0.1)"}:{backgroundColor:"inherit"},onClick:function(){return X(e)},children:[Z?null!==N&&void 0!==N&&N.includes(null===e||void 0===e?void 0:e._id)?(0,h.jsx)("img",{style:{height:"1.3rem",borderRadius:"0",cursor:"pointer"},src:"/images/checkbox-icon.svg",alt:"icon"}):(0,h.jsx)("img",{style:{height:"1.3rem",borderRadius:"0",cursor:"pointer"},src:"/images/box-icon.svg",alt:"icon"}):"",(0,h.jsx)("img",{src:null!==e&&void 0!==e&&e.staffProfilePhoto?"".concat(d.yI,"/").concat(e.staffProfilePhoto):"/images/member_tab/class/default_avatar.svg",alt:"staff profile avatar"}),(0,h.jsxs)("div",{className:u.Z.assign_each_paragraph,children:[(0,h.jsx)("h6",{children:"".concat(e.staffFirstName," ").concat(null!==e&&void 0!==e&&e.staffMiddleName?null===e||void 0===e?void 0:e.staffMiddleName:""," ").concat(e.staffLastName)}),(0,h.jsxs)("p",{children:[" ",I("index")," ",null===e||void 0===e?void 0:e.staffROLLNO]})]})]}),(0,h.jsx)("hr",{})]},e._id)}))})]})})}},81622:function(e,t,n){var i=n(1413),s=n(29439),o=n(72791),a=n(38733),l=n(39230),r=n(93097),c=n(69721),d=n(1095),u=n(80184);t.Z=function(e){var t=e.labelText,n=e.name,_=e.multiple,v=e.value,h=e.onChange,f=(e.onClick,e.errorShow),m=e.acceptType,g=e.customStyleContainer,p=(0,l.$G)().t,x=(0,o.useState)(""),j=(0,s.Z)(x,2),Z=j[0],N=j[1];return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("div",{className:a.Z.join_form_container,style:(0,i.Z)({},g),children:[(0,u.jsxs)("label",{className:a.Z.join_form_label,children:[t,f&&(0,u.jsx)("span",{style:{color:"red",marginLeft:"15px"},children:"* required"})]}),(0,u.jsxs)("div",{className:a.Z.join_form_file_container,children:[(0,u.jsx)("label",{className:v?"".concat(a.Z.join_form_file_choose," ").concat(a.Z.join_form_active_background):a.Z.join_form_file_choose,htmlFor:n,children:p(""!==v?"file_chosen":"chose_file")}),(0,u.jsx)("label",{className:a.Z.join_form_file_choosen,onClick:function(){if(null!==v&&void 0!==v&&v.originalName)if(null!==v&&void 0!==v&&v.isPdf){var e=null;(e=null!==v&&void 0!==v&&v.isCdn?window.open("".concat(d.q2,"/").concat(null===v||void 0===v?void 0:v.key),"_blank","noopener,noreferrer"):window.open("".concat(c.zQ,"/").concat(null===v||void 0===v?void 0:v.key),"_blank","noopener,noreferrer"))&&(e.opener=null)}else N(null===v||void 0===v?void 0:v.key);else N(v)},style:{color:"#002BBE",cursor:"pointer"},children:""!==v?null!==v&&void 0!==v&&v.originalName?null===v||void 0===v?void 0:v.originalName:"View":p("no_file_chosen")})]}),(0,u.jsx)("input",{type:"file",multiple:!!_,accept:m||"image/*, .doc,.docx, application/pdf,.csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel",name:n,id:n,style:{display:"none"},onChange:h})]}),Z&&(0,u.jsx)(r.Z,{onClose:function(){N("")},keyValue:Z})]})}},72952:function(e,t,n){var i=n(1413),s=(n(72791),n(39230)),o=n(38733),a=n(80184);t.Z=function(e){var t,n=e.labelText,l=e.name,r=e.type,c=e.value,d=e.onChange,u=e.placeholder,_=e.errorShow,v=e.customStyleContainer,h=e.disabled,f=(0,s.$G)().t;return(0,a.jsxs)("div",{className:o.Z.join_form_container,style:(0,i.Z)({},v),children:[(0,a.jsxs)("label",{className:o.Z.join_form_label,htmlFor:l,children:[n," ",_&&(0,a.jsxs)("span",{style:{color:"red",marginLeft:"15px"},children:["* ",f("form_require_label")]})]}),(0,a.jsx)("textarea",{className:o.Z.join_form_text_area,type:r,value:c,onChange:d,name:l,placeholder:u,rows:c?(null===c||void 0===c||null===(t=c.split("\n"))||void 0===t?void 0:t.length)+3:1,disabled:h})]})}},93097:function(e,t,n){n(72791);var i=n(12072),s=n(84489),o=n(69721),a=n(80184);t.Z=function(e){var t=e.onClose,n=e.keyValue;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.Z,{onClose:t}),(0,a.jsx)(i.Z,{customStyle:{zIndex:"1200",borderRadius:"0"},children:(0,a.jsx)("img",{src:"".concat(o.yI,"/").concat(n),alt:"view file",style:{maxWidth:"700px",maxHeight:"500px"}})})]})}},60080:function(e,t,n){n.d(t,{Z:function(){return A}});var i=n(93433),s=n(29439),o=n(72791),a=n(39230),l=n(23441),r=n(87338),c=n(763),d=n(11105),u=n(1413),_=n(69721),v=n(15214),h=n(55271),f=n(61756),m=n(16871),g=n(43504),p=n(22492),x=n(80184),j=function(e){var t,n,i,s,o,a,l,r,c,d,j,Z,N,b,S,I,w,y,k,A,C,H,L,E,M,R,F,T,D=e.hostelUnit,O=e.carryParentState,P=e.viewAs,U=e.callApi,q=e.pageOpenAs,B=(0,m.UO)();return(0,x.jsx)(x.Fragment,{children:"STUDENT"===P?(0,x.jsx)(f.Z,{carryParentState:(0,u.Z)((0,u.Z)({},O),{},{huid:null===D||void 0===D?void 0:D._id}),activeTab:"unit&n=menu&n=room",children:(0,x.jsxs)("div",{className:v.Z.hostel_warden_card,children:[(0,x.jsx)("img",{src:null!==D&&void 0!==D&&D.hostel_unit_photo?"".concat(_.yI,"/").concat(null===D||void 0===D?void 0:D.hostel_unit_photo):"/images/member_tab/class/default_avatar.svg",alt:""}),(0,x.jsxs)("div",{className:v.Z.warden_card_text,children:[(0,x.jsx)("h6",{children:null!==(t=null===D||void 0===D?void 0:D.hostel_unit_name)&&void 0!==t?t:""}),(0,x.jsx)("p",{children:"".concat(null!==(n=null===D||void 0===D||null===(i=D.hostel_unit_head)||void 0===i?void 0:i.staffFirstName)&&void 0!==n?n:""," ").concat(null!==(s=null===D||void 0===D||null===(o=D.hostel_unit_head)||void 0===o?void 0:o.staffMiddleName)&&void 0!==s?s:""," ").concat(null!==(a=null===D||void 0===D||null===(l=D.hostel_unit_head)||void 0===l?void 0:l.staffLastName)&&void 0!==a?a:"")})]})]})}):"HOSTEL_SEARCH"===P?(0,x.jsx)(g.rU,{to:"/q/".concat(B.username,"/hostel/profile?a=unit&n=menu&n=room"),state:(0,u.Z)((0,u.Z)({},O),{},{huid:null===D||void 0===D?void 0:D._id}),children:(0,x.jsxs)("div",{className:v.Z.hostel_warden_card,children:[(0,x.jsx)("img",{src:null!==D&&void 0!==D&&D.hostel_unit_photo?"".concat(_.yI,"/").concat(null===D||void 0===D?void 0:D.hostel_unit_photo):"/images/member_tab/class/default_avatar.svg",alt:""}),(0,x.jsxs)("div",{className:v.Z.warden_card_text,children:[(0,x.jsx)("h6",{children:null!==(r=null===D||void 0===D?void 0:D.hostel_unit_name)&&void 0!==r?r:""}),(0,x.jsx)("p",{children:"".concat(null!==(c=null===D||void 0===D||null===(d=D.hostel_unit_head)||void 0===d?void 0:d.staffFirstName)&&void 0!==c?c:""," ").concat(null!==(j=null===D||void 0===D||null===(Z=D.hostel_unit_head)||void 0===Z?void 0:Z.staffMiddleName)&&void 0!==j?j:""," ").concat(null!==(N=null===D||void 0===D||null===(b=D.hostel_unit_head)||void 0===b?void 0:b.staffLastName)&&void 0!==N?N:"")})]})]})}):"INSTITUTE"===q?(0,x.jsx)(p.Z,{carryParentState:(0,u.Z)((0,u.Z)({},O),{},{huid:null===D||void 0===D?void 0:D._id,unitName:null===D||void 0===D?void 0:D.hostel_unit_name}),activeTab:"RENEWAL"===P?"request&renewal&application":"unit&n=info",children:(0,x.jsxs)("div",{className:v.Z.hostel_warden_card,children:[(0,x.jsx)("img",{src:null!==D&&void 0!==D&&D.hostel_unit_photo?"".concat(_.yI,"/").concat(null===D||void 0===D?void 0:D.hostel_unit_photo):"/images/member_tab/class/default_avatar.svg",alt:""}),(0,x.jsxs)("div",{className:v.Z.warden_card_text,children:[(0,x.jsx)("h6",{children:null!==(S=null===D||void 0===D?void 0:D.hostel_unit_name)&&void 0!==S?S:""}),(0,x.jsx)("p",{children:"".concat(null!==(I=null===D||void 0===D||null===(w=D.hostel_unit_head)||void 0===w?void 0:w.staffFirstName)&&void 0!==I?I:""," ").concat(null!==(y=null===D||void 0===D||null===(k=D.hostel_unit_head)||void 0===k?void 0:k.staffMiddleName)&&void 0!==y?y:""," ").concat(null!==(A=null===D||void 0===D||null===(C=D.hostel_unit_head)||void 0===C?void 0:C.staffLastName)&&void 0!==A?A:"")})]})]})}):(0,x.jsx)(h.Z,{carryParentState:(0,u.Z)((0,u.Z)({},O),{},{huid:null===D||void 0===D?void 0:D._id,unitName:null===D||void 0===D?void 0:D.hostel_unit_name}),activeTab:"RENEWAL"===P?"request&renewal&application":"unit&n=info",callApi:U,children:(0,x.jsxs)("div",{className:v.Z.hostel_warden_card,children:[(0,x.jsx)("img",{src:null!==D&&void 0!==D&&D.hostel_unit_photo?"".concat(_.yI,"/").concat(null===D||void 0===D?void 0:D.hostel_unit_photo):"/images/member_tab/class/default_avatar.svg",alt:""}),(0,x.jsxs)("div",{className:v.Z.warden_card_text,children:[(0,x.jsx)("h6",{children:null!==(H=null===D||void 0===D?void 0:D.hostel_unit_name)&&void 0!==H?H:""}),(0,x.jsx)("p",{children:"".concat(null!==(L=null===D||void 0===D||null===(E=D.hostel_unit_head)||void 0===E?void 0:E.staffFirstName)&&void 0!==L?L:""," ").concat(null!==(M=null===D||void 0===D||null===(R=D.hostel_unit_head)||void 0===R?void 0:R.staffMiddleName)&&void 0!==M?M:""," ").concat(null!==(F=null===D||void 0===D||null===(T=D.hostel_unit_head)||void 0===T?void 0:T.staffLastName)&&void 0!==F?F:"")})]})]})})})},Z=n(10406),N=n(98094),b=n(46876),S=n(97655),I=n(98734),w=n(36665),y=n(87457),k=function(e){var t,n,i,l=e.onClose,c=e.openAs,d=e.openUnitMenu,v=e.hid,h=e.onEdit,f=e.instituteId,m=e.onRefetch,g=(0,a.$G)().t,p=(0,o.useState)({hostel_unit_name:"EDIT"===c?null===d||void 0===d?void 0:d.hostel_unit_name:"",sid:"EDIT"===c?null===d||void 0===d?void 0:d.sid:""}),j=(0,s.Z)(p,2),Z=j[0],N=j[1],k=(0,o.useState)(!1),A=(0,s.Z)(k,2),C=A[0],H=A[1],L=(0,o.useState)(""),E=(0,s.Z)(L,2),M=E[0],R=E[1],F=(0,o.useState)(""),T=(0,s.Z)(F,2),D=T[0],O=T[1],P=(0,o.useState)(!1),U=(0,s.Z)(P,2),q=U[0],B=U[1],G=(0,r.fe)(),W=(0,s.Z)(G,1)[0];(0,o.useEffect)((function(){"EDIT"===c&&N({hostel_unit_name:null===d||void 0===d?void 0:d.hostel_unit_name,sid:null===d||void 0===d?void 0:d.sid})}),[c]);return(0,x.jsxs)(w.Z,{onClose:l,children:[(0,x.jsxs)("div",{className:y.Z.add_category_modal,children:[(0,x.jsxs)("div",{className:y.Z.add_category_modal_title,children:[(0,x.jsx)("h6",{children:g("EDIT"===c?"edit_fee_head":"add_new_unit")}),(0,x.jsx)("img",{src:"/images/close-post-icon.svg",onClick:l,alt:""})]}),(0,x.jsx)(S.Z,{labelText:g("hoste_unit_name"),placeholder:g("hoste_unit_name_placeholder"),name:"hostel_unit_name",value:null===Z||void 0===Z?void 0:Z.hostel_unit_name,type:"text",onChange:function(e){return N((function(t){return(0,u.Z)((0,u.Z)({},t),{},{hostel_unit_name:e.target.value})}))},errorShow:D.hostel_unit_name}),(0,x.jsxs)("div",{className:y.Z.leading_person_container,onClick:function(){return H(!0)},children:[(0,x.jsx)("img",{src:null!==M&&void 0!==M&&M.staffProfilePhoto?"".concat(_.yI,"/").concat(M.staffProfilePhoto):"/images/user-icon.svg",alt:"avatar"}),(0,x.jsxs)("div",{className:y.Z.leading_person_text,children:[(0,x.jsx)("h6",{children:M?"".concat(null!==(t=null===M||void 0===M?void 0:M.staffFirstName)&&void 0!==t?t:""," \n                  ").concat(null!==(n=null===M||void 0===M?void 0:M.staffMiddleName)&&void 0!==n?n:"","\n                  ").concat(null!==(i=null===M||void 0===M?void 0:M.staffLastName)&&void 0!==i?i:""," "):g("secect_hostel_unit_head")}),(0,x.jsxs)("p",{children:[g("search_joined_list")," ",D.sid&&(0,x.jsxs)("span",{style:{color:"red",marginLeft:"15px"},children:["* ",g("form_require_label")]})]})]})]}),(0,x.jsx)("button",{className:y.Z.set_fees_structure_btn,title:"Add Hostel Unit",onClick:function(){var e=function(e){var t={};for(var n in e)e[n]||(t[n]="".concat(n," is required!"));return t}(Z),t=!1;for(var n in e)if(n){t=!0;break}t?O(e):"EDIT"===c?h(Z):(B((function(e){return!e})),W({hid:v,addHostel:Z}).then((function(){m(),l(),B((function(e){return!e}))})).catch({}))},style:{justifyContent:"center"},children:g("EDIT"===c?"update":"create")}),q&&(0,x.jsx)(I.Z,{})]}),C&&(0,x.jsx)(b.default,{assignHead:C,headSelect:function(e){R(e),N((function(t){return(0,u.Z)((0,u.Z)({},t),{},{sid:null===e||void 0===e?void 0:e._id})})),H((function(e){return!e}))},title:g("secect_hostel_unit_head"),onClose:function(){return H((function(e){return!e}))},viewAs:"ADMISSION_ADMIN",instituteId:f})]})},A=function(e){var t=e.hid,n=e.instituteId,u=e.carryParentState,_=e.viewAs,v=e.callApi,h=e.pageOpenAs,f=(0,a.$G)().t,m=(0,o.useState)(!1),g=(0,s.Z)(m,2),p=g[0],b=g[1],S=(0,l.YD)(),I=(0,s.Z)(S,2),w=I[0],y=I[1],A=(0,o.useState)(1),C=(0,s.Z)(A,2),H=C[0],L=C[1],E=(0,o.useState)(!0),M=(0,s.Z)(E,2),R=M[0],F=M[1],T=(0,o.useState)(!0),D=(0,s.Z)(T,2),O=D[0],P=D[1],U=(0,o.useState)([]),q=(0,s.Z)(U,2),B=q[0],G=q[1],W=(0,o.useState)(""),$=(0,s.Z)(W,2),z=$[0],J=$[1],Q=(0,o.useState)(!1),V=(0,s.Z)(Q,2),Y=V[0],X=V[1],K=(0,r.RO)({data:{hid:t,page:H,limit:10,search:z},skip:!t}),ee=K.getHostelUnitList,te=K.getHostelUnitListRefetch;(0,o.useEffect)((function(){t&&(P(!0),te())}),[t,H,z,te]),(0,o.useEffect)((function(){y&&R&&L((function(e){return e+1}))}),[y,R]),(0,o.useEffect)((function(){var e,t;Y?(G(null===ee||void 0===ee?void 0:ee.all_units),P(!1),X(!1)):z?(G(null===ee||void 0===ee?void 0:ee.all_units),P(!1)):null!==ee&&void 0!==ee&&ee.all_units?(G((function(e){var t,n;return null===(t=(0,i.Z)(new Set(null===(n=[].concat((0,i.Z)(e),(0,i.Z)(null===ee||void 0===ee?void 0:ee.all_units)))||void 0===n?void 0:n.map(JSON.stringify))))||void 0===t?void 0:t.map(JSON.parse)})),P(!1)):0===(null===ee||void 0===ee||null===(t=ee.all_units)||void 0===t?void 0:t.length)&&P(!1);10===(null===ee||void 0===ee||null===(e=ee.all_units)||void 0===e?void 0:e.length)?F(!0):F(!1)}),[null===ee||void 0===ee?void 0:ee.all_units]);var ne=(0,o.useCallback)((0,c.debounce)((function(e){return J(e)}),500),[]),ie=function(){b((function(e){return!e}))};return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)("div",{className:Z.Z.with_search,children:[(0,x.jsx)("h6",{children:f("hostel_units")}),(0,x.jsx)("section",{className:Z.Z.search_container,children:(0,x.jsxs)("div",{className:Z.Z.search_container_input,children:[(0,x.jsx)("img",{className:Z.Z.searchIcon,alt:"search icon",src:"/images/search-dash-icon.svg"}),(0,x.jsx)("input",{type:"text",placeholder:"Search hostel units...",onChange:function(e){ne(e.target.value)}})]})})]}),(0,x.jsx)(N.Z,{customStyle:{marginTop:"0.5rem",marginBottom:"0.6rem",width:"100%"}}),"STUDENT"===_||"HOSTEL_SEARCH"===_||"RENEWAL"===_?"":(0,x.jsx)("p",{className:Z.Z.add_new_category,onClick:ie,children:f("create_new_unit")}),null===B||void 0===B?void 0:B.map((function(e,t){return(null===B||void 0===B?void 0:B.length)===t+1?(0,x.jsx)("div",{ref:w,children:(0,x.jsx)(j,{hostelUnit:e,carryParentState:u,viewAs:_,callApi:v,pageOpenAs:h})},null===e||void 0===e?void 0:e._id):(0,x.jsx)(j,{hostelUnit:e,carryParentState:u,viewAs:_,callApi:v,pageOpenAs:h},null===e||void 0===e?void 0:e._id)})),O&&(0,x.jsx)(d.Z,{}),p&&(0,x.jsx)(k,{onClose:ie,hid:t,instituteId:n,onRefetch:function(){L(1),X(!0),P(!0),te()}})]})}},12923:function(e,t,n){n.d(t,{Ec:function(){return j},Em:function(){return b},JM:function(){return h},NS:function(){return a},Pg:function(){return f},Q_:function(){return x},RH:function(){return v},Tv:function(){return c},U_:function(){return p},VN:function(){return l},Wj:function(){return u},ZS:function(){return _},_8:function(){return Z},d5:function(){return d},tB:function(){return g},vI:function(){return N},yx:function(){return r},zO:function(){return m}});var i=n(29439),s=n(91007),o=n(58208),a=function(e){var t=(0,o.YD)(e.search,{skip:e.skip});return{instituteAllSearch:t.data,instituteAllSearchRefetch:t.refetch}},l=function(){var e=(0,o.ak)();return[(0,i.Z)(e,1)[0]]},r=function(){var e=(0,o.WL)();return[(0,i.Z)(e,1)[0]]},c=function(e){var t=(0,o.pH)(e.list,{skip:e.skip});return{instituteFollowList:t.data,instituteFollowListRefetch:t.refetch}},d=function(e){var t=(0,o.MG)(e.data,{skip:e.skip});return{instituteOwnFollowingList:t.data,instituteOwnFollowingListRefetch:t.refetch}},u=function(){var e=(0,o.Ky)();return[(0,i.Z)(e,1)[0]]},_=function(e){var t=(0,o.p8)(e.list);return{userFollowList:t.data,userFollowListRefetch:t.refetch}},v=function(e){var t=(0,o.Wv)(e);return{userFollowingList:t.data,userFollowingListRefetch:t.refetch}},h=function(e){var t=(0,o.sz)(e.search,{skip:e.skip});return{userAllSearch:t.data,userAllSearchRefetch:t.refetch}},f=function(){var e=(0,o.Mk)();return[(0,i.Z)(e,1)[0]]},m=function(){var e=(0,o.$i)();return[(0,i.Z)(e,1)[0]]},g=function(){var e=(0,o.Do)();return[(0,i.Z)(e,1)[0]]},p=function(){var e=(0,o.He)();return[(0,i.Z)(e,1)[0]]},x=function(){var e=(0,o.vg)();return[(0,i.Z)(e,1)[0]]},j=function(){var e=(0,o.OO)();return[(0,i.Z)(e,1)[0]]},Z=function(e){var t=(0,o.N2)(e);return{userCircleList:t.data,userCircleListRefetch:t.refetch}},N=function(e){var t=(0,s.x6)(e.search,{skip:e.skip});return{assignSearchStaff:t.data,assignSearchStaffRefetch:t.refetch}},b=function(e){var t=(0,o.SJ)(e);return{universalUser:t.data,universalUserRefetch:t.refetch}}},52124:function(e,t){t.Z={assign_title:"AssignStaffModal_assign_title__4DGBV",assign_search_container:"AssignStaffModal_assign_search_container__3x6RD",assign_search_input:"AssignStaffModal_assign_search_input__rO3c7",assign_show_list:"AssignStaffModal_assign_show_list__yHhf7",assign_show_list_each:"AssignStaffModal_assign_show_list_each__ACUEw",assign_each_paragraph:"AssignStaffModal_assign_each_paragraph__pMHTq",universal_modal:"AssignStaffModal_universal_modal__czmpB",is_mulitselect_container:"AssignStaffModal_is_mulitselect_container__0cPQ2"}},15214:function(e,t){t.Z={navbarr:"InstituteHostel_navbarr__wZjxN",mainbody:"InstituteHostel_mainbody__bd1xS",sidebar:"InstituteHostel_sidebar__4a950",rightbody:"InstituteHostel_rightbody__uUUef",admission_tab_tabs:"InstituteHostel_admission_tab_tabs__Uu9aY",item:"InstituteHostel_item__9ZoQd",itemIcon:"InstituteHostel_itemIcon__NShBD",funds2:"InstituteHostel_funds2__BHTCi",fundscontent:"InstituteHostel_fundscontent__HeoyA",sidebarbottomitem:"InstituteHostel_sidebarbottomitem__+Xvnw",namee:"InstituteHostel_namee__Y5L8H",desig:"InstituteHostel_desig__gHfIt",balanceItem:"InstituteHostel_balanceItem__W2AJ1",fundbtn:"InstituteHostel_fundbtn__h4c6p",institute_hostel_container:"InstituteHostel_institute_hostel_container__QKng2",institute_hostel_container_border:"InstituteHostel_institute_hostel_container_border__XBL5F",institute_hostel_title:"InstituteHostel_institute_hostel_title__U31Id",hostel_warden_card:"InstituteHostel_hostel_warden_card__vs093",warden_card_text:"InstituteHostel_warden_card_text__kFeau",with_search:"InstituteHostel_with_search__shUwR",search_container:"InstituteHostel_search_container__s6aFf",search_container_input:"InstituteHostel_search_container_input__Z7rCU",searchIcon:"InstituteHostel_searchIcon__eabuR",student_cerfificate_container:"InstituteHostel_student_cerfificate_container__HGcvy",student_issued_btn:"InstituteHostel_student_issued_btn__hrgB6"}}}]);
//# sourceMappingURL=71015.4e582c96.chunk.js.map
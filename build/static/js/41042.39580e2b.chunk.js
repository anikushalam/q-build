"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[41042,81221,58936],{87732:(e,t,n)=>{n.r(t),n.d(t,{default:()=>A});var s=n(39230),l=n(72791),a=n(23441),i=n(98684),d=n(56959),c=n(90904),r=n(21348),o=n(77302),u=n(91427),m=n(57588),_=n(2651),v=n(55336),h=n(1669),j=n(9228),x=n(16871),p=n(80184);const f=e=>{var t,n,s,l,a,d;let{master:c,departmentName:r}=e;const o=(0,x.TH)();return(0,p.jsx)("div",{className:j.Z.iadcc_card_hover,children:(0,p.jsxs)("div",{className:j.Z.sf_card_contatiner,children:[(0,p.jsx)("img",{src:"".concat(i.wP,"/cls-icon.svg"),loading:"lazy",alt:"avatar",style:{borderRadius:"0",height:"2rem",width:"2rem"}}),(0,p.jsx)("div",{className:j.Z.sf_card_contatiner_inner,children:(0,p.jsxs)("h6",{children:[null!==(t=null===c||void 0===c?void 0:c.subjectName)&&void 0!==t?t:"",(0,p.jsxs)("span",{style:{fontSize:"12px"},children:[" ","("," ",null!==(n=o.state)&&void 0!==n&&n.departmentName?null===(s=o.state)||void 0===s?void 0:s.departmentName:r,")"]})," -> "," ",null!==(l=null===c||void 0===c?void 0:c.subjectName)&&void 0!==l?l:"",(0,p.jsxs)("span",{style:{fontSize:"12px"},children:[" ","(",null!==(a=null===c||void 0===c||null===(d=c.department)||void 0===d?void 0:d.dName)&&void 0!==a?a:"",")"]})]})})]})})};var b=n(93638),N=n(38857),g=n(16925),Z=n(48801),S=n(74125);const T=e=>{var t,n,a,d,u;let{onClose:m,onRefetch:_,did:h,instituteId:j}=e;const{t:x}=(0,s.$G)(),[f,T]=(0,l.useState)(!1),[A,y]=(0,l.useState)("DEPARTMENT"),[E,I]=(0,l.useState)({subId:"",mapId:"",selectedDepartment:""}),[R]=(0,o.RV)(),D=()=>{"DEPARTMENT"===A?m():y("MASTER"===A?"DEPARTMENT":"MASTER")};return(0,p.jsx)(p.Fragment,{children:"DEPARTMENT"===A?(0,p.jsx)(Z.Z,{onSelectStaff:e=>{I((t=>({...t,selectedDepartment:e}))),y("MASTER")},title:x("select_department"),onClose:D,selectedId:null===(t=E.selectedDepartment)||void 0===t?void 0:t._id,instituteId:j,whichType:"Normal"}):"MASTER"===A?(0,p.jsx)(S.Z,{onSelectStaff:e=>{I((t=>({...t,subId:e}))),y("")},title:x("select_subject"),onClose:D,selectedId:null===(n=E.subId)||void 0===n?void 0:n._id,instituteId:null===(a=E.selectedDepartment)||void 0===a?void 0:a._id}):(0,p.jsx)(N.Z,{onClose:D,children:(0,p.jsxs)("div",{className:g.Z.modal_container,children:[(0,p.jsx)(r.default,{children:(0,p.jsxs)("div",{className:g.Z.modal_container_outer_header,children:[(0,p.jsx)("div",{className:g.Z.modal_container_header,children:(0,p.jsx)("h6",{children:x("map_subject_master")})}),(0,p.jsx)("img",{src:"".concat(i.J7,"/close.svg"),alt:"close icon",onClick:m})]})}),(0,p.jsx)(c.Z,{}),(0,p.jsxs)(r.default,{customStyle:{paddingTop:"0"},children:[(0,p.jsx)("div",{className:g.Z.modal_container_header,children:(0,p.jsxs)("h6",{children:[(0,p.jsx)("span",{style:{fontWeight:"600"},children:null===(d=E.subId)||void 0===d?void 0:d.subjectName})," ","("," ",(0,p.jsx)("span",{style:{fontWeight:"500"},children:null===E||void 0===E||null===(u=E.selectedDepartment)||void 0===u?void 0:u.dName}),")"]})}),(0,p.jsx)(b.Z,{label:"map",onAction:()=>{var e,t;h&&null!==E&&void 0!==E&&null!==(e=E.subId)&&void 0!==e&&e._id&&(T((e=>!e)),R({bodyParameter:{did:h,subId:null,mapId:null===(t=E.subId)||void 0===t?void 0:t._id}}).then((()=>{_(),T((e=>!e)),m()})).catch({}))}})]}),f&&(0,p.jsx)(v.default,{})]})})})},A=e=>{var t,n,j;let{did:x,instituteId:N,openAs:g,departmentName:Z}=e;const{t:S}=(0,s.$G)(),[A,y]=(0,l.useState)(""),[E,I]=(0,l.useState)(1),[R,D]=(0,l.useState)(!0),[C,k]=(0,a.YD)({skip:A}),[M,B]=(0,l.useState)(!1),{academicDepartmentAllSubjectMaster:w,academicDepartmentAllSubjectMasterLoading:P,academicDepartmentAllSubjectMasterRefetch:G}=(0,o.xq)({data:{did:x,page:E,limit:10,search:A},skip:!x});(0,l.useEffect)((()=>{k&&R&&I((e=>e+1))}),[k,R]),(0,l.useEffect)((()=>{var e;if(null!==w&&void 0!==w&&null!==(e=w.list)&&void 0!==e&&e.length){var t;let e=(0,u.f)(null===w||void 0===w||null===(t=w.list)||void 0===t?void 0:t.length);D((()=>e))}}),[null===w||void 0===w?void 0:w.list]);const W=(0,l.useCallback)((0,m.J)((e=>{I((()=>1)),y(e)}),1500),[]),q=e=>{e.target.value?W(e.target.value):(I((()=>1)),y(""))},z=(0,l.useCallback)((()=>{I((()=>1)),y(""),G()}),[G]),H=()=>{B((e=>!e))};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(r.default,{children:"DEPARTMENT_HEAD"===g?(0,p.jsxs)("div",{className:d.Z.fm_header_container,children:[(0,p.jsx)("h6",{children:S("masters")}),(0,p.jsxs)("div",{className:d.Z.fm_search,children:[(0,p.jsx)("section",{className:d.Z.fm_search_container,children:(0,p.jsxs)("div",{className:d.Z.fm_search_container_inner,children:[(0,p.jsx)("img",{className:d.Z.fm_search_icon,alt:"search icon",src:"".concat(i.dB,"/navbar-search.svg")}),(0,p.jsx)("input",{type:"text",placeholder:S("search"),onChange:q})]})}),(0,p.jsx)(b.Z,{label:S("map_master"),customStyle:{margin:"0",padding:"0.4rem 1rem",minWidth:"fit-content"},onAction:H})]})]}):(0,p.jsxs)("div",{className:d.Z.fm_search_full,children:[(0,p.jsx)("section",{className:d.Z.fm_search_full_container,children:(0,p.jsxs)("div",{className:d.Z.fm_search_full_container_inner,children:[(0,p.jsx)("img",{className:d.Z.fm_search_full_icon,alt:"search icon",src:"".concat(i.dB,"/navbar-search.svg")}),(0,p.jsx)("input",{type:"text",placeholder:S("search"),onChange:q})]})}),(0,p.jsx)(b.Z,{label:S("map_master"),customStyle:{margin:"0",padding:"0.4rem 1rem",minWidth:"fit-content"},onAction:H})]})}),(0,p.jsx)(c.Z,{}),(0,p.jsxs)(r.default,{customStyle:{paddingTop:"0.3rem",paddingBottom:"1rem"},children:[null===w||void 0===w||null===(t=w.list)||void 0===t?void 0:t.map(((e,t)=>{var n;return(null===w||void 0===w||null===(n=w.list)||void 0===n?void 0:n.length)===t+1?(0,p.jsx)("div",{ref:C,children:(0,p.jsx)(f,{master:e,departmentName:Z})},null===e||void 0===e?void 0:e._id):(0,p.jsx)(f,{departmentName:Z,master:e},null===e||void 0===e?void 0:e._id)})),P?A?(0,p.jsx)(v.default,{}):(0,p.jsx)(h.Z,{}):A?0===(null===w||void 0===w||null===(n=w.list)||void 0===n?void 0:n.length)&&(0,p.jsx)(_.Z,{title:"No master found related this search."}):0===(null===w||void 0===w||null===(j=w.list)||void 0===j?void 0:j.length)&&(0,p.jsx)(_.Z,{title:"No master."})]}),M&&(0,p.jsx)(T,{onClose:H,instituteId:N,onRefetch:z,did:x})]})}},93638:(e,t,n)=>{n.d(t,{Z:()=>i});var s=n(39230),l=n(80476),a=n(80184);const i=e=>{let{label:t,count:n,onAction:i,customStyle:d,isTranslate:c}=e;const{t:r}=(0,s.$G)();return c?(0,a.jsxs)("div",{className:l.Z.create_btn_container,onClick:i,style:d,children:[n>0?(0,a.jsxs)("span",{children:[n," "]}):null,t]}):(0,a.jsxs)("div",{className:l.Z.create_btn_container,onClick:i,style:d,children:[n>0?(0,a.jsxs)("span",{children:[n," "]}):null,r(t)]})}},80476:(e,t,n)=>{n.d(t,{Z:()=>s});const s={btn_wrapper:"Button_btn_wrapper__ihT7O",btn_container:"Button_btn_container__OaH2t",create_btn_container:"Button_create_btn_container__JuZrx",upload_excel_file:"Button_upload_excel_file__a7d0K",set_btn_container:"Button_set_btn_container__RvfRG",ccb_button:"Button_ccb_button__Mjv4T"}}}]);
//# sourceMappingURL=41042.39580e2b.chunk.js.map
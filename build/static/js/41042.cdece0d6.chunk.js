"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[41042,81221,58936],{87732:(e,t,s)=>{s.r(t),s.d(t,{default:()=>A});var l=s(39230),n=s(72791),a=s(23441),i=s(98684),d=s(56959),c=s(90904),r=s(21348),o=s(77302),u=s(91427),m=s(57588),_=s(2651),h=s(55336),v=s(1669),j=s(9228),x=s(16871),p=s(80184);const f=e=>{var t,s,l,n;let{master:a,departmentName:d}=e;(0,x.TH)();return(0,p.jsx)("div",{className:j.Z.iadcc_card_hover,children:(0,p.jsxs)("div",{className:j.Z.sf_card_contatiner,children:[(0,p.jsx)("img",{src:"".concat(i.wP,"/cls-icon.svg"),loading:"lazy",alt:"avatar",style:{borderRadius:"0",height:"2rem",width:"2rem"}}),(0,p.jsx)("div",{className:j.Z.sf_card_contatiner_inner,children:(0,p.jsxs)("h6",{children:[null!==(t=null===a||void 0===a?void 0:a.subjectName)&&void 0!==t?t:""," -> "," ",null!==(s=null===a||void 0===a?void 0:a.subjectName)&&void 0!==s?s:"",(0,p.jsxs)("span",{style:{fontSize:"12px"},children:[" ","(",null!==(l=null===a||void 0===a||null===(n=a.department)||void 0===n?void 0:n.dName)&&void 0!==l?l:"",")"]})]})})]})})};var b=s(93638),N=s(38857),g=s(16925),Z=s(48801),S=s(74125);const T=e=>{var t,s,a,d,u;let{onClose:m,onRefetch:_,did:v,instituteId:j}=e;const{t:x}=(0,l.$G)(),[f,T]=(0,n.useState)(!1),[A,E]=(0,n.useState)("DEPARTMENT"),[y,I]=(0,n.useState)({subId:"",mapId:"",selectedDepartment:""}),[R]=(0,o.RV)(),D=()=>{"DEPARTMENT"===A?m():E("MASTER"===A?"DEPARTMENT":"MASTER")};return(0,p.jsx)(p.Fragment,{children:"DEPARTMENT"===A?(0,p.jsx)(Z.Z,{onSelectStaff:e=>{I((t=>({...t,selectedDepartment:e}))),E("MASTER")},title:x("select_department"),onClose:D,selectedId:null===(t=y.selectedDepartment)||void 0===t?void 0:t._id,instituteId:j,whichType:"Normal"}):"MASTER"===A?(0,p.jsx)(S.Z,{onSelectStaff:e=>{I((t=>({...t,subId:e}))),E("")},title:x("select_subject"),onClose:D,selectedId:null===(s=y.subId)||void 0===s?void 0:s._id,instituteId:null===(a=y.selectedDepartment)||void 0===a?void 0:a._id}):(0,p.jsx)(N.Z,{onClose:D,children:(0,p.jsxs)("div",{className:g.Z.modal_container,children:[(0,p.jsx)(r.default,{children:(0,p.jsxs)("div",{className:g.Z.modal_container_outer_header,children:[(0,p.jsx)("div",{className:g.Z.modal_container_header,children:(0,p.jsx)("h6",{children:x("map_subject_master")})}),(0,p.jsx)("img",{src:"".concat(i.J7,"/close.svg"),alt:"close icon",onClick:m})]})}),(0,p.jsx)(c.Z,{}),(0,p.jsxs)(r.default,{customStyle:{paddingTop:"0"},children:[(0,p.jsx)("div",{className:g.Z.modal_container_header,children:(0,p.jsxs)("h6",{children:[(0,p.jsx)("span",{style:{fontWeight:"600"},children:null===(d=y.subId)||void 0===d?void 0:d.subjectName})," ","("," ",(0,p.jsx)("span",{style:{fontWeight:"500"},children:null===y||void 0===y||null===(u=y.selectedDepartment)||void 0===u?void 0:u.dName}),")"]})}),(0,p.jsx)(b.Z,{label:"map",onAction:()=>{var e,t;v&&null!==y&&void 0!==y&&null!==(e=y.subId)&&void 0!==e&&e._id&&(T((e=>!e)),R({bodyParameter:{did:v,subId:null,mapId:null===(t=y.subId)||void 0===t?void 0:t._id}}).then((()=>{_(),T((e=>!e)),m()})).catch({}))}})]}),f&&(0,p.jsx)(h.default,{})]})})})},A=e=>{var t,s,j;let{did:x,instituteId:N,openAs:g,departmentName:Z}=e;const{t:S}=(0,l.$G)(),[A,E]=(0,n.useState)(""),[y,I]=(0,n.useState)(1),[R,D]=(0,n.useState)(!0),[C,k]=(0,a.YD)({skip:A}),[M,B]=(0,n.useState)(!1),{academicDepartmentAllSubjectMaster:w,academicDepartmentAllSubjectMasterLoading:P,academicDepartmentAllSubjectMasterRefetch:G}=(0,o.xq)({data:{did:x,page:y,limit:10,search:A},skip:!x});(0,n.useEffect)((()=>{k&&R&&I((e=>e+1))}),[k,R]),(0,n.useEffect)((()=>{var e;if(null!==w&&void 0!==w&&null!==(e=w.list)&&void 0!==e&&e.length){var t;let e=(0,u.f)(null===w||void 0===w||null===(t=w.list)||void 0===t?void 0:t.length);D((()=>e))}}),[null===w||void 0===w?void 0:w.list]);const W=(0,n.useCallback)((0,m.J)((e=>{I((()=>1)),E(e)}),1500),[]),q=e=>{e.target.value?W(e.target.value):(I((()=>1)),E(""))},H=(0,n.useCallback)((()=>{I((()=>1)),E(""),G()}),[G]),J=()=>{B((e=>!e))};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(r.default,{children:"DEPARTMENT_HEAD"===g?(0,p.jsxs)("div",{className:d.Z.fm_header_container,children:[(0,p.jsx)("h6",{children:S("masters")}),(0,p.jsxs)("div",{className:d.Z.fm_search,children:[(0,p.jsx)("section",{className:d.Z.fm_search_container,children:(0,p.jsxs)("div",{className:d.Z.fm_search_container_inner,children:[(0,p.jsx)("img",{className:d.Z.fm_search_icon,alt:"search icon",src:"".concat(i.dB,"/navbar-search.svg")}),(0,p.jsx)("input",{type:"text",placeholder:S("search"),onChange:q})]})}),(0,p.jsx)(b.Z,{label:S("map_master"),customStyle:{margin:"0",padding:"0.4rem 1rem",minWidth:"fit-content"},onAction:J})]})]}):(0,p.jsxs)("div",{className:d.Z.fm_search_full,children:[(0,p.jsx)("section",{className:d.Z.fm_search_full_container,children:(0,p.jsxs)("div",{className:d.Z.fm_search_full_container_inner,children:[(0,p.jsx)("img",{className:d.Z.fm_search_full_icon,alt:"search icon",src:"".concat(i.dB,"/navbar-search.svg")}),(0,p.jsx)("input",{type:"text",placeholder:S("search"),onChange:q})]})}),(0,p.jsx)(b.Z,{label:S("map_master"),customStyle:{margin:"0",padding:"0.4rem 1rem",minWidth:"fit-content"},onAction:J})]})}),(0,p.jsx)(c.Z,{}),(0,p.jsxs)(r.default,{customStyle:{paddingTop:"0.3rem",paddingBottom:"1rem"},children:[null===w||void 0===w||null===(t=w.list)||void 0===t?void 0:t.map(((e,t)=>{var s;return(null===w||void 0===w||null===(s=w.list)||void 0===s?void 0:s.length)===t+1?(0,p.jsx)("div",{ref:C,children:(0,p.jsx)(f,{master:e,departmentName:Z})},null===e||void 0===e?void 0:e._id):(0,p.jsx)(f,{departmentName:Z,master:e},null===e||void 0===e?void 0:e._id)})),P?A?(0,p.jsx)(h.default,{}):(0,p.jsx)(v.Z,{}):A?0===(null===w||void 0===w||null===(s=w.list)||void 0===s?void 0:s.length)&&(0,p.jsx)(_.Z,{title:"No master found related this search."}):0===(null===w||void 0===w||null===(j=w.list)||void 0===j?void 0:j.length)&&(0,p.jsx)(_.Z,{title:"No master."})]}),M&&(0,p.jsx)(T,{onClose:J,instituteId:N,onRefetch:H,did:x})]})}},93638:(e,t,s)=>{s.d(t,{Z:()=>i});var l=s(39230),n=s(80476),a=s(80184);const i=e=>{let{label:t,count:s,onAction:i,customStyle:d,isTranslate:c}=e;const{t:r}=(0,l.$G)();return c?(0,a.jsxs)("div",{className:n.Z.create_btn_container,onClick:i,style:d,children:[s>0?(0,a.jsxs)("span",{children:[s," "]}):null,t]}):(0,a.jsxs)("div",{className:n.Z.create_btn_container,onClick:i,style:d,children:[s>0?(0,a.jsxs)("span",{children:[s," "]}):null,r(t)]})}},80476:(e,t,s)=>{s.d(t,{Z:()=>l});const l={btn_wrapper:"Button_btn_wrapper__ihT7O",btn_container:"Button_btn_container__OaH2t",create_btn_container:"Button_create_btn_container__JuZrx",upload_excel_file:"Button_upload_excel_file__a7d0K",set_btn_container:"Button_set_btn_container__RvfRG",ccb_button:"Button_ccb_button__Mjv4T"}}}]);
//# sourceMappingURL=41042.cdece0d6.chunk.js.map
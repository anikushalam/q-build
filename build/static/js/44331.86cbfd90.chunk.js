"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[44331],{11105:(e,t,a)=>{a.d(t,{Z:()=>s});a(72791);var i=a(11575),n=a(80184);const s=e=>{let{status:t}=e;return(0,n.jsx)("div",{className:i.Z.loaderGif,children:(0,n.jsx)("img",{src:"white"===t?"/images/loader/loader-bg-white.gif":"/images/loader/loader.gif",alt:"for load an items"})})}},65361:(e,t,a)=>{a.r(t),a.d(t,{default:()=>D});var i=a(72791),n=a(16871),s=a(39230),l=a(86861),r=a(33992),d=a(11105),c=a(33399),o=a(32217),u=a(80184);const _=e=>{var t,a,n;let{instituteId:_,carryParentState:v,accessRole:m,callApi:h,viewAs:x}=e;const{t:p}=(0,s.$G)(),[g,f]=i.useState(!0),{allDepartment:j,allDepartmentRefetch:y}=(0,r.Zi)({data:{id:_,which_type:"Normal"},skip:!_});return i.useEffect((()=>{_&&y()}),[_]),i.useEffect((()=>{var e,t,a;(null!==j&&void 0!==j&&null!==(e=j.institute)&&void 0!==e&&e.depart||0===(null===j||void 0===j||null===(t=j.institute)||void 0===t||null===(a=t.depart)||void 0===a?void 0:a.length))&&f(!1)}),[null===j||void 0===j||null===(t=j.institute)||void 0===t?void 0:t.depart]),(0,u.jsxs)("div",{className:c.Z.department_container,children:[null===j||void 0===j||null===(a=j.institute)||void 0===a||null===(n=a.depart)||void 0===n?void 0:n.map((e=>{var t,a;return"INSTITUTE"===x?(0,u.jsx)(o.Z,{carryParentState:{...v,did:null===e||void 0===e?void 0:e._id,dName:null===e||void 0===e?void 0:e.dName},activeTab:"?a=fee&n=structure&batch",children:(0,u.jsxs)("div",{className:c.Z.department_card_container,children:[(0,u.jsx)("img",{src:"/images/profileAndCover/department-profile-img.svg",alt:"department avatar",className:c.Z.department_card_image}),(0,u.jsxs)("div",{children:[(0,u.jsx)("h6",{className:c.Z.department_card_name,children:(null===e||void 0===e?void 0:e.dName)||""}),(0,u.jsxs)("p",{className:c.Z.department_card_head,children:[p("total_masters")," ",null!==(t=null===e||void 0===e?void 0:e.classMasterCount)&&void 0!==t?t:0]})]})]})},null===e||void 0===e?void 0:e._id):(0,u.jsx)(l.Z,{carryParentState:{...v,did:null===e||void 0===e?void 0:e._id,dName:null===e||void 0===e?void 0:e.dName},activeTab:"fee&n=structure&batch",accessRole:m,callApi:h,children:(0,u.jsxs)("div",{className:c.Z.department_card_container,children:[(0,u.jsx)("img",{src:"/images/profileAndCover/department-profile-img.svg",alt:"department avatar",className:c.Z.department_card_image}),(0,u.jsxs)("div",{children:[(0,u.jsx)("h6",{className:c.Z.department_card_name,children:(null===e||void 0===e?void 0:e.dName)||""}),(0,u.jsxs)("p",{className:c.Z.department_card_head,children:[p("total_masters")," ",null!==(a=null===e||void 0===e?void 0:e.classMasterCount)&&void 0!==a?a:0]})]})]})},null===e||void 0===e?void 0:e._id)})),g&&(0,u.jsx)(d.Z,{})]})},v=e=>{var t,a;let{instituteId:i,fees_category_count:n,fee_master_array_count:r,carryParentState:d,accessRole:v,callApi:m,viewAs:h}=e;const{t:x}=(0,s.$G)();return(0,u.jsxs)(u.Fragment,{children:["INSTITUTE"===h?(0,u.jsx)(o.Z,{carryParentState:d,activeTab:"?a=fee&n=category",children:(0,u.jsxs)("div",{className:c.Z.fees_category,children:[(0,u.jsx)("div",{className:c.Z.fees_category_icon,children:(0,u.jsx)("img",{src:"/images/fees-category-icon.svg",alt:"categor icon"})}),(0,u.jsxs)("div",{className:c.Z.fees_category_text,children:[(0,u.jsx)("h6",{children:x("fees_master")}),(0,u.jsxs)("p",{children:[x("fees_total")," ",null!==(t=n+r)&&void 0!==t?t:0]})]})]})}):(0,u.jsx)(l.Z,{carryParentState:d,activeTab:"fee&n=category",accessRole:v,callApi:m,children:(0,u.jsxs)("div",{className:c.Z.fees_category,children:[(0,u.jsx)("div",{className:c.Z.fees_category_icon,children:(0,u.jsx)("img",{src:"/images/fees-category-icon.svg",alt:"categor icon"})}),(0,u.jsxs)("div",{className:c.Z.fees_category_text,children:[(0,u.jsx)("h6",{children:x("fees_master")}),(0,u.jsxs)("p",{children:[x("fees_total")," ",null!==(a=n+r)&&void 0!==a?a:0]})]})]})}),(0,u.jsx)(_,{instituteId:i,carryParentState:d,accessRole:v,callApi:m,viewAs:h})]})};var m=a(91104),h=a(98094),x=a(72426),p=a.n(x),g=a(66184);const f=e=>{var t,a;let{departmentId:n,carryParentState:d,accessRole:c,callApi:_,viewAs:v}=e;const{t:m}=(0,s.$G)(),{oneDepartment:h,oneDepartmentRefetch:x}=(0,r._C)({did:n,skip:!n});return(0,i.useEffect)((()=>{n&&x()}),[n,x]),(0,u.jsx)(u.Fragment,{children:null===h||void 0===h||null===(t=h.department)||void 0===t||null===(a=t.batches)||void 0===a?void 0:a.map((e=>"INSTITUTE"===v?(0,u.jsx)(o.Z,{carryParentState:{...d,batchId:null===e||void 0===e?void 0:e._id},activeTab:"?a=fee&n=structure&standard",children:(0,u.jsxs)("div",{className:g.Z.class_container,children:[(0,u.jsx)("img",{className:g.Z.oneRowImage,src:"/images/master-24-grey-icon.svg",alt:"batch icon"}),(0,u.jsxs)("div",{className:g.Z.class_container_text,children:[(0,u.jsx)("h6",{children:null===e||void 0===e?void 0:e.batchName}),(0,u.jsxs)("p",{children:[m("created_on"),p()(e.createdAt).format("DD MMM yyyy")]})]})]})},null===e||void 0===e?void 0:e._id):(0,u.jsx)(l.Z,{carryParentState:{...d,batchId:null===e||void 0===e?void 0:e._id},activeTab:"fee&n=structure&standard",accessRole:c,callApi:_,children:(0,u.jsxs)("div",{className:g.Z.class_container,children:[(0,u.jsx)("img",{className:g.Z.oneRowImage,src:"/images/master-24-grey-icon.svg",alt:"batch icon"}),(0,u.jsxs)("div",{className:g.Z.class_container_text,children:[(0,u.jsx)("h6",{children:null===e||void 0===e?void 0:e.batchName}),(0,u.jsxs)("p",{children:[m("created_on"),p()(e.createdAt).format("DD MMM yyyy")]})]})]})},null===e||void 0===e?void 0:e._id)))})};var j=a(45145);const y=e=>{var t;let{carryParentState:a,accessRole:n,departmentId:s,callApi:r,viewAs:d}=e;const{admissionClassMasterList:c,admissionClassMasterListRefetch:_}=(0,j.Wi)({did:s,skip:!s});return(0,i.useEffect)((()=>{s&&_()}),[s,_]),(0,u.jsx)(u.Fragment,{children:null===c||void 0===c||null===(t=c.classMasters)||void 0===t?void 0:t.map((e=>"INSTITUTE"===d?(0,u.jsx)(o.Z,{carryParentState:{...a,clsId:null===e||void 0===e?void 0:e._id},activeTab:"?a=fee&n=structure",children:(0,u.jsxs)("div",{className:g.Z.class_container,children:[(0,u.jsx)("img",{className:g.Z.oneRowImage,src:"/images/master-24-grey-icon.svg",alt:"batch icon"}),(0,u.jsx)("div",{className:g.Z.class_container_text,children:(0,u.jsx)("h6",{children:null===e||void 0===e?void 0:e.className})})]})},null===e||void 0===e?void 0:e._id):(0,u.jsx)(l.Z,{carryParentState:{...a,clsId:null===e||void 0===e?void 0:e._id},activeTab:"fee&n=structure",accessRole:n,callApi:r,children:(0,u.jsxs)("div",{className:g.Z.class_container,children:[(0,u.jsx)("img",{className:g.Z.oneRowImage,src:"/images/master-24-grey-icon.svg",alt:"batch icon"}),(0,u.jsx)("div",{className:g.Z.class_container_text,children:(0,u.jsx)("h6",{children:null===e||void 0===e?void 0:e.className})})]})},null===e||void 0===e?void 0:e._id)))})};var b=a(23441),Z=a(84959),N=a(87932),I=a(98734),w=a(33302),E=a(66328);const S=e=>{var t;let{financeId:a,getQuery:n,instituteId:l}=e;const{t:r}=(0,s.$G)(),[o,_]=(0,i.useState)(!1),[v,m]=(0,b.YD)(),[x,p]=(0,i.useState)(1),[g,f]=(0,i.useState)(!0),[j,y]=(0,i.useState)(!1),[S,A]=(0,i.useState)(!0),[D,R]=(0,i.useState)([]),[F,T]=(0,i.useState)(""),[k,C]=(0,i.useState)(!1),[M]=(0,Z.FL)(),[P]=(0,N.PY)(),{getAllFeesStructure:U,getAllFeesStructureRefetch:V}=(0,N.rU)({data:{did:null===n||void 0===n?void 0:n.did,filterBy:null===n||void 0===n?void 0:n.clsId,page:x,limit:10,batch_by:null===n||void 0===n?void 0:n.batchId},skip:!(null!==n&&void 0!==n&&n.did)});(0,i.useEffect)((()=>{null!==n&&void 0!==n&&n.did&&(A(!0),V())}),[null===n||void 0===n?void 0:n.did,x,V]),(0,i.useEffect)((()=>{m&&g&&p((e=>e+1))}),[m,g]),(0,i.useEffect)((()=>{var e,t;j?(R(null===U||void 0===U?void 0:U.all_structures),A(!1),y(!1)):null!==U&&void 0!==U&&U.all_structures?(R((e=>{var t,a;return null===(t=[...new Set(null===(a=[...e,...null===U||void 0===U?void 0:U.all_structures])||void 0===a?void 0:a.map(JSON.stringify))])||void 0===t?void 0:t.map(JSON.parse)})),A(!1)):0===(null===U||void 0===U||null===(t=U.all_structures)||void 0===t?void 0:t.length)&&A(!1);10===(null===U||void 0===U||null===(e=U.all_structures)||void 0===e?void 0:e.length)?f(!0):f(!1)}),[null===U||void 0===U?void 0:U.all_structures]);const O=()=>{_((e=>!e))},G=()=>{p(1),y(!0),A(!0),V()};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("div",{className:c.Z.structure_container_title,children:[(0,u.jsx)("h6",{children:null!==(t=null===n||void 0===n?void 0:n.dName)&&void 0!==t?t:""}),(0,u.jsxs)("div",{className:c.Z.upload_excel_container,children:[(0,u.jsx)("label",{className:c.Z.upload_excel_file,htmlFor:"uploadExcel",children:(0,u.jsx)("img",{src:"/images/upload-xslx-icon.svg",alt:"add student icon",title:"Upload excel file"})}),(0,u.jsx)("input",{type:"file",id:"uploadExcel",accept:".xlsx",onChange:e=>{C((e=>!e));const t=new FormData;t.append("file",e.target.files[0]),M({fileUpload:t}).then((e=>{var t,i;null!==(t=e.data)&&void 0!==t&&t.imageKey?P({fid:a,did:null===n||void 0===n?void 0:n.did,excelFile:{excel_file:null===(i=e.data)||void 0===i?void 0:i.imageKey}}).then((()=>{C((e=>!e))})).catch({}):C((e=>!e))})).catch({})},style:{display:"none"}}),(0,u.jsx)("p",{className:c.Z.add_new_category,onClick:O,children:r("add_new_fees_structure")})]})]}),(0,u.jsx)(h.Z,{customStyle:{marginBottom:"1rem"}}),null===D||void 0===D?void 0:D.map(((e,t)=>{var a,i,n,s,l,d,o,_,m,h;return(null===D||void 0===D?void 0:D.length)===t+1?(0,u.jsxs)("div",{className:c.Z.fees_card,ref:v,onClick:()=>T(null===e||void 0===e?void 0:e._id),style:{cursor:"pointer"},children:[(0,u.jsx)("img",{src:"/images/fees-category-icon.svg",alt:"categor icon"}),(0,u.jsxs)("div",{className:c.Z.fees_card_text,children:[(0,u.jsxs)("div",{className:c.Z.fees_card_text_bottom,children:[(0,u.jsx)("h6",{children:null!==(a=null===e||void 0===e||null===(i=e.category_master)||void 0===i?void 0:i.category_name)&&void 0!==a?a:""}),(0,u.jsx)("h6",{children:"(".concat(r("rs"),". ").concat(null!==(n=null===e||void 0===e?void 0:e.applicable_fees)&&void 0!==n?n:0,")")})]}),(0,u.jsxs)("div",{className:c.Z.fees_card_text_bottom,children:[(0,u.jsx)("h6",{children:null!==(s=null===e||void 0===e?void 0:e.structure_name)&&void 0!==s?s:""}),(0,u.jsxs)("h6",{children:[r("rs"),".",null!==(l=null===e||void 0===e?void 0:e.total_admission_fees)&&void 0!==l?l:0]})]})]})]},null===e||void 0===e?void 0:e._id):(0,u.jsxs)("div",{className:c.Z.fees_card,onClick:()=>T(null===e||void 0===e?void 0:e._id),style:{cursor:"pointer"},children:[(0,u.jsx)("img",{src:"/images/fees-category-icon.svg",alt:"categor icon"}),(0,u.jsxs)("div",{className:c.Z.fees_card_text,children:[(0,u.jsxs)("div",{className:c.Z.fees_card_text_bottom,children:[(0,u.jsx)("h6",{children:null!==(d=null===e||void 0===e||null===(o=e.category_master)||void 0===o?void 0:o.category_name)&&void 0!==d?d:""}),(0,u.jsx)("h6",{children:"(".concat(r("rs"),". ").concat(null!==(_=null===e||void 0===e?void 0:e.applicable_fees)&&void 0!==_?_:0,")")})]}),(0,u.jsxs)("div",{className:c.Z.fees_card_text_bottom,children:[(0,u.jsx)("h6",{children:null!==(m=null===e||void 0===e?void 0:e.structure_name)&&void 0!==m?m:""}),(0,u.jsxs)("h6",{children:[r("rs"),".",null!==(h=null===e||void 0===e?void 0:e.total_admission_fees)&&void 0!==h?h:0]})]})]})]},null===e||void 0===e?void 0:e._id)})),k&&(0,u.jsx)(I.Z,{}),S&&(0,u.jsx)(d.Z,{}),o&&(0,u.jsx)(w.Z,{onClose:O,financeId:a,departmentId:null===n||void 0===n?void 0:n.did,onRefetch:G,instituteId:l,flowAs:"Finance_Manager"}),F&&(0,u.jsx)(E.Z,{structureId:F,setStructureId:T,onRefetch:G,departmentId:null===n||void 0===n?void 0:n.did,instituteId:l,financeId:a,flowAs:"Finance_Manager"})]})},A=e=>{var t,a,l,r,d,o,_,v,m,x;let{financeId:p,instituteId:g,accessRole:j,callApi:b,viewAs:E}=e;const A=(0,n.TH)(),{t:D}=(0,s.$G)(),[R,F]=(0,i.useState)(!1),[T,k]=(0,i.useState)(!1),[C]=(0,Z.FL)(),[M]=(0,N.PY)(),P=()=>{F((e=>!e))};return(0,u.jsxs)(u.Fragment,{children:["structure"===(null===A||void 0===A||null===(t=A.search)||void 0===t?void 0:t.substring(9))?(0,u.jsx)(S,{financeId:p,instituteId:g,getQuery:A.state}):(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("div",{className:c.Z.structure_container_title,children:[(0,u.jsx)("h6",{children:null!==(a=null===(l=A.state)||void 0===l?void 0:l.dName)&&void 0!==a?a:""}),(0,u.jsxs)("div",{className:c.Z.upload_excel_container,children:[(0,u.jsx)("label",{className:c.Z.upload_excel_file,htmlFor:"uploadExcel",children:(0,u.jsx)("img",{src:"/images/upload-xslx-icon.svg",alt:"add student icon",title:"Upload excel file"})}),(0,u.jsx)("input",{type:"file",id:"uploadExcel",accept:".xlsx",onChange:e=>{var t;if(null!==(t=e.target.files)&&void 0!==t&&t.length){k((e=>!e));const t=new FormData;t.append("file",e.target.files[0]),C({fileUpload:t}).then((e=>{var t,a,i;null!==(t=e.data)&&void 0!==t&&t.imageKey?M({fid:p,did:null===(a=A.state)||void 0===a?void 0:a.did,excelFile:{excel_file:null===(i=e.data)||void 0===i?void 0:i.imageKey}}).then((()=>{k((e=>!e))})).catch({}):k((e=>!e))})).catch({})}},style:{display:"none"}}),(0,u.jsx)("p",{className:c.Z.add_new_category,onClick:P,children:D("add_new_fees_structure")})]})]}),(0,u.jsx)(h.Z,{customStyle:{marginBottom:"1rem"}})]}),"structure&batch"===(null===A||void 0===A||null===(r=A.search)||void 0===r?void 0:r.substring(9))&&(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(f,{departmentId:null!==(d=null===A||void 0===A||null===(o=A.state)||void 0===o?void 0:o.did)&&void 0!==d?d:"",carryParentState:null===A||void 0===A?void 0:A.state,accessRole:j,callApi:b,viewAs:E})}),"structure&standard"===(null===A||void 0===A||null===(_=A.search)||void 0===_?void 0:_.substring(9))&&(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(y,{departmentId:null!==(v=null===A||void 0===A||null===(m=A.state)||void 0===m?void 0:m.did)&&void 0!==v?v:"",carryParentState:null===A||void 0===A?void 0:A.state,accessRole:j,callApi:b,viewAs:E})}),T&&(0,u.jsx)(I.Z,{}),R&&(0,u.jsx)(w.Z,{onClose:P,financeId:p,departmentId:null===(x=A.state)||void 0===x?void 0:x.did,onRefetch:()=>{},instituteId:g,flowAs:"Finance_Manager"})]})},D=e=>{var t,a,i;let{financeId:s,instituteId:l,fees_category_count:r,fee_master_array_count:d,carryParentState:o,accessRole:_,callApi:h,viewAs:x}=e;const p=(0,n.TH)();return(0,u.jsxs)("div",{className:c.Z.fess_container,children:["fee"===(null===p||void 0===p||null===(t=p.search)||void 0===t?void 0:t.substring(3))&&(0,u.jsx)(v,{instituteId:l,fees_category_count:r,carryParentState:o,fee_master_array_count:d,accessRole:_,callApi:h,viewAs:x}),"category"===(null===p||void 0===p||null===(a=p.search)||void 0===a?void 0:a.substring(9))&&(0,u.jsx)(m.Z,{financeId:s}),"structure"===(null===p||void 0===p||null===(i=p.search)||void 0===i?void 0:i.substring(9,18))&&(0,u.jsx)(A,{financeId:s,instituteId:l,accessRole:_,callApi:h,viewAs:x})]})}},66184:(e,t,a)=>{a.d(t,{Z:()=>i});const i={departmenthead:"ExamDepartment_departmenthead__Xh3As",demaprtment_list:"ExamDepartment_demaprtment_list__z2iRe",department_card_container:"ExamDepartment_department_card_container__qFMrc",department_card_image:"ExamDepartment_department_card_image__J6fqp",department_card_name:"ExamDepartment_department_card_name__jM+Nw",department_card_head:"ExamDepartment_department_card_head__Wqo+A",moderator_container_title:"ExamDepartment_moderator_container_title__7-Q25",with_search:"ExamDepartment_with_search__8IQE0",search_container_input:"ExamDepartment_search_container_input__Ts-kU",searchIcon:"ExamDepartment_searchIcon__0UsSf",class_container:"ExamDepartment_class_container__2Jbtn",class_container_text:"ExamDepartment_class_container_text__ZEb2P",oneRowImage:"ExamDepartment_oneRowImage__7+rr7",total_student_count:"ExamDepartment_total_student_count__oIOYD",total_other_count_container:"ExamDepartment_total_other_count_container__+KDGx",student_container:"ExamDepartment_student_container__exLvA",student_info_container:"ExamDepartment_student_info_container__TFXJh",student_info_text:"ExamDepartment_student_info_text__7OoR3",select_application_btn:"ExamDepartment_select_application_btn__XB+dU",promote_container:"ExamDepartment_promote_container__9Fm-W",promote_student_card:"ExamDepartment_promote_student_card__bkCGj",promote_student_cardActive:"ExamDepartment_promote_student_cardActive__cDYXf",promote_student_card_text:"ExamDepartment_promote_student_card_text__0K8wJ",promote_student_name:"ExamDepartment_promote_student_name__DDcYD",select_header:"ExamDepartment_select_header__wzRBE",select_all_btn:"ExamDepartment_select_all_btn__rEfea"}},23441:(e,t,a)=>{a.d(t,{YD:()=>_});var i=a(72791),n=Object.defineProperty,s=(e,t,a)=>(((e,t,a)=>{t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a})(e,"symbol"!==typeof t?t+"":t,a),a),l=new Map,r=new WeakMap,d=0,c=void 0;function o(e){return Object.keys(e).sort().filter((t=>void 0!==e[t])).map((t=>{return"".concat(t,"_").concat("root"===t?(a=e.root)?(r.has(a)||(d+=1,r.set(a,d.toString())),r.get(a)):"0":e[t]);var a})).toString()}function u(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:c;if("undefined"===typeof window.IntersectionObserver&&void 0!==i){const n=e.getBoundingClientRect();return t(i,{isIntersecting:i,target:e,intersectionRatio:"number"===typeof a.threshold?a.threshold:0,time:0,boundingClientRect:n,intersectionRect:n,rootBounds:n}),()=>{}}const{id:n,observer:s,elements:r}=function(e){let t=o(e),a=l.get(t);if(!a){const i=new Map;let n;const s=new IntersectionObserver((t=>{t.forEach((t=>{var a;const s=t.isIntersecting&&n.some((e=>t.intersectionRatio>=e));e.trackVisibility&&"undefined"===typeof t.isVisible&&(t.isVisible=s),null==(a=i.get(t.target))||a.forEach((e=>{e(s,t)}))}))}),e);n=s.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),a={id:t,observer:s,elements:i},l.set(t,a)}return a}(a);let d=r.get(e)||[];return r.has(e)||r.set(e,d),d.push(t),s.observe(e),function(){d.splice(d.indexOf(t),1),0===d.length&&(r.delete(e),s.unobserve(e)),0===r.size&&(s.disconnect(),l.delete(n))}}i.Component;function _(){let{threshold:e,delay:t,trackVisibility:a,rootMargin:n,root:s,triggerOnce:l,skip:r,initialInView:d,fallbackInView:c,onChange:o}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var _;const[v,m]=i.useState(null),h=i.useRef(),[x,p]=i.useState({inView:!!d,entry:void 0});h.current=o,i.useEffect((()=>{if(r||!v)return;let i;return i=u(v,((e,t)=>{p({inView:e,entry:t}),h.current&&h.current(e,t),t.isIntersecting&&l&&i&&(i(),i=void 0)}),{root:s,rootMargin:n,threshold:e,trackVisibility:a,delay:t},c),()=>{i&&i()}}),[Array.isArray(e)?e.toString():e,v,s,n,l,r,a,c,t]);const g=null==(_=x.entry)?void 0:_.target,f=i.useRef();v||!g||l||r||f.current===g||(f.current=g,p({inView:!!d,entry:void 0}));const j=[m,x.inView,x.entry];return j.ref=j[0],j.inView=j[1],j.entry=j[2],j}}}]);
//# sourceMappingURL=44331.86cbfd90.chunk.js.map
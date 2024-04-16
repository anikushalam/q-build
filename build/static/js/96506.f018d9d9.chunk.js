"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[96506],{96506:(e,t,a)=>{a.r(t),a.d(t,{default:()=>_});var c=a(72791);a(7135);const i={DModal:"CreateBatch_DModal__2iMTy",title:"CreateBatch_title__LulDN",input:"CreateBatch_input__RdV9d",mid:"CreateBatch_mid__yU8C5",text:"CreateBatch_text__euMit",btn:"CreateBatch_btn__eYOMg",notFound:"CreateBatch_notFound__OncWH",item:"CreateBatch_item__wsJYa",select:"CreateBatch_select__Q0Pd6",tooltip:"CreateBatch_tooltip__96AjT",tooltip2:"CreateBatch_tooltip2__zIHQM",profileToolTip:"CreateBatch_profileToolTip__LWyun",triangle:"CreateBatch_triangle__L5VAj",triangleDisplay:"CreateBatch_triangleDisplay__cJ+Vf",profilelist:"CreateBatch_profilelist__b+Ejh",subject_tile_container:"CreateBatch_subject_tile_container__Ne1cL",subject_tile:"CreateBatch_subject_tile__8SHbA",subject_tile_active:"CreateBatch_subject_tile_active__3H4Uz"};var l=a(5574),s=a(39230),n=a(33992),h=a(49384),d=a(57431),r=a(80184);function o(e){let{options:t,switchOption:a}=e;return(0,r.jsxs)("div",{className:i.profileToolTip,children:[(0,r.jsx)("div",{className:i.triangle}),(0,r.jsx)("div",{className:i.profilelist,children:null===t||void 0===t?void 0:t.map(((e,t)=>(0,r.jsx)("div",{value:e,onClick:()=>a(e),children:e.batchName},t)))})]})}const _=function(e){let{departmentModal:t,hideModal:a,id:_,did:u,data:p,edit:j,setEdit:b,editBatch:v,onDepartmentRefetch:m,is_promote:x}=e;const{t:C}=(0,s.$G)(),[N,B]=(0,c.useState)(C("batch-type-2")),f=(0,c.useRef)(""),[g,y]=(0,c.useState)(""),[k,w]=(0,c.useState)({batch:!1,pastBatch:!1}),[S,M]=(C("batch-type-1"),C("batch-type-2"),(0,c.useState)(!0)),[T,L]=(0,c.useState)("2020-21"),[D,Y]=(0,c.useState)(""),[E,F]=(0,c.useState)("No"),[H,O]=(0,c.useState)(!1),[R,V]=(0,c.useState)(!0),[Z,q]=(0,c.useState)(p);(0,c.useEffect)((()=>{p&&q(p)}),[p]),(0,c.useEffect)((()=>{j&&y(null===v||void 0===v?void 0:v.batchName)}),[j]);const A=e=>{B(e),M("Completely New Batch"!==e)},[P]=(0,n.Q6)(),[Q]=(0,n.sR)(),[U]=(0,n.tf)(),[z]=(0,n.i5)();return(0,r.jsx)(l.Z,{open:t,children:(0,r.jsxs)("div",{className:i.DModal,children:[(0,r.jsxs)("div",{className:i.title,children:[j?(0,r.jsxs)("h5",{children:[" ",C("edit_batch")," "]}):(0,r.jsx)("h5",{children:C("create-n-batch-place")}),(0,r.jsx)("img",{src:"/images/close-post-icon.svg",onClick:()=>{a(!1),f.current.value="",b(!1)},alt:""})]}),(0,r.jsx)("div",{hidden:R,className:i.notFound,children:C(j?"fill_details_to_edit_batch":"fill_details_to_create_batch")}),!j&&(0,r.jsxs)("div",{className:i.item,children:[(0,r.jsx)("h6",{children:C("batch-type-place")}),(0,r.jsxs)("section",{className:i.subject_tile_container,children:[(0,r.jsx)("div",{className:"Preformed Structured Batch"===N?i.subject_tile_active:i.subject_tile,onClick:()=>A("Preformed Structured Batch"),children:C("batch-type-2")}),(0,r.jsx)("div",{className:"Completely New Batch"===N?i.subject_tile_active:i.subject_tile,onClick:()=>A("Completely New Batch"),children:C("batch-type-1")})]})]}),S&&!j&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:i.item,onClick:()=>w({...k,pastBatch:!k.pastBatch}),children:[(0,r.jsx)("h6",{children:C("select-past-batch-place")}),(0,r.jsxs)("div",{className:i.select,children:[(0,r.jsx)("p",{children:T}),(0,r.jsx)("img",{src:"/images/select-icon.svg",alt:"select icon"})]}),k.pastBatch&&(0,r.jsx)("div",{className:i.tooltip2,children:(0,r.jsx)(o,{options:Z,switchOption:e=>{L(e.batchName),Y(e._id)}})})]}),(0,r.jsxs)("div",{className:i.item,children:[(0,r.jsx)("h6",{children:C("without_designation")}),(0,r.jsxs)("section",{className:i.subject_tile_container,children:[(0,r.jsx)("div",{className:"Yes"===E?i.subject_tile_active:i.subject_tile,onClick:()=>F("Yes"),children:"Yes"}),(0,r.jsx)("div",{className:"No"===E?i.subject_tile_active:i.subject_tile,onClick:()=>F("No"),children:"No"})]})]})]}),(0,r.jsxs)("div",{className:i.input,children:[(0,r.jsx)("h6",{children:C("batch-name-place")}),(0,r.jsx)("input",{type:"text",placeholder:"e.g. 2022-23",required:!0,ref:f,maxLength:30,onChange:e=>{var t;(null===(t=e.target.value)||void 0===t?void 0:t.length)<=30&&(y(e.target.value),V(!0))},defaultValue:g}),(0,r.jsx)(d.Z,{maxLength:30,valueLength:g})]}),(0,r.jsxs)("button",{className:i.btn,onClick:()=>{f.current.value?(O(!0),j?Q({batch:{batchName:f.current.value},bid:x||(null===v||void 0===v?void 0:v.bid)}).then((()=>{a(!1),O(!1),b(!1),f.current.value="",m()})).catch({}):"Completely New Batch"===N?P({batch:{batchName:f.current.value},id:_,did:u}).then((e=>{var t;null!==e&&void 0!==e&&null!==(t=e.data)&&void 0!==t&&t.batch&&(a(!1),O(!1),f.current.value="",m())})).catch({}):U({batch:{batchName:f.current.value,with_designation:E},bid:D}).then((e=>{e&&z({did:u,bid:e.data.batchId,batch:""}).then((()=>{m(),a(!1),O(!1),f.current.value=""})).catch({})})).catch({})):V(!1)},disabled:H,children:[j?(0,r.jsx)("p",{children:"Update"}):(0,r.jsx)("p",{children:C("create")}),H&&(0,r.jsx)("div",{children:(0,r.jsx)(h.Z,{})})]})]})})}},49384:(e,t,a)=>{a.d(t,{Z:()=>l});a(72791);var c=a(6307),i=a(80184);const l=()=>(0,i.jsx)(c.iT,{ariaLabel:"loading-indicator",height:20,width:20,color:"white",secondaryColor:"#1c023b"})},7135:()=>{}}]);
//# sourceMappingURL=96506.f018d9d9.chunk.js.map
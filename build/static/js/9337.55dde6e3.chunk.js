"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[9337],{69337:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var a=n(29439),i=n(72791),s=n(95561),o=n(35395),d={oneRow:"OneRowBatch_oneRow__9rTDO",oneRowLeft:"OneRowBatch_oneRowLeft__oBjrI",oneRowText:"OneRowBatch_oneRowText__lCuqK",oneRowRight:"OneRowBatch_oneRowRight__QkDtN",borderBottom1:"OneRowBatch_borderBottom1__IfsIX",date:"OneRowBatch_date__6A+6U",dateText:"OneRowBatch_dateText__9+S8X",activeBatch:"OneRowBatch_activeBatch__3bZJ0"},c=n(39230),r=n(80184),l=i.lazy((function(){return n.e(7513).then(n.bind(n,47513))})),h=function(e){var t=e.image,n=e.name,s=e.date,h=e.bid,u=e.selectedBatch,m=e.editOneBatch,_=e.designation_send,v=e.batch_type,x=(0,i.useState)(!1),R=(0,a.Z)(x,2),f=R[0],g=R[1],p=(0,c.$G)().t;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:(null===u||void 0===u?void 0:u._id)===h?"".concat(d.oneRow," ").concat(d.activeBatch):d.oneRow,children:[(0,r.jsxs)("div",{className:d.oneRowLeft,children:[(0,r.jsx)("img",{className:d.oneRowImage,src:t,alt:""}),(0,r.jsxs)("div",{className:d.date,children:[(0,r.jsx)("p",{className:d.oneRowText,children:n}),(0,r.jsxs)("p",{className:d.dateText,children:[p("created_on_")," ",s]})]})]}),(0,r.jsx)("div",{className:d.oneRowRight,children:(0,r.jsx)("img",{src:"/images/three-24-dot-icon.svg",alt:"",onClick:function(){return g(!f)}})}),(0,r.jsx)(o.Z,{children:f&&(0,r.jsx)("div",{className:d.tooltip,children:(0,r.jsx)(l,{bid:h,setClick:g,batchName:n,editOneBatch:m,batch_type:v,designation_send:_})})})]}),(0,r.jsx)("p",{className:d.borderBottom1})]})},u=n(96878),m=n(72426),_=n.n(m),v=n(39480),x=n(36721),R=i.lazy((function(){return Promise.all([n.e(6307),n.e(6506)]).then(n.bind(n,96506))})),f=function(e){var t=e.data,n=e.id,d=e.did,l=e.selectedBatch,m=e.onDepartmentRefetch,f=(0,c.$G)().t,g=(0,i.useState)(!1),p=(0,a.Z)(g,2),b=p[0],j=p[1],w=(0,i.useState)(!1),B=(0,a.Z)(w,2),N=B[0],Z=B[1],O=(0,i.useState)({}),k=(0,a.Z)(O,2),D=k[0],y=k[1],C=(0,i.useState)({msg:"",run:!1}),T=(0,a.Z)(C,2),I=T[0],M=T[1],S=(0,v.gq)({id:n,skip:!n}),A=S.oneInstituteDashboard,q=S.oneInstituteDashboardRefetch;(0,i.useEffect)((function(){n&&q()}),[n,q]);var Y=function(e){y(e),Z(!0),j(!0)};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:s.Z.subHeadContainer,children:[(0,r.jsx)("div",{className:s.Z.subHead,children:(0,r.jsx)("p",{className:s.Z.subHeadRight,onClick:function(){var e,t,n,a;null!==A&&void 0!==A&&null!==(e=A.institute)&&void 0!==e&&null!==(t=e.admissionDepart)&&void 0!==t&&t[0]&&null!==A&&void 0!==A&&null!==(n=A.institute)&&void 0!==n&&null!==(a=n.financeDepart)&&void 0!==a&&a[0]?j(!0):M({msg:"Please activate Finance and Admission Department",run:!0})},children:f("add_batch")})}),(0,r.jsx)("p",{className:s.Z.borderBottom})]}),(0,r.jsx)(u.Z,{}),(0,r.jsx)("div",{className:s.Z.main,children:t.map((function(e,t){return(0,r.jsx)(h,{name:(null===e||void 0===e?void 0:e.batchName)||"Batch 2022-23",image:"/images/master-24-grey-icon.svg",date:e.createdAt?" ".concat(_()(e.createdAt).format("DD MMMM YYYY")):"23 April 2022",bid:null===e||void 0===e?void 0:e._id,selectedBatch:l,editOneBatch:Y,designation_send:null===e||void 0===e?void 0:e.designation_send,batch_type:null===e||void 0===e?void 0:e.batch_type},t)}))}),(0,r.jsxs)(o.Z,{children:[b&&(0,r.jsx)(R,{departmentModal:b,hideModal:j,id:n,did:d,data:t,edit:N,setEdit:Z,editBatch:D,onDepartmentRefetch:m}),I.run&&(0,r.jsx)(x.Ch,{msg:I.msg,run:I.run,setRun:function(){return M({msg:"",run:!1})},postiton:"bottom",type:"error"})]})]})}}}]);
//# sourceMappingURL=9337.55dde6e3.chunk.js.map
"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[1876],{81876:function(e,t,n){n.r(t);var i=n(1413),s=n(29439),r=n(72791),u=n(78687),a=n(35395),d=n(6245),l=n(49384),c=n(39230),o=n(94804),h=n(36721),f=n(16871),m=n(80184),v=r.lazy((function(){return n.e(6181).then(n.bind(n,6181))}));t.default=function(e){var t=e.student,n=e.viewAs,g=e.instituteId,p=e.status,b=(0,c.$G)().t,j=(0,u.useSelector)((function(e){return e.idChange.id})),x=(0,r.useState)(!1),Z=(0,s.Z)(x,2),k=Z[0],w=Z[1],S=(0,r.useState)(!1),y=(0,s.Z)(S,2),C=y[0],N=y[1],_=(0,f.s0)(),I=(0,f.UO)(),D=(0,r.useState)({number:"",reason:"",previous:null===t||void 0===t?void 0:t.studentPreviousSchool,study:"",behaviour:"",remarks:"",udise:""}),E=(0,s.Z)(D,2),q=E[0],A=E[1],B=(0,r.useState)({msg:"",run:!1}),R=(0,s.Z)(B,2),G=R[0],O=R[1],z=(0,d.vB)(),F=(0,s.Z)(z,1)[0],H=(0,d.A5)({id:g||j,skip:"DESIGNATION_SIDE"===n?!g:!j}),M=H.getEditable,P=H.getEditableRefetch;(0,r.useEffect)((function(){g&&P()}),[j,g,P]);return(0,m.jsxs)("div",{className:o.Z.complaintDetails,children:[(0,m.jsxs)("div",{className:o.Z.detailsHeader,children:["transfer"===p?(0,m.jsx)("p",{children:b("transfer_certificate")}):(0,m.jsx)("p",{children:b("leaving")}),(0,m.jsx)("img",{src:"/images/menu-dots-dark-icon.svg",alt:"",onClick:function(){return w(!0)}})]}),(0,m.jsxs)("div",{className:o.Z.detailsBody,children:[(0,m.jsx)("div",{className:o.Z.gr,children:(0,m.jsx)("input",{type:"tel",placeholder:b("enter_gr"),onChange:function(e){return A((0,i.Z)((0,i.Z)({},q),{},{number:e.target.value}))},required:!0})}),""!==(null===q||void 0===q?void 0:q.number)&&(0,m.jsxs)("button",{type:"submit",disabled:C,className:o.Z.getBtn,onClick:function(){N((function(e){return!e})),F({id:g||j,gr:q.number,leavingFeedback:q}).then((function(e){N((function(e){return!e})),_("/q/".concat(I.username,"/student/certificate/form"),{state:{student:e.data.student,download:e.data.download,instituteId:g,is_leaving:p}})})).catch((function(){O({msg:"something went wrong",run:!0})}))},children:[(0,m.jsx)("p",{children:b("cer_preview")}),C&&(0,m.jsx)(l.Z,{})]})]}),k&&(0,m.jsx)(a.Z,{children:(0,m.jsx)(v,{hideModal:function(e){return w(e)},addDisplay:k,editableData:null===M||void 0===M?void 0:M.detail,viewAs:n,instituteId:g,onRefetch:P})}),(0,m.jsx)(h.Ch,{msg:G.msg,run:G.run,setRun:function(){return O({msg:"",run:!1})},postiton:"bottom",type:"error"})]})}}}]);
//# sourceMappingURL=1876.e5add88a.chunk.js.map
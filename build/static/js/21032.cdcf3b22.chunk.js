"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[21032],{35395:function(t,e,n){var a=n(72791),i=n(98734),r=n(80184);e.Z=function(t){var e=t.children;return(0,r.jsx)(a.Suspense,{fallback:(0,r.jsx)(i.Z,{}),children:e})}},21032:function(t,e,n){n.r(e),n.d(e,{default:function(){return C}});var a=n(29439),i=n(72791),r=n(39230),s=n(43504),o=n(16871),l=n(97393),d=n(74737),c=n(10406),v=n(20772),u=n(33662),_=n(35395),p=n(69721),m=n(85050),h=n(93738),f=n(21093),x=n(80184),g=i.lazy((function(){return n.e(20059).then(n.bind(n,34018))})),j=function(t){var e,n,s,l,d,c,v,u,j,b,Z=t.transport,I=t.onRefetch,y=(0,r.$G)().t,S=i.useState(!1),N=(0,a.Z)(S,2),T=N[0],A=N[1],R=(0,o.UO)(),L=function(){A((function(t){return!t}))};return(0,x.jsxs)("div",{style:{position:"sticky",top:"77px",height:"fit-content",width:"30%"},children:[(0,x.jsx)(f.Z,{whichType:"PREVIOUS_GO"}),(0,x.jsx)(m.Z,{dynamicImage:null!==Z&&void 0!==Z&&Z.transport_photo?"".concat(p.yI,"/").concat(null===Z||void 0===Z?void 0:Z.transport_photo):"/images/profileAndCover/transport-cover.svg",edit:!0,onEditAction:L,redirectUrl:"/q/".concat(R.username,"/transport?a=site"),isSiteInfo:"TRANSPORT",carryParentState:{tid:null===Z||void 0===Z?void 0:Z._id}}),(0,x.jsx)(h.Z,{cardAsHead:!0,heading:" ".concat(null!==(e=null===Z||void 0===Z||null===(n=Z.transport_manager)||void 0===n?void 0:n.staffFirstName)&&void 0!==e?e:""," ").concat(null!==(s=null===Z||void 0===Z||null===(l=Z.transport_manager)||void 0===l?void 0:l.staffMiddleName)&&void 0!==s?s:""," ").concat(null!==(d=null===Z||void 0===Z||null===(c=Z.transport_manager)||void 0===c?void 0:c.staffLastName)&&void 0!==d?d:""),description:y("transport_manager"),customStyleCard:{borderRadius:"18px 18px 0px 0px",border:"none",marginTop:"-1.49vw"}}),(0,x.jsx)(h.Z,{cardAsHead:!1,heading:y("total_vehicle"),description:y("total_vehicle_label"),count:null!==(v=null===Z||void 0===Z?void 0:Z.vehicle_count)&&void 0!==v?v:0}),(0,x.jsx)(h.Z,{cardAsHead:!1,heading:y("total_transport_staff"),description:y("total_transport_staff_label"),count:null!==(u=null===Z||void 0===Z?void 0:Z.transport_staff_count)&&void 0!==u?u:0}),(0,x.jsx)(h.Z,{cardAsHead:!1,heading:y("total_passenger"),description:y("total_passenger_label"),count:null!==(j=null===Z||void 0===Z?void 0:Z.passenger_count)&&void 0!==j?j:0}),(0,x.jsx)(h.Z,{cardAsHead:!1,heading:y("total_pending_fees"),description:y("total_pending_fees_label"),count:"".concat(y("rs")," ").concat(null!==(b=null===Z||void 0===Z?void 0:Z.remaining_fee)&&void 0!==b?b:0),customStyleCard:{borderRadius:"0 0 12px 12px",borderBottom:"0.4px solid rgba(0, 0, 0, 0.15)"}}),(0,x.jsx)(_.Z,{children:(0,x.jsx)(g,{transportModal:T,hideModal:L,edit:!0,transportManagerName:null===Z||void 0===Z?void 0:Z.transport_manager,onParentRefetch:I})})]})},b=n(98648),Z=n(92187),I=n(64783),y=n(7893),S=function(t){var e=t.carryParentState,n=t.transport,i=(0,r.$G)().t,o=(0,s.lr)(),l=(0,a.Z)(o,1)[0];return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)("div",{className:d.Z.finance_tab_tabs,children:[(0,x.jsx)(I.Z,{tabLevel:i("menu"),customStyleContainer:{width:"33.3%",marginRight:"2px",borderTopLeftRadius:"6px"},customStyleLevel:{borderTopLeftRadius:"6px"},tabValue:"menu",currentValue:null!==l&&void 0!==l&&l.get("a")?"other":"menu",carryParentState:e,activeUrl:"transport"}),(0,x.jsx)(I.Z,{tabLevel:i("fees_structure"),customStyleContainer:{width:"33.3%",marginRight:"2px"},customStyleLevel:{borderTopLeftRadius:"6px"},tabValue:"fee",currentValue:"fee"===(null===l||void 0===l?void 0:l.get("a"))?"fee":"other",carryParentState:e,activeUrl:"transport?a=fee"}),(0,x.jsx)(I.Z,{tabLevel:i("funds"),customStyleContainer:{width:"33.3%",borderTopRightRadius:"6px"},customStyleLevel:{borderTopLeftRadius:"6px"},tabValue:"fund",currentValue:"fund"===(null===l||void 0===l?void 0:l.get("a"))?"fund":"other",carryParentState:e,activeUrl:"transport?a=fund"})]}),null!==l&&void 0!==l&&l.get("a")?"fund"===(null===l||void 0===l?void 0:l.get("a"))?(0,x.jsx)(y.Z,{transport:n,pageOpenAs:"INSTITUTE"}):null:(0,x.jsxs)("div",{className:d.Z.item,children:[(0,x.jsx)(Z.Z,{carryParentState:e,activeTab:"vehicle",children:(0,x.jsxs)("div",{className:d.Z.itemIcon,children:[(0,x.jsx)("img",{src:"/images/member_tab/transport/transport-vehicle-icon.svg",alt:"moderator icon"}),(0,x.jsx)("p",{children:i("transport_vehicles")})]})}),(0,x.jsx)(Z.Z,{carryParentState:e,activeTab:"personal",children:(0,x.jsxs)("div",{className:d.Z.itemIcon,children:[(0,x.jsx)("img",{src:"/images/member_tab/transport/transport-personal-icon.svg",alt:"completed"}),(0,x.jsx)("p",{children:i("transportation_personal")})]})}),(0,x.jsx)(Z.Z,{carryParentState:e,activeTab:"passenger",children:(0,x.jsxs)("div",{className:d.Z.itemIcon,children:[(0,x.jsx)("img",{src:"/images/member_tab/transport/transport-passenger-icon.svg",alt:"inquery"}),(0,x.jsx)("p",{children:i("all_passengers_student")})]})}),(0,x.jsx)(Z.Z,{carryParentState:e,activeTab:"pending",children:(0,x.jsxs)("div",{className:d.Z.itemIcon,children:[(0,x.jsx)("img",{src:"/images/member_tab/finance/finance-pending-icon.svg",alt:"refund"}),(0,x.jsx)("p",{children:i("pending_fees")})]})}),(0,x.jsx)(Z.Z,{carryParentState:e,activeTab:"batch",children:(0,x.jsxs)("div",{className:d.Z.itemIcon,children:[(0,x.jsx)("img",{src:"/images/member_tab/hostel/hostel-batch-icon.svg",alt:"completed"}),(0,x.jsx)("p",{children:i("hostel_tab_batch")})]})}),(0,x.jsx)(Z.Z,{carryParentState:e,activeTab:"export",children:(0,x.jsxs)("div",{className:d.Z.itemIcon,children:[(0,x.jsx)("img",{src:"/images/member_tab/finance/finance-export-icon.svg",alt:"refund"}),(0,x.jsx)("p",{children:i("data_exporting")})]})}),(0,x.jsx)(Z.Z,{carryParentState:e,activeTab:"moderator",children:(0,x.jsxs)("div",{className:d.Z.itemIcon,children:[(0,x.jsx)("img",{src:"/images/member_tab/admission/admission-moderator-icon.svg",alt:"moderator icon"}),(0,x.jsx)("p",{children:i("transport_moderator")})]})})]})]})},N=n(64393),T=n(95048),A=n(41312),R=n(27451),L=n(99433),P=n(94713),V=n(36600),M=n(90575),U=n(93181),C=function(){(0,r.$G)().t;var t,e,n,_,p,m,h,f,g,Z,I,y,C,D,O,k,w,E,q,F,H,G,B,J,$,z,K,W,X,Q,Y,tt,et,nt,at,it,rt,st=(0,s.lr)(),ot=(0,a.Z)(st,1)[0],lt=(0,o.TH)(),dt=(0,T.v9)((function(t){return t.idChange.id})),ct=(0,u.sJ)({tid:null===(t=lt.state)||void 0===t?void 0:t.tid,skip:!(null!==(e=lt.state)&&void 0!==e&&e.tid)}),vt=ct.transportDetail,ut=ct.transportDetailRefetch;return(0,i.useEffect)((function(){var t;null!==(t=lt.state)&&void 0!==t&&t.tid&&ut()}),[null===(n=lt.state)||void 0===n?void 0:n.tid,ut]),(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)("div",{className:l.Z.bgContainer,children:[(0,x.jsx)("div",{className:l.Z.navbar,children:(0,x.jsx)(v.default,{status:"home"})}),"site"===(null===(_=lt.search)||void 0===_?void 0:_.substring(3))?(0,x.jsx)(b.Z,{tid:null===(p=lt.state)||void 0===p?void 0:p.tid,viewAs:"INSTITUTE"}):(0,x.jsx)("div",{className:l.Z.editContainer,children:(0,x.jsxs)("div",{className:d.Z.main,children:[(0,x.jsx)(j,{transport:null===vt||void 0===vt?void 0:vt.trans_panel,onRefetch:ut}),(0,x.jsxs)("div",{className:null!==ot&&void 0!==ot&&ot.get("a")&&"fund"!==(null===ot||void 0===ot?void 0:ot.get("a"))&&"fee"!==(null===ot||void 0===ot?void 0:ot.get("a"))?d.Z.finance_container_other:d.Z.finance_container,children:[(!(null!==ot&&void 0!==ot&&ot.get("a"))||"fund"===(null===ot||void 0===ot?void 0:ot.get("a"))||"fee"===(null===ot||void 0===ot?void 0:ot.get("a")))&&(0,x.jsx)(S,{carryParentState:lt.state,transport:null===vt||void 0===vt?void 0:vt.trans_panel}),"vehicle"===ot.get("a")&&(0,x.jsx)("div",{className:c.Z.hostel_container,children:(0,x.jsx)(A.Z,{tid:null===vt||void 0===vt||null===(m=vt.trans_panel)||void 0===m?void 0:m._id,carryParentState:lt.state,instituteId:dt,pageOpenAs:"INSTITUTE",isRootAccess:dt===(null===vt||void 0===vt||null===(h=vt.trans_panel)||void 0===h||null===(f=h.institute)||void 0===f?void 0:f._id)?"VALID":"INVALID"})}),"personal"===ot.get("a")&&(0,x.jsx)("div",{className:c.Z.hostel_container,children:(0,x.jsx)(R.Z,{tid:null===vt||void 0===vt||null===(g=vt.trans_panel)||void 0===g?void 0:g._id,carryParentState:lt.state})}),"passenger"===ot.get("a")&&(0,x.jsx)("div",{className:c.Z.hostel_container,children:(0,x.jsx)(L.Z,{tid:null===vt||void 0===vt||null===(Z=vt.trans_panel)||void 0===Z?void 0:Z._id,carryParentState:lt.state,instituteId:dt})}),"batch"===ot.get("a")&&(0,x.jsx)("div",{className:c.Z.hostel_container,children:(0,x.jsx)(P.Z,{transportId:null===vt||void 0===vt||null===(I=vt.trans_panel)||void 0===I?void 0:I._id,selectedBacthId:null===vt||void 0===vt||null===(y=vt.trans_panel)||void 0===y?void 0:y.departmentSelectBatch,onMasterApiRefetch:ut,carryParentState:lt.state,instituteId:dt,pageOpenAs:"INSTITUTE",isRootAccess:dt===(null===vt||void 0===vt||null===(C=vt.trans_panel)||void 0===C||null===(D=C.institute)||void 0===D?void 0:D._id)?"VALID":"INVALID"})}),"standard"===ot.get("a")&&(0,x.jsx)("div",{className:c.Z.hostel_container,children:(0,x.jsx)(V.Z,{transportId:null===vt||void 0===vt||null===(O=vt.trans_panel)||void 0===O?void 0:O._id,carryParentState:lt.state,pageOpenAs:"INSTITUTE",isRootAccess:dt===(null===vt||void 0===vt||null===(k=vt.trans_panel)||void 0===k||null===(w=k.institute)||void 0===w?void 0:w._id)?"VALID":"INVALID"})}),"vehicle-detail"===ot.get("a")&&(0,x.jsx)("div",{className:c.Z.hostel_container,children:(0,x.jsx)(M.Z,{transportId:null===vt||void 0===vt||null===(E=vt.trans_panel)||void 0===E?void 0:E._id,carryParentState:lt.state,pageOpenAs:"INSTITUTE",isRootAccess:dt===(null===vt||void 0===vt||null===(q=vt.trans_panel)||void 0===q||null===(F=q.institute)||void 0===F?void 0:F._id)?"VALID":"INVALID",instituteId:dt})}),"pending"===ot.get("a")&&(0,x.jsx)("div",{className:c.Z.hostel_container,children:(0,x.jsx)(U.Z,{transportId:null===vt||void 0===vt||null===(H=vt.trans_panel)||void 0===H?void 0:H._id,instituteId:dt})}),"fee"===(null===ot||void 0===ot?void 0:ot.get("a"))&&(0,x.jsx)("div",{style:{marginTop:"1rem"},children:(0,x.jsx)(N.Z,{financeId:null===vt||void 0===vt||null===(G=vt.trans_panel)||void 0===G||null===(B=G.institute)||void 0===B||null===(J=B.financeDepart)||void 0===J||null===($=J[0])||void 0===$?void 0:$._id,fees_category_count:null===vt||void 0===vt||null===(z=vt.trans_panel)||void 0===z||null===(K=z.institute)||void 0===K||null===(W=K.financeDepart)||void 0===W||null===(X=W[0])||void 0===X?void 0:X.fees_category_count,fee_master_array_count:null===vt||void 0===vt||null===(Q=vt.trans_panel)||void 0===Q||null===(Y=Q.institute)||void 0===Y||null===(tt=Y.financeDepart)||void 0===tt||null===(et=tt[0])||void 0===et?void 0:et.fee_master_array_count,fee_structure_count:null===vt||void 0===vt||null===(nt=vt.trans_panel)||void 0===nt?void 0:nt.fees_structures_count,carryParentState:lt.state,transportId:null===vt||void 0===vt||null===(at=vt.trans_panel)||void 0===at?void 0:at._id,instituteId:dt,pageOpenAs:"INSTITUTE",isRootAccess:dt===(null===vt||void 0===vt||null===(it=vt.trans_panel)||void 0===it||null===(rt=it.institute)||void 0===rt?void 0:rt._id)?"VALID":"INVALID"})})]})]})})]})})}},64783:function(t,e,n){n(72791);var a=n(90788),i=n(16871),r=n(43504),s=n(80184);e.Z=function(t){var e=t.tabLevel,n=t.customStyleContainer,o=t.customStyleLevel,l=t.currentValue,d=t.tabValue,c=t.carryParentState,v=t.activeUrl,u=(0,i.UO)();return(0,s.jsx)(r.rU,{to:"/q/".concat(u.username,"/").concat(v),state:c,className:l===d?a.Z.common_tab_container_active:a.Z.common_tab_container,style:n,children:(0,s.jsx)("h6",{className:l===d?a.Z.common_tab_text_active:a.Z.common_tab_text,style:o,children:e})})}},97393:function(t,e){e.Z={navbar:"InsFinance_navbar__BwqhT",editContainer:"InsFinance_editContainer__JeVmy",bgContainer:"InsFinance_bgContainer__8oJKn"}},74737:function(t,e){e.Z={main:"Main_main__4mpMH",stats:"Main_stats__05reL",stats1:"Main_stats1__WlbdF",finance_container:"Main_finance_container__2pMkG",finance_container_other:"Main_finance_container_other__+Fq3c",institute_finance_container_border:"Main_institute_finance_container_border__Jgqpr",finance_tab_tabs:"Main_finance_tab_tabs__ufRpi",item:"Main_item__RsX-U",itemIcon:"Main_itemIcon__MA5vy"}}}]);
//# sourceMappingURL=21032.cdcf3b22.chunk.js.map
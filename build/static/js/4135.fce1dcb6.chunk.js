"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[4135],{55029:function(e,t,i){i.r(t),i.d(t,{default:function(){return z}});var n=i(29439),l=i(72791),o=i(43504),s=i(16871),a=i(20772),d=i(87338),r=i(97393),c=i(15214),u=i(74737),v=i(93433),h=i(39230),_=i(23441),m=i(11105),x=i(763),f=i(44849),g=i(98094),j=i(80184),p=function(e){var t=e.hid,i=e.instituteId,o=(0,h.$G)().t,s=(0,_.YD)(),a=(0,n.Z)(s,2),r=a[0],u=a[1],p=(0,l.useState)(1),b=(0,n.Z)(p,2),Z=b[0],S=b[1],y=(0,l.useState)(!0),N=(0,n.Z)(y,2),I=N[0],T=N[1],P=(0,l.useState)(!0),F=(0,n.Z)(P,2),C=F[0],w=F[1],A=(0,l.useState)([]),R=(0,n.Z)(A,2),U=R[0],E=R[1],L=(0,l.useState)(""),M=(0,n.Z)(L,2),O=M[0],k=M[1],q=(0,d.JV)({data:{hid:t,page:Z,limit:10,search:O,filter_by:"",id:i},skip:!t}),V=q.getHostelHostelitesList,D=q.getHostelHostelitesListRefetch;(0,l.useEffect)((function(){t&&(w(!0),D())}),[t,i,Z,O,D]),(0,l.useEffect)((function(){u&&I&&S((function(e){return e+1}))}),[u,I]),(0,l.useEffect)((function(){var e,t;O?(E(null===V||void 0===V?void 0:V.all_hostalities),w(!1)):null!==V&&void 0!==V&&V.all_hostalities?(E((function(e){var t,i;return null===(t=(0,v.Z)(new Set(null===(i=[].concat((0,v.Z)(e),(0,v.Z)(null===V||void 0===V?void 0:V.all_hostalities)))||void 0===i?void 0:i.map(JSON.stringify))))||void 0===t?void 0:t.map(JSON.parse)})),w(!1)):0===(null===V||void 0===V||null===(t=V.all_hostalities)||void 0===t?void 0:t.length)&&w(!1);10===(null===V||void 0===V||null===(e=V.all_hostalities)||void 0===e?void 0:e.length)?T(!0):T(!1)}),[null===V||void 0===V?void 0:V.all_hostalities]);var H=(0,l.useCallback)((0,x.debounce)((function(e){return k(e)}),500),[]);return(0,j.jsxs)("div",{children:[(0,j.jsxs)("div",{className:c.Z.with_search,children:[(0,j.jsx)("h6",{children:o("hostelites")}),(0,j.jsx)("section",{className:c.Z.search_container,children:(0,j.jsxs)("div",{className:c.Z.search_container_input,children:[(0,j.jsx)("img",{className:c.Z.searchIcon,alt:"search icon",src:"/images/search-dash-icon.svg"}),(0,j.jsx)("input",{type:"text",placeholder:"Search warden...",onChange:function(e){H(e.target.value)}})]})})]}),(0,j.jsx)(g.Z,{customStyle:{marginTop:"0.5rem",width:"100%"}}),null===U||void 0===U?void 0:U.map((function(e,t){return(null===U||void 0===U?void 0:U.length)===t+1?(0,j.jsx)("div",{ref:r,children:(0,j.jsx)(f.Z,{hostelites:e,viewAs:"INSTITUTE_SIDE"})},null===e||void 0===e?void 0:e._id):(0,j.jsx)(f.Z,{hostelites:e,viewAs:"INSTITUTE_SIDE"},null===e||void 0===e?void 0:e._id)})),C&&(0,j.jsx)(m.Z,{})]})},b=i(22492),Z=i(64783);function S(e){var t=e.bal,i=e.value;return(0,j.jsxs)("div",{className:c.Z.balanceItem,children:[(0,j.jsxs)("p",{children:[t,":"]}),(0,j.jsxs)("p",{children:["Rs. ",i]})]})}var y=function(e){var t,i,n,l=e.onlineFee,o=e.offlineFee,s=e.exemptAmount,a=e.remainingFeeCount,d=(0,h.$G)().t;return(0,j.jsx)("div",{className:c.Z.funds2,children:(0,j.jsxs)("div",{className:c.Z.fundscontent,children:[(0,j.jsx)("h6",{className:c.Z.institute_hostel_title,children:d("hostel_fees")}),(0,j.jsx)(g.Z,{customStyle:{width:"100%",marginBottom:"0.7rem"}}),(0,j.jsxs)("div",{className:c.Z.sidebarbottomitem,children:[(0,j.jsx)("img",{alt:"not found",src:"/images/hostel/rupee-blue-icon.svg"}),(0,j.jsxs)("div",{children:[(0,j.jsxs)("p",{className:c.Z.namee,children:["Rs."," ",(l||(0+o?o:0)).toFixed(2)]}),(0,j.jsx)("p",{className:c.Z.desig,children:d("total_hostel_fees")})]})]}),(0,j.jsx)(S,{bal:d("online_fees"),value:null!==(t=null===l||void 0===l?void 0:l.toFixed(2))&&void 0!==t?t:0}),(0,j.jsx)(S,{bal:d("offline_fees"),value:null!==(i=null===o||void 0===o?void 0:o.toFixed(2))&&void 0!==i?i:0}),(0,j.jsx)(S,{bal:"".concat(d("total_concession_fees"),":"),value:null!==(n=null===s||void 0===s?void 0:s.toFixed(2))&&void 0!==n?n:0}),(0,j.jsxs)("div",{className:c.Z.fundbtn,children:[d("total_pending_fees")," : Rs. ",null!==a&&void 0!==a?a:0]})]})})},N=function(e){var t=e.carryParentState,i=e.onlineFee,l=e.offlineFee,s=e.exemptAmount,a=e.remainingFeeCount,d=(0,h.$G)().t,r=(0,o.lr)(),c=(0,n.Z)(r,1)[0];return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)("div",{className:u.Z.finance_tab_tabs,children:[(0,j.jsx)(Z.Z,{tabLevel:d("menu"),customStyleContainer:{width:"33.3%",marginRight:"2px",borderTopLeftRadius:"6px"},customStyleLevel:{borderTopLeftRadius:"6px"},tabValue:"menu",currentValue:null!==c&&void 0!==c&&c.get("a")?"other":"menu",carryParentState:t,activeUrl:"hostel"}),(0,j.jsx)(Z.Z,{tabLevel:d("fees_structure"),customStyleContainer:{width:"33.3%",marginRight:"2px"},customStyleLevel:{borderTopLeftRadius:"6px"},tabValue:"fee",currentValue:"fee"===(null===c||void 0===c?void 0:c.get("a"))?"fee":"other",carryParentState:t,activeUrl:"hostel?a=fee"}),(0,j.jsx)(Z.Z,{tabLevel:d("funds"),customStyleContainer:{width:"33.3%",borderTopRightRadius:"6px"},customStyleLevel:{borderTopLeftRadius:"6px"},tabValue:"fund",currentValue:"fund"===(null===c||void 0===c?void 0:c.get("a"))?"fund":"other",carryParentState:t,activeUrl:"hostel?a=fund"})]}),null!==c&&void 0!==c&&c.get("a")?"fund"===(null===c||void 0===c?void 0:c.get("a"))?(0,j.jsx)(y,{carryParentState:t,onlineFee:i,offlineFee:l,exemptAmount:s,remainingFeeCount:a}):null:(0,j.jsxs)("div",{className:u.Z.item,children:[(0,j.jsx)(b.Z,{carryParentState:t,activeTab:"warden",children:(0,j.jsxs)("div",{className:u.Z.itemIcon,children:[(0,j.jsx)("img",{src:"/images/member_tab/hostel/hostel-warden-icon.svg",alt:"Class Catalog"}),(0,j.jsx)("p",{children:d("staff_room")})]})}),(0,j.jsx)(b.Z,{carryParentState:t,activeTab:"unit",children:(0,j.jsxs)("div",{className:u.Z.itemIcon,children:[(0,j.jsx)("img",{src:"/images/member_tab/hostel/hostel-unit-icon.svg",alt:"completed"}),(0,j.jsx)("p",{children:d("hostel_unit")})]})}),(0,j.jsx)(b.Z,{carryParentState:t,activeTab:"hostelites",children:(0,j.jsxs)("div",{className:u.Z.itemIcon,children:[(0,j.jsx)("img",{src:"/images/member_tab/hostel/hostel-hostelite-icon.svg",alt:"completed"}),(0,j.jsx)("p",{children:d("total_hostelites")})]})}),(0,j.jsx)(b.Z,{carryParentState:t,activeTab:"request",children:(0,j.jsxs)("div",{className:u.Z.itemIcon,children:[(0,j.jsx)("img",{src:"/images/member_tab/hostel/hostel-renewal-icon.svg",alt:"inquery"}),(0,j.jsx)("p",{children:d("admission_renewal")})]})}),(0,j.jsx)(b.Z,{carryParentState:t,activeTab:"pending",children:(0,j.jsxs)("div",{className:u.Z.itemIcon,children:[(0,j.jsx)("img",{src:"/images/member_tab/finance/finance-pending-icon.svg",alt:"completed"}),(0,j.jsx)("p",{children:d("pending_fees")})]})}),(0,j.jsx)(b.Z,{carryParentState:t,activeTab:"form",children:(0,j.jsxs)("div",{className:u.Z.itemIcon,children:[(0,j.jsx)("img",{src:"/images/member_tab/hostel/hostel-form-icon.svg",alt:"inquery"}),(0,j.jsx)("p",{children:d("hostel_admission_form_details")})]})}),(0,j.jsx)(b.Z,{carryParentState:t,activeTab:"export",children:(0,j.jsxs)("div",{className:u.Z.itemIcon,children:[(0,j.jsx)("img",{src:"/images/member_tab/finance/finance-export-icon.svg",alt:"refund"}),(0,j.jsx)("p",{children:d("data_exporting")})]})}),(0,j.jsx)(b.Z,{carryParentState:t,activeTab:"moderator",children:(0,j.jsxs)("div",{className:u.Z.itemIcon,children:[(0,j.jsx)("img",{src:"/images/member_tab/admission/admission-moderator-icon.svg",alt:"moderator icon"}),(0,j.jsx)("p",{children:d("hostel_moderator")})]})}),(0,j.jsx)(b.Z,{carryParentState:t,activeTab:"batch",children:(0,j.jsxs)("div",{className:u.Z.itemIcon,children:[(0,j.jsx)("img",{src:"/images/member_tab/hostel/hostel-batch-icon.svg",alt:"completed"}),(0,j.jsx)("p",{children:d("hostel_tab_batch")})]})})]})]})},I=i(35395),T=i(69721),P=i(85050),F=i(93738),C=i(21093),w=l.lazy((function(){return i.e(2504).then(i.bind(i,92963))})),A=function(e){var t,i,o,a,d,r,c,u,v=e.hostel,_=e.onRefetch,m=(0,h.$G)().t,x=l.useState(!1),f=(0,n.Z)(x,2),g=f[0],p=f[1],b=(0,s.UO)(),Z=function(){p((function(e){return!e}))};return(0,j.jsxs)("div",{style:{position:"sticky",top:"77px",height:"fit-content",width:"30%"},children:[(0,j.jsx)(C.Z,{whichType:"PREVIOUS_GO"}),(0,j.jsx)(P.Z,{dynamicImage:null!==v&&void 0!==v&&v.hostel_photo?"".concat(T.yI,"/").concat(null===v||void 0===v?void 0:v.hostel_photo):"/images/profileAndCover/hostel-cover.svg",edit:!0,onEditAction:Z,redirectUrl:"/q/".concat(b.username,"/hostel?a=site"),isSiteInfo:"HOSTEL",carryParentState:{hid:null===v||void 0===v?void 0:v._id}}),(0,j.jsx)(F.Z,{cardAsHead:!0,heading:" ".concat(null!==(t=null===v||void 0===v||null===(i=v.hostel_manager)||void 0===i?void 0:i.staffFirstName)&&void 0!==t?t:""," ").concat(null!==(o=null===v||void 0===v||null===(a=v.hostel_manager)||void 0===a?void 0:a.staffMiddleName)&&void 0!==o?o:""," ").concat(null!==(d=null===v||void 0===v||null===(r=v.hostel_manager)||void 0===r?void 0:r.staffLastName)&&void 0!==d?d:""),description:m("hostel_manager"),customStyleCard:{borderRadius:"18px 18px 0px 0px",border:"none",marginTop:"-1.49vw"}}),(0,j.jsx)(F.Z,{cardAsHead:!1,heading:m("hostel_beds"),description:m("hostel_beds_label"),count:null!==(c=null===v||void 0===v?void 0:v.bed_count)&&void 0!==c?c:0}),(0,j.jsx)(F.Z,{cardAsHead:!1,heading:m("hostel_rooms"),description:m("hostel_rooms_label"),count:null!==(u=null===v||void 0===v?void 0:v.room_count)&&void 0!==u?u:0,customStyleCard:{borderRadius:"0 0 12px 12px",borderBottom:"0.4px solid rgba(0, 0, 0, 0.15)"}}),(0,j.jsx)(I.Z,{children:(0,j.jsx)(w,{hostelModal:g,hideModal:Z,edit:!0,hostelManagerName:null===v||void 0===v?void 0:v.hostel_manager,onParentRefetch:_})})]})},R=i(49804),U=i(48025),E=i(26515),L=i(83555),M=i(79541),O=i(19765),k=i(82104),q=i(73309),V=i(49215),D=i(44241),H=i(49802),G=i(60080),J=i(34791),B=i(42850),$=i(95048),z=function(){var e,t,i,v,h,_,m,x,f,g,b,Z,S,y,I,T,P,F,C,w,z,K,Q,W,X,Y,ee,te,ie,ne,le,oe,se,ae,de,re,ce,ue,ve,he,_e,me,xe,fe,ge,je,pe,be,Ze,Se,ye=(0,o.lr)(),Ne=(0,n.Z)(ye,1)[0],Ie=(0,s.TH)(),Te=(0,$.v9)((function(e){return e.idChange.id})),Pe=(0,d.QP)({data:{hid:null===(e=Ie.state)||void 0===e?void 0:e.hid,mod_id:""},skip:!(null!==(t=Ie.state)&&void 0!==t&&t.hid)}),Fe=Pe.hostelDetail,Ce=Pe.hostelDetailRefetch;return(0,l.useEffect)((function(){var e;null!==(e=Ie.state)&&void 0!==e&&e.hid&&Ce()}),[null===(i=Ie.state)||void 0===i?void 0:i.hid,Ce]),(0,j.jsxs)("div",{className:r.Z.bgContainer,children:[(0,j.jsx)("div",{className:r.Z.navbar,children:(0,j.jsx)(a.default,{status:"home"})}),"site"===(null===(v=Ie.search)||void 0===v?void 0:v.substring(3))?(0,j.jsx)(O.Z,{hid:null===(h=Ie.state)||void 0===h?void 0:h.hid,viewAs:"INSTITUTE"}):(0,j.jsx)("div",{className:r.Z.editContainer,children:(0,j.jsxs)("div",{className:u.Z.main,children:[(0,j.jsx)(A,{hostel:null===Fe||void 0===Fe?void 0:Fe.one_hostel,onRefetch:Ce}),(0,j.jsxs)("div",{className:null!==Ne&&void 0!==Ne&&Ne.get("a")&&"fund"!==(null===Ne||void 0===Ne?void 0:Ne.get("a"))&&"fee"!==(null===Ne||void 0===Ne?void 0:Ne.get("a"))?u.Z.finance_container_other:u.Z.finance_container,children:[(!(null!==Ne&&void 0!==Ne&&Ne.get("a"))||"fund"===(null===Ne||void 0===Ne?void 0:Ne.get("a"))||"fee"===(null===Ne||void 0===Ne?void 0:Ne.get("a")))&&(0,j.jsx)(N,{carryParentState:Ie.state,onlineFee:null===Fe||void 0===Fe||null===(_=Fe.one_hostel)||void 0===_?void 0:_.onlineFee,offlineFee:null===Fe||void 0===Fe||null===(m=Fe.one_hostel)||void 0===m?void 0:m.offlineFee,exemptAmount:null===Fe||void 0===Fe||null===(x=Fe.one_hostel)||void 0===x?void 0:x.exemptAmount,remainingFeeCount:null===Fe||void 0===Fe||null===(f=Fe.one_hostel)||void 0===f?void 0:f.remainingFeeCount}),"warden"===(null===Ne||void 0===Ne?void 0:Ne.get("a"))&&(0,j.jsx)("div",{className:c.Z.institute_hostel_container_border,children:(0,j.jsx)(R.Z,{hid:null===(g=Ie.state)||void 0===g?void 0:g.hid})}),"unit"===(null===Ne||void 0===Ne?void 0:Ne.get("a"))&&(null!==(b=["info","hostelites","menu","room"])&&void 0!==b&&b.includes(null===Ne||void 0===Ne?void 0:Ne.get("n"))?(0,j.jsx)(E.Z,{carryParentState:Ie.state,pageOpenAs:"INSTITUTE"}):(0,j.jsx)("div",{className:c.Z.institute_hostel_container_border,children:(0,j.jsx)(G.Z,{hid:null===(Z=Ie.state)||void 0===Z?void 0:Z.hid,carryParentState:Ie.state,instituteId:null===Fe||void 0===Fe||null===(S=Fe.one_hostel)||void 0===S||null===(y=S.institute)||void 0===y?void 0:y._id,pageOpenAs:"INSTITUTE"})})),"room"===(null===Ne||void 0===Ne?void 0:Ne.get("a"))&&(0,j.jsx)(L.Z,{carryParentState:Ie.state,viewAs:"INSTITUTE"}),"notice"===(null===Ne||void 0===Ne?void 0:Ne.get("a"))&&(0,j.jsx)("div",{className:c.Z.institute_hostel_container_border,children:(0,j.jsx)(M.Z,{hid:null===(I=Ie.state)||void 0===I?void 0:I.hid,carryParentState:Ie.state})}),"hostelites"===(null===Ne||void 0===Ne?void 0:Ne.get("a"))&&(0,j.jsx)("div",{className:c.Z.institute_hostel_container_border,children:(0,j.jsx)(p,{hid:null===(T=Ie.state)||void 0===T?void 0:T.hid,instituteId:Te})}),"request"===(null===Ne||void 0===Ne?void 0:Ne.get("a"))&&(0,j.jsx)("div",{className:c.Z.institute_hostel_container_border,children:(0,j.jsx)(J.Z,{hid:null===(P=Ie.state)||void 0===P?void 0:P.hid,carryParentState:Ie.state,pageOpenAs:"INSTITUTE",instituteId:Te})}),"pending"===(null===Ne||void 0===Ne?void 0:Ne.get("a"))&&(0,j.jsx)("div",{className:c.Z.institute_hostel_container_border,children:(0,j.jsx)(U.Z,{hid:null===(F=Ie.state)||void 0===F?void 0:F.hid,id:Te})}),"form"===(null===Ne||void 0===Ne?void 0:Ne.get("a"))&&(0,j.jsx)("div",{className:c.Z.institute_hostel_container_border,children:(0,j.jsx)(H.Z,{hostelId:null===Fe||void 0===Fe||null===(C=Fe.one_hostel)||void 0===C?void 0:C._id})}),"export"===(null===Ne||void 0===Ne?void 0:Ne.get("a"))&&(0,j.jsx)("div",{className:c.Z.institute_hostel_container_border,children:(0,j.jsx)(D.Z,{hostelId:null===Fe||void 0===Fe||null===(w=Fe.one_hostel)||void 0===w?void 0:w._id,instituteId:null===Fe||void 0===Fe||null===(z=Fe.one_hostel)||void 0===z||null===(K=z.institute)||void 0===K||null===(Q=K.financeDepart)||void 0===Q||null===(W=Q[0])||void 0===W?void 0:W._id})}),"moderator"===(null===Ne||void 0===Ne?void 0:Ne.get("a"))&&(0,j.jsx)("div",{className:c.Z.institute_hostel_container_border,children:(0,j.jsx)(V.Z,{hid:null===Fe||void 0===Fe||null===(X=Fe.one_hostel)||void 0===X?void 0:X._id,instituteId:null===Fe||void 0===Fe||null===(Y=Fe.one_hostel)||void 0===Y||null===(ee=Y.institute)||void 0===ee?void 0:ee._id})}),"batch"===(null===Ne||void 0===Ne?void 0:Ne.get("a"))&&(0,j.jsx)("div",{className:c.Z.institute_hostel_container_border,children:(0,j.jsx)(k.Z,{hid:null===Fe||void 0===Fe||null===(te=Fe.one_hostel)||void 0===te?void 0:te._id,selectedBacthId:null===Fe||void 0===Fe||null===(ie=Fe.one_hostel)||void 0===ie?void 0:ie.departmentSelectBatch,onMasterApiRefetch:Ce,carryParentState:Ie.state,pageOpenAs:"INSTITUTE",instituteId:null===Fe||void 0===Fe||null===(ne=Fe.one_hostel)||void 0===ne||null===(le=ne.institute)||void 0===le||null===(oe=le.financeDepart)||void 0===oe||null===(se=oe[0])||void 0===se?void 0:se._id})}),"standard"===(null===Ne||void 0===Ne?void 0:Ne.get("a"))&&(0,j.jsx)("div",{className:c.Z.institute_hostel_container_border,children:(0,j.jsx)(q.Z,{hid:null===Fe||void 0===Fe||null===(ae=Fe.one_hostel)||void 0===ae?void 0:ae._id,carryParentState:Ie.state,pageOpenAs:"INSTITUTE"})}),"fee"===(null===Ne||void 0===Ne?void 0:Ne.get("a"))&&(0,j.jsx)("div",{style:{marginTop:"1rem"},children:(0,j.jsx)(B.Z,{financeId:null===Fe||void 0===Fe||null===(de=Fe.one_hostel)||void 0===de||null===(re=de.institute)||void 0===re||null===(ce=re.financeDepart)||void 0===ce||null===(ue=ce[0])||void 0===ue?void 0:ue._id,fees_category_count:null===Fe||void 0===Fe||null===(ve=Fe.one_hostel)||void 0===ve||null===(he=ve.institute)||void 0===he||null===(_e=he.financeDepart)||void 0===_e||null===(me=_e[0])||void 0===me?void 0:me.fees_category_count,fee_master_array_count:null===Fe||void 0===Fe||null===(xe=Fe.one_hostel)||void 0===xe||null===(fe=xe.institute)||void 0===fe||null===(ge=fe.financeDepart)||void 0===ge||null===(je=ge[0])||void 0===je?void 0:je.fee_master_array_count,fee_structure_count:null===Fe||void 0===Fe||null===(pe=Fe.one_hostel)||void 0===pe?void 0:pe.fees_structures_count,carryParentState:Ie.state,hostelId:null===Fe||void 0===Fe||null===(be=Fe.one_hostel)||void 0===be?void 0:be._id,instituteId:null===Fe||void 0===Fe||null===(Ze=Fe.one_hostel)||void 0===Ze||null===(Se=Ze.institute)||void 0===Se?void 0:Se._id,pageOpenAs:"INSTITUTE"})})]})]})})]})}},64783:function(e,t,i){i(72791);var n=i(90788),l=i(16871),o=i(43504),s=i(80184);t.Z=function(e){var t=e.tabLevel,i=e.customStyleContainer,a=e.customStyleLevel,d=e.currentValue,r=e.tabValue,c=e.carryParentState,u=e.activeUrl,v=(0,l.UO)();return(0,s.jsx)(o.rU,{to:"/q/".concat(v.username,"/").concat(u),state:c,className:d===r?n.Z.common_tab_container_active:n.Z.common_tab_container,style:i,children:(0,s.jsx)("h6",{className:d===r?n.Z.common_tab_text_active:n.Z.common_tab_text,style:a,children:t})})}},97393:function(e,t){t.Z={navbar:"InsFinance_navbar__BwqhT",editContainer:"InsFinance_editContainer__JeVmy",bgContainer:"InsFinance_bgContainer__8oJKn"}},74737:function(e,t){t.Z={main:"Main_main__4mpMH",stats:"Main_stats__05reL",stats1:"Main_stats1__WlbdF",finance_container:"Main_finance_container__2pMkG",finance_container_other:"Main_finance_container_other__+Fq3c",institute_finance_container_border:"Main_institute_finance_container_border__Jgqpr",finance_tab_tabs:"Main_finance_tab_tabs__ufRpi",item:"Main_item__RsX-U",itemIcon:"Main_itemIcon__MA5vy"}}}]);
//# sourceMappingURL=4135.fce1dcb6.chunk.js.map
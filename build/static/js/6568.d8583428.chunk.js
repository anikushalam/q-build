"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[6568,4035],{7562:function(e,n,a){a.d(n,{nj:function(){return i}});var i=[{id:"nskjdfs",key:!0,name:"yes"},{id:"snkjdfs",key:!1,name:"no"}]},1669:function(e,n,a){var i=a(98684),t=a(63244),l=a(80184);n.Z=function(e){var n=e.isGrey;return(0,l.jsx)("div",{className:t.Z.q_loading,children:(0,l.jsx)("img",{src:"".concat(i.Uw,n?"/loading-grey.gif":"/loading.gif"),alt:"loading icon"})})}},55336:function(e,n,a){var i=a(63244),t=a(80184);n.Z=function(){return(0,t.jsx)("div",{className:i.Z.qviple_loader_backdrop,children:(0,t.jsx)("div",{className:i.Z.qviple_loader_container,children:(0,t.jsx)("div",{className:i.Z.qviple_loader_rotation})})})}},90904:function(e,n,a){a.d(n,{Z:function(){return l}});var i="BorderBottom_split_content__RVPoh",t=a(80184),l=function(e){var n=e.customStyleBorder;return(0,t.jsx)("hr",{className:i,style:n})}},93638:function(e,n,a){var i=a(39230),t=a(80476),l=a(80184);n.Z=function(e){var n=e.label,a=e.count,o=e.onAction,_=e.customStyle,r=e.isTranslate,s=(0,i.$G)().t;return r?(0,l.jsxs)("div",{className:t.Z.create_btn_container,onClick:o,style:_,children:[a>0?(0,l.jsxs)("span",{children:[a," "]}):null,n]}):(0,l.jsxs)("div",{className:t.Z.create_btn_container,onClick:o,style:_,children:[a>0?(0,l.jsxs)("span",{children:[a," "]}):null,s(n)]})}},8959:function(e,n,a){var i=a(52245),t=a(80184);n.Z=function(e){var n=e.label,a=e.value,l=e.customFormInputContainer,o=e.customFormInputLabel,_=e.customFormInput;return(0,t.jsxs)("div",{className:i.Z.form_read_input_container,style:l,children:[(0,t.jsx)("label",{className:i.Z.form_read_input_label,style:o,children:n}),(0,t.jsx)("h6",{className:i.Z.form_read_input,style:_,children:a})]})}},26071:function(e,n,a){var i=a(51416),t=a(39230),l=a(80184);n.Z=function(e){var n=e.tile,a=e.onTile,o=e.activeTile,_=e.customTileChild,r=(0,t.$G)().t;return(0,l.jsx)("div",{className:(null===n||void 0===n?void 0:n.key)===o?i.Z.tile_tile_active:i.Z.tile_tile,onClick:function(){return a(null===n||void 0===n?void 0:n.key)},style:_,children:r(null===n||void 0===n?void 0:n.name)})}},20659:function(e,n,a){var i=a(51416),t=a(39230),l=a(80184);n.Z=function(e){var n=e.label,a=e.customTileLabel,o=e.customTileContainer,_=e.children,r=(0,t.$G)().t;return(0,l.jsxs)("div",{className:i.Z.tile_container,children:[n&&(0,l.jsx)("h6",{className:i.Z.tile_label,style:a,children:r(n)}),(0,l.jsx)("section",{className:i.Z.tile_tile_container,style:o,children:_})]})}},21348:function(e,n,a){var i=a(59393),t=a(80184);n.Z=function(e){var n=e.customStyle,a=e.children;return(0,t.jsx)("div",{className:i.Z.user_member_content_wrapper,style:n,children:a})}},66687:function(e,n,a){var i=a(37762),t=a(1413),l=a(29439),o=a(39230),_=a(48293),r=a(21348),s=a(16925),d=a(90904),u=a(72791),c=a(98684),m=a(55336),v=a(93638),p=a(61055),b=a(99183),h=a(71439),f=a(64499),Z=a(16871),y=a(20659),x=a(26071),g=a(7562),j=a(8959),w=a(60307),T=a(80184);n.Z=function(e){var n,a,k,U,N,q,C,I,M=e.onClose,S=e.install,A=e.admission,B=e.isEditable,L=e.statusId,F=(0,o.$G)().t,z=(0,Z.UO)(),Y=(0,u.useState)(!1),G=(0,l.Z)(Y,2),O=G[0],V=(G[1],(0,u.useState)({amount:0,type:"Admission",isTransaction:!1,pay_remain:!1})),J=(0,l.Z)(V,2),P=J[0],R=J[1],H=(0,u.useState)(""),X=(0,l.Z)(H,2),$=X[0],D=X[1],E=(0,u.useState)(0),Q=(0,l.Z)(E,2),K=Q[0],W=Q[1],ee=(0,w.xY)({data:{id:null===S||void 0===S?void 0:S.instituteId},skip:!(null!==S&&void 0!==S&&S.instituteId)}).studentInstituteCharges;(0,u.useEffect)((function(){var e;null!==S&&void 0!==S&&S.remainAmount&&R({amount:null!==(e=null===S||void 0===S?void 0:S.remainAmount)&&void 0!==e?e:0,type:"Admission",isTransaction:!1,pay_remain:!1})}),[]);var ne=function(e){if(R((function(n){return(0,t.Z)((0,t.Z)({},n),{},{pay_remain:e})})),e){var n,a,l=0,o=(0,i.Z)(null===A||void 0===A||null===(n=A.applicable_card)||void 0===n?void 0:n.remaining_array);try{for(o.s();!(a=o.n()).done;){var _=a.value;"Paid"!==(null===_||void 0===_?void 0:_.status)&&(l+=null===_||void 0===_?void 0:_.remainAmount)}}catch(r){o.e(r)}finally{o.f()}W(l),R((function(e){var n;return(0,t.Z)((0,t.Z)({},e),{},{amount:null!==(n=l)&&void 0!==n?n:0})}))}};return(0,T.jsxs)(T.Fragment,{children:[P.isTransaction?(0,T.jsx)(h.Z,{onClose:function(){R((function(e){return(0,t.Z)((0,t.Z)({},e),{},{isTransaction:!1})}))},allContent:(0,t.Z)((0,t.Z)({},P),{},{platform_charges:null===ee||void 0===ee||null===(n=ee.platform_charges)||void 0===n?void 0:n.percentage}),checkoutAdmissionHandler:function(){var e,n,a,i,t,l,o,_,r,s,d,u,c,m=2.1*+(null===P||void 0===P?void 0:P.amount)/100,v=m+18*+m/100,p=parseInt(null===P||void 0===P?void 0:P.amount),b=Math.ceil(p+ +v.toFixed(2));(0,f.oU)({amount:null!==(e=+(null===P||void 0===P?void 0:P.amount))&&void 0!==e?e:10,amount_nocharges:null!==(n=+b)&&void 0!==n?n:0,type:"Admission",paidBy:"".concat(L?null===A||void 0===A?void 0:A.student:null===A||void 0===A||null===(a=A.student)||void 0===a?void 0:a._id),paidTo:"".concat(null===S||void 0===S?void 0:S.instituteId),moduleId:"".concat(null===S||void 0===S?void 0:S.appId),ad_status_id:L||null,payment_installment:null===S||void 0===S?void 0:S.installmentValue,ad_install:null,month:null,payment_remain_1:null,payment_card_type:null,payment_book_id:null,name:z.username,isApk:"web",payment_card_id:null!==(i=null===A||void 0===A?void 0:A._id)&&void 0!==i?i:null,payment_remain_fees:P.pay_remain,charge:{num_platform_percent:null!==(t=null===ee||void 0===ee||null===(l=ee.platform_charges)||void 0===l?void 0:l.percentage)&&void 0!==t?t:0,num_platform_max:null!==(o=null===ee||void 0===ee||null===(_=ee.platform_charges)||void 0===_?void 0:_.maximum)&&void 0!==o?o:0,num_trans_pecent:null!==(r=null===ee||void 0===ee||null===(s=ee.transaction_charges)||void 0===s?void 0:s.percentage)&&void 0!==r?r:0,num_trans_max:null!==(d=null===ee||void 0===ee||null===(u=ee.transaction_charges)||void 0===u?void 0:u.maximum)&&void 0!==d?d:0,num_app_max:null!==(c=null===ee||void 0===ee?void 0:ee.application_charges)&&void 0!==c?c:0}}).then((function(e){var n,a;console.info("ldskjfnsbkjasdnf,ms",e),window.onScriptLoad(null===e||void 0===e||null===(n=e.response)||void 0===n||null===(a=n.body)||void 0===a?void 0:a.txnToken,null===e||void 0===e?void 0:e.order,null===e||void 0===e?void 0:e.amount)})).catch((function(e){console.info(e)}))},isOptimzed:!0}):(0,T.jsx)(_.Z,{onClose:M,children:(0,T.jsxs)("div",{className:s.Z.modal_container,children:[(0,T.jsx)(r.Z,{children:(0,T.jsxs)("div",{className:s.Z.modal_container_outer_header,children:[(0,T.jsx)("div",{className:s.Z.modal_container_header,children:(0,T.jsx)("h6",{children:F("pay_admission_fees")})}),(0,T.jsx)("img",{src:"".concat(c.J7,"/close.svg"),alt:"close icon",onClick:M})]})}),(0,T.jsx)(d.Z,{}),(0,T.jsxs)(r.Z,{customStyle:{paddingTop:"0"},children:[(0,T.jsxs)("div",{className:s.Z.admission_fees_row,children:[(0,T.jsxs)("h6",{children:[F("applicable_pendig_fees_only")," :"]}),(0,T.jsxs)("h6",{children:[F("rs_only")," ",null!==(a=null===A||void 0===A||null===(k=A.applicable_card)||void 0===k?void 0:k.applicable_fee)&&void 0!==a?a:0]})]}),(0,T.jsx)("div",{className:s.Z.admission_fees_row,children:(0,T.jsxs)("h6",{children:[F("fees_category")," :"," ",null!==(U=null===A||void 0===A||null===(N=A.fee_structure)||void 0===N||null===(q=N.category_master)||void 0===q?void 0:q.category_name)&&void 0!==U?U:""]})}),null!==A&&void 0!==A&&null!==(C=A.fee_structure)&&void 0!==C&&C.total_installments&&+(null===A||void 0===A||null===(I=A.fee_structure)||void 0===I?void 0:I.total_installments)>1&&B?(0,T.jsx)(y.Z,{label:"pay_rest_remaining_fees",children:null===g.nj||void 0===g.nj?void 0:g.nj.map((function(e){return(0,T.jsx)(x.Z,{tile:e,onTile:ne,activeTile:P.pay_remain},null===e||void 0===e?void 0:e.id)}))}):null,B?(0,T.jsx)(p.Z,{label:F(P.pay_remain?"amount_remain_installment":"enter_amount_to_be_paid"),placeholder:F("please_enter_amount_paid"),name:"amount",value:P.amount,type:"tel",onChange:function(e){R((function(n){return(0,t.Z)((0,t.Z)({},n),{},{amount:+e.target.value})}))},errorShow:$.amount,msg:$.rest_issue}):(0,T.jsx)(j.Z,{label:"".concat(F(P.pay_remain?"amount_remain_installment":"amount_to_be_paid")),value:P.pay_remain?K:P.amount}),(0,T.jsx)(v.Z,{label:"pay_admission_fees",onAction:function(){var e,n,a=(0,b.l)({amount:P.amount});(0,b.x)(a)?P.pay_remain&&P.amount<K&&+(null===A||void 0===A||null===(e=A.fee_structure)||void 0===e?void 0:e.total_installments)>1?D({rest_issue:"Amount should not be less than total remaining fees"}):!P.pay_remain&&P.amount<(null===S||void 0===S?void 0:S.remainAmount)&&+(null===A||void 0===A||null===(n=A.fee_structure)||void 0===n?void 0:n.total_installments)>1?D({rest_issue:"Amount should not be greater than remaining fees"}):R((function(e){return(0,t.Z)((0,t.Z)({},e),{},{isTransaction:!0})})):D(a)}})]})]})}),O&&(0,T.jsx)(m.Z,{})]})}},63244:function(e,n){n.Z={qviple_loader_backdrop:"Loader_qviple_loader_backdrop__ScdYl",qviple_loader_container:"Loader_qviple_loader_container__SXQ9Y",qviple_loader_rotation:"Loader_qviple_loader_rotation__ltsgT",qviple_loader_rotation_animation:"Loader_qviple_loader_rotation_animation__gy3+j",q_loading:"Loader_q_loading__bwe2c",circle_loading:"Loader_circle_loading__m+ptB",rotate_animation:"Loader_rotate_animation__IV2sY"}},80476:function(e,n){n.Z={btn_wrapper:"Button_btn_wrapper__ihT7O",btn_container:"Button_btn_container__OaH2t",create_btn_container:"Button_create_btn_container__JuZrx",upload_excel_file:"Button_upload_excel_file__a7d0K",set_btn_container:"Button_set_btn_container__RvfRG"}},51416:function(e,n){n.Z={square_tab_wrapper:"UiTab_square_tab_wrapper__Jxkmy",square_tab_card:"UiTab_square_tab_card__EYI-n",designation_tab_wrapper:"UiTab_designation_tab_wrapper__1YZQi",designation_tab_card:"UiTab_designation_tab_card__waJTM",rectangle_tab_wrapper:"UiTab_rectangle_tab_wrapper__a4CP7",rectangle_tab_card:"UiTab_rectangle_tab_card__xYxge",rectangle_tab_card_active:"UiTab_rectangle_tab_card_active__hSDaQ",horizontal_tab_wrapper:"UiTab_horizontal_tab_wrapper__BRXBX",horizontal_tab_card:"UiTab_horizontal_tab_card__pF03H",horizontal_tab_card_active:"UiTab_horizontal_tab_card_active__o32eJ",tile_container:"UiTab_tile_container__YqmHk",tile_tile_container:"UiTab_tile_tile_container__DlIa1",tile_tile:"UiTab_tile_tile__NcTNN",tile_tile_active:"UiTab_tile_tile_active__bo3c7",tile_label:"UiTab_tile_label__IV8Xu"}},59393:function(e,n){n.Z={user_member_header_wrapper:"UserMember_user_member_header_wrapper__GbnRw",umhw_cover:"UserMember_umhw_cover__9nFBA",umhw_cover_photo:"UserMember_umhw_cover_photo__SlMdy",umhw_cover_label:"UserMember_umhw_cover_label__3yZV3",umhw_cover_camera:"UserMember_umhw_cover_camera__vKOnO",umhw_info_container:"UserMember_umhw_info_container__ce+81",umhw_info_container_header:"UserMember_umhw_info_container_header__FD+-b",umhw_info_container_footer:"UserMember_umhw_info_container_footer__lVzFw",user_member_tabs_wrapper:"UserMember_user_member_tabs_wrapper__mhpkS",user_member_container_wrapper:"UserMember_user_member_container_wrapper__xbfdC",user_member_content_wrapper:"UserMember_user_member_content_wrapper__PP2xI",uf_link:"UserMember_uf_link__usZfM"}}}]);
//# sourceMappingURL=6568.d8583428.chunk.js.map
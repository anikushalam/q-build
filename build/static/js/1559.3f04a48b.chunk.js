"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[1559],{11559:function(e,l,a){a.r(l);var i=a(4942),o=a(1413),n=a(29439),v=a(56959),r=a(93638),t=a(61055),d=a(39230),u=a(55336),_=a(72791),c=a(36132),f=a(38668),s=a(20659),p=a(26071),m=a(80184);l.default=function(e){var l=e.leaveTypeToggle,a=e.instituteId,h=(0,d.$G)().t,y=(0,_.useState)({casual:{leave:2,approval:!1,forward:!1},medical:{leave:2,approval:!1,forward:!1},sick:{leave:2,approval:!1,forward:!1},commuted:{leave:2,approval:!1,forward:!1},maternity:{leave:2,approval:!1,forward:!1},paternity:{leave:2,approval:!1,forward:!1},quarantine:{leave:2,approval:!1,forward:!1},half:{leave:2,approval:!1,forward:!1},study:{leave:2,approval:!1,forward:!1},sabbatical:{leave:2,approval:!1,forward:!1},special:{leave:2,approval:!1,forward:!1},winter:{leave:2,approval:!1,forward:!1},summer:{leave:2,approval:!1,forward:!1},child:{leave:2,approval:!1,forward:!1},bereavement:{leave:2,approval:!1,forward:!1},earned:{leave:2,approval:!1,forward:!1}}),w=(0,n.Z)(y,2),j=w[0],x=w[1],Z=(0,_.useState)(!1),T=(0,n.Z)(Z,2),b=T[0],O=T[1],g=(0,c.P0)({data:{id:a},skip:!a}),k=g.lmsConfigMaster,C=g.lmsConfigMasterRefetch,F=(0,c.Qq)(),S=(0,n.Z)(F,1)[0];(0,_.useEffect)((function(){var e,l,a,i,o,n,v,r,t,d,u,_,c,f,s,p,m,h,y,w,j,Z,T,b,O,g,C,F,S,I,q,N,A,E,G,M,H,L,P,Q,R,U,Y,$,z,B,D,J;null!==k&&void 0!==k&&k.staff_leave_config&&x({casual:{leave:null===k||void 0===k||null===(e=k.staff_leave_config)||void 0===e?void 0:e.casual_leave,approval:null===k||void 0===k||null===(l=k.staff_leave_config)||void 0===l?void 0:l.casual_leave_approval,forward:null===k||void 0===k||null===(a=k.staff_leave_config)||void 0===a?void 0:a.casual_leave_forward},medical:{leave:null===k||void 0===k||null===(i=k.staff_leave_config)||void 0===i?void 0:i.medical_leave,approval:null===k||void 0===k||null===(o=k.staff_leave_config)||void 0===o?void 0:o.medical_leave_approval,forward:null===k||void 0===k||null===(n=k.staff_leave_config)||void 0===n?void 0:n.medical_leave_forward},sick:{leave:null===k||void 0===k||null===(v=k.staff_leave_config)||void 0===v?void 0:v.sick_leave,approval:null===k||void 0===k||null===(r=k.staff_leave_config)||void 0===r?void 0:r.sick_leave_approval,forward:null===k||void 0===k||null===(t=k.staff_leave_config)||void 0===t?void 0:t.sick_leave_forward},commuted:{leave:null===k||void 0===k||null===(d=k.staff_leave_config)||void 0===d?void 0:d.commuted_leave,approval:null===k||void 0===k||null===(u=k.staff_leave_config)||void 0===u?void 0:u.commuted_leave_approval,forward:null===k||void 0===k||null===(_=k.staff_leave_config)||void 0===_?void 0:_.commuted_leave_forward},maternity:{leave:null===k||void 0===k||null===(c=k.staff_leave_config)||void 0===c?void 0:c.maternity_leave,approval:null===k||void 0===k||null===(f=k.staff_leave_config)||void 0===f?void 0:f.maternity_leave_approval,forward:null===k||void 0===k||null===(s=k.staff_leave_config)||void 0===s?void 0:s.maternity_leave_forward},paternity:{leave:null===k||void 0===k||null===(p=k.staff_leave_config)||void 0===p?void 0:p.paternity_leave,approval:null===k||void 0===k||null===(m=k.staff_leave_config)||void 0===m?void 0:m.paternity_leave_approval,forward:null===k||void 0===k||null===(h=k.staff_leave_config)||void 0===h?void 0:h.paternity_leave_forward},quarantine:{leave:null===k||void 0===k||null===(y=k.staff_leave_config)||void 0===y?void 0:y.quarantine_leave,approval:null===k||void 0===k||null===(w=k.staff_leave_config)||void 0===w?void 0:w.quarantine_leave_approval,forward:null===k||void 0===k||null===(j=k.staff_leave_config)||void 0===j?void 0:j.quarantine_leave_forward},half:{leave:null===k||void 0===k||null===(Z=k.staff_leave_config)||void 0===Z?void 0:Z.half_pay_leave,approval:null===k||void 0===k||null===(T=k.staff_leave_config)||void 0===T?void 0:T.half_pay_leave_approval,forward:null===k||void 0===k||null===(b=k.staff_leave_config)||void 0===b?void 0:b.half_pay_leave_forward},study:{leave:null===k||void 0===k||null===(O=k.staff_leave_config)||void 0===O?void 0:O.study_leave,approval:null===k||void 0===k||null===(g=k.staff_leave_config)||void 0===g?void 0:g.study_leave_approval,forward:null===k||void 0===k||null===(C=k.staff_leave_config)||void 0===C?void 0:C.study_leave_forward},sabbatical:{leave:null===k||void 0===k||null===(F=k.staff_leave_config)||void 0===F?void 0:F.sabbatical_leave,approval:null===k||void 0===k||null===(S=k.staff_leave_config)||void 0===S?void 0:S.sabbatical_leave_approval,forward:null===k||void 0===k||null===(I=k.staff_leave_config)||void 0===I?void 0:I.sabbatical_leave_forward},special:{leave:null===k||void 0===k||null===(q=k.staff_leave_config)||void 0===q?void 0:q.special_disability_leave,approval:null===k||void 0===k||null===(N=k.staff_leave_config)||void 0===N?void 0:N.special_disability_leave_approval,forward:null===k||void 0===k||null===(A=k.staff_leave_config)||void 0===A?void 0:A.special_disability_leave_forward},winter:{leave:null===k||void 0===k||null===(E=k.staff_leave_config)||void 0===E?void 0:E.winter_vacation_leave,approval:null===k||void 0===k||null===(G=k.staff_leave_config)||void 0===G?void 0:G.winter_vacation_leave_approval,forward:null===k||void 0===k||null===(M=k.staff_leave_config)||void 0===M?void 0:M.winter_vacation_leave_forward},summer:{leave:null===k||void 0===k||null===(H=k.staff_leave_config)||void 0===H?void 0:H.summer_vacation_leave,approval:null===k||void 0===k||null===(L=k.staff_leave_config)||void 0===L?void 0:L.summer_vacation_leave_approval,forward:null===k||void 0===k||null===(P=k.staff_leave_config)||void 0===P?void 0:P.summer_vacation_leave_forward},child:{leave:null===k||void 0===k||null===(Q=k.staff_leave_config)||void 0===Q?void 0:Q.child_adoption_leave,approval:null===k||void 0===k||null===(R=k.staff_leave_config)||void 0===R?void 0:R.child_adoption_leave_approval,forward:null===k||void 0===k||null===(U=k.staff_leave_config)||void 0===U?void 0:U.child_adoption_leave_forward},bereavement:{leave:null===k||void 0===k||null===(Y=k.staff_leave_config)||void 0===Y?void 0:Y.bereavement_leave,approval:null===k||void 0===k||null===($=k.staff_leave_config)||void 0===$?void 0:$.bereavement_leave_approval,forward:null===k||void 0===k||null===(z=k.staff_leave_config)||void 0===z?void 0:z.bereavement_leave_forward},earned:{leave:null===k||void 0===k||null===(B=k.staff_leave_config)||void 0===B?void 0:B.earned_leave,approval:null===k||void 0===k||null===(D=k.staff_leave_config)||void 0===D?void 0:D.earned_leave_approval,forward:null===k||void 0===k||null===(J=k.staff_leave_config)||void 0===J?void 0:J.earned_leave_forward}})}),[null===k||void 0===k?void 0:k.staff_leave_config]);var I=function(e){+e.target.value&&x((function(l){return(0,o.Z)((0,o.Z)({},l),{},(0,i.Z)({},e.target.name,(0,o.Z)((0,o.Z)({},l[e.target.name]),{},{leave:+e.target.value})))}))},q=function(e,l){x((function(a){return(0,o.Z)((0,o.Z)({},a),{},(0,i.Z)({},e,(0,o.Z)((0,o.Z)({},a[e]),{},{forward:l})))}))},N=function(e,l){x((function(a){return(0,o.Z)((0,o.Z)({},a),{},(0,i.Z)({},e,(0,o.Z)((0,o.Z)({},a[e]),{},{approval:l})))}))};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("div",{className:v.Z.lms_rule_container,children:l?(0,m.jsxs)(m.Fragment,{children:[l.casual_leave&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(t.Z,{label:h("casual_leave"),placeholder:h("casual_leave_placeholder"),name:"casual",value:j.casual.leave,type:"tel",onChange:I,customFormInputContainer:{width:"40%"}}),(0,m.jsx)(s.Z,{label:"leave_carry_forward",customTileStyle:{width:"28%"},children:null===f.O_||void 0===f.O_?void 0:f.O_.map((function(e){var l;return(0,m.jsx)(p.Z,{tile:e,onTile:function(e){return q("casual",e)},activeTile:null===(l=j.casual)||void 0===l?void 0:l.forward},null===e||void 0===e?void 0:e.key)}))}),(0,m.jsx)(s.Z,{label:"leave_pre_approved",customTileStyle:{width:"28%"},children:null===f.O_||void 0===f.O_?void 0:f.O_.map((function(e){var l;return(0,m.jsx)(p.Z,{tile:e,onTile:function(e){return N("casual",e)},activeTile:null===(l=j.casual)||void 0===l?void 0:l.approval},null===e||void 0===e?void 0:e.key)}))})]}),l.medical_leave&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(t.Z,{label:h("medical_leave"),placeholder:h("medical_leave_placeholder"),name:"medical",value:j.medical.leave,type:"tel",onChange:I,customFormInputContainer:{width:"40%"}}),(0,m.jsx)(s.Z,{label:"leave_carry_forward",customTileStyle:{width:"28%"},children:null===f.O_||void 0===f.O_?void 0:f.O_.map((function(e){var l;return(0,m.jsx)(p.Z,{tile:e,onTile:function(e){return q("medical",e)},activeTile:null===(l=j.medical)||void 0===l?void 0:l.forward},null===e||void 0===e?void 0:e.key)}))}),(0,m.jsx)(s.Z,{label:"leave_pre_approved",customTileStyle:{width:"28%"},children:null===f.O_||void 0===f.O_?void 0:f.O_.map((function(e){var l;return(0,m.jsx)(p.Z,{tile:e,onTile:function(e){return N("medical",e)},activeTile:null===(l=j.medical)||void 0===l?void 0:l.approval},null===e||void 0===e?void 0:e.key)}))})]}),l.sick_leave&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(t.Z,{label:h("sick_leave"),placeholder:h("sick_leave_placeholder"),name:"sick",value:j.sick.leave,type:"tel",onChange:I,customFormInputContainer:{width:"40%"}}),(0,m.jsx)(s.Z,{label:"leave_carry_forward",customTileStyle:{width:"28%"},children:null===f.O_||void 0===f.O_?void 0:f.O_.map((function(e){var l;return(0,m.jsx)(p.Z,{tile:e,onTile:function(e){return q("sick",e)},activeTile:null===(l=j.sick)||void 0===l?void 0:l.forward},null===e||void 0===e?void 0:e.key)}))}),(0,m.jsx)(s.Z,{label:"leave_pre_approved",customTileStyle:{width:"28%"},children:null===f.O_||void 0===f.O_?void 0:f.O_.map((function(e){var l;return(0,m.jsx)(p.Z,{tile:e,onTile:function(e){return N("sick",e)},activeTile:null===(l=j.sick)||void 0===l?void 0:l.approval},null===e||void 0===e?void 0:e.key)}))})]}),l.commuted_leave&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(t.Z,{label:h("commuted_leave"),placeholder:h("commuted_leave_placeholder"),name:"commuted",value:j.commuted.leave,type:"tel",onChange:I,customFormInputContainer:{width:"40%"}}),(0,m.jsx)(s.Z,{label:"leave_carry_forward",customTileStyle:{width:"28%"},children:null===f.O_||void 0===f.O_?void 0:f.O_.map((function(e){var l;return(0,m.jsx)(p.Z,{tile:e,onTile:function(e){return q("commuted",e)},activeTile:null===(l=j.commuted)||void 0===l?void 0:l.forward},null===e||void 0===e?void 0:e.key)}))}),(0,m.jsx)(s.Z,{label:"leave_pre_approved",customTileStyle:{width:"28%"},children:null===f.O_||void 0===f.O_?void 0:f.O_.map((function(e){var l;return(0,m.jsx)(p.Z,{tile:e,onTile:function(e){return N("commuted",e)},activeTile:null===(l=j.commuted)||void 0===l?void 0:l.approval},null===e||void 0===e?void 0:e.key)}))})]}),l.maternity_leave&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(t.Z,{label:h("maternity_leave"),placeholder:h("maternity_leave_placeholder"),name:"maternity",value:j.maternity.leave,type:"tel",onChange:I,customFormInputContainer:{width:"40%"}}),(0,m.jsx)(s.Z,{label:"leave_carry_forward",customTileStyle:{width:"28%"},children:null===f.O_||void 0===f.O_?void 0:f.O_.map((function(e){var l;return(0,m.jsx)(p.Z,{tile:e,onTile:function(e){return q("maternity",e)},activeTile:null===(l=j.maternity)||void 0===l?void 0:l.forward},null===e||void 0===e?void 0:e.key)}))}),(0,m.jsx)(s.Z,{label:"leave_pre_approved",customTileStyle:{width:"28%"},children:null===f.O_||void 0===f.O_?void 0:f.O_.map((function(e){var l;return(0,m.jsx)(p.Z,{tile:e,onTile:function(e){return N("maternity",e)},activeTile:null===(l=j.maternity)||void 0===l?void 0:l.approval},null===e||void 0===e?void 0:e.key)}))})]}),l.paternity_leave&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(t.Z,{label:h("paternity_leave"),placeholder:h("paternity_leave_placeholder"),name:"paternity",value:j.paternity.leave,type:"tel",onChange:I,customFormInputContainer:{width:"40%"}}),(0,m.jsx)(s.Z,{label:"leave_carry_forward",customTileStyle:{width:"28%"},children:null===f.O_||void 0===f.O_?void 0:f.O_.map((function(e){var l;return(0,m.jsx)(p.Z,{tile:e,onTile:function(e){return q("paternity",e)},activeTile:null===(l=j.paternity)||void 0===l?void 0:l.forward},null===e||void 0===e?void 0:e.key)}))}),(0,m.jsx)(s.Z,{label:"leave_pre_approved",customTileStyle:{width:"28%"},children:null===f.O_||void 0===f.O_?void 0:f.O_.map((function(e){var l;return(0,m.jsx)(p.Z,{tile:e,onTile:function(e){return N("paternity",e)},activeTile:null===(l=j.paternity)||void 0===l?void 0:l.approval},null===e||void 0===e?void 0:e.key)}))})]}),l.quarantine_leave&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(t.Z,{label:h("quarantine_leave"),placeholder:h("quarantine_leave_placeholder"),name:"quarantine",value:j.quarantine.leave,type:"tel",onChange:I,customFormInputContainer:{width:"40%"}}),(0,m.jsx)(s.Z,{label:"leave_carry_forward",customTileStyle:{width:"28%"},children:null===f.O_||void 0===f.O_?void 0:f.O_.map((function(e){var l;return(0,m.jsx)(p.Z,{tile:e,onTile:function(e){return q("quarantine",e)},activeTile:null===(l=j.quarantine)||void 0===l?void 0:l.forward},null===e||void 0===e?void 0:e.key)}))}),(0,m.jsx)(s.Z,{label:"leave_pre_approved",customTileStyle:{width:"28%"},children:null===f.O_||void 0===f.O_?void 0:f.O_.map((function(e){var l;return(0,m.jsx)(p.Z,{tile:e,onTile:function(e){return N("quarantine",e)},activeTile:null===(l=j.quarantine)||void 0===l?void 0:l.approval},null===e||void 0===e?void 0:e.key)}))})]}),l.half_pay_leave&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(t.Z,{label:h("half_pay_leave"),placeholder:h("half_pay_leave_placeholder"),name:"half",value:j.half.leave,type:"tel",onChange:I,customFormInputContainer:{width:"40%"}}),(0,m.jsx)(s.Z,{label:"leave_carry_forward",customTileStyle:{width:"28%"},children:null===f.O_||void 0===f.O_?void 0:f.O_.map((function(e){var l;return(0,m.jsx)(p.Z,{tile:e,onTile:function(e){return q("half",e)},activeTile:null===(l=j.half)||void 0===l?void 0:l.forward},null===e||void 0===e?void 0:e.key)}))}),(0,m.jsx)(s.Z,{label:"leave_pre_approved",customTileStyle:{width:"28%"},children:null===f.O_||void 0===f.O_?void 0:f.O_.map((function(e){var l;return(0,m.jsx)(p.Z,{tile:e,onTile:function(e){return N("half",e)},activeTile:null===(l=j.half)||void 0===l?void 0:l.approval},null===e||void 0===e?void 0:e.key)}))})]}),l.study_leave&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(t.Z,{label:h("study_leave"),placeholder:h("study_leave_placeholder"),name:"study",value:j.study.leave,type:"tel",onChange:I,customFormInputContainer:{width:"40%"}}),(0,m.jsx)(s.Z,{label:"leave_carry_forward",customTileStyle:{width:"28%"},children:null===f.O_||void 0===f.O_?void 0:f.O_.map((function(e){var l;return(0,m.jsx)(p.Z,{tile:e,onTile:function(e){return q("study",e)},activeTile:null===(l=j.study)||void 0===l?void 0:l.forward},null===e||void 0===e?void 0:e.key)}))}),(0,m.jsx)(s.Z,{label:"leave_pre_approved",customTileStyle:{width:"28%"},children:null===f.O_||void 0===f.O_?void 0:f.O_.map((function(e){var l;return(0,m.jsx)(p.Z,{tile:e,onTile:function(e){return N("study",e)},activeTile:null===(l=j.study)||void 0===l?void 0:l.approval},null===e||void 0===e?void 0:e.key)}))})]}),l.sabbatical_leave&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(t.Z,{label:h("sabbatical_leave"),placeholder:h("sabbatical_leave_placeholder"),name:"sabbatical",value:j.sabbatical.leave,type:"tel",onChange:I,customFormInputContainer:{width:"40%"}}),(0,m.jsx)(s.Z,{label:"leave_carry_forward",customTileStyle:{width:"28%"},children:null===f.O_||void 0===f.O_?void 0:f.O_.map((function(e){var l;return(0,m.jsx)(p.Z,{tile:e,onTile:function(e){return q("sabbatical",e)},activeTile:null===(l=j.sabbatical)||void 0===l?void 0:l.forward},null===e||void 0===e?void 0:e.key)}))}),(0,m.jsx)(s.Z,{label:"leave_pre_approved",customTileStyle:{width:"28%"},children:null===f.O_||void 0===f.O_?void 0:f.O_.map((function(e){var l;return(0,m.jsx)(p.Z,{tile:e,onTile:function(e){return N("sabbatical",e)},activeTile:null===(l=j.sabbatical)||void 0===l?void 0:l.approval},null===e||void 0===e?void 0:e.key)}))})]}),l.special_disability_leave&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(t.Z,{label:h("special_disability_leave"),placeholder:h("special_disability_leave_placeholder"),name:"special",value:j.special.leave,type:"tel",onChange:I,customFormInputContainer:{width:"40%"}}),(0,m.jsx)(s.Z,{label:"leave_carry_forward",customTileStyle:{width:"28%"},children:null===f.O_||void 0===f.O_?void 0:f.O_.map((function(e){var l;return(0,m.jsx)(p.Z,{tile:e,onTile:function(e){return q("special",e)},activeTile:null===(l=j.special)||void 0===l?void 0:l.forward},null===e||void 0===e?void 0:e.key)}))}),(0,m.jsx)(s.Z,{label:"leave_pre_approved",customTileStyle:{width:"28%"},children:null===f.O_||void 0===f.O_?void 0:f.O_.map((function(e){var l;return(0,m.jsx)(p.Z,{tile:e,onTile:function(e){return N("special",e)},activeTile:null===(l=j.special)||void 0===l?void 0:l.approval},null===e||void 0===e?void 0:e.key)}))})]}),l.winter_vacation_leave&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(t.Z,{label:h("winter_vacation_leave"),placeholder:h("winter_vacation_leave_placeholder"),name:"winter",value:j.winter.leave,type:"tel",onChange:I,customFormInputContainer:{width:"40%"}}),(0,m.jsx)(s.Z,{label:"leave_carry_forward",customTileStyle:{width:"28%"},children:null===f.O_||void 0===f.O_?void 0:f.O_.map((function(e){var l;return(0,m.jsx)(p.Z,{tile:e,onTile:function(e){return q("winter",e)},activeTile:null===(l=j.winter)||void 0===l?void 0:l.forward},null===e||void 0===e?void 0:e.key)}))}),(0,m.jsx)(s.Z,{label:"leave_pre_approved",customTileStyle:{width:"28%"},children:null===f.O_||void 0===f.O_?void 0:f.O_.map((function(e){var l;return(0,m.jsx)(p.Z,{tile:e,onTile:function(e){return N("winter",e)},activeTile:null===(l=j.winter)||void 0===l?void 0:l.approval},null===e||void 0===e?void 0:e.key)}))})]}),l.summer_vacation_leave&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(t.Z,{label:h("summer_vacation_leave"),placeholder:h("summer_vacation_leave_placeholder"),name:"summer",value:j.summer.leave,type:"tel",onChange:I,customFormInputContainer:{width:"40%"}}),(0,m.jsx)(s.Z,{label:"leave_carry_forward",customTileStyle:{width:"28%"},children:null===f.O_||void 0===f.O_?void 0:f.O_.map((function(e){var l;return(0,m.jsx)(p.Z,{tile:e,onTile:function(e){return q("summer",e)},activeTile:null===(l=j.summer)||void 0===l?void 0:l.forward},null===e||void 0===e?void 0:e.key)}))}),(0,m.jsx)(s.Z,{label:"leave_pre_approved",customTileStyle:{width:"28%"},children:null===f.O_||void 0===f.O_?void 0:f.O_.map((function(e){var l;return(0,m.jsx)(p.Z,{tile:e,onTile:function(e){return N("summer",e)},activeTile:null===(l=j.summer)||void 0===l?void 0:l.approval},null===e||void 0===e?void 0:e.key)}))})]}),l.child_adoption_leave&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(t.Z,{label:h("child_adoption_leave"),placeholder:h("child_adoption_leave_placeholder"),name:"child",value:j.child.leave,type:"tel",onChange:I,customFormInputContainer:{width:"40%"}}),(0,m.jsx)(s.Z,{label:"leave_carry_forward",customTileStyle:{width:"28%"},children:null===f.O_||void 0===f.O_?void 0:f.O_.map((function(e){var l;return(0,m.jsx)(p.Z,{tile:e,onTile:function(e){return q("child",e)},activeTile:null===(l=j.child)||void 0===l?void 0:l.forward},null===e||void 0===e?void 0:e.key)}))}),(0,m.jsx)(s.Z,{label:"leave_pre_approved",customTileStyle:{width:"28%"},children:null===f.O_||void 0===f.O_?void 0:f.O_.map((function(e){var l;return(0,m.jsx)(p.Z,{tile:e,onTile:function(e){return N("child",e)},activeTile:null===(l=j.child)||void 0===l?void 0:l.approval},null===e||void 0===e?void 0:e.key)}))})]}),l.bereavement_leave&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(t.Z,{label:h("bereavement_leave"),placeholder:h("bereavement_leave_placeholder"),name:"bereavement",value:j.bereavement.leave,type:"tel",onChange:I,customFormInputContainer:{width:"40%"}}),(0,m.jsx)(s.Z,{label:"leave_carry_forward",customTileStyle:{width:"28%"},children:null===f.O_||void 0===f.O_?void 0:f.O_.map((function(e){var l;return(0,m.jsx)(p.Z,{tile:e,onTile:function(e){return q("bereavement",e)},activeTile:null===(l=j.bereavement)||void 0===l?void 0:l.forward},null===e||void 0===e?void 0:e.key)}))}),(0,m.jsx)(s.Z,{label:"leave_pre_approved",customTileStyle:{width:"28%"},children:null===f.O_||void 0===f.O_?void 0:f.O_.map((function(e){var l;return(0,m.jsx)(p.Z,{tile:e,onTile:function(e){return N("bereavement",e)},activeTile:null===(l=j.bereavement)||void 0===l?void 0:l.approval},null===e||void 0===e?void 0:e.key)}))})]}),l.leave_taken&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(t.Z,{label:h("earned_leave"),placeholder:h("earned_leave_placeholder"),name:"earned",value:j.earned.leave,type:"tel",onChange:I,customFormInputContainer:{width:"40%"}}),(0,m.jsx)(s.Z,{label:"leave_carry_forward",customTileStyle:{width:"28%"},children:null===f.O_||void 0===f.O_?void 0:f.O_.map((function(e){var l;return(0,m.jsx)(p.Z,{tile:e,onTile:function(e){return q("earned",e)},activeTile:null===(l=j.earned)||void 0===l?void 0:l.forward},null===e||void 0===e?void 0:e.key)}))}),(0,m.jsx)(s.Z,{label:"leave_pre_approved",customTileStyle:{width:"28%"},children:null===f.O_||void 0===f.O_?void 0:f.O_.map((function(e){var l;return(0,m.jsx)(p.Z,{tile:e,onTile:function(e){return N("earned",e)},activeTile:null===(l=j.earned)||void 0===l?void 0:l.approval},null===e||void 0===e?void 0:e.key)}))})]})]}):null}),(0,m.jsx)(r.Z,{label:h("update"),onAction:function(){a&&S({flow:"NON_TEACHING_FACULTY",id:a,leaveCount:j}).then((function(){C(),O((function(e){return!e}))})).catch({})}}),b&&(0,m.jsx)(u.Z,{})]})}}}]);
//# sourceMappingURL=1559.3f04a48b.chunk.js.map
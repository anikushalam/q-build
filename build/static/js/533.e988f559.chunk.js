"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[533],{57387:function(e,i,t){var n=t(1413),s=(t(72791),t(49384)),l=t(78499),d=t(80184);i.Z=function(e){var i=e.buttonText,t=e.disabled,a=e.customStyleButton,o=e.customStyleButtonText,r=e.onAction,c=e.shwoLoader;return(0,d.jsxs)("button",{disabled:t,style:(0,n.Z)({},a),className:l.Z.button_main,onClick:r,children:[(0,d.jsx)("span",{style:(0,n.Z)({},o),children:i}),t&&c&&(0,d.jsx)("div",{style:{marginTop:"0.7vw"},children:(0,d.jsx)(s.Z,{})})]})}},533:function(e,i,t){t.r(i);var n=t(1413),s=t(29439),l=t(72791),d=t(89846),a=t(39230),o=t(5574),r=(t(89063),t(39480)),c=t(57387),p=t(80184);i.default=function(e){var i=e.editDisplay,t=e.hideModal,u=e.name,y=e.dsignation,_=e.displayUserId,x=e.userId,h=e.refetch,f=(0,a.$G)().t,m=(0,l.useState)(!1),v=(0,s.Z)(m,2),g=v[0],j=v[1],D=(0,r.qT)(),Z=(0,s.Z)(D,1)[0],I=(0,l.useState)({did:"",displayTitle:"",displayUser:""}),b=(0,s.Z)(I,2),T=b[0],A=b[1];(0,l.useEffect)((function(){A({displayTitle:y,did:_,displayUser:x})}),[x]);var z=function(){j((function(e){return!e})),Z(T).then((function(e){"update Display Person"===e.data.message&&(h(),t(!1),j((function(e){return!e})))}))};return(0,p.jsx)(o.Z,{open:i,onClose:function(){t(!1)},children:(0,p.jsxs)("div",{className:d.Z.addDisplay,style:{zIndex:"58"},children:[(0,p.jsxs)("div",{className:d.Z.title,style:{zIndex:"58"},children:[(0,p.jsx)("h6",{style:{zIndex:"58"},children:f("edit_display")}),(0,p.jsx)("img",{alt:"close",src:"/images/close-post-icon.svg",onClick:function(){return t(!1)}})]}),(0,p.jsxs)("div",{style:{zIndex:"58"},className:d.Z.content,children:[(0,p.jsxs)("div",{style:{zIndex:"58"},className:d.Z.item,children:[(0,p.jsx)("label",{style:{zIndex:"58"},children:f("name")}),(0,p.jsx)("input",{style:{zIndex:"58"},type:"text",placeholder:u,disabled:!0})]}),(0,p.jsxs)("div",{style:{zIndex:"58",marginTop:"1vw",marginBottom:"1.5vw"},className:d.Z.item,children:[(0,p.jsx)("label",{style:{zIndex:"58"},children:f("new_desig")}),(0,p.jsx)("input",{style:{zIndex:"58"},type:"text",value:T.displayTitle,onChange:function(e){return A((0,n.Z)((0,n.Z)({},T),{},{displayTitle:e.target.value}))}})]}),(0,p.jsx)("div",{style:{position:"relative",zIndex:"58"},onClick:z,children:(0,p.jsx)(c.Z,{buttonText:f("edit_"),disabled:g,shwoLoader:!0,onAction:z})})]})]})})}},49384:function(e,i,t){t.d(i,{Z:function(){return l}});t(72791);var n=t(6307),s=t(80184),l=function(){return(0,s.jsx)(n.iT,{ariaLabel:"loading-indicator",height:20,width:20,color:"white",secondaryColor:"#1c023b"})}},89063:function(){},89846:function(e,i){i.Z={addDisplay:"AddDisplay_addDisplay__9qpWF",title:"AddDisplay_title__hJ7Ra",content:"AddDisplay_content__eardR",item:"AddDisplay_item__1YmlA",item1:"AddDisplay_item1__IbsKM",select:"AddDisplay_select__7xu4p",profileToolTip:"AddDisplay_profileToolTip__-Iygl",triangle:"AddDisplay_triangle__WIVE8",triangleDisplay:"AddDisplay_triangleDisplay__Y2YDp",optionLang:"AddDisplay_optionLang__OkqBG",profilelist:"AddDisplay_profilelist__Yj6za"}}}]);
//# sourceMappingURL=533.e988f559.chunk.js.map
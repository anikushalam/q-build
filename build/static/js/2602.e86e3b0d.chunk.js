"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[2602],{2602:function(t,n,e){e.r(n),e.d(n,{default:function(){return g}});var r=e(29439),i=e(72791),u=e(95048),o=e(16256),c=e(39480),a=e(9447),s=e(12923),f=e(70092),l="Menu_profileToolTip__syFxM",d="Menu_profileToolTipPopup__BnSgN",p="Menu_triangle__drjgu",v="Menu_trianglePopup__CdR-r",h="Menu_triangleNotPopup__FxBQr",_="Menu_profilelist__gZkQm",k=e(39230),m=e(80184);var g=function(t){var n=t.options,e=t.authorId,g=t.setDotsClicked,w=t.pid,Z=t.postType,y=t.status,S=t.commentStatus,L=t.allPosts,R=t.popup,x=(0,k.$G)().t,O=(0,u.v9)((function(t){return t.idChange})),A=i.useState(!0),F=(0,r.Z)(A,2),M=F[0],I=F[1],P=(0,u.I0)(),C=(0,s.yx)(),N=(0,r.Z)(C,1)[0],T=(0,a.z$)(),U=(0,r.Z)(T,1)[0],j=(0,a.MB)(),z=(0,r.Z)(j,1)[0],b=(0,a.IG)(),B=(0,r.Z)(b,1)[0],E=(0,a.bB)(),J=(0,r.Z)(E,1)[0],D=(0,c.p0)({data:{id:null===O||void 0===O?void 0:O.id,type:"ID"},skip:M}).oneInstituteProfileRefetch,Q=(0,i.useRef)(null),G=function(t){if("post_unfollow"===t){var n=function(t){for(var n=[],e=0;e<(null===L||void 0===L?void 0:L.length);e++)L[e].author!==t&&n.push(L[e]);return n}(e);P(f.p.unfollowPost({posts:n})),g(!1),N({followId:e}).then((function(){})).catch({})}else"post_visibility"===t?(P(f.p.changeVisibility({pid:w,status:"Anyone"===y?"Private":"Anyone"})),g(!1),U({pid:w,viewAs:o.UJ,postUpdate:{postStatus:"Anyone"===y?"Private":"Anyone"}}).then((function(){})).catch({})):"post_delete"===t?(P(f.p.deletePost({pid:w})),g(!1),"Question"===Z?B({id:null===O||void 0===O?void 0:O.id,viewAs:o.UJ,pid:w}).then((function(){})).catch({}):z({id:null===O||void 0===O?void 0:O.id,viewAs:o.UJ,pid:w}).then((function(){I(!1),D()})).catch({})):"turn_off_comment"===t&&(P(f.p.turnOffComment({pid:w,status:"On"===S?"Off":"On"})),g(!1),J({pid:w,commentFeature:{comment_turned:"On"===S?"Off":"On"}}).then((function(){})).catch({}))},H=function(t){t.target.style.zIndex&&"50"===t.target.style.zIndex||g(!1)};return(0,i.useEffect)((function(){return document.addEventListener("click",H,!0),function(){document.removeEventListener("click",H,!0)}}),[]),(0,m.jsxs)("div",{className:R?"".concat(l," ").concat(d):l,id:"menuTooltip",children:[(0,m.jsx)("div",{className:R?"".concat(p," ").concat(v):"".concat(p," ").concat(h)}),(0,m.jsx)("div",{className:_,children:n.map((function(t,n){return(0,m.jsx)("div",{ref:Q,style:{zIndex:"50"},value:t,onClick:function(){return G(t)},children:x(t)},n)}))})]})}},12923:function(t,n,e){e.d(n,{Ec:function(){return w},Em:function(){return S},JM:function(){return v},NS:function(){return o},Pg:function(){return h},Q_:function(){return g},RH:function(){return p},Tv:function(){return s},U_:function(){return m},VN:function(){return c},Wj:function(){return l},ZS:function(){return d},_8:function(){return Z},d5:function(){return f},tB:function(){return k},vI:function(){return y},yx:function(){return a},zO:function(){return _}});var r=e(29439),i=e(91007),u=e(58208),o=function(t){var n=(0,u.YD)(t.search,{skip:t.skip});return{instituteAllSearch:n.data,instituteAllSearchRefetch:n.refetch}},c=function(){var t=(0,u.ak)();return[(0,r.Z)(t,1)[0]]},a=function(){var t=(0,u.WL)();return[(0,r.Z)(t,1)[0]]},s=function(t){var n=(0,u.pH)(t.list,{skip:t.skip});return{instituteFollowList:n.data,instituteFollowListRefetch:n.refetch}},f=function(t){var n=(0,u.MG)(t.data,{skip:t.skip});return{instituteOwnFollowingList:n.data,instituteOwnFollowingListRefetch:n.refetch}},l=function(){var t=(0,u.Ky)();return[(0,r.Z)(t,1)[0]]},d=function(t){var n=(0,u.p8)(t.list);return{userFollowList:n.data,userFollowListRefetch:n.refetch}},p=function(t){var n=(0,u.Wv)(t);return{userFollowingList:n.data,userFollowingListRefetch:n.refetch}},v=function(t){var n=(0,u.sz)(t.search,{skip:t.skip});return{userAllSearch:n.data,userAllSearchRefetch:n.refetch}},h=function(){var t=(0,u.Mk)();return[(0,r.Z)(t,1)[0]]},_=function(){var t=(0,u.$i)();return[(0,r.Z)(t,1)[0]]},k=function(){var t=(0,u.Do)();return[(0,r.Z)(t,1)[0]]},m=function(){var t=(0,u.He)();return[(0,r.Z)(t,1)[0]]},g=function(){var t=(0,u.vg)();return[(0,r.Z)(t,1)[0]]},w=function(){var t=(0,u.OO)();return[(0,r.Z)(t,1)[0]]},Z=function(t){var n=(0,u.N2)(t);return{userCircleList:n.data,userCircleListRefetch:n.refetch}},y=function(t){var n=(0,i.x6)(t.search,{skip:t.skip});return{assignSearchStaff:n.data,assignSearchStaffRefetch:n.refetch}},S=function(t){var n=(0,u.SJ)(t);return{universalUser:n.data,universalUserRefetch:n.refetch}}}}]);
//# sourceMappingURL=2602.e86e3b0d.chunk.js.map
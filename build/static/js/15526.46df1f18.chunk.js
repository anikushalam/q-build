(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[15526,54035,20420,31743],{34219:function(t,e,n){"use strict";n(72791);var i=n(11575),r=n(80184);e.Z=function(t){var e=t.customStyleContainer,n=t.title,s=t.subtitle,a=t.costomTextTitleStyle,o=t.costomTextSubtitleStyle;return(0,r.jsxs)("div",{className:i.Z.empty_container,style:e,children:[n&&(0,r.jsx)("h6",{style:a,children:n}),s&&(0,r.jsx)("p",{style:o,children:s})]})}},2926:function(t,e,n){"use strict";var i=n(97892),r=n.n(i),s=n(82824),a=n(16925),o=n(39230),u=n(72791),c=n(16871),l=n(43504),d=n(69721),_=n(80184);e.Z=function(t){var e,n,i,f,h,m,v=t.data,g=(0,o.$G)().t,$=(0,c.UO)();return(0,_.jsx)(l.rU,{to:"/q/".concat($.username,"/notifications?a=student-messaage-detail"),state:{data:v},children:(0,_.jsx)("div",{className:a.Z.student_message_container,children:(0,_.jsxs)("div",{className:a.Z.student_message_container_inner,style:{width:"100%"},children:[(0,_.jsxs)("div",{className:a.Z.usm_institute_container,children:[(0,_.jsxs)("div",{className:a.Z.usm_institute,children:[(0,_.jsx)("img",{src:null!==v&&void 0!==v&&null!==(e=v.institute)&&void 0!==e&&e.insProfilePhoto?"".concat(d.yI,"/").concat(null===v||void 0===v||null===(n=v.institute)||void 0===n?void 0:n.insProfilePhoto):"/images/ins_default_profile.svg",alt:"icon"}),(0,_.jsxs)("div",{className:a.Z.student_message_container_inner,children:[(0,_.jsx)("h6",{children:null!==(i=null===v||void 0===v||null===(f=v.institute)||void 0===f?void 0:f.insName)&&void 0!==i?i:"ALD University"}),(0,_.jsxs)("p",{children:[r()(null===v||void 0===v?void 0:v.created_at).format("DD MMM, YYYY"),", ",(0,s.J)(null===v||void 0===v?void 0:v.created_at,"LT")]})]})]}),"STUDENT_REMINDER"===v.message_mode?(0,_.jsx)("div",{className:a.Z.student_message_container_inner,children:(0,_.jsx)("p",{style:{marginTop:"0.4rem"},children:g("os_fees_reminder")})}):null]}),(0,_.jsx)("h6",{style:{whiteSpace:"break-spaces"},children:null!==v&&void 0!==v&&v.message_title?null===v||void 0===v||null===(h=v.message_title)||void 0===h||null===(m=h.split(" "))||void 0===m?void 0:m.map((function(t,e){return null!==t&&void 0!==t&&t.includes("http://")||null!==t&&void 0!==t&&t.includes("https://")?(0,_.jsxs)("a",{href:"".concat(t),target:"_blank",rel:"noopener noreferrer",style:{color:"#436dfa",textDecoration:"none"},children:[t," "]},e):(0,_.jsxs)(u.Fragment,{children:[t," "]},e)})):""})]})})})}},15526:function(t,e,n){"use strict";n.r(e);var i=n(93433),r=n(29439),s=n(72791),a=n(23441),o=n(96065),u=n(95048),c=n(11105),l=n(34219),d=n(56536),_=n(2926),f=n(80184);e.default=function(){var t,e=s.useState([]),n=(0,r.Z)(e,2),h=n[0],m=n[1],v=(0,a.YD)(),g=(0,r.Z)(v,2),$=g[0],y=g[1],M=s.useState(!0),p=(0,r.Z)(M,2),D=p[0],S=p[1],Y=s.useState(1),x=(0,r.Z)(Y,2),w=x[0],b=x[1],I=(0,u.v9)((function(t){return t.idChange})),Z=s.useState(!0),j=(0,r.Z)(Z,2),L=j[0],O=j[1],T=(0,o.vW)({data:{uid:null===I||void 0===I?void 0:I.id,page:w,limit:10},skip:!(null!==I&&void 0!==I&&I.id)}),k=T.getNotificationAllStudentMessage,A=T.getNotificationAllStudentMessageRefetch;return s.useEffect((function(){null!==I&&void 0!==I&&I.id&&(O(!0),A())}),[null===I||void 0===I?void 0:I.id,w,A]),s.useEffect((function(){y&&D&&b((function(t){return t+1}))}),[y,D]),s.useEffect((function(){var t;if(null!==k&&void 0!==k&&k.all_message){var e=[].concat((0,i.Z)(h),(0,i.Z)(null===k||void 0===k?void 0:k.all_message)),n=(0,i.Z)(new Set(e.map(JSON.stringify))).map(JSON.parse);m(n),O(!1)}else 0===(null===k||void 0===k||null===(t=k.all_message)||void 0===t?void 0:t.length)&&O(!1);10===(null===k||void 0===k?void 0:k.all_message.length)?S(!0):S(!1)}),[null===k||void 0===k?void 0:k.all_message]),(0,f.jsxs)("div",{className:d.Z.activity_caontainer,children:[null===h||void 0===h?void 0:h.map((function(t,e){return(null===h||void 0===h?void 0:h.length)===e+1?(0,f.jsx)("div",{ref:$,children:(0,f.jsx)(_.Z,{data:t})},e):(0,f.jsx)(_.Z,{data:t},e)})),L&&(0,f.jsx)(c.Z,{}),!L&&!(null!==k&&void 0!==k&&null!==(t=k.all_message)&&void 0!==t&&t.length)&&(0,f.jsx)(l.Z,{customStyleContainer:{marginTop:"5rem",height:"inherit"},title:"No any message found"})]})}},82824:function(t,e,n){"use strict";n.d(e,{J:function(){return o},Z:function(){return u}});var i=n(99893),r=n.n(i),s=n(97892),a=n.n(s),o=function(t,e){return a().extend(r()),a()(t).format(e)},u=function(t,e,n){var i;return a()()[t]("".concat(null===(i=a()(n))||void 0===i?void 0:i.format("YYYY-MM-DD")),e)}},97892:function(t){t.exports=function(){"use strict";var t=1e3,e=6e4,n=36e5,i="millisecond",r="second",s="minute",a="hour",o="day",u="week",c="month",l="quarter",d="year",_="date",f="Invalid Date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,v={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},g=function(t,e,n){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(n)+t},$={s:g,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),i=Math.floor(n/60),r=n%60;return(e<=0?"+":"-")+g(i,2,"0")+":"+g(r,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var i=12*(n.year()-e.year())+(n.month()-e.month()),r=e.clone().add(i,c),s=n-r<0,a=e.clone().add(i+(s?-1:1),c);return+(-(i+(n-r)/(s?r-a:a-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:d,w:u,d:o,D:_,h:a,m:s,s:r,ms:i,Q:l}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",M={};M[y]=v;var p="$isDayjsObject",D=function(t){return t instanceof w||!(!t||!t[p])},S=function t(e,n,i){var r;if(!e)return y;if("string"==typeof e){var s=e.toLowerCase();M[s]&&(r=s),n&&(M[s]=n,r=s);var a=e.split("-");if(!r&&a.length>1)return t(a[0])}else{var o=e.name;M[o]=e,r=o}return!i&&r&&(y=r),r||!i&&y},Y=function(t,e){if(D(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new w(n)},x=$;x.l=S,x.i=D,x.w=function(t,e){return Y(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var w=function(){function v(t){this.$L=S(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[p]=!0}var g=v.prototype;return g.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(x.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(h);if(i){var r=i[2]-1||0,s=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)):new Date(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)}}return new Date(e)}(t),this.init()},g.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},g.$utils=function(){return x},g.isValid=function(){return!(this.$d.toString()===f)},g.isSame=function(t,e){var n=Y(t);return this.startOf(e)<=n&&n<=this.endOf(e)},g.isAfter=function(t,e){return Y(t)<this.startOf(e)},g.isBefore=function(t,e){return this.endOf(e)<Y(t)},g.$g=function(t,e,n){return x.u(t)?this[e]:this.set(n,t)},g.unix=function(){return Math.floor(this.valueOf()/1e3)},g.valueOf=function(){return this.$d.getTime()},g.startOf=function(t,e){var n=this,i=!!x.u(e)||e,l=x.p(t),f=function(t,e){var r=x.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return i?r:r.endOf(o)},h=function(t,e){return x.w(n.toDate()[t].apply(n.toDate("s"),(i?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},m=this.$W,v=this.$M,g=this.$D,$="set"+(this.$u?"UTC":"");switch(l){case d:return i?f(1,0):f(31,11);case c:return i?f(1,v):f(0,v+1);case u:var y=this.$locale().weekStart||0,M=(m<y?m+7:m)-y;return f(i?g-M:g+(6-M),v);case o:case _:return h($+"Hours",0);case a:return h($+"Minutes",1);case s:return h($+"Seconds",2);case r:return h($+"Milliseconds",3);default:return this.clone()}},g.endOf=function(t){return this.startOf(t,!1)},g.$set=function(t,e){var n,u=x.p(t),l="set"+(this.$u?"UTC":""),f=(n={},n[o]=l+"Date",n[_]=l+"Date",n[c]=l+"Month",n[d]=l+"FullYear",n[a]=l+"Hours",n[s]=l+"Minutes",n[r]=l+"Seconds",n[i]=l+"Milliseconds",n)[u],h=u===o?this.$D+(e-this.$W):e;if(u===c||u===d){var m=this.clone().set(_,1);m.$d[f](h),m.init(),this.$d=m.set(_,Math.min(this.$D,m.daysInMonth())).$d}else f&&this.$d[f](h);return this.init(),this},g.set=function(t,e){return this.clone().$set(t,e)},g.get=function(t){return this[x.p(t)]()},g.add=function(i,l){var _,f=this;i=Number(i);var h=x.p(l),m=function(t){var e=Y(f);return x.w(e.date(e.date()+Math.round(t*i)),f)};if(h===c)return this.set(c,this.$M+i);if(h===d)return this.set(d,this.$y+i);if(h===o)return m(1);if(h===u)return m(7);var v=(_={},_[s]=e,_[a]=n,_[r]=t,_)[h]||1,g=this.$d.getTime()+i*v;return x.w(g,this)},g.subtract=function(t,e){return this.add(-1*t,e)},g.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var i=t||"YYYY-MM-DDTHH:mm:ssZ",r=x.z(this),s=this.$H,a=this.$m,o=this.$M,u=n.weekdays,c=n.months,l=n.meridiem,d=function(t,n,r,s){return t&&(t[n]||t(e,i))||r[n].slice(0,s)},_=function(t){return x.s(s%12||12,t,"0")},h=l||function(t,e,n){var i=t<12?"AM":"PM";return n?i.toLowerCase():i};return i.replace(m,(function(t,i){return i||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return x.s(e.$y,4,"0");case"M":return o+1;case"MM":return x.s(o+1,2,"0");case"MMM":return d(n.monthsShort,o,c,3);case"MMMM":return d(c,o);case"D":return e.$D;case"DD":return x.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return d(n.weekdaysMin,e.$W,u,2);case"ddd":return d(n.weekdaysShort,e.$W,u,3);case"dddd":return u[e.$W];case"H":return String(s);case"HH":return x.s(s,2,"0");case"h":return _(1);case"hh":return _(2);case"a":return h(s,a,!0);case"A":return h(s,a,!1);case"m":return String(a);case"mm":return x.s(a,2,"0");case"s":return String(e.$s);case"ss":return x.s(e.$s,2,"0");case"SSS":return x.s(e.$ms,3,"0");case"Z":return r}return null}(t)||r.replace(":","")}))},g.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},g.diff=function(i,_,f){var h,m=this,v=x.p(_),g=Y(i),$=(g.utcOffset()-this.utcOffset())*e,y=this-g,M=function(){return x.m(m,g)};switch(v){case d:h=M()/12;break;case c:h=M();break;case l:h=M()/3;break;case u:h=(y-$)/6048e5;break;case o:h=(y-$)/864e5;break;case a:h=y/n;break;case s:h=y/e;break;case r:h=y/t;break;default:h=y}return f?h:x.a(h)},g.daysInMonth=function(){return this.endOf(c).$D},g.$locale=function(){return M[this.$L]},g.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),i=S(t,e,!0);return i&&(n.$L=i),n},g.clone=function(){return x.w(this.$d,this)},g.toDate=function(){return new Date(this.valueOf())},g.toJSON=function(){return this.isValid()?this.toISOString():null},g.toISOString=function(){return this.$d.toISOString()},g.toString=function(){return this.$d.toUTCString()},v}(),b=w.prototype;return Y.prototype=b,[["$ms",i],["$s",r],["$m",s],["$H",a],["$W",o],["$M",c],["$y",d],["$D",_]].forEach((function(t){b[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),Y.extend=function(t,e){return t.$i||(t(e,w,Y),t.$i=!0),Y},Y.locale=S,Y.isDayjs=D,Y.unix=function(t){return Y(1e3*t)},Y.en=M[y],Y.Ls=M,Y.p={},Y}()},99893:function(t){t.exports=function(){"use strict";var t={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};return function(e,n,i){var r=n.prototype,s=r.format;i.en.formats=t,r.format=function(e){void 0===e&&(e="YYYY-MM-DDTHH:mm:ssZ");var n=this.$locale().formats,i=function(e,n){return e.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(e,i,r){var s=r&&r.toUpperCase();return i||n[r]||t[r]||n[s].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(t,e,n){return e||n.slice(1)}))}))}(e,void 0===n?{}:n);return s.call(this,i)}}}()},56536:function(t,e){"use strict";e.Z={item:"Activity_item__SYfQQ",item_active:"Activity_item_active__L-dfD",text:"Activity_text__UVUHS",textlast:"Activity_textlast__X2jdR",btn:"Activity_btn__OymPs",eachItem:"Activity_eachItem__bH2hN",eachItemleft:"Activity_eachItemleft__epg0F",seating_container:"Activity_seating_container__a2ql3",you_have_a_supervision_on:"Activity_you_have_a_supervision_on__WXb2c",seating_block_container_top:"Activity_seating_block_container_top__XF1oh",view_more_btn:"Activity_view_more_btn__0EUNZ"}},16925:function(t,e){"use strict";e.Z={right:"Income_right__XnzYj",rightHead:"Income_rightHead__1rLc6",rightBody:"Income_rightBody__fGEC5",income_detail:"Income_income_detail__IWoJa",detailTop:"Income_detailTop__4JXuu",detailTopMid:"Income_detailTopMid__yc2yv",modal_container:"Income_modal_container__HiGr+",modal_container_outer_header:"Income_modal_container_outer_header__F9c7X",modal_container_header:"Income_modal_container_header__td-Fb",card_container:"Income_card_container__ewKhQ",card_container_image:"Income_card_container_image__5XloP",card_container_inner:"Income_card_container_inner__JBmxr",admission_fees_row:"Income_admission_fees_row__MPJCs",close_icon:"Income_close_icon__Ozq4u",student_message_container:"Income_student_message_container__8KnPc",student_message_container_inner:"Income_student_message_container_inner__mRYpD",usm_institute_container:"Income_usm_institute_container__4LkYt",usm_institute:"Income_usm_institute__hlzdF",date_select:"Income_date_select__D3VkU",gsf_star_container:"Income_gsf_star_container__7gdUs"}}}]);
//# sourceMappingURL=15526.46df1f18.chunk.js.map
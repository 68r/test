(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{301:function(e,t,n){e.exports=n.p+"img/edpuzzle.6b71543.svg"},361:function(e,t,n){n(362)},362:function(e,t,n){"use strict";var r=n(7),l=n(2),o=n(10),c=n(4),d=n(24),m=n(8),f=n(106),v=n(11),h=n(48),w=n(107),x=n(200),_=n(5),k=n(30),C=_("replace"),y=RegExp.prototype,z=l.TypeError,j=c(w),E=c("".indexOf),A=c("".replace),T=c("".slice),$=Math.max,P=function(e,t,n){return n>e.length?-1:""===t?n:E(e,t,n)};r({target:"String",proto:!0},{replaceAll:function(e,t){var n,r,l,c,w,_,I,R,S,O=d(this),D=0,H=0,L="";if(null!=e){if((n=f(e))&&(r=v(d("flags"in y?e.flags:j(e))),!~E(r,"g")))throw z("`.replaceAll` does not allow non-global regexes");if(l=h(e,C))return o(l,e,O,t);if(k&&n)return A(v(O),e,t)}for(c=v(O),w=v(e),(_=m(t))||(t=v(t)),I=w.length,R=$(1,I),D=P(c,w,0);-1!==D;)S=_?v(t(w,D,c)):x(w,c,D,[],void 0,t),L+=T(c,H,D)+S,H=D+I,D=P(c,w,D+R);return H<c.length&&(L+=T(c,H)),L}})},397:function(e,t,n){"use strict";n.r(t);var r=n(3),l=(n(47),n(13),n(29),n(63),n(361),n(37),n(32),{head:function(){return{title:"Edpuzzle - Hacks, Cheats, Answers: School Cheats",meta:[{hid:"description",name:"description",content:"Edpuzzle hack and answers to speed up your homework!"},{hid:"keywords",name:"keywords",content:"edpuzzle, edpuzzle bot, edpuzzle hack, edpuzzle, edpuzzle cheats, edpuzzle cheat, edpuzzle answer correctly"}]}},data:function(){return{method:"token",page:"login",username:"",password:"",token:"",classes:[],assignments:[],assignemnt:{},loadingClasses:!1}},methods:{login:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$global.createRequest("post","edpuzzle/login",{method:e.method,username:e.username,password:e.password,edpuzzleToken:e.token});case 2:if(!(n=t.sent).error){t.next=5;break}return t.abrupt("return",e.$global.alert(n.message,"error"));case 5:e.token=n.token,e.classes=n.classes,e.page="classes";case 8:case"end":return t.stop()}}),t)})))()},selectClass:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.loadingClasses=!0,n.next=3,t.$global.createRequest("post","edpuzzle/getAssignments",{token:t.token,classId:e});case 3:r=n.sent,t.loadingClasses=!1,t.assignments=r.assignments,t.page="assignments";case 7:case"end":return n.stop()}}),n)})))()},autoComplete:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$global.createRequest("post","edpuzzle/autoComplete",{token:e.token,assignmentData:{assignmentId:e.assignment.assignmentID,attemptId:e.assignment.attemptID},answers:e.assignment.answers});case 2:if(!(n=t.sent).error){t.next=5;break}return t.abrupt("return",e.$global.alert(n.message,"error"));case 5:e.$global.alert(n.message,"success");case 6:case"end":return t.stop()}}),t)})))()},selectAssignment:function(e){this.assignment=this.assignments.filter((function(i){return i.assignmentID==e}))[0],console.log(this.assignments,e,this.assignment),this.page="assignment"},formatTitles:function(e){return"Question: ".concat(e.body[0].html.replace("&nbsp;","")," ")},removeParagraphTag:function(text){return text.replaceAll("<p>","").replaceAll("</p>","")},formatAnswers:function(e){var t=this,n="<b>Answers:</b> <br />",r=0;return e.choices.filter((function(i){return i.isCorrect})).forEach((function(l){r++,n+=t.removeParagraphTag(l.body[0].html),r!=e.choices.filter((function(i){return i.isCorrect})).length&&(n+='<span style="color:gray">, </span>')})),n}}}),o=n(18),component=Object(o.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",["login"==e.page?r("div",[e._m(0),e._v(" "),r("div",{staticClass:"flex items-center justify-center mt-16"},[r("div",{staticClass:"shadow-lg-invert w-3/4 h-auto rounded-lg pt-8 pb-8 px-8 flex flex-col items-center"},[r("div",{staticClass:"text-4xl mb-4 font-bold flex items-center"},[e._v("Edpuzzle Login")]),e._v(" "),"token"==e.method?r("input",{directives:[{name:"model",rawName:"v-model",value:e.token,expression:"token"}],staticClass:"w-full h-12 text-black rounded-lg px-4 text-lg focus:ring-blue-600 border-2 border-gray-300 mb-4",attrs:{type:"password",placeholder:"Token"},domProps:{value:e.token},on:{input:function(t){t.target.composing||(e.token=t.target.value)}}}):e._e(),e._v(" "),"credentials"==e.method?r("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],staticClass:"w-full h-12 text-black rounded-lg px-4 text-lg focus:ring-blue-600 mb-4 border-2 border-gray-300",attrs:{type:"text",placeholder:"Username"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}}):e._e(),e._v(" "),"credentials"==e.method?r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"w-full h-12 text-black rounded-lg px-4 text-lg focus:ring-blue-600 mb-4 border-2 border-gray-300",attrs:{type:"password",placeholder:"Password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}):e._e(),e._v(" "),r("button",{staticClass:"w-full h-12 rounded-lg bg-blue-600 text-gray-200 uppercase font-semibold hover:bg-blue-700transition mb-4",on:{click:function(t){return e.login()}}},[e._v("Login")]),e._v(" "),r("center",[r("ins",{staticClass:"adsbygoogle",staticStyle:{display:"inline-block",width:"400px",height:"120px"},attrs:{"data-ad-client":"ca-pub-8723728531631418","data-ad-slot":"4423091088"}}),e._v(" "),r("script",{tag:"component"},[e._v(" (adsbygoogle = window.adsbygoogle || []).push({}); ")])],1),e._v(" "),r("label",{staticClass:"mb-4"},[e._v("- or -")]),e._v(" "),"token"==e.method?r("button",{staticClass:"w-full h-12 rounded-lg bg-black text-white uppercase font-semibold hover:bg-gray-800 transition mb-4",on:{click:function(t){e.method="credentials"}}},[e._v("Sign with Edpuzzle")]):r("button",{staticClass:"w-full h-12 rounded-lg bg-black text-white uppercase font-semibold hover:bg-gray-800 transition mb-4",on:{click:function(t){e.method="token"}}},[e._v("Sign with Token")]),e._v(" "),e._m(1)],1)]),e._v(" "),e._m(2)]):e._e(),e._v(" "),"classes"==e.page?r("div",[r("div",{staticClass:"flex flex-col lg:flex-row w-full justify-center gap-7"},[r("div",{staticClass:"shadow-3xl dark:shadow-lg-invert w-full lg:w-1/3 p-10 rounded-lg order-2 lg:order-first"},[r("center",[r("label",{staticClass:"text-4xl mb-4 font-bold"},[e._v(" Your Classes ")])]),e._v(" "),e.loadingClasses?r("center",[r("div",{staticClass:"mt-6 flex items-center justify-center space-x-2 animate-pulse"},[r("div",{staticClass:"w-8 h-8 bg-blue-400 rounded-full"}),e._v(" "),r("div",{staticClass:"w-8 h-8 bg-blue-400 rounded-full"}),e._v(" "),r("div",{staticClass:"w-8 h-8 bg-blue-400 rounded-full"})])]):r("div",{staticClass:"mt-14"},e._l(e.classes,(function(t){return r("button",{key:t._id,staticClass:"transition transform hover:scale-110 duration-150 flex my-4 border-2 border-blue-700 rounded-sm p-5 shadow-3xl justify-between items-center w-full",on:{click:function(n){return e.selectClass(t._id)}}},[e._v(e._s(t.name)+" - "+e._s(t.teachers.length>0?t.teachers[0].name:""))])})),0)],1)])]):e._e(),e._v(" "),"assignments"==e.page?r("div",[r("div",{staticClass:"flex flex-col lg:flex-row w-full justify-center gap-7"},[r("div",{staticClass:"shadow-3xl dark:shadow-lg-invert w-full lg:w-1/3 p-10 rounded-lg order-2 lg:order-first"},[r("center",[r("div",{staticClass:"text-4xl mb-4 font-bold items-center"},[r("span",{staticClass:"text-white transition transform hover:scale-110 duration-150 cursor-pointer mr-4 bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-500 rounded-full h-12 w-12 flex items-center justify-center",on:{click:function(t){e.page="classes"}}},[r("font-awesome-icon",{attrs:{transform:"shrink-6",icon:["fas","arrow-left"]}})],1),e._v("\n                        Your Assignments\n                    ")])]),e._v(" "),r("div",{staticClass:"mt-14"},e._l(e.assignments,(function(t){return r("button",{key:t.assignmentID,staticClass:"transition transform hover:scale-110 duration-150 flex my-4 border-2 border-blue-700 rounded-sm p-5 shadow-3xl justify-between items-center w-full",on:{click:function(n){return e.selectAssignment(t.assignmentID)}}},[e._v("\n                        "+e._s(t.title)+"\n                    ")])})),0)],1)])]):e._e(),e._v(" "),"assignment"==e.page?r("div",{staticClass:"flex flex-col lg:flex-row w-full justify-center gap-7",attrs:{id:"edpuzzleAnswers"}},[r("div",{staticClass:"shadow-3xl dark:shadow-lg-invert w-full lg:w-2/3 p-10 rounded-lg order-2 lg:order-first"},[r("center",[r("div",{staticClass:"text-4xl mb-4 font-bold items-center"},[r("span",{staticClass:"text-white transition transform hover:scale-110 duration-150 cursor-pointer mr-4 bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-500 rounded-full h-12 w-12 flex items-center justify-center",on:{click:function(t){e.page="assignments"}}},[r("font-awesome-icon",{attrs:{transform:"shrink-6",icon:["fas","arrow-left"]}})],1),e._v("\n                    Edpuzzle Answers\n                ")])]),e._v(" "),e._l(e.assignment.answers,(function(t){return r("div",{key:t.number,staticClass:"flex flex-col p-3"},[r("div",{staticClass:"flex py-3 shadow-3xl dark:shadow-lg-invert px-2"},[r("div",{staticClass:"flex flex-col px-2 w-full"},[r("span",{staticClass:"text-sm font-semibold pt-1",domProps:{innerHTML:e._s(e.removeParagraphTag(e.formatTitles(t)))}}),e._v(" "),r("span",{staticClass:"text-xs text-blue-500 font-bold"},["multiple-choice"==t.type?r("span",{domProps:{innerHTML:e._s(e.formatAnswers(t))}}):r("span",[r("div",{staticClass:"relative mb-4"},[r("label",{staticClass:"leading-7 text-sm text-gray-400"},[e._v("Open Ended")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.answer,expression:"answer.answer"}],staticClass:"w-full h-12 text-black rounded-lg px-4 text-lg focus:ring-blue-600 mb-4 border-2 border-gray-300",attrs:{type:"text",placeholder:"Open ended question"},domProps:{value:t.answer},on:{input:function(n){n.target.composing||e.$set(t,"answer",n.target.value)}}})])])])])])])}))],2),e._v(" "),r("div",{staticClass:"w-full lg:w-2/6 order-1 lg:order-last flex flex-col justify-start gap-7"},[r("div",{staticClass:"shadow-3xl dark:shadow-lg-invert p-4 rounded-lg text-center from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-500 bg-gradient-to-r"},[r("div",{staticClass:"flex justify-center"},[r("img",{staticClass:"bg-white w-20 h-20 rounded-full object-cover content-center -mt-10 border-4 border-white",attrs:{src:n(301),alt:"Q"}})]),e._v(" "),r("h1",{staticClass:"text-center text-2xl font-bold text-white tracking-wider mt-4 mb-4"},[e._v("Edpuzzle Premium Features")]),e._v(" "),r("button",{staticClass:"mt-10 shadow-3xl text-white p-2 bg-gray-900 rounded-lg w-3/4 font-bold",on:{click:function(t){return e.autoComplete()}}},[e._v("Auto Complete")])]),e._v(" "),e._m(3)])]):e._e()])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center"},[n("h1",{staticClass:"mb-8 text-4xl font-extrabold leading-none tracking-normal md:text-6xl md:tracking-tight"},[n("span",[e._v("The")]),e._v(" "),n("span",{staticClass:"block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-blue-300 to-purple-500 lg:inline"},[e._v("best edpuzzle hack")]),e._v(" "),n("span",[e._v("around🚀")])]),e._v(" "),n("p",{staticClass:"px-0 mb-8 text-lg md:text-xl lg:px-24"},[e._v("School Cheats edpuzzle hack creates a unique experience, allowing you to view all answers, and auto complete your assignments.")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",[e._v("If you're not sure how to get your token, "),n("a",{staticClass:"text-blue-500",attrs:{href:"https://chrome.google.com/webstore/detail/school-cheats/dcecjjjnjecoiehclollekjmfgblkkha?hl=en",target:"_blank"}},[e._v("use our extension")]),e._v(".")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"m-12"},[n("p",{staticClass:"text-lg font-thin"},[e._v("About")]),e._v(" "),n("h1",{staticClass:"text-3xl"},[e._v("School Cheats Edpuzzle")]),e._v(" "),n("hr",{staticClass:"mb-4"}),e._v(" "),n("div",{staticClass:"mb-4"},[n("h3",{staticClass:"font-bold text-lg"},[e._v("What is Edpuzzle?")]),e._v(" "),n("p",[e._v("Edpuzzle is an easy-to-use platform allowing you to engage every student, one video at a time. Get to know more about us below.")])]),e._v(" "),n("div",{staticClass:"mb-4"},[n("h3",{staticClass:"font-bold text-lg"},[e._v("What is a edpuzzle hack?")]),e._v(" "),n("p",[e._v("A edpuzzle hack is a tool that allows you to get answers or help complete your assignments.")])]),e._v(" "),n("div",{staticClass:"mb-4"},[n("h3",{staticClass:"font-bold text-lg"},[e._v("What is autocomplete?")]),e._v(" "),n("p",[e._v("Autocomplete is a premium feature school cheats provides to automatically compelte youre edpuzzle.com assignments in a couple of seconds.")])]),e._v(" "),n("div",{staticClass:"mb-4"},[n("h3",{staticClass:"font-bold text-lg"},[e._v("How do I login?")]),e._v(" "),n("p",[e._v("Either use school cheats chrome extension to get your edpuzzle token or login directly with your edpuzzle username and password.")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",{staticClass:"text-center text-sm tracking-wider"},[e._v("Sponsored")])])}],!1,null,null,null);t.default=component.exports}}]);
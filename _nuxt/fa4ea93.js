(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{367:function(t,e,o){t.exports=o.p+"img/kahoot.8a60918.png"},400:function(t,e,o){"use strict";o.r(e);var n=o(3),r=(o(32),o(35),o(13),o(45),o(46),{head:function(){return{title:"Kahoot - Hacks, Cheats, Answers: School Cheats",meta:[{hid:"description",name:"description",content:"Kahoot hack and answers to make the game easier to play!"},{hid:"keywords",name:"keywords",content:"kahoot bot,bot,kahoot spam,crash,hack,smash,kahoot cheat,smasher,kahoot hack,kahoot answer correctly,kahoot auto answer,auto answer,auto answer hack,kahoot,challenge,kahoot challenge, kahoot 100%, kahoot challenge winner, kahoot challenge auto answer, kahoot challenge cheat, kahoot challenge hack, how to get kahoot answers"}]}},data:function(){return{input:"",loading:!1,questions:[],code:"",botName:"",botAmount:""}},mounted:function(){this.$route.query.quizid&&(this.input=this.$route.query.quizid,this.getAnswers())},methods:{getAnswers:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.input){e.next=2;break}return e.abrupt("return",t.$global.alert("Please enter a quiz id found on the hosts screen","error"));case 2:return t.loading=!0,e.next=5,t.$global.createRequest("post","kahoot/getAnswers",{input:t.input});case 5:if(o=e.sent,t.loading=!1,!o.error){e.next=9;break}return e.abrupt("return",t.$global.alert(o.message,"error"));case 9:t.questions=o.data.questions||o.data.challenge.kahoot.questions,setTimeout((function(){var e=t.$el.querySelector("#kahootAnswers");e&&e.scrollIntoView({behavior:"smooth",block:"start"})}),500);case 11:case"end":return e.stop()}}),e)})))()}},components:{EnlargeableImage:function(){return o.e(0).then(o.bind(null,390))}}}),l=r,c=o(18),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),t._v(" "),n("div",{staticClass:"shadow-3xl dark:shadow-lg-invert w-full lg:w-2/3 p-10 rounded-lg mx-auto"},[n("div",{staticClass:"shadow-lg-invert flex dark:bg-gray-300 p-4 rounded-lg"},[n("svg",{staticClass:"h-6 w-6 text-black",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"}})]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.input,expression:"input"}],staticClass:"ml-2 dark:bg-gray-300 bg-transparent placeholder-gray-500 text-black outline-none w-full",attrs:{type:"text",placeholder:"7c623725-90c9-40f5-9419-40ff01651df2"},domProps:{value:t.input},on:{input:function(e){e.target.composing||(t.input=e.target.value)}}})]),t._v(" "),t.loading?n("button",{staticClass:"cursor-wait mt-2 shadow-3xl bg-gray-500 inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg text-white bg-gradient-to-r rounded"},[t._v("Please wait...")]):t._e(),t._v(" "),t.loading?t._e():n("button",{staticClass:"mt-2 shadow-3xl bg-blue-500 inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg text-white bg-gradient-to-r rounded",on:{click:function(e){return t.getAnswers()}}},[t._v("Continue")]),t._v(" "),n("center",[n("ins",{staticClass:"adsbygoogle",staticStyle:{display:"block"},attrs:{"data-ad-client":"ca-pub-8723728531631418","data-ad-slot":"7350112102","data-ad-format":"auto","data-full-width-responsive":"true"}}),t._v(" "),n("script",{tag:"component"},[t._v(" (adsbygoogle = window.adsbygoogle || []).push({}); ")])],1)],1),t._v(" "),n("div",{staticClass:"flex flex-col lg:flex-row w-full justify-center gap-7",attrs:{id:"kahootAnswers"}},[t.questions[0]?n("div",{staticClass:"shadow-3xl dark:shadow-lg-invert w-full lg:w-2/3 p-10 rounded-lg order-2 lg:order-first"},[n("h1",{staticClass:"uppercase font-bold text-center tracking-widest text-blue-600 text-sm"},[t._v("Kahoot Answers")]),t._v(" "),t._l(t.questions.filter((function(i){return"quiz"==i.type||"multiple_select_quiz"==i.type})),(function(data){return n("div",{key:data.text,staticClass:"flex flex-col p-3"},[n("div",{staticClass:"flex py-3 shadow-3xl dark:shadow-lg-invert px-2"},[data.image?n("div",{staticClass:"w-16 h-16 overflow-hidden object-cover rounded-lg"},[n("EnlargeableImage",{attrs:{src:data.image,src_large:data.image}})],1):t._e(),t._v(" "),n("div",{staticClass:"flex flex-col px-2 w-full"},[n("span",{staticClass:"text-sm font-semibold pt-1",domProps:{innerHTML:t._s(data.question)}}),t._v(" "),t._l(data.choices.filter((function(i){return i.correct})),(function(e,o){return n("span",{key:e.answer,staticClass:"text-xs text-blue-500 font-bold"},[""!=e.answer?n("span",{domProps:{innerHTML:t._s(o+1+". "+e.answer)}}):n("div",{staticClass:"w-16 h-16 object-cover rounded-lg overflow-hidden"},[n("EnlargeableImage",{attrs:{src:"https://media.kahoot.it/"+e.image.id,src_large:"https://media.kahoot.it/"+e.image.id}})],1)])}))],2)])])}))],2):t._e()]),t._v(" "),n("div",{staticClass:"m-6"},[n("p",{staticClass:"text-lg font-thin"},[t._v("About")]),t._v(" "),n("h1",{staticClass:"text-3xl"},[t._v("School Cheats Kahoot")]),t._v(" "),n("hr",{staticClass:"mb-4"}),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"mb-4"},[n("h3",{staticClass:"font-bold text-lg"},[t._v("How to get answers?")]),t._v(" "),n("p",[t._v("On the host/teacher screen of the Kahoot in the url bar there is a ?quzid=. It's pretty long ex: 7c623725-90c9-40f5-9419-40ff01651df2, put that long id into our cheat.")]),t._v(" "),n("img",{attrs:{src:o(367),alt:"Kahoot Screenshot"}})]),t._v(" "),t._m(2),t._v(" "),t._m(3)])])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center"},[o("h1",{staticClass:"mb-8 text-4xl font-extrabold leading-none tracking-normal md:text-6xl md:tracking-tight"},[o("span",[t._v("The")]),t._v(" "),o("span",{staticClass:"block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-blue-300 to-purple-500 lg:inline"},[t._v("best kahoot hack")]),t._v(" "),o("span",[t._v("around🚀")])]),t._v(" "),o("p",{staticClass:"px-0 mb-8 text-lg md:text-xl lg:px-24"},[t._v("School Cheats kahoot hack to get all answers, and add flood bots.")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"mb-4"},[o("h3",{staticClass:"font-bold text-lg"},[t._v("What is Kahoot?")]),t._v(" "),o("p",[t._v("Kahoot.com is a online learning platform used to create live games for students to try to answer questions as fast possible.")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"mb-4"},[o("h3",{staticClass:"font-bold text-lg"},[t._v("Can I use the kahoot game pin?")]),t._v(" "),o("p",[t._v("You can only use game pin for challenge games not live, it's not possible to get answers for live kahoots from just the kahoot game pin.")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"mb-4"},[o("h3",{staticClass:"font-bold text-lg"},[t._v("Can I get answers for private kahoots?")]),t._v(" "),o("p",[t._v("Yes, we do support private kahoots.")])])}],!1,null,null,null);e.default=component.exports}}]);
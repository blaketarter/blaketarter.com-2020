_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"/EDR":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a("QeBL")}])},"/JjW":function(e,t,a){e.exports={historySection:"HistorySection_historySection__1b9AU",jobBackground:"HistorySection_jobBackground__C42Bq",job:"HistorySection_job__3A77Z",title:"HistorySection_title__2gP_f",bodyWrapper:"HistorySection_bodyWrapper__2diiy",bar:"HistorySection_bar__2LJfb",dates:"HistorySection_dates__32oxB"}},"2Fjb":function(e,t,a){e.exports={history:"SectionHistory_history__101ZQ",titleWrapper:"SectionHistory_titleWrapper__3BRVb"}},"4tzD":function(e,t,a){e.exports={about:"SectionAbout_about__CQfw5",titleWrapper:"SectionAbout_titleWrapper__1Do4I",title:"SectionAbout_title__2G11Z",summary:"SectionAbout_summary__1FnNL",pictureBackground:"SectionAbout_pictureBackground__utD9F",picture:"SectionAbout_picture__3b2yK",right:"SectionAbout_right__3ZXaj",skillsSection:"SectionAbout_skillsSection__mDS5x",passionLabel:"SectionAbout_passionLabel__1B8CE"}},"7WsU":function(e,t,a){e.exports={container:"ThemeModeSwitcher_container__VKPUf",button:"ThemeModeSwitcher_button__jo-Yn",active:"ThemeModeSwitcher_active__2p6aA",sun:"ThemeModeSwitcher_sun__2NaY-",moon:"ThemeModeSwitcher_moon__-vpu6"}},"9vyt":function(e,t,a){e.exports={featured:"HistoryFeaturedSection_featured__3WWBd",background:"HistoryFeaturedSection_background__2nOg8",job:"HistoryFeaturedSection_job__1goKC",title:"HistoryFeaturedSection_title__3zj7_",bottom:"HistoryFeaturedSection_bottom__2WRb0",dates:"HistoryFeaturedSection_dates__AWwNM"}},"DJv/":function(e,t,a){e.exports={borderWrapper:"BorderWrapper_borderWrapper__2pm_W"}},Ev0V:function(e,t,a){e.exports={hero:"SectionHero_hero__1TEw6",background:"SectionHero_background__2i4yI",content:"SectionHero_content__tkFBP",title:"SectionHero_title__3TwCL",subtitle:"SectionHero_subtitle__1ClSU",new:"SectionHero_new__1poVH"}},Lvzg:function(e,t,a){e.exports={skillsSwapper:"SkillsSwapper_skillsSwapper__2lZ4_",frontCopy:"SkillsSwapper_frontCopy__3Zoqn",skillListWrapper:"SkillsSwapper_skillListWrapper__3C-c9",skillItem:"SkillsSwapper_skillItem__3L5S9"}},QeBL:function(e,t,a){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function r(e,t){if(e){if("string"===typeof e)return n(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?n(e,t):void 0}}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,r=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(n=(i=s.next()).done)&&(a.push(i.value),!t||a.length!==t);n=!0);}catch(l){r=!0,o=l}finally{try{n||null==s.return||s.return()}finally{if(r)throw o}}return a}}(e,t)||r(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}a.r(t),a.d(t,"default",(function(){return Qe}));var i=a("TSYQ"),s=a.n(i),l=a("q1tI"),c=a.n(l),p=a("DJv/"),d=a.n(p),u=c.a.createElement;function m(e){var t=e.children,a=e.component,n=void 0===a?"div":a,r=e.className;return u(n,{className:s()(d.a.borderWrapper,r)},t)}function h(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var f=function(e){var t;return function(){for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];t&&cancelAnimationFrame(t),t=requestAnimationFrame((function(){e.apply(void 0,n)}))}},_=a("pZEB"),v=a.n(_),b=c.a.createElement;function g(e){var t=e.className,a=void 0===t?"":t,n=e.children,r=e.component,o=void 0===r?"div":r,i=e.id;return b(o,{id:i,className:s()(v.a.maxWidth,a)},n)}var y=c.a.createElement,k=function(e,t){var a=document.getElementById(t.slice(1));a&&a.scrollIntoView&&(e.preventDefault(),a.scrollIntoView({behavior:"smooth"}))};function w(e){var t=e.href,a=e.children,n=e.className;return y("a",{className:void 0===n?"":n,href:t,onClick:function(e){return k(e,t)},tabIndex:0},a)}var S=a("7WsU"),N=a.n(S),x=c.a.createElement,I=function(e){var t=e.theme,a=e.setTheme;return x("div",{className:N.a.container},x("button",{className:s()(N.a.button,h({},N.a.active,"light"===t)),onClick:function(){return a("light")},"aria-label":"enable light mode"},x(W,{fill:"light"===t})),x("button",{className:s()(N.a.button,h({},N.a.active,"dark"===t)),onClick:function(){return a("dark")},"aria-label":"enable dark mode"},x(j,{fill:"dark"===t})))},W=function(e){var t=e.fill;return x("svg",{className:N.a.sun,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 40 40"},x("g",null,x("g",null,x("circle",{stroke:"currentColor",strokeWidth:"2px",fill:t?"currentColor":"transparent",cx:"19.45",cy:"19.24",r:"11.68"}),x("line",{stroke:"currentColor",strokeWidth:"2px",fill:"transparent",x1:"19.45",y1:"6.02",x2:"19.45"}),x("line",{stroke:"currentColor",strokeWidth:"2px",fill:"transparent",x1:"19.45",y1:"38.9",x2:"19.45",y2:"32.88"}),x("line",{stroke:"currentColor",strokeWidth:"2px",fill:"transparent",x1:"32.88",y1:"19.3",x2:"38.9",y2:"19.3"}),x("line",{stroke:"currentColor",strokeWidth:"2px",fill:"transparent",y1:"19.3",x2:"6.02",y2:"19.3"}),x("line",{stroke:"currentColor",strokeWidth:"2px",fill:"transparent",x1:"29.42",y1:"9.8",x2:"33.68",y2:"5.55"}),x("line",{stroke:"currentColor",strokeWidth:"2px",fill:"transparent",x1:"6.17",y1:"33.06",x2:"10.43",y2:"28.8"}),x("line",{stroke:"currentColor",strokeWidth:"2px",fill:"transparent",x1:"9.95",y1:"9.33",x2:"5.7",y2:"5.08"}),x("line",{stroke:"currentColor",strokeWidth:"2px",fill:"transparent",x1:"33.21",y1:"32.59",x2:"28.95",y2:"28.33"}))))},j=function(e){var t=e.fill;return x("svg",{className:N.a.moon,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 18.26 24.37"},x("g",null,x("g",null,x("path",{stroke:"currentColor",strokeWidth:"1.2px",fill:t?"currentColor":"transparent",d:"M6.08.5a11.67,11.67,0,0,0-4.66,1A11.7,11.7,0,0,1,9.55,12.6a11.67,11.67,0,0,1-7,10.71A11.68,11.68,0,1,0,6.08.5Z"}))))},M=a("waeA"),T=a.n(M),A=c.a.createElement;function C(e){var t,a=e.theme,n=e.setTheme,r=e.scrollEnabled,o=void 0!==r&&r,i=Object(l.useState)(!1),c=i[0],p=i[1];return Object(l.useEffect)((function(){if(o){var e=f((function(){var e;p((null===(e=window)||void 0===e?void 0:e.pageYOffset)>0)}));return e(),document.addEventListener("scroll",e,{passive:!0}),function(){document.removeEventListener("scroll",e)}}}),[o]),A("nav",{className:s()(T.a.nav,(t={},h(t,T.a.scrolled,c),h(t,T.a.fixed,o),t))},A(g,{className:T.a.navInner,component:"ul"},A("li",{"aria-hidden":"true",className:s()(T.a.navItem,T.a.top)},A(w,{href:"#top"},"\u2191")),A("li",{className:T.a.navItem},A(w,{href:"#about"},"About Me.")),A("li",{className:T.a.navItem},A(w,{href:"#history"},"My History.")),A("li",{className:T.a.navItem},A(w,{href:"#work"},"Some Work.")),A("li",{className:T.a.navItem},A(w,{href:"#find"},"Find Me.")),A("li",{className:s()(T.a.navItem,T.a.theme)},A(I,{theme:a,setTheme:n}))))}var E=a("pHHQ"),H=a.n(E),B=c.a.createElement;function P(e){var t=e.pattern,a=e.className,n=void 0===a?"":a,r=e.children,o=e.offsetMultiplier,i=void 0===o?10:o,c=e.onClick,p=e.testId,d=Object(l.useState)([0,0]),u=d[0],m=d[1];return B("div",{role:"presentation",onClick:c,onMouseMove:function(e){var t=e.currentTarget.getBoundingClientRect(),a=e.pageX-e.currentTarget.offsetLeft,n=e.pageY-e.currentTarget.offsetTop,r=[Math.min(a/t.width,1)*-i,Math.min(n/t.height,1)*-i];m(r)},className:"".concat(H.a.wrapper," ").concat(n),"data-testid":p},B("div",{style:{transform:"translate(".concat(u[0],"px, ").concat(u[1],"px)")},className:s()(H.a.animatedPattern,"pattern-".concat(t))}),r)}var F=a("XusW"),L=a.n(F),R=c.a.createElement;function O(e){var t=e.children,a=e.className,n=void 0===a?"":a;return R("p",{className:s()(L.a.bodyParagraph,n)},t)}var D=a("cqwZ"),z=a.n(D),J=c.a.createElement;function U(e){var t=e.children,a=e.className,n=void 0===a?"":a,r=e.size,o=void 0===r?"normal":r;return J("div",{className:s()(z.a.contentSection,n,h({},z.a.small,"small"===o))},t)}var G=a("yGBT"),Q=a.n(G),Y=c.a.createElement;function Z(e){var t=e.title,a=e.children,n=e.pattern;return Y("div",{className:Q.a.passionSection},Y(P,{pattern:n,className:Q.a.passionBackground,offsetMultiplier:2.5},Y("h3",{className:Q.a.passion},t)),Y("div",{className:Q.a.bodyWrapper},Y("div",{className:Q.a.bar}),Y(O,null,a)))}function K(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||r(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var q=a("Lvzg"),X=a.n(q),V=l.createElement,$=function(e){var t=e.copy,a=function(e){var t=Object(l.useState)((function(){return{skillsRandomized:e,currentSkill:e[0]}})),a=t[0],n=a.skillsRandomized,r=a.currentSkill,o=t[1],i=Object(l.useCallback)((function(){switch(r===n[0]?"word":"letter"){case"word":setTimeout((function(){var e=n[n.length-1];o({skillsRandomized:["",r].concat(K(n.slice(1,n.length-1))),currentSkill:e})}),4e3);break;case"letter":setTimeout((function(){var e=n[0];o({skillsRandomized:[e+r.replace(e,"")[0]].concat(K(n.slice(1))),currentSkill:r})}),20)}}),[n,r]);return Object(l.useEffect)((function(){var e=window.requestAnimationFrame(i);return function(){return window.cancelAnimationFrame(e)}}),[i]),{skillsRandomized:n}}(e.skills).skillsRandomized.slice(0,4).concat("and more").map((function(e,t){return V("span",{className:X.a.skillItem,key:t,style:{opacity:1-.2*t}},e,4===t?".":",")}));return V("div",{className:X.a.skillsSwapper},V("span",{className:X.a.frontCopy},t),a)},ee=a("idwM"),te=a.n(ee),ae=c.a.createElement;function ne(e){var t=e.children,a=e.className,n=void 0===a?"":a;return ae("h2",{className:s()(te.a.title,n)},t)}var re=a("4tzD"),oe=a.n(re),ie=l.createElement,se=["React","Redux","TypeScript","ReasonML","React-Native","Functional Programming","GraphQL","HTML","CSS","Git","Node"];function le(e){var t=e.pattern;return ie(g,{id:"about",className:oe.a.about,component:"section"},ie(g,{className:oe.a.titleWrapper},ie(ne,{className:oe.a.title},"About Me.")),ie(U,{className:oe.a.summary},ie(P,{pattern:t,className:oe.a.pictureBackground,offsetMultiplier:5},ie("img",{className:oe.a.picture,src:"/images/me.jpeg",alt:"blake smiling",loading:"eager"})),ie("div",{className:oe.a.right},ie(O,null,"Hi, I\u2019m Blake"," ",ie("span",{role:"img","aria-label":"waving"},"\ud83d\udc4b")),ie(O,null,"I'm a TypeScript developer with over six years of experience planning, creating, and maintaining various types of apps and websites. My current weapons of choice include React, Redux, TypeScript, and Node. I spend my days building enterprise-grade web apps, consumer facing websites, and mobile apps. I kick back on my nights and weekends by honing my skills and working on passion projects."),ie(O,null,"Currently I work at ",ie("a",{href:"https://crema.us"},"Crema"),", a product agency that partners with funded startups and existing brands to create technology solutions and new digital ventures. I also do some freelance work in my spare time with"," ",ie("a",{href:"https://www.midwesternoriginals.com"},"Midwestern Originals"),"."))),ie("div",{className:oe.a.skillsSection},ie($,{copy:"I know",skills:se})),ie(U,{size:"small"},ie(O,{className:oe.a.passionLabel},ie("em",null,"I don't want to toot my own horn, but I do know a little something about these (toot-toot"," ",ie("span",{role:"img","aria-label":"train"},"\ud83d\ude82"),"):")),ie(Z,{title:"TypeScript",pattern:t},"TypeScript is a statically-typed superset of JavaScript that enables developers to focus more on building sound systems with fewer runtime errors. This upfront investment in the development process is a tradeoff that has a net benefit to the quality of any product. It allows the compiler to catch syntax errors and other common issues allowing the developer to focus on the bespoke problem they are solving."),ie(Z,{title:"React",pattern:t},"React is one of the myriad front-end JavaScript frameworks, and to be honest they each achieve roughly the same goal. However, the difference in each is how familiar you are with them and the way they allow you to build the UI. In this regard I think React allows you to build interfaces in a way that equates with how they are designed and how we think about them intuitively. The way data flows is predictable and flexible. I love that React uses existing language features instead of inventing magic syntax."),ie("br",null),ie(O,{className:oe.a.passionLabel},ie("em",null,"I may know some already, but I\u2019m working to level up these skills"," ",ie("span",{role:"img","aria-label":"video game controller"},"\ud83c\udfae"),":")),ie(Z,{title:"Functional Programming",pattern:t},"To many developers functional programming is very much opposed to object-oriented programming. Although, I think a lot of the traits of functional-programming can be beneficial when applied even to object-oriented systems. Immutability in non-performance limited areas can be incredibly useful to eliminate programming errors and show intent. Declarative code can be easier to understand and read which can lead to fewer errors. Pure functions can be used to build easy to reuse parts of any codebase."),ie(Z,{title:"GraphQL",pattern:t},"GraphQL is intriguing to me because it's a different way to think about communicating with the back-end. Having a separate schema file that enforces type-safety and other validations on both the client-side and back-end is wonderful, and representing the data as a graph more closely aligns with how the data is used on the client-side. I've used it in production on a couple of projects and I've had positive experiences so far.")))}var ce=a("vw8R"),pe=a.n(ce),de=c.a.createElement;function ue(e){var t=e.pattern;return de(g,{id:"find",className:pe.a.findMe,component:"section"},de(g,{className:pe.a.titleWrapper},de(ne,null,"Find Me on the Internet.")),de(U,{size:"small"},de("div",{className:pe.a.externalSection},de(P,{pattern:t,className:pe.a.externalBackground,offsetMultiplier:2.5},de("p",{className:pe.a.external},"Github")),de("a",{className:pe.a.link,href:"https://github.com/blaketarter"},"https://github.com/blaketarter")),de("div",{className:pe.a.externalSection},de(P,{pattern:t,className:pe.a.externalBackground,offsetMultiplier:2.5},de("p",{className:pe.a.external},"Linkedin")),de("a",{className:pe.a.link,href:"https://www.linkedin.com/in/blaketarter"},"https://www.linkedin.com/in/blaketarter")),de("div",{className:pe.a.externalSection},de(P,{pattern:t,className:pe.a.externalBackground,offsetMultiplier:2.5},de("p",{className:pe.a.external},"Codepen")),de("a",{className:pe.a.link,href:"https://codepen.io/blaketarter/"},"https://codepen.io/blaketarter/")),de("div",{className:pe.a.externalSection},de(P,{pattern:t,className:pe.a.externalBackground,offsetMultiplier:2.5},de("p",{className:pe.a.external},"NPM")),de("a",{className:pe.a.link,href:"https://www.npmjs.com/~blaketarter"},"https://www.npmjs.com/~blaketarter")),de("div",{className:pe.a.externalSection},de(P,{pattern:t,className:pe.a.externalBackground,offsetMultiplier:2.5},de("p",{className:pe.a.external},"Twitter")),de("a",{className:pe.a.link,href:"https://twitter.com/itsblaketarter"},"https://twitter.com/itsblaketarter"))))}var me=a("UgJv"),he=a.n(me),fe=c.a.createElement;function _e(e){var t=e.pattern;return fe("footer",{className:he.a.footer},fe(P,{pattern:t,className:he.a.background}),fe(g,{className:he.a.content},fe(O,{className:he.a.footerText},"\xa9 2020 Blake Tarter"),fe(w,{href:"#top",className:s()(he.a.footerText,he.a.top)},"\u2191 Back to the Top.")))}var ve=a("Ev0V"),be=a.n(ve),ge=l.createElement;function ye(e){var t=e.pattern,a=e.nextPattern;return ge("section",{id:"top",className:be.a.hero},ge(P,{pattern:t,className:be.a.background,onClick:a,testId:"change-pattern"}),ge(g,{className:be.a.content},ge("h1",{className:be.a.title},"Hi, I'm Blake Tarter."),ge("h2",{className:be.a.subtitle},"A Kansas City, MO-based TypeScript developer with 6+ years of experience.")))}var ke=a("9vyt"),we=a.n(ke),Se=c.a.createElement;function Ne(e){var t=e.title,a=e.job,n=e.dates,r=e.children,o=e.pattern;return Se(P,{pattern:o,className:we.a.featured},Se("div",{className:we.a.background},Se("h3",{className:we.a.job},a),Se("p",{className:we.a.title},t),Se("div",{className:we.a.bottom},Se(O,{className:we.a.dates},n),Se(O,null,r))))}var xe=a("/JjW"),Ie=a.n(xe),We=c.a.createElement;function je(e){var t=e.title,a=e.job,n=e.dates,r=e.children,o=e.pattern;return We("div",{className:Ie.a.historySection},We(P,{pattern:o,className:Ie.a.jobBackground,offsetMultiplier:2.5},We("h3",{className:Ie.a.job},a)),We("p",{className:Ie.a.title},t),We("div",{className:Ie.a.bodyWrapper},We("div",{className:Ie.a.bar}),We("div",null,We(O,{className:Ie.a.dates},n),We(O,null,r))))}var Me=a("2Fjb"),Te=a.n(Me),Ae=l.createElement;function Ce(e){var t=e.pattern;return Ae(g,{id:"history",className:Te.a.history,component:"section"},Ae(g,{className:Te.a.titleWrapper},Ae(ne,null,"My History.")),Ae(U,null,Ae(O,null,"I've had an interesting journey to get me to where I am now. Originally I set out to be a graphic designer, then switched to web design in college, and then eventually realized web development was my true passion. While growing up, I was always interested in computers and took as much time as I could to teach myself programming and design. I\u2019ve learned I have a passion to create and problem solve; web development is a perfect culmination of these two things."),Ae(O,null,"My career so far has taken me from startup to agency. Using a myriad of different technologies, frameworks, and methodologies I\u2019ve built everything from web applications to marketing websites, hybrid and native applications, and then back again. Currently I happily find myself working on web and native applications using React and TypeScript as well as the occasional freelance website.")),Ae(Ne,{pattern:t,title:"Senior Application developer",job:"Crema",dates:"Dec 2019 - Present"},"During this role I help build web and mobile applications as a member of the production team while also helping mentor and give direction to the development team as a whole. As a Senior developer I'm expected to have areas of expertise and be able to advise the development direction of projects."),Ae(U,{size:"small"},Ae(je,{pattern:t,title:"Application Developer",job:"Crema",dates:"Nov 2017 - Dec 2019"},"While in this role I developed, implemented, and updated software solutions for web and mobile applications."),Ae(je,{pattern:t,title:"Team Lead",job:"Code Koalas",dates:"Sep 2016 - Nov 2017"},"I lead the team that is the Web/Hybrid Application team at CodeKoalas, we used web technologies such as Javascript, Angular, Ionic, Cordova, React, and React Native to build and launch experiences for clients and consumers on multiple platforms."),Ae(je,{pattern:t,title:"Web Developer",job:"Code Koalas",dates:"Aug 2014 - Sep 2016"},"I was on the team that developed web sites using HTML, CSS, Javascript, PHP, Drupal."),Ae(je,{pattern:t,title:"UX Engineer",job:"The Briefcase",dates:"May 2014 - Aug 2014"},"I developed and integrated the front-end of Briefcase with the back-end and also made design/usability decisions. I focused on HTML/CSS/JS but also tended to use PHP to do my job."),Ae(je,{pattern:t,title:"UX Intern",job:"The Briefcase",dates:"Dec 2013 - May 2014"},"I was a front-end user-experience intern that helped implement the web-app and advised on usability decisions.")))}function Ee(){return(Ee=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var He=a("l7nJ"),Be=a.n(He),Pe=c.a.createElement;function Fe(e){var t=e.alt,a=e.pattern,n=e.src,r=e.description,o=e.title,i=e.href,s=e.service;return Pe("div",{className:Be.a.workItem},Pe(P,{pattern:a,className:Be.a.imageWrapper,offsetMultiplier:5},Pe("img",{className:Be.a.image,alt:t,src:n,loading:"lazy"})),Pe("div",{className:Be.a.copy},Pe(O,{className:Be.a.title},o),Pe(O,{className:Be.a.description},r),Pe("a",{className:Be.a.link,href:i},"See it on ",s)))}var Le=a("kYHF"),Re=a.n(Le),Oe=c.a.createElement,De=[{title:"reticky-tacky",alt:"The reticky-tacky game board",description:"A native ReasonML tic-tac-toe game built with reprocessing.",src:"/images/reticky-tacky.png",href:"https://github.com/blaketarter/reticky-tacky",service:"GitHub"},{title:"simple-fp",alt:"A simple-fp code snippet",description:"A simple, small, no dependency functional programming library used as a tool to explore functional programming concepts.",src:"/images/simple-fp.png",href:"https://github.com/blaketarter/simple-fp",service:"GitHub"},{title:"blaketarter.com",alt:"blaketarter.com screenshot",description:"Did this website need to be over-engineered? No. But it was fun, and a place to explore new technologies and techniques.",src:"/images/blaketarter.com.png",href:"https://github.com/blaketarter/blaketarter.com-2020",service:"GitHub"},{title:"KCMO Bus Stops",alt:"hello world",description:"A React Native application that shows bus stops in the Kansas City area around your current location and hands-off navigation to them using the system navigation app.",src:"/images/kcbus.png",href:"https://play.google.com/store/apps/details?id=com.blaketarter.kcbus",service:"the Play Store"}];function ze(e){var t=e.pattern;return Oe(g,{id:"work",className:Re.a.someWork,component:"section"},Oe(g,{className:Re.a.titleWrapper},Oe(ne,null,"Some Work.")),Oe(U,null,Oe(O,null,"While most of what I do on a day-to-day basis I can't share here for one reason or another, I do find myself sometimes creating stuff worth putting here. It's not always flashy, but I've found that often the fun-stuff doesn't have to be flashy.")),Oe(U,{size:"small",className:Re.a.workItems},De.map((function(e){return Oe(Fe,Ee({},e,{pattern:t,key:e.title}))}))))}var Je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.persist,a=void 0===t||t,n=e.defaultMode,r=void 0===n?"no-preference":n,o=Object(l.useState)(r),i=o[0],s=o[1],c=Object(l.useCallback)((function(e){s(e)}),[a]);return Object(l.useEffect)((function(){var e=matchMedia("(prefers-color-scheme: dark)");"no-preference"===i&&c(e.matches?"dark":"light"),e.addEventListener&&e.addEventListener("change",(function(){return c(e.matches?"dark":"light")}))}),[c]),[i,c]},Ue=["diagonal-lines-lg","cross-dots-lg","grid-lg","dots-lg","horizontal-lines-md"];var Ge=l.createElement;function Qe(){var e=o(function(){var e=Object(l.useState)(0),t=e[0],a=e[1];return[Ue[t],function(){a((t+1)%Ue.length)}]}(),2),t=e[0],a=e[1],n=o(Je(),2),r=n[0],i=n[1];return Ge("div",{className:s()("App","theme-".concat(r))},Ge(C,{theme:r,setTheme:i}),Ge(ye,{pattern:t,nextPattern:a}),Ge(m,{component:"main"},Ge(le,{pattern:t}),Ge(Ce,{pattern:t}),Ge(ze,{pattern:t}),Ge(ue,{pattern:t})),Ge(_e,{pattern:t}))}},Qetd:function(e,t,a){"use strict";var n=Object.assign.bind(Object);e.exports=n,e.exports.default=e.exports},TSYQ:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var i=r.apply(null,n);i&&e.push(i)}else if("object"===o)for(var s in n)a.call(n,s)&&n[s]&&e.push(s)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},UgJv:function(e,t,a){e.exports={footer:"SectionFooter_footer__2SU3P",background:"SectionFooter_background__3hvTf",content:"SectionFooter_content__Cvw8U",footerText:"SectionFooter_footerText__3hTYo",top:"SectionFooter_top__3tiG4"}},XusW:function(e,t,a){e.exports={bodyParagraph:"BodyParagraph_bodyParagraph__3hIIg"}},cqwZ:function(e,t,a){e.exports={contentSection:"ContentSection_contentSection__1NzOj",small:"ContentSection_small__y9vjI"}},idwM:function(e,t,a){e.exports={title:"Title_title__W-6_k"}},kYHF:function(e,t,a){e.exports={someWork:"SectionSomeWork_someWork__h_E_L",titleWrapper:"SectionSomeWork_titleWrapper__1YIZ3",workItems:"SectionSomeWork_workItems__1uuaR"}},l7nJ:function(e,t,a){e.exports={workItem:"WorkItem_workItem__3XSR6",imageWrapper:"WorkItem_imageWrapper__14TOx",image:"WorkItem_image__22FYU",copy:"WorkItem_copy__OJKuc",title:"WorkItem_title__1eERY",description:"WorkItem_description__cosyN"}},pHHQ:function(e,t,a){e.exports={wrapper:"AnimatedPattern_wrapper__2QLKi",animatedPattern:"AnimatedPattern_animatedPattern__7HiY1"}},pZEB:function(e,t,a){e.exports={maxWidth:"MaxWidth_maxWidth__9FaHl"}},vw8R:function(e,t,a){e.exports={findMe:"SectionFindMe_findMe__1dj3N",titleWrapper:"SectionFindMe_titleWrapper__1Wt3H",externalSection:"SectionFindMe_externalSection__295Nl",externalBackground:"SectionFindMe_externalBackground__2DEPh",external:"SectionFindMe_external__2kAfh",link:"SectionFindMe_link__3LgD-"}},waeA:function(e,t,a){e.exports={nav:"Nav_nav__HqUtd",fixed:"Nav_fixed__bXJSp",scrolled:"Nav_scrolled__hxJ3n",navItem:"Nav_navItem__1MAg-",top:"Nav_top__3sh6f",navInner:"Nav_navInner__3Gd7z",theme:"Nav_theme__1DMI4"}},yGBT:function(e,t,a){e.exports={passionSection:"PassionSection_passionSection__sQTKZ",passionBackground:"PassionSection_passionBackground__2Ywrc",passion:"PassionSection_passion__1mfhC",bodyWrapper:"PassionSection_bodyWrapper__3GWr4",bar:"PassionSection_bar__SUCUI"}}},[["/EDR",0,1]]]);
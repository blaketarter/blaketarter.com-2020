_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"/EDR":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a("QeBL")}])},"/JjW":function(e,t,a){e.exports={historySection:"HistorySection_historySection__1b9AU",jobBackground:"HistorySection_jobBackground__C42Bq",job:"HistorySection_job__3A77Z",title:"HistorySection_title__2gP_f",bodyWrapper:"HistorySection_bodyWrapper__2diiy",bar:"HistorySection_bar__2LJfb",dates:"HistorySection_dates__32oxB"}},"2Fjb":function(e,t,a){e.exports={history:"SectionHistory_history__101ZQ",titleWrapper:"SectionHistory_titleWrapper__3BRVb"}},"4tzD":function(e,t,a){e.exports={about:"SectionAbout_about__CQfw5",titleWrapper:"SectionAbout_titleWrapper__1Do4I",title:"SectionAbout_title__2G11Z",summary:"SectionAbout_summary__1FnNL",pictureBackground:"SectionAbout_pictureBackground__utD9F",picture:"SectionAbout_picture__3b2yK",right:"SectionAbout_right__3ZXaj",skillsSection:"SectionAbout_skillsSection__mDS5x",passionLabel:"SectionAbout_passionLabel__1B8CE"}},"7WsU":function(e,t,a){e.exports={container:"ThemeModeSwitcher_container__VKPUf",button:"ThemeModeSwitcher_button__jo-Yn",active:"ThemeModeSwitcher_active__2p6aA",sun:"ThemeModeSwitcher_sun__2NaY-",moon:"ThemeModeSwitcher_moon__-vpu6"}},"9vyt":function(e,t,a){e.exports={featured:"HistoryFeaturedSection_featured__3WWBd",background:"HistoryFeaturedSection_background__2nOg8",job:"HistoryFeaturedSection_job__1goKC",title:"HistoryFeaturedSection_title__3zj7_",bottom:"HistoryFeaturedSection_bottom__2WRb0",dates:"HistoryFeaturedSection_dates__AWwNM"}},"DJv/":function(e,t,a){e.exports={borderWrapper:"BorderWrapper_borderWrapper__2pm_W"}},Ev0V:function(e,t,a){e.exports={hero:"SectionHero_hero__1TEw6",background:"SectionHero_background__2i4yI",content:"SectionHero_content__tkFBP",title:"SectionHero_title__3TwCL",subtitle:"SectionHero_subtitle__1ClSU",new:"SectionHero_new__1poVH"}},Lvzg:function(e,t,a){e.exports={skillsSwapper:"SkillsSwapper_skillsSwapper__2lZ4_",frontCopy:"SkillsSwapper_frontCopy__3Zoqn",skillListWrapper:"SkillsSwapper_skillListWrapper__3C-c9",skillItem:"SkillsSwapper_skillItem__3L5S9"}},QeBL:function(e,t,a){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function r(e,t){if(e){if("string"===typeof e)return n(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?n(e,t):void 0}}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,r=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(n=(i=s.next()).done)&&(a.push(i.value),!t||a.length!==t);n=!0);}catch(l){r=!0,o=l}finally{try{n||null==s.return||s.return()}finally{if(r)throw o}}return a}}(e,t)||r(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}a.r(t),a.d(t,"default",(function(){return Je}));var i=a("TSYQ"),s=a.n(i),l=a("q1tI"),c=a.n(l),p=a("DJv/"),d=a.n(p),u=c.a.createElement;function m(e){var t=e.children,a=e.component,n=void 0===a?"div":a,r=e.className;return u(n,{className:s()(d.a.borderWrapper,r)},t)}function h(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var f=a("pZEB"),_=a.n(f),v=c.a.createElement;function b(e){var t=e.className,a=void 0===t?"":t,n=e.children,r=e.component,o=void 0===r?"div":r,i=e.id;return v(o,{id:i,className:s()(_.a.maxWidth,a)},n)}var g=c.a.createElement;function y(e){var t=e.href,a=e.children,n=e.className;return g("a",{className:void 0===n?"":n,href:t,onClick:function(e){return function(e,t){var a=document.getElementById(t.slice(1));a&&a.scrollIntoView&&(e.preventDefault(),a.scrollIntoView({behavior:"smooth"}))}(e,t)},tabIndex:0},a)}var k=a("7WsU"),w=a.n(k),S=c.a.createElement,N=function(e){var t=e.theme,a=e.setTheme;return S("div",{className:w.a.container},S("button",{className:s()(w.a.button,h({},w.a.active,"light"===t)),onClick:function(){return a("light")},"aria-label":"enable light mode"},S(x,{fill:"light"===t})),S("button",{className:s()(w.a.button,h({},w.a.active,"dark"===t)),onClick:function(){return a("dark")},"aria-label":"enable dark mode"},S(I,{fill:"dark"===t})))},x=function(e){var t=e.fill;return S("svg",{className:w.a.sun,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 40 40"},S("g",null,S("g",null,S("circle",{stroke:"currentColor",strokeWidth:"2px",fill:t?"currentColor":"transparent",cx:"19.45",cy:"19.24",r:"11.68"}),S("line",{stroke:"currentColor",strokeWidth:"2px",fill:"transparent",x1:"19.45",y1:"6.02",x2:"19.45"}),S("line",{stroke:"currentColor",strokeWidth:"2px",fill:"transparent",x1:"19.45",y1:"38.9",x2:"19.45",y2:"32.88"}),S("line",{stroke:"currentColor",strokeWidth:"2px",fill:"transparent",x1:"32.88",y1:"19.3",x2:"38.9",y2:"19.3"}),S("line",{stroke:"currentColor",strokeWidth:"2px",fill:"transparent",y1:"19.3",x2:"6.02",y2:"19.3"}),S("line",{stroke:"currentColor",strokeWidth:"2px",fill:"transparent",x1:"29.42",y1:"9.8",x2:"33.68",y2:"5.55"}),S("line",{stroke:"currentColor",strokeWidth:"2px",fill:"transparent",x1:"6.17",y1:"33.06",x2:"10.43",y2:"28.8"}),S("line",{stroke:"currentColor",strokeWidth:"2px",fill:"transparent",x1:"9.95",y1:"9.33",x2:"5.7",y2:"5.08"}),S("line",{stroke:"currentColor",strokeWidth:"2px",fill:"transparent",x1:"33.21",y1:"32.59",x2:"28.95",y2:"28.33"}))))},I=function(e){var t=e.fill;return S("svg",{className:w.a.moon,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 18.26 24.37"},S("g",null,S("g",null,S("path",{stroke:"currentColor",strokeWidth:"1.2px",fill:t?"currentColor":"transparent",d:"M6.08.5a11.67,11.67,0,0,0-4.66,1A11.7,11.7,0,0,1,9.55,12.6a11.67,11.67,0,0,1-7,10.71A11.68,11.68,0,1,0,6.08.5Z"}))))},W=a("waeA"),j=a.n(W),M=c.a.createElement;function T(e){var t,a=e.theme,n=e.setTheme,r=e.scrollEnabled,o=void 0!==r&&r,i=Object(l.useState)(!1),c=i[0],p=i[1];return Object(l.useEffect)((function(){if(o){var e=function(e){var t;return function(){for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];t&&cancelAnimationFrame(t),t=requestAnimationFrame((function(){e.apply(void 0,n)}))}}((function(){var e;p((null===(e=window)||void 0===e?void 0:e.pageYOffset)>0)}));return e(),document.addEventListener("scroll",e,{passive:!0}),function(){document.removeEventListener("scroll",e)}}}),[o]),M("nav",{className:s()(j.a.nav,(t={},h(t,j.a.scrolled,c),h(t,j.a.fixed,o),t))},M(b,{className:j.a.navInner,component:"ul"},M("li",{"aria-hidden":"true",className:s()(j.a.navItem,j.a.top)},M(y,{href:"#top"},"\u2191")),M("li",{className:j.a.navItem},M(y,{href:"#about"},"About Me.")),M("li",{className:j.a.navItem},M(y,{href:"#history"},"My History.")),M("li",{className:j.a.navItem},M(y,{href:"#work"},"Some Work.")),M("li",{className:j.a.navItem},M(y,{href:"#find"},"Find Me.")),M("li",{className:s()(j.a.navItem,j.a.theme)},M(N,{theme:a,setTheme:n}))))}var A=a("pHHQ"),C=a.n(A),E=c.a.createElement;function H(e){var t=e.pattern,a=e.className,n=void 0===a?"":a,r=e.children,o=e.offsetMultiplier,i=void 0===o?10:o,c=e.onClick,p=e.testId,d=Object(l.useState)([0,0]),u=d[0],m=d[1];return E("div",{role:"presentation",onClick:c,onMouseMove:function(e){var t=e.currentTarget.getBoundingClientRect(),a=e.pageX-e.currentTarget.offsetLeft,n=e.pageY-e.currentTarget.offsetTop,r=[Math.min(a/t.width,1)*-i,Math.min(n/t.height,1)*-i];m(r)},className:"".concat(C.a.wrapper," ").concat(n),"data-testid":p},E("div",{style:{transform:"translate(".concat(u[0],"px, ").concat(u[1],"px)")},className:s()(C.a.animatedPattern,"pattern-".concat(t))}),r)}var B=a("XusW"),P=a.n(B),F=c.a.createElement;function L(e){var t=e.children,a=e.className,n=void 0===a?"":a;return F("p",{className:s()(P.a.bodyParagraph,n)},t)}var R=a("cqwZ"),O=a.n(R),D=c.a.createElement;function z(e){var t=e.children,a=e.className,n=void 0===a?"":a,r=e.size,o=void 0===r?"normal":r;return D("div",{className:s()(O.a.contentSection,n,h({},O.a.small,"small"===o))},t)}var J=a("yGBT"),U=a.n(J),G=c.a.createElement;function Q(e){var t=e.title,a=e.children,n=e.pattern;return G("div",{className:U.a.passionSection},G(H,{pattern:n,className:U.a.passionBackground,offsetMultiplier:2.5},G("h3",{className:U.a.passion},t)),G("div",{className:U.a.bodyWrapper},G("div",{className:U.a.bar}),G(L,null,a)))}function Y(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||r(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var Z=a("Lvzg"),K=a.n(Z),q=l.createElement,X=function(e){var t=e.copy,a=function(e){var t=Object(l.useState)((function(){return{skillsRandomized:e,currentSkill:e[0]}})),a=t[0],n=a.skillsRandomized,r=a.currentSkill,o=t[1],i=Object(l.useCallback)((function(){switch(r===n[0]?"word":"letter"){case"word":setTimeout((function(){var e=n[n.length-1];o({skillsRandomized:["",r].concat(Y(n.slice(1,n.length-1))),currentSkill:e})}),4e3);break;case"letter":setTimeout((function(){var e=n[0];o({skillsRandomized:[e+r.replace(e,"")[0]].concat(Y(n.slice(1))),currentSkill:r})}),20)}}),[n,r]);return Object(l.useEffect)((function(){var e=window.requestAnimationFrame(i);return function(){return window.cancelAnimationFrame(e)}}),[i]),{skillsRandomized:n}}(e.skills).skillsRandomized.slice(0,4).concat("and more").map((function(e,t){return q("span",{className:K.a.skillItem,key:t,style:{opacity:1-.2*t}},e,4===t?".":",")}));return q("div",{className:K.a.skillsSwapper},q("span",{className:K.a.frontCopy},t),a)},V=a("idwM"),$=a.n(V),ee=c.a.createElement;function te(e){var t=e.children,a=e.className,n=void 0===a?"":a;return ee("h2",{className:s()($.a.title,n)},t)}var ae=a("4tzD"),ne=a.n(ae),re=l.createElement,oe=["React","Redux","TypeScript","ReasonML","React-Native","Functional Programming","GraphQL","HTML","CSS","Git","Node"];function ie(e){var t=e.pattern;return re(b,{id:"about",className:ne.a.about,component:"section"},re(b,{className:ne.a.titleWrapper},re(te,{className:ne.a.title},"About Me.")),re(z,{className:ne.a.summary},re(H,{pattern:t,className:ne.a.pictureBackground,offsetMultiplier:5},re("img",{className:ne.a.picture,src:"/images/me.jpeg",alt:"blake smiling",loading:"eager"})),re("div",{className:ne.a.right},re(L,null,"Hi, I\u2019m Blake"," ",re("span",{role:"img","aria-label":"waving"},"\ud83d\udc4b")),re(L,null,"I'm a TypeScript developer with over six years of experience planning, creating, and maintaining various types of apps and websites. My current weapons of choice include React, Redux, TypeScript, and Node. I spend my days building enterprise-grade web apps, consumer facing websites, and mobile apps. I kick back on my nights and weekends by honing my skills and working on passion projects."),re(L,null,"Currently I work at ",re("a",{href:"https://crema.us"},"Crema"),", a product agency that partners with funded startups and existing brands to create technology solutions and new digital ventures. I also do some freelance work in my spare time with"," ",re("a",{href:"https://www.midwesternoriginals.com"},"Midwestern Originals"),"."))),re("div",{className:ne.a.skillsSection},re(X,{copy:"I know",skills:oe})),re(z,{size:"small"},re(L,{className:ne.a.passionLabel},re("em",null,"I don't want to toot my own horn, but I do know a little something about these (toot-toot"," ",re("span",{role:"img","aria-label":"train"},"\ud83d\ude82"),"):")),re(Q,{title:"TypeScript",pattern:t},"TypeScript is a statically-typed superset of JavaScript that enables developers to focus more on building sound systems with fewer runtime errors. This upfront investment in the development process is a tradeoff that has a net benefit to the quality of any product. It allows the compiler to catch syntax errors and other common issues allowing the developer to focus on the bespoke problem they are solving."),re(Q,{title:"React",pattern:t},"React is one of the myriad front-end JavaScript frameworks, and to be honest they each achieve roughly the same goal. However, the difference in each is how familiar you are with them and the way they allow you to build the UI. In this regard I think React allows you to build interfaces in a way that equates with how they are designed and how we think about them intuitively. The way data flows is predictable and flexible. I love that React uses existing language features instead of inventing magic syntax."),re("br",null),re(L,{className:ne.a.passionLabel},re("em",null,"I may know some already, but I\u2019m working to level up these skills"," ",re("span",{role:"img","aria-label":"video game controller"},"\ud83c\udfae"),":")),re(Q,{title:"Functional Programming",pattern:t},"To many developers functional programming is very much opposed to object-oriented programming. Although, I think a lot of the traits of functional-programming can be beneficial when applied even to object-oriented systems. Immutability in non-performance limited areas can be incredibly useful to eliminate programming errors and show intent. Declarative code can be easier to understand and read which can lead to fewer errors. Pure functions can be used to build easy to reuse parts of any codebase."),re(Q,{title:"GraphQL",pattern:t},"GraphQL is intriguing to me because it's a different way to think about communicating with the back-end. Having a separate schema file that enforces type-safety and other validations on both the client-side and back-end is wonderful, and representing the data as a graph more closely aligns with how the data is used on the client-side. I've used it in production on a couple of projects and I've had positive experiences so far.")))}var se=a("vw8R"),le=a.n(se),ce=c.a.createElement;function pe(e){var t=e.pattern;return ce(b,{id:"find",className:le.a.findMe,component:"section"},ce(b,{className:le.a.titleWrapper},ce(te,null,"Find Me on the Internet.")),ce(z,{size:"small"},ce("div",{className:le.a.externalSection},ce(H,{pattern:t,className:le.a.externalBackground,offsetMultiplier:2.5},ce("p",{className:le.a.external},"Github")),ce("a",{className:le.a.link,href:"https://github.com/blaketarter"},"https://github.com/blaketarter")),ce("div",{className:le.a.externalSection},ce(H,{pattern:t,className:le.a.externalBackground,offsetMultiplier:2.5},ce("p",{className:le.a.external},"Linkedin")),ce("a",{className:le.a.link,href:"https://www.linkedin.com/in/blaketarter"},"https://www.linkedin.com/in/blaketarter")),ce("div",{className:le.a.externalSection},ce(H,{pattern:t,className:le.a.externalBackground,offsetMultiplier:2.5},ce("p",{className:le.a.external},"Codepen")),ce("a",{className:le.a.link,href:"https://codepen.io/blaketarter/"},"https://codepen.io/blaketarter/")),ce("div",{className:le.a.externalSection},ce(H,{pattern:t,className:le.a.externalBackground,offsetMultiplier:2.5},ce("p",{className:le.a.external},"NPM")),ce("a",{className:le.a.link,href:"https://www.npmjs.com/~blaketarter"},"https://www.npmjs.com/~blaketarter")),ce("div",{className:le.a.externalSection},ce(H,{pattern:t,className:le.a.externalBackground,offsetMultiplier:2.5},ce("p",{className:le.a.external},"Twitter")),ce("a",{className:le.a.link,href:"https://twitter.com/itsblaketarter"},"https://twitter.com/itsblaketarter"))))}var de=a("UgJv"),ue=a.n(de),me=c.a.createElement;function he(e){var t=e.pattern;return me("footer",{className:ue.a.footer},me(H,{pattern:t,className:ue.a.background}),me(b,{className:ue.a.content},me(L,{className:ue.a.footerText},"\xa9 2020 Blake Tarter"),me(y,{href:"#top",className:s()(ue.a.footerText,ue.a.top)},"\u2191 Back to the Top.")))}var fe=a("Ev0V"),_e=a.n(fe),ve=l.createElement;function be(e){var t=e.pattern,a=e.nextPattern;return ve("section",{id:"top",className:_e.a.hero},ve(H,{pattern:t,className:_e.a.background,onClick:a,testId:"change-pattern"}),ve(b,{className:_e.a.content},ve("h1",{className:_e.a.title},"Hi, I'm Blake Tarter."),ve("h2",{className:_e.a.subtitle},"A Kansas City, MO-based TypeScript developer with 6+ years of experience.")))}var ge=a("9vyt"),ye=a.n(ge),ke=c.a.createElement;function we(e){var t=e.title,a=e.job,n=e.dates,r=e.children,o=e.pattern;return ke(H,{pattern:o,className:ye.a.featured},ke("div",{className:ye.a.background},ke("h3",{className:ye.a.job},a),ke("p",{className:ye.a.title},t),ke("div",{className:ye.a.bottom},ke(L,{className:ye.a.dates},n),ke(L,null,r))))}var Se=a("/JjW"),Ne=a.n(Se),xe=c.a.createElement;function Ie(e){var t=e.title,a=e.job,n=e.dates,r=e.children,o=e.pattern;return xe("div",{className:Ne.a.historySection},xe(H,{pattern:o,className:Ne.a.jobBackground,offsetMultiplier:2.5},xe("h3",{className:Ne.a.job},a)),xe("p",{className:Ne.a.title},t),xe("div",{className:Ne.a.bodyWrapper},xe("div",{className:Ne.a.bar}),xe("div",null,xe(L,{className:Ne.a.dates},n),xe(L,null,r))))}var We=a("2Fjb"),je=a.n(We),Me=l.createElement;function Te(e){var t=e.pattern;return Me(b,{id:"history",className:je.a.history,component:"section"},Me(b,{className:je.a.titleWrapper},Me(te,null,"My History.")),Me(z,null,Me(L,null,"I've had an interesting journey to get me to where I am now. Originally I set out to be a graphic designer, then switched to web design in college, and then eventually realized web development was my true passion. While growing up, I was always interested in computers and took as much time as I could to teach myself programming and design. I\u2019ve learned I have a passion to create and problem solve; web development is a perfect culmination of these two things."),Me(L,null,"My career so far has taken me from startup to agency. Using a myriad of different technologies, frameworks, and methodologies I\u2019ve built everything from web applications to marketing websites, hybrid and native applications, and then back again. Currently I happily find myself working on web and native applications using React and TypeScript as well as the occasional freelance website.")),Me(we,{pattern:t,title:"Senior Application developer",job:"Crema",dates:"Dec 2019 - Present"},"During this role I help build web and mobile applications as a member of the production team while also helping mentor and give direction to the development team as a whole. As a Senior developer I'm expected to have areas of expertise and be able to advise the development direction of projects."),Me(z,{size:"small"},Me(Ie,{pattern:t,title:"Application Developer",job:"Crema",dates:"Nov 2017 - Dec 2019"},"While in this role I developed, implemented, and updated software solutions for web and mobile applications."),Me(Ie,{pattern:t,title:"Team Lead",job:"Code Koalas",dates:"Sep 2016 - Nov 2017"},"I lead the team that is the Web/Hybrid Application team at CodeKoalas, we used web technologies such as Javascript, Angular, Ionic, Cordova, React, and React Native to build and launch experiences for clients and consumers on multiple platforms."),Me(Ie,{pattern:t,title:"Web Developer",job:"Code Koalas",dates:"Aug 2014 - Sep 2016"},"I was on the team that developed web sites using HTML, CSS, Javascript, PHP, Drupal."),Me(Ie,{pattern:t,title:"UX Engineer",job:"The Briefcase",dates:"May 2014 - Aug 2014"},"I developed and integrated the front-end of Briefcase with the back-end and also made design/usability decisions. I focused on HTML/CSS/JS but also tended to use PHP to do my job."),Me(Ie,{pattern:t,title:"UX Intern",job:"The Briefcase",dates:"Dec 2013 - May 2014"},"I was a front-end user-experience intern that helped implement the web-app and advised on usability decisions.")))}function Ae(){return(Ae=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var Ce=a("l7nJ"),Ee=a.n(Ce),He=c.a.createElement;function Be(e){var t=e.alt,a=e.pattern,n=e.src,r=e.description,o=e.title,i=e.href,s=e.service;return He("div",{className:Ee.a.workItem},He(H,{pattern:a,className:Ee.a.imageWrapper,offsetMultiplier:5},He("img",{className:Ee.a.image,alt:t,src:n,loading:"lazy"})),He("div",{className:Ee.a.copy},He(L,{className:Ee.a.title},o),He(L,{className:Ee.a.description},r),He("a",{className:Ee.a.link,href:i},"See it on ",s)))}var Pe=a("kYHF"),Fe=a.n(Pe),Le=c.a.createElement,Re=[{title:"reticky-tacky",alt:"The reticky-tacky game board",description:"A native ReasonML tic-tac-toe game built with reprocessing.",src:"/images/reticky-tacky.png",href:"https://github.com/blaketarter/reticky-tacky",service:"GitHub"},{title:"simple-fp",alt:"A simple-fp code snippet",description:"A simple, small, no dependency functional programming library used as a tool to explore functional programming concepts.",src:"/images/simple-fp.png",href:"https://github.com/blaketarter/simple-fp",service:"GitHub"},{title:"blaketarter.com",alt:"blaketarter.com screenshot",description:"Did this website need to be over-engineered? No. But it was fun, and a place to explore new technologies and techniques.",src:"/images/blaketarter.com.png",href:"https://github.com/blaketarter/blaketarter.com-2020",service:"GitHub"},{title:"KCMO Bus Stops",alt:"hello world",description:"A React Native application that shows bus stops in the Kansas City area around your current location and hands-off navigation to them using the system navigation app.",src:"/images/kcbus.png",href:"https://play.google.com/store/apps/details?id=com.blaketarter.kcbus",service:"the Play Store"}];function Oe(e){var t=e.pattern;return Le(b,{id:"work",className:Fe.a.someWork,component:"section"},Le(b,{className:Fe.a.titleWrapper},Le(te,null,"Some Work.")),Le(z,null,Le(L,null,"While most of what I do on a day-to-day basis I can't share here for one reason or another, I do find myself sometimes creating stuff worth putting here. It's not always flashy, but I've found that often the fun-stuff doesn't have to be flashy.")),Le(z,{size:"small",className:Fe.a.workItems},Re.map((function(e){return Le(Be,Ae({},e,{pattern:t,key:e.title}))}))))}var De=["diagonal-lines-lg","cross-dots-lg","grid-lg","dots-lg","horizontal-lines-md"];var ze=l.createElement;function Je(){var e=o(function(){var e=Object(l.useState)(0),t=e[0],a=e[1];return[De[t],function(){a((t+1)%De.length)}]}(),2),t=e[0],a=e[1],n=o(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.persist,a=void 0===t||t,n=e.defaultMode,r=void 0===n?"no-preference":n,o=Object(l.useState)(r),i=o[0],s=o[1],c=Object(l.useCallback)((function(e){s(e)}),[a]);return Object(l.useEffect)((function(){var e=matchMedia("(prefers-color-scheme: dark)");"no-preference"===i&&c(e.matches?"dark":"light"),e.addEventListener&&e.addEventListener("change",(function(){return c(e.matches?"dark":"light")}))}),[c]),[i,c]}(),2),r=n[0],i=n[1];return ze("div",{className:s()("App","theme-".concat(r))},ze(T,{theme:r,setTheme:i}),ze(be,{pattern:t,nextPattern:a}),ze(m,{component:"main"},ze(ie,{pattern:t}),ze(Te,{pattern:t}),ze(Oe,{pattern:t}),ze(pe,{pattern:t})),ze(he,{pattern:t}))}},Qetd:function(e,t,a){"use strict";var n=Object.assign.bind(Object);e.exports=n,e.exports.default=e.exports},TSYQ:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var i=r.apply(null,n);i&&e.push(i)}else if("object"===o)for(var s in n)a.call(n,s)&&n[s]&&e.push(s)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},UgJv:function(e,t,a){e.exports={footer:"SectionFooter_footer__2SU3P",background:"SectionFooter_background__3hvTf",content:"SectionFooter_content__Cvw8U",footerText:"SectionFooter_footerText__3hTYo",top:"SectionFooter_top__3tiG4"}},XusW:function(e,t,a){e.exports={bodyParagraph:"BodyParagraph_bodyParagraph__3hIIg"}},cqwZ:function(e,t,a){e.exports={contentSection:"ContentSection_contentSection__1NzOj",small:"ContentSection_small__y9vjI"}},idwM:function(e,t,a){e.exports={title:"Title_title__W-6_k"}},kYHF:function(e,t,a){e.exports={someWork:"SectionSomeWork_someWork__h_E_L",titleWrapper:"SectionSomeWork_titleWrapper__1YIZ3",workItems:"SectionSomeWork_workItems__1uuaR"}},l7nJ:function(e,t,a){e.exports={workItem:"WorkItem_workItem__3XSR6",imageWrapper:"WorkItem_imageWrapper__14TOx",image:"WorkItem_image__22FYU",copy:"WorkItem_copy__OJKuc",title:"WorkItem_title__1eERY",description:"WorkItem_description__cosyN"}},pHHQ:function(e,t,a){e.exports={wrapper:"AnimatedPattern_wrapper__2QLKi",animatedPattern:"AnimatedPattern_animatedPattern__7HiY1"}},pZEB:function(e,t,a){e.exports={maxWidth:"MaxWidth_maxWidth__9FaHl"}},vw8R:function(e,t,a){e.exports={findMe:"SectionFindMe_findMe__1dj3N",titleWrapper:"SectionFindMe_titleWrapper__1Wt3H",externalSection:"SectionFindMe_externalSection__295Nl",externalBackground:"SectionFindMe_externalBackground__2DEPh",external:"SectionFindMe_external__2kAfh",link:"SectionFindMe_link__3LgD-"}},waeA:function(e,t,a){e.exports={nav:"Nav_nav__HqUtd",fixed:"Nav_fixed__bXJSp",scrolled:"Nav_scrolled__hxJ3n",navItem:"Nav_navItem__1MAg-",top:"Nav_top__3sh6f",navInner:"Nav_navInner__3Gd7z",theme:"Nav_theme__1DMI4"}},yGBT:function(e,t,a){e.exports={passionSection:"PassionSection_passionSection__sQTKZ",passionBackground:"PassionSection_passionBackground__2Ywrc",passion:"PassionSection_passion__1mfhC",bodyWrapper:"PassionSection_bodyWrapper__3GWr4",bar:"PassionSection_bar__SUCUI"}}},[["/EDR",0,1]]]);
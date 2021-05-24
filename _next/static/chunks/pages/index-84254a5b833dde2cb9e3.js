(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{4184:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)){if(n.length){var s=a.apply(null,n);s&&e.push(s)}}else if("object"===i)if(n.toString===Object.prototype.toString)for(var o in n)r.call(n,o)&&n[o]&&e.push(o);else e.push(n.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},6086:function(e){"use strict";var t=Object.assign.bind(Object);e.exports=t,e.exports.default=e.exports},4598:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ke}});var r=n(5893);function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t){if(e){if("string"===typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,i=void 0;try{for(var s,o=e[Symbol.iterator]();!(r=(s=o.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(l){a=!0,i=l}finally{try{r||null==o.return||o.return()}finally{if(a)throw i}}return n}}(e,t)||i(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var o=n(4184),l=n.n(o),c=n(7294),d=n(7221),p=n.n(d);function h(e){var t=e.children,n=e.component,a=void 0===n?"div":n,i=e.className,s=a;return(0,r.jsx)(s,{className:l()(p().borderWrapper,i),children:t})}var u=n(6265),m=n(1173),f=n.n(m);function x(e){var t=e.className,n=void 0===t?"":t,a=e.children,i=e.component,s=void 0===i?"div":i,o=e.id,c=s;return(0,r.jsx)(c,{id:o,className:l()(f().maxWidth,n),children:a})}function _(e){var t=e.href,n=e.children,a=e.className,i=void 0===a?"":a;return(0,r.jsx)("a",{className:i,href:t,onClick:function(e){return function(e,t){var n=document.getElementById(t.slice(1));n&&n.scrollIntoView&&(e.preventDefault(),n.scrollIntoView({behavior:"smooth"}))}(e,t)},tabIndex:0,children:n})}var b=n(8404),v=n.n(b),g=function(e){var t=e.theme,n=e.setTheme;return(0,r.jsxs)("div",{className:v().container,children:[(0,r.jsx)("button",{className:l()(v().button,(0,u.Z)({},v().active,"light"===t)),onClick:function(){return n("light")},"aria-label":"enable light mode",children:(0,r.jsx)(j,{fill:"light"===t})}),(0,r.jsx)("button",{className:l()(v().button,(0,u.Z)({},v().active,"dark"===t)),onClick:function(){return n("dark")},"aria-label":"enable dark mode",children:(0,r.jsx)(y,{fill:"dark"===t})})]})},j=function(e){var t=e.fill;return(0,r.jsx)("svg",{className:v().sun,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 40 40",children:(0,r.jsx)("g",{children:(0,r.jsxs)("g",{children:[(0,r.jsx)("circle",{stroke:"currentColor",strokeWidth:"2px",fill:t?"currentColor":"transparent",cx:"19.45",cy:"19.24",r:"11.68"}),(0,r.jsx)("line",{stroke:"currentColor",strokeWidth:"2px",fill:"transparent",x1:"19.45",y1:"6.02",x2:"19.45"}),(0,r.jsx)("line",{stroke:"currentColor",strokeWidth:"2px",fill:"transparent",x1:"19.45",y1:"38.9",x2:"19.45",y2:"32.88"}),(0,r.jsx)("line",{stroke:"currentColor",strokeWidth:"2px",fill:"transparent",x1:"32.88",y1:"19.3",x2:"38.9",y2:"19.3"}),(0,r.jsx)("line",{stroke:"currentColor",strokeWidth:"2px",fill:"transparent",y1:"19.3",x2:"6.02",y2:"19.3"}),(0,r.jsx)("line",{stroke:"currentColor",strokeWidth:"2px",fill:"transparent",x1:"29.42",y1:"9.8",x2:"33.68",y2:"5.55"}),(0,r.jsx)("line",{stroke:"currentColor",strokeWidth:"2px",fill:"transparent",x1:"6.17",y1:"33.06",x2:"10.43",y2:"28.8"}),(0,r.jsx)("line",{stroke:"currentColor",strokeWidth:"2px",fill:"transparent",x1:"9.95",y1:"9.33",x2:"5.7",y2:"5.08"}),(0,r.jsx)("line",{stroke:"currentColor",strokeWidth:"2px",fill:"transparent",x1:"33.21",y1:"32.59",x2:"28.95",y2:"28.33"})]})})})},y=function(e){var t=e.fill;return(0,r.jsx)("svg",{className:v().moon,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 18.26 24.37",children:(0,r.jsx)("g",{children:(0,r.jsx)("g",{children:(0,r.jsx)("path",{stroke:"currentColor",strokeWidth:"1.2px",fill:t?"currentColor":"transparent",d:"M6.08.5a11.67,11.67,0,0,0-4.66,1A11.7,11.7,0,0,1,9.55,12.6a11.67,11.67,0,0,1-7,10.71A11.68,11.68,0,1,0,6.08.5Z"})})})})},k=n(3057),w=n.n(k);function S(e){var t,n=e.theme,a=e.setTheme,i=e.scrollEnabled,s=void 0!==i&&i,o=(0,c.useState)(!1),d=o[0],p=o[1];return(0,c.useEffect)((function(){if(s){var e=function(e){var t;return function(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];t&&cancelAnimationFrame(t),t=requestAnimationFrame((function(){e.apply(void 0,r)}))}}((function(){var e;p((null===(e=window)||void 0===e?void 0:e.pageYOffset)>0)}));return e(),document.addEventListener("scroll",e,{passive:!0}),function(){document.removeEventListener("scroll",e)}}}),[s]),(0,r.jsx)("nav",{className:l()(w().nav,(t={},(0,u.Z)(t,w().scrolled,d),(0,u.Z)(t,w().fixed,s),t)),children:(0,r.jsxs)(x,{className:w().navInner,component:"ul",children:[(0,r.jsx)("li",{"aria-hidden":"true",className:l()(w().navItem,w().top),children:(0,r.jsx)(_,{href:"#top",children:"\u2191"})}),(0,r.jsx)("li",{className:w().navItem,children:(0,r.jsx)(_,{href:"#about",children:"About Me."})}),(0,r.jsx)("li",{className:w().navItem,children:(0,r.jsx)(_,{href:"#history",children:"My History."})}),(0,r.jsx)("li",{className:w().navItem,children:(0,r.jsx)(_,{href:"#work",children:"Some Work."})}),(0,r.jsx)("li",{className:w().navItem,children:(0,r.jsx)(_,{href:"#find",children:"Find Me."})}),(0,r.jsx)("li",{className:l()(w().navItem,w().theme),children:(0,r.jsx)(g,{theme:n,setTheme:a})})]})})}var N=n(938),I=n.n(N);function W(e){var t=e.pattern,n=e.className,a=void 0===n?"":n,i=e.children,s=e.onClick,o=e.testId;return(0,r.jsxs)("div",{role:"presentation",onClick:s,className:"".concat(I().wrapper," ").concat(a),"data-testid":o,children:[(0,r.jsx)("div",{className:l()(I().animatedPattern,"pattern-".concat(t))}),i]})}var C=n(4277),A=n.n(C);function T(e){var t=e.children,n=e.className,a=void 0===n?"":n;return(0,r.jsx)("p",{className:l()(A().bodyParagraph,a),children:t})}var P=n(5414),H=n.n(P);function M(e){var t=e.children,n=e.className,a=void 0===n?"":n,i=e.size,s=void 0===i?"normal":i;return(0,r.jsx)("div",{className:l()(H().contentSection,a,(0,u.Z)({},H().small,"small"===s)),children:t})}var O=n(9970),B=n.n(O);function F(e){var t=e.title,n=e.children,a=e.pattern;return(0,r.jsxs)("div",{className:B().passionSection,children:[(0,r.jsx)(W,{pattern:a,className:B().passionBackground,children:(0,r.jsx)("h3",{className:B().passion,children:t})}),(0,r.jsxs)("div",{className:B().bodyWrapper,children:[(0,r.jsx)("div",{className:B().bar}),(0,r.jsx)(T,{children:n})]})]})}function L(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||i(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var R=n(5219),E=n.n(R),D=function(e){var t=e.copy,n=function(e){var t=(0,c.useState)((function(){return{skillsRandomized:e,currentSkill:e[0]}})),n=t[0],r=n.skillsRandomized,a=n.currentSkill,i=t[1],s=(0,c.useCallback)((function(){switch(a===r[0]?"word":"letter"){case"word":setTimeout((function(){var e=r[r.length-1];i({skillsRandomized:["",a].concat(L(r.slice(1,r.length-1))),currentSkill:e})}),4e3);break;case"letter":setTimeout((function(){var e=r[0];i({skillsRandomized:[e+a.replace(e,"")[0]].concat(L(r.slice(1))),currentSkill:a})}),20)}}),[r,a]);return(0,c.useEffect)((function(){var e=window.requestAnimationFrame(s);return function(){return window.cancelAnimationFrame(e)}}),[s]),{skillsRandomized:r}}(e.skills).skillsRandomized.slice(0,4).concat("and more").map((function(e,t){return(0,r.jsxs)("span",{className:E().skillItem,style:{opacity:1-.2*t},children:[e,4===t?".":","]},t)}));return(0,r.jsxs)("div",{className:E().skillsSwapper,children:[(0,r.jsx)("span",{className:E().frontCopy,children:t}),n]})},z=n(7506),Z=n.n(z);function U(e){var t=e.children,n=e.className,a=void 0===n?"":n;return(0,r.jsx)("h2",{className:l()(Z().title,a),children:t})}var G=n(5579),K=n.n(G),J=["React","Redux","TypeScript","ReasonML","React-Native","Functional Programming","GraphQL","HTML","CSS","Git","Node"];function Y(e){var t=e.pattern;return(0,r.jsxs)(x,{id:"about",className:K().about,component:"section",children:[(0,r.jsx)(x,{className:K().titleWrapper,children:(0,r.jsx)(U,{className:K().title,children:"About Me."})}),(0,r.jsxs)(M,{className:K().summary,children:[(0,r.jsx)(W,{pattern:t,className:K().pictureBackground,children:(0,r.jsx)("img",{className:K().picture,src:"/images/me.jpeg",alt:"blake smiling",loading:"eager"})}),(0,r.jsxs)("div",{className:K().right,children:[(0,r.jsxs)(T,{children:["Hi, I\u2019m Blake"," ",(0,r.jsx)("span",{role:"img","aria-label":"waving",children:"\ud83d\udc4b"})]}),(0,r.jsx)(T,{children:"I'm a TypeScript developer with over six years of experience planning, creating, and maintaining various types of apps and websites. My current weapons of choice include React, Redux, TypeScript, and Node. I spend my days building enterprise-grade web apps, consumer facing websites, and mobile apps. I kick back on my nights and weekends by honing my skills and working on passion projects."}),(0,r.jsxs)(T,{children:["Currently I work at ",(0,r.jsx)("a",{href:"https://crema.us",children:"Crema"}),", a product agency that partners with funded startups and existing brands to create technology solutions and new digital ventures. I also do some freelance work in my spare time with"," ",(0,r.jsx)("a",{href:"https://www.midwesternoriginals.com",children:"Midwestern Originals"}),"."]})]})]}),(0,r.jsx)("div",{className:K().skillsSection,children:(0,r.jsx)(D,{copy:"I know",skills:J})}),(0,r.jsxs)(M,{size:"small",children:[(0,r.jsx)(T,{className:K().passionLabel,children:(0,r.jsxs)("em",{children:["I don't want to toot my own horn, but I do know a little something about these (toot-toot"," ",(0,r.jsx)("span",{role:"img","aria-label":"train",children:"\ud83d\ude82"}),"):"]})}),(0,r.jsx)(F,{title:"TypeScript",pattern:t,children:"TypeScript is a statically-typed superset of JavaScript that enables developers to focus more on building sound systems with fewer runtime errors. This upfront investment in the development process is a tradeoff that has a net benefit to the quality of any product. It allows the compiler to catch syntax errors and other common issues allowing the developer to focus on the bespoke problem they are solving."}),(0,r.jsx)(F,{title:"React",pattern:t,children:"React is one of the myriad front-end JavaScript frameworks, and to be honest they each achieve roughly the same goal. However, the difference in each is how familiar you are with them and the way they allow you to build the UI. In this regard I think React allows you to build interfaces in a way that equates with how they are designed and how we think about them intuitively. The way data flows is predictable and flexible. I love that React uses existing language features instead of inventing magic syntax."}),(0,r.jsx)("br",{}),(0,r.jsx)(T,{className:K().passionLabel,children:(0,r.jsxs)("em",{children:["I may know some already, but I\u2019m working to level up these skills"," ",(0,r.jsx)("span",{role:"img","aria-label":"video game controller",children:"\ud83c\udfae"}),":"]})}),(0,r.jsx)(F,{title:"Functional Programming",pattern:t,children:"To many developers functional programming is very much opposed to object-oriented programming. Although, I think a lot of the traits of functional-programming can be beneficial when applied even to object-oriented systems. Immutability in non-performance limited areas can be incredibly useful to eliminate programming errors and show intent. Declarative code can be easier to understand and read which can lead to fewer errors. Pure functions can be used to build easy to reuse parts of any codebase."}),(0,r.jsx)(F,{title:"GraphQL",pattern:t,children:"GraphQL is intriguing to me because it's a different way to think about communicating with the back-end. Having a separate schema file that enforces type-safety and other validations on both the client-side and back-end is wonderful, and representing the data as a graph more closely aligns with how the data is used on the client-side. I've used it in production on a couple of projects and I've had positive experiences so far."})]})]})}var q=n(6081),Q=n.n(q);function X(e){var t=e.pattern;return(0,r.jsxs)(x,{id:"find",className:Q().findMe,component:"section",children:[(0,r.jsx)(x,{className:Q().titleWrapper,children:(0,r.jsx)(U,{children:"Find Me on the Internet."})}),(0,r.jsxs)(M,{size:"small",children:[(0,r.jsxs)("div",{className:Q().externalSection,children:[(0,r.jsx)(W,{pattern:t,className:Q().externalBackground,children:(0,r.jsx)("p",{className:Q().external,children:"Github"})}),(0,r.jsx)("a",{className:Q().link,href:"https://github.com/blaketarter",children:"https://github.com/blaketarter"})]}),(0,r.jsxs)("div",{className:Q().externalSection,children:[(0,r.jsx)(W,{pattern:t,className:Q().externalBackground,children:(0,r.jsx)("p",{className:Q().external,children:"Linkedin"})}),(0,r.jsx)("a",{className:Q().link,href:"https://www.linkedin.com/in/blaketarter",children:"https://www.linkedin.com/in/blaketarter"})]}),(0,r.jsxs)("div",{className:Q().externalSection,children:[(0,r.jsx)(W,{pattern:t,className:Q().externalBackground,children:(0,r.jsx)("p",{className:Q().external,children:"Codepen"})}),(0,r.jsx)("a",{className:Q().link,href:"https://codepen.io/blaketarter/",children:"https://codepen.io/blaketarter/"})]}),(0,r.jsxs)("div",{className:Q().externalSection,children:[(0,r.jsx)(W,{pattern:t,className:Q().externalBackground,children:(0,r.jsx)("p",{className:Q().external,children:"NPM"})}),(0,r.jsx)("a",{className:Q().link,href:"https://www.npmjs.com/~blaketarter",children:"https://www.npmjs.com/~blaketarter"})]}),(0,r.jsxs)("div",{className:Q().externalSection,children:[(0,r.jsx)(W,{pattern:t,className:Q().externalBackground,children:(0,r.jsx)("p",{className:Q().external,children:"Twitter"})}),(0,r.jsx)("a",{className:Q().link,href:"https://twitter.com/itsblaketarter",children:"https://twitter.com/itsblaketarter"})]})]})]})}var V=n(4874),$=n.n(V);function ee(e){var t=e.pattern;return(0,r.jsxs)("footer",{className:$().footer,children:[(0,r.jsx)(W,{pattern:t,className:$().background}),(0,r.jsxs)(x,{className:$().content,children:[(0,r.jsx)(T,{className:$().footerText,children:"\xa9 2020 Blake Tarter"}),(0,r.jsx)(_,{href:"#top",className:l()($().footerText,$().top),children:"\u2191 Back to the Top."})]})]})}var te=n(3464),ne=n.n(te);function re(e){var t=e.pattern,n=e.nextPattern;return(0,r.jsxs)("section",{id:"top",className:ne().hero,children:[(0,r.jsx)(W,{pattern:t,className:ne().background,onClick:n,testId:"change-pattern"}),(0,r.jsxs)(x,{className:ne().content,children:[(0,r.jsx)("h1",{className:ne().title,children:"Hi, I'm Blake Tarter."}),(0,r.jsx)("h2",{className:ne().subtitle,children:"A Kansas City, MO-based TypeScript developer with 6+ years of experience."})]})]})}var ae=n(6201),ie=n.n(ae);function se(e){var t=e.title,n=e.job,a=e.dates,i=e.children,s=e.pattern;return(0,r.jsx)(W,{pattern:s,className:ie().featured,children:(0,r.jsxs)("div",{className:ie().background,children:[(0,r.jsx)("h3",{className:ie().job,children:n}),(0,r.jsx)("p",{className:ie().title,children:t}),(0,r.jsxs)("div",{className:ie().bottom,children:[(0,r.jsx)(T,{className:ie().dates,children:a}),(0,r.jsx)(T,{children:i})]})]})})}var oe=n(9929),le=n.n(oe);function ce(e){var t=e.title,n=e.job,a=e.dates,i=e.children,s=e.pattern;return(0,r.jsxs)("div",{className:le().historySection,children:[(0,r.jsx)(W,{pattern:s,className:le().jobBackground,children:(0,r.jsx)("h3",{className:le().job,children:n})}),(0,r.jsx)("p",{className:le().title,children:t}),(0,r.jsxs)("div",{className:le().bodyWrapper,children:[(0,r.jsx)("div",{className:le().bar}),(0,r.jsxs)("div",{children:[(0,r.jsx)(T,{className:le().dates,children:a}),(0,r.jsx)(T,{children:i})]})]})]})}var de=n(7085),pe=n.n(de);function he(e){var t=e.pattern;return(0,r.jsxs)(x,{id:"history",className:pe().history,component:"section",children:[(0,r.jsx)(x,{className:pe().titleWrapper,children:(0,r.jsx)(U,{children:"My History."})}),(0,r.jsxs)(M,{children:[(0,r.jsx)(T,{children:"I've had an interesting journey to get me to where I am now. Originally I set out to be a graphic designer, then switched to web design in college, and then eventually realized web development was my true passion. While growing up, I was always interested in computers and took as much time as I could to teach myself programming and design. I\u2019ve learned I have a passion to create and problem solve; web development is a perfect culmination of these two things."}),(0,r.jsx)(T,{children:"My career so far has taken me from startup to agency. Using a myriad of different technologies, frameworks, and methodologies I\u2019ve built everything from web applications to marketing websites, hybrid and native applications, and then back again. Currently I happily find myself working on web and native applications using React and TypeScript as well as the occasional freelance website."})]}),(0,r.jsx)(se,{pattern:t,title:"Senior Application developer",job:"Crema",dates:"Dec 2019 - Present",children:"During this role I help build web and mobile applications as a member of the production team while also helping mentor and give direction to the development team as a whole. As a Senior developer I'm expected to have areas of expertise and be able to advise the development direction of projects."}),(0,r.jsxs)(M,{size:"small",children:[(0,r.jsx)(ce,{pattern:t,title:"Application Developer",job:"Crema",dates:"Nov 2017 - Dec 2019",children:"While in this role I developed, implemented, and updated software solutions for web and mobile applications."}),(0,r.jsx)(ce,{pattern:t,title:"Team Lead",job:"Code Koalas",dates:"Sep 2016 - Nov 2017",children:"I lead the team that is the Web/Hybrid Application team at CodeKoalas, we used web technologies such as Javascript, Angular, Ionic, Cordova, React, and React Native to build and launch experiences for clients and consumers on multiple platforms."}),(0,r.jsx)(ce,{pattern:t,title:"Web Developer",job:"Code Koalas",dates:"Aug 2014 - Sep 2016",children:"I was on the team that developed web sites using HTML, CSS, Javascript, PHP, Drupal."}),(0,r.jsx)(ce,{pattern:t,title:"UX Engineer",job:"The Briefcase",dates:"May 2014 - Aug 2014",children:"I developed and integrated the front-end of Briefcase with the back-end and also made design/usability decisions. I focused on HTML/CSS/JS but also tended to use PHP to do my job."}),(0,r.jsx)(ce,{pattern:t,title:"UX Intern",job:"The Briefcase",dates:"Dec 2013 - May 2014",children:"I was a front-end user-experience intern that helped implement the web-app and advised on usability decisions."})]})]})}var ue=n(4280),me=n.n(ue);function fe(e){var t=e.alt,n=e.pattern,a=e.src,i=e.description,s=e.title,o=e.href,l=e.service;return(0,r.jsxs)("div",{className:me().workItem,children:[(0,r.jsx)(W,{pattern:n,className:me().imageWrapper,children:(0,r.jsx)("img",{className:me().image,alt:t,src:a,loading:"lazy"})}),(0,r.jsxs)("div",{className:me().copy,children:[(0,r.jsx)(T,{className:me().title,children:s}),(0,r.jsx)(T,{className:me().description,children:i}),(0,r.jsxs)("a",{className:me().link,href:o,children:["See it on ",l]})]})]})}var xe=n(9002),_e=n.n(xe);function be(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ve(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?be(Object(n),!0).forEach((function(t){(0,u.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):be(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ge=[{title:"reticky-tacky",alt:"The reticky-tacky game board",description:"A native ReasonML tic-tac-toe game built with reprocessing.",src:"/images/reticky-tacky.png",href:"https://github.com/blaketarter/reticky-tacky",service:"GitHub"},{title:"simple-fp",alt:"A simple-fp code snippet",description:"A simple, small, no dependency functional programming library used as a tool to explore functional programming concepts.",src:"/images/simple-fp.png",href:"https://github.com/blaketarter/simple-fp",service:"GitHub"},{title:"blaketarter.com",alt:"blaketarter.com screenshot",description:"Did this website need to be over-engineered? No. But it was fun, and a place to explore new technologies and techniques.",src:"/images/blaketarter.com.png",href:"https://github.com/blaketarter/blaketarter.com-2020",service:"GitHub"},{title:"KCMO Bus Stops",alt:"hello world",description:"A React Native application that shows bus stops in the Kansas City area around your current location and hands-off navigation to them using the system navigation app.",src:"/images/kcbus.png",href:"https://play.google.com/store/apps/details?id=com.blaketarter.kcbus",service:"the Play Store"}];function je(e){var t=e.pattern;return(0,r.jsxs)(x,{id:"work",className:_e().someWork,component:"section",children:[(0,r.jsx)(x,{className:_e().titleWrapper,children:(0,r.jsx)(U,{children:"Some Work."})}),(0,r.jsx)(M,{children:(0,r.jsx)(T,{children:"While most of what I do on a day-to-day basis I can't share here for one reason or another, I do find myself sometimes creating stuff worth putting here. It's not always flashy, but I've found that often the fun-stuff doesn't have to be flashy."})}),(0,r.jsx)(M,{size:"small",className:_e().workItems,children:ge.map((function(e){return(0,c.createElement)(fe,ve(ve({},e),{},{pattern:t,key:e.title}))}))})]})}var ye=["diagonal-lines-lg","cross-dots-lg","grid-lg","dots-lg","horizontal-lines-md"];function ke(){var e=s(function(){var e=(0,c.useState)(0),t=e[0],n=e[1];return[ye[t],function(){n((t+1)%ye.length)}]}(),2),t=e[0],n=e[1],a=s(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.persist,n=void 0===t||t,r=e.defaultMode,a=void 0===r?"no-preference":r,i=(0,c.useState)(a),s=i[0],o=i[1],l=(0,c.useCallback)((function(e){o(e)}),[n]);return(0,c.useEffect)((function(){var e=matchMedia("(prefers-color-scheme: dark)");"no-preference"===s&&l(e.matches?"dark":"light"),e.addEventListener&&e.addEventListener("change",(function(){return l(e.matches?"dark":"light")}))}),[l]),[s,l]}(),2),i=a[0],o=a[1];return(0,r.jsxs)("div",{className:l()("App","theme-".concat(i)),children:[(0,r.jsx)(S,{theme:i,setTheme:o}),(0,r.jsx)(re,{pattern:t,nextPattern:n}),(0,r.jsxs)(h,{component:"main",children:[(0,r.jsx)(Y,{pattern:t}),(0,r.jsx)(he,{pattern:t}),(0,r.jsx)(je,{pattern:t}),(0,r.jsx)(X,{pattern:t})]}),(0,r.jsx)(ee,{pattern:t})]})}},5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(4598)}])},938:function(e){e.exports={wrapper:"AnimatedPattern_wrapper__2QLKi",animatedPattern:"AnimatedPattern_animatedPattern__7HiY1"}},4277:function(e){e.exports={bodyParagraph:"BodyParagraph_bodyParagraph__3hIIg"}},7221:function(e){e.exports={borderWrapper:"BorderWrapper_borderWrapper__2pm_W"}},5414:function(e){e.exports={contentSection:"ContentSection_contentSection__1NzOj",small:"ContentSection_small__y9vjI"}},6201:function(e){e.exports={featured:"HistoryFeaturedSection_featured__3WWBd",background:"HistoryFeaturedSection_background__2nOg8",job:"HistoryFeaturedSection_job__1goKC",title:"HistoryFeaturedSection_title__3zj7_",bottom:"HistoryFeaturedSection_bottom__2WRb0",dates:"HistoryFeaturedSection_dates__AWwNM"}},9929:function(e){e.exports={historySection:"HistorySection_historySection__1b9AU",jobBackground:"HistorySection_jobBackground__C42Bq",job:"HistorySection_job__3A77Z",title:"HistorySection_title__2gP_f",bodyWrapper:"HistorySection_bodyWrapper__2diiy",bar:"HistorySection_bar__2LJfb",dates:"HistorySection_dates__32oxB"}},1173:function(e){e.exports={maxWidth:"MaxWidth_maxWidth__9FaHl"}},3057:function(e){e.exports={nav:"Nav_nav__HqUtd",fixed:"Nav_fixed__bXJSp",scrolled:"Nav_scrolled__hxJ3n",navItem:"Nav_navItem__1MAg-",top:"Nav_top__3sh6f",navInner:"Nav_navInner__3Gd7z",theme:"Nav_theme__1DMI4"}},9970:function(e){e.exports={passionSection:"PassionSection_passionSection__sQTKZ",passionBackground:"PassionSection_passionBackground__2Ywrc",passion:"PassionSection_passion__1mfhC",bodyWrapper:"PassionSection_bodyWrapper__3GWr4",bar:"PassionSection_bar__SUCUI"}},5579:function(e){e.exports={about:"SectionAbout_about__CQfw5",titleWrapper:"SectionAbout_titleWrapper__1Do4I",title:"SectionAbout_title__2G11Z",summary:"SectionAbout_summary__1FnNL",pictureBackground:"SectionAbout_pictureBackground__utD9F",picture:"SectionAbout_picture__3b2yK",right:"SectionAbout_right__3ZXaj",skillsSection:"SectionAbout_skillsSection__mDS5x",passionLabel:"SectionAbout_passionLabel__1B8CE"}},6081:function(e){e.exports={findMe:"SectionFindMe_findMe__1dj3N",titleWrapper:"SectionFindMe_titleWrapper__1Wt3H",externalSection:"SectionFindMe_externalSection__295Nl",externalBackground:"SectionFindMe_externalBackground__2DEPh",external:"SectionFindMe_external__2kAfh",link:"SectionFindMe_link__3LgD-"}},4874:function(e){e.exports={footer:"SectionFooter_footer__2SU3P",background:"SectionFooter_background__3hvTf",content:"SectionFooter_content__Cvw8U",footerText:"SectionFooter_footerText__3hTYo",top:"SectionFooter_top__3tiG4"}},3464:function(e){e.exports={hero:"SectionHero_hero__1TEw6",background:"SectionHero_background__2i4yI",content:"SectionHero_content__tkFBP",title:"SectionHero_title__3TwCL",subtitle:"SectionHero_subtitle__1ClSU",new:"SectionHero_new__1poVH"}},7085:function(e){e.exports={history:"SectionHistory_history__101ZQ",titleWrapper:"SectionHistory_titleWrapper__3BRVb"}},9002:function(e){e.exports={someWork:"SectionSomeWork_someWork__h_E_L",titleWrapper:"SectionSomeWork_titleWrapper__1YIZ3",workItems:"SectionSomeWork_workItems__1uuaR"}},5219:function(e){e.exports={skillsSwapper:"SkillsSwapper_skillsSwapper__2lZ4_",frontCopy:"SkillsSwapper_frontCopy__3Zoqn",skillListWrapper:"SkillsSwapper_skillListWrapper__3C-c9",skillItem:"SkillsSwapper_skillItem__3L5S9"}},8404:function(e){e.exports={container:"ThemeModeSwitcher_container__VKPUf",button:"ThemeModeSwitcher_button__jo-Yn",active:"ThemeModeSwitcher_active__2p6aA",sun:"ThemeModeSwitcher_sun__2NaY-",moon:"ThemeModeSwitcher_moon__-vpu6"}},7506:function(e){e.exports={title:"Title_title__W-6_k"}},4280:function(e){e.exports={workItem:"WorkItem_workItem__3XSR6",imageWrapper:"WorkItem_imageWrapper__14TOx",image:"WorkItem_image__22FYU",copy:"WorkItem_copy__OJKuc",title:"WorkItem_title__1eERY",description:"WorkItem_description__cosyN"}},6265:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return r}})}},function(e){e.O(0,[774],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
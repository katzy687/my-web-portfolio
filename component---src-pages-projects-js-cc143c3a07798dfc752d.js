webpackJsonp([0xc260c743ec7c],{54:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function n(e,t){var a={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(a[r]=e[r]);return a}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},i=a(2),l=r(i),s=a(6),c=r(s),u=function(e,t){var a=e.children,r=e.color,i=e.size,s=e.style,c=e.width,u=e.height,p=n(e,["children","color","size","style","width","height"]),d=t.reactIconBase,f=void 0===d?{}:d,m=i||f.size||"1em";return l.default.createElement("svg",o({children:a,fill:"currentColor",preserveAspectRatio:"xMidYMid meet",height:u||m,width:c||m},f,p,{style:o({verticalAlign:"middle",color:r||f.color},f.style||{},s)}))};u.propTypes={color:c.default.string,size:c.default.oneOfType([c.default.string,c.default.number]),width:c.default.oneOfType([c.default.string,c.default.number]),height:c.default.oneOfType([c.default.string,c.default.number]),style:c.default.object},u.contextTypes={reactIconBase:c.default.shape(u.propTypes)},t.default=u,e.exports=t.default},551:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},o=a(2),i=r(o),l=a(54),s=r(l),c=function(e){return i.default.createElement(s.default,n({viewBox:"0 0 40 40"},e),i.default.createElement("g",null,i.default.createElement("path",{d:"m39.3 31.3l-17.1-30c-0.5-0.8-1.3-1.3-2.2-1.3s-1.7 0.5-2.2 1.3l-17.1 30c-0.4 0.7-0.4 1.7 0 2.5s1.3 1.2 2.2 1.2h34.2c0.9 0 1.7-0.5 2.2-1.2s0.4-1.8 0-2.5z m-16.8-1.3h-5v-5h5v5z m0-7.5h-5v-10h5v10z"})))};t.default=c,e.exports=t.default},593:function(e,t,a){e.exports=a.p+"static/astar-Optimized.458551d2.png"},594:function(e,t,a){e.exports=a.p+"static/colors-Optimized.1feae651.png"},595:function(e,t,a){e.exports=a.p+"static/dt-Optimized.aaf75934.png"},596:function(e,t,a){e.exports=a.p+"static/emunah-Optimized.32b5f406.png"},597:function(e,t,a){e.exports=a.p+"static/fancofan-Optimized.4093a361.png"},598:function(e,t,a){e.exports=a.p+"static/gilitowing-Optimized.07d88442.png"},599:function(e,t,a){e.exports=a.p+"static/lordofwar-Optimized.250be7e0.png"},239:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=a(595),o=r(n),i=a(596),l=r(i),s=a(598),c=r(s),u=a(594),p=r(u),d=a(599),f=r(d),m=a(593),g=r(m),h=a(597),j=r(h),y=[{name:"Dank Tickets",description:"Ticketing event site for marijuana conventions. The first project where I incorporated a lot of CSS Grid on the front end. I also hooked up 'Nodemailer' as part of first time user validation flow.",stack:"AngularJS, mongodb, node, express",url:"https://danktickets.herokuapp.com/home",img:o.default},{name:"Emunah",description:"Community site for Rav Dror of Emunah. Hooks into youtube, twitter and soundcloud apis to bring all content to one place.",stack:"angular, youtube, soundcloud apis",url:"https://emunah.com/home",img:l.default},{name:"Gili's Towing",description:"Company landing page for local israeli towing service. First multilingual app. Had to conditonally render rtl or ltr content.",stack:"React / GatsbyJS",url:"https://gili-grar.surge.sh",img:c.default},{name:"Hebrew Vocabulary Game",description:"Small Matching game done for Language Fountain. I wrote animations for slider on top of ng-animate and synced up audio callbacks from a single audio file using start/stop times.",stack:"angularjs, angular material",url:"https://katzy687.github.io/hebrew-colors-webpack-ts/#!/",img:p.default}],b=[{name:"Lord Of War",description:"Small Angular4 project I made for an interview assignment and had a lot of fun with. My first interaction with 'observables', needed to broadcast changes live across parallel components.",stack:"Angular 4",url:"https://katzy687.github.io/lord-of-war",img:f.default},{name:"A-Star-Angular",description:"Small project incorporating the A* pathfinding algorithm into an angularjs UI. The task was an interview assignment, given without proposing an algorithm. I elected to use the A* algorithm over breadth-first-search (BFS) because there is a heuristic of direction that makes it more efficient.",stack:"AngularJS, Angular Material, A-Star Pathfinding module",url:"https://a-star-angular.herokuapp.com/#!/main",img:g.default},{name:"Fanco-Fan",description:"My final project from coding bootcamp, assigned by IBM. I used D3 to visualize seasonal weather data and correlate it with fan sales for a fictional company. Turns out people don't buy fans in the winter :).",stack:"D3, AngularJS, Twilio, WeatherAPI",url:"https://fancofan.herokuapp.com/#/home/totalSales",img:j.default}],v={clientProjects:y,personalProjects:b};t.default=v,e.exports=t.default},244:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=a(2),s=r(l),c=a(551),u=(r(c),a(239)),p=r(u),d=a(329),f=r(d),m=function(e){function t(){var a,r,i;n(this,t);for(var l=arguments.length,s=Array(l),c=0;c<l;c++)s[c]=arguments[c];return a=r=o(this,e.call.apply(e,[this].concat(s))),r.state={slideOpen:!1},r.toggleState=function(){r.setState({slideOpen:!r.state.slideOpen})},i=a,o(r,i)}return i(t,e),t.prototype.render=function(){var e=this.state.slideOpen?f.default.open:"";return s.default.createElement("li",{className:f.default.CardContainer,onClick:this.toggleState},s.default.createElement("div",{className:f.default.imageContainer},s.default.createElement("p",{className:f.default.description},this.props.project.description),s.default.createElement("img",{src:this.props.project.img,alt:this.props.project.name,className:[f.default.slider,e].join(" ")})),s.default.createElement("div",{className:f.default.metadata},s.default.createElement("p",{style:{textAlign:"center",fontSize:"1.2rem",fontWeight:"bold"}},this.props.project.name),s.default.createElement("p",null,s.default.createElement("span",{style:{fontStyle:"italic"}},"Stack"),": ",this.props.project.stack),s.default.createElement("p",{onClick:function(e){return e.stopPropagation()}},s.default.createElement("a",{href:this.props.project.url,target:"_blank"},"URL"))))},t}(l.Component),g=function(e){var t=e.projectList.map(function(e){return s.default.createElement(m,{project:e,key:e.name})});return s.default.createElement("ul",{className:f.default.projectContainer},t)};t.default=function(e){var t=e.data;return console.log(t),s.default.createElement("div",{className:[f.default.PageContainer,"page-styles"].join(" ")},s.default.createElement("p",{style:{textAlign:"center",fontSize:"1rem"}},"(click/tap on card to read more)"),s.default.createElement("h3",null,"Client Projects"),s.default.createElement("section",{className:f.default.ClientProjects},s.default.createElement(g,{projectList:p.default.clientProjects})),s.default.createElement("h3",{style:{marginTop:"2rem"}},"Personal Projects"),s.default.createElement("section",{className:f.default.PersonalProjects},s.default.createElement(g,{projectList:p.default.personalProjects})))},e.exports=t.default},329:function(e,t){e.exports={PageContainer:"src-pages----projects-module---PageContainer---14msp",GatsbyImgOuterWrapper:"src-pages----projects-module---GatsbyImgOuterWrapper---3ElKp",ClientProjects:"src-pages----projects-module---ClientProjects---3TP9I",PersonalProjects:"src-pages----projects-module---PersonalProjects---14G_1",CardContainer:"src-pages----projects-module---CardContainer---46nCs",description:"src-pages----projects-module---description---2eWpz",metadata:"src-pages----projects-module---metadata---391Rf",imageContainer:"src-pages----projects-module---imageContainer---2zWHW",slider:"src-pages----projects-module---slider---2fm9e",open:"src-pages----projects-module---open---3ZdEZ",projectContainer:"src-pages----projects-module---projectContainer---2BkPS"}}});
//# sourceMappingURL=component---src-pages-projects-js-cc143c3a07798dfc752d.js.map
"use strict";(self.webpackChunkshreyas_ambre_portfolio=self.webpackChunkshreyas_ambre_portfolio||[]).push([[841],{8841:(Me,B,A)=>{A.r(B),A.d(B,{HomeModule:()=>se});var K=A(8583),F=A(4363),j={};!function i(s,r,m,v){var P=!!(s.Worker&&s.Blob&&s.Promise&&s.OffscreenCanvas&&s.OffscreenCanvasRenderingContext2D&&s.HTMLCanvasElement&&s.HTMLCanvasElement.prototype.transferControlToOffscreen&&s.URL&&s.URL.createObjectURL);function q(){}function k(n){var t=r.exports.Promise,l=void 0!==t?t:s.Promise;return"function"==typeof l?new l(n):(n(q,q),null)}var t,l,n,a,d,L,U=(n=Math.floor(1e3/60),a={},d=0,"function"==typeof requestAnimationFrame&&"function"==typeof cancelAnimationFrame?(t=function(c){var g=Math.random();return a[g]=requestAnimationFrame(function o(h){d===h||d+n-1<h?(d=h,delete a[g],c()):a[g]=requestAnimationFrame(o)}),g},l=function(c){a[c]&&cancelAnimationFrame(a[c])}):(t=function(c){return setTimeout(c,n)},l=function(c){return clearTimeout(c)}),{frame:t,cancel:l}),x=function(){var n,t,l={};return function(){if(n)return n;if(!m&&P){var d=["var CONFETTI, SIZE = {}, module = {};","("+i.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join("\n");try{n=new Worker(URL.createObjectURL(new Blob([d])))}catch(c){return void 0!==typeof console&&"function"==typeof console.warn&&console.warn("\u{1f38a} Could not load worker",c),null}!function(d){function c(g,o){d.postMessage({options:g||{},callback:o})}d.init=function(o){var h=o.transferControlToOffscreen();d.postMessage({canvas:h},[h])},d.fire=function(o,h,T){if(t)return c(o,null),t;var f=Math.random().toString(36).slice(2);return t=k(function(Z){function b(y){y.data.callback===f&&(delete l[f],d.removeEventListener("message",b),t=null,T(),Z())}d.addEventListener("message",b),c(o,f),l[f]=b.bind(null,{data:{callback:f}})})},d.reset=function(){for(var o in d.postMessage({reset:!0}),l)l[o](),delete l[o]}}(n)}return n}}(),O={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function u(n,t,l){return function(n,t){return t?t(n):n}(n&&function(n){return null!=n}(n[t])?n[t]:O[t],l)}function w(n){return n<0?0:Math.floor(n)}function M(n,t){return Math.floor(Math.random()*(t-n))+n}function E(n){return parseInt(n,16)}function ce(n){return n.map(de)}function de(n){var t=String(n).replace(/[^0-9a-f]/gi,"");return t.length<6&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),{r:E(t.substring(0,2)),g:E(t.substring(2,4)),b:E(t.substring(4,6))}}function ge(n){n.width=document.documentElement.clientWidth,n.height=document.documentElement.clientHeight}function he(n){var t=n.getBoundingClientRect();n.width=t.width,n.height=t.height}function pe(n){var t=n.angle*(Math.PI/180),l=n.spread*(Math.PI/180);return{x:n.x,y:n.y,wobble:10*Math.random(),wobbleSpeed:Math.min(.11,.1*Math.random()+.05),velocity:.5*n.startVelocity+Math.random()*n.startVelocity,angle2D:-t+(.5*l-Math.random()*l),tiltAngle:(.5*Math.random()+.25)*Math.PI,color:n.color,shape:n.shape,tick:0,totalTicks:n.ticks,decay:n.decay,drift:n.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:3*n.gravity,ovalScalar:.6,scalar:n.scalar,flat:n.flat}}function J(n,t){var Z,l=!n,a=!!u(t||{},"resize"),d=!1,c=u(t,"disableForReducedMotion",Boolean),o=P&&u(t||{},"useWorker")?x():null,h=l?ge:he,T=!(!n||!o||!n.__confetti_initialized),f="function"==typeof matchMedia&&matchMedia("(prefers-reduced-motion)").matches;function b(p,D,N){for(var C=u(p,"particleCount",w),S=u(p,"angle",Number),R=u(p,"spread",Number),_=u(p,"startVelocity",Number),Te=u(p,"decay",Number),be=u(p,"gravity",Number),Ae=u(p,"drift",Number),Y=u(p,"colors",ce),we=u(p,"ticks",Number),G=u(p,"shapes"),ye=u(p,"scalar"),qe=!!u(p,"flat"),X=function(n){var t=u(n,"origin",Object);return t.x=u(t,"x",Number),t.y=u(t,"y",Number),t}(p),Q=C,z=[],_e=n.width*X.x,ke=n.height*X.y;Q--;)z.push(pe({x:_e,y:ke,angle:S,spread:R,startVelocity:_,color:Y[Q%Y.length],shape:G[M(0,G.length)],ticks:we,decay:Te,gravity:be,drift:Ae,scalar:ye,flat:qe}));return Z?Z.addFettis(z):(Z=function(n,t,l,a,d){var o,h,c=t.slice(),g=n.getContext("2d"),T=k(function(f){function Z(){o=h=null,g.clearRect(0,0,a.width,a.height),d(),f()}o=U.frame(function b(){m&&!(a.width===v.width&&a.height===v.height)&&(a.width=n.width=v.width,a.height=n.height=v.height),!a.width&&!a.height&&(l(n),a.width=n.width,a.height=n.height),g.clearRect(0,0,a.width,a.height),c=c.filter(function(y){return function(n,t){t.x+=Math.cos(t.angle2D)*t.velocity+t.drift,t.y+=Math.sin(t.angle2D)*t.velocity+t.gravity,t.velocity*=t.decay,t.flat?(t.wobble=0,t.wobbleX=t.x+10*t.scalar,t.wobbleY=t.y+10*t.scalar,t.tiltSin=0,t.tiltCos=0,t.random=1):(t.wobble+=t.wobbleSpeed,t.wobbleX=t.x+10*t.scalar*Math.cos(t.wobble),t.wobbleY=t.y+10*t.scalar*Math.sin(t.wobble),t.tiltAngle+=.1,t.tiltSin=Math.sin(t.tiltAngle),t.tiltCos=Math.cos(t.tiltAngle),t.random=Math.random()+2);var l=t.tick++/t.totalTicks,a=t.x+t.random*t.tiltCos,d=t.y+t.random*t.tiltSin,c=t.wobbleX+t.random*t.tiltCos,g=t.wobbleY+t.random*t.tiltSin;if(n.fillStyle="rgba("+t.color.r+", "+t.color.g+", "+t.color.b+", "+(1-l)+")",n.beginPath(),"circle"===t.shape)n.ellipse?n.ellipse(t.x,t.y,Math.abs(c-a)*t.ovalScalar,Math.abs(g-d)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI):function(n,t,l,a,d,c,g,o,h){n.save(),n.translate(t,l),n.rotate(c),n.scale(a,d),n.arc(0,0,1,0,o,void 0),n.restore()}(n,t.x,t.y,Math.abs(c-a)*t.ovalScalar,Math.abs(g-d)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI);else if("star"===t.shape)for(var o=Math.PI/2*3,h=4*t.scalar,T=8*t.scalar,f=t.x,Z=t.y,b=5,y=Math.PI/b;b--;)f=t.x+Math.cos(o)*T,Z=t.y+Math.sin(o)*T,n.lineTo(f,Z),o+=y,f=t.x+Math.cos(o)*h,Z=t.y+Math.sin(o)*h,n.lineTo(f,Z),o+=y;else n.moveTo(Math.floor(t.x),Math.floor(t.y)),n.lineTo(Math.floor(t.wobbleX),Math.floor(d)),n.lineTo(Math.floor(c),Math.floor(g)),n.lineTo(Math.floor(a),Math.floor(t.wobbleY));return n.closePath(),n.fill(),t.tick<t.totalTicks}(g,y)}),c.length?o=U.frame(b):Z()}),h=Z});return{addFettis:function(f){return c=c.concat(f),T},canvas:n,promise:T,reset:function(){o&&U.cancel(o),h&&h()}}}(n,z,h,D,N)).promise}function y(p){var D=c||u(p,"disableForReducedMotion",Boolean),N=u(p,"zIndex",Number);if(D&&f)return k(function(_){_()});l&&Z?n=Z.canvas:l&&!n&&(n=function(n){var t=document.createElement("canvas");return t.style.position="fixed",t.style.top="0px",t.style.left="0px",t.style.pointerEvents="none",t.style.zIndex=n,t}(N),document.body.appendChild(n)),a&&!T&&h(n);var C={width:n.width,height:n.height};function S(){if(o){var _={getBoundingClientRect:function(){if(!l)return n.getBoundingClientRect()}};return h(_),void o.postMessage({resize:{width:_.width,height:_.height}})}C.width=C.height=null}function R(){Z=null,a&&(d=!1,s.removeEventListener("resize",S)),l&&n&&(document.body.removeChild(n),n=null,T=!1)}return o&&!T&&o.init(n),T=!0,o&&(n.__confetti_initialized=!0),a&&!d&&(d=!0,s.addEventListener("resize",S,!1)),o?o.fire(p,C,R):b(p,C,R)}return y.reset=function(){o&&o.reset(),Z&&Z.reset()},y}function V(){return L||(L=J(null,{useWorker:!0,resize:!0})),L}r.exports=function(){return V().apply(this,arguments)},r.exports.reset=function(){V().reset()},r.exports.create=J}(function(){return"undefined"!=typeof window?window:"undefined"!=typeof self?self:this||{}}(),j,!1);var $=j.exports.create,ee=A(7574),W=A(3637),te=A(6561);function oe(i){const{subscriber:s,counter:r,period:m}=i;s.next(r),this.schedule({subscriber:s,counter:r+1,period:m},m)}var e=A(3018),re=A(3363);const ae=[{path:"",component:(()=>{class i{constructor(r,m){this.service=r,this.route=m,this.fireInterval=function(i=0,s=W.P){return(!(0,te.k)(i)||i<0)&&(i=0),(!s||"function"!=typeof s.schedule)&&(s=W.P),new ee.y(r=>(r.add(s.schedule(oe,i,{subscriber:r,counter:0,period:i})),r))}(1e3)}ngOnInit(){}ngAfterViewInit(){this.fire("schoolPride")}fire(r,m,v){let P=document.getElementById("confetti-canvas");var q=$(P,{resize:!0}),k=["#f58220","#053f5c"],U=Date.now()+3e3;switch(r){case"fireworks":let u=function(w,M){return Math.random()*(M-w)+w};var O=Date.now()+15e3,I={startVelocity:30,spread:360,ticks:60,zIndex:0},H=setInterval(function(){var w=O-Date.now();if(w<=0)return clearInterval(H);var M=w/15e3*50;q(Object.assign(Object.assign({},I),{particleCount:M,origin:{x:u(.1,.3),y:Math.random()-.2}})),q(Object.assign(Object.assign({},I),{particleCount:M,origin:{x:u(.7,.9),y:Math.random()-.2}}))},250);break;case"schoolPride":!function w(){q({particleCount:2,angle:60,spread:55,origin:{x:0},colors:k}),q({particleCount:2,angle:120,spread:65,origin:{x:1},colors:k}),Date.now()<U&&requestAnimationFrame(w)}()}}navigateTo(r){this.route.navigate([r])}downloadResume(){this.service.getResumeDownload("Shreyas-Ambre-Resume-v3","assets/docs/Shreyas-Ambre-Resume-v3.pdf")}goToSocialHandle(r){this.service.openSocialHandle(r)}openGithubProject(r){"carpulling"===r?window.open("https://github.com/ShreyasAmbre/carpooling#readme"):"tradingproject"===r?window.open("https://github.com/ShreyasAmbre/tradingPlatformSnaps"):"realestateproject"===r&&window.open("https://github.com/ShreyasAmbre/poonampostsellrepo")}}return i.\u0275fac=function(r){return new(r||i)(e.Y36(re.f),e.Y36(F.F0))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-home"]],decls:188,vars:0,consts:[[1,"container-fluid"],["id","confetti-canvas"],[1,"container"],[1,"row","pt-5"],[1,"col-6",2,"margin-top","7%"],[1,"row","p-0","mx-0","my-2"],[1,"col-12"],[1,"subTitleDivider"],[1,"contactSubTitle","subTitleFont"],[1,"contactTitle","titleFont"],[1,"row","p-0","m-0",2,"height","10%","text-align","center"],[1,"col-1",3,"click"],["width","25","height","25","src","assets/images/google.png","alt","googleicon"],["width","25","height","25","src","assets/images/linkedin.png","alt","linkedinicon"],["width","25","height","25","src","assets/images/github.png","alt","twitterv"],["width","25","height","25","src","assets/images/whatsapp.png","alt","whatsappicon"],["type","button",1,"btnClass","homeBtnClass","my-3","mx-2",3,"click"],["type","button",1,"btnClassOutline","homeBtnClass","my-3","mx-2",3,"click"],[1,"col-6","text-center"],["src","assets/images/profilePic.png","alt","profilePic"],[1,"container-fluid",2,"background-color","#ff5c0012"],[1,"row","align-items-center",2,"height","247px"],[1,"col","text-center"],["src","assets/images/html.png","alt","html",1,"homeLanguages"],["src","assets/images/css.png","alt","html",1,"homeLanguages"],["src","assets/images/js.png","alt","html",1,"homeLanguages"],["src","assets/images/ts.png","alt","html",1,"homeLanguages"],["src","assets/images/angular.png","alt","html",1,"homeLanguages"],[1,"row","py-3","px-0","justify-content-center",2,"margin","7% 0%"],[1,"col-7","text-center"],[1,"contactDescription","descriptionFont"],[1,"row"],[1,"col-6"],[1,"row","p-0","m-0"],[1,"row","p-0","mx-0"],["src","assets/images/working-poster.png","alt","profilePic",2,"width","66%","border-radius","56px"],[2,"height","750px"],[1,"container-fluid",2,"margin","9% 0%","background-color","#f1faff"],[1,"container",2,"position","relative"],[1,"row","py-5",2,"height","350px"],[1,"col-9"],[1,"row","my-3","justify-content-center",2,"position","absolute","top","65%"],[1,"col-4","mb-4"],[1,"card","h-100"],[1,"card-body","p-0"],[1,"d-flex","flex-column",2,"height","auto"],[1,"p-2"],[1,"card-title"],[1,"card-text"],[1,"px-2","py-3","mt-auto"],[1,"btnClass","my-1",3,"click"],[1,"d-flex","flex-column"],[1,"d-flex","flex-column",2,"height","100%"],[1,"row","py-3","px-0","justify-content-center"],[1,"contactTitle"],[1,"row","align-items-center",2,"height","400px"],[1,"row","justify-content-around"],[1,"col-12","pt-5","px-5","align-self-center","recommandationContainer"],[2,"height","70%","overflow-y","scroll"],[1,"recommandationDescription","descriptionFont"],[2,"height","30%"],[1,"row","h-100","align-items-center"],[1,"col-12","align-self-center"],[1,"m-0","p-0","recommandationName","subTitleFont"],[1,"m-0","p-0","recommandationDesignation","descriptionFont"]],template:function(r,m){1&r&&(e.TgZ(0,"div",0),e._UZ(1,"canvas",1),e.TgZ(2,"div",2),e.TgZ(3,"div",3),e.TgZ(4,"div",4),e.TgZ(5,"div",5),e.TgZ(6,"div",6),e._UZ(7,"div",7),e._uU(8,"\xa0 "),e.TgZ(9,"p",8),e.TgZ(10,"b"),e._uU(11,"Welcome"),e.qZA(),e.qZA(),e.TgZ(12,"h2",9),e._uU(13,"Hello, My name\u2019s"),e.qZA(),e.TgZ(14,"h2",9),e._uU(15,"Shreyas Ambre. I'm"),e.qZA(),e.TgZ(16,"h2",9),e._uU(17,"Angular Developer"),e.qZA(),e.qZA(),e.TgZ(18,"div",10),e.TgZ(19,"div",11),e.NdJ("click",function(){return m.goToSocialHandle("gmail")}),e._UZ(20,"img",12),e.qZA(),e.TgZ(21,"div",11),e.NdJ("click",function(){return m.goToSocialHandle("linkedin")}),e._UZ(22,"img",13),e.qZA(),e.TgZ(23,"div",11),e.NdJ("click",function(){return m.goToSocialHandle("github")}),e._UZ(24,"img",14),e.qZA(),e.TgZ(25,"div",11),e.NdJ("click",function(){return m.goToSocialHandle("whatsapp")}),e._UZ(26,"img",15),e.qZA(),e.qZA(),e.qZA(),e.TgZ(27,"div",5),e.TgZ(28,"button",16),e.NdJ("click",function(){return m.navigateTo("contact")}),e.TgZ(29,"b"),e._uU(30,"Let's Connect"),e.qZA(),e.qZA(),e.TgZ(31,"button",17),e.NdJ("click",function(){return m.downloadResume()}),e.TgZ(32,"b"),e._uU(33,"Download Resume"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(34,"div",18),e._UZ(35,"img",19),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(36,"div",20),e.TgZ(37,"div",2),e.TgZ(38,"div",21),e.TgZ(39,"div",22),e._UZ(40,"img",23),e.qZA(),e.TgZ(41,"div",22),e._UZ(42,"img",24),e.qZA(),e.TgZ(43,"div",22),e._UZ(44,"img",25),e.qZA(),e.TgZ(45,"div",22),e._UZ(46,"img",26),e.qZA(),e.TgZ(47,"div",22),e._UZ(48,"img",27),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(49,"div",0),e.TgZ(50,"div",2),e.TgZ(51,"div",28),e.TgZ(52,"div",29),e.TgZ(53,"p",8),e.TgZ(54,"b"),e._uU(55,"Introduction"),e.qZA(),e.qZA(),e.TgZ(56,"h2",9),e._uU(57,"About Me."),e.qZA(),e.TgZ(58,"p",30),e._uU(59," I am a professional front-end developer with 3+ years of experience, Passionate about my work, and always eager to grow my skill set to improve the product I m working on. Always ready to take responsibility, Quick Learner, Team player, Love to help colleagues. "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(60,"div",31),e.TgZ(61,"div",32),e.TgZ(62,"div",33),e.TgZ(63,"div",6),e._UZ(64,"div",7),e._uU(65,"\xa0 "),e.TgZ(66,"p",8),e.TgZ(67,"b"),e._uU(68,"Experience & Responsibilities"),e.qZA(),e.qZA(),e.TgZ(69,"h2",9),e._uU(70,"With 3+ Years of"),e.qZA(),e.TgZ(71,"h2",9),e._uU(72,"Experience in Angular"),e.qZA(),e.TgZ(73,"h2",9),e._uU(74," Development"),e.qZA(),e.TgZ(75,"p",30),e.TgZ(76,"li"),e._uU(77," Working on client requirements using the Angular framework."),e.qZA(),e.TgZ(78,"li"),e._uU(79," Fixing bugs assign by the testing team."),e.qZA(),e.TgZ(80,"li"),e._uU(81," Reporting to team leader on daily task reports."),e.qZA(),e.TgZ(82,"li"),e._uU(83," Attending meetings with clients and project manager."),e.qZA(),e.TgZ(84,"li"),e._uU(85," Collaborating with different teams on building websites."),e.qZA(),e.TgZ(86,"li"),e._uU(87," Attending live issue in case of any arrivales."),e.qZA(),e.TgZ(88,"li"),e._uU(89," Guiding juniors, Interns in their tasks."),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(90,"div",34),e.TgZ(91,"button",17),e.NdJ("click",function(){return m.downloadResume()}),e.TgZ(92,"b"),e._uU(93,"Download Resume"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(94,"div",18),e._UZ(95,"img",35),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(96,"div",36),e.TgZ(97,"div",37),e.TgZ(98,"div",38),e.TgZ(99,"div",39),e.TgZ(100,"div",40),e._UZ(101,"div",7),e._uU(102,"\xa0 "),e.TgZ(103,"p",8),e.TgZ(104,"b"),e._uU(105,"Projects"),e.qZA(),e.qZA(),e.TgZ(106,"h2",9),e._uU(107,"Real Time Projects"),e.qZA(),e.TgZ(108,"p",30),e._uU(109," Those are some of the projects I would like to showcase it. Where I have used my frontend skill set. There are some industry-level projects & some of them are my personal projects. Where I have used Angular & Ionic Framework. "),e.qZA(),e.qZA(),e.TgZ(110,"div",41),e.TgZ(111,"div",42),e.TgZ(112,"div",43),e.TgZ(113,"div",44),e.TgZ(114,"div",45),e.TgZ(115,"div",46),e.TgZ(116,"h5",47),e._uU(117,"Car Pulling App"),e.qZA(),e.TgZ(118,"p",48),e._uU(119,"This project is built using Angular Framework concepts. This project helps to ask for the lift if any one of them are traveling through the same route which helps to reduce traffic problem & air pollution. It was build to practice the Angular Framework to have hands on and get fimiliar with technology."),e.qZA(),e.qZA(),e.TgZ(120,"div",49),e.TgZ(121,"button",50),e.NdJ("click",function(){return m.openGithubProject("carpulling")}),e._uU(122,"Github Link"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(123,"div",42),e.TgZ(124,"div",43),e.TgZ(125,"div",44),e.TgZ(126,"div",51),e.TgZ(127,"div",46),e.TgZ(128,"h5",47),e._uU(129,"Trading Platform"),e.qZA(),e.TgZ(130,"p",48),e._uU(131," m.Stock is a stocks trading platform on which I had worked using HTML, CSS, Javascript, Typescript, Angular, Angular Material, Firebase, REST API's, and many more. You can refer screenshot of this project for understanding of my project. As this is a commercial project I m not allowed disclose the code. "),e.qZA(),e.qZA(),e.TgZ(132,"div",49),e.TgZ(133,"button",50),e.NdJ("click",function(){return m.openGithubProject("tradingproject")}),e._uU(134,"Github Link"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(135,"div",42),e.TgZ(136,"div",43),e.TgZ(137,"div",44),e.TgZ(138,"div",52),e.TgZ(139,"div",46),e.TgZ(140,"h5",47),e._uU(141,"Real Estate Management App"),e.qZA(),e.TgZ(142,"p",48),e._uU(143,"This project is build with help of Angular as frontend & REST API's of backend. It help to onbard the client after client Purchace the Flat and their documentation and calcuation of Area is handled on this platform from start to end."),e.qZA(),e.qZA(),e.TgZ(144,"div",49),e.TgZ(145,"button",50),e.NdJ("click",function(){return m.openGithubProject("realestateproject")}),e._uU(146,"Github Link"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(147,"div",0),e.TgZ(148,"div",2),e.TgZ(149,"div",53),e.TgZ(150,"div",29),e.TgZ(151,"p",8),e.TgZ(152,"b"),e._uU(153,"Received"),e.qZA(),e.qZA(),e.TgZ(154,"h2",54),e._uU(155,"Recommendation's"),e.qZA(),e.TgZ(156,"p",30),e._uU(157," Below are some of the best recommendation's given by professionals with whom I have worked in my entire career journey. It helps to motivate me more to upgrade my professional growth. "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(158,"div",55),e.TgZ(159,"div",32),e.TgZ(160,"div",56),e.TgZ(161,"div",57),e.TgZ(162,"div",58),e.TgZ(163,"span",59),e._uU(164," \u201c Shreyas is an outstanding Angular Developer professional dedicate to create value to organization. He has attention to details, provide suitable & most appropriate solution towards the projects. Shreyas worked with me on the project where I was team lead @Rupeeseed Technology Ventures Group\u201c "),e.qZA(),e.qZA(),e.TgZ(165,"div",60),e.TgZ(166,"div",61),e.TgZ(167,"div",62),e.TgZ(168,"p",63),e._uU(169,"Pooja Chaudhari"),e.qZA(),e.TgZ(170,"p",64),e._uU(171,"Sr. Software Developer @ Rupeeseed Ventures Pvt. Ltd. "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(172,"div",32),e.TgZ(173,"div",56),e.TgZ(174,"div",57),e.TgZ(175,"div",58),e.TgZ(176,"span",59),e._uU(177," \u201c I have worked on a project with Shreyas @RSVPL for WEB development. I have observed his keen interest in understanding functional issues and solving them with patience and focus. A friendly and joy full team player, which helps keep the work environment light.\u201c "),e.qZA(),e.qZA(),e.TgZ(178,"div",60),e.TgZ(179,"div",61),e.TgZ(180,"div",62),e.TgZ(181,"p",63),e._uU(182,"Tejaswinee Patkar"),e.qZA(),e.TgZ(183,"p",64),e._uU(184,"Project Manager @ Rupeeseed Ventures Pvt. Ltd. "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e._UZ(185,"br"),e._UZ(186,"br"),e._UZ(187,"br"))},styles:[".contactContainerColor[_ngcontent-%COMP%]{background-color:#f0fcff}.contactTitle[_ngcontent-%COMP%]{color:var( --secondary-color );font-size:52px;font-weight:600;line-height:1.3em}.subTitleDivider[_ngcontent-%COMP%]{height:2px;width:42px;background-color:var(--secondary-color);border:1px solid var(--secondary-color);display:inline-block;vertical-align:middle;border-radius:5px}.contactSubTitle[_ngcontent-%COMP%]{color:var( --secondary-color );font-size:18px;font-weight:500;line-height:1.2em;margin-bottom:20px;display:inline-block}.homeLanguages[_ngcontent-%COMP%]{width:70px;height:auto}.contactSocialMediaImg[_ngcontent-%COMP%]{width:39px;height:39px;padding:2%}.contactDescription[_ngcontent-%COMP%]{font-size:16px}.homeBtnClass[_ngcontent-%COMP%]{width:175px!important;height:45px!important}.recommdationProfilePic[_ngcontent-%COMP%]{background-color:#ffaa61;border-radius:50%;height:68px}.recommandationContainer[_ngcontent-%COMP%]{width:90%;height:350px;background-color:var(--recommendation-background);border-radius:30px}.recommandationName[_ngcontent-%COMP%]{font-size:20px}.recommandationDesignation[_ngcontent-%COMP%]{font-size:15px;color:var(--light-black-subtitle-color)}.recommandationDescription[_ngcontent-%COMP%]{font-size:22px}[_ngcontent-%COMP%]::-webkit-scrollbar{width:2px}[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:#f1f1f1}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:var(--btn-background-color);border-radius:20px}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:#555}#confetti-canvas[_ngcontent-%COMP%]{bottom:-30%;width:95%;position:absolute}"]}),i})()}];let le=(()=>{class i{}return i.\u0275fac=function(r){return new(r||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[F.Bz.forChild(ae)],F.Bz]}),i})(),se=(()=>{class i{}return i.\u0275fac=function(r){return new(r||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[K.ez,le]]}),i})()}}]);
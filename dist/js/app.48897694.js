(function(t){function e(e){for(var r,n,o=e[0],l=e[1],c=e[2],d=0,m=[];d<o.length;d++)n=o[d],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&m.push(s[n][0]),s[n]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(m.length)m.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],r=!0,o=1;o<a.length;o++){var l=a[o];0!==s[l]&&(r=!1)}r&&(i.splice(e--,1),t=n(n.s=a[0]))}return t}var r={},s={app:0},i=[];function n(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=r,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(a,r,function(e){return t[e]}.bind(null,r));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/JanGviO/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"089b":function(t,e,a){},"0cd5":function(t,e,a){"use strict";var r=a("8c75"),s=a.n(r);s.a},1195:function(t,e,a){t.exports=a.p+"img/avatar.17b08a8e.png"},1771:function(t,e,a){var r={"./Male-Avatar.png":"b082","./add.svg":"eef4","./avatar.png":"1195","./black.svg":"2eef","./burger.svg":"2e69","./card.jpg":"243f","./comment.svg":"cf89","./explore.svg":"6fb7","./following.svg":"7ab2","./full_comment.svg":"60df","./happy.svg":"5582","./jangvio.svg":"d409","./loading.gif":"cf1c","./premium.svg":"2832","./search.svg":"51f2","./share.svg":"6f2b"};function s(t){var e=i(t);return a(e)}function i(t){if(!a.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}s.keys=function(){return Object.keys(r)},s.resolve=i,t.exports=s,s.id="1771"},"1b60":function(t,e,a){},"1d3c":function(t,e,a){},"243f":function(t,e,a){t.exports=a.p+"img/card.d7d5441e.jpg"},2832:function(t,e,a){t.exports=a.p+"img/premium.0af00831.svg"},"2e69":function(t,e,a){t.exports=a.p+"img/burger.e7123fb3.svg"},"2eab":function(t,e,a){"use strict";var r=a("3210"),s=a.n(r);s.a},"2eef":function(t,e,a){t.exports=a.p+"img/black.8311a06b.svg"},3210:function(t,e,a){},"4a71":function(t,e,a){"use strict";var r=a("aca3"),s=a.n(r);s.a},"4f6e":function(t,e,a){"use strict";var r=a("f360"),s=a.n(r);s.a},"51f2":function(t,e,a){t.exports=a.p+"img/search.1c4c4489.svg"},5582:function(t,e,a){t.exports=a.p+"img/happy.1bd91a28.svg"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg-light",attrs:{id:"app"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.$store.getters.get_loading,expression:"$store.getters.get_loading"}]},[a("Loading")],1),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.$store.getters.get_loading,expression:"!$store.getters.get_loading"}]},[a("NavBar",{attrs:{id:"left-top-nav"}}),a("router-view"),a("MobileNav",{attrs:{id:"bottom-m-nav"}})],1)])},i=[],n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("header",{staticClass:"navbar navbar-expand-lg navbar-light bg-white ml-5 fixed-top",attrs:{id:"main-nav"}},[t._m(0),r("div",{staticClass:"main-links ml-auto pl-5 bg-white"},[t._l(t.mainLinks,(function(e,s){return r("div",{key:s,staticClass:"bg-white",class:{avatar:s===t.activeItem&&t.curRoute==e.path,avatar:t.curRoute==e.path},style:t.varColor,on:{click:function(e){return t.selectItem(s)}}},[r("router-link",{attrs:{to:e.path}},[r("img",{staticClass:"target bg-white",class:{invisible:e.invisible},attrs:{src:a("1771")("./"+e.src),width:"30",height:"30",alt:"Profile Avatar",id:e.tooltip}})]),r("b-tooltip",{attrs:{target:e.tooltip,placement:"bottom",offset:"0",variant:"primary"}},[t._v(t._s(e.tooltip))])],1)})),r("div",{staticClass:"bg-white",style:t.varColor},[r("div",{directives:[{name:"b-modal",rawName:"v-b-modal.searchBtn",modifiers:{searchBtn:!0}}]},[r("img",{staticClass:"target bg-white",attrs:{src:a("51f2"),width:"30",height:"30",alt:"Profile Avatar",id:"searchModal"}})]),r("b-tooltip",{attrs:{target:"searchModal",placement:"bottom",offset:"0",variant:"primary"}},[t._v("Search")])],1)],2),r("div",{staticClass:"pl-2",attrs:{id:"addBtn"}},[r("addBtn")],1),r("div",{staticClass:"nav-buttons ml-auto bg-white"},[r("button",{directives:[{name:"b-modal",rawName:"v-b-modal.signInModal",modifiers:{signInModal:!0}}],staticClass:"btn btn-sm px-3 ml-2 rounded-top-left rounded-top-right rounded-bottom-left rounded-bottom-right",class:{"btn-outline-primary":"/premium"!==t.$router.currentRoute.fullPath,"btn-outline-secondary":"/premium"===t.$router.currentRoute.fullPath},attrs:{type:"button"}},[t._v("Sign In")]),r("button",{directives:[{name:"b-modal",rawName:"v-b-modal.signUpModal",modifiers:{signUpModal:!0}}],staticClass:"btn btn-sm px-3 ml-2 rounded-top-left rounded-top-right rounded-bottom-left rounded-bottom-right",class:{"btn-danger":"/premium"!==t.$router.currentRoute.fullPath,"btn-warning":"/premium"===t.$router.currentRoute.fullPath},attrs:{type:"button"}},[t._v("Sign Up")]),r("div",{staticClass:"position-fixed"},[r("SignInModal"),r("SignUpModal"),r("SearchModal")],1)])]),r("header",{staticClass:"navbar navbar-light bg-white flex-column fixed-bottom h-100",attrs:{id:"aside"}},[r("router-link",{staticClass:"bg-white pt-1 mb-5",attrs:{to:"/"}},[r("img",{staticClass:"bg-white logo-shadow-sm",attrs:{src:a("d409"),width:"40",alt:"JanGvio Logo"}})]),r("div",{staticClass:"mb-auto bg-transparent mt-5"},t._l(t.sideLinks,(function(e,s){return r("div",{key:s,staticClass:"mb-5",class:{sideAvatar:s===t.sideActiveItem},style:t.varColor,on:{click:function(e){return t.selectSideItem(s)}}},[r("router-link",{attrs:{to:e.path}},[r("img",{staticClass:"bg-white",attrs:{src:a("1195"),width:"30",height:"30",alt:"Profile Avatar",id:e.tooltip}})]),r("b-tooltip",{staticClass:"tooltip-right",attrs:{target:e.tooltip,placement:"right",offset:"0",variant:"primary"}},[t._v(t._s(e.tooltip))])],1)})),0)],1)])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex flex-column align-items-left ml-5",attrs:{href:"#"}},[a("span",{staticClass:"bg-white h5 mb-0"},[t._v("JanGvio")]),a("small",{staticClass:"bg-white text-muted"},[t._v("Lorem Ipsem Maseep!")])])}],l=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{style:t.varColor},[r("div",{staticClass:"container wrap"},[r("ul",{staticClass:"bg-white rounded-full",attrs:{id:"menu"}},[r("a",{staticClass:"menu-button d-flex justify-content-center",attrs:{href:t.triggerHREF,title:t.triggerStatus},on:{click:t.toggleState}},[r("img",{staticClass:"target-addBtn bg-transparent",attrs:{src:a("eef4"),width:"26",alt:"Add Button Icon SVG"}})]),t._m(0),t._m(1),t._m(2),t._m(3)])])])},c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"menu-item"},[a("a",{attrs:{href:"#menu"}},[a("span",{staticClass:"fas fa-github"})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"menu-item"},[a("a",{attrs:{href:"#menu"}},[a("span",{staticClass:"fas fa-linkedin"})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"menu-item"},[a("a",{attrs:{href:"#menu"}},[a("span",{staticClass:"fas fa-instagram"})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"menu-item"},[a("a",{attrs:{href:"#menu"}},[a("span",{staticClass:"fas fa-twitter"})])])}],u={data:function(){return{triggerHREF:"#0",triggerStatus:"Show Navigation",variableColor:"#1fb6ff"}},methods:{toggleState:function(){var t=document.querySelector(".target-addBtn");"#menu"===this.triggerHREF?(this.triggerHREF="#0",this.triggerStatus="Hide Navigation",t.classList.remove("rotate-forward"),t.classList.add("rotate-back")):(this.triggerHREF="#menu",this.triggerStatus="Show Navigation",t.classList.add("rotate-forward"),t.classList.remove("rotate-back"))}},computed:{varColor:function(){return{"--var-color":this.variableColor}},curRoute:function(){return this.$route.fullPath}},mounted:function(){"/premium"===this.$route.fullPath?this.variableColor="gold":this.variableColor="#1fb6ff"},watch:{curRoute:function(){"/premium"===this.$route.fullPath?this.variableColor="gold":this.variableColor="#1fb6ff"}}},d=u,m=(a("bc36"),a("2877")),f=Object(m["a"])(d,l,c,!1,null,"1e12621b",null),p=f.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-modal",{attrs:{id:"signInModal",size:"md",centered:"true","button-size":"sm","title-class":"h5 bg-transparent text-white",title:"Sign In","header-bg-variant":t.curMode,"header-border-variant":t.curMode,"header-close-variant":"white","header-class":"rounded-0","footer-class":"button border-0","modal-class":"my-class","content-class":"custom-shadow border-0","dialog-class":"bg-transparent","footer-bg-variant":"light","ok-title":"Sign In","ok-variant":t.curBtnMode,"cancel-variant":"outline-secondary px-3 ml-2 rounded-top-left rounded-top-right rounded-bottom-left rounded-bottom-right"}},[a("div",{staticClass:"px-4 pt-3"},[a("SignInForm")],1)])],1)},b=[],h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.show?a("b-form",{on:{submit:t.onSubmit,reset:t.onReset}},[a("b-form-group",{attrs:{id:"name-input-group-signin",label:"Your Name:","label-for":"nameInput"}},[a("b-form-input",{attrs:{id:"nameInput",required:"",placeholder:"Enter name"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),a("b-form-group",{attrs:{id:"email-input-group-signin",label:"Email address:","label-for":"emailInput"}},[a("b-form-input",{attrs:{id:"emailInput",type:"email",required:"",placeholder:"Enter email","aria-describedby":""},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}}),a("b-form-text",{attrs:{id:"email-help-block"}},[t._v("We'll never share your email with anyone else.")])],1),a("b-form-group",{attrs:{id:"password-input-group-signin",label:"Password:","label-for":"passwordInput"}},[a("b-input",{attrs:{type:"password",id:"passwordInput","aria-describedby":"password-help-block"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}}),a("b-form-text",{attrs:{id:"password-help-block"}},[t._v(" Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji. ")])],1)],1):t._e()],1)},v=[],C={data:function(){return{form:{email:"",name:"",password:""},show:!0}}},w=C,_=Object(m["a"])(w,h,v,!1,null,null,null),x=_.exports,y={components:{SignInForm:x},computed:{curRoute:function(){return this.$route.fullPath},curMode:function(){return"/premium"===this.curRoute?"warning":"primary"},curBtnMode:function(){return"/premium"===this.curRoute?"warning px-3 ml-2 rounded-top-left rounded-top-right rounded-bottom-left rounded-bottom-right":"primary px-3 ml-2 rounded-top-left rounded-top-right rounded-bottom-left rounded-bottom-right"}}},I=y,S=(a("db38"),Object(m["a"])(I,g,b,!1,null,"83662346",null)),k=S.exports,$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-modal",{attrs:{id:"signUpModal",size:"md",centered:"true","button-size":"sm","title-class":"h5 bg-transparent text-white",title:"Sign Up","header-bg-variant":t.curMode,"header-border-variant":t.curMode,"header-close-variant":"white","header-class":"rounded-0","footer-class":"button border-0","modal-class":"my-class","content-class":"custom-shadow border-0","dialog-class":"bg-transparent","footer-bg-variant":"light","ok-title":"Sign Up","ok-variant":t.curBtnMode,"cancel-variant":"outline-secondary px-3 ml-2 rounded-top-left rounded-top-right rounded-bottom-left rounded-bottom-right"}},[a("div",{staticClass:"px-4 pt-3"},[a("SignUpForm")],1)])],1)},E=[],P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.show?a("b-form",{on:{submit:t.onSubmit,reset:t.onReset}},[a("b-form-group",{attrs:{id:"name-input-group-signup",label:"Your Name:","label-for":"nameInput"}},[a("b-form-input",{attrs:{id:"nameInput",required:"",placeholder:"Enter name"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),a("b-form-group",{attrs:{id:"email-input-group-signup",label:"Email address:","label-for":"emailInput"}},[a("b-form-input",{attrs:{id:"emailInput",type:"email",required:"",placeholder:"Enter email","aria-describedby":""},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}}),a("b-form-text",{attrs:{id:"email-help-block"}},[t._v("We'll never share your email with anyone else.")])],1),a("b-form-group",{attrs:{id:"password-input-group-signup",label:"Password:","label-for":"passwordInput"}},[a("b-input",{attrs:{type:"password",id:"passwordInput","aria-describedby":"password-help-block"}}),a("b-form-text",{attrs:{id:"password-help-block"}},[t._v(" Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji. ")])],1),a("b-form-group",{attrs:{id:"confirm-password-input-group-signup",label:"Confirm Password:","label-for":"confirmPasswordInput"}},[a("b-input",{attrs:{type:"password",id:"confirmPasswordInput"}})],1)],1):t._e()],1)},M=[],O={data:function(){return{form:{email:"",name:"",food:""},show:!0}}},j=O,B=Object(m["a"])(j,P,M,!1,null,null,null),R=B.exports,T={components:{SignUpForm:R},computed:{curRoute:function(){return this.$route.fullPath},curMode:function(){return"/premium"===this.curRoute?"warning":"primary"},curBtnMode:function(){return"/premium"===this.curRoute?"warning px-3 ml-2 rounded-top-left rounded-top-right rounded-bottom-left rounded-bottom-right":"primary px-3 ml-2 rounded-top-left rounded-top-right rounded-bottom-left rounded-bottom-right"}}},L=T,H=(a("7b0b7"),Object(m["a"])(L,$,E,!1,null,"095802fb",null)),N=H.exports,F=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-modal",{attrs:{id:"searchBtn",size:"lg","hide-header":"true","hide-footer":"true","modal-class":"my-class","body-bg-variant":"transparent","content-class":"custom-shadow border-0","dialog-class":"bg-transparent"}},[r("div",{staticClass:"input-group my-5 bg-transparent shadow-lg"},[r("input",{staticClass:"form-control px-5 padding-top-bottom bg-white border-0",attrs:{type:"text",placeholder:"Recipient's username","aria-label":"Recipient's username","aria-describedby":"button-addon2"}}),r("div",{staticClass:"input-group-append bg-transparent"},[r("button",{staticClass:"btn btn-light border-0 px-5 padding-top-bottom",style:{backgroundImage:"url("+a("1771")("./"+t.searchImg)+")"},attrs:{type:"button",id:"button-addon2"}})])])])],1)},A=[],G={data:function(){return{searchImg:"search.svg"}}},U=G,W=(a("a50f"),Object(m["a"])(U,F,A,!1,null,"318977e0",null)),J=W.exports,V={components:{addBtn:p,SignInModal:k,SignUpModal:N,SearchModal:J},data:function(){return{mainLinks:[{path:"/",tooltip:"Explore",invisible:!1,src:"explore.svg",id:"exploreBtn"},{path:"/premium",tooltip:"Premium",invisible:!1,src:"premium.svg",id:"premiumBtn"},{path:"",tooltip:"Empty",invisible:!0,src:"avatar.png",id:""},{path:"/following",tooltip:"Following",invisible:!1,src:"following.svg",id:"followingBtn"}],sideLinks:[{path:"/profile",tooltip:"One"}],activeItem:0,sideActiveItem:null,variableColor:"#1fb6ff"}},methods:{selectItem:function(t){this.activeItem=t},selectSideItem:function(t){this.sideActiveItem=t}},computed:{curPath:function(){return this.$router.currentRoute.fullPath},varColor:function(){return{"--var-color":this.variableColor}},curRoute:function(){return this.$route.fullPath}},mounted:function(){for(var t=0;t<this.mainLinks.length;t++)this.curPath===this.mainLinks[t].path&&(this.activeItem=t);"/premium"===this.$route.fullPath?this.variableColor="gold":this.variableColor="#1fb6ff"},watch:{curRoute:function(){this.sideActiveItem=null,"/premium"===this.$route.fullPath?this.variableColor="gold":this.variableColor="#1fb6ff"}}},q=V,z=(a("4a71"),Object(m["a"])(q,n,o,!1,null,"5098e01e",null)),Y=z.exports,D=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},K=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"loading-page bg-white"},[r("div",{staticClass:"custom-loading bg-transparent"},[r("img",{staticClass:"logo-shadow-lg",attrs:{src:a("d409"),alt:"JanGviO SVG"}}),r("img",{staticClass:"card-img mt-5",attrs:{src:a("cf1c"),alt:"Loading GIF"}})])])}],Q={},X=Q,Z=(a("affa"),Object(m["a"])(X,D,K,!1,null,"7fe0f60c",null)),tt=Z.exports,et=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"blur-backdrop"}),r("section",{staticClass:"bg-white w-100 d-flex align-items-center",attrs:{id:"mob-nav"}},[r("header",{staticClass:"mobile-nav bg-white ml-3 mr-3"},[r("div",{staticClass:"profile-btn bg-white"},[r("router-link",{attrs:{to:"/profile"}},[r("img",{staticClass:"bg-white m-2",attrs:{src:a("1195"),width:"35",height:"35",alt:"Profile Avatar"}})])],1),r("mobAddBtn",{attrs:{id:"add-btn"}}),r("div",{staticClass:"menu-btn"},[r("MobMenuBtn")],1)],1)])])},at=[],rt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{style:t.varColor},[r("div",{staticClass:"container wrap"},[r("ul",{staticClass:"bg-white rounded-full",attrs:{id:"mobMenu"}},[r("a",{staticClass:"mob-menu-button d-flex justify-content-center",attrs:{href:t.mobTriggerHREF,title:t.mobTriggerStatus},on:{click:t.mobToggleState}},[r("img",{staticClass:"mob-target-addBtn bg-transparent",attrs:{src:a("eef4"),width:"26",alt:"Add Button Icon SVG"}})]),t._m(0),t._m(1),t._m(2),t._m(3)])])])},st=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"mob-menu-item"},[a("a",{attrs:{href:"#mobMenu"}},[a("span",{staticClass:"fas fa-github"})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"mob-menu-item"},[a("a",{attrs:{href:"#mobMenu"}},[a("span",{staticClass:"fas fa-linkedin"})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"mob-menu-item"},[a("a",{attrs:{href:"#mobMenu"}},[a("span",{staticClass:"fas fa-instagram"})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"mob-menu-item"},[a("a",{attrs:{href:"#mobMenu"}},[a("span",{staticClass:"fas fa-twitter"})])])}],it={data:function(){return{mobTriggerHREF:"#0",mobTtriggerStatus:"Show Navigation",variableColor:"#1fb6ff"}},methods:{mobToggleState:function(){var t=document.querySelector(".mob-target-addBtn");"#mobMenu"===this.mobTriggerHREF?(this.mobTriggerHREF="#0",this.mobTriggerStatus="Hide Navigation",t.classList.remove("rotate-forward"),t.classList.add("rotate-back")):(this.mobTriggerHREF="#mobMenu",this.mobTriggerStatus="Show Navigation",t.classList.add("rotate-forward"),t.classList.remove("rotate-back"))}},computed:{varColor:function(){return{"--var-color":this.variableColor}},curRoute:function(){return this.$route.fullPath}},mounted:function(){"/premium"===this.$route.fullPath?this.variableColor="gold":this.variableColor="#1fb6ff"},watch:{curRoute:function(){"/premium"===this.$route.fullPath?this.variableColor="gold":this.variableColor="#1fb6ff"}}},nt=it,ot=(a("a27d"),Object(m["a"])(nt,rt,st,!1,null,"f2beba6c",null)),lt=ot.exports,ct=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"container bg-white"},[r("div",{staticClass:"menu-toggle bg-white",on:{click:t.toggleOpen}},[r("img",{staticClass:"bg-white",attrs:{src:a("2e69"),width:"35",alt:"Add Button"}})]),t._m(0)])])},ut=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"menu-line"},[a("div",{staticClass:"btn-app"},[a("div",{staticClass:"fa fa-map-marker"})]),a("div",{staticClass:"btn-app"},[a("div",{staticClass:"fa fa-envelope"})]),a("div",{staticClass:"btn-app"},[a("div",{staticClass:"fa fa-video-camera"})]),a("div",{staticClass:"btn-app"},[a("div",{staticClass:"fa fa-soundcloud"})]),a("div",{staticClass:"btn-app"},[a("div",{staticClass:"fa fa-graduation-cap"})]),a("div",{staticClass:"btn-app"},[a("div",{staticClass:"fa fa-image"})]),a("div",{staticClass:"btn-app"},[a("div",{staticClass:"fa fa-vine"})])])}],dt={methods:{toggleOpen:function(){var t=document.querySelector(".menu-toggle"),e=document.querySelector(".menu-line");t.classList.toggle("open"),e.classList.toggle("open");var a=document.querySelector(".blur-backdrop");a.classList.toggle("blur-backdrop-active")}}},mt=dt,ft=(a("bf4c"),Object(m["a"])(mt,ct,ut,!1,null,"56ffb494",null)),pt=ft.exports,gt={components:{mobAddBtn:lt,MobMenuBtn:pt}},bt=gt,ht=(a("796d"),Object(m["a"])(bt,et,at,!1,null,"c8684332",null)),vt=ht.exports,Ct={components:{NavBar:Y,Loading:tt,MobileNav:vt},beforeMount:function(){var t=this;setTimeout((function(){t.$store.commit("toggle_loading")}),2e3)}},wt=Ct,_t=(a("5c0b"),Object(m["a"])(wt,s,i,!1,null,null,null)),xt=_t.exports,yt=a("8c4f"),It=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"explore"},[t._m(0),a("div",{staticClass:"display-4 text-fade"},[t._v("Explore")]),a("TagScroll",{attrs:{premium:!1}}),a("div",{staticClass:"card-container"},[a("div",{staticClass:"card-group",attrs:{id:"post-wrap"}},t._l(12,(function(e,r){return a("CardPost",{key:r,attrs:{curCardIndex:t.selectItem,cardIndex:r,cardHeight:"18rem",cardWidth:"auto",cardBorder:!1,premium:!1},nativeOn:{mouseenter:function(e){return t.selectCard(r)},mouseleave:function(e){return t.deSelectCard(e)}}})})),1)])],1)},St=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"d-flex justify-content-end w-100"},[r("img",{staticClass:"logo-shadow-sm",attrs:{src:a("d409"),width:"60",alt:"JanGviO Logo"}})])}],kt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card bg-img shadow rounded-all",class:{flashing:t.$store.getters.get_loadingPost,"border-0":!t.cardBorder,"premium-border-bgImg":t.premium},style:{backgroundImage:"url("+a("1771")("./"+t.image)+")",height:t.cardHeight,width:t.cardWidth}},[r("div",{staticClass:"d-flex card-img-overlay bg-transparent"},[r("div",{staticClass:"card-title bg-light rounded-all card-profile",class:{"premium-border-avatar":t.premium,"card-profile-dimentions":t.curCardIndex!==t.cardIndex,"rounded-circle":t.curCardIndex!==t.cardIndex,shadow:t.curCardIndex===t.cardIndex},style:{backgroundImage:"url("+a("1771")("./"+t.profile)+")"}},[r("div",{staticClass:"profile-details mt-3 bg-transparent"},[r("span",{staticClass:"d-flex flex-column justify-content-center"},[r("div",{staticClass:"color-fade font-weight-bold",class:{"text-primary":!t.premium,"text-warning":t.premium}},[t._v("@ UserName")]),r("small",{staticClass:"text-muted"},[t._v("6 days ago - 03/05/2020")])])])]),r("div",{staticClass:"feed align-self-end",class:{"feed-hidden":t.curCardIndex!==t.cardIndex}},[t._m(0)])])])},$t=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"strip px-3 py-1 rounded-all shadow-lg d-flex justify-content-around text-muted bg-light"},[r("span",{staticClass:"bg-transparent"},[r("img",{staticClass:"bg-transparent",attrs:{src:a("5582"),width:"20",height:"20",alt:"Happy Emogi"}})]),r("span",{staticClass:"bg-transparent"},[r("img",{staticClass:"bg-transparent",attrs:{src:a("6f2b"),width:"20",height:"20",alt:"Share"}})]),r("span",{staticClass:"bg-transparent"},[r("img",{staticClass:"bg-transparent",attrs:{src:a("cf89"),width:"20",height:"20",alt:"Comment"}})])])}],Et={props:["cardHeight","cardWidth","cardBorder","premium","curCardIndex","cardIndex"],data:function(){return{image:"card.jpg",profile:"Male-Avatar.png"}},beforeMount:function(){var t=this;setTimeout((function(){t.$store.commit("toggle_loadingPost")}),4e3)}},Pt=Et,Mt=(a("e889"),Object(m["a"])(Pt,kt,$t,!1,null,"7ec27d70",null)),Ot=Mt.exports,jt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mt-1 mb-5 mx-4"},[a("VueSlickCarousel",t._b({style:t.varColor},"VueSlickCarousel",t.settings,!1),t._l(23,(function(e,r){return a("div",{key:r,staticClass:"text-center py-2"},[a("span",{staticClass:"bg-white text-secondary px-4 py-2 mx-2 rounded-tip",class:{"primary-hover":!t.premium,"premium-hover":t.premium}},[t._v("span")])])})),0)],1)},Bt=[],Rt=a("a7ab"),Tt=a.n(Rt),Lt=(a("7b8d"),a("6a2c"),{props:["premium"],name:"MyComponent",components:{VueSlickCarousel:Tt.a},data:function(){return{settings:{slidesToShow:12,slidesToScroll:6,variableWidth:!0,focusOnSelect:!0,adaptiveHeight:!0,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2,initialSlide:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]},variableColor:"#007bff"}},computed:{varColor:function(){return{"--var-color":this.variableColor}}},mounted:function(){this.premium&&(this.variableColor="gold")}}),Ht=Lt,Nt=(a("6ff8"),Object(m["a"])(Ht,jt,Bt,!1,null,null,null)),Ft=Nt.exports,At={name:"Home",components:{CardPost:Ot,TagScroll:Ft},data:function(){return{selectItem:null}},methods:{selectCard:function(t){this.selectItem=t},deSelectCard:function(){this.selectItem=null}}},Gt=At,Ut=(a("4f6e"),Object(m["a"])(Gt,It,St,!1,null,"6184b416",null)),Wt=Ut.exports,Jt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"premium"},[t._m(0),a("div",{staticClass:"display-4 text-fade"},[t._v("Premium")]),a("TagScroll",{attrs:{premium:!0}}),a("div",{staticClass:"card-group",attrs:{id:"post-wrap"}},t._l(12,(function(e,r){return a("CardPost",{key:r,attrs:{curCardIndex:t.selectItem,cardIndex:r,cardHeight:"30rem",cardWidth:"auto",cardBorder:!0,premium:!0},nativeOn:{mouseenter:function(e){return t.selectCard(r)},mouseleave:function(e){return t.deSelectCard(e)}}})})),1)],1)},Vt=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"d-flex justify-content-end w-100"},[r("img",{staticClass:"logo-shadow-sm",attrs:{src:a("d409"),width:"60",alt:"JanGviO Logo"}})])}],qt={name:"Premium",components:{CardPost:Ot,TagScroll:Ft},data:function(){return{selectItem:null}},methods:{selectCard:function(t){console.log(t),this.selectItem=t},deSelectCard:function(){this.selectItem=null}}},zt=qt,Yt=(a("7dff"),Object(m["a"])(zt,Jt,Vt,!1,null,"7d05165e",null)),Dt=Yt.exports,Kt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"following"},[t._m(0),a("div",{staticClass:"display-4 text-fade"},[t._v("Following")]),a("TagScroll",{attrs:{premium:!1}}),a("div",{staticClass:"card-container"},[a("div",{staticClass:"card-group",attrs:{id:"post-wrap"}},t._l(12,(function(e,r){return a("CardPost",{key:r,attrs:{curCardIndex:t.selectItem,cardIndex:r,cardHeight:"22rem",cardWidth:"auto",cardBorder:!1,premium:!1},nativeOn:{mouseenter:function(e){return t.selectCard(r)},mouseleave:function(e){return t.deSelectCard(e)}}})})),1)])],1)},Qt=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"d-flex justify-content-end w-100"},[r("img",{staticClass:"logo-shadow-sm",attrs:{src:a("d409"),width:"60",alt:"JanGviO Logo"}})])}],Xt={name:"Following",components:{CardPost:Ot,TagScroll:Ft},data:function(){return{selectItem:null}},methods:{selectCard:function(t){console.log(t),this.selectItem=t},deSelectCard:function(){this.selectItem=null}}},Zt=Xt,te=(a("2eab"),Object(m["a"])(Zt,Kt,Qt,!1,null,"48fb17ca",null)),ee=te.exports,ae=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),a("div",{staticClass:"profile"},[a("div",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}],staticClass:"p-card-shadow rounded-all profile-card"},[a("ProfileCard",{attrs:{cardWidth:t.cardVisible?"18rem":"100%"}})],1),a("div",{staticClass:"card-container"},[a("div",{staticClass:"card-group",attrs:{id:"post-wrap"}},t._l(12,(function(e,r){return a("CardPost",{key:r,attrs:{curCardIndex:t.selectItem,cardIndex:r,cardHeight:"22rem",cardWidth:"auto",cardBorder:!1,premium:!1},nativeOn:{mouseenter:function(e){return t.selectCard(r)},mouseleave:function(e){return t.deSelectCard(e)}}})})),1)])])])},re=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"logo-img bg-transparent d-flex justify-content-end w-100"},[r("img",{staticClass:"logo-shadow-sm",attrs:{src:a("d409"),width:"60",alt:"JanGviO Logo"}}),r("div",{staticClass:"logo-text d-flex flex-column align-items-left ml-3 mt-3",attrs:{href:"#"}},[r("span",{staticClass:"bg-transparent h5 mb-0"},[t._v("JanGvio")]),r("small",{staticClass:"bg-transparent text-muted"},[t._v("Lorem Ipsem Maseep!")])])])}],se=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card border-0 rounded-all bg-white text-center",style:"width: "+t.cardWidth+";"},[r("img",{staticClass:"card-img-top rounded-full bg-transparent p-5 mx-auto",staticStyle:{"max-height":"20rem","max-width":"18rem"},attrs:{src:a("1195"),alt:"Profile Picture"}}),t._m(0),t._m(1),t._m(2)])},ie=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-body bg-transparent"},[a("h5",{staticClass:"card-title bg-transparent"},[t._v("Card title")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"list-group list-group-flush"},[a("li",{staticClass:"list-group-item"},[t._v("Cras justo odio")]),a("li",{staticClass:"list-group-item"},[t._v("Dapibus ac facilisis in")]),a("li",{staticClass:"list-group-item"},[t._v("Vestibulum at eros")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-body bg-transparent"},[a("a",{staticClass:"card-link",attrs:{href:"#"}},[t._v("Card link")]),a("a",{staticClass:"card-link",attrs:{href:"#"}},[t._v("Another link")])])}],ne={props:["cardWidth"]},oe=ne,le=Object(m["a"])(oe,se,ie,!1,null,null,null),ce=le.exports,ue={name:"Profile",components:{CardPost:Ot,ProfileCard:ce},data:function(){return{selectItem:null,cardVisible:!0}},methods:{selectCard:function(t){console.log(t),this.selectItem=t},deSelectCard:function(){this.selectItem=null}},mounted:function(){var t=this;window.addEventListener("resize",(function(){window.innerWidth>770?t.cardVisible=!0:t.cardVisible=!1}))}},de=ue,me=(a("0cd5"),Object(m["a"])(de,ae,re,!1,null,"647f77c1",null)),fe=me.exports;r["default"].use(yt["a"]);var pe=[{path:"/",name:"Explore",component:Wt},{path:"/menu",name:"Menu",component:Wt},{path:"/0",name:"MenuClose",component:Wt},{path:"/premium",name:"Premium",component:Dt},{path:"/following",name:"Following",component:ee},{path:"/profile",name:"Profile",component:fe}],ge=new yt["a"]({routes:pe,scrollBehavior:function(){return{x:0,y:0}}}),be=ge,he=a("2f62");r["default"].use(he["a"]);var ve=new he["a"].Store({state:{loading:!0,loadingPost:!0},getters:{get_loading:function(t){return t.loading},get_loadingPost:function(t){return t.loadingPost}},mutations:{toggle_loading:function(t){t.loading=!t.loading},toggle_loadingPost:function(t){t.loadingPost=!1}},actions:{},modules:{}}),Ce=(a("4989"),a("ab8b"),a("3e48"),a("2dd8"),a("5f5b")),we=a("b1e0");a("f9e3");r["default"].use(Ce["a"]),r["default"].use(we["a"]),new r["default"]({router:be,store:ve,render:function(t){return t(xt)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var r=a("9c0c"),s=a.n(r);s.a},"60df":function(t,e,a){t.exports=a.p+"img/full_comment.6aee5e4b.svg"},"6f2b":function(t,e,a){t.exports=a.p+"img/share.45115f8c.svg"},"6fb7":function(t,e,a){t.exports=a.p+"img/explore.939d5235.svg"},"6ff8":function(t,e,a){"use strict";var r=a("7078"),s=a.n(r);s.a},7078:function(t,e,a){},"796d":function(t,e,a){"use strict";var r=a("1d3c"),s=a.n(r);s.a},"7ab2":function(t,e,a){t.exports=a.p+"img/following.7ae84624.svg"},"7b0b7":function(t,e,a){"use strict";var r=a("9f78"),s=a.n(r);s.a},"7dff":function(t,e,a){"use strict";var r=a("089b"),s=a.n(r);s.a},"8c75":function(t,e,a){},"9c0c":function(t,e,a){},"9f78":function(t,e,a){},a27d:function(t,e,a){"use strict";var r=a("b876"),s=a.n(r);s.a},a50f:function(t,e,a){"use strict";var r=a("eb43"),s=a.n(r);s.a},a63d:function(t,e,a){},aca3:function(t,e,a){},affa:function(t,e,a){"use strict";var r=a("b075"),s=a.n(r);s.a},b075:function(t,e,a){},b082:function(t,e,a){t.exports=a.p+"img/Male-Avatar.54075a4d.png"},b876:function(t,e,a){},bc36:function(t,e,a){"use strict";var r=a("ff02"),s=a.n(r);s.a},bf4c:function(t,e,a){"use strict";var r=a("1b60"),s=a.n(r);s.a},cf1c:function(t,e,a){t.exports=a.p+"img/loading.ac2da226.gif"},cf89:function(t,e,a){t.exports=a.p+"img/comment.39d905e7.svg"},d409:function(t,e,a){t.exports=a.p+"img/jangvio.9703b876.svg"},db38:function(t,e,a){"use strict";var r=a("fdc6"),s=a.n(r);s.a},e889:function(t,e,a){"use strict";var r=a("a63d"),s=a.n(r);s.a},eb43:function(t,e,a){},eef4:function(t,e,a){t.exports=a.p+"img/add.2d19df0d.svg"},f360:function(t,e,a){},fdc6:function(t,e,a){},ff02:function(t,e,a){}});
//# sourceMappingURL=app.48897694.js.map
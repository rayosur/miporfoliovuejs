(function(t){function e(e){for(var s,o,r=e[0],c=e[1],l=e[2],d=0,m=[];d<r.length;d++)o=r[d],n[o]&&m.push(n[o][0]),n[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(m.length)m.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,r=1;r<a.length;r++){var c=a[r];0!==n[c]&&(s=!1)}s&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},n={app:0},i=[];function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/miporfoliovuejs/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0490":function(t,e,a){"use strict";var s=a("bb79"),n=a.n(s);n.a},"217a":function(t,e,a){"use strict";var s=a("b501"),n=a.n(s);n.a},"48ec":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},i=[],o=(a("efc4"),a("2877")),r={},c=Object(o["a"])(r,n,i,!1,null,null,null),l=c.exports,u=a("8c4f"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav-component"),a("transition",{attrs:{name:"fade"}},[t.transition?a("section",{staticClass:"hero is-fullheight-with-navbar"},[a("div",{staticClass:"hero-body"},[a("transition",{attrs:{name:"move"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.showAbout,expression:"showAbout"}]},[a("about-component",{on:{showServices:t.showRight}})],1)]),a("transition",{attrs:{name:"move"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.showServices,expression:"showServices"}]},[a("services-component")],1)])],1)]):t._e()])],1)},m=[],p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar",attrs:{role:"navigation","aria-label":"main navigation"}},[a("div",{staticClass:"navbar-brand"},[a("router-link",{staticClass:"navbar-item",attrs:{to:"/"}},[a("h1",{staticClass:"title is-5"},[t._v("Daniel González")])]),a("a",{class:"navbar-burger burger "+t.navbar.burger,attrs:{role:"button","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"},on:{click:t.burger}},[a("span",{attrs:{"aria-hidden":"true"}}),a("span",{attrs:{"aria-hidden":"true"}}),a("span",{attrs:{"aria-hidden":"true"}})])],1),a("div",{class:"navbar-menu "+t.navbar.menu,attrs:{id:"navbarBasicExample"}},[a("div",{staticClass:"navbar-start"},[a("router-link",{staticClass:"navbar-item",attrs:{to:"proyectos"}},[t._v("\n\t\t\tProyectos\n\t\t\t")])],1),a("div",{staticClass:"navbar-end"},[a("div",{staticClass:"navbar-item"},[a("a",{attrs:{href:"https://github.com/rayosur",target:"_blank"}},[a("font-awesome-icon",{style:{color:"black"},attrs:{icon:["fab","github"],"fixed-width":"",size:"2x"}})],1)]),a("div",{staticClass:"navbar-item"},[a("a",{attrs:{href:"https://twitter.com/Daniel28674275",target:"_blank"}},[a("font-awesome-icon",{style:{color:"#167df0 "},attrs:{icon:["fab","twitter"],"fixed-width":"",size:"2x"}})],1)]),a("div",{staticClass:"navbar-item"},[a("a",{attrs:{href:"https://www.linkedin.com/in/daniel-gonz%C3%A1lez-garrido-programador-web/",target:"_blank"}},[a("font-awesome-icon",{style:{color:"#167df0 "},attrs:{icon:["fab","linkedin"],"fixed-width":"",size:"2x"}})],1)])])])])},v=[],f={data:function(){return{navbar:{burger:"",menu:""}}},methods:{burger:function(){"is-active"===this.navbar.burger?(this.navbar.burger="",this.navbar.menu=""):(this.navbar.burger="is-active",this.navbar.menu="is-active")},showModal:function(t){switch(t){case"php":this.$modal.open('\n\t\t\t\t\t\t\t<p class="image">\n\t\t\t\t\t\t\t\t<img src="/assets/certificados/php.png">\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t');break;case"js":this.$modal.open('\n\t\t\t\t\t\t\t<p class="image">\n\t\t\t\t\t\t\t\t<img src="/assets/certificados/js.png">\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t');break;case"vue":this.$modal.open('\n\t\t\t\t\t\t\t<p class="image">\n\t\t\t\t\t\t\t\t<img src="/assets/certificados/vue-profesional.png">\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t');break;case"laravel":this.$modal.open('\n\t\t\t\t\t\t\t<p class="image">\n\t\t\t\t\t\t\t\t<img src="/assets/certificados/laravel.png">\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t');break;case"git-github":this.$modal.open('\n\t\t\t\t\t\t\t<p class="image">\n\t\t\t\t\t\t\t\t<img src="/assets/certificados/git-github.png">\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t');break;case"carrera-vue":this.$modal.open('\n\t\t\t\t\t\t\t<p class="image">\n\t\t\t\t\t\t\t\t<img src="/assets/certificados/carrera-vue.png">\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t');break;case"desarrollo-web":this.$modal.open('\n\t\t\t\t\t\t\t<p class="image">\n\t\t\t\t\t\t\t\t<img src="/assets/certificados/desarrollo-web.png">\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t');break}}}},b=f,g=(a("217a"),Object(o["a"])(b,p,v,!1,null,"73ea4753",null)),h=g.exports,_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"columns"},[t._m(0),a("div",{staticClass:"column"},[a("div",{staticClass:"box"},[a("p",{staticClass:"title is-3"},[t._v("Daniel González")]),a("p",{staticClass:"subtitle is-4"},[t._v("Desarrollador Web Full-Stack")]),t._m(1),t._m(2),a("a",{staticClass:"navbar-item",on:{click:function(e){return e.preventDefault(),t.showServices(e)}}},[a("strong",[t._v("Conoce mi Forma de Trabajar")]),a("br"),a("font-awesome-icon",{attrs:{icon:["fas","angle-right"],size:"4x"}})],1)])])])},C=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"column is-narrow"},[s("figure",{staticClass:"media-left"},[s("p",{staticClass:"image is-128x128"},[s("img",{staticClass:"is-rounded",attrs:{src:a("915e")}})])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content is-medium"},[a("p",[t._v("Soy un Estudiante de "),a("a",{attrs:{href:"https://www.salesianos.edu/don-bosco-f5-sera-la-primera-escuela-digital-inclusiva-en-andalucia/",target:"_blank"}},[t._v("DonboscoF5")]),t._v(" con mútiples conocimientos en diferentes areas y "),a("strong",[t._v("Tecnologías Modernas")]),t._v(" como lo son "),a("strong",[t._v("Vue, Laravel, Bootstrap, Postman y GitHub")]),t._v(" por nombrar algunas. Me gusta Complacer las necesidades del Cliente, que vea su producto en funcionamiento y cumpliendo sus "),a("strong",[t._v("necesidades")]),t._v(".")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content is-large"},[a("p",[t._v("¿Que puedo Ofrecerte?")])])}],w={methods:{showServices:function(){this.$emit("showServices")}}},y=w,x=Object(o["a"])(y,_,C,!1,null,null,null),k=x.exports,S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"box"},[a("div",{staticClass:"columns is-desktop"},[a("div",{staticClass:"column"},[a("service-component",{attrs:{icon:"laptop-code",title:"Desarrollo Web",content:"Hoy en día cualquier persona puede tener su propia Aplicación o Sitio Web. Te ofresco un Servicio De Calidad para que hagas parte de este Mundo."}})],1),a("div",{staticClass:"column"},[a("service-component",{attrs:{icon:"cloud-upload-alt",title:"Hosting",content:"Mantengo tu Sitio en la Web para que cualquiera pueda ver lo que haz creado desde cualquier lugar y de manera rápida."}})],1),a("div",{staticClass:"column"},[a("service-component",{attrs:{icon:"shopping-cart",title:"E-commerce",content:"El Comercio Electrónico es una pieza fundamental para los negocios. Te proveemos un buen servicio para que en poco Tiempo tengas tu Tienda en la Web."}})],1)]),a("br"),a("div",{staticClass:"columns is-desktop"},[a("div",{staticClass:"column"},[a("article",{staticClass:"media"},[a("figure",{staticClass:"media-left"},[a("font-awesome-icon",{style:{color:"#7957d5"},attrs:{icon:["fab","wordpress"],"fixed-width":"",size:"4x"}})],1),t._m(0)])]),a("div",{staticClass:"column"},[a("service-component",{attrs:{icon:"mobile",title:"Responsive Design",content:"Una gran parte de los usuarios que visitan tu Sitio lo hacen desde un Télefono, no dejes que esto arruine su experiencia."}})],1),a("div",{staticClass:"column"},[a("service-component",{attrs:{icon:"hourglass-end",title:"Eficiencia",content:"Me gusta entregar un Proyecto de Calidad y en un lapso de tiempo conveniente para el Cliente."}})],1)])])},E=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"media-content"},[a("div",{staticClass:"content"},[a("p",{staticClass:"title is-4"},[t._v("Wordpress")]),a("p",{staticClass:"subtitle is-5"},[t._v("Administra tu Sitio, Tienda o Blog con el CRM mas popular de la Web.")])])])}],j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("article",{staticClass:"media"},[a("figure",{staticClass:"media-left"},[a("font-awesome-icon",{style:{color:"#7957d5"},attrs:{icon:["fas",t.icon],"fixed-width":"",size:"4x"}})],1),a("div",{staticClass:"media-content"},[a("div",{staticClass:"content"},[a("p",{staticClass:"title is-4"},[t._v(t._s(t.title))]),a("p",{staticClass:"subtitle is-5"},[t._v(t._s(t.content))])])])])},$=[],O={props:{icon:{type:String},title:{type:String},content:{type:String}}},P=O,z=(a("aa5b"),Object(o["a"])(P,j,$,!1,null,"179dba4e",null)),T=z.exports,D={components:{ServiceComponent:T}},M=D,q=Object(o["a"])(M,S,E,!1,null,null,null),A=q.exports,W={data:function(){return{showAbout:!0,showServices:!1,transition:!1}},mounted:function(){this.transition=!0},components:{NavComponent:h,AboutComponent:k,ServicesComponent:A},methods:{showRight:function(){var t=this;this.showAbout=!1,setTimeout(function(){t.showServices=!0},700)}}},N=W,H=Object(o["a"])(N,d,m,!1,null,null,null),B=H.exports,R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav-component"),a("transition",{attrs:{name:"fade"}},[t.transition?a("section",{staticClass:"hero is-medium"},[a("div",{staticClass:"hero-body"},[a("div",{staticClass:"box container has-text-centered"},[a("p",{staticClass:"title is-5"},[t._v("MIS PROYECTOS")]),a("br"),a("p",{staticClass:"subtitle is-5"},[t._v("Por si no estás Seguro puedes ver mi Trabajo. "),a("strong",[t._v("Explora un poco hacia abajo "),a("font-awesome-icon",{attrs:{icon:["fas","angle-down"]}}),t._v(" y verás mi Potencial.")],1)]),a("p",{staticClass:"subtitle is-5"},[t._v("Puedes ver el Código de este Portafolio en mi cuenta de "),a("a",{attrs:{href:"https://github.com/rayosur",target:"_blank"}},[t._v("\n\t\t\t\t\t\t\tGitHub "),a("font-awesome-icon",{attrs:{icon:["fab","github"]}})],1)])])])]):t._e()]),a("div",{staticClass:"container",attrs:{id:"proyectos"}},[a("section",{staticClass:"box columns is-desktop",attrs:{id:"blog"}},[a("div",{staticClass:"column"},[a("p",{staticClass:"image is-quarter",on:{click:function(e){return t.image("blog")}}},[a("img",{attrs:{src:"/assets/proyectos/blog-1.png"}})])]),t._m(0)]),a("section",{staticClass:"box columns is-desktop",attrs:{id:"catalogo"}},[a("div",{staticClass:"column"},[a("p",{staticClass:"image is-quarter",on:{click:function(e){return t.image("catalogo")}}},[a("img",{attrs:{src:"/assets/proyectos/catalogo-1.png"}})])]),t._m(1)])])],1)},F=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"column"},[a("a",{staticClass:"hover title is-4",attrs:{href:"https://www.vvtutorial.es/",target:"_blank"}},[t._v("Blog | Personal\n\t\t\t\t\t")]),a("article",[a("p",{staticClass:"subtitle is-4",staticStyle:{"margin-top":"10px"}},[t._v("\n\t\t\t\t\t\t\tEste es un Proyecto desarrollado con Wordpress, es un blog para aprender sobre informática.\n\t\t\t\t\t\t")]),a("p",{staticClass:"subtitle is-5",staticStyle:{"margin-top":"10px"}},[t._v("\n\t\t\t\t\t\t\tEn donde subo tutoriales "),a("strong",[t._v("de todo tipo de Tecnologías")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"column"},[a("a",{staticClass:"hover title is-4",attrs:{href:"",target:"_blank"}},[t._v("Lista | Estudiantes\n\t\t\t\t\t")]),a("article",[a("p",{staticClass:"subtitle is-4",staticStyle:{"margin-top":"10px"}},[t._v("\n\t\t\t\t\t\t\tUn proyecto Excelente para estudiantes de un colegio, donde podemos crear, editar ,borrar ).\n\t\t\t\t\t\t")]),a("p",{staticClass:"subtitle is-5",staticStyle:{"margin-top":"10px"}},[t._v("\n\t\t\t\t\t\t\tContiene un buen Sistema de Filtrado por id donde al estudiante podemos proporcionarle un nombre y email, \n\t\t\t\t\t\t\tque esta conectado con la base de datos en Laravel.(Proyecto creado con Vue.js)\n\t\t\t\t\t\t")])])])}],G={data:function(){return{transition:!1}},mounted:function(){this.transition=!0},components:{NavComponent:h},methods:{image:function(t){switch(t){case"blog":this.$modal.open('\n\t\t\t\t\t\t<p class="image">\n\t\t\t\t\t\t\t<img src="/assets/proyectos/blog-1.png">\n\t\t\t\t\t\t</p>\n\t\t\t\t\t');break;case"ecommerce":this.$modal.open('\n\t\t\t\t\t\t<p class="image">\n\t\t\t\t\t\t\t<img src="/assets/proyectos/blog-2.png">\n\t\t\t\t\t\t</p>\n\t\t\t\t\t');break;case"catalogo":this.$modal.open('\n\t\t\t\t\t\t<p class="image">\n\t\t\t\t\t\t\t<img src="/assets/proyectos/catalogo-1.png">\n\t\t\t\t\t\t</p>\n\t\t\t\t\t');break}}}},J=G,L=(a("0490"),Object(o["a"])(J,R,F,!1,null,"4da57274",null)),Q=L.exports,U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav-component"),a("transition",{attrs:{name:"fade"}},[t.transition?a("section",{staticClass:"hero is-fullheight-with-navbar"},[a("div",{staticClass:"hero-body"},[a("div",{staticClass:"box container"},[a("b-notification",{attrs:{type:"is-success","has-icon":"",active:t.showSuccess},on:{"update:active":function(e){t.showSuccess=e}}},[t._v("\n\t\t\t\t\t\tEnviado con Exito!\n\t\t        \t")]),a("b-notification",{attrs:{type:"is-danger","has-icon":"",active:t.showDanger},on:{"update:active":function(e){t.showDanger=e}}},[t._v("\n\t\t        \t\tHa ocurrido un error al enviar el correo :c\n\t\t\t        ")]),a("p",{staticClass:"title is-3"},[t._v("Envíame un Email")]),a("section",[a("b-field",{attrs:{label:"Nombre"}},[a("b-input",{attrs:{size:"is-large",type:"text",icon:"account"},model:{value:t.email.from_name,callback:function(e){t.$set(t.email,"from_name",e)},expression:"email.from_name"}})],1),a("b-field",{attrs:{label:"Email"}},[a("b-input",{attrs:{size:"is-large",type:"email",icon:"email"},model:{value:t.email.from_email,callback:function(e){t.$set(t.email,"from_email",e)},expression:"email.from_email"}})],1),a("b-field",{attrs:{label:"Mensaje"}},[a("b-input",{attrs:{type:"textarea",minlength:"10",placeholder:"Escribe tu Mensaje"},model:{value:t.email.message,callback:function(e){t.$set(t.email,"message",e)},expression:"email.message"}})],1),a("a",{class:"button is-primary is-active "+t.loading,on:{click:function(e){return e.preventDefault(),t.enviar(e)}}},[t._v("Enviar")])],1)],1)])]):t._e()])],1)},V=[],I={data:function(){return{transition:!1,email:{from_name:"",from_email:"",message:""},loading:"",showSuccess:!1,showDanger:!1}},created:function(){emailjs.init("user_aOlspdASnZg7pfeQrkJNA")},mounted:function(){this.transition=!0},components:{NavComponent:h},methods:{enviar:function(){var t=this;this.loading="is-loading",emailjs.send("gmail","form-contacto",this.email).then(function(e){"OK"===e.text&&(t.email={from_name:"",from_email:"",message:""},t.loading=""),t.showSuccess=!0},function(e){t.loading="",t.showDanger=!0})}}},K=I,Y=Object(o["a"])(K,U,V,!1,null,null,null),Z=Y.exports;s["default"].use(u["a"]);var X=new u["a"]({mode:"history",base:"/miporfoliovuejs/",routes:[{path:"/",name:"HomePage",component:B},{path:"/proyectos",name:"ProyectosPage",component:Q},{path:"/contacto",name:"ContactPage",component:Z}]}),tt=a("2f62");s["default"].use(tt["a"]);var et=new tt["a"].Store({state:{},mutations:{},actions:{},getters:{}}),at=a("8a03"),st=a.n(at),nt=(a("5abe"),a("ecee")),it=a("c074"),ot=a("f2d1"),rt=a("ad3d");nt["c"].add(it["b"],it["a"],it["f"],it["d"],it["h"],it["c"],it["g"],it["e"],it["j"],it["i"],ot["a"],ot["c"],ot["b"],ot["d"]),s["default"].component("font-awesome-icon",rt["a"]),s["default"].use(st.a),s["default"].config.productionTip=!1,new s["default"]({router:X,store:et,render:function(t){return t(l)}}).$mount("#app")},"915e":function(t,e,a){t.exports=a.p+"img/avatar.457ed66e.jpg"},aa5b:function(t,e,a){"use strict";var s=a("bd58"),n=a.n(s);n.a},b501:function(t,e,a){},bb79:function(t,e,a){},bd58:function(t,e,a){},efc4:function(t,e,a){"use strict";var s=a("48ec"),n=a.n(s);n.a}});
//# sourceMappingURL=app.f029be5d.js.map
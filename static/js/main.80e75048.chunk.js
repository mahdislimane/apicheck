(this.webpackJsonpapicheck=this.webpackJsonpapicheck||[]).push([[0],{15:function(e,t,a){e.exports=a(39)},20:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(12),o=a.n(l),s=(a(20),a(3),a(14)),r=a(13),i=a.n(r);a(38);function m(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)((function(){i.a.get("https://jsonplaceholder.typicode.com/users").then((function(e){l(e.data)}))}),[]),console.log(a),c.a.createElement("div",{className:"container-fluid row"},c.a.createElement("div",{className:"col-3"}),c.a.createElement("table",{className:"col-6"},c.a.createElement("tr",{className:"form"},c.a.createElement("th",{className:"tableau",style:{width:"50px"}},"ID"),c.a.createElement("th",{className:"tableau",style:{width:"250px"}},"Name"),c.a.createElement("th",{className:"tableau",style:{width:"250px"}},"Email")),a.map((function(e){return c.a.createElement("tr",{className:"form"},c.a.createElement("td",{className:"tableau",style:{width:"50px"}},e.id),c.a.createElement("td",{className:"tableau",style:{width:"250px"}},e.name),c.a.createElement("td",{className:"tableau",style:{width:"250px"}},e.email))}))),c.a.createElement("div",{className:"col-3"}))}var u=function(){return c.a.createElement("div",null,c.a.createElement(m,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.80e75048.chunk.js.map
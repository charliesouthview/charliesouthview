(this["webpackJsonpunichat-template"]=this["webpackJsonpunichat-template"]||[]).push([[0],{149:function(e,t,a){e.exports=a(342)},154:function(e,t,a){},342:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(28),c=a.n(l),o=(a(154),a(62)),i=a(6),u=a(11),s=a(60),m=a.n(s),h=(a(157),m.a.initializeApp({apiKey:"AIzaSyDfc123GsJTn2YSQ_6r0tu_E98Emogn0xg",authDomain:"svchat-ef36e.firebaseapp.com",projectId:"svchat-ef36e",storageBucket:"svchat-ef36e.appspot.com",messagingSenderId:"104143281540",appId:"1:104143281540:web:1e2df5c7441d6f1d8251d1"}).auth()),p=r.a.createContext();function d(e){var t=e.children,a=Object(n.useState)(!0),l=Object(u.a)(a,2),c=l[0],o=l[1],s=Object(n.useState)(),m=Object(u.a)(s,2),d=m[0],E=m[1],f=Object(i.f)();Object(n.useEffect)((function(){h.onAuthStateChanged((function(e){E(e),o(!1),f.push("/chats")}))}),[d,f]);var b={user:d};return r.a.createElement(p.Provider,{value:b},!c&&t)}var E=a(20),f=a.n(E),b=a(29),g=(a(341),a(344));function v(){Object(n.useRef)(!1);var e=Object(n.useState)(!0),t=Object(u.a)(e,2),a=(t[0],t[1],Object(n.useContext)(p).user,Object(i.f)());function l(){return(l=Object(b.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.signOut();case 2:a.push("/more");case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement("div",{id:"login-page"},r.a.createElement("div",{id:"login-card"},r.a.createElement("h1",null," [Error 404]"),r.a.createElement("h2",null," Website Overrun"),r.a.createElement("div",{className:"login-button google",onClick:function(){return l.apply(this,arguments)}},r.a.createElement(g.a,null)," More Info ",r.a.createElement(g.a,null))))}var w=function(){return r.a.createElement("div",{id:"login-page"},r.a.createElement("div",{id:"login-card"},r.a.createElement("h1",null," [Error Information]"),r.a.createElement("h2",null," November 17th Shutdown"),r.a.createElement("br",null),r.a.createElement("p",null," SouthView Chat is currently disabled due to a uprising burst in messages sent."),r.a.createElement("p",null," This website was not intended for this much messages."),r.a.createElement("p",null,"To resolve this situation I will need to reset the server"),r.a.createElement("p",null," Because of this the website will be shut down until further notice."),r.a.createElement("a",{href:"mailto:southviewchat@outlook.com"},"here.")," ")))};var y=function(){return r.a.createElement("div",{style:{fontFamily:"Avenir"}},r.a.createElement(o.a,null,r.a.createElement(d,null,r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/more",component:w}),r.a.createElement(i.a,{path:"/chats",component:v}),r.a.createElement(i.a,{path:"/",component:v})))))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root"))}},[[149,1,2]]]);
//# sourceMappingURL=main.fac53e25.chunk.js.map

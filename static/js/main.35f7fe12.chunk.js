(this["webpackJsonpunichat-template"]=this["webpackJsonpunichat-template"]||[]).push([[0],{114:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(24),l=n.n(c),o=(n(61),n(19)),i=n(4),u=n(14),s=n(11),m=n.n(s),h=(n(64),m.a.initializeApp({apiKey:"AIzaSyDfc123GsJTn2YSQ_6r0tu_E98Emogn0xg",authDomain:"svchat-ef36e.firebaseapp.com",projectId:"svchat-ef36e",storageBucket:"svchat-ef36e.appspot.com",messagingSenderId:"104143281540",appId:"1:104143281540:web:1e2df5c7441d6f1d8251d1"}).auth()),p=r.a.createContext();function d(){return Object(a.useContext)(p)}function f(e){var t=e.children,n=Object(a.useState)(!0),c=Object(u.a)(n,2),l=c[0],o=c[1],s=Object(a.useState)(),m=Object(u.a)(s,2),d=m[0],f=m[1],b=Object(i.f)();Object(a.useEffect)((function(){h.onAuthStateChanged((function(e){f(e),o(!1),b.push("/chats")}))}),[d,b]);var g={user:d};return r.a.createElement(p.Provider,{value:g},!l&&t)}var b=n(116),g=function(){return r.a.createElement("div",{id:"login-page"},r.a.createElement("div",{id:"login-card"},r.a.createElement("center",null,r.a.createElement("br",null),r.a.createElement("h2",null,"Welcome to SouthView Chat!"),r.a.createElement("h3",null,"Log in with the prompt below!"),r.a.createElement("br",null),r.a.createElement("div",{className:"login-button google",onClick:function(){return h.signInWithRedirect(new m.a.auth.GoogleAuthProvider)}},r.a.createElement(b.a,null)," Sign In with Google"))))},E=function(){return r.a.createElement("div",{id:"login-page"},r.a.createElement("div",{id:"login-card"},r.a.createElement("h1",null,"[Error Information]"),r.a.createElement("h2",null,"November 16th Maintenance"),r.a.createElement("br",null),r.a.createElement("p",null," SouthView Chat is currently under maintenance due to an uprising burst in account creation. "),r.a.createElement("p",null," This website was originally designed for 5 users but could get upwards to 25. "),r.a.createElement("p",null," As of this afternoon there is currently 32, so that led to the server being over run and shuting down. "),r.a.createElement("p",null," To resolve this situation I will be upgrading my current website bandwith usage, which will cost money. "),r.a.createElement("p",null," Because of this there will be a new website which should be posted here by 1:30pm. so come back then "),r.a.createElement("p",null," Everybody will need to make a new account, and chats. also please limit the amount of chats you make "),r.a.createElement("p",null,' Also please name the chat something other than "hi", or "test" it messes up with the console) '),r.a.createElement("br",null),r.a.createElement("small",null," If you have any questions, or willing to donate money for this contact me ",r.a.createElement("a",{href:"mailto:southviewchat@outlook.com"},"Here")," "),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"login-button google",onClick:function(){window.open("https://southviewchat.ml/","_blank")}},"New Website link"),r.a.createElement("div",null,r.a.createElement("h1",null,"Makes sure to save the new link website closing in")),r.a.createElement("div",null," ",r.a.createElement("img",{src:"https://gifcdn.com/1i70p3ce1d6sqj2d9m.gif",alt:"mailtimers.com"})," ")))},v=n(13),w=n.n(v),y=n(20),j=n(2),k=n.n(j),O=n(55);function S(){var e=Object(a.useRef)(!1),t=Object(a.useState)(!0),n=Object(u.a)(t,2),c=n[0],l=n[1],o=d().user,s=Object(i.f)();function m(){return(m=Object(y.a)(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.signOut();case 2:s.push("/");case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return f.apply(this,arguments)}function f(){return(f=Object(y.a)(w.a.mark((function e(t){var n,a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return n=e.sent,e.next=5,n.blob();case 5:return a=e.sent,e.abrupt("return",new File([a],"test.jpg",{type:"image/jpeg"}));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){if(!e.current){if(e.current=!0,!o||null===o)return void s.push("/login");k.a.get("https://api.chatengine.io/users/me/",{headers:{"project-id":"56cec49b-88cd-4446-bf67-c69970a9eb46","user-name":o.email,"user-secret":o.uid}}).catch((function(e){var t=new FormData;t.append("email",o.email),t.append("username",o.email),t.append("secret",o.uid),p(o.photoURL).then((function(e){t.append("avatar",e,e.name),k.a.post("https://api.chatengine.io/users/",t,{headers:{"private-key":"3520494a-f038-4d12-842b-bb97fdfea106"}}).then((function(){return l(!1)})).catch((function(e){return console.log("e",e.response)}))}))})).then((function(){return l(!1)})).catch((function(e){var t=new FormData;t.append("email",o.email),t.append("username",o.email),t.append("secret",o.uid),p(o.photoURL).then((function(e){t.append("avatar",e,e.name),k.a.post("https://api.chatengine.io/users/",t,{headers:{"private-key":"3520494a-f038-4d12-842b-bb97fdfea106"}}).then((function(){return l(!1)})).catch((function(e){return console.log("e",e.response)}))}))}))}}),[o,s]),!o||c?r.a.createElement("div",null):r.a.createElement("div",{className:"chats-page"},r.a.createElement("div",{className:"nav-bar"},r.a.createElement("div",{className:"logo-tab"},"SouthViewChat"),r.a.createElement("div",{onClick:function(){return m.apply(this,arguments)},className:"logout-tab"},"Logout")),r.a.createElement(O.d,{height:"calc(100vh - 66px)",projectID:"56cec49b-88cd-4446-bf67-c69970a9eb46",userName:o.email,userSecret:o.uid}))}var x=n(117);function I(){Object(a.useRef)(!1);var e=Object(a.useState)(!0),t=Object(u.a)(e,2),n=(t[0],t[1],d().user,Object(i.f)());function c(){return(c=Object(y.a)(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.signOut();case 2:n.push("/more");case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement("div",{id:"login-page"},r.a.createElement("div",{id:"login-card"},r.a.createElement("h1",null,"[Error 404]"),r.a.createElement("h2",null," Website Not Found"),r.a.createElement("div",{className:"login-button google",onClick:function(){return c.apply(this,arguments)}},r.a.createElement(x.a,null)," More Info, New Link ",r.a.createElement(x.a,null))))}var N=function(){return r.a.createElement("div",{style:{fontFamily:"Avenir"}},r.a.createElement(o.a,null,r.a.createElement(f,null,r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/error",component:I}),r.a.createElement(i.a,{path:"/chats",component:S}),r.a.createElement(i.a,{path:"/more",component:E}),r.a.createElement(i.a,{path:"/login",component:g})))))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root"))},56:function(e,t,n){e.exports=n(114)},61:function(e,t,n){}},[[56,1,2]]]);
//# sourceMappingURL=main.35f7fe12.chunk.js.map
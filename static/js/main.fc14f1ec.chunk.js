(this["webpackJsonpunichat-template"]=this["webpackJsonpunichat-template"]||[]).push([[0],{114:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(24),o=n.n(c),l=(n(61),n(19)),i=n(4),u=n(14),s=n(11),h=n.n(s),m=(n(64),h.a.initializeApp({apiKey:"AIzaSyDfc123GsJTn2YSQ_6r0tu_E98Emogn0xg",authDomain:"svchat-ef36e.firebaseapp.com",projectId:"svchat-ef36e",storageBucket:"svchat-ef36e.appspot.com",messagingSenderId:"104143281540",appId:"1:104143281540:web:1e2df5c7441d6f1d8251d1"}).auth()),p=r.a.createContext();function d(){return Object(a.useContext)(p)}function f(e){var t=e.children,n=Object(a.useState)(!0),c=Object(u.a)(n,2),o=c[0],l=c[1],s=Object(a.useState)(),h=Object(u.a)(s,2),d=h[0],f=h[1],b=Object(i.f)();Object(a.useEffect)((function(){m.onAuthStateChanged((function(e){f(e),l(!1),b.push("/error")}))}),[d,b]);var g={user:d};return r.a.createElement(p.Provider,{value:g},!o&&t)}var b=n(116),g=function(){return r.a.createElement("div",{id:"login-page"},r.a.createElement("div",{id:"login-card"},r.a.createElement("center",null,r.a.createElement("br",null),r.a.createElement("h2",null,"Welcome to SouthView Chat!"),r.a.createElement("h3",null,"Log in with the prompt below!"),r.a.createElement("br",null),r.a.createElement("div",{className:"login-button google",onClick:function(){return m.signInWithRedirect(new h.a.auth.GoogleAuthProvider)}},r.a.createElement(b.a,null)," Sign In with Google"))))},E=function(){return r.a.createElement("div",{id:"login-page"},r.a.createElement("div",{id:"login-card3"},r.a.createElement("center",null,r.a.createElement("h1",null,"[Error Information]"),r.a.createElement("h2",null,"December 2nd-6th Maintenance"),r.a.createElement("br",null),r.a.createElement("p",null," SouthView Chat is currently under maintenance due to multible glitches found with the burst in account creation. There were a plethora of bugs found the past couple days. Many of them had to do with lag or with things I did not take accounting for when I created this. To resolve this situation I closed the website for now to prevent the creation of new bugs. I dont know when I will finish fixing the bugs, I might have to redesign portions of the website. I will be adding a couple new features to the website. At the worst everybodys accounts and chats will be deleted but I hope it does not come to that. and the website should be done by Monday, December 6."),r.a.createElement("small",null," If you have any questions, or sugestions contact me ",r.a.createElement("a",{href:"mailto:southviewchat@outlook.com"},"Here")," "),r.a.createElement("br",null),r.a.createElement("br",null))))},v=n(13),w=n.n(v),j=n(20),y=n(3),O=n.n(y),I=n(55);function k(){var e=Object(a.useRef)(!1),t=Object(a.useState)(!0),n=Object(u.a)(t,2),c=n[0],o=n[1],l=d().user,s=Object(i.f)();function h(){return(h=Object(j.a)(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.signOut();case 2:s.push("/login");case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(){return(p=Object(j.a)(w.a.mark((function e(t){var n,a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return n=e.sent,e.next=5,n.blob();case 5:return a=e.sent,e.abrupt("return",new File([a],"userPhoto.jpg",{type:"image/jpeg"}));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){if(!e.current){if(e.current=!0,!l||null===l)return void s.push("/login");O.a.get("https://api.chatengine.io/users/me/",{headers:{"project-id":"45d1497a-3093-4cb4-8207-baaf73ae4cd6","user-name":l.email,"user-secret":l.uid}}).then((function(){return o(!1)})).catch((function(e){var t=new FormData;t.append("email",l.email),t.append("username",l.email),t.append("secret",l.uid),function(e){return p.apply(this,arguments)}(l.photoURL).then((function(e){t.append("avatar",e,e.name),O.a.post("https://api.chatengine.io/users/",t,{headers:{"private-key":"83008d56-174f-4f7b-8dcd-77e5c0358914"}}).then((function(){return o(!1)})).catch((function(e){return console.log("e",e.response)}))}))}))}}),[l,s]),!l||c?r.a.createElement("div",null):r.a.createElement("div",{className:"chats-page"},r.a.createElement("div",{className:"nav-bar"},r.a.createElement("div",{className:"logo-tab"},"SouthViewChat"),r.a.createElement("div",{onClick:function(){return h.apply(this,arguments)},className:"logout-tab"},"Logout")),r.a.createElement(I.d,{height:"calc(100vh - 66px)",projectID:"45d1497a-3093-4cb4-8207-baaf73ae4cd6",userName:l.email,userSecret:l.uid}))}var S=n(117);function x(){Object(a.useRef)(!1);var e=Object(a.useState)(!0),t=Object(u.a)(e,2),n=(t[0],t[1],d().user,Object(i.f)());function c(){return(c=Object(j.a)(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.signOut();case 2:n.push("/more");case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement("div",{id:"login-page"},r.a.createElement("div",{id:"login-card2"},r.a.createElement("center",null,r.a.createElement("h1",null,"[Error 404]"),r.a.createElement("h2",null," Website Not Found"),r.a.createElement("div",{className:"login-button google",onClick:function(){return c.apply(this,arguments)}},r.a.createElement(S.a,null)," More Info",r.a.createElement(S.a,null)))),"\\")}var N=function(){return r.a.createElement("div",{style:{fontFamily:"Avenir"}},r.a.createElement(l.a,null,r.a.createElement(f,null,r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/error",component:x}),r.a.createElement(i.a,{path:"/chats",component:k}),r.a.createElement(i.a,{path:"/more",component:E}),r.a.createElement(i.a,{path:"/login",component:g})))))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root"))},56:function(e,t,n){e.exports=n(114)},61:function(e,t,n){}},[[56,1,2]]]);
//# sourceMappingURL=main.fc14f1ec.chunk.js.map

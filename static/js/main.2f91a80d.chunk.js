(this["webpackJsonpmy-website"]=this["webpackJsonpmy-website"]||[]).push([[0],{25:function(e,c,s){},26:function(e,c,s){},28:function(e,c,s){},29:function(e,c,s){},38:function(e,c,s){"use strict";s.r(c);var t=s(0),a=s.n(t),n=s(14),i=s.n(n),o=(s(25),s(7)),l=s(2),r=s(15),j=s(16),b=s(20),m=s(18),d=(s(26),s.p+"static/media/arrow-down-icon.48308bea.svg"),u=s(1),_=function(e){Object(b.a)(s,e);var c=Object(m.a)(s);function s(e){var t;return Object(r.a)(this,s),(t=c.call(this,e)).showProfile=function(){t.setState((function(e){return{showProfile:!e.showProfile}}))},t.state={showProfile:!0},t}return Object(j.a)(s,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"Main",children:Object(u.jsxs)("div",{className:this.state.showProfile?"Me__profile Me__profile--active":"Me__profile",children:[Object(u.jsx)("img",{className:"Me__image",src:"https://i.imgur.com/tuSLnrm.jpeg",alt:"Marco Antonio Miranda Sandoval"}),Object(u.jsx)("h1",{className:"Me__full-name",children:"Marco Antonio Miranda Sandoval"}),Object(u.jsxs)("div",{className:"Me__skills-list",children:[Object(u.jsx)("span",{className:"Me__skill",children:"Frontend"}),Object(u.jsx)("span",{className:"Me__skill",children:"UI Design"})]}),Object(u.jsx)("div",{className:"Me__leave-button",title:"Hide profile",onClick:this.showProfile,children:Object(u.jsx)("img",{className:"Me__icon",src:d,alt:"arrow down icon"})})]})})}}]),s}(a.a.Component),v=s(19),N=s.p+"static/media/logo-icon.5c90998b.svg",h=s.p+"static/media/letter-logo.04b3ee83.svg",O=(s(28),["small","large"]),x=function(e){var c=e.size,s=O.includes(c)?c:O[0];return Object(u.jsxs)("div",{className:"LogoIcon",children:[Object(u.jsx)("img",{className:"LogoIcon__logo",src:N,alt:"Seudosan icon"}),"small"!==s&&Object(u.jsx)("img",{className:"LogoIcon__letter",src:h,alt:"Seudosan icon"})]})},f=s.p+"static/media/bars-icon.5e343917.svg",g=s.p+"static/media/close-icon.da60763a.svg";s(29);var p=function(){var e=Object(t.useState)(!1),c=Object(v.a)(e,2),s=c[0],a=c[1],n=function(){return a(!1)};return Object(u.jsx)("div",{className:s?"Navbar Navbar--fixed":"Navbar",children:Object(u.jsxs)("div",{className:"Navbar__container",children:[Object(u.jsx)(o.b,{to:"/",onClick:n,children:Object(u.jsx)(x,{size:"large",color:"black"})}),Object(u.jsx)("div",{className:"Navbar__switch",tabIndex:"1",onClick:function(){return a(!s)},children:s?Object(u.jsx)("img",{src:g,className:"Navbar__icon",alt:"Navbar menu"}):Object(u.jsx)("img",{src:f,className:"Navbar__icon",alt:"Navbar menu"})}),Object(u.jsxs)("ul",{className:s?"Nav-menu Nav-menu--active":"Nav-menu",children:[Object(u.jsx)("li",{className:"Nav-menu__item",title:"Home",children:Object(u.jsx)(o.b,{to:"/",className:"Nav-menu__links",onClick:n,children:"Home"})}),Object(u.jsx)("li",{className:"Nav-menu__item",title:"Blogs",children:Object(u.jsx)(o.b,{to:"/blogs",className:"Nav-menu__links",onClick:n,children:"Blogs"})}),Object(u.jsx)("li",{className:"Nav-menu__item",title:"Projects",children:Object(u.jsx)(o.b,{to:"/projects",className:"Nav-menu__links",onClick:n,children:"Projects"})}),Object(u.jsx)("li",{className:"Nav-menu__item",title:"About me",children:Object(u.jsx)(o.b,{to:"/about",className:"Nav-menu__links",onClick:n,children:"About me"})})]})]})})};var k=function(){return Object(u.jsx)("h1",{children:"Error Not Found"})};var M=function(){return Object(u.jsxs)(o.a,{children:[Object(u.jsx)(p,{}),Object(u.jsxs)(l.d,{children:[Object(u.jsx)(l.b,{exact:!0,path:"/",component:_}),Object(u.jsx)(l.b,{exact:!0,path:"/error/not-found/",component:k}),Object(u.jsx)(l.a,{from:"*",to:"/error/not-found/"})]})]})};i.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(M,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.2f91a80d.chunk.js.map
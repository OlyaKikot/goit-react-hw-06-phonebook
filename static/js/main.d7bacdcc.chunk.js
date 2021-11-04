(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={button:"ContactListItem_button__j2aC2",container:"ContactListItem_container__2E9Jl"}},15:function(t,e,n){t.exports={text:"Filter_text__2-bFv"}},16:function(t,e,n){t.exports={mainTitle:"App_mainTitle__30DHH",title:"App_title__2DRQZ"}},19:function(t,e,n){t.exports={list:"ContactList_list__fS4Uk"}},28:function(t,e,n){},39:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(8),i=n.n(r),o=(n(28),n(17)),s=n(3),u=n(23),l=n(4),b={addContact:Object(l.b)("contacts/add",(function(t,e){return{payload:{name:t,number:e,id:Object(u.a)()}}})),deleteContact:Object(l.b)("contacts/delete"),changeFilter:Object(l.b)("contacts/filter")},d=n(6),m=n.n(d),j=n(1);var f=Object(s.b)(null,(function(t){return{onFormSubmit:function(e,n){return t(b.addContact(e,n))}}}))((function(t){var e=t.onFormSubmit,n=Object(a.useState)(""),c=Object(o.a)(n,2),r=c[0],i=c[1],s=Object(a.useState)(""),u=Object(o.a)(s,2),l=u[0],b=u[1];return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("form",{className:m.a.form,onSubmit:function(t){t.preventDefault(),e(r,l),i(""),b("")},children:[Object(j.jsx)("p",{className:m.a.name,children:"Name"}),Object(j.jsx)("input",{className:m.a.input,type:"text",onChange:function(t){i(t.currentTarget.value)},value:r,name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0}),Object(j.jsx)("p",{className:m.a.name,children:"Number"}),Object(j.jsx)("input",{className:m.a.input,type:"tel",onChange:function(t){b(t.currentTarget.value)},name:"number",value:l,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0}),Object(j.jsx)("button",{className:m.a.button,type:"onSubmit",children:"Add contact"})]})})})),O=n(15),p=n.n(O);var h=Object(s.b)((function(t){return{value:t.contacts.filter}}),(function(t){return{onChange:function(e){return t(b.changeFilter(e.target.value))}}}))((function(t){var e=t.value,n=t.onChange;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("p",{className:p.a.text,children:"Find contacts by name"}),Object(j.jsx)("input",{className:p.a.input,type:"text",value:e,onChange:n})]})})),x=n(19),C=n.n(x),v=n(11),_=n.n(v);var g=function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.trim().toLowerCase())}))},F=Object(s.b)((function(t){var e=t.contacts,n=e.filter,a=e.items;return{visibleContacts:g(a,n)}}),(function(t){return{onDelete:function(e){return t(b.deleteContact(e))}}}))((function(t){var e=t.contact,n=t.onDelete;return Object(j.jsxs)("div",{className:_.a.container,children:[Object(j.jsxs)("li",{className:_.a.item,children:[e.name,": ",e.number]}),Object(j.jsx)("button",{className:_.a.button,id:e.id,type:"button",onClick:function(){return n(e.id)},children:"Delete"})]})}));var N=function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.trim().toLowerCase())}))},y=Object(s.b)((function(t){var e=t.contacts,n=e.filter,a=e.items;return{visibleContacts:N(a,n)}}),null)((function(t){var e=t.visibleContacts;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("ul",{className:C.a.list,children:e.map((function(t){return Object(j.jsx)(F,{contact:t},t.id)}))})})})),k=n(16),w=n.n(k);var A,S=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{className:w.a.mainTitle,children:"Phonebook"}),Object(j.jsx)(f,{}),Object(j.jsx)(h,{}),Object(j.jsx)("h2",{className:w.a.title,children:"Contacts"}),Object(j.jsx)(y,{})]})},L=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,40)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),a(t),c(t),r(t),i(t)}))},T=n(20),D=n(10),z=n(12),Z=n(2);var I=Object(l.c)([{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],(A={},Object(z.a)(A,b.addContact,(function(t,e){return function(t,e){var n=e.payload;return t.find((function(t){return t.name===n.name}))?alert("".concat(n.name," is already in the contact")):[].concat(Object(D.a)(t),[n])}(t,e)})),Object(z.a)(A,b.deleteContact,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),A)),J=Object(l.c)("",Object(z.a)({},b.changeFilter,(function(t,e){return e.payload}))),q=Object(Z.b)({items:I,filter:J}),B=n(21),E=n.n(B),H=n(5),P=n(22),M={key:"contact",storage:n.n(P).a,blacklist:["filter"]},Q=[].concat(Object(D.a)(Object(l.d)({serializableCheck:{ignoredActions:[H.a,H.f,H.b,H.c,H.d,H.e]}})),[E.a]),R=Object(l.a)({reducer:{contacts:Object(H.g)(M,q)},middleware:Q,devTools:!1}),K={store:R,persistor:Object(H.h)(R)};i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(s.a,{store:K.store,children:Object(j.jsx)(T.a,{loading:null,persistor:K.persistor,children:Object(j.jsx)(S,{})})})}),document.getElementById("root")),L()},6:function(t,e,n){t.exports={form:"ContactForm_form__e5qic",name:"ContactForm_name__2dFQn",input:"ContactForm_input__2n9Zl",button:"ContactForm_button__aaVwn"}}},[[39,1,2]]]);
//# sourceMappingURL=main.d7bacdcc.chunk.js.map
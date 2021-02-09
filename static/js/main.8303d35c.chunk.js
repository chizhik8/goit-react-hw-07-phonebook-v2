(this["webpackJsonpgoit-react-hw-07-phonebook-v2"]=this["webpackJsonpgoit-react-hw-07-phonebook-v2"]||[]).push([[0],{39:function(t,e,n){},63:function(t,e,n){},65:function(t,e,n){},66:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n(9),o=n.n(a),r=(n(39),n(10)),s=n(11),u=n(13),i=n(12),b=n(8),d=n(3),j=n(24),l=n(19),f=n.n(l),h=n(2),O=Object(h.b)("contacts/addRequest"),m=Object(h.b)("contacts/addSuccess"),C=Object(h.b)("contacts/addError"),p=Object(h.b)("contacts/fetchRequest"),v=Object(h.b)("contacts/fetchSuccess"),g=Object(h.b)("contacts/fetchError"),x=Object(h.b)("contacts/removeRequest"),y={addContactsRequest:O,addContactsSuccess:m,addContactsError:C,fetchContactsRequest:p,fetchContactsSuccess:v,fetchContactsError:g,removeContactsSuccess:Object(h.b)("contacts/removeSuccess"),removeContactsRequest:x,removeContactsError:Object(h.b)("contacts/removeError"),addFilter:Object(h.b)("contacts/addFilter",(function(t){return{payload:{filter:t}}}))},S={addContacts:function(t,e){return function(n){n(y.addContactsRequest()),f.a.post("https://hw-js-7-default-rtdb.firebaseio.com/contacts.json",{name:t,number:e}).then((function(c){n(y.addContactsSuccess({name:t,number:e,id:c.data.name}))})).catch((function(t){return n(y.addContactsError(t))}))}},fetchContacts:function(){return function(t){t(y.fetchContactsRequest()),f.a.get("https://hw-js-7-default-rtdb.firebaseio.com/contacts.json").then((function(e){t(y.fetchContactsSuccess(Object.keys(e.data).map((function(t){return Object(j.a)(Object(j.a)({},e.data[t]),{},{id:t})}))))})).catch((function(e){return t(y.fetchContactsError(null))}))}},removeContact:function(t){return function(e){e(y.removeContactsRequest()),f.a.delete("https://hw-js-7-default-rtdb.firebaseio.com/contacts/".concat(t,".json")).then((function(){return e(y.removeContactsSuccess(t))})).catch((function(t){return e(y.removeContactsError(t))}))}}},w=(n(63),n(1)),R=function(t){Object(u.a)(n,t);var e=Object(i.a)(n);function n(){var t;Object(r.a)(this,n);for(var c=arguments.length,a=new Array(c),o=0;o<c;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).state={name:"",number:""},t.handleInput=function(e){var n=e.target,c=n.name,a=n.value;t.setState((function(){return Object(d.a)({},c,a)}))},t.handleSubmit=function(e){var n=t.state,c=n.name,a=n.number;e.preventDefault(),t.props.onAddContacts(c,a),t.setState({name:"",number:""})},t}return Object(s.a)(n,[{key:"render",value:function(){return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("h1",{children:"Phonebook"}),Object(w.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(w.jsxs)("label",{children:["Name",Object(w.jsx)("input",{type:"text",value:this.state.name,onChange:this.handleInput,name:"name"})]}),Object(w.jsxs)("label",{children:["Number",Object(w.jsx)("input",{type:"tel",value:this.state.number,onChange:this.handleInput,name:"number"})]}),Object(w.jsx)("button",{type:"submit",children:"Add contact"})]})]})}}]),n}(c.Component),E={onAddContacts:S.addContacts},q=Object(b.b)(null,E)(R),F=n(69),k=n(68),L=n(17),I=function(t){return t.contacts.items},A=function(t){return t.contacts.filter},N={getLoading:function(t){return t.contacts.loading},getContactItems:I,getAlert:function(t){return t.contacts.alert},getValueFilter:A,getContactList:Object(L.a)([I,A],(function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))}))};n(65);var D,J,P={onRemoveContact:S.removeContact},V=Object(b.b)((function(t){return{contacts:N.getContactList(t)}}),P)((function(t){var e=t.contacts,n=t.onRemoveContact;return Object(w.jsx)("div",{children:Object(w.jsx)(F.a,{component:"ul",children:e.map((function(t){return Object(w.jsx)(k.a,{timeout:250,classNames:"contacts",children:Object(w.jsxs)("li",{children:[" ",t.name,": ",t.number,Object(w.jsx)("button",{type:"button",onClick:function(){return n(t.id)},children:"x"})]})},t.id)}))})})})),B=function(t){Object(u.a)(n,t);var e=Object(i.a)(n);function n(){var t;Object(r.a)(this,n);for(var c=arguments.length,a=new Array(c),o=0;o<c;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).handleInput=function(e){t.props.onInputFilter(e.target.value)},t}return Object(s.a)(n,[{key:"render",value:function(){return Object(w.jsxs)("div",{children:[Object(w.jsx)("h3",{children:"Find contacts by name"}),Object(w.jsx)("input",{type:"text",onChange:this.handleInput})]})}}]),n}(c.Component),M={onInputFilter:y.addFilter},z=Object(b.b)((function(t){return{value:N.getValueFilter(t)}}),M)(B),G=function(t){Object(u.a)(n,t);var e=Object(i.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.onFetchContacts()}},{key:"render",value:function(){return Object(w.jsxs)("div",{children:[Object(w.jsx)(q,{}),this.props.contacts.length>0?Object(w.jsx)(z,{}):Object(w.jsx)("h2",{children:"Contact list is empty! Please add contact!"}),this.props.isLoadingContacts&&Object(w.jsx)("h1",{children:"Loading contacts......"}),Object(w.jsx)(V,{})]})}}]),n}(c.Component),H={onFetchContacts:S.fetchContacts},K=Object(b.b)((function(t){return{isLoadingContacts:N.getLoading(t),contacts:N.getContactItems(t),isAlertContacts:N.getAlert(t)}}),H)(G),Q=n(18),T=n(4),U=Object(h.c)([],(D={},Object(d.a)(D,y.fetchContactsSuccess,(function(t,e){return e.payload})),Object(d.a)(D,y.addContactsSuccess,(function(t,e){return t.find((function(t){return t.name.toLowerCase()===e.payload.name.toLowerCase()}))?alert("".concat(e.payload.name," is already in contacts ")):[].concat(Object(Q.a)(t),[e.payload])})),Object(d.a)(D,y.removeContactsSuccess,(function(t,e){return t.filter((function(t){return t.id!==e.payload}))})),D)),W=Object(h.c)("",Object(d.a)({},y.addFilter,(function(t,e){return e.payload.filter}))),X=Object(h.c)(!1,(J={},Object(d.a)(J,y.fetchContactsRequest,(function(){return!0})),Object(d.a)(J,y.addContactsRequest,(function(){return!0})),Object(d.a)(J,y.removeContactsRequest,(function(){return!0})),Object(d.a)(J,y.addContactsSuccess,(function(){return!1})),Object(d.a)(J,y.fetchContactsSuccess,(function(){return!1})),Object(d.a)(J,y.removeContactsSuccess,(function(){return!1})),Object(d.a)(J,y.addContactsError,(function(){return!1})),Object(d.a)(J,y.fetchContactsError,(function(){return!1})),Object(d.a)(J,y.removeContactsError,(function(){return!1})),J)),Y=Object(h.c)(!1,{}),Z=Object(T.c)({items:U,filter:W,loading:X,alert:Y}),$=Object(T.c)({contacts:Z}),_=Object(h.d)(),tt=Object(h.a)({reducer:$,middleware:Object(Q.a)(_)});o.a.render(Object(w.jsx)(b.a,{store:tt,children:Object(w.jsx)(K,{})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.8303d35c.chunk.js.map
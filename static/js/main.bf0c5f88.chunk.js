(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(3),l=a.n(r),i=(a(14),a(4)),s=a(5),o=a(7),u=a(6),m=a(8),h=a(1),d=(a(16),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={subject:[{name:"Computer Science",id:1,price:12333,checked:!1},{name:"Kiswahili",id:2,price:90383,checked:!1},{name:"Mathematics",id:3,price:45555,checked:!1},{name:"Networking",id:4,price:98884,checked:!1},{name:"Graphics design",id:5,price:99999,checked:!1}]},a.handleChange=a.handleChange.bind(Object(h.a)(Object(h.a)(a))),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"handleChange",value:function(e){e.target.checked?this.setState({subject:this.state.subject.map(function(t,a){return t.name===e.target.value&&(t.checked=!0),t})}):this.setState({subject:this.state.subject.map(function(t,a){return t.name===e.target.value&&(t.checked=!1),t})})}},{key:"render",value:function(){var e=this.state.subject;return c.a.createElement("div",{className:"container-fluid col-md-8 jumbotron"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement("form",null,c.a.createElement(p,{subject:e,handleChange:this.handleChange}))),c.a.createElement("div",{className:"col"},c.a.createElement("ul",{className:"list-group"},c.a.createElement("p",null,"The selected subjects"),c.a.createElement(b,{subject:e})))))}}]),t}(n.Component)),p=function(e){return e.subject.map(function(t,a){return c.a.createElement("div",{className:"form-group",key:a},c.a.createElement("label",null,c.a.createElement("input",{type:"checkbox",name:"subject",value:t.name,onClick:e.handleChange}),t.name))})},b=function(e){var t=e.subject.filter(function(e,t){return!0===e.checked}),a=t.reduce(function(e,t){return e+t.price},0),n=t.map(function(e,t){return c.a.createElement("li",{className:"list-group-item"},e.name," ",c.a.createElement("span",{className:"float-right"}," ",e.price," "))});return c.a.createElement("div",null,n,c.a.createElement("li",{className:"list-group-item"},c.a.createElement("b",null,"Total")," ",c.a.createElement("span",{className:"float-right"},c.a.createElement("b",null,a))))},f=d;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(18)}},[[9,2,1]]]);
//# sourceMappingURL=main.bf0c5f88.chunk.js.map
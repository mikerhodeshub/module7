(()=>{"use strict";var e,t,n,r={9972:(e,t,n)=>{var r=n(7294),l=n(745),o=n(4079),a=n(2459),c=n(9250),u=n(9655),i=n(6025);function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function f(){var e,t,n=(0,c.s0)(),l=(e=(0,u.lr)(),t=1,function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,l,o=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(e){c=!0,l=e}finally{try{a||null==n.return||n.return()}finally{if(c)throw l}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0];return r.createElement(i.Z,null,r.createElement(i.Z.Header,{as:"h5"},"Filter"),r.createElement(i.Z.Body,null,r.createElement(i.Z.Text,null,"Currently Employed:"," ",r.createElement("select",{value:l.get("employed")||"",onChange:function(e){return n(e.target.value?"/employees?employed=".concat(e.target.value):"/employees")}},r.createElement("option",{value:""},"All"),r.createElement("option",{value:"true"},"Employed"),r.createElement("option",{value:"false"},"Not Employed")))))}var p=n(5005),y=n(1881),s=n(682),d=n(4051),E=n(1555);function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},v(e,t)}function O(e,t){if(t&&("object"===h(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return Z(e)}function Z(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}var w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&v(e,t)}(c,e);var t,n,l,o,a=(l=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=g(l);if(o){var n=g(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return O(this,e)});function c(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(e=a.call(this)).state={modalVisible:!1},e.handleSubmit=e.handleSubmit.bind(Z(e)),e.handleShowModal=e.handleShowModal.bind(Z(e)),e.handleHideModal=e.handleHideModal.bind(Z(e)),e}return t=c,(n=[{key:"handleShowModal",value:function(){this.setState={modalVisible:!0}}},{key:"handleHideModal",value:function(){}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=document.forms.employeeAdd,n={name:t.name.value,extension:t.ext.value,email:t.email.value,title:t.title.value};this.props.createEmployee(n),t.name.value="",t.ext.value="",t.email.value="",t.title.value=""}},{key:"render",value:function(){return r.createElement(r.Fragment,null,r.createElement("div",{className:"addEmployee"},r.createElement(p.Z,{variant:"primary",size:"sm",onClick:this.handleShowModal},"New Employee")),r.createElement(y.Z,{show:this.state.modalVisible},r.createElement(y.Z.Header,{closeButton:!0},r.createElement(y.Z.Title,null,"Add New Employee")),r.createElement(y.Z.Body,null,r.createElement(s.Z,{fluid:!0},r.createElement("form",{name:"employeeAdd"},r.createElement(d.Z,null,r.createElement(E.Z,{md:3},"Name:"),r.createElement(E.Z,{md:"auto"},r.createElement("input",{type:"text",name:"name"}))),r.createElement(d.Z,null,r.createElement(E.Z,{md:3},"Extension:"),r.createElement(E.Z,{md:"auto"},r.createElement("input",{type:"text",name:"ext",maxLength:4}))),r.createElement(d.Z,null,r.createElement(E.Z,{md:3},"Email:"),r.createElement(E.Z,{md:"auto"},r.createElement("input",{type:"text",name:"email"}))),r.createElement(d.Z,null,r.createElement(E.Z,{md:3},"Title:"),r.createElement(E.Z,{md:"auto"},r.createElement("input",{type:"text",name:"title"})))))),r.createElement(y.Z.Footer,null,r.createElement(p.Z,{type:"submit",variant:"success",size:"sm",className:"mt-4",onSubmit:this.handleSubmit},"Add Employee"))))}}])&&b(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(r.Component),j=n(7977),S=n(5147);function x(e){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},x(e)}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function P(e,t){return P=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},P(e,t)}function k(e,t){if(t&&("object"===x(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return T(e)}function T(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function A(e){return A=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},A(e)}function C(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,l,o=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(e){c=!0,l=e}finally{try{a||null==n.return||n.return()}finally{if(c)throw l}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return D(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?D(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function D(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function H(e){var t=C((0,r.useState)(!1),2),n=t[0],l=t[1],o=C((0,r.useState)(""),2),a=o[0],c=o[1];function u(){l(!n)}function m(e){c(e),u()}var f=e.employees.map((function(e){return r.createElement(M,{key:e._id,employee:e,onDeleteClick:m})}));return r.createElement(i.Z,null,r.createElement(i.Z.Header,{as:"h5"},"All Employees ",r.createElement(j.Z,{bg:"secondary"},f.length)),r.createElement(i.Z.Body,null,r.createElement(i.Z.Text,null,r.createElement(S.Z,{striped:!0},r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"Edit"),r.createElement("th",null,"Name"),r.createElement("th",null,"Extension"),r.createElement("th",null,"Email"),r.createElement("th",null,"Title"),r.createElement("th",null,"Date Hired"),r.createElement("th",null,"Currently Employed?"),r.createElement("th",null,"Delete"),r.createElement("td",{className:"align-middle"},r.createElement(y.Z,{show:n,onHide:u},r.createElement(y.Z.Header,{closeButton:!0},r.createElement(y.Z.Title,null,"Delete Employee")),r.createElement(y.Z.Body,null,"Are you sure you want to delete this employee?"),r.createElement(y.Z.Footer,null,r.createElement(p.Z,{variant:"secondary",onClick:u,className:"btn-danger"},"No"),r.createElement(p.Z,{variant:"success",onClick:function(){e.deleteEmployee(a),u()}},"Yes")))))),r.createElement("tbody",null,f)))))}function M(e){return r.createElement("tr",null,r.createElement("td",null,r.createElement(u.rU,{to:"/edit/".concat(e.employee._id)},"Edit")),r.createElement("td",null,e.employee.name),r.createElement("td",null,e.employee.extension),r.createElement("td",null,e.employee.email),r.createElement("td",null,e.employee.title),r.createElement("td",null,e.employee.dateHired.toDateString()),r.createElement("td",null,e.employee.currentlyEmployed?"Yes":"No"),r.createElement("td",null,r.createElement("button",{onClick:function(){return e.onDeleteClick(e.employee._id)}},"DELETE")))}var R=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&P(e,t)}(c,e);var t,n,l,o,a=(l=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=A(l);if(o){var n=A(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return k(this,e)});function c(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(e=a.call(this)).state={employees:[]},e.createEmployee=e.createEmployee.bind(T(e)),e.deleteEmployee=e.deleteEmployee.bind(T(e)),e}return t=c,(n=[{key:"componentDidMount",value:function(){this.loadData()}},{key:"loadData",value:function(){var e=this;fetch("/api/employees").then((function(e){return e.json()})).then((function(t){t.employees.forEach((function(e){e.dateHired=new Date(e.dateHired)})),e.setState({employees:t.employees})})).catch((function(e){console.log(e)}))}},{key:"createEmployee",value:function(e){var t=this;fetch("/api/employees",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){e.employee.dateHired=new Date(e.employee.dateHired);var n=t.state.employees.concat(e.employee);t.setState({employees:n}),console.log("Total count of employees:",n.length)})).catch((function(e){console.log(e)}))}},{key:"deleteEmployee",value:function(e){var t=this;fetch("/api/employees/".concat(e),{method:"DELETE"}).then((function(e){e.ok?t.loadData():console.log("Failed to delete employee.")}))}},{key:"render",value:function(){return r.createElement(r.Fragment,null,r.createElement(w,{createEmployee:this.createEmployee}),r.createElement(f,null),r.createElement(H,{employees:this.state.employees,deleteEmployee:this.deleteEmployee}))}}])&&_(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(r.Component);function N(){return r.createElement(i.Z,null,r.createElement(i.Z.Header,{as:"h5"},"Filter"),r.createElement(i.Z.Body,null,r.createElement(i.Z.Text,null,"This is a placeholder for the employee report")))}var B=n(8375);function V(e){return V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},V(e)}function F(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function I(e,t){return I=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},I(e,t)}function U(e,t){if(t&&("object"===V(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return L(e)}function L(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function W(e){return W=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},W(e)}var z=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&I(e,t)}(c,e);var t,n,l,o,a=(l=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=W(l);if(o){var n=W(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return U(this,e)});function c(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(e=a.call(this)).state={employee:[],alertVisible:!1,alertColor:"success",alertMessage:""},e.handleSubmit=e.handleSubmit.bind(L(e)),e}return t=c,(n=[{key:"componentDidMount",value:function(){this.loadData()}},{key:"loadData",value:function(){var e=this,t=window.location.pathname.split("/")[2];fetch("/api/employees/".concat(t)).then((function(e){return e.json()})).then((function(t){t.employee.dateHired=new Date(t.employee.dateHired),e.setState({employee:t.employee})})).catch((function(e){console.log(e)}))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var n=document.forms.employeeUpdate,r=n.id.value,l=n.name.value,o=n.extension.value,a=n.email.value,c=n.title.value,u=n.currentlyEmployed.checked,i="/api/employees/".concat(r);fetch(i,{method:"PATCH",headers:{Accept:"application/json","Content-Type":"application/json;charset=UTF-8"},body:JSON.stringify({name:l,extension:o,email:a,title:c,currentlyEmployed:u})}).then((function(e){return e.json()})).then((function(e){t.setState({alertVisible:!0,alertMessage:e.msg})}))}},{key:"render",value:function(){return r.createElement(i.Z,null,r.createElement(i.Z.Header,{as:"h5"},"Edit ",this.state.employee.name),r.createElement(i.Z.Body,null,r.createElement(i.Z.Text,null,r.createElement(s.Z,{fluid:!0},r.createElement("form",{name:"employeeUpdate",onSubmit:this.handleSubmit},r.createElement(d.Z,null,r.createElement(E.Z,{md:2},"ID:"),r.createElement("input",{type:"text",name:"id",readOnly:"readOnly",defaultValue:this.state.employee._id}),r.createElement("br",null),r.createElement(E.Z,{md:"auto"})),r.createElement(d.Z,null,r.createElement(E.Z,{md:2},"Name:"),r.createElement(E.Z,{md:"auto"},r.createElement("input",{type:"text",name:"name",defaultValue:this.state.employee.name}))),r.createElement(d.Z,null,r.createElement(E.Z,{md:2},"Extension:"),r.createElement(E.Z,{md:"auto"},r.createElement("input",{type:"text",name:"extension",defaultValue:this.state.employee.extension}))),r.createElement(d.Z,null,r.createElement(E.Z,{md:2},"Email:"),r.createElement(E.Z,{md:"auto"},r.createElement("input",{type:"text",name:"email",defaultValue:this.state.employee.email}))),r.createElement(d.Z,null,r.createElement(E.Z,{md:2},"Title:"),r.createElement(E.Z,{md:"auto"},r.createElement("input",{type:"text",name:"title",defaultValue:this.state.employee.title}))),r.createElement(d.Z,null,r.createElement(E.Z,{md:2},"Date Hired:"),r.createElement(E.Z,{md:"auto"},r.createElement("input",{type:"text",name:"dateHired",defaultValue:this.state.employee.dateHired}))),r.createElement(d.Z,null,r.createElement(E.Z,{md:2},"Currently Employed:"),r.createElement(E.Z,{md:"auto"},r.createElement("input",{type:"checkbox",name:"currentlyEmployed",defaultChecked:this.state.employee.currentlyEmployed}),r.createElement("br",null))),r.createElement(p.Z,{className:"my-3",type:"submit",variant:"primary",size:"sm"}),r.createElement(B.Z,{variant:this.state.alertColor,show:this.state.alertVisible},this.state.alertMessage))))))}}])&&F(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(r.Component);function J(){var e=function(){return r.createElement("h1",null,"Page Not Found")};return r.createElement(c.Z5,null,r.createElement(c.AW,{path:"/employees",element:r.createElement(R,null)}),r.createElement(c.AW,{path:"/edit/:id",element:r.createElement(z,null)}),r.createElement(c.AW,{path:"/report",element:r.createElement(N,null)}),r.createElement(c.AW,{path:"/",element:r.createElement(c.Fg,{replace:!0,to:"/employees"})}),r.createElement(c.AW,{path:"*",element:r.createElement(e,null)}))}function Y(){return r.createElement("nav",null,r.createElement(o.Z,{bg:"dark",variant:"dark"},r.createElement(o.Z.Brand,{href:"/"},"Employee Management Application"),r.createElement(a.Z,null,r.createElement(a.Z.Link,{href:"/employees"},"All Employees"),r.createElement(a.Z.Link,{href:"/report"},"Reports"))))}function $(){return r.createElement("div",null,r.createElement(Y,null),r.createElement(J,null))}(0,l.s)(document.getElementById("content")).render(r.createElement(u.VK,null,r.createElement(r.StrictMode,null,r.createElement($,null))))}},l={};function o(e){var t=l[e];if(void 0!==t)return t.exports;var n=l[e]={exports:{}};return r[e](n,n.exports,o),n.exports}o.m=r,e=[],o.O=(t,n,r,l)=>{if(!n){var a=1/0;for(m=0;m<e.length;m++){for(var[n,r,l]=e[m],c=!0,u=0;u<n.length;u++)(!1&l||a>=l)&&Object.keys(o.O).every((e=>o.O[e](n[u])))?n.splice(u--,1):(c=!1,l<a&&(a=l));if(c){e.splice(m--,1);var i=r();void 0!==i&&(t=i)}}return t}l=l||0;for(var m=e.length;m>0&&e[m-1][2]>l;m--)e[m]=e[m-1];e[m]=[n,r,l]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},n=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,o.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var l=Object.create(null);o.r(l);var a={};t=t||[null,n({}),n([]),n(n)];for(var c=2&r&&e;"object"==typeof c&&!~t.indexOf(c);c=n(c))Object.getOwnPropertyNames(c).forEach((t=>a[t]=()=>e[t]));return a.default=()=>e,o.d(l,a),l},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={624:0};o.O.j=t=>0===e[t];var t=(t,n)=>{var r,l,[a,c,u]=n,i=0;if(a.some((t=>0!==e[t]))){for(r in c)o.o(c,r)&&(o.m[r]=c[r]);if(u)var m=u(o)}for(t&&t(n);i<a.length;i++)l=a[i],o.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return o.O(m)},n=self.webpackChunkmodule01=self.webpackChunkmodule01||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var a=o.O(void 0,[736],(()=>o(9972)));a=o.O(a)})();
//# sourceMappingURL=employees.bundle.js.map
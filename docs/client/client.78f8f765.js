function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function s(t){t.forEach(n)}function o(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,n,r,s){return t[1]&&s?e(r.ctx.slice(),t[1](s(n))):r.ctx}function l(t,e,n,r,s,o,a){const l=function(t,e,n,r){if(t[2]&&r){const s=t[2](r(n));if(void 0===e.dirty)return s;if("object"==typeof s){const t=[],n=Math.max(e.dirty.length,s.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|s[r];return t}return e.dirty|s}return e.dirty}(e,r,s,o);if(l){const s=c(e,n,r,a);t.p(s,l)}}function i(t){return null==t?"":t}function u(t,e){t.appendChild(e)}function f(t,e,n){t.insertBefore(e,n||null)}function p(t){t.parentNode.removeChild(t)}function h(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function d(t){return document.createElement(t)}function m(t){return document.createTextNode(t)}function g(){return m(" ")}function $(){return m("")}function b(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function v(t){return Array.from(t.childNodes)}function y(t,e,n,r){for(let r=0;r<t.length;r+=1){const s=t[r];if(s.nodeName===e){let e=0;const o=[];for(;e<s.attributes.length;){const t=s.attributes[e++];n[t.name]||o.push(t.name)}for(let t=0;t<o.length;t++)s.removeAttribute(o[t]);return t.splice(r,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):d(e)}function E(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return m(e)}function _(t){return E(t," ")}function w(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function S(t,e=document.body){return Array.from(e.querySelectorAll(t))}let x;function A(t){x=t}function P(){if(!x)throw new Error("Function called outside component initialization");return x}const R=[],j=[],k=[],q=[],C=Promise.resolve();let L=!1;function N(t){k.push(t)}let O=!1;const U=new Set;function H(){if(!O){O=!0;do{for(let t=0;t<R.length;t+=1){const e=R[t];A(e),D(e.$$)}for(A(null),R.length=0;j.length;)j.pop()();for(let t=0;t<k.length;t+=1){const e=k[t];U.has(e)||(U.add(e),e())}k.length=0}while(R.length);for(;q.length;)q.pop()();L=!1,O=!1,U.clear()}}function D(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(N)}}const T=new Set;let I;function F(){I={r:0,c:[],p:I}}function M(){I.r||s(I.c),I=I.p}function V(t,e){t&&t.i&&(T.delete(t),t.i(e))}function z(t,e,n,r){if(t&&t.o){if(T.has(t))return;T.add(t),I.c.push((()=>{T.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function B(t,e){const n={},r={},s={$$scope:1};let o=t.length;for(;o--;){const a=t[o],c=e[o];if(c){for(const t in a)t in c||(r[t]=1);for(const t in c)s[t]||(n[t]=c[t],s[t]=1);t[o]=c}else for(const t in a)s[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function J(t){return"object"==typeof t&&null!==t?t:{}}function K(t){t&&t.c()}function Y(t,e){t&&t.l(e)}function Z(t,e,r){const{fragment:a,on_mount:c,on_destroy:l,after_update:i}=t.$$;a&&a.m(e,r),N((()=>{const e=c.map(n).filter(o);l?l.push(...e):s(e),t.$$.on_mount=[]})),i.forEach(N)}function G(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function W(t,e){-1===t.$$.dirty[0]&&(R.push(t),L||(L=!0,C.then(H)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function X(e,n,o,a,c,l,i=[-1]){const u=x;A(e);const f=n.props||{},h=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:c,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:i,skip_bound:!1};let d=!1;if(h.ctx=o?o(e,f,((t,n,...r)=>{const s=r.length?r[0]:n;return h.ctx&&c(h.ctx[t],h.ctx[t]=s)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](s),d&&W(e,t)),n})):[],h.update(),d=!0,s(h.before_update),h.fragment=!!a&&a(h.ctx),n.target){if(n.hydrate){const t=v(n.target);h.fragment&&h.fragment.l(t),t.forEach(p)}else h.fragment&&h.fragment.c();n.intro&&V(e.$$.fragment),Z(e,n.target,n.anchor),H()}A(u)}class Q{$destroy(){G(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const tt=[];function et(e,n=t){let r;const s=[];function o(t){if(a(e,t)&&(e=t,r)){const t=!tt.length;for(let t=0;t<s.length;t+=1){const n=s[t];n[1](),tt.push(n,e)}if(t){for(let t=0;t<tt.length;t+=2)tt[t][0](tt[t+1]);tt.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(a,c=t){const l=[a,c];return s.push(l),1===s.length&&(r=n(o)||t),a(e),()=>{const t=s.indexOf(l);-1!==t&&s.splice(t,1),0===s.length&&(r(),r=null)}}}}const nt={},rt=()=>({});function st(e){let n,r,s,o,a,c,l,h,$,w,S,x;return{c(){n=d("nav"),r=d("a"),s=m("Home"),a=g(),c=d("a"),l=m("About"),$=g(),w=d("a"),S=m("Posts"),this.h()},l(t){n=y(t,"NAV",{class:!0});var e=v(n);r=y(e,"A",{class:!0,href:!0});var o=v(r);s=E(o,"Home"),o.forEach(p),a=_(e),c=y(e,"A",{class:!0,href:!0});var i=v(c);l=E(i,"About"),i.forEach(p),$=_(e),w=y(e,"A",{rel:!0,class:!0,href:!0});var u=v(w);S=E(u,"Posts"),u.forEach(p),e.forEach(p),this.h()},h(){b(r,"class",o=i(void 0===e[0]?"selected":"")+" svelte-13jg14k"),b(r,"href","."),b(c,"class",h=i("about"===e[0]?"selected":"")+" svelte-13jg14k"),b(c,"href","about"),b(w,"rel","prefetch"),b(w,"class",x=i("posts"===e[0]?"selected":"")+" svelte-13jg14k"),b(w,"href","posts"),b(n,"class","svelte-13jg14k")},m(t,e){f(t,n,e),u(n,r),u(r,s),u(n,a),u(n,c),u(c,l),u(n,$),u(n,w),u(w,S)},p(t,[e]){1&e&&o!==(o=i(void 0===t[0]?"selected":"")+" svelte-13jg14k")&&b(r,"class",o),1&e&&h!==(h=i("about"===t[0]?"selected":"")+" svelte-13jg14k")&&b(c,"class",h),1&e&&x!==(x=i("posts"===t[0]?"selected":"")+" svelte-13jg14k")&&b(w,"class",x)},i:t,o:t,d(t){t&&p(n)}}}function ot(t,e,n){let{segment:r}=e;return t.$$set=t=>{"segment"in t&&n(0,r=t.segment)},[r]}class at extends Q{constructor(t){super(),X(this,t,ot,st,a,{segment:0})}}function ct(t){let e,n,r;return n=new at({props:{segment:t[0]}}),{c(){e=d("header"),K(n.$$.fragment),this.h()},l(t){e=y(t,"HEADER",{class:!0});var r=v(e);Y(n.$$.fragment,r),r.forEach(p),this.h()},h(){b(e,"class","svelte-y9ah38")},m(t,s){f(t,e,s),Z(n,e,null),r=!0},p(t,[e]){const r={};1&e&&(r.segment=t[0]),n.$set(r)},i(t){r||(V(n.$$.fragment,t),r=!0)},o(t){z(n.$$.fragment,t),r=!1},d(t){t&&p(e),G(n)}}}function lt(t,e,n){let{segment:r}=e;return t.$$set=t=>{"segment"in t&&n(0,r=t.segment)},[r]}class it extends Q{constructor(t){super(),X(this,t,lt,ct,a,{segment:0})}}function ut(t){let e,n,r,s,o,a,i,h,$,w,S,x,A,P,R,j,k,q=(new Date).getFullYear()+"";n=new it({props:{segment:t[0]}});const C=t[2].default,L=function(t,e,n,r){if(t){const s=c(t,e,n,r);return t[0](s)}}(C,t,t[1],null);return{c(){e=d("div"),K(n.$$.fragment),r=g(),s=d("main"),L&&L.c(),o=g(),a=d("footer"),i=d("span"),h=m("© "),$=m(q),w=m(" Zeke Hernandez.\n      Powered by "),S=d("a"),x=m("Sapper"),A=m(".\n      Template by "),P=d("a"),R=m("Maxi Ferreira"),j=m("."),this.h()},l(t){e=y(t,"DIV",{class:!0});var c=v(e);Y(n.$$.fragment,c),r=_(c),s=y(c,"MAIN",{class:!0});var l=v(s);L&&L.l(l),l.forEach(p),o=_(c),a=y(c,"FOOTER",{class:!0});var u=v(a);i=y(u,"SPAN",{});var f=v(i);h=E(f,"© "),$=E(f,q),w=E(f," Zeke Hernandez.\n      Powered by "),S=y(f,"A",{href:!0,target:!0});var d=v(S);x=E(d,"Sapper"),d.forEach(p),A=E(f,".\n      Template by "),P=y(f,"A",{href:!0,target:!0});var m=v(P);R=E(m,"Maxi Ferreira"),m.forEach(p),j=E(f,"."),f.forEach(p),u.forEach(p),c.forEach(p),this.h()},h(){b(s,"class","svelte-v25qrq"),b(S,"href","https://sapper.svelte.dev"),b(S,"target","_blank"),b(P,"href","https://www.twitter.com/Charca"),b(P,"target","_blank"),b(a,"class","svelte-v25qrq"),b(e,"class","layout svelte-v25qrq")},m(t,c){f(t,e,c),Z(n,e,null),u(e,r),u(e,s),L&&L.m(s,null),u(e,o),u(e,a),u(a,i),u(i,h),u(i,$),u(i,w),u(i,S),u(S,x),u(i,A),u(i,P),u(P,R),u(i,j),k=!0},p(t,[e]){const r={};1&e&&(r.segment=t[0]),n.$set(r),L&&L.p&&2&e&&l(L,C,t,t[1],e,null,null)},i(t){k||(V(n.$$.fragment,t),V(L,t),k=!0)},o(t){z(n.$$.fragment,t),z(L,t),k=!1},d(t){t&&p(e),G(n),L&&L.d(t)}}}function ft(t,e,n){let{$$slots:r={},$$scope:s}=e,{segment:o}=e;return t.$$set=t=>{"segment"in t&&n(0,o=t.segment),"$$scope"in t&&n(1,s=t.$$scope)},[o,s,r]}class pt extends Q{constructor(t){super(),X(this,t,ft,ut,a,{segment:0})}}function ht(t){let e,n,r=t[1].stack+"";return{c(){e=d("pre"),n=m(r)},l(t){e=y(t,"PRE",{});var s=v(e);n=E(s,r),s.forEach(p)},m(t,r){f(t,e,r),u(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&w(n,r)},d(t){t&&p(e)}}}function dt(e){let n,r,s,o,a,c,l,i,h,x=e[1].message+"";document.title=n=e[0];let A=e[2]&&e[1].stack&&ht(e);return{c(){r=g(),s=d("h1"),o=m(e[0]),a=g(),c=d("p"),l=m(x),i=g(),A&&A.c(),h=$(),this.h()},l(t){S('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(p),r=_(t),s=y(t,"H1",{class:!0});var n=v(s);o=E(n,e[0]),n.forEach(p),a=_(t),c=y(t,"P",{class:!0});var u=v(c);l=E(u,x),u.forEach(p),i=_(t),A&&A.l(t),h=$(),this.h()},h(){b(s,"class","svelte-8od9u6"),b(c,"class","svelte-8od9u6")},m(t,e){f(t,r,e),f(t,s,e),u(s,o),f(t,a,e),f(t,c,e),u(c,l),f(t,i,e),A&&A.m(t,e),f(t,h,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&w(o,t[0]),2&e&&x!==(x=t[1].message+"")&&w(l,x),t[2]&&t[1].stack?A?A.p(t,e):(A=ht(t),A.c(),A.m(h.parentNode,h)):A&&(A.d(1),A=null)},i:t,o:t,d(t){t&&p(r),t&&p(s),t&&p(a),t&&p(c),t&&p(i),A&&A.d(t),t&&p(h)}}}function mt(t,e,n){let{status:r}=e,{error:s}=e;return t.$$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,s=t.error)},[r,s,false]}class gt extends Q{constructor(t){super(),X(this,t,mt,dt,a,{status:0,error:1})}}function $t(t){let n,r,s;const o=[t[4].props];var a=t[4].component;function c(t){let n={};for(let t=0;t<o.length;t+=1)n=e(n,o[t]);return{props:n}}return a&&(n=new a(c())),{c(){n&&K(n.$$.fragment),r=$()},l(t){n&&Y(n.$$.fragment,t),r=$()},m(t,e){n&&Z(n,t,e),f(t,r,e),s=!0},p(t,e){const s=16&e?B(o,[J(t[4].props)]):{};if(a!==(a=t[4].component)){if(n){F();const t=n;z(t.$$.fragment,1,0,(()=>{G(t,1)})),M()}a?(n=new a(c()),K(n.$$.fragment),V(n.$$.fragment,1),Z(n,r.parentNode,r)):n=null}else a&&n.$set(s)},i(t){s||(n&&V(n.$$.fragment,t),s=!0)},o(t){n&&z(n.$$.fragment,t),s=!1},d(t){t&&p(r),n&&G(n,t)}}}function bt(t){let e,n;return e=new gt({props:{error:t[0],status:t[1]}}),{c(){K(e.$$.fragment)},l(t){Y(e.$$.fragment,t)},m(t,r){Z(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i(t){n||(V(e.$$.fragment,t),n=!0)},o(t){z(e.$$.fragment,t),n=!1},d(t){G(e,t)}}}function vt(t){let e,n,r,s;const o=[bt,$t],a=[];function c(t,e){return t[0]?0:1}return e=c(t),n=a[e]=o[e](t),{c(){n.c(),r=$()},l(t){n.l(t),r=$()},m(t,n){a[e].m(t,n),f(t,r,n),s=!0},p(t,s){let l=e;e=c(t),e===l?a[e].p(t,s):(F(),z(a[l],1,1,(()=>{a[l]=null})),M(),n=a[e],n||(n=a[e]=o[e](t),n.c()),V(n,1),n.m(r.parentNode,r))},i(t){s||(V(n),s=!0)},o(t){z(n),s=!1},d(t){a[e].d(t),t&&p(r)}}}function yt(t){let n,r;const s=[{segment:t[2][0]},t[3].props];let o={$$slots:{default:[vt]},$$scope:{ctx:t}};for(let t=0;t<s.length;t+=1)o=e(o,s[t]);return n=new pt({props:o}),{c(){K(n.$$.fragment)},l(t){Y(n.$$.fragment,t)},m(t,e){Z(n,t,e),r=!0},p(t,[e]){const r=12&e?B(s,[4&e&&{segment:t[2][0]},8&e&&J(t[3].props)]):{};147&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(V(n.$$.fragment,t),r=!0)},o(t){z(n.$$.fragment,t),r=!1},d(t){G(n,t)}}}function Et(t,e,n){let{stores:r}=e,{error:s}=e,{status:o}=e,{segments:a}=e,{level0:c}=e,{level1:l=null}=e,{notify:i}=e;var u,f,p;return u=i,P().$$.after_update.push(u),f=nt,p=r,P().$$.context.set(f,p),t.$$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,s=t.error),"status"in t&&n(1,o=t.status),"segments"in t&&n(2,a=t.segments),"level0"in t&&n(3,c=t.level0),"level1"in t&&n(4,l=t.level1),"notify"in t&&n(6,i=t.notify)},[s,o,a,c,l,r,i]}class _t extends Q{constructor(t){super(),X(this,t,Et,yt,a,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const wt=[/^\/posts\.json$/,/^\/posts\/content\/memoization\/?$/,/^\/posts\/content\/fresh-coat\/?$/,/^\/posts\/content\/omnibox\/?$/,/^\/posts\/content\/support\/?$/,/^\/posts\/([^\/]+?)\.json$/],St=[{js:()=>import("./index.b76ec580.js"),css:[]},{js:()=>import("./about.9bdcceda.js"),css:[]},{js:()=>import("./index.bcdbb46e.js"),css:[]},{js:()=>import("./[slug].931cbeab.js"),css:[]}],xt=(At=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/about\/?$/,parts:[{i:1}]},{pattern:/^\/posts\/?$/,parts:[{i:2}]},{pattern:/^\/posts\/([^\/]+?)\/?$/,parts:[null,{i:3,params:t=>({slug:At(t[1])})}]}]);var At;const Pt="undefined"!=typeof __SAPPER__&&__SAPPER__;let Rt,jt,kt,qt=!1,Ct=[],Lt="{}";const Nt={page:function(t){const e=et(t);let n=!0;return{notify:function(){n=!0,e.update((t=>t))},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe((e=>{(void 0===r||n&&e!==r)&&t(r=e)}))}}}({}),preloading:et(null),session:et(Pt&&Pt.session)};let Ot,Ut;Nt.session.subscribe((async t=>{if(Ot=t,!qt)return;Ut=!0;const e=zt(new URL(location.href)),n=jt={},{redirect:r,props:s,branch:o}=await Yt(e);n===jt&&await Kt(r,o,s,e.page)}));let Ht,Dt=null;let Tt,It=1;const Ft="undefined"!=typeof history?history:{pushState:(t,e,n)=>{},replaceState:(t,e,n)=>{},scrollRestoration:""},Mt={};function Vt(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach((t=>{let[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r})),e}function zt(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(Pt.baseUrl))return null;let e=t.pathname.slice(Pt.baseUrl.length);if(""===e&&(e="/"),!wt.some((t=>t.test(e))))for(let n=0;n<xt.length;n+=1){const r=xt[n],s=r.pattern.exec(e);if(s){const n=Vt(t.search),o=r.parts[r.parts.length-1],a=o.params?o.params(s):{},c={host:location.host,path:e,query:n,params:a};return{href:t.href,route:r,match:s,page:c}}}}function Bt(){return{x:pageXOffset,y:pageYOffset}}async function Jt(t,e,n,r){if(e)Tt=e;else{const t=Bt();Mt[Tt]=t,e=Tt=++It,Mt[Tt]=n?t:{x:0,y:0}}Tt=e,Rt&&Nt.preloading.set(!0);const s=Dt&&Dt.href===t.href?Dt.promise:Yt(t);Dt=null;const o=jt={},{redirect:a,props:c,branch:l}=await s;if(o===jt&&(await Kt(a,l,c,t.page),document.activeElement&&document.activeElement.blur(),!n)){let t=Mt[e];if(r){const e=document.getElementById(r.slice(1));e&&(t={x:0,y:e.getBoundingClientRect().top+scrollY})}Mt[Tt]=t,t&&scrollTo(t.x,t.y)}}async function Kt(t,e,n,r){if(t)return function(t,e={replaceState:!1}){const n=zt(new URL(t,document.baseURI));return n?(Ft[e.replaceState?"replaceState":"pushState"]({id:Tt},"",t),Jt(n,null).then((()=>{}))):(location.href=t,new Promise((t=>{})))}(t.location,{replaceState:!0});if(Nt.page.set(r),Nt.preloading.set(!1),Rt)Rt.$set(n);else{n.stores={page:{subscribe:Nt.page.subscribe},preloading:{subscribe:Nt.preloading.subscribe},session:Nt.session},n.level0={props:await kt},n.notify=Nt.page.notify;const t=document.querySelector("#sapper-head-start"),e=document.querySelector("#sapper-head-end");if(t&&e){for(;t.nextSibling!==e;)Gt(t.nextSibling);Gt(t),Gt(e)}Rt=new _t({target:Ht,props:n,hydrate:!0})}Ct=e,Lt=JSON.stringify(r.query),qt=!0,Ut=!1}async function Yt(t){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let s=null;const o={error:null,status:200,segments:[r[0]]},a={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(s&&(s.statusCode!==t||s.location!==e))throw new Error("Conflicting redirects");s={statusCode:t,location:e}},error:(t,e)=>{o.error="string"==typeof e?new Error(e):e,o.status=t}};let c;kt||(kt=Pt.preloaded[0]||rt.call(a,{host:n.host,path:n.path,query:n.query,params:{}},Ot));let l=1;try{const s=JSON.stringify(n.query),i=e.pattern.exec(n.path);let u=!1;c=await Promise.all(e.parts.map((async(e,c)=>{const f=r[c];if(function(t,e,n,r){if(r!==Lt)return!0;const s=Ct[t];return!!s&&(e!==s.segment||!(!s.match||JSON.stringify(s.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(c,f,i,s)&&(u=!0),o.segments[l]=r[c+1],!e)return{segment:f};const p=l++;if(!Ut&&!u&&Ct[c]&&Ct[c].part===e.i)return Ct[c];u=!1;const{default:h,preload:d}=await function(t){const e="string"==typeof t.css?[]:t.css.map(Zt);return e.unshift(t.js()),Promise.all(e).then((t=>t[0]))}(St[e.i]);let m;return m=qt||!Pt.preloaded[c+1]?d?await d.call(a,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Ot):{}:Pt.preloaded[c+1],o["level"+p]={component:h,props:m,segment:f,match:i,part:e.i}})))}catch(t){o.error=t,o.status=500,c=[]}return{redirect:s,props:o,branch:c}}function Zt(t){const e="client/"+t;if(!document.querySelector(`link[href="${e}"]`))return new Promise(((t,n)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onload=()=>t(),r.onerror=n,document.head.appendChild(r)}))}function Gt(t){t.parentNode.removeChild(t)}function Wt(t){const e=zt(new URL(t,document.baseURI));if(e)return Dt&&t===Dt.href||function(t,e){Dt={href:t,promise:e}}(t,Yt(e)),Dt.promise}let Xt;function Qt(t){clearTimeout(Xt),Xt=setTimeout((()=>{te(t)}),20)}function te(t){const e=ne(t.target);e&&"prefetch"===e.rel&&Wt(e.href)}function ee(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey)return;if(t.defaultPrevented)return;const e=ne(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const s=new URL(r);if(s.pathname===location.pathname&&s.search===location.search)return;const o=zt(s);if(o){Jt(o,null,e.hasAttribute("sapper-noscroll"),s.hash),t.preventDefault(),Ft.pushState({id:Tt},"",s.href)}}function ne(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function re(t){if(Mt[Tt]=Bt(),t.state){const e=zt(new URL(location.href));e?Jt(e,t.state.id):location.href=location.href}else It=It+1,function(t){Tt=t}(It),Ft.replaceState({id:Tt},"",location.href)}var se;se={target:document.querySelector("#sapper")},"scrollRestoration"in Ft&&(Ft.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{Ft.scrollRestoration="auto"})),addEventListener("load",(()=>{Ft.scrollRestoration="manual"})),function(t){Ht=t}(se.target),addEventListener("click",ee),addEventListener("popstate",re),addEventListener("touchstart",te),addEventListener("mousemove",Qt),Promise.resolve().then((()=>{const{hash:t,href:e}=location;Ft.replaceState({id:It},"",e);const n=new URL(location.href);if(Pt.error)return function(t){const{host:e,pathname:n,search:r}=location,{session:s,preloaded:o,status:a,error:c}=Pt;kt||(kt=o&&o[0]),Kt(null,[],{error:c,status:a,session:s,level0:{props:kt},level1:{props:{status:a,error:c},component:gt},segments:o},{host:e,path:n,query:Vt(r),params:{}})}();const r=zt(n);return r?Jt(r,It,!0,t):void 0}));export{Q as S,g as a,v as b,y as c,p as d,d as e,_ as f,E as g,b as h,X as i,u as j,f as k,w as l,h as m,t as n,S as q,a as s,m as t};
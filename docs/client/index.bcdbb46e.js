import{S as s,i as t,s as e,e as a,t as r,a as o,c as l,b as n,g as c,d as h,f,h as i,k as p,j as u,l as v,q as d,n as g,m}from"./client.78f8f765.js";function E(s,t,e){const a=s.slice();return a[1]=t[e],a[3]=e,a}function x(s){let t,e,d,g,m,E,x,D,P,j,I,V,q,A,H=s[1].title+"",S=s[1].excerpt+"",$=s[1].printDate+"";return{c(){t=a("div"),e=a("h2"),d=a("a"),g=r(H),E=o(),x=a("p"),D=r(S),P=o(),j=a("div"),I=a("span"),V=r("— "),q=r($),A=o(),this.h()},l(s){t=l(s,"DIV",{class:!0});var a=n(t);e=l(a,"H2",{class:!0});var r=n(e);d=l(r,"A",{rel:!0,href:!0});var o=n(d);g=c(o,H),o.forEach(h),r.forEach(h),E=f(a),x=l(a,"P",{});var i=n(x);D=c(i,S),i.forEach(h),P=f(a),j=l(a,"DIV",{class:!0});var p=n(j);I=l(p,"SPAN",{class:!0});var u=n(I);V=c(u,"— "),q=c(u,$),u.forEach(h),p.forEach(h),A=f(a),a.forEach(h),this.h()},h(){i(d,"rel","prefetch"),i(d,"href",m="posts/"+s[1].slug),i(e,"class","post-item-title svelte-1rogf07"),i(I,"class","post-item-date svelte-1rogf07"),i(j,"class","post-item-footer svelte-1rogf07"),i(t,"class","post-item")},m(s,a){p(s,t,a),u(t,e),u(e,d),u(d,g),u(t,E),u(t,x),u(x,D),u(t,P),u(t,j),u(j,I),u(I,V),u(I,q),u(t,A)},p(s,t){1&t&&H!==(H=s[1].title+"")&&v(g,H),1&t&&m!==(m="posts/"+s[1].slug)&&i(d,"href",m),1&t&&S!==(S=s[1].excerpt+"")&&v(D,S),1&t&&$!==($=s[1].printDate+"")&&v(q,$)},d(s){s&&h(t)}}}function D(s){let t,e,v,D,P,j=s[0],I=[];for(let t=0;t<j.length;t+=1)I[t]=x(E(s,j,t));return{c(){t=o(),e=a("div"),v=a("h1"),D=r("Posts"),P=o();for(let s=0;s<I.length;s+=1)I[s].c();this.h()},l(s){d('[data-svelte="svelte-rnw242"]',document.head).forEach(h),t=f(s),e=l(s,"DIV",{class:!0});var a=n(e);v=l(a,"H1",{});var r=n(v);D=c(r,"Posts"),r.forEach(h),P=f(a);for(let s=0;s<I.length;s+=1)I[s].l(a);a.forEach(h),this.h()},h(){document.title="Posts",i(e,"class","container")},m(s,a){p(s,t,a),p(s,e,a),u(e,v),u(v,D),u(e,P);for(let s=0;s<I.length;s+=1)I[s].m(e,null)},p(s,[t]){if(1&t){let a;for(j=s[0],a=0;a<j.length;a+=1){const r=E(s,j,a);I[a]?I[a].p(r,t):(I[a]=x(r),I[a].c(),I[a].m(e,null))}for(;a<I.length;a+=1)I[a].d(1);I.length=j.length}},i:g,o:g,d(s){s&&h(t),s&&h(e),m(I,s)}}}function P({params:s,query:t}){return this.fetch("posts.json").then((s=>s.json())).then((s=>({posts:s})))}function j(s,t,e){let{posts:a}=t;return s.$$set=s=>{"posts"in s&&e(0,a=s.posts)},[a]}export default class extends s{constructor(s){super(),t(this,s,j,D,e,{posts:0})}}export{P as preload};
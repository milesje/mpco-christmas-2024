import{s as S,n as _,c as x}from"../chunks/scheduler.D7iYDQ84.js";import{S as j,i as q,e as f,t as d,s as y,c as g,a as h,b as v,d as u,f as C,g as m,h as $,j as E}from"../chunks/index.Dt5xAkeP.js";import{s as H}from"../chunks/entry.fiOU-ox3.js";const P=()=>{const s=H;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},k={subscribe(s){return P().page.subscribe(s)}};function w(s){var b;let t,r=s[0].status+"",o,n,i,c=((b=s[0].error)==null?void 0:b.message)+"",l;return{c(){t=f("h1"),o=d(r),n=y(),i=f("p"),l=d(c)},l(e){t=g(e,"H1",{});var a=h(t);o=v(a,r),a.forEach(u),n=C(e),i=g(e,"P",{});var p=h(i);l=v(p,c),p.forEach(u)},m(e,a){m(e,t,a),$(t,o),m(e,n,a),m(e,i,a),$(i,l)},p(e,[a]){var p;a&1&&r!==(r=e[0].status+"")&&E(o,r),a&1&&c!==(c=((p=e[0].error)==null?void 0:p.message)+"")&&E(l,c)},i:_,o:_,d(e){e&&(u(t),u(n),u(i))}}}function z(s,t,r){let o;return x(s,k,n=>r(0,o=n)),[o]}let F=class extends j{constructor(t){super(),q(this,t,z,w,S,{})}};export{F as component};

import{s as me,f as C,a as M,l as le,g as E,h as D,c as P,d,m as oe,j as k,i as q,K as p,p as he,M as de,n as Z,e as se,I as _e}from"../chunks/scheduler.7a274a43.js";import{S as ue,i as pe,b as I,d as V,m as y,a as _,t as w,e as L,g as re,c as ne}from"../chunks/index.28409b7f.js";import{e as O,U as X,u as ve,o as we}from"../chunks/UIcon.9faa29d6.js";import{c as be,d as ae,g as Q,e as xe}from"../chunks/params.717c81b1.js";import{C as ke}from"../chunks/Card.4c057ae7.js";import{C as Ce}from"../chunks/CardLogo.ffd18bf4.js";import{C as Ee,a as J}from"../chunks/ChipIcon.71198bf5.js";import{b as W}from"../chunks/paths.f0ceffa7.js";import{S as De}from"../chunks/SearchPage.2d12fb2a.js";import{i as Ie}from"../chunks/index.97b3c5e0.js";function ie(s,t,r){const e=s.slice();return e[5]=t[r],e}function Ve(s){let t,r;return t=new X({props:{icon:"i-carbon-building"}}),{c(){I(t.$$.fragment)},l(e){V(t.$$.fragment,e)},m(e,n){y(t,e,n),r=!0},p:Z,i(e){r||(_(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){L(t,e)}}}function ye(s){let t,r;return t=new X({props:{icon:"i-carbon-location"}}),{c(){I(t.$$.fragment)},l(e){V(t.$$.fragment,e)},m(e,n){y(t,e,n),r=!0},p:Z,i(e){r||(_(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){L(t,e)}}}function Le(s){let t,r;return t=new X({props:{icon:"i-carbon-hourglass"}}),{c(){I(t.$$.fragment)},l(e){V(t.$$.fragment,e)},m(e,n){y(t,e,n),r=!0},p:Z,i(e){r||(_(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){L(t,e)}}}function ce(s){let t,r;return t=new J({props:{logo:Q(s[5].logo),name:s[5].name,href:`${W}/skills/${s[5].slug}`}}),{c(){I(t.$$.fragment)},l(e){V(t.$$.fragment,e)},m(e,n){y(t,e,n),r=!0},p(e,n){const a={};n&1&&(a.logo=Q(e[5].logo)),n&1&&(a.name=e[5].name),n&1&&(a.href=`${W}/skills/${e[5].slug}`),t.$set(a)},i(e){r||(_(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){L(t,e)}}}function Se(s){let t,r,e,n,a,c,$,o,l,f,h,B,g,x,S,F,ee,R,A=s[0].shortDescription+"",G,te,N,H;r=new Ce({props:{src:Q(s[0].logo),alt:s[0].company,size:75}}),c=new Ee({props:{title:s[0].name}}),l=new J({props:{name:`Company: ${s[0].company}`,$$slots:{default:[Ve]},$$scope:{ctx:s}}}),h=new J({props:{name:`Location: ${s[0].location}`,$$slots:{default:[ye]},$$scope:{ctx:s}}}),g=new J({props:{name:`Contract: ${s[0].contract}`,$$slots:{default:[Le]},$$scope:{ctx:s}}});let U=O(s[0].skills),u=[];for(let i=0;i<U.length;i+=1)u[i]=ce(ie(s,U,i));const ge=i=>w(u[i],1,1,()=>{u[i]=null});return{c(){t=C("div"),I(r.$$.fragment),e=M(),n=C("div"),a=C("h3"),I(c.$$.fragment),$=M(),o=C("div"),I(l.$$.fragment),f=M(),I(h.$$.fragment),B=M(),I(g.$$.fragment),x=M(),S=C("div"),F=le(s[1]),ee=M(),R=C("div"),G=le(A),te=M(),N=C("div");for(let i=0;i<u.length;i+=1)u[i].c();this.h()},l(i){t=E(i,"DIV",{class:!0});var m=D(t);V(r.$$.fragment,m),e=P(m),n=E(m,"DIV",{class:!0});var v=D(n);a=E(v,"H3",{class:!0});var K=D(a);V(c.$$.fragment,K),K.forEach(d),$=P(v),o=E(v,"DIV",{class:!0});var j=D(o);V(l.$$.fragment,j),f=P(j),V(h.$$.fragment,j),B=P(j),V(g.$$.fragment,j),j.forEach(d),x=P(v),S=E(v,"DIV",{class:!0});var T=D(S);F=oe(T,s[1]),T.forEach(d),ee=P(v),R=E(v,"DIV",{class:!0});var Y=D(R);G=oe(Y,A),Y.forEach(d),te=P(v),N=E(v,"DIV",{class:!0});var b=D(N);for(let z=0;z<u.length;z+=1)u[z].l(b);b.forEach(d),v.forEach(d),m.forEach(d),this.h()},h(){k(a,"class","flex text-[0.9em] flex-col items-start sm:flex-row sm:items-center justify-between sm:gap-5 md:flex-col md:items-start md:gap-0 lg:flex-row lg:items-center"),k(o,"class","row flex-wrap m-b-2 gap-1 text-0.9em font-300"),k(S,"class","text-[var(--accent-text)] text-[0.9em] font-200"),k(R,"class","experience-description"),k(N,"class","flex flex-row flex-wrap mt-5"),k(n,"class","col ml-0 md:ml-[20px] gap-3 w-full"),k(t,"class","col md:flex-row items-start gap-5 md:gap-1")},m(i,m){q(i,t,m),y(r,t,null),p(t,e),p(t,n),p(n,a),y(c,a,null),p(n,$),p(n,o),y(l,o,null),p(o,f),y(h,o,null),p(o,B),y(g,o,null),p(n,x),p(n,S),p(S,F),p(n,ee),p(n,R),p(R,G),p(n,te),p(n,N);for(let v=0;v<u.length;v+=1)u[v]&&u[v].m(N,null);H=!0},p(i,m){const v={};m&1&&(v.src=Q(i[0].logo)),m&1&&(v.alt=i[0].company),r.$set(v);const K={};m&1&&(K.title=i[0].name),c.$set(K);const j={};m&1&&(j.name=`Company: ${i[0].company}`),m&256&&(j.$$scope={dirty:m,ctx:i}),l.$set(j);const T={};m&1&&(T.name=`Location: ${i[0].location}`),m&256&&(T.$$scope={dirty:m,ctx:i}),h.$set(T);const Y={};if(m&1&&(Y.name=`Contract: ${i[0].contract}`),m&256&&(Y.$$scope={dirty:m,ctx:i}),g.$set(Y),(!H||m&1)&&A!==(A=i[0].shortDescription+"")&&he(G,A),m&1){U=O(i[0].skills);let b;for(b=0;b<U.length;b+=1){const z=ie(i,U,b);u[b]?(u[b].p(z,m),_(u[b],1)):(u[b]=ce(z),u[b].c(),_(u[b],1),u[b].m(N,null))}for(re(),b=U.length;b<u.length;b+=1)ge(b);ne()}},i(i){if(!H){_(r.$$.fragment,i),_(c.$$.fragment,i),_(l.$$.fragment,i),_(h.$$.fragment,i),_(g.$$.fragment,i);for(let m=0;m<U.length;m+=1)_(u[m]);H=!0}},o(i){w(r.$$.fragment,i),w(c.$$.fragment,i),w(l.$$.fragment,i),w(h.$$.fragment,i),w(g.$$.fragment,i),u=u.filter(Boolean);for(let m=0;m<u.length;m+=1)w(u[m]);H=!1},d(i){i&&d(t),L(r),L(c),L(l),L(h),L(g),de(u,i)}}}function Me(s){let t,r;return t=new ke({props:{margin:"0px 0px 20px 0px",tiltDegree:2,href:`${W}/experience/${s[0].slug}`,color:s[0].color,$$slots:{default:[Se]},$$scope:{ctx:s}}}),{c(){I(t.$$.fragment)},l(e){V(t.$$.fragment,e)},m(e,n){y(t,e,n),r=!0},p(e,[n]){const a={};n&1&&(a.href=`${W}/experience/${e[0].slug}`),n&1&&(a.color=e[0].color),n&257&&(a.$$scope={dirty:n,ctx:e}),t.$set(a)},i(e){r||(_(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){L(t,e)}}}function Pe(s,t,r){let{experience:e}=t;const n=be(e.period.from,e.period.to),a=`${ae(e.period.from.getMonth())} ${e.period.from.getFullYear()}`,c=e.period.to?`${ae(e.period.to.getMonth())} ${e.period.to.getFullYear()}`:"Present",$=`${a} - ${c} · ${n}`;return s.$$set=o=>{"experience"in o&&r(0,e=o.experience)},[e,$]}class je extends ue{constructor(t){super(),pe(this,t,Pe,Me,me,{experience:0})}}function fe(s,t,r){const e=s.slice();return e[4]=t[r],e[6]=r,e}function Be(s){let t,r,e=[],n=new Map,a,c,$=O(s[0]);const o=l=>l[4].slug;for(let l=0;l<$.length;l+=1){let f=fe(s,$,l),h=o(f);n.set(h,e[l]=$e(h,f))}return{c(){t=C("div"),r=M();for(let l=0;l<e.length;l+=1)e[l].c();a=se(),this.h()},l(l){t=E(l,"DIV",{class:!0}),D(t).forEach(d),r=P(l);for(let f=0;f<e.length;f+=1)e[f].l(l);a=se(),this.h()},h(){k(t,"class","w-[0.5px] hidden lg:flex top-0 bottom-0 py-50px bg-[var(--border)] absolute rounded")},m(l,f){q(l,t,f),q(l,r,f);for(let h=0;h<e.length;h+=1)e[h]&&e[h].m(l,f);q(l,a,f),c=!0},p(l,f){f&1&&($=O(l[0]),re(),e=ve(e,f,o,1,l,$,n,a.parentNode,we,$e,a,fe),ne())},i(l){if(!c){for(let f=0;f<$.length;f+=1)_(e[f]);c=!0}},o(l){for(let f=0;f<e.length;f+=1)w(e[f]);c=!1},d(l){l&&(d(t),d(r),d(a));for(let f=0;f<e.length;f+=1)e[f].d(l)}}}function Ne(s){let t,r,e,n,a="Could not find anything...",c;return r=new X({props:{icon:"i-carbon-development",classes:"text-3.5em"}}),{c(){t=C("div"),I(r.$$.fragment),e=M(),n=C("p"),n.textContent=a,this.h()},l($){t=E($,"DIV",{class:!0});var o=D(t);V(r.$$.fragment,o),e=P(o),n=E(o,"P",{class:!0,["data-svelte-h"]:!0}),_e(n)!=="svelte-1jyyf6v"&&(n.textContent=a),o.forEach(d),this.h()},h(){k(n,"class","font-300"),k(t,"class","p-5 col-center gap-3 m-y-auto text-[var(--accent-text)] flex-1")},m($,o){q($,t,o),y(r,t,null),p(t,e),p(t,n),c=!0},p:Z,i($){c||(_(r.$$.fragment,$),c=!0)},o($){w(r.$$.fragment,$),c=!1},d($){$&&d(t),L(r)}}}function $e(s,t){let r,e,n,a,c,$,o,l,f,h,B;return c=new X({props:{icon:"i-carbon-condition-point",classes:""}}),l=new je({props:{experience:t[4]}}),{key:s,first:null,c(){r=C("div"),e=C("div"),n=M(),a=C("div"),I(c.$$.fragment),$=M(),o=C("div"),I(l.$$.fragment),f=M(),this.h()},l(g){r=E(g,"DIV",{class:!0});var x=D(r);e=E(x,"DIV",{class:!0}),D(e).forEach(d),n=P(x),a=E(x,"DIV",{class:!0});var S=D(a);V(c.$$.fragment,S),S.forEach(d),$=P(x),o=E(x,"DIV",{class:!0});var F=D(o);V(l.$$.fragment,F),F.forEach(d),f=P(x),x.forEach(d),this.h()},h(){k(e,"class","flex-1 hidden lg:flex"),k(a,"class","hidden lg:inline p-15px bg-[var(--main)] rounded"),k(o,"class","flex-1 col items-stretch"),k(r,"class",h=`flex ${t[6]%2!==0?"flex-row":"flex-row-reverse"} relative items-center w-full my-[10px]`),this.first=r},m(g,x){q(g,r,x),p(r,e),p(r,n),p(r,a),y(c,a,null),p(r,$),p(r,o),y(l,o,null),p(r,f),B=!0},p(g,x){t=g;const S={};x&1&&(S.experience=t[4]),l.$set(S),(!B||x&1&&h!==(h=`flex ${t[6]%2!==0?"flex-row":"flex-row-reverse"} relative items-center w-full my-[10px]`))&&k(r,"class",h)},i(g){B||(_(c.$$.fragment,g),_(l.$$.fragment,g),B=!0)},o(g){w(c.$$.fragment,g),w(l.$$.fragment,g),B=!1},d(g){g&&d(r),L(c),L(l)}}}function Ue(s){let t,r,e,n;const a=[Ne,Be],c=[];function $(o,l){return o[0].length===0?0:1}return r=$(s),e=c[r]=a[r](s),{c(){t=C("div"),e.c(),this.h()},l(o){t=E(o,"DIV",{class:!0});var l=D(t);e.l(l),l.forEach(d),this.h()},h(){k(t,"class","col items-center relative mt-10 flex-1")},m(o,l){q(o,t,l),c[r].m(t,null),n=!0},p(o,l){let f=r;r=$(o),r===f?c[r].p(o,l):(re(),w(c[f],1,1,()=>{c[f]=null}),ne(),e=c[r],e?e.p(o,l):(e=c[r]=a[r](o),e.c()),_(e,1),e.m(t,null))},i(o){n||(_(e),n=!0)},o(o){w(e),n=!1},d(o){o&&d(t),c[r].d()}}}function qe(s){let t,r;return t=new De({props:{title:s[1],$$slots:{default:[Ue]},$$scope:{ctx:s}}}),t.$on("search",s[2]),{c(){I(t.$$.fragment)},l(e){V(t.$$.fragment,e)},m(e,n){y(t,e,n),r=!0},p(e,[n]){const a={};n&129&&(a.$$scope={dirty:n,ctx:e}),t.$set(a)},i(e){r||(_(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){L(t,e)}}}function Fe(s,t,r){const{items:e,title:n}=xe;let a=[...e];return[a,n,$=>{const o=$.detail.search;if(Ie(o)){r(0,a=e);return}r(0,a=e.filter(l=>l.name.toLowerCase().includes(o)||l.company.toLowerCase().includes(o)||l.description.toLowerCase().includes(o)))}]}class Oe extends ue{constructor(t){super(),pe(this,t,Fe,qe,me,{})}}export{Oe as component};

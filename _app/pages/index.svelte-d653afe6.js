import{C as ae,S as X,i as Y,s as Z,e as u,t as A,k as O,c as f,a as _,g as P,d as n,n as S,b as v,f as B,H as l,J as $e,K as x,I as z,L as Oe,M as F,N as Q,O as ye,P as le,h as re,Q as _e,R as ke,j as ne,m as ie,o as oe,x as ce,u as de,v as ue,T as Se,U as ee,A as Ae,V as Pe}from"../chunks/vendor-71b8c924.js";import{b as pe}from"../chunks/paths-28a87002.js";const fe="nyu-dss/viewpoint",Ve="embeddable iiif viewers from uri params with svelte-kit",me=["https://gallica.bnf.fr/iiif/ark:/12148/btv1b90266728/manifest.json","https://iiif.lib.harvard.edu/manifests/drs:4184689","https://iiif.bodleian.ox.ac.uk/iiif/manifest/e32a277e-91e2-4a6d-8ba6-cc4bad230410.json","https://sites.dlib.nyu.edu/viewer/api/presentation/photos/tamwag_tam630_cuid34887/manifest.json","https://www.e-codices.unifr.ch/metadata/iiif/bc-s-0007/manifest.json","https://www.e-codices.unifr.ch/metadata/iiif/bc-s-0058/manifest.json","https://www.e-codices.unifr.ch/metadata/iiif/snm-AG002760/manifest.json","https://www.e-codices.unifr.ch/metadata/iiif/hmtg-T09393/manifest.json","https://gallica.bnf.fr/iiif/ark:/12148/btv1b53212522c/manifest.json","https://gallica.bnf.fr/iiif/ark:/12148/btv1b8400342f/manifest.json","https://gallica.bnf.fr/iiif/ark:/12148/btv1b84006642/manifest.json","https://gallica.bnf.fr/iiif/ark:/12148/btv1b8490923n/manifest.json","https://cmoa-records-images.s3.amazonaws.com/fv001_001_006_002_B008_002/manifest.json","https://cmoa-records-images.s3.amazonaws.com/fv001_001_003_001_B003_F02_007/manifest.json"],qe="URI input",be=[{id:"mirador",label:"Mirador",options:[{id:"theme",label:"Theme",values:["Light","Dark"]},{id:"view",label:"View style",values:["Single","Book","Gallery"]},{id:"thumbs",label:"Thumbnail view",values:["Off","Right","Bottom"]},{id:"sidebar",label:"Show sidebar by default",values:["False","True"]}]}],Me="11/18/21 @ 11:49 EST",K=ae(),he=ae(),ge=ae(""),te=ae({});function Ue(a){let e,s,t,o,r,i,h,m,$,k,I,D,T,w,L,g,b,E,p,c,y,d;return{c(){e=u("article"),s=u("p"),t=A("IIIF Manifest"),o=O(),r=u("p"),i=A("Input your own URI or use a random example."),h=O(),m=u("div"),$=u("div"),k=u("div"),I=u("input"),D=O(),T=u("div"),w=u("div"),L=u("div"),g=u("button"),b=A("Clear"),E=O(),p=u("button"),c=A("Random"),this.h()},l(j){e=f(j,"ARTICLE",{class:!0});var C=_(e);s=f(C,"P",{class:!0});var q=_(s);t=P(q,"IIIF Manifest"),q.forEach(n),o=S(C),r=f(C,"P",{class:!0});var M=_(r);i=P(M,"Input your own URI or use a random example."),M.forEach(n),h=S(C),m=f(C,"DIV",{class:!0});var V=_(m);$=f(V,"DIV",{class:!0});var R=_($);k=f(R,"DIV",{class:!0});var U=_(k);I=f(U,"INPUT",{class:!0,type:!0,placeholder:!0}),U.forEach(n),R.forEach(n),V.forEach(n),D=S(C),T=f(C,"DIV",{class:!0});var H=_(T);w=f(H,"DIV",{class:!0});var N=_(w);L=f(N,"DIV",{class:!0});var G=_(L);g=f(G,"BUTTON",{class:!0});var J=_(g);b=P(J,"Clear"),J.forEach(n),E=S(G),p=f(G,"BUTTON",{class:!0});var W=_(p);c=P(W,"Random"),W.forEach(n),G.forEach(n),N.forEach(n),H.forEach(n),C.forEach(n),this.h()},h(){v(s,"class","panel-heading"),v(r,"class","pl-4 is-7"),v(I,"class","input"),v(I,"type","text"),v(I,"placeholder",qe),v(k,"class","control"),v($,"class","field"),v(m,"class","panel-block"),v(g,"class","button is-link"),v(p,"class","button is-link"),v(L,"class","control pt-3 pb-5"),v(w,"class","field"),v(T,"class","panel-block"),v(e,"class","panel is-info")},m(j,C){B(j,e,C),l(e,s),l(s,t),l(e,o),l(e,r),l(r,i),l(e,h),l(e,m),l(m,$),l($,k),l(k,I),$e(I,a[0]),l(e,D),l(e,T),l(T,w),l(w,L),l(L,g),l(g,b),l(L,E),l(L,p),l(p,c),y||(d=[x(I,"input",a[3]),x(g,"click",a[1]),x(p,"click",a[2])],y=!0)},p(j,[C]){C&1&&I.value!==j[0]&&$e(I,j[0])},i:z,o:z,d(j){j&&n(e),y=!1,Oe(d)}}}function Be(a,e,s){let t,o;F(a,K,m=>s(0,t=m)),F(a,te,m=>s(4,o=m));function r(){Q(K,t="",t)}function i(){for(;;){let m=Math.floor(Math.random()*me.length),$=me[m];if($!==K){Q(K,t=$,t);break}}}function h(){t=this.value,K.set(t)}return a.$$.update=()=>{a.$$.dirty&1&&Q(te,o.manifest=t,o)},[t,r,i,h]}class Ne extends X{constructor(e){super();Y(this,e,Be,Ue,Z,{})}}function De(a,e,s){const t=a.slice();return t[4]=e[s],t[5]=e,t[6]=s,t}function Te(a,e,s){const t=a.slice();return t[7]=e[s],t}function je(a,e,s){const t=a.slice();return t[10]=e[s],t}function Ce(a){let e,s=a[10].label+"",t,o;return{c(){e=u("option"),t=A(s),this.h()},l(r){e=f(r,"OPTION",{});var i=_(e);t=P(i,s),i.forEach(n),this.h()},h(){e.__value=o=a[10],e.value=e.__value},m(r,i){B(r,e,i),l(e,t)},p:z,d(r){r&&n(e)}}}function Le(a){let e,s=a[7]+"",t,o;return{c(){e=u("option"),t=A(s),this.h()},l(r){e=f(r,"OPTION",{});var i=_(e);t=P(i,s),i.forEach(n),this.h()},h(){e.__value=o=a[7].toLowerCase(),e.value=e.__value},m(r,i){B(r,e,i),l(e,t)},p(r,i){i&1&&s!==(s=r[7]+"")&&re(t,s),i&1&&o!==(o=r[7].toLowerCase())&&(e.__value=o,e.value=e.__value)},d(r){r&&n(e)}}}function Re(a){let e,s,t,o=a[4].label+"",r,i,h,m,$,k,I,D,T=a[4].values,w=[];for(let g=0;g<T.length;g+=1)w[g]=Le(Te(a,T,g));function L(){a[3].call($,a[4])}return{c(){e=u("div"),s=u("div"),t=u("label"),r=A(o),i=O(),h=u("div"),m=u("div"),$=u("select");for(let g=0;g<w.length;g+=1)w[g].c();k=O(),this.h()},l(g){e=f(g,"DIV",{class:!0});var b=_(e);s=f(b,"DIV",{class:!0});var E=_(s);t=f(E,"LABEL",{class:!0});var p=_(t);r=P(p,o),p.forEach(n),i=S(E),h=f(E,"DIV",{class:!0});var c=_(h);m=f(c,"DIV",{class:!0});var y=_(m);$=f(y,"SELECT",{});var d=_($);for(let j=0;j<w.length;j+=1)w[j].l(d);d.forEach(n),y.forEach(n),c.forEach(n),E.forEach(n),k=S(b),b.forEach(n),this.h()},h(){v(t,"class","label"),a[1][a[4].id]===void 0&&ye(L),v(m,"class","select"),v(h,"class","control"),v(s,"class","field"),v(e,"class","panel-block")},m(g,b){B(g,e,b),l(e,s),l(s,t),l(t,r),l(s,i),l(s,h),l(h,m),l(m,$);for(let E=0;E<w.length;E+=1)w[E].m($,null);le($,a[1][a[4].id]),l(e,k),I||(D=x($,"change",L),I=!0)},p(g,b){if(a=g,b&1&&o!==(o=a[4].label+"")&&re(r,o),b&1){T=a[4].values;let E;for(E=0;E<T.length;E+=1){const p=Te(a,T,E);w[E]?w[E].p(p,b):(w[E]=Le(p),w[E].c(),w[E].m($,null))}for(;E<w.length;E+=1)w[E].d(1);w.length=T.length}b&3&&le($,a[1][a[4].id])},d(g){g&&n(e),_e(w,g),I=!1,D()}}}function Fe(a){let e,s,t,o,r,i,h,m,$,k,I,D,T,w,L,g=be,b=[];for(let c=0;c<g.length;c+=1)b[c]=Ce(je(a,g,c));let E=a[0].options,p=[];for(let c=0;c<E.length;c+=1)p[c]=Re(De(a,E,c));return{c(){e=u("article"),s=u("p"),t=A("Viewer Settings"),o=O(),r=u("div"),i=u("div"),h=u("label"),m=A("Viewer"),$=O(),k=u("div"),I=u("div"),D=u("select");for(let c=0;c<b.length;c+=1)b[c].c();T=O();for(let c=0;c<p.length;c+=1)p[c].c();this.h()},l(c){e=f(c,"ARTICLE",{class:!0});var y=_(e);s=f(y,"P",{class:!0});var d=_(s);t=P(d,"Viewer Settings"),d.forEach(n),o=S(y),r=f(y,"DIV",{class:!0});var j=_(r);i=f(j,"DIV",{class:!0});var C=_(i);h=f(C,"LABEL",{class:!0});var q=_(h);m=P(q,"Viewer"),q.forEach(n),$=S(C),k=f(C,"DIV",{class:!0});var M=_(k);I=f(M,"DIV",{class:!0});var V=_(I);D=f(V,"SELECT",{});var R=_(D);for(let U=0;U<b.length;U+=1)b[U].l(R);R.forEach(n),V.forEach(n),M.forEach(n),C.forEach(n),j.forEach(n),T=S(y);for(let U=0;U<p.length;U+=1)p[U].l(y);y.forEach(n),this.h()},h(){v(s,"class","panel-heading"),v(h,"class","label"),a[0]===void 0&&ye(()=>a[2].call(D)),v(I,"class","select"),v(k,"class","control"),v(i,"class","field"),v(r,"class","panel-block"),v(e,"class","panel is-info")},m(c,y){B(c,e,y),l(e,s),l(s,t),l(e,o),l(e,r),l(r,i),l(i,h),l(h,m),l(i,$),l(i,k),l(k,I),l(I,D);for(let d=0;d<b.length;d+=1)b[d].m(D,null);le(D,a[0]),l(e,T);for(let d=0;d<p.length;d+=1)p[d].m(e,null);w||(L=x(D,"change",a[2]),w=!0)},p(c,[y]){if(y&0){g=be;let d;for(d=0;d<g.length;d+=1){const j=je(c,g,d);b[d]?b[d].p(j,y):(b[d]=Ce(j),b[d].c(),b[d].m(D,null))}for(;d<b.length;d+=1)b[d].d(1);b.length=g.length}if(y&1&&le(D,c[0]),y&3){E=c[0].options;let d;for(d=0;d<E.length;d+=1){const j=De(c,E,d);p[d]?p[d].p(j,y):(p[d]=Re(j),p[d].c(),p[d].m(e,null))}for(;d<p.length;d+=1)p[d].d(1);p.length=E.length}},i:z,o:z,d(c){c&&n(e),_e(b,c),_e(p,c),w=!1,L()}}}function He(a,e,s){let t,o;F(a,he,h=>s(0,t=h)),F(a,te,h=>s(1,o=h));function r(){t=ke(this),he.set(t)}function i(h){o[h.id]=ke(this),te.set(o)}return[t,o,r,i]}class ze extends X{constructor(e){super();Y(this,e,He,Fe,Z,{})}}function Ge(a){let e,s,t,o;return e=new Ne({}),t=new ze({}),{c(){ne(e.$$.fragment),s=O(),ne(t.$$.fragment)},l(r){ie(e.$$.fragment,r),s=S(r),ie(t.$$.fragment,r)},m(r,i){oe(e,r,i),B(r,s,i),oe(t,r,i),o=!0},p:z,i(r){o||(ce(e.$$.fragment,r),ce(t.$$.fragment,r),o=!0)},o(r){de(e.$$.fragment,r),de(t.$$.fragment,r),o=!1},d(r){ue(e,r),r&&n(s),ue(t,r)}}}function Ke(a,e,s){let t,o,r,i;return F(a,te,h=>s(0,t=h)),F(a,he,h=>s(1,o=h)),F(a,ge,h=>s(2,r=h)),F(a,K,h=>s(3,i=h)),Q(K,i=me[0],i),Q(he,o=be[0],o),a.$$.update=()=>{a.$$.dirty&3&&Q(ge,r=`${pe}/${o.id}#${Se.stringify(t,{})}`,r)},[t,o]}class Qe extends X{constructor(e){super();Y(this,e,Ke,Ge,Z,{})}}function Je(a){let e,s,t,o,r,i,h,m,$,k,I,D,T,w,L,g,b,E;return{c(){e=u("div"),s=u("div"),t=u("header"),o=u("p"),r=A("Full Screen Link"),i=O(),h=u("div"),m=u("a"),$=A(a[0]),k=O(),I=u("div"),D=u("header"),T=u("p"),w=A("Embed Code"),L=O(),g=u("div"),b=u("p"),E=A(a[1]),this.h()},l(p){e=f(p,"DIV",{id:!0});var c=_(e);s=f(c,"DIV",{class:!0});var y=_(s);t=f(y,"HEADER",{class:!0});var d=_(t);o=f(d,"P",{class:!0});var j=_(o);r=P(j,"Full Screen Link"),j.forEach(n),d.forEach(n),i=S(y),h=f(y,"DIV",{class:!0});var C=_(h);m=f(C,"A",{href:!0,target:!0});var q=_(m);$=P(q,a[0]),q.forEach(n),C.forEach(n),y.forEach(n),k=S(c),I=f(c,"DIV",{class:!0});var M=_(I);D=f(M,"HEADER",{class:!0});var V=_(D);T=f(V,"P",{class:!0});var R=_(T);w=P(R,"Embed Code"),R.forEach(n),V.forEach(n),L=S(M),g=f(M,"DIV",{class:!0});var U=_(g);b=f(U,"P",{style:!0});var H=_(b);E=P(H,a[1]),H.forEach(n),U.forEach(n),M.forEach(n),c.forEach(n),this.h()},h(){v(o,"class","card-header-title"),v(t,"class","card-header"),v(m,"href",a[0]),v(m,"target","_none"),v(h,"class","card-content"),v(s,"class","query-url-container card my-5"),v(T,"class","card-header-title"),v(D,"class","card-header"),ee(b,"width","100%"),ee(b,"word-wrap","break-word"),ee(b,"font-family","monospace"),v(g,"class","card-content embed-code"),v(I,"class","embed-code-container card my-5"),v(e,"id","results-container")},m(p,c){B(p,e,c),l(e,s),l(s,t),l(t,o),l(o,r),l(s,i),l(s,h),l(h,m),l(m,$),l(e,k),l(e,I),l(I,D),l(D,T),l(T,w),l(I,L),l(I,g),l(g,b),l(b,E)},p(p,[c]){c&1&&re($,p[0]),c&1&&v(m,"href",p[0]),c&2&&re(E,p[1])},i:z,o:z,d(p){p&&n(e)}}}function We(a,e,s){let t;F(a,ge,m=>s(3,t=m));let o,r,i="";function h(){if(typeof window!="undefined"){let m=document.getElementById("viewer-iframe"),$=document.getElementById("results-container");m!==null&&m.remove();let k=document.createElement("iframe");k.setAttribute("src",t),k.setAttribute("id","viewer-iframe"),k.style.width="100%",k.style.height="400px",$.prepend(k)}}return Ae(async()=>{s(2,i=window.location.protocol+"//"+window.location.host),h()}),a.$$.update=()=>{a.$$.dirty&12&&s(0,r=i+t),a.$$.dirty&1&&s(1,o=`<iframe src="${r}" height="400"/>`),a.$$.dirty&8&&h()},[r,o,i,t]}class Xe extends X{constructor(e){super();Y(this,e,We,Je,Z,{})}}function Ye(a){let e,s,t,o,r,i,h,m,$,k,I,D,T,w,L,g=Me.toLowerCase()+"",b,E,p,c,y,d,j,C,q,M;return document.title=e=fe,d=new Qe({}),q=new Xe({}),{c(){s=u("link"),t=O(),o=u("section"),r=u("div"),i=u("div"),h=u("h1"),m=u("a"),$=A(fe),k=O(),I=u("p"),D=A(Ve),T=O(),w=u("p"),L=A("last built on "),b=A(g),E=O(),p=u("section"),c=u("div"),y=u("div"),ne(d.$$.fragment),j=O(),C=u("div"),ne(q.$$.fragment),this.h()},l(V){const R=Pe('[data-svelte="svelte-1up494f"]',document.head);s=f(R,"LINK",{rel:!0,href:!0}),R.forEach(n),t=S(V),o=f(V,"SECTION",{class:!0});var U=_(o);r=f(U,"DIV",{class:!0});var H=_(r);i=f(H,"DIV",{class:!0});var N=_(i);h=f(N,"H1",{class:!0});var G=_(h);m=f(G,"A",{href:!0});var J=_(m);$=P(J,fe),J.forEach(n),G.forEach(n),k=S(N),I=f(N,"P",{class:!0});var W=_(I);D=P(W,Ve),W.forEach(n),T=S(N),w=f(N,"P",{class:!0});var ve=_(w);L=P(ve,"last built on "),b=P(ve,g),ve.forEach(n),N.forEach(n),H.forEach(n),U.forEach(n),E=S(V),p=f(V,"SECTION",{style:!0});var Ee=_(p);c=f(Ee,"DIV",{class:!0,style:!0});var se=_(c);y=f(se,"DIV",{class:!0});var we=_(y);ie(d.$$.fragment,we),we.forEach(n),j=S(se),C=f(se,"DIV",{class:!0});var Ie=_(C);ie(q.$$.fragment,Ie),Ie.forEach(n),se.forEach(n),Ee.forEach(n),this.h()},h(){v(s,"rel","icon"),v(s,"href",""+(pe+"/favicon.png")),v(m,"href",""+(pe+"/")),v(h,"class","title"),v(I,"class","subtitle"),v(w,"class",""),v(i,"class","container"),v(r,"class","hero-body"),v(o,"class","hero is-link"),v(y,"class","columnn content py-5 mr-5 is-narrow"),v(C,"class","column content p-5 is-two-thirds"),v(c,"class","columns container"),ee(c,"margin","auto"),ee(p,"margin","0 auto")},m(V,R){l(document.head,s),B(V,t,R),B(V,o,R),l(o,r),l(r,i),l(i,h),l(h,m),l(m,$),l(i,k),l(i,I),l(I,D),l(i,T),l(i,w),l(w,L),l(w,b),B(V,E,R),B(V,p,R),l(p,c),l(c,y),oe(d,y,null),l(c,j),l(c,C),oe(q,C,null),M=!0},p(V,[R]){(!M||R&0)&&e!==(e=fe)&&(document.title=e)},i(V){M||(ce(d.$$.fragment,V),ce(q.$$.fragment,V),M=!0)},o(V){de(d.$$.fragment,V),de(q.$$.fragment,V),M=!1},d(V){n(s),V&&n(t),V&&n(o),V&&n(E),V&&n(p),ue(d),ue(q)}}}function Ze(a,e,s){return[!0]}class tt extends X{constructor(e){super();Y(this,e,Ze,Ye,Z,{prerender:0})}get prerender(){return this.$$.ctx[0]}}export{tt as default};

function _(){}function D(t,n){for(const e in n)t[e]=n[e];return t}function q(t){return t()}function M(){return Object.create(null)}function m(t){t.forEach(q)}function I(t){return typeof t=="function"}function P(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function F(t){return Object.keys(t).length===0}function H(t,...n){if(t==null)return _;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function ut(t,n,e){t.$$.on_destroy.push(H(n,e))}function lt(t,n,e,i){if(t){const c=T(t,n,e,i);return t[0](c)}}function T(t,n,e,i){return t[1]&&i?D(e.ctx.slice(),t[1](i(n))):e.ctx}function st(t,n,e,i){if(t[2]&&i){const c=t[2](i(e));if(n.dirty===void 0)return c;if(typeof c=="object"){const s=[],o=Math.max(n.dirty.length,c.length);for(let u=0;u<o;u+=1)s[u]=n.dirty[u]|c[u];return s}return n.dirty|c}return n.dirty}function ft(t,n,e,i,c,s){if(c){const o=T(n,e,i,s);t.p(o,c)}}function at(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}let b=!1;function W(){b=!0}function G(){b=!1}function J(t,n,e,i){for(;t<n;){const c=t+(n-t>>1);e(c)<=i?t=c+1:n=c}return t}function K(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const r=[];for(let l=0;l<n.length;l++){const a=n[l];a.claim_order!==void 0&&r.push(a)}n=r}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let c=0;for(let r=0;r<n.length;r++){const l=n[r].claim_order,a=(c>0&&n[e[c]].claim_order<=l?c+1:J(1,c,y=>n[e[y]].claim_order,l))-1;i[r]=e[a]+1;const f=a+1;e[f]=r,c=Math.max(f,c)}const s=[],o=[];let u=n.length-1;for(let r=e[c]+1;r!=0;r=i[r-1]){for(s.push(n[r-1]);u>=r;u--)o.push(n[u]);u--}for(;u>=0;u--)o.push(n[u]);s.reverse(),o.sort((r,l)=>r.claim_order-l.claim_order);for(let r=0,l=0;r<o.length;r++){for(;l<s.length&&o[r].claim_order>=s[l].claim_order;)l++;const a=l<s.length?s[l]:null;t.insertBefore(o[r],a)}}function Q(t,n){if(b){for(K(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function dt(t,n,e){b&&!e?Q(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function R(t){t.parentNode.removeChild(t)}function _t(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function U(t){return document.createElement(t)}function k(t){return document.createTextNode(t)}function ht(){return k(" ")}function mt(){return k("")}function pt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function yt(t){return function(n){return n.preventDefault(),t.call(this,n)}}function bt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function V(t){return Array.from(t.childNodes)}function X(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function z(t,n,e,i,c=!1){X(t);const s=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const u=t[o];if(n(u)){const r=e(u);return r===void 0?t.splice(o,1):t[o]=r,c||(t.claim_info.last_index=o),u}}for(let o=t.claim_info.last_index-1;o>=0;o--){const u=t[o];if(n(u)){const r=e(u);return r===void 0?t.splice(o,1):t[o]=r,c?r===void 0&&t.claim_info.last_index--:t.claim_info.last_index=o,u}}return i()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function Y(t,n,e,i){return z(t,c=>c.nodeName===n,c=>{const s=[];for(let o=0;o<c.attributes.length;o++){const u=c.attributes[o];e[u.name]||s.push(u.name)}s.forEach(o=>c.removeAttribute(o))},()=>i(n))}function gt(t,n,e){return Y(t,n,e,U)}function Z(t,n){return z(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>k(n),!0)}function xt(t){return Z(t," ")}function $t(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function wt(t,n){t.value=n==null?"":n}function Et(t,n,e,i){t.style.setProperty(n,e,i?"important":"")}function kt(t,n){for(let e=0;e<t.options.length;e+=1){const i=t.options[e];if(i.__value===n){i.selected=!0;return}}t.selectedIndex=-1}function St(t){const n=t.querySelector(":checked")||t.options[0];return n&&n.__value}function At(t,n=document.body){return Array.from(n.querySelectorAll(t))}let g;function x(t){g=t}function $(){if(!g)throw new Error("Function called outside component initialization");return g}function jt(t){$().$$.on_mount.push(t)}function Nt(t){$().$$.after_update.push(t)}function vt(t,n){$().$$.context.set(t,n)}function Ct(t){return $().$$.context.get(t)}const p=[],B=[],w=[],L=[],tt=Promise.resolve();let S=!1;function nt(){S||(S=!0,tt.then(O))}function A(t){w.push(t)}let j=!1;const N=new Set;function O(){if(!j){j=!0;do{for(let t=0;t<p.length;t+=1){const n=p[t];x(n),et(n.$$)}for(x(null),p.length=0;B.length;)B.pop()();for(let t=0;t<w.length;t+=1){const n=w[t];N.has(n)||(N.add(n),n())}w.length=0}while(p.length);for(;L.length;)L.pop()();S=!1,j=!1,N.clear()}}function et(t){if(t.fragment!==null){t.update(),m(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(A)}}const E=new Set;let d;function qt(){d={r:0,c:[],p:d}}function Mt(){d.r||m(d.c),d=d.p}function it(t,n){t&&t.i&&(E.delete(t),t.i(n))}function Tt(t,n,e,i){if(t&&t.o){if(E.has(t))return;E.add(t),d.c.push(()=>{E.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}}function zt(t,n){const e={},i={},c={$$scope:1};let s=t.length;for(;s--;){const o=t[s],u=n[s];if(u){for(const r in o)r in u||(i[r]=1);for(const r in u)c[r]||(e[r]=u[r],c[r]=1);t[s]=u}else for(const r in o)c[r]=1}for(const o in i)o in e||(e[o]=void 0);return e}function Bt(t){return typeof t=="object"&&t!==null?t:{}}function Lt(t){t&&t.c()}function Ot(t,n){t&&t.l(n)}function rt(t,n,e,i){const{fragment:c,on_mount:s,on_destroy:o,after_update:u}=t.$$;c&&c.m(n,e),i||A(()=>{const r=s.map(q).filter(I);o?o.push(...r):m(r),t.$$.on_mount=[]}),u.forEach(A)}function ct(t,n){const e=t.$$;e.fragment!==null&&(m(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ot(t,n){t.$$.dirty[0]===-1&&(p.push(t),nt(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Dt(t,n,e,i,c,s,o,u=[-1]){const r=g;x(t);const l=t.$$={fragment:null,ctx:null,props:s,update:_,not_equal:c,bound:M(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(r?r.$$.context:[])),callbacks:M(),dirty:u,skip_bound:!1,root:n.target||r.$$.root};o&&o(l.root);let a=!1;if(l.ctx=e?e(t,n.props||{},(f,y,...v)=>{const C=v.length?v[0]:y;return l.ctx&&c(l.ctx[f],l.ctx[f]=C)&&(!l.skip_bound&&l.bound[f]&&l.bound[f](C),a&&ot(t,f)),y}):[],l.update(),a=!0,m(l.before_update),l.fragment=i?i(l.ctx):!1,n.target){if(n.hydrate){W();const f=V(n.target);l.fragment&&l.fragment.l(f),f.forEach(R)}else l.fragment&&l.fragment.c();n.intro&&it(t.$$.fragment),rt(t,n.target,n.anchor,n.customElement),G(),O()}x(r)}class It{$destroy(){ct(this,1),this.$destroy=_}$on(n,e){const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const c=i.indexOf(e);c!==-1&&i.splice(c,1)}}$set(n){this.$$set&&!F(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}const h=[];function Pt(t,n=_){let e;const i=new Set;function c(u){if(P(t,u)&&(t=u,e)){const r=!h.length;for(const l of i)l[1](),h.push(l,t);if(r){for(let l=0;l<h.length;l+=2)h[l][0](h[l+1]);h.length=0}}}function s(u){c(u(t))}function o(u,r=_){const l=[u,r];return i.add(l),i.size===1&&(e=n(c)||_),u(t),()=>{i.delete(l),i.size===0&&(e(),e=null)}}return{set:c,update:s,subscribe:o}}export{jt as A,D as B,Pt as C,lt as D,ft as E,at as F,st as G,Q as H,_ as I,A as J,wt as K,kt as L,pt as M,yt as N,_t as O,m as P,St as Q,B as R,It as S,At as T,Ct as U,Et as V,ut as W,V as a,bt as b,gt as c,R as d,U as e,dt as f,Z as g,$t as h,Dt as i,Lt as j,ht as k,mt as l,Ot as m,xt as n,rt as o,zt as p,Bt as q,qt as r,P as s,k as t,Tt as u,ct as v,Mt as w,it as x,vt as y,Nt as z};
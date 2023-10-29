(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[938],{244:function(e,t,r){"use strict";var n=r(4836);t.Z=void 0;var o=n(r(4938)),l=r(5893),u=(0,o.default)([(0,l.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"},"0"),(0,l.jsx)("path",{d:"M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"},"1")],"AccessTime");t.Z=u},7498:function(e,t){"use strict";var r,n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{PrefetchKind:function(){return r},ACTION_REFRESH:function(){return o},ACTION_NAVIGATE:function(){return l},ACTION_RESTORE:function(){return u},ACTION_SERVER_PATCH:function(){return f},ACTION_PREFETCH:function(){return a},ACTION_FAST_REFRESH:function(){return i},ACTION_SERVER_ACTION:function(){return c}});let o="refresh",l="navigate",u="restore",f="server-patch",a="prefetch",i="fast-refresh",c="server-action";(n=r||(r={})).AUTO="auto",n.FULL="full",n.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},30:function(e,t,r){"use strict";function getDomainLocale(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return getDomainLocale}}),r(2866),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5170:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return _}});let n=r(8754),o=n._(r(7294)),l=r(4450),u=r(2227),f=r(4364),a=r(109),i=r(3607),c=r(1823),s=r(9031),d=r(920),p=r(30),v=r(7192),b=r(7498),h=new Set;function prefetch(e,t,r,n,o,l){if(!l&&!(0,u.isLocalURL)(t))return;if(!n.bypassPrefetchedCheck){let o=void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0,l=t+"%"+r+"%"+o;if(h.has(l))return;h.add(l)}let f=l?e.prefetch(t,o):e.prefetch(t,r,n);Promise.resolve(f).catch(e=>{})}function isModifiedEvent(e){let t=e.currentTarget,r=t.getAttribute("target");return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}function linkClicked(e,t,r,n,l,f,a,i,c,s){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(isModifiedEvent(e)||!c&&!(0,u.isLocalURL)(r)))return;e.preventDefault();let navigate=()=>{let e=null==a||a;"beforePopState"in t?t[l?"replace":"push"](r,n,{shallow:f,locale:i,scroll:e}):t[l?"replace":"push"](n||r,{forceOptimisticNavigation:!s,scroll:e})};c?o.default.startTransition(navigate):navigate()}function formatStringOrUrl(e){return"string"==typeof e?e:(0,f.formatUrl)(e)}let y=o.default.forwardRef(function(e,t){let r,n;let{href:u,as:f,children:h,prefetch:y=null,passHref:_,replace:g,shallow:O,scroll:C,locale:m,onClick:E,onMouseEnter:M,onTouchStart:P,legacyBehavior:j=!1,...T}=e;r=h,j&&("string"==typeof r||"number"==typeof r)&&(r=o.default.createElement("a",null,r));let k=o.default.useContext(c.RouterContext),R=o.default.useContext(s.AppRouterContext),A=null!=k?k:R,I=!k,S=!1!==y,L=null===y?b.PrefetchKind.AUTO:b.PrefetchKind.FULL,{href:x,as:N}=o.default.useMemo(()=>{if(!k){let e=formatStringOrUrl(u);return{href:e,as:f?formatStringOrUrl(f):e}}let[e,t]=(0,l.resolveHref)(k,u,!0);return{href:e,as:f?(0,l.resolveHref)(k,f):t||e}},[k,u,f]),U=o.default.useRef(x),w=o.default.useRef(N);j&&(n=o.default.Children.only(r));let H=j?n&&"object"==typeof n&&n.ref:t,[K,D,F]=(0,d.useIntersection)({rootMargin:"200px"}),z=o.default.useCallback(e=>{(w.current!==N||U.current!==x)&&(F(),w.current=N,U.current=x),K(e),H&&("function"==typeof H?H(e):"object"==typeof H&&(H.current=e))},[N,H,x,F,K]);o.default.useEffect(()=>{A&&D&&S&&prefetch(A,x,N,{locale:m},{kind:L},I)},[N,x,D,m,S,null==k?void 0:k.locale,A,I,L]);let V={ref:z,onClick(e){j||"function"!=typeof E||E(e),j&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),A&&!e.defaultPrevented&&linkClicked(e,A,x,N,g,O,C,m,I,S)},onMouseEnter(e){j||"function"!=typeof M||M(e),j&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),A&&(S||!I)&&prefetch(A,x,N,{locale:m,priority:!0,bypassPrefetchedCheck:!0},{kind:L},I)},onTouchStart(e){j||"function"!=typeof P||P(e),j&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),A&&(S||!I)&&prefetch(A,x,N,{locale:m,priority:!0,bypassPrefetchedCheck:!0},{kind:L},I)}};if((0,a.isAbsoluteUrl)(N))V.href=N;else if(!j||_||"a"===n.type&&!("href"in n.props)){let e=void 0!==m?m:null==k?void 0:k.locale,t=(null==k?void 0:k.isLocaleDomain)&&(0,p.getDomainLocale)(N,e,null==k?void 0:k.locales,null==k?void 0:k.domainLocales);V.href=t||(0,v.addBasePath)((0,i.addLocale)(N,e,null==k?void 0:k.defaultLocale))}return j?o.default.cloneElement(n,V):o.default.createElement("a",{...T,...V},r)}),_=y;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},920:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return useIntersection}});let n=r(7294),o=r(3436),l="function"==typeof IntersectionObserver,u=new Map,f=[];function createObserver(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=f.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=u.get(n)))return t;let o=new Map,l=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e);return t={id:r,observer:l,elements:o},f.push(r),u.set(r,t),t}function observe(e,t,r){let{id:n,observer:o,elements:l}=createObserver(r);return l.set(e,t),o.observe(e),function(){if(l.delete(e),o.unobserve(e),0===l.size){o.disconnect(),u.delete(n);let e=f.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&f.splice(e,1)}}}function useIntersection(e){let{rootRef:t,rootMargin:r,disabled:u}=e,f=u||!l,[a,i]=(0,n.useState)(!1),c=(0,n.useRef)(null),s=(0,n.useCallback)(e=>{c.current=e},[]);(0,n.useEffect)(()=>{if(l){if(f||a)return;let e=c.current;if(e&&e.tagName){let n=observe(e,e=>e&&i(e),{root:null==t?void 0:t.current,rootMargin:r});return n}}else if(!a){let e=(0,o.requestIdleCallback)(()=>i(!0));return()=>(0,o.cancelIdleCallback)(e)}},[f,r,t,a,c.current]);let d=(0,n.useCallback)(()=>{i(!1)},[]);return[s,a,d]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1664:function(e,t,r){e.exports=r(5170)}}]);
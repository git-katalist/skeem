(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{7913:function(e,t,n){"use strict";var r=n(5696);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,u=(o=n(7294))&&o.__esModule?o:{default:o},a=n(2199),c=n(1587),l=n(7215);function f(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i={};function s(e,t,n,r){if(e&&a.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;i[t+"%"+n+(o?"%"+o:"")]=!0}}var d=u.default.forwardRef((function(e,t){var n,o=e.legacyBehavior,d=void 0===o?!0!==Boolean(!1):o,p=e.href,v=e.as,h=e.children,y=e.prefetch,b=e.passHref,g=e.replace,m=e.shallow,E=e.scroll,_=e.locale,j=e.onClick,k=e.onMouseEnter,O=f(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter"]);n=h,d&&"string"===typeof n&&(n=u.default.createElement("a",null,n));var w,M=!1!==y,C=c.useRouter(),L=u.default.useMemo((function(){var e=a.resolveHref(C,p,!0),t=r(e,2),n=t[0],o=t[1];return{href:n,as:v?a.resolveHref(C,v):o||n}}),[C,p,v]),x=L.href,R=L.as,I=u.default.useRef(x),P=u.default.useRef(R);d&&(w=u.default.Children.only(n));var N=d?w&&"object"===typeof w&&w.ref:t,H=l.useIntersection({rootMargin:"200px"}),U=r(H,3),B=U[0],K=U[1],S=U[2],T=u.default.useCallback((function(e){P.current===R&&I.current===x||(S(),P.current=R,I.current=x),B(e),N&&("function"===typeof N?N(e):"object"===typeof N&&(N.current=e))}),[R,N,x,S,B]);u.default.useEffect((function(){var e=K&&M&&a.isLocalURL(x),t="undefined"!==typeof _?_:C&&C.locale,n=i[x+"%"+R+(t?"%"+t:"")];e&&!n&&s(C,x,R,{locale:t})}),[R,x,K,_,M,C]);var D={ref:T,onClick:function(e){d||"function"!==typeof j||j(e),d&&w.props&&"function"===typeof w.props.onClick&&w.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,u,c,l){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(n))&&(e.preventDefault(),t[o?"replace":"push"](n,r,{shallow:u,locale:l,scroll:c}))}(e,C,x,R,g,m,E,_)},onMouseEnter:function(e){d||"function"!==typeof k||k(e),d&&w.props&&"function"===typeof w.props.onMouseEnter&&w.props.onMouseEnter(e),a.isLocalURL(x)&&s(C,x,R,{priority:!0})}};if(!d||b||"a"===w.type&&!("href"in w.props)){var A="undefined"!==typeof _?_:C&&C.locale,X=C&&C.isLocaleDomain&&a.getDomainLocale(R,A,C&&C.locales,C&&C.domainLocales);D.href=X||a.addBasePath(a.addLocale(R,A,C&&C.defaultLocale))}return d?u.default.cloneElement(w,D):u.default.createElement("a",Object.assign({},O,D),n)}));t.default=d,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},7215:function(e,t,n){"use strict";var r=n(5696);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,f=e.disabled||!a,i=o.useRef(),s=o.useState(!1),d=r(s,2),p=d[0],v=d[1],h=o.useState(t?t.current:null),y=r(h,2),b=y[0],g=y[1],m=o.useCallback((function(e){i.current&&(i.current(),i.current=void 0),f||p||e&&e.tagName&&(i.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=l.find((function(e){return e.root===n.root&&e.margin===n.margin}));r?t=c.get(r):(t=c.get(n),l.push(n));if(t)return t;var o=new Map,u=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(n,t={id:n,observer:u,elements:o}),t}(n),o=r.id,u=r.observer,a=r.elements;return a.set(e,t),u.observe(e),function(){if(a.delete(e),u.unobserve(e),0===a.size){u.disconnect(),c.delete(o);var t=l.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&l.splice(t,1)}}}(e,(function(e){return e&&v(e)}),{root:b,rootMargin:n}))}),[f,b,n,p]),E=o.useCallback((function(){v(!1)}),[]);return o.useEffect((function(){if(!a&&!p){var e=u.requestIdleCallback((function(){return v(!0)}));return function(){return u.cancelIdleCallback(e)}}}),[p]),o.useEffect((function(){t&&g(t.current)}),[t]),[m,p,E]};var o=n(7294),u=n(8065),a="undefined"!==typeof IntersectionObserver;var c=new Map,l=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},4660:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a}});var r=n(1664),o=n.n(r),u=n(5893);function a(){return(0,u.jsxs)("div",{children:[(0,u.jsx)("div",{children:"About us"}),(0,u.jsxs)("div",{children:["Back to"," ",(0,u.jsx)(o(),{href:"/",as:"/skeem/",children:(0,u.jsx)("a",{children:"Home"})})]})]})}},512:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return n(4660)}])},1664:function(e,t,n){e.exports=n(7913)}},function(e){e.O(0,[774,888,179],(function(){return t=512,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
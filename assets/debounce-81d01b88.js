import{cX as L,az as v,aI as M}from"./viewer-a917d3a0.js";var N=/\s/;function $(n){for(var r=n.length;r--&&N.test(n.charAt(r)););return r}var B=/^\s+/;function R(n){return n&&n.slice(0,$(n)+1).replace(B,"")}var k=0/0,F=/^[-+]0x[0-9a-f]+$/i,X=/^0b[01]+$/i,_=/^0o[0-7]+$/i,j=parseInt;function S(n){if(typeof n=="number")return n;if(L(n))return k;if(v(n)){var r=typeof n.valueOf=="function"?n.valueOf():n;n=v(r)?r+"":r}if(typeof n!="string")return n===0?n:+n;n=R(n);var t=X.test(n);return t||_.test(n)?j(n.slice(2),t?2:8):F.test(n)?k:+n}var z=function(){return M.Date.now()};const h=z;var D="Expected a function",H=Math.max,P=Math.min;function q(n,r,t){var u,c,l,s,i,f,o=0,p=!1,d=!1,T=!0;if(typeof n!="function")throw new TypeError(D);r=S(r)||0,v(t)&&(p=!!t.leading,d="maxWait"in t,l=d?H(S(t.maxWait)||0,r):l,T="trailing"in t?!!t.trailing:T);function x(e){var a=u,m=c;return u=c=void 0,o=e,s=n.apply(m,a),s}function W(e){return o=e,i=setTimeout(g,r),p?x(e):s}function O(e){var a=e-f,m=e-o,E=r-a;return d?P(E,l-m):E}function y(e){var a=e-f,m=e-o;return f===void 0||a>=r||a<0||d&&m>=l}function g(){var e=h();if(y(e))return b(e);i=setTimeout(g,O(e))}function b(e){return i=void 0,T&&u?x(e):(u=c=void 0,s)}function A(){i!==void 0&&clearTimeout(i),o=0,u=f=c=i=void 0}function C(){return i===void 0?s:b(h())}function I(){var e=h(),a=y(e);if(u=arguments,c=this,f=e,a){if(i===void 0)return W(f);if(d)return clearTimeout(i),i=setTimeout(g,r),x(f)}return i===void 0&&(i=setTimeout(g,r)),s}return I.cancel=A,I.flush=C,I}export{q as d,S as t};

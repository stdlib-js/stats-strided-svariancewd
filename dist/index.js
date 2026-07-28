"use strict";var d=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(i){throw (e=0, i)}};};var f=d(function(B,p){
var a=require('@stdlib/number-float64-base-to-float32/dist');function E(r,e,i,t,_){var s,v,n,o,q,c,u;if(c=r-e,r<=0||c<=0)return NaN;if(r===1||t===0)return 0;for(o=_,n=0,v=0,u=0;u<r;u++)q=i[o],s=a(q-v),v=a(v+a(s/(u+1))),n=a(n+a(s*a(q-v))),o+=t;return a(n/c)}p.exports=E
});var y=d(function(C,x){
var F=require('@stdlib/strided-base-stride2offset/dist'),M=f();function O(r,e,i,t){return M(r,e,i,t,F(r,t))}x.exports=O
});var j=d(function(D,w){
var T=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),m=y(),b=f();T(m,"ndarray",b);w.exports=m
});var g=require("path").join,h=require('@stdlib/utils-try-require/dist'),k=require('@stdlib/assert-is-error/dist'),z=j(),l,R=h(g(__dirname,"./native.js"));k(R)?l=z:l=R;module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

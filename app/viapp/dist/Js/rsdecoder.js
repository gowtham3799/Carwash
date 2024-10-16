/*
*
* Copyright 2007 ZXing authors
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function ReedSolomonDecoder(r){this.field=r;this.decode=function(r,e){var i=new GF256Poly(this.field,r);var t=new Array(e);for(var a=0;a<t.length;a++)t[a]=0;var l=false;var o=true;for(var a=0;a<e;a++){var n=i.evaluateAt(this.field.exp(l?a+1:a));t[t.length-1-a]=n;if(n!=0){o=false}}if(o){return}var f=new GF256Poly(this.field,t);var d=this.runEuclideanAlgorithm(this.field.buildMonomial(e,1),f,e);var v=d[0];var s=d[1];var h=this.findErrorLocations(v);var u=this.findErrorMagnitudes(s,h,l);for(var a=0;a<h.length;a++){var c=r.length-1-this.field.log(h[a]);if(c<0){throw"ReedSolomonException Bad error location"}r[c]=GF256.addOrSubtract(r[c],u[a])}};this.runEuclideanAlgorithm=function(r,e,i){if(r.Degree<e.Degree){var t=r;r=e;e=t}var a=r;var l=e;var o=this.field.One;var n=this.field.Zero;var f=this.field.Zero;var d=this.field.One;while(l.Degree>=Math.floor(i/2)){var v=a;var s=o;var h=f;a=l;o=n;f=d;if(a.Zero){throw"r_{i-1} was zero"}l=v;var u=this.field.Zero;var c=a.getCoefficient(a.Degree);var g=this.field.inverse(c);while(l.Degree>=a.Degree&&!l.Zero){var m=l.Degree-a.Degree;var y=this.field.multiply(l.getCoefficient(l.Degree),g);u=u.addOrSubtract(this.field.buildMonomial(m,y));l=l.addOrSubtract(a.multiplyByMonomial(m,y))}n=u.multiply1(o).addOrSubtract(s);d=u.multiply1(f).addOrSubtract(h)}var w=d.getCoefficient(0);if(w==0){throw"ReedSolomonException sigmaTilde(0) was zero"}var p=this.field.inverse(w);var D=d.multiply2(p);var A=l.multiply2(p);return new Array(D,A)};this.findErrorLocations=function(r){var e=r.Degree;if(e==1){return new Array(r.getCoefficient(1))}var i=new Array(e);var t=0;for(var a=1;a<256&&t<e;a++){if(r.evaluateAt(a)==0){i[t]=this.field.inverse(a);t++}}if(t!=e){throw"Error locator degree does not match number of roots"}return i};this.findErrorMagnitudes=function(r,e,i){var t=e.length;var a=new Array(t);for(var l=0;l<t;l++){var o=this.field.inverse(e[l]);var n=1;for(var f=0;f<t;f++){if(l!=f){n=this.field.multiply(n,GF256.addOrSubtract(1,this.field.multiply(e[f],o)))}}a[l]=this.field.multiply(r.evaluateAt(o),this.field.inverse(n));if(i){a[l]=this.field.multiply(a[l],o)}}return a}}
//# sourceMappingURL=rsdecoder.js.map
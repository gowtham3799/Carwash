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
function AlignmentPattern(t,e,i){this.x=t;this.y=e;this.count=1;this.estimatedModuleSize=i;this.__defineGetter__("EstimatedModuleSize",function(){return this.estimatedModuleSize});this.__defineGetter__("Count",function(){return this.count});this.__defineGetter__("X",function(){return Math.floor(this.x)});this.__defineGetter__("Y",function(){return Math.floor(this.y)});this.incrementCount=function(){this.count++};this.aboutEquals=function(t,e,i){if(Math.abs(e-this.y)<=t&&Math.abs(i-this.x)<=t){var r=Math.abs(t-this.estimatedModuleSize);return r<=1||r/this.estimatedModuleSize<=1}return false}}function AlignmentPatternFinder(t,e,i,r,s,n,h){this.image=t;this.possibleCenters=new Array;this.startX=e;this.startY=i;this.width=r;this.height=s;this.moduleSize=n;this.crossCheckStateCount=new Array(0,0,0);this.resultPointCallback=h;this.centerFromEnd=function(t,e){return e-t[2]-t[1]/2};this.foundPatternCross=function(t){var e=this.moduleSize;var i=e/2;for(var r=0;r<3;r++){if(Math.abs(e-t[r])>=i){return false}}return true};this.crossCheckVertical=function(t,e,i,r){var s=this.image;var n=qrcode.height;var h=this.crossCheckStateCount;h[0]=0;h[1]=0;h[2]=0;var a=t;while(a>=0&&s[e+a*qrcode.width]&&h[1]<=i){h[1]++;a--}if(a<0||h[1]>i){return NaN}while(a>=0&&!s[e+a*qrcode.width]&&h[0]<=i){h[0]++;a--}if(h[0]>i){return NaN}a=t+1;while(a<n&&s[e+a*qrcode.width]&&h[1]<=i){h[1]++;a++}if(a==n||h[1]>i){return NaN}while(a<n&&!s[e+a*qrcode.width]&&h[2]<=i){h[2]++;a++}if(h[2]>i){return NaN}var o=h[0]+h[1]+h[2];if(5*Math.abs(o-r)>=2*r){return NaN}return this.foundPatternCross(h)?this.centerFromEnd(h,a):NaN};this.handlePossibleCenter=function(t,e,i){var r=t[0]+t[1]+t[2];var s=this.centerFromEnd(t,i);var n=this.crossCheckVertical(e,Math.floor(s),2*t[1],r);if(!isNaN(n)){var h=(t[0]+t[1]+t[2])/3;var a=this.possibleCenters.length;for(var o=0;o<a;o++){var u=this.possibleCenters[o];if(u.aboutEquals(h,n,s)){return new AlignmentPattern(s,n,h)}}var l=new AlignmentPattern(s,n,h);this.possibleCenters.push(l);if(this.resultPointCallback!=null){this.resultPointCallback.foundPossibleResultPoint(l)}}return null};this.find=function(){var e=this.startX;var s=this.height;var n=e+r;var h=i+(s>>1);var a=new Array(0,0,0);for(var o=0;o<s;o++){var u=h+((o&1)==0?o+1>>1:-(o+1>>1));a[0]=0;a[1]=0;a[2]=0;var l=e;while(l<n&&!t[l+qrcode.width*u]){l++}var f=0;while(l<n){if(t[l+u*qrcode.width]){if(f==1){a[f]++}else{if(f==2){if(this.foundPatternCross(a)){var d=this.handlePossibleCenter(a,u,l);if(d!=null){return d}}a[0]=a[2];a[1]=1;a[2]=0;f=1}else{a[++f]++}}}else{if(f==1){f++}a[f]++}l++}if(this.foundPatternCross(a)){var d=this.handlePossibleCenter(a,u,n);if(d!=null){return d}}}if(!(this.possibleCenters.length==0)){return this.possibleCenters[0]}throw"Couldn't find enough alignment patterns"}}
//# sourceMappingURL=alignpat.js.map
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
var GridSampler={};GridSampler.checkAndNudgePoints=function(r,e){var a=qrcode.width;var t=qrcode.height;var o=true;for(var i=0;i<e.length&&o;i+=2){var f=Math.floor(e[i]);var l=Math.floor(e[i+1]);if(f<-1||f>a||l<-1||l>t){throw"Error.checkAndNudgePoints "}o=false;if(f==-1){e[i]=0;o=true}else if(f==a){e[i]=a-1;o=true}if(l==-1){e[i+1]=0;o=true}else if(l==t){e[i+1]=t-1;o=true}}o=true;for(var i=e.length-2;i>=0&&o;i-=2){var f=Math.floor(e[i]);var l=Math.floor(e[i+1]);if(f<-1||f>a||l<-1||l>t){throw"Error.checkAndNudgePoints "}o=false;if(f==-1){e[i]=0;o=true}else if(f==a){e[i]=a-1;o=true}if(l==-1){e[i+1]=0;o=true}else if(l==t){e[i+1]=t-1;o=true}}};GridSampler.sampleGrid3=function(r,e,a){var t=new BitMatrix(e);var o=new Array(e<<1);for(var i=0;i<e;i++){var f=o.length;var l=i+.5;for(var d=0;d<f;d+=2){o[d]=(d>>1)+.5;o[d+1]=l}a.transformPoints1(o);GridSampler.checkAndNudgePoints(r,o);try{for(var d=0;d<f;d+=2){var n=r[Math.floor(o[d])+qrcode.width*Math.floor(o[d+1])];if(n)t.set_Renamed(d>>1,i)}}catch(r){throw"Error.checkAndNudgePoints"}}return t};GridSampler.sampleGridx=function(r,e,a,t,o,i,f,l,d,n,h,u,v,c,s,m,p,g){var G=PerspectiveTransform.quadrilateralToQuadrilateral(a,t,o,i,f,l,d,n,h,u,v,c,s,m,p,g);return GridSampler.sampleGrid3(r,e,G)};
//# sourceMappingURL=grid.js.map
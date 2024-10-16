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
function BitMatrix(t,i){if(!i)i=t;if(t<1||i<1){throw"Both dimensions must be greater than 0"}this.width=t;this.height=i;var h=t>>5;if((t&31)!=0){h++}this.rowSize=h;this.bits=new Array(h*i);for(var e=0;e<this.bits.length;e++)this.bits[e]=0;this.__defineGetter__("Width",function(){return this.width});this.__defineGetter__("Height",function(){return this.height});this.__defineGetter__("Dimension",function(){if(this.width!=this.height){throw"Can't call getDimension() on a non-square matrix"}return this.width});this.get_Renamed=function(t,i){var h=i*this.rowSize+(t>>5);return(URShift(this.bits[h],t&31)&1)!=0};this.set_Renamed=function(t,i){var h=i*this.rowSize+(t>>5);this.bits[h]|=1<<(t&31)};this.flip=function(t,i){var h=i*this.rowSize+(t>>5);this.bits[h]^=1<<(t&31)};this.clear=function(){var t=this.bits.length;for(var i=0;i<t;i++){this.bits[i]=0}};this.setRegion=function(t,i,h,e){if(i<0||t<0){throw"Left and top must be nonnegative"}if(e<1||h<1){throw"Height and width must be at least 1"}var s=t+h;var n=i+e;if(n>this.height||s>this.width){throw"The region must fit inside the matrix"}for(var r=i;r<n;r++){var o=r*this.rowSize;for(var a=t;a<s;a++){this.bits[o+(a>>5)]|=1<<(a&31)}}}}
//# sourceMappingURL=bitmat.js.map
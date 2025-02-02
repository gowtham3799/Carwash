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
function ErrorCorrectionLevel(r,e,n){this.ordinal_Renamed_Field=r;this.bits=e;this.name=n;this.__defineGetter__("Bits",function(){return this.bits});this.__defineGetter__("Name",function(){return this.name});this.ordinal=function(){return this.ordinal_Renamed_Field}}ErrorCorrectionLevel.forBits=function(r){if(r<0||r>=FOR_BITS.length){throw"ArgumentException"}return FOR_BITS[r]};var L=new ErrorCorrectionLevel(0,1,"L");var M=new ErrorCorrectionLevel(1,0,"M");var Q=new ErrorCorrectionLevel(2,3,"Q");var H=new ErrorCorrectionLevel(3,2,"H");var FOR_BITS=new Array(M,L,H,Q);
//# sourceMappingURL=errorlevel.js.map
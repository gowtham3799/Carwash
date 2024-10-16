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
function BitMatrixParser(r){var i=r.Dimension;if(i<21||(i&3)!=1){throw"Error BitMatrixParser"}this.bitMatrix=r;this.parsedVersion=null;this.parsedFormatInfo=null;this.copyBit=function(r,i,t){return this.bitMatrix.get_Renamed(r,i)?t<<1|1:t<<1};this.readFormatInformation=function(){if(this.parsedFormatInfo!=null){return this.parsedFormatInfo}var r=0;for(var i=0;i<6;i++){r=this.copyBit(i,8,r)}r=this.copyBit(7,8,r);r=this.copyBit(8,8,r);r=this.copyBit(8,7,r);for(var t=5;t>=0;t--){r=this.copyBit(8,t,r)}this.parsedFormatInfo=FormatInformation.decodeFormatInformation(r);if(this.parsedFormatInfo!=null){return this.parsedFormatInfo}var o=this.bitMatrix.Dimension;r=0;var a=o-8;for(var i=o-1;i>=a;i--){r=this.copyBit(i,8,r)}for(var t=o-7;t<o;t++){r=this.copyBit(8,t,r)}this.parsedFormatInfo=FormatInformation.decodeFormatInformation(r);if(this.parsedFormatInfo!=null){return this.parsedFormatInfo}throw"Error readFormatInformation"};this.readVersion=function(){if(this.parsedVersion!=null){return this.parsedVersion}var r=this.bitMatrix.Dimension;var i=r-17>>2;if(i<=6){return Version.getVersionForNumber(i)}var t=0;var o=r-11;for(var a=5;a>=0;a--){for(var s=r-9;s>=o;s--){t=this.copyBit(s,a,t)}}this.parsedVersion=Version.decodeVersionInformation(t);if(this.parsedVersion!=null&&this.parsedVersion.DimensionForVersion==r){return this.parsedVersion}t=0;for(var s=5;s>=0;s--){for(var a=r-9;a>=o;a--){t=this.copyBit(s,a,t)}}this.parsedVersion=Version.decodeVersionInformation(t);if(this.parsedVersion!=null&&this.parsedVersion.DimensionForVersion==r){return this.parsedVersion}throw"Error readVersion"};this.readCodewords=function(){var r=this.readFormatInformation();var i=this.readVersion();var t=DataMask.forReference(r.DataMask);var o=this.bitMatrix.Dimension;t.unmaskBitMatrix(this.bitMatrix,o);var a=i.buildFunctionPattern();var s=true;var e=new Array(i.TotalCodewords);var n=0;var f=0;var d=0;for(var h=o-1;h>0;h-=2){if(h==6){h--}for(var m=0;m<o;m++){var p=s?o-1-m:m;for(var v=0;v<2;v++){if(!a.get_Renamed(h-v,p)){d++;f<<=1;if(this.bitMatrix.get_Renamed(h-v,p)){f|=1}if(d==8){e[n++]=f;d=0;f=0}}}}s^=true}if(n!=i.TotalCodewords){throw"Error readCodewords"}return e}}
//# sourceMappingURL=bmparser.js.map
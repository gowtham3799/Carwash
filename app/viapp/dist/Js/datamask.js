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
var DataMask={};DataMask.forReference=function(a){if(a<0||a>7){throw"System.ArgumentException"}return DataMask.DATA_MASKS[a]};function DataMask000(){this.unmaskBitMatrix=function(a,i){for(var t=0;t<i;t++){for(var s=0;s<i;s++){if(this.isMasked(t,s)){a.flip(s,t)}}}};this.isMasked=function(a,i){return(a+i&1)==0}}function DataMask001(){this.unmaskBitMatrix=function(a,i){for(var t=0;t<i;t++){for(var s=0;s<i;s++){if(this.isMasked(t,s)){a.flip(s,t)}}}};this.isMasked=function(a,i){return(a&1)==0}}function DataMask010(){this.unmaskBitMatrix=function(a,i){for(var t=0;t<i;t++){for(var s=0;s<i;s++){if(this.isMasked(t,s)){a.flip(s,t)}}}};this.isMasked=function(a,i){return i%3==0}}function DataMask011(){this.unmaskBitMatrix=function(a,i){for(var t=0;t<i;t++){for(var s=0;s<i;s++){if(this.isMasked(t,s)){a.flip(s,t)}}}};this.isMasked=function(a,i){return(a+i)%3==0}}function DataMask100(){this.unmaskBitMatrix=function(a,i){for(var t=0;t<i;t++){for(var s=0;s<i;s++){if(this.isMasked(t,s)){a.flip(s,t)}}}};this.isMasked=function(a,i){return(URShift(a,1)+i/3&1)==0}}function DataMask101(){this.unmaskBitMatrix=function(a,i){for(var t=0;t<i;t++){for(var s=0;s<i;s++){if(this.isMasked(t,s)){a.flip(s,t)}}}};this.isMasked=function(a,i){var t=a*i;return(t&1)+t%3==0}}function DataMask110(){this.unmaskBitMatrix=function(a,i){for(var t=0;t<i;t++){for(var s=0;s<i;s++){if(this.isMasked(t,s)){a.flip(s,t)}}}};this.isMasked=function(a,i){var t=a*i;return((t&1)+t%3&1)==0}}function DataMask111(){this.unmaskBitMatrix=function(a,i){for(var t=0;t<i;t++){for(var s=0;s<i;s++){if(this.isMasked(t,s)){a.flip(s,t)}}}};this.isMasked=function(a,i){return((a+i&1)+a*i%3&1)==0}}DataMask.DATA_MASKS=new Array(new DataMask000,new DataMask001,new DataMask010,new DataMask011,new DataMask100,new DataMask101,new DataMask110,new DataMask111);
//# sourceMappingURL=datamask.js.map
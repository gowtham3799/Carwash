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
function DataBlock(r,o){this.numDataCodewords=r;this.codewords=o;this.__defineGetter__("NumDataCodewords",function(){return this.numDataCodewords});this.__defineGetter__("Codewords",function(){return this.codewords})}DataBlock.getDataBlocks=function(r,o,e){if(r.length!=o.TotalCodewords){throw"ArgumentException"}var a=o.getECBlocksForLevel(e);var t=0;var d=a.getECBlocks();for(var n=0;n<d.length;n++){t+=d[n].Count}var s=new Array(t);var v=0;for(var c=0;c<d.length;c++){var w=d[c];for(var n=0;n<w.Count;n++){var l=w.DataCodewords;var f=a.ECCodewordsPerBlock+l;s[v++]=new DataBlock(l,new Array(f))}}var i=s[0].codewords.length;var h=s.length-1;while(h>=0){var C=s[h].codewords.length;if(C==i){break}h--}h++;var u=i-a.ECCodewordsPerBlock;var g=0;for(var n=0;n<u;n++){for(var c=0;c<v;c++){s[c].codewords[n]=r[g++]}}for(var c=h;c<v;c++){s[c].codewords[u]=r[g++]}var k=s[0].codewords.length;for(var n=u;n<k;n++){for(var c=0;c<v;c++){var B=c<h?n:n+1;s[c].codewords[B]=r[g++]}}return s};
//# sourceMappingURL=datablock.js.map
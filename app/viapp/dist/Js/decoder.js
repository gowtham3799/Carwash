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
var Decoder={};Decoder.rsDecoder=new ReedSolomonDecoder(GF256.QR_CODE_FIELD);Decoder.correctErrors=function(r,e){var o=r.length;var a=new Array(o);for(var d=0;d<o;d++){a[d]=r[d]&255}var t=r.length-e;try{Decoder.rsDecoder.decode(a,t)}catch(r){throw r}for(var d=0;d<e;d++){r[d]=a[d]}};Decoder.decode=function(r){var e=new BitMatrixParser(r);var o=e.readVersion();var a=e.readFormatInformation().ErrorCorrectionLevel;var d=e.readCodewords();var t=DataBlock.getDataBlocks(d,o,a);var c=0;for(var v=0;v<t.length;v++){c+=t[v].NumDataCodewords}var n=new Array(c);var D=0;for(var s=0;s<t.length;s++){var w=t[s];var i=w.Codewords;var l=w.NumDataCodewords;Decoder.correctErrors(i,l);for(var v=0;v<l;v++){n[D++]=i[v]}}var f=new QRCodeDataBlockReader(n,o.VersionNumber,a.Bits);return f};
//# sourceMappingURL=decoder.js.map
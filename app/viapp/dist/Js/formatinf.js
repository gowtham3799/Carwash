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
var FORMAT_INFO_MASK_QR=21522;var FORMAT_INFO_DECODE_LOOKUP=new Array(new Array(21522,0),new Array(20773,1),new Array(24188,2),new Array(23371,3),new Array(17913,4),new Array(16590,5),new Array(20375,6),new Array(19104,7),new Array(30660,8),new Array(29427,9),new Array(32170,10),new Array(30877,11),new Array(26159,12),new Array(25368,13),new Array(27713,14),new Array(26998,15),new Array(5769,16),new Array(5054,17),new Array(7399,18),new Array(6608,19),new Array(1890,20),new Array(597,21),new Array(3340,22),new Array(2107,23),new Array(13663,24),new Array(12392,25),new Array(16177,26),new Array(14854,27),new Array(9396,28),new Array(8579,29),new Array(11994,30),new Array(11245,31));var BITS_SET_IN_HALF_BYTE=new Array(0,1,1,2,1,2,2,3,1,2,2,3,2,3,3,4);function FormatInformation(r){this.errorCorrectionLevel=ErrorCorrectionLevel.forBits(r>>3&3);this.dataMask=r&7;this.__defineGetter__("ErrorCorrectionLevel",function(){return this.errorCorrectionLevel});this.__defineGetter__("DataMask",function(){return this.dataMask});this.GetHashCode=function(){return this.errorCorrectionLevel.ordinal()<<3|this.dataMask};this.Equals=function(r){var n=r;return this.errorCorrectionLevel==n.errorCorrectionLevel&&this.dataMask==n.dataMask}}FormatInformation.numBitsDiffering=function(r,n){r^=n;return BITS_SET_IN_HALF_BYTE[r&15]+BITS_SET_IN_HALF_BYTE[URShift(r,4)&15]+BITS_SET_IN_HALF_BYTE[URShift(r,8)&15]+BITS_SET_IN_HALF_BYTE[URShift(r,12)&15]+BITS_SET_IN_HALF_BYTE[URShift(r,16)&15]+BITS_SET_IN_HALF_BYTE[URShift(r,20)&15]+BITS_SET_IN_HALF_BYTE[URShift(r,24)&15]+BITS_SET_IN_HALF_BYTE[URShift(r,28)&15]};FormatInformation.decodeFormatInformation=function(r){var n=FormatInformation.doDecodeFormatInformation(r);if(n!=null){return n}return FormatInformation.doDecodeFormatInformation(r^FORMAT_INFO_MASK_QR)};FormatInformation.doDecodeFormatInformation=function(r){var n=4294967295;var e=0;for(var a=0;a<FORMAT_INFO_DECODE_LOOKUP.length;a++){var t=FORMAT_INFO_DECODE_LOOKUP[a];var o=t[0];if(o==r){return new FormatInformation(t[1])}var i=this.numBitsDiffering(r,o);if(i<n){e=t[1];n=i}}if(n<=3){return new FormatInformation(e)}return null};
//# sourceMappingURL=formatinf.js.map
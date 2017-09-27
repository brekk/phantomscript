'use strict';Object.defineProperty(exports,'__esModule',{value:!0});function _interopDefault(a){return a&&'object'==typeof a&&'default'in a?a['default']:a}var fUtility=require('f-utility'),commander=_interopDefault(require('commander')),fs=_interopDefault(require('fs')),F=_interopDefault(require('fluture')),alterRange=function(a){return 1&a-8206},characterEdge=function(a){return String.fromCharCode(57073*a+8206)},charCodeAt=function(a){return a.charCodeAt()},CONTROL_REGEX=/[^\x00-\x7F]/g,hexCharCode=function(a){return'\\u{'+a.charCodeAt().toString(16)+'}'},EMPTY='',stringWrap=fUtility.curry(function(a,b,c){return fUtility.pipe(fUtility.split(a),fUtility.map(b),fUtility.join(a))(c)}),mapWrap=stringWrap(EMPTY),controlSplit=function(a){return CONTROL_REGEX.test(a)?mapWrap(hexCharCode,a):a},convertToAscii=function(a){return fUtility.pipe(Array.from,fUtility.map(controlSplit),fUtility.join(EMPTY))(a)},magicRange=function(a){return 8206===a||65279===a},match=function(a){return a.match(/.{8}/g)},ninthBit=function(a){return(256|a.charCodeAt()).toString(2).slice(1)},parseBinaryCharCode=function(a){return String.fromCharCode(parseInt(a,2))},fun=Object.freeze({alterRange:alterRange,characterEdge:characterEdge,charCodeAt:charCodeAt,controlSplit:controlSplit,convertToAscii:convertToAscii,hexCharCode:hexCharCode,magicRange:magicRange,mapWrap:mapWrap,match:match,ninthBit:ninthBit,parseBinaryCharCode:parseBinaryCharCode,stringWrap:stringWrap}),K=Object.freeze({EMPTY:EMPTY,CONTROL_REGEX:CONTROL_REGEX}),encode=fUtility.pipe(convertToAscii,mapWrap(ninthBit),mapWrap(characterEdge)),joinNothing=fUtility.join(EMPTY),decode=fUtility.pipe(Array.from,fUtility.map(charCodeAt),fUtility.filter(magicRange),fUtility.map(alterRange),joinNothing,match,fUtility.map(parseBinaryCharCode),joinNothing),test=fUtility.pipe(Array.from,fUtility.map(charCodeAt),fUtility.filter(magicRange),fUtility.length,function(a){if(0<a)throw new Error('Found zero-width characters!');return!1}),cmd=function(){return commander.description('convert javascript to zero-width characters and vice-versa').option('-e, --encode','convert to phantomscript').option('-d, --decode','convert from phantomscript (-e flag takes precedence)').option('-o, --output [file]','write to file').option('--stdin','read from stdin').parse(process.argv)},writeFile=fUtility.curry(function(a,b,c){return new F(function(d,f){fs.writeFile(a,c,b,function(a,b){return a?void d(a):void f(b)})})}),log=function(a){return a&&process.stdout.write(a)},processor=fUtility.curry(function(a,b){var c=b.encode;void 0===c&&(c=!0);var d=b.decode;void 0===d&&(d=!1);var e=b.args,f=b.output,g=b.stdin;void 0===g&&(g=!1);var h=encode;c&&(h=encode),d&&(h=decode);var i=function(a){if(!a)throw new Error('Unable to convert null input');var b=f?writeFile(f,'utf8'):F.of,c=h(a);b(c).fork(log,log)};return g||0===e.length?void a.fork(log,i):void i(e[0])}),exe=function(a){return fUtility.pipe(cmd,processor(a))},fn=fun,constants=K;exports.fn=fn,exports.constants=constants,exports.encode=encode,exports.decode=decode,exports.test=test,exports.exe=exe,exports.processor=processor;

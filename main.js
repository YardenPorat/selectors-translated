!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Translator=t():e.Translator=t()}(self,(function(){return(()=>{"use strict";var e={526:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.tokenize=void 0,t.tokenize=function(e,{isDelimiter:t,isStringDelimiter:n,isWhitespace:s,shouldAddToken:o,createToken:r,getCommentStartType:i,isCommentEnd:a,getUnclosedComment:l,offset:u=0}){const c=[];let d="",p="",f="",h="",m=u,v=0;for(const o of e)v+=o.length,h?(p+=o,o===h&&"\\"!==d&&(y("string"),h="")):f?(p+=o,a(f,o,e,v,d)&&(y(f),f="")):(f=i(o,e,v))?(y(),p+=o):n(o,d)?(y(),p+=o,h=o):t(o,d)?(y(),p+=o,y(o)):s(o)&&!s(d)||!s(o)&&s(d)?(y(),p+=o):p+=o,d=o;function y(e){if(0===p.length)return;const t=m+p.length;e=null!=e?e:p.trim().length?"text":"space",o(e,p)&&(c[c.length]=r(p,e,m,t)),m=t,p=""}return p.length&&(f?y(l(f)):h?y("unclosed-string"):y()),c}},713:(e,t)=>{function n(e,t=0,n=-1,s){if(0===e.length)return"";if(-1===n&&(n=e.length),s)return s.slice(e[t].start,e[n-1].end);{let s="";for(let o=t;o<n;o++)s+=e[o].value;return s}}Object.defineProperty(t,"__esModule",{value:!0}),t.last=t.trimTokens=t.groupTokens=t.getText=t.getUnclosedComment=t.isCommentEnd=t.getMultilineCommentStartType=t.getJSCommentStartType=t.createToken=t.isWhitespace=t.isStringDelimiter=t.isString=t.isComment=void 0,t.isComment=function(e){return"line-comment"===e||"multi-comment"===e||"unclosed-comment"===e},t.isString=function(e){return"string"===e||"unclosed-string"===e},t.isStringDelimiter=e=>"'"===e||'"'===e||"`"===e,t.isWhitespace=e=>" "===e||"\t"===e||"\r"===e||"\n"===e,t.createToken=(e,t,n,s)=>({value:e,type:t,start:n,end:s}),t.getJSCommentStartType=function(e,t,n){return"/"===e&&"/"===t[n]?"line-comment":"/"===e&&"*"===t[n]?"multi-comment":""},t.getMultilineCommentStartType=function(e,t,n){return"/"===e&&"*"===t[n]?"multi-comment":""},t.isCommentEnd=function(e,t,n,s,o){return"line-comment"===e&&"\n"===t||"multi-comment"===e&&"/"===t&&"*"===o},t.getUnclosedComment=function(e){return"line-comment"===e?e:"unclosed-comment"},t.getText=n,t.groupTokens=function(e,t="tokens",s){return{type:t,start:e[0].start,end:e[e.length-1].end,value:n(e,void 0,void 0,s),tokens:e}},t.trimTokens=function(e,t){let n=0,s=e.length;for(let s=0;s<e.length&&t(e[s]);s++)n=s+1;for(let o=e.length-1;o>n&&t(e[o]);o--)s=o;return e.slice(n,s)},t.last=function(e){return e[e.length-1]}},461:function(e,t,n){var s=this&&this.__createBinding||(Object.create?function(e,t,n,s){void 0===s&&(s=n),Object.defineProperty(e,s,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,s){void 0===s&&(s=n),e[s]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||s(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),o(n(921),t),o(n(526),t),o(n(713),t),o(n(277),t)},277:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Seeker=void 0,t.Seeker=class{constructor(e){this.tokens=e,this.index=-1}next(){return this.index++,this.tokens[this.index]||{type:""}}back(){this.index--}peekBack(){return this.tokens[this.index-1]||{type:""}}peek(e=1){return this.tokens[this.index+e]||{type:""}}take(e){if(this.peek().type===e)return this.next()}takeMany(e){const t=[];for(;this.peek().type===e;)t.push(this.next());return t}flatBlock(e,t,n){let s=this.next();if(s.type!==e)return[];const o=[];let r;for(;s=this.next();){if(!s.type)return void(void 0!==r&&(this.index=r-1));if(n&&n(s)&&(r=this.index),s.type===t)return o;o.push(s)}return[]}done(){return this.index>=this.tokens.length-1}run(e,t,n){let s;for(;(s=this.next())&&s.type&&!1!==e(s,t,n,this););return t}}},921:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},231:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.splitCompoundSelectors=t.groupCompoundSelectors=void 0;const s=n(439);t.groupCompoundSelectors=function(e,t){const n=function({splitPseudoElements:e=!0}={}){const t=[];let n,s,o;const r=t=>{if("pseudo_element"===t.type&&!0===e&&(s=void 0),"combinator"===t.type)n.nodes.push(t),s=void 0;else if("comment"!==t.type||function(e){return"comment"===e.type&&""===e.before&&""===e.after}(t))if("type"===t.type||"universal"===t.type||"class"===t.type||"id"===t.type||"attribute"===t.type||"nesting"===t.type||"pseudo_class"===t.type||"pseudo_element"===t.type||"invalid"===t.type||"comment"===t.type)s||(o=void 0,s={type:"compound_selector",start:t.start,end:t.end,before:"",after:"",nodes:[],invalid:!1},n.nodes.push(s)),s.invalid||"comment"===t.type||(o&&(s.invalid="universal"===t.type||"type"===t.type),o=t),s.nodes.push(t),s.end=t.end;else if("selector"===t.type||"compound_selector"===t.type)for(const e of t.nodes)r(e);else n.nodes.push(t),s=void 0;else n.nodes.push(t),s=void 0};return{addSelector(e){n={type:"selector",start:e.start,end:e.end,before:"before"in e?e.before:"",after:"after"in e?e.after:"",nodes:[]},t.push(n),s=void 0},handleNode:r,output:t}}(t);return(0,s.walk)(e,((e,t,o,r)=>{if(0!==r.length||"selector"!==e.type)return n.handleNode(e),s.walk.skipNested;n.addSelector(e)})),"length"in e?n.output:n.output[0]},t.splitCompoundSelectors=function(e){const t=Array.isArray(e)?e:[e],n=[];for(const e of t){const t={...e,nodes:[]};for(const n of e.nodes)"compound_selector"===n.type?t.nodes.push(...n.nodes):t.nodes.push(n);n.push(t)}return"length"in e?n:n[0]}},621:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.compareSpecificity=t.calcSpecificity=void 0;const s=n(439);function o(e){const t=[0,0,0,0];return(0,s.walk)(e,(e=>{switch(e.type){case"type":case"pseudo_element":t[3]++;break;case"class":case"attribute":t[2]++;break;case"pseudo_class":if(r[e.value])return r[e.value](e,t),s.walk.skipNested;t[2]++;break;case"id":t[1]++}return"selector"!==e.type&&"compound_selector"!==e.type?s.walk.skipNested:void 0})),t}t.calcSpecificity=o;const r={not:a,is:a,has:a,where:()=>{},"nth-child":i,"nth-last-child":i,"nth-of-type":i,"nth-last-of-type":i};function i(e,t){t[2]++,a(e,t)}function a(e,t){var n;if(null===(n=e.nodes)||void 0===n?void 0:n.length){let n=[0,0,0,0];for(const t of e.nodes){const e=o(t);n&&1!==l(e,n)||(n=e)}!function(e,t){for(let n=0;n<4;++n)e[n]+=t[n]}(t,n)}}function l(e,t){for(let n=0;n<4;++n){const s=e[n]-t[n];if(s>0)return 1;if(s<0)return-1}return 0}t.compareSpecificity=l},439:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.walk=void 0;const n=Symbol("nest-end");function s(e,t,s={}){var o;const r=Array.isArray(e)?[...e]:[e],i=function(e){const t=[],n=[[]],s={parents:[],indexInSelector:0,nodesInSelector:Array.isArray(e)?e:"nodes"in e?e.nodes:[e],up(){s.parents.pop(),s.indexInSelector=t.shift();const n=s.parents,o=n[n.length-1];s.nodesInSelector=o?o.nodes:e},next(){s.indexInSelector++},insertNested(e){s.parents=[...s.parents,e],n.push(s.parents),t.unshift(s.indexInSelector),s.indexInSelector=0,s.nodesInSelector=e.nodes}};return s}(e);for(;r.length;){const e=r.shift();if(e!==n){if(s.ignoreList&&s.ignoreList.includes(e.type)||s.visitList&&!s.visitList.includes(e.type))i.next();else{let s=null!==(o=t(e,i.indexInSelector,i.nodesInSelector,i.parents))&&void 0!==o?o:-1;if(i.next(),s===1/0)return;if(s>=0){for(;s>0&&r.length;)r.shift()===n&&(s--,i.up());continue}}(a=e)&&"nodes"in a&&(i.insertNested(e),r.unshift(...e.nodes,n))}else i.up()}var a}t.walk=s,s.skipNested=0,s.skipCurrentSelector=1,s.stopAll=1/0},946:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},534:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.trimCombinators=t.ensureSelector=t.isNamespacedAst=t.isNamespacedToken=t.isCombinatorToken=t.createCommentAst=t.createCombinatorAst=t.createEmptyNth=t.createEmptySelector=void 0;const s=n(461);t.createEmptySelector=function(){return{type:"selector",start:-1,end:-1,before:"",after:"",nodes:[]}},t.createEmptyNth=function(){return{type:"nth",start:-1,end:-1,before:"",after:"",nodes:[]}},t.createCombinatorAst=function({value:e,type:t,start:n,end:s}){return{type:"combinator",combinator:t,value:"space"===t?" ":e,start:n,end:s,before:"",after:"space"===t?e.slice(1):"",invalid:!1}},t.createCommentAst=function({value:e,start:t,end:n}){return{type:"comment",value:e,start:t,end:n,before:"",after:""}},t.isCombinatorToken=function(e){return"space"===e.type||"+"===e.type||">"===e.type||"~"===e.type},t.isNamespacedToken=function(e){return"*"===e.type||"text"===e.type},t.isNamespacedAst=function(e){return"universal"===e.type||"type"===e.type},t.ensureSelector=function(e,t){let n=(0,s.last)(e);return n||(n={type:"selector",start:-1,end:-1,before:"",after:"",nodes:[]},n.start=t.start,e.push(n)),n},t.trimCombinators=function(e){const t=e.nodes,n=t[0],o=(0,s.last)(t);if("combinator"===(null==n?void 0:n.type)&&"space"===n.combinator&&(e.nodes.shift(),e.before+=n.before+n.value+n.after),o!==n){let n,s=t.length-1,r=o;for(;r&&"comment"===r.type||"combinator"===r.type&&"space"===r.combinator;)"combinator"===r.type?n?(e.nodes.splice(s,1),n.before+=r.before+r.value+r.after,n.start=r.start):(e.nodes.pop(),e.after+=r.before+r.value+r.after):n=r,r=t[--s]}}},774:function(e,t,n){var s=this&&this.__createBinding||(Object.create?function(e,t,n,s){void 0===s&&(s=n),Object.defineProperty(e,s,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,s){void 0===s&&(s=n),e[s]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||s(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),t.compareSpecificity=t.calcSpecificity=t.splitCompoundSelectors=t.groupCompoundSelectors=t.walk=t.stringifySelectorAst=t.parseCssSelector=void 0;var r=n(742);Object.defineProperty(t,"parseCssSelector",{enumerable:!0,get:function(){return r.parseCssSelector}}),o(n(946),t);var i=n(380);Object.defineProperty(t,"stringifySelectorAst",{enumerable:!0,get:function(){return i.stringifySelectorAst}});var a=n(439);Object.defineProperty(t,"walk",{enumerable:!0,get:function(){return a.walk}});var l=n(231);Object.defineProperty(t,"groupCompoundSelectors",{enumerable:!0,get:function(){return l.groupCompoundSelectors}}),Object.defineProperty(t,"splitCompoundSelectors",{enumerable:!0,get:function(){return l.splitCompoundSelectors}});var u=n(621);Object.defineProperty(t,"calcSpecificity",{enumerable:!0,get:function(){return u.calcSpecificity}}),Object.defineProperty(t,"compareSpecificity",{enumerable:!0,get:function(){return u.compareSpecificity}})},780:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.NthParser=void 0;const s=n(534),o=n(461);class r{constructor(e,t){this.selectorNode=e,this.s=t,this.state="step",this.standaloneDash=!1,this.ast=e.nodes}static isNthPseudoClass(e){return"nth-child"===e||"nth-last-child"===e||"nth-of-type"===e||"nth-last-of-type"===e}handleToken(e){const t=e.type;if("text"===t||"+"===t)switch(this.state){case"step":{const n="+"===t&&"text"===this.s.peek().type?this.s.next():void 0;return this.breakFirstChunk({type:"text",value:e.value+((null==n?void 0:n.value)||""),start:e.start,end:(null==n?void 0:n.end)||e.end}),!0}case"dash":{const n="+"===t&&"text"===this.s.peek().type?this.s.next():void 0;return this.pushDash({type:"text",value:e.value+((null==n?void 0:n.value)||""),start:e.start,end:(null==n?void 0:n.end)||e.end}),!0}case"offset":{const n="+"===t&&"text"===this.s.peek().type?this.s.next():void 0;return this.pushOffset({type:"text",value:e.value+((null==n?void 0:n.value)||""),start:e.start,end:(null==n?void 0:n.end)||e.end}),!0}case"of":return this.pushOf(e),!1}else{if("space"===t){const t=(0,o.last)(this.ast);return t?(t.after+=e.value,t.end+=e.value.length):this.selectorNode.before+=e.value,!0}if((0,o.isComment)(t))return this.ast.push((0,s.createCommentAst)(e)),!0}return this.s.back(),!1}breakFirstChunk(e){const t=e.value,n=t.match(r.oddEvenStep);if(n){const t=!!n[1];return void this.pushStep(e,t)}const s=t.match(r.nthStartExp);if(s){const t=s[1],n=s[2];n||t.match(/[nN]+$/)||!t.match(r.validOffset)?"-"===n?(this.pushStep({type:"text",value:t,start:e.start,end:e.start+t.length}),this.pushDash({type:"text",value:"-",start:e.end-1,end:e.end})):n&&!n.match(/-\d+/)?this.pushStep(e):(this.pushStep({type:"text",value:t,start:e.start,end:e.start+t.length}),n&&this.pushOffset({type:"text",value:n,start:e.end-n.length,end:e.end})):this.pushOffset(e)}else this.pushStep(e)}pushStep(e,t){const n=e.value,s={type:"nth_step",value:n,before:"",after:"",start:e.start,end:e.end};(t=void 0!==t?t:!n.match(r.validStep))&&(s.invalid=!0),this.state="dash",this.ast.push(s)}pushDash(e){const t=e.value;"+"===t||"-"===t?(this.ast.push({type:"nth_dash",value:e.value,start:e.start,end:e.end,before:"",after:""}),this.standaloneDash=!0,this.state="offset"):this.pushOffset(e)}pushOffset(e){if("of"===e.value)this.pushOf(e);else{const t=e.value,n={type:"nth_offset",value:t,before:"",after:"",start:e.start,end:e.end};(!t.match(r.validOffset)||this.standaloneDash&&t.match(/^[-+]/))&&(n.invalid=!0),this.state="of",this.ast.push(n)}}pushOf(e){const t={type:"nth_of",value:e.value,before:"",after:"",start:e.start,end:e.end};"of"!==e.value&&(t.invalid=!0),this.ast.push(t),this.state="selector"}}t.NthParser=r,r.oddEvenStep=/([-+]?)(odd|even)/i,r.validStep=/^[-+]?\d*n$/i,r.validOffset=/^[-+]?\d+$/,r.nthStartExp=/([-+]?\d*[nN]?)(.*)/},742:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.parseCssSelector=void 0;const s=n(467),o=n(780),r=n(534),i=n(461);function a(e,t,n,s){var l,u,c,d,p,f,h,m,v,y,b,g,k,S,C,$,_,x,w;let T;const j=(0,r.ensureSelector)(t,e),O=j.nodes;if("."===e.type){const t=s.takeMany("multi-comment").map(r.createCommentAst),n=s.take("text");O.push({type:"class",value:null!==(l=null==n?void 0:n.value)&&void 0!==l?l:"",start:e.start,end:null!==(d=null!==(u=null==n?void 0:n.end)&&void 0!==u?u:null===(c=(0,i.last)(t))||void 0===c?void 0:c.end)&&void 0!==d?d:e.end,dotComments:t})}else if(":"===e.type){const t=s.takeMany("multi-comment").map(r.createCommentAst),n=s.take(":")||e;if(e===n){const o=s.take("text"),r=o||(0,i.last)(t)||n;O.push({type:"pseudo_class",value:null!==(p=null==o?void 0:o.value)&&void 0!==p?p:"",start:e.start,end:null!==(f=null==o?void 0:o.end)&&void 0!==f?f:r.end,colonComments:t})}else{const o=s.takeMany("multi-comment").map(r.createCommentAst),a=s.take("text"),l=a||(0,i.last)(o)||n;O.push({type:"pseudo_element",value:null!==(h=null==a?void 0:a.value)&&void 0!==h?h:"",start:e.start,end:null!==(m=null==a?void 0:a.end)&&void 0!==m?m:l.end,colonComments:{first:t,second:o}})}}else if("["===e.type){const t=s.run(((e,t)=>(t.push(e),"]"!==e.type)),[e],n);"]"===(null===(v=(0,i.last)(t))||void 0===v?void 0:v.type)?O.push({type:"attribute",value:t.length>2?(0,i.getText)(t,1,t.length-1,n):"",start:e.start,end:null!==(b=null===(y=(0,i.last)(t))||void 0===y?void 0:y.end)&&void 0!==b?b:e.end}):O.push({type:"invalid",value:(0,i.getText)(t,void 0,void 0,n),start:e.start,end:null!==(k=null===(g=(0,i.last)(t))||void 0===g?void 0:g.end)&&void 0!==k?k:e.end})}else if((0,r.isCombinatorToken)(e)){let t=(0,r.createCombinatorAst)(e),n=t;O.push(t);let o="space"===t.combinator?O.length-1:-1,a=s.next();for(;a;){if((0,r.isCombinatorToken)(a))if("space"===a.type)n.after+=a.value,n.end=a.end;else if(n===t&&"space"===n.combinator){const e=(0,r.createCombinatorAst)(a);t.combinator=e.combinator,t.before+=t.after+t.value+e.before,t.after=e.after,t.value=e.value,t.end=e.end,o=-1}else if(-1!==o){const e=O[o],s=e.before+e.value+e.after;if(0===o)j.before+=s;else{const t=O[o+1];"comment"===(null==t?void 0:t.type)&&(t.before+=s,t.start=e.start)}O.splice(o,1),o=-1,t=(0,r.createCombinatorAst)(a),n=t,O.push(t)}else t=(0,r.createCombinatorAst)(a),t.invalid=!0,n=t,O.push(t);else{if(!(0,i.isComment)(a.type))break;n=(0,r.createCommentAst)(a),O.push(n)}a=s.next()}a&&!(0,r.isCombinatorToken)(a)&&s.back()}else if("text"===e.type)O.push({type:"type",value:e.value,start:e.start,end:e.end});else if("#"===e.type)T=s.take("text"),O.push({type:"id",value:null!==(S=null==T?void 0:T.value)&&void 0!==S?S:"",start:e.start,end:null!==(C=null==T?void 0:T.end)&&void 0!==C?C:e.end});else if("*"===e.type)O.push({type:"universal",value:"*",start:e.start,end:e.end});else if("|"===e.type){let t,n;const o=[];for(let e=O.length-1;e>=0;--e){const s=O[e];if((0,r.isNamespacedAst)(s)){s.namespace?n=s:t=s;break}if("comment"!==s.type||""!==s.before||""!==s.after){n=s;break}o.unshift(s)}let a,l=1;const u=[];for(;;){const e=s.peek(l);if(!(0,i.isComment)(e.type)){if((0,r.isNamespacedToken)(e)){a=e;break}break}u.push(e),l++}const c=!n,d=!!a,p="*"===(null==a?void 0:a.type)?"universal":"type";let f="";c?O.splice(O.length-o.length,o.length):f="namespace",d?(u.forEach((()=>s.next())),s.next()):f=f?"namespace,target":"target";const h=t||{type:p,value:"",start:e.start,end:(null==a?void 0:a.end)||e.end};h.type=p,h.namespace={value:(null==t?void 0:t.value)||"",beforeComments:c?o:[],afterComments:d?u.map(r.createCommentAst):[]},h.value=(null==a?void 0:a.value)||"",h.end=(null==a?void 0:a.end)||e.end,f&&(h.namespace.invalid=f),t||O.push(h)}else if("("===e.type){const t=(0,i.last)(O),l=[];if(t&&"pseudo_class"===t.type&&o.NthParser.isNthPseudoClass(t.value)&&")"!==s.peek().type){const e=(0,r.createEmptyNth)();e.start=s.peek().start,l.push(e);const t=new o.NthParser(e,s);if(s.run((e=>"selector"===t.state?(s.back(),!1):t.handleToken(e)),e,n),")"!==s.peek().type){e.end=(null===($=(0,i.last)(e.nodes))||void 0===$?void 0:$.end)||e.start;const t=(0,r.createEmptySelector)();t.start=e.end,l.push(t)}}s.run(((e,t)=>{var o,r;if(")"===e.type){const e=(0,i.last)(t);return e&&(e.end=null!==(r=null===(o=(0,i.last)(e.nodes))||void 0===o?void 0:o.end)&&void 0!==r?r:e.start),!1}return a(e,t,n,s)}),l,n);const u=s.peek(0);if(!t||"nodes"in t||"invalid"===t.type||"combinator"===t.type||"comment"===t.type||"nth_step"===t.type||"nth_dash"===t.type||"nth_offset"===t.type||"nth_of"===t.type||")"!==u.type)O.push({type:"invalid",value:(0,i.getText)([e,u],void 0,void 0,n),start:e.start,end:null!==(_=null==u?void 0:u.end)&&void 0!==_?_:s.peekBack().end});else{if(l.length){const e=(0,i.last)(l);(0,r.trimCombinators)(e)}t.nodes=l,t.end=u.end}}else if((0,i.isComment)(e.type))O.push((0,r.createCommentAst)(e));else if(","===e.type){const n=(0,i.last)(t);n.end=e.start,(0,r.trimCombinators)(n);const o=(0,r.createEmptySelector)();s.done()?(o.start=e.end,o.end=e.end):o.start=s.peek().start,t.push(o)}else"&"===e.type?O.push({type:"nesting",value:"&",start:e.start,end:e.end}):O.push({type:"invalid",value:e.value,start:e.start,end:e.end});s.done()&&(j.end=null!==(w=null===(x=(0,i.last)(j.nodes))||void 0===x?void 0:x.end)&&void 0!==w?w:j.start,(0,r.trimCombinators)(j))}t.parseCssSelector=function(e,t={}){return function(e,t){return new i.Seeker(t).run(a,[],e)}(e,(0,s.tokenizeSelector)(e,t))}},380:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.stringifySelectorAst=void 0;const s=n(780);t.stringifySelectorAst=function(e){return"length"in e?i(e):r(e)};const o={id:e=>`#${e.value}${a(e)}`,class:e=>`.${e.dotComments.map(r).join("")}${e.value}${a(e)}`,type:e=>`${l(e)}${e.value}${a(e)}`,combinator:e=>`${e.before}${e.value}${e.after}`,attribute:e=>`[${e.value}]${a(e)}`,pseudo_class:e=>`:${e.colonComments.map(r).join("")}${e.value}${a(e)}`,pseudo_element:e=>`:${e.colonComments.first.map(r).join("")}:${e.colonComments.second.map(r).join("")}${e.value}${a(e)}`,comment:({before:e,value:t,after:n})=>`${e}${t}${n}`,universal:e=>`${l(e)}${e.value}${a(e)}`,nesting:e=>`${e.value}${a(e)}`,selector:e=>`${e.before}${e.nodes.map(r).join("")}${e.after}`,compound_selector:e=>`${e.before}${e.nodes.map(r).join("")}${e.after}`,invalid:e=>e.value,nth:e=>`${e.before}${e.nodes.map(r).join("")}${e.after}`,nth_step:({before:e,value:t,after:n})=>`${e}${t}${n}`,nth_dash:({before:e,value:t,after:n})=>`${e}${t}${n}`,nth_offset:({before:e,value:t,after:n})=>`${e}${t}${n}`,nth_of:({before:e,value:t,after:n})=>`${e}${t}${n}`};function r(e){var t,n;return null!==(n=null===(t=o[e.type])||void 0===t?void 0:t.call(o,e))&&void 0!==n?n:""}function i(e){const t=[];for(const n of e)t.push(r(n));return t.join(",")}function a(e){var t;if("nodes"in e){if(null===(t=e.nodes)||void 0===t?void 0:t.length){if("pseudo_class"===e.type&&s.NthParser.isNthPseudoClass(e.value)){const[t,...n]=e.nodes;return`(${r(t)}${i(n)})`}return`(${i(e.nodes)})`}return"()"}return""}function l({namespace:e}){let t="";if(e){t+=e.value;for(const n of e.beforeComments)t+=o.comment(n);t+="|";for(const n of e.afterComments)t+=o.comment(n)}return t}},467:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.tokenizeSelector=void 0;const s=n(461);t.tokenizeSelector=function(e,t={}){return(0,s.tokenize)(e,{isDelimiter:o,isStringDelimiter:(e,t)=>"\\"!==t&&(0,s.isStringDelimiter)(e),isWhitespace:s.isWhitespace,shouldAddToken:()=>!0,createToken:s.createToken,getCommentStartType:s.getMultilineCommentStartType,isCommentEnd:s.isCommentEnd,getUnclosedComment:s.getUnclosedComment,offset:t.offset})};const o=(e,t)=>"\\"!==t&&("["===e||"]"===e||"("===e||")"===e||","===e||"*"===e||"|"===e||":"===e||"."===e||"#"===e||">"===e||"~"===e||"+"===e||"{"===e||"}"===e||"&"===e)}},t={};function n(s){var o=t[s];if(void 0!==o)return o.exports;var r=t[s]={exports:{}};return e[s].call(r.exports,r,r.exports,n),r.exports}n.d=(e,t)=>{for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var s={};return(()=>{n.r(s),n.d(s,{App:()=>m});var e=n(774);const t="exist",o="error",r="full",i="equal",a="empty";function l(e){if(""===e.trim())return{type:o,error:`Empty attribute selector: '[${e}]'`};const n=e.indexOf("=");if(-1===n)return{type:t,action:t,name:e};const s=e.slice(0,n),l=e.slice(n+1),{value:u,casing:c}=function(e){if(e.startsWith('"')){const[t,n,s]=e.split('"');return{value:n||a,casing:!!s}}const[t,n]=e.split(" ");return{value:t,casing:!!n}}(l);if(0===s.length||!u||l.endsWith(":"))return{type:o,error:`Invalid attribute selector: '[${e}]'`};const d=s.at(-1),{action:p,descriptor:f}=function(e){return"^"===e?{action:"start",descriptor:e=>`whose value starts with '${e}'`}:"$"===e?{action:"end",descriptor:e=>`whose value ends with '${e}'`}:"|"===e?{action:"hyphen-list",descriptor:e=>`whose value '${e}' is included in a hyphen separated list`}:"~"===e?{action:"space-list",descriptor:e=>`whose value '${e}' is included in a space separated list`}:"*"===e?{action:"contain",descriptor:e=>`whose value contains '${e}'`}:{action:i,descriptor:e=>`whose value is ${e===a?a:`'${e}'`}`}}(d),h=p===i?s:s.slice(0,-1);return{type:r,action:p,name:h,value:u,casing:c,descriptor:f}}const u={before:"The 'before' pseudo-element of",after:"The 'after' pseudo-element of","first-line":"The first line of","first-letter":"The first letter of",placeholder:"The placeholder of",marker:"The marker (numbering) of",backdrop:"The backdrop of",selection:"The highlighted selection of"};function c(e){return 2===e.length?`${e[0]} and ${e[1]}`:e.length>2?`${e.slice(0,-1).join(", ")} and ${e.at(-1)}`:e[0]}const d={hover:"hovered",active:"active",focus:"focused",visited:"visited",empty:"empty",blank:"blank",target:"targeted",checked:"checked",indeterminate:"indeterminate",disabled:"disabled",optional:"optional",valid:"valid",invalid:"invalid",required:"required","read-only":"read-only","read-write":"read-write","in-range":"in-range","out-of-range":"out-of-range",lang:"language","last-child":"the last child of its parent","first-child":"the first child of its parent","only-child":"the only child of its parent","nth-child":"the nth child (formula) of its parent","nth-last-child":"the nth (formula) child from the end of its parent","last-of-type":"the last of its type in its parent","first-of-type":"the first of its type in its parent","only-of-type":"the only of its type in its parent","nth-of-type":"the nth (formula) of its type in its parent","nth-last-of-type":"the nth (formula) of its type in its parent, from the end"};function p(e){const t=e.map((({name:e,value:t})=>t?function({name:e,value:t}){return`${d[e]} is '${t}'`}({name:e,value:t}):d[e]?d[e]:`when it is '${e}' (unknown pseudo class)`));return t.length>1?c(t):t[0]}function f(e){var t,n;const s={attributes:[],err:"",pseudoElement:void 0,classes:new Set,pseudoClasses:[],element:"",id:"",hasUniversal:!1};for(const r of e.nodes)if("pseudo_element"===r.type)s.pseudoElement=r.value;else if("class"===r.type){if(""===r.value){s.err="You specified an empty class";break}s.classes.add(r.value)}else if("type"===r.type)s.element=r.value;else if("id"===r.type){if(s.id){s.err="An element cannot have two ids";break}s.id=r.value}else if("attribute"===r.type){const e=l(r.value);if(e.type===o){s.err=e.error;break}s.attributes.push(e)}else if("universal"===r.type)s.hasUniversal=!0;else if("pseudo_class"===r.type){if(!r.value){s.err="You specified an empty pseudo class";break}if(Object.keys(u).includes(r.value)){s.err=`You specified a pseudo element (${r.value}) as a pseudo class`;break}if("type"==(null===(t=r.nodes)||void 0===t?void 0:t[0].nodes[0].type)){s.pseudoClasses.push({name:r.value,value:null===(n=r.nodes)||void 0===n?void 0:n[0].nodes[0].value});continue}s.pseudoClasses.push({name:r.value,value:""})}return s}function h(e){return!["ul"].includes(e)&&(["li"].includes(e)||["a","e","o","i","u"].includes(e[0]))}class m{constructor(){this.input=document.querySelector("#selector-input"),this.result=document.querySelector("#result"),this.initiate=()=>{this.input.value?this.translate(this.input.value):this.clear()},this.fillInputFromURL(),this.input.addEventListener("input",this.initiate)}translate(n){const s=function(n){const s=[],o=(0,e.parseCssSelector)(n),i=(0,e.groupCompoundSelectors)(o),a=[];for(const e of i){const n=[];for(const o of e.nodes.reverse()){if(s.length)break;if("compound_selector"===o.type){const{classes:i,hasUniversal:a,element:d,id:m,attributes:v,pseudoClasses:y,pseudoElement:b,err:g}=f(o);if(g&&s.push(g),b&&n.push(u[b]),d?(h(d)?n.push("an"):n.push("a"),n.push(`'<${d}>' element`)):a||!d&&1===e.nodes.length&&m.length+i.size===0?n.push("any element"):b||n.push("an element"),m.length&&n.push(`with the id of '${m}'`),i.size&&n.push("with "+((l=[...i].map((e=>`'${e}'`))).length>1?`classes ${c(l)}`:`a class of ${l[0]}`)),y.length&&n.push(`when its ${p(y)}`),v.length)for(const e of v){const{type:s}=e;if(s===t)n.push(`with an attribute of '${e.name}'`);else if(s===r){const{value:t,descriptor:s,name:o,casing:r}=e;n.push(`with an attribute of '${o}'`),s&&n.push(s(t)),r&&n.push("(case insensitive)")}}}"combinator"===o.type&&(">"===o.value?n.push("directly within"):"+"===o.value?n.push("directly adjacent to"):"~"===o.value?n.push("after a sibling which is"):n.push("within"))}a.push(n.join(" "))}var l,d;return s.length?`Error: ${s[0]}`:(null==(d=c(a))?void 0:d.length)?d.charAt(0).toUpperCase()+d.slice(1):d}(n),o=this.getTags(s);this.result.innerHTML=o,this.updateQueryParam(n)}updateQueryParam(e){const t=new URLSearchParams(window.location.search);e?t.set("s",encodeURIComponent(e)):t.delete("s"),history.pushState(null,"","?"+t.toString())}clear(){this.input.value="",this.result.innerText="",this.updateQueryParam("")}fillInputFromURL(){const e=new URLSearchParams(window.location.search);if(e.has("s")){const t=decodeURIComponent(e.get("s"));this.input.value=t,this.translate(t)}}getTags(e){const t=[],n=e.replaceAll("<","&lt;").replaceAll(">","&gt;");for(const[e,s]of n.split("'").entries())t.push(e%2?`<mark>${s}</mark>`:s);return t.join("")}}window.App=new m})(),s})()}));
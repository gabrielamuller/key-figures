!function(){var e,t={250:function(){wp.i18n.setLocaleData({"":{}},"avidly-key-figures")},502:function(e,t,r){"use strict";var n=window.wp.blocks,i=(r(250),window.wp.element),o=(window.wp.i18n,window.wp.blockEditor),s=window.wp.components,a=JSON.parse('{"apiVersion":2,"name":"avidly/key-figures","version":"0.1.0","title":"Avidly Key Figures","category":"widgets","icon":"smiley","description":"An animated number counter block.","attributes":{"content":{"type":"array","source":"children","selector":"p"}},"supports":{"html":false,"align":["wide","full"],"anchor":true,"color":true},"textdomain":"avidly-key-figures","editorScript":"file:./build/index.js","editorStyle":"file:./build/index.css","script":"file:./build/app.js","style":"file:./build/style-index.css"}');(0,n.registerBlockType)(a,{edit:function(e){const{attributes:{number:t,suffix:r},setAttributes:n,className:a}=e;return(0,o.useBlockProps)(),(0,i.createElement)("div",(0,o.useBlockProps)(),(0,i.createElement)(s.TextControl,{label:"Number",value:t,onChange:e=>{n({number:void 0===e?"":e})}}),(0,i.createElement)(s.TextControl,{label:"Text",value:r,onChange:e=>{n({suffix:void 0===e?"":e})}}))},save:function(e){return(0,i.createElement)("div",o.useBlockProps.save(),(0,i.createElement)("span",{className:"number","data-value":e.attributes.number},"0"),(0,i.createElement)("span",{className:"suffix",akhi:""},e.attributes.suffix))}})}},r={};function n(e){var i=r[e];if(void 0!==i)return i.exports;var o=r[e]={exports:{}};return t[e](o,o.exports,n),o.exports}n.m=t,e=[],n.O=function(t,r,i,o){if(!r){var s=1/0;for(c=0;c<e.length;c++){r=e[c][0],i=e[c][1],o=e[c][2];for(var a=!0,u=0;u<r.length;u++)(!1&o||s>=o)&&Object.keys(n.O).every((function(e){return n.O[e](r[u])}))?r.splice(u--,1):(a=!1,o<s&&(s=o));if(a){e.splice(c--,1);var l=i();void 0!==l&&(t=l)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[r,i,o]},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={826:0,46:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var i,o,s=r[0],a=r[1],u=r[2],l=0;if(s.some((function(t){return 0!==e[t]}))){for(i in a)n.o(a,i)&&(n.m[i]=a[i]);if(u)var c=u(n)}for(t&&t(r);l<s.length;l++)o=s[l],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(c)},r=self.webpackChunkavidly_key_figures=self.webpackChunkavidly_key_figures||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var i=n.O(void 0,[46],(function(){return n(502)}));i=n.O(i)}();
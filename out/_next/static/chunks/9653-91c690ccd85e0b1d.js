(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9653],{9653:function(e,t,n){"use strict";n.d(t,{qY:function(){return c}});var o=n(7294),a=n(2446);n(640);var r=a.jU?o.useLayoutEffect:o.useEffect;function l(e,t=[]){let n=(0,o.useRef)(e);return r(()=>{n.current=e}),(0,o.useCallback)((...e)=>{var t;return null==(t=n.current)?void 0:t.call(n,...e)},t)}function c(e={}){let{onClose:t,onOpen:n,isOpen:r,id:c}=e,s=l(n),u=l(t),[i,p]=(0,o.useState)(e.defaultIsOpen||!1),[d,f]=function(e,t){let n=void 0!==e;return[n,n&&void 0!==e?e:t]}(r,i),m=function(e,t){let n=(0,o.useId)();return(0,o.useMemo)(()=>e||[t,n].filter(Boolean).join("-"),[e,t,n])}(c,"disclosure"),y=(0,o.useCallback)(()=>{d||p(!1),null==u||u()},[d,u]),g=(0,o.useCallback)(()=>{d||p(!0),null==s||s()},[d,s]),b=(0,o.useCallback)(()=>{(f?y:g)()},[f,g,y]);return{isOpen:!!f,onOpen:g,onClose:y,onToggle:b,isControlled:d,getButtonProps:(e={})=>({...e,"aria-expanded":f,"aria-controls":m,onClick:(0,a.v0)(e.onClick,b)}),getDisclosureProps:(e={})=>({...e,hidden:!f,id:m})}}},640:function(e,t,n){"use strict";var o=n(1742),a={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,r,l,c,s,u,i,p,d=!1;t||(t={}),l=t.debug||!1;try{if(s=o(),u=document.createRange(),i=document.getSelection(),(p=document.createElement("span")).textContent=e,p.style.all="unset",p.style.position="fixed",p.style.top=0,p.style.clip="rect(0, 0, 0, 0)",p.style.whiteSpace="pre",p.style.webkitUserSelect="text",p.style.MozUserSelect="text",p.style.msUserSelect="text",p.style.userSelect="text",p.addEventListener("copy",function(n){if(n.stopPropagation(),t.format){if(n.preventDefault(),void 0===n.clipboardData){l&&console.warn("unable to use e.clipboardData"),l&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var o=a[t.format]||a.default;window.clipboardData.setData(o,e)}else n.clipboardData.clearData(),n.clipboardData.setData(t.format,e)}t.onCopy&&(n.preventDefault(),t.onCopy(n.clipboardData))}),document.body.appendChild(p),u.selectNodeContents(p),i.addRange(u),!document.execCommand("copy"))throw Error("copy command was unsuccessful");d=!0}catch(m){l&&console.error("unable to copy using execCommand: ",m),l&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),d=!0}catch(f){l&&console.error("unable to copy using clipboardData: ",f),l&&console.error("falling back to prompt"),n="message"in t?t.message:"Copy to clipboard: #{key}, Enter",r=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C",c=n.replace(/#{\s*key\s*}/g,r),window.prompt(c,e)}}finally{i&&("function"==typeof i.removeRange?i.removeRange(u):i.removeAllRanges()),p&&document.body.removeChild(p),s()}return d}},1742:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],o=0;o<e.rangeCount;o++)n.push(e.getRangeAt(o));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach(function(t){e.addRange(t)}),t&&t.focus()}}}}]);
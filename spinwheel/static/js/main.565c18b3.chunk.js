(this.webpackJsonpspinwheel=this.webpackJsonpspinwheel||[]).push([[0],[,,,,,,,function(e){e.exports=JSON.parse('[{"id":0,"text":"Red","color":"red"},{"id":1,"text":"Orange","color":"orange"},{"id":2,"text":"Yellow","color":"yellow"},{"id":3,"text":"Green","color":"green"},{"id":4,"text":"Indigo","color":"indigo"},{"id":5,"text":"Violet","color":"violet"},{"id":6,"text":"White","color":"white"},{"id":7,"text":"Teal","color":"teal"}]')},,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),c=n(6),a=n.n(c),i=(n(14),n(1)),l=n(2),u=n(8);function d(e){var t=Object(l.b)("dataStore"),n=Object(i.a)(t,2),c=n[0],a=n[1],d=Object(l.b)("speedStore"),s=Object(i.a)(d,2),p=s[0],h=s[1],m=c,f=p;return Object(r.useEffect)((function(){!function e(){f>0&&(document.getElementById("wheel").prepend(document.getElementById("wheel").lastElementChild),Object(u.a)(document.getElementsByClassName("whoption")).forEach((function(e){e.style.transitionDuration=f+"ms"})),f=Math.ceil(f+f/10),m.unshift(m.pop()),f<800?setTimeout(e,f):setTimeout((function(){a(m),h(0)}),f))}()})),o.a.createElement("wheel",{id:"wheel",style:{transitionDuration:"".concat(f,"ms")}},m.map((function(e){return o.a.createElement("whoption",{className:"whoption",key:e.id,style:{backgroundColor:e.color,transitionDuration:"".concat(f,"ms")}},o.a.createElement("p",null,e.text))})))}function s(){var e=Object(l.b)("speedStore"),t=Object(i.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(0),u=Object(i.a)(a,2),d=(u[0],u[1]),s=Object(r.useRef)(0),p=function(){0===s.current||(s.current>0?(s.current--,d((function(e){return e-1}))):s.current<0&&(s.current++,d((function(e){return e+1})))),s.current<=1&&s.current>=-1&&(s.current=0,d(0))},h=function(e){Math.floor(s.current+e.deltaY/100)<-100?(s.current=-100,d(s.current)):Math.floor(s.current+e.deltaY/100)>100?(s.current=100,d(s.current)):(s.current=Math.floor(s.current+e.deltaY/100),console.log("".concat(s.current," - ").concat(e.deltaY)),d(s.current))};return Object(r.useEffect)((function(){var e=setInterval(p,100);return window.addEventListener("wheel",h),function(){clearInterval(e),window.removeEventListener("wheel",h)}}),[n]),o.a.createElement("div",{id:"meterBox"},o.a.createElement("button",{onClick:function(){0!==s.current&&(c(1e3-10*Math.abs(s.current)+Math.floor(4*Math.random())),s.current=0,d(0))}},"Spin!"),o.a.createElement("div",{style:{border:"1px solid black",width:"200px",height:"20px",background:"white",display:"flex",justifyContent:"center"}},o.a.createElement("span",{style:{background:"red",paddingLeft:s.current>0?s.current+"px":"0px",marginLeft:s.current>0?s.current+"px":"0px",paddingRight:s.current<0?-s.current+"px":"0px",marginRight:s.current<0?-s.current+"px":"0px",height:"20px",display:"block"}})))}n(15);var p=n(7);Object(l.a)("speedStore",0),Object(l.a)("dataStore",p);var h=function(){var e=Object(l.b)("speedStore"),t=Object(i.a)(e,1)[0],n=Object(l.b)("dataStore"),r=Object(i.a)(n,1)[0];return o.a.createElement("div",{className:"App"},o.a.createElement(s,null),o.a.createElement(d,null),o.a.createElement("div",{id:"winBox"},0===t?"Winner: ".concat(r[3].color,"!"):""))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.565c18b3.chunk.js.map
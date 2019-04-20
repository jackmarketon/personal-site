(window.webpackJsonp=window.webpackJsonp||[]).push([["f496"],{"1TCz":function(e,t,n){"use strict";var r=n("5Uuq"),o=n("KI45");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n("Avpf")),i=r(n("8Bbg")),s=o(n("Mj6V")),u=o(n("nOHt")),l=o(n("q1tI")),c=n("vOnD"),p=o(n("kyUL")),f=o(n("9xzA"));u.default.events.on("routeChangeStart",()=>s.default.start()),u.default.events.on("routeChangeComplete",()=>s.default.done()),u.default.events.on("routeChangeError",()=>s.default.done());t.default=class extends i.default{static async getInitialProps({Component:e,ctx:t}){let n={};return e.getInitialProps&&(n=await e.getInitialProps(t)),{pageProps:n}}render(){const{Component:e,pageProps:t}=this.props;return l.default.createElement(c.ThemeProvider,{theme:(0,a.default)({},f.default)},l.default.createElement(i.Container,null,l.default.createElement(p.default,null),l.default.createElement(e,t)))}}},"4mXO":function(e,t,n){e.exports=n("7TPF")},"7TPF":function(e,t,n){n("AUvm"),e.exports=n("WEpk").Object.getOwnPropertySymbols},"8Bbg":function(e,t,n){e.exports=n("B5Ud")},"9xzA":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={heroImage:{default:"/static/banner_image.jpg",recipe:"/static/banner_image_recipe.jpg",street:"/static/banner_image_street.jpg",blog:"/static/banner_image_blog.jpg",sd:"/static/banner_image_sd.jpg"},font:{fontSize:{root:"14px"},fontFamily:{sansSerif:'"Roboto", "Helvetica Neue", Helvertica, Arial, sans-serif',serif:'"Bilbo Swash Caps", Times, "Times New Roman", serif',monoSpaced:'"Source Code Pro", Consolas, monaco, monospace'}},color:{background:"#FEFFFE",white:"#C5C6C7",black:"#0B0C10",primary:"#66FCF1",secondary:"#1F2833",ternary:"#45A29E"}}},Avpf:function(e,t,n){var r=n("Jo+v"),o=n("4mXO"),a=n("pLtp"),i=n("xHqa");e.exports=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},s=a(n);"function"==typeof o&&(s=s.concat(o(n).filter(function(e){return r(n,e).enumerable}))),s.forEach(function(t){i(e,t,n[t])})}return e}},B5Ud:function(e,t,n){"use strict";var r=n("KI45"),o=r(n("eVuF")),a=r(n("UXZV")),i=r(n("/HRN")),s=r(n("WaGi")),u=r(n("ZDA2")),l=r(n("/+P4")),c=r(n("N9n2")),p=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},f=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var d=p(n("q1tI")),m=f(n("17x9")),g=n("Bu4q"),h=n("nOHt"),v=function(e){function t(){return(0,i.default)(this,t),(0,u.default)(this,(0,l.default)(t).apply(this,arguments))}return(0,c.default)(t,e),(0,s.default)(t,[{key:"getChildContext",value:function(){return{router:h.makePublicRouterInstance(this.props.router)}}},{key:"componentDidCatch",value:function(e){throw e}},{key:"render",value:function(){var e=this.props,t=e.router,n=e.Component,r=e.pageProps,o=k(t);return d.default.createElement(b,null,d.default.createElement(n,(0,a.default)({},r,{url:o})))}}],[{key:"getInitialProps",value:function(e){var t=e.Component,n=(e.router,e.ctx);try{return o.default.resolve(g.loadGetInitialProps(t,n)).then(function(e){return{pageProps:e}})}catch(r){return o.default.reject(r)}}}]),t}(d.Component);v.childContextTypes={router:m.default.object},t.default=v;var b=function(e){function t(){return(0,i.default)(this,t),(0,u.default)(this,(0,l.default)(t).apply(this,arguments))}return(0,c.default)(t,e),(0,s.default)(t,[{key:"componentDidMount",value:function(){this.scrollToHash()}},{key:"componentDidUpdate",value:function(){this.scrollToHash()}},{key:"scrollToHash",value:function(){var e=window.location.hash;if(e=!!e&&e.substring(1)){var t=document.getElementById(e);t&&setTimeout(function(){return t.scrollIntoView()},0)}}},{key:"render",value:function(){return this.props.children}}]),t}(d.Component);t.Container=b;var y=g.execOnce(function(){0});function k(e){var t=e.pathname,n=e.asPath,r=e.query;return{get query(){return y(),r},get pathname(){return y(),t},get asPath(){return y(),n},back:function(){y(),e.back()},push:function(t,n){return y(),e.push(t,n)},pushTo:function(t,n){y();var r=n?t:null,o=n||t;return e.push(r,o)},replace:function(t,n){return y(),e.replace(t,n)},replaceTo:function(t,n){y();var r=n?t:null,o=n||t;return e.replace(r,o)}}}t.createUrl=k},GcxT:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){var e=n("1TCz");return{page:e.default||e}}])},Mj6V:function(e,t,n){var r,o;void 0===(o="function"==typeof(r=function(){var e,t,n={version:"0.2.0"},r=n.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};function o(e,t,n){return e<t?t:e>n?n:e}function a(e){return 100*(-1+e)}n.configure=function(e){var t,n;for(t in e)void 0!==(n=e[t])&&e.hasOwnProperty(t)&&(r[t]=n);return this},n.status=null,n.set=function(e){var t=n.isStarted();e=o(e,r.minimum,1),n.status=1===e?null:e;var u=n.render(!t),l=u.querySelector(r.barSelector),c=r.speed,p=r.easing;return u.offsetWidth,i(function(t){""===r.positionUsing&&(r.positionUsing=n.getPositioningCSS()),s(l,function(e,t,n){var o;return(o="translate3d"===r.positionUsing?{transform:"translate3d("+a(e)+"%,0,0)"}:"translate"===r.positionUsing?{transform:"translate("+a(e)+"%,0)"}:{"margin-left":a(e)+"%"}).transition="all "+t+"ms "+n,o}(e,c,p)),1===e?(s(u,{transition:"none",opacity:1}),u.offsetWidth,setTimeout(function(){s(u,{transition:"all "+c+"ms linear",opacity:0}),setTimeout(function(){n.remove(),t()},c)},c)):setTimeout(t,c)}),this},n.isStarted=function(){return"number"==typeof n.status},n.start=function(){n.status||n.set(0);var e=function(){setTimeout(function(){n.status&&(n.trickle(),e())},r.trickleSpeed)};return r.trickle&&e(),this},n.done=function(e){return e||n.status?n.inc(.3+.5*Math.random()).set(1):this},n.inc=function(e){var t=n.status;return t?("number"!=typeof e&&(e=(1-t)*o(Math.random()*t,.1,.95)),t=o(t+e,0,.994),n.set(t)):n.start()},n.trickle=function(){return n.inc(Math.random()*r.trickleRate)},e=0,t=0,n.promise=function(r){return r&&"resolved"!==r.state()?(0===t&&n.start(),e++,t++,r.always(function(){0==--t?(e=0,n.done()):n.set((e-t)/e)}),this):this},n.render=function(e){if(n.isRendered())return document.getElementById("nprogress");l(document.documentElement,"nprogress-busy");var t=document.createElement("div");t.id="nprogress",t.innerHTML=r.template;var o,i=t.querySelector(r.barSelector),u=e?"-100":a(n.status||0),c=document.querySelector(r.parent);return s(i,{transition:"all 0 linear",transform:"translate3d("+u+"%,0,0)"}),r.showSpinner||(o=t.querySelector(r.spinnerSelector))&&f(o),c!=document.body&&l(c,"nprogress-custom-parent"),c.appendChild(t),t},n.remove=function(){c(document.documentElement,"nprogress-busy"),c(document.querySelector(r.parent),"nprogress-custom-parent");var e=document.getElementById("nprogress");e&&f(e)},n.isRendered=function(){return!!document.getElementById("nprogress")},n.getPositioningCSS=function(){var e=document.body.style,t="WebkitTransform"in e?"Webkit":"MozTransform"in e?"Moz":"msTransform"in e?"ms":"OTransform"in e?"O":"";return t+"Perspective"in e?"translate3d":t+"Transform"in e?"translate":"margin"};var i=function(){var e=[];function t(){var n=e.shift();n&&n(t)}return function(n){e.push(n),1==e.length&&t()}}(),s=function(){var e=["Webkit","O","Moz","ms"],t={};function n(n){return n=n.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(e,t){return t.toUpperCase()}),t[n]||(t[n]=function(t){var n=document.body.style;if(t in n)return t;for(var r,o=e.length,a=t.charAt(0).toUpperCase()+t.slice(1);o--;)if((r=e[o]+a)in n)return r;return t}(n))}function r(e,t,r){t=n(t),e.style[t]=r}return function(e,t){var n,o,a=arguments;if(2==a.length)for(n in t)void 0!==(o=t[n])&&t.hasOwnProperty(n)&&r(e,n,o);else r(e,a[1],a[2])}}();function u(e,t){var n="string"==typeof e?e:p(e);return n.indexOf(" "+t+" ")>=0}function l(e,t){var n=p(e),r=n+t;u(n,t)||(e.className=r.substring(1))}function c(e,t){var n,r=p(e);u(e,t)&&(n=r.replace(" "+t+" "," "),e.className=n.substring(1,n.length-1))}function p(e){return(" "+(e.className||"")+" ").replace(/\s+/gi," ")}function f(e){e&&e.parentNode&&e.parentNode.removeChild(e)}return n})?r.call(t,n,t,e):r)||(e.exports=o)},kyUL:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("vOnD").createGlobalStyle`
  body {
    background: ${({theme:e})=>e.color.background};
    font-size: ${({theme:e})=>e.font.fontSize.root};
    font-family: ${({theme:e})=>e.font.fontFamily.sansSerif};
    margin: 0;
    * {
      box-sizing: border-box;
    }

    /* Make clicks pass-through */
    #nprogress {
      pointer-events: none;
    }

    #nprogress .bar {
      background: ${({theme:e})=>e.color.primary};
      position: fixed;
      z-index: 1031;
      top: 0;
      left: 0;
      width: 100%;
      height: 4px;
    }

    /* Fancy blur effect */
    #nprogress .peg {
      display: block;
      position: absolute;
      right: 0px;
      width: 100px;
      height: 100%;
      box-shadow: 0 0 10px ${({theme:e})=>e.color.primary}, 0 0 5px ${({theme:e})=>e.color.primary};
      opacity: 1.0;

      -webkit-transform: rotate(3deg) translate(0px, -4px);
          -ms-transform: rotate(3deg) translate(0px, -4px);
              transform: rotate(3deg) translate(0px, -4px);
    }

    /* Remove these to get rid of the spinner */
    #nprogress .spinner {
      display: block;
      position: fixed;
      z-index: 1031;
      top: 1rem;
      right: calc(50% - calc(1rem / 2));
    }

    #nprogress .spinner-icon {
      width: 18px;
      height: 18px;
      box-sizing: border-box;

      border: solid 2px transparent;
      border-top-color: ${({theme:e})=>e.color.primary};
      border-left-color: ${({theme:e})=>e.color.primary};
      border-radius: 50%;

      -webkit-animation: nprogress-spinner 400ms linear infinite;
              animation: nprogress-spinner 400ms linear infinite;
    }

    .nprogress-custom-parent {
      overflow: hidden;
      position: relative;
    }

    .nprogress-custom-parent #nprogress .spinner,
    .nprogress-custom-parent #nprogress .bar {
      position: absolute;
    }

    @-webkit-keyframes nprogress-spinner {
      0%   { -webkit-transform: rotate(0deg); }
      100% { -webkit-transform: rotate(360deg); }
    }
    @keyframes nprogress-spinner {
      0%   { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    .bookTitle {
      font-style: italic;
    }
  }

  head {
    display: none;
  }
`;t.default=r},xHqa:function(e,t,n){var r=n("hfKm");e.exports=function(e,t,n){return t in e?r(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}}},[["GcxT","5d41","9da1"]]]);
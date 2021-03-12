(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{268:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),d=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=d(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(n),b=r,f=p["".concat(i,".").concat(b)]||p[b]||u[b]||o;return n?a.a.createElement(f,c(c({ref:t},l),{},{components:n})):a.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},82:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(8),o=(n(0),n(268)),i={id:"intro",title:"Hydra at Facebook"},c={unversionedId:"fb/intro",id:"version-1.0/fb/intro",isDocsHomePage:!1,title:"Hydra at Facebook",description:"Intro",source:"@site/versioned_docs/version-1.0/fb/intro.md",slug:"/fb/intro",permalink:"/docs/fb/intro",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/versioned_docs/version-1.0/fb/intro.md",version:"1.0",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1615524569},s=[{value:"Intro",id:"intro",children:[]},{value:"Release strategy",id:"release-strategy",children:[]},{value:"Maintaining this documentation",id:"maintaining-this-documentation",children:[]}],l={toc:s};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"intro"},"Intro"),Object(o.b)("p",null,"Facebook has multiple different environments, such as the ",Object(o.b)("strong",{parentName:"p"},"Internal FB Cluster"),", the ",Object(o.b)("strong",{parentName:"p"},"FAIR Cluster")," etc."),Object(o.b)("p",null,"The FB specific docs are describing the differences."),Object(o.b)("h3",{id:"release-strategy"},"Release strategy"),Object(o.b)("p",null,"Hydra's source of truth is the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebookresearch/hydra"}),"GitHub repo"),"."),Object(o.b)("p",null,"Hydra is developed using release branches. Once a new major is released, it is maintained in patch only mode.\nPrimary development is happening on the ",Object(o.b)("inlineCode",{parentName:"p"},"master")," branch."),Object(o.b)("p",null,"When a new major version of Hydra is released, a new release branch is created in Hydra repo. A corresponding Hydra version will be created inside ",Object(o.b)("inlineCode",{parentName:"p"},"github/facebookresearch/hydra_VERSION")," to track\nthe release branch."),Object(o.b)("p",null,"Hydra is trying hard to remain backward compatible between two subsequent versions and in most cases the upgrade will be smooth.\nThere could be some new deprecations warnings that should be fixed before the next major version."),Object(o.b)("h3",{id:"maintaining-this-documentation"},"Maintaining this documentation"),Object(o.b)("p",null,"This documentation lives in in the Hydra repo which is publicly accessible. The pages will only normally render on the internal\ncopy of the docs, but keep in mind that everyone can read those docs in the repo if they want to."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Do not put anything sensitive here, no root passwords or launch codes."),Object(o.b)("li",{parentName:"ol"},"If you are in need to have sensitive Hydra related documentation please reach out to the maintainers of Hydra for help.")))}d.isMDXComponent=!0}}]);
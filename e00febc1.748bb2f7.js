(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{207:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return o})),r.d(n,"metadata",(function(){return c})),r.d(n,"rightToc",(function(){return u})),r.d(n,"default",(function(){return b}));var t=r(2),a=r(7),i=(r(0),r(236)),o={id:"intro",title:"Overview",sidebar_label:"Introduction"},c={unversionedId:"configure_hydra/intro",id:"version-0.11/configure_hydra/intro",isDocsHomePage:!1,title:"Overview",description:"Many things in Hydra can be customized, this includes:",source:"@site/versioned_docs/version-0.11/configure_hydra/Intro.md",slug:"/configure_hydra/intro",permalink:"/docs/0.11/configure_hydra/intro",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/versioned_docs/version-0.11/configure_hydra/Intro.md",version:"0.11",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1603040833,sidebar_label:"Introduction",sidebar:"version-0.11/docs",previous:{title:"Specializing configuration",permalink:"/docs/0.11/patterns/specializing_config"},next:{title:"Customizing logging",permalink:"/docs/0.11/configure_hydra/logging"}},u=[{value:"Runtime variables",id:"runtime-variables",children:[]}],l={rightToc:u};function b(e){var n=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},l,r,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Many things in Hydra can be customized, this includes:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Logging configuration"),Object(i.b)("li",{parentName:"ul"},"Run and Multirun output directory patterns"),Object(i.b)("li",{parentName:"ul"},"Application help (--help and --hydra-help)")),Object(i.b)("p",null,"Hydra can be customized using the same methods you are already familiar with from the tutorial.\nYou can include some Hydra config snippet in your own config to override it directly, or compose in different\nconfigurations provided by plugins or by your own code. You can also override everything in Hydra from the command\nline just like with your own configuration."),Object(i.b)("p",null,"The Hydra configuration actually lives in the same config object as your configuration, but is removed prior to running\nyour function to reduce confusion.\nYou can view the configuration with ",Object(i.b)("inlineCode",{parentName:"p"},"--cfg hydra|job|all")),Object(i.b)("p",null,"The Hydra configuration itself is composed from multiple config files. here is a partial list:"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yaml"}),"defaults:\n  - hydra/job_logging : default     # Job's logging config\n  - hydra/launcher: basic           # Launcher config\n  - hydra/sweeper: basic            # Sweeper config\n  - hydra/output: default           # Output directory\n")),Object(i.b)("p",null,"You can view the Hydra config structure ",Object(i.b)("a",Object(t.a)({parentName:"p"},{href:"https://github.com/facebookresearch/hydra/tree/0.11_branch/hydra/conf"}),"here"),"."),Object(i.b)("p",null,"This is a subset of the composed Hydra configuration node:"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yaml"}),"hydra:\n  run:\n    # Output directory for normal runs\n    dir: ./outputs/${now:%Y-%m-%d_%H-%M-%S}\n  sweep:\n    # Output directory for sweep runs\n    dir: /checkpoint/${env:USER}/outputs/${now:%Y-%m-%d_%H-%M-%S}\n    # Output sub directory for sweep runs.\n    subdir: ${hydra.job.num}_${hydra.job.id}\n")),Object(i.b)("h2",{id:"runtime-variables"},"Runtime variables"),Object(i.b)("p",null,"The following variables are populated at runtime.\nYou can access them as config variables."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"hydra.job"),":"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"hydra.job.name")," : Job name, defaults to python file name without suffix. can be overridden."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"hydra.job.override_dirname")," : Pathname derived from the overrides for this job"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"hydra.job.num")," : job serial number in sweep"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"hydra.job.id")," : Job ID in the underlying jobs system (Slurm etc) ")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"hydra.runtime"),":"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"hydra.runtime.version"),": Hydra's version"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"hydra.runtime.cwd"),": Original working directory the app was executed from")))}b.isMDXComponent=!0},236:function(e,n,r){"use strict";r.d(n,"a",(function(){return d})),r.d(n,"b",(function(){return m}));var t=r(0),a=r.n(t);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function u(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),b=function(e){var n=a.a.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},d=function(e){var n=b(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},p=a.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,i=e.originalType,o=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=b(r),p=t,m=d["".concat(o,".").concat(p)]||d[p]||s[p]||i;return r?a.a.createElement(m,c(c({ref:n},l),{},{components:r})):a.a.createElement(m,c({ref:n},l))}));function m(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=r.length,o=new Array(i);o[0]=p;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:t,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);